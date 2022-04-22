Template.searchResult.onCreated(function(){
	//Meteor.subscribe('getBanners');
	// Meteor.subscribe('getProducts');
	Meteor.subscribe("getUserFavorites",Meteor.userId());
	Meteor.subscribe('getStores');
	Meteor.subscribe('getCarts');
});
Template.searchResult.onRendered(function(){
  // PostSubs.clear();
  window.scrollTo(0,0);
	// $("body").css("overflow","auto");
	var a = $(window).height();
	var b = $('.main-header').outerHeight();
  var d =$('.serch-homepage').outerHeight();
	var c = a - b -d;
	// $('.content.common-form.banner-product-list.favorites-list').css('height', c);
	Session.set("listingPage",10);
  $('.topPortion').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          var currentVal  = parseInt(Session.get("listingPage"));
          currentVal  = currentVal + 10;
          Session.set("listingPage",currentVal);
        }
  });
	// $(".topPortion").scroll(function() {
 //    console.log("test");
	// 	if(parseInt($(".topPortion").scrollTop() + $(".topPortion").height()) == parseInt($(document).height())) 
	// 	{
	// 	  var currentVal  = parseInt(Session.get("listingPage"));
	// 	  currentVal  = currentVal + 10;
	// 	  Session.set("listingPage",currentVal);
	// 	}
	// });
});
Template.searchResult.helpers({
  bottleTypeName:function(bottleTypeName) {
    var a = bottleTypes.findOne({_id:bottleTypeName});
    if(a != null){
      return a.BottletypeName;
    }   
  },
	getBrandDetails: function() {
		var data = brands.findOne({
			"brandName": Router.current().params._id
		});
    var storeId = Session.get("storeId");
    console.log("data",data);
		if(typeof data !== "undefined")
		{
      if(storeId !== null){
        console.log("storeId",storeId);
        if(storeId !== undefined){
          console.log("storeId1",storeId);
          var productsIDS = products.find({"storeName": storeId,"brandName":data._id},{limit:Session.get("listingPage")}).fetch();
          return productsIDS;
        }
        else{
          console.log("storeId2",storeId);
          var productsIDS = products.find({"brandName":data._id},{limit:Session.get("listingPage")}).fetch();
          if(productsIDS.length > 0){
            return productsIDS;
          }
          else{
            var searchVal = Router.current().params._id;
            Meteor.subscribe('getProductsForSearch',decodeURI(searchVal));
            if(storeId !== null){
              if(storeId !== undefined){
                // var productList = products.find({"storeName": storeId},{"productName": new RegExp(searchVal,"i")},{limit:Session.get("listingPage")}).fetch();      
                var productList = products.find({"storeName": storeId,"productName": {$regex: new RegExp(decodeURI(searchVal),"i")}},{limit:Session.get("listingPage")}).fetch(); 
                //console.log("productList",productList);
                console.log("productList1231",productList);
                return productList;
              }
              else{
                var productList = products.find({"productName": new RegExp(decodeURI(searchVal),"i")},{limit:Session.get("listingPage")}).fetch();
                //console.log("productList",productList);
                console.log("productList1232",productList);
                return productList;
              }     
            }
            else{
              var productList = products.find({"productName": new RegExp(decodeURI(searchVal),"i")},{limit:Session.get("listingPage")}).fetch();
              console.log("productList1233",productList);
              return productList;
            }
          }  
        }
      }
      else{
        var productsIDS = products.find({"brandName":data._id},{limit:Session.get("listingPage")}).fetch();
        if(productsIDS.length > 0){
          return productsIDS;
        }
        else{
          var searchVal = Router.current().params._id;
          Meteor.subscribe('getProductsForSearch',decodeURI(searchVal));
          if(storeId !== null){
            if(storeId !== undefined){
              // var productList = products.find({"storeName": storeId},{"productName": new RegExp(searchVal,"i")},{limit:Session.get("listingPage")}).fetch();      
              var productList = products.find({"storeName": storeId,"productName": {$regex: new RegExp(decodeURI(searchVal),"i")}},{limit:Session.get("listingPage")}).fetch(); 
              //console.log("productList",productList);
              console.log("productList1231",productList);
              return productList;
            }
            else{
              var productList = products.find({"productName": new RegExp(decodeURI(searchVal),"i")},{limit:Session.get("listingPage")}).fetch();
              //console.log("productList",productList);
              console.log("productList1232",productList);
              return productList;
            }     
          }
          else{
            var productList = products.find({"productName": new RegExp(decodeURI(searchVal),"i")},{limit:Session.get("listingPage")}).fetch();
            console.log("productList1233",productList);
            return productList;
          }
        }
      }			
      //console.log("productsIDS", productsIDS);      
		}
    else{
      console.log("search value",Router.current().params._id);
      // products.find({"productName": new RegExp(searchVal,"i")}).fetch();
      var searchVal = Router.current().params._id;
      Meteor.subscribe('getProductsForSearch',decodeURI(searchVal));
      if(storeId !== null){
        if(storeId !== undefined){
          // var productList = products.find({"storeName": storeId},{"productName": new RegExp(searchVal,"i")},{limit:Session.get("listingPage")}).fetch();      
          var productList = products.find({"storeName": storeId,"productName": {$regex: new RegExp(decodeURI(searchVal),"i")}},{limit:Session.get("listingPage")}).fetch(); 
          //console.log("productList",productList);
          console.log("productList1231",productList);
          return productList;
        }
        else{
          var productList = products.find({"productName": new RegExp(decodeURI(searchVal),"i")},{limit:Session.get("listingPage")}).fetch();
          //console.log("productList",productList);
          console.log("productList1232",productList);
          return productList;
        }     
      }
      else{
        var productList = products.find({"productName": new RegExp(decodeURI(searchVal),"i")},{limit:Session.get("listingPage")}).fetch();
        console.log("productList1233",productList);
        return productList;
      }
      
    }
	},
	getProductDetails: function(n){
		var productData = products.findOne({
			"_id": n
		});
    // console.log("n",n);
		if(typeof productData !== "undefined")
		{
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
				imageUrl = imageUrl[0] + "upload" + imageUrl[1];
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
  getQuantity: function(prodId){
      var getproductQuantity = products.findOne({_id:prodId}).quantity;
      if(getproductQuantity == null || getproductQuantity == undefined){
        return ' ';
    }
    else{
      var getBottleSize = bottleSizes.findOne({
      _id: getproductQuantity
      });
      if(getBottleSize == null)
      {
        return ' ';
      }
      else
      {
        return getBottleSize.sizeValue;
      }
    }
    
  },
});
Template.searchResult.events({
	'click #addCart':function(e){
    e.preventDefault();
    var a = products.findOne({_id: $(e.target).data("attr")});
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
              Session.set("storeId",  a.storeName);
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