Template.advSliderProducts.onCreated(function(){
	Meteor.subscribe('getBanners');
	// Meteor.subscribe('getProducts');
	Meteor.subscribe("getUserFavorites",Meteor.userId());
	Meteor.subscribe('getStores');
	Meteor.subscribe('getCarts');
  Meteor.subscribe('getCategories');
  Meteor.subscribe('getBottleSizes');
  Meteor.subscribe('getBottleTypes');
  Meteor.subscribe('getAdvSliderProducts');
  
});
Template.advSliderProducts.onRendered(function(){
	$("body").css("overflow","auto");
	var a = $(window).height();
	var b = $('.main-header').outerHeight();
	var c = a - b;
	// $('.content.common-form.banner-product-list').css('height', c);
	Session.set("listingPage",10);
	$(window).scroll(function() {
		if(parseInt($(window).scrollTop() + $(window).height()) == parseInt($(document).height())) 
		{
		  var currentVal  = parseInt(Session.get("listingPage"));
		  currentVal  = currentVal + 10;
		  Session.set("listingPage",currentVal);
		}
	});
});
Template.advSliderProducts.helpers({
	getPosterDetails: function() {
		// var data = posters.findOne({
		// 	"_id": Template.instance().data.id
		// });
    var idsArr = [];
    var selectCategoryPoster = Session.get('category');
    // console.log("selectCategoryPoster",selectCategoryPoster);
    var selectPosterProd = Session.get('productsArray');
    if(selectCategoryPoster != undefined && selectCategoryPoster != null){
      console.log("selectCategoryPoster",selectCategoryPoster);
      Meteor.subscribe("getSpecificCategoryProducts", selectCategoryPoster,Session.get("listingPage"));
      var productListArr = products.find({categoryType : selectCategoryPoster}).fetch();
      console.log("productListArr",productListArr);
      for(var i = 0; i < productListArr.length; i++){
        idsArr.push(productListArr[i]._id);
      }
      // Meteor.subscribe("getSpecificProducts", idsArr);
      
      return idsArr;
    }
    else{
      if(selectPosterProd != undefined && selectPosterProd != null)
      {
        console.log("selectPosterProd",selectPosterProd);
        Meteor.subscribe("getSpecificProducts", selectPosterProd);
        var productListArr = products.find({"_id": {$in: selectPosterProd}}).fetch();
        console.log("productListArr for proucts",productListArr)
        for(var i = 0; i < productListArr.length; i++){
          idsArr.push(productListArr[i]._id);
        }
        return idsArr;
      }
    }   
 
	},
  getPosterDetails1: function() {
    // var data = posters.findOne({
    //  "_id": Template.instance().data.id
    // });
    var idsArr = [];
    var selectCategoryPoster = Session.get('category');
    // console.log("selectCategoryPoster",selectCategoryPoster);
    var selectPosterProd = Session.get('productsArray');
    if(selectCategoryPoster == undefined || selectCategoryPoster == null){
    }
    else{
        // console.log("selectCategoryPoster",selectCategoryPoster);
        var productsArr = products.find({categoryType : selectCategoryPoster}).fetch();
        return productsArr;
    }
    
 
  },
	getProductDetails: function(n){
		var productData = products.findOne({
			"_id": n
		});
    var prodArr = products.find({"_id":n}).fetch();
    // console.log("prodArr",prodArr);
    // console.log("productData",productData);
		if(typeof productData !== "undefined")
		{
      // console.log("productData",productData);
			return productData;
		}
	},
	prodImage: function(prodId){
	    var product = products.findOne({_id: prodId});
		if(typeof product !== "undefined")
		{
			if(typeof product.productImage !== "undefined")
			{
				var image = product.productImage;
				var imageUrl = image.split("upload")
				imageUrl = imageUrl[0] + "upload" + imageUrl[1]
        imageUrl = imageUrl.replace("http://","https://");
        var ext = imageUrl.substr(imageUrl.lastIndexOf(".")+1);
        if(ext == "webp")
        {
          ext = "png";
          imageUrl = imageUrl.substr(0,imageUrl.lastIndexOf("."));
          imageUrl += "." + ext;
        }
				return imageUrl;
			}
			else{
				return "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
			}
		}
		else
		{
			return "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
		}
	},
	getStatus: function() {
	    var a = favProducts.find({userId:Meteor.userId(),productId:this._id});
		if(a.count() > 0)
		{
			a = a.fetch()[0];
			if(typeof a.status !== "undefined")
			{
				if(a.status == true)
				{
				  return true;
				}
				else
				{
				  return false;
				}
			}
			else
			{
				return false
			}
		}
		else
		{
		  return false;
		}
	},
	getStatusString: function() {
	    var a = favProducts.find({userId:Meteor.userId(),productId:this._id});
	    if(a.count() > 0)
	    {
	      a = a.fetch()[0];
	      if(typeof a.status !== "undefined")
	      {
	        return a.status;
	      }
	      else
	      {
	        return "false"
	      }
	    }
	    else
	    {
	      return "false";
	    }
	  },
	storename: function(storeId){
    if(typeof storeId.storeName !== "undefined")
    {
      if(storeId.storeName !== "")
      {
        var a = stores.findOne({_id: storeId.storeName});
        if(a != null)
        {
          return a.storeName;
        }
        else
        {
          return false;
        }
      }
      else
        {
          return false;
        }
    }
    else
    {
      return false;
    }
  },
  productQuantity:function(id){
    // console.log("productQuantity id", id);
    var prodQuantity = bottleSizes.findOne({_id:id});
    return prodQuantity.sizeValue;
  },
});
Template.advSliderProducts.events({
	'click #addCartPoster':function(e){
    e.preventDefault();
    var a = products.findOne({_id: $(e.target).data("attr")});
    //console.log("attrr", $(e.target).data("attr"));
    if(Session.get("storeId") == undefined)
    {
      if(a != null)
      {
        if(typeof a.storeName !== "undefined")
        {
          var storeId = a.storeName;
          Session.set("storeId",  a.storeName);
        }
      }
    }
    else
    {
      // var storeId = Session.get("storeId");
      var storeId = a.storeName;
    }
    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({productId: productId, userId: userId});
    if(typeof presentProduct !== "undefined")
    {
      if(presentProduct !== null)
      {
        Meteor.call("updateCart", presentProduct, productId, userId, function(err, res){
            if(err){
              alert(err.reason);
            }
            else{
              // alert("Product Updated Sucessfully!");
              // Session.set("storeId",  a.storeName);
              // Toast.success("Product Updated Sucessfully!");
            }
          })
      }
      else
      {

        Meteor.call("createCart", productId, userId, storeId, function(err, res){
          if(err){
            alert(err.reason);
          }
          else{
            if(res == "false"){
              // alert("You cannot select product from another store..!")
              Toast.info("You cannot select product from another store..!");
            }
            else
            {
              // alert("Product Added to Cart Sucessfully!");
              // Toast.success("Product Added to Cart Sucessfully!");
            }
          }
        });
      }
    }
    else
      {
        Meteor.call("createCart", productId, userId, storeId, function(err, res){
          if(err){
            alert(err.reason);
          }
          else{
            if(res == "false"){
              // alert("You cannot select product from another store..!")
              Toast.info("You cannot select product from another store..!");
            }
            else
            {
              // alert("Product Added to Cart Sucessfully!");
              // Toast.success("Product Added to Cart Sucessfully!");
            }
          }
        });
      }
  },
  'click #favProduct': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");
    if(Session.get("storeId") == undefined || typeof Session.get("storeId") == "undefined")
    {
      var storeId = products.findOne({_id: productId});
      if(storeId !== null)
      {
        storeId = storeId.storeName;
        // Session.set("storeId", storeId);
      }
    }
    else
    {
      var storeId = Session.get("storeId");
    }
    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({productId: productId});
    var presentfalse = favProducts.findOne({status: false});
    if(event)
    {
      var action = false;
    }
    else
    {
      var action = true;
    }
    Meteor.call("updateFavProduct", storeId, Meteor.userId(), action, productId, function(err,res){
      if(err)
      {
        console.log(err.reason);
      }
      else
      {
        if(res)
        {
          if(action)
          {
            $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
          }
          else
          {
            $('[data-id="'+productId+'"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    })
    // if(presentRecord)
    //   {
    //     if(presentfalse)
    //     {
    //       Meteor.call("updateSameFavProduct", presentfalse, $(e.target).data("id"), Meteor.userId(), function(err, res){
    //         if(err){
    //           alert(err.reason);
    //         }
    //         else{
    //           if(res){
    //             $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
    //             // $('#favProduct [data-id="'+productId+'"]').attr('src', "/images/redHeart.png");
    //             alert("Product added to Favorite!");
    //           }
    //         }
    //       })
    //     }
    //     else
    //     {
    //       Meteor.call("updateFavProduct", presentRecord, $(e.target).data("id"), Meteor.userId(), function(err, res){
    //         if(err){
    //           alert(err.reason);
    //         }
    //         else{
    //           if(res){
    //             $('[data-id="'+productId+'"]').attr('src', '/images/favorites-heart.png');
    //             alert("Product removed from Favorite!");
    //           }
    //         }
    //       })
    //     }
        
    //   }
    // else
    //   {
    //     Meteor.call("insertFavProduct", $(e.target).data("id"), Meteor.userId(), function(err, res){
    //       if(err){
    //         alert(err.reason);
    //       }
    //       else{
    //         if(res){
    //           $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
    //           alert("Product added as Favorite sucessfully!");
    //         }
    //       }
    //     })
    //   }
  },

});