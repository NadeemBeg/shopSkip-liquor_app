Template.bannerProducts.onCreated(function(){
	Meteor.subscribe('getBanners');
	// Meteor.subscribe('getProducts');
	Meteor.subscribe("getUserFavorites",Meteor.userId());
	Meteor.subscribe('getStores');
	Meteor.subscribe('getCarts');
  setTimeout(function(){
        $('.itemsbanner').flyto({
          item      : 'li',
          target    : '.cartssa',
          button    : '.my-btn'
        });
      },1000);
});
Template.bannerProducts.onRendered(function(){
	
	Session.set("listingPage",10);
	$(".topPortion").scroll(function() {
		if(parseInt($(window).scrollTop() + $(window).height()) == parseInt($(document).height())) 
		{
		  var currentVal  = parseInt(Session.get("listingPage"));
		  currentVal  = currentVal + 10;
		  Session.set("listingPage",currentVal);
      setTimeout(function(){
        $('.itemsbanner').flyto({
          item      : 'li',
          target    : '.cartssa',
          button    : '.my-btn'
        });
      },1000);
		}
	});
});
Template.bannerProducts.helpers({
	getBannerDetails: function() {
		var data = banner.findOne({"_id": Template.instance().data.id});    
    var productLsit = data.productIds;

		if(typeof productLsit !== "undefined")
		{
      var productsQueue = [];
      for(var i = 0; i < productLsit.length; i++)
      {
        if(productLsit[i] != null){
          productsQueue.push(productLsit[i].id);
        }        
      }
      //console.log("productsQueue",productsQueue);
      Meteor.subscribe("getSpecificProducts", productsQueue, function(){
        // console.log("trest", products.find().fetch());
      });
      //console.log("data",data);
			return data;
		}
	},
	getProductDetails: function(n){
    if(n != null){
      var productData = products.findOne({"_id": n});
      // console.log("n",n);
      if(typeof productData !== "undefined")
      {
        return productData;
      }
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
  productQuantity:function(id){
    // console.log("productQuantity id", id);
    var prodQuantity = bottleSizes.findOne({_id:id});
    return prodQuantity.sizeValue;
  },
});
Template.bannerProducts.events({
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