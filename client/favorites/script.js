Template.favorites.onCreated(function() {
	// Meteor.subscribe('getfavProducts');
  Meteor.subscribe("getUserFavorites",Meteor.userId());
  Meteor.subscribe('getBottleSizes');
  // Meteor.subscribe('getStores');
  setTimeout(function(){
        $('.itemsfav').flyto({
          item      : 'li',
          target    : '.cartssa',
          button    : '.my-btn'
        });
      },1000);
});
Template.favorites.onRendered(function() {
  $("body").css("overflow","auto");
  
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  // $('.common-form').css('height', c);

  $(window).on("scroll", function () {
  if ($(window).scrollTop() > 40) {
    $(".serch-homepage").addClass("active");
    // $(".homeFilterButton").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".serch-homepage").removeClass("active");
    // $(".homeFilterButton").removeClass("active");
  }
  // topPicksList = new ReactiveVar([]);
});

  
});
Template.favorites.helpers({
	getfavProducts: function(){
    var favProdsIds = [];
    var favProductsAll = [];
    var favProds = favProducts.find({status: true, userId: Meteor.userId()}).fetch();
    for(var i = 0; i < favProds.length; i++){
      //console.log(i);
      //console.log("favProds[i].productId",favProds[i].productId);
      favProdsIds.push(favProds[i].productId);
    }
    //console.log("favProdsIds",favProdsIds);
    Meteor.subscribe("getSpecificProducts", favProdsIds);
    for(var j=0; j < favProds.length; j++) {
      // console.log("favProds",favProds);
      favProductsAll.push(products.findOne({_id:favProds[j].productId}));
      // console.log("favProductsAll"+[j]+" ",products.findOne({_id:favProds[j].productId}));
    }
    // console.log("favProductsAll",favProductsAll);
    // return favProducts.find({status: true, userId: Meteor.userId()}).fetch();
    return favProductsAll;
  },
  getproductName: function(favProd){
    // console.log("favProd",favProd);
  	var prodId = favProd.productId;
    if(products.findOne({_id: prodId}) != null)
    {
      // console.log("123",products.findOne({_id: prodId}).productName);
  	  return products.findOne({_id: prodId}).productName;
    }
  },
  getproductPrice: function(favProd){
  	  return products.findOne({_id: prodId.productId}).price;
  },
  // getproductQuantity: function(favProd){
  // 	var prodId = favProd.productId;
  //   if(products.findOne({_id: prodId}) != null)
  //   {
  // 	  return products.findOne({_id: prodId}).quantity;

  //   }
  // },

  // New code add for quantity
  bottlesize: function(n){
    // console.log("nnnn",n);
    var getproductQuantity = products.findOne({_id:n}).quantity;
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
  getProductImage: function(favProd){
    var prodId = favProd;
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
        return "/images/noimage.png";
      }
    }
    else
    {
      return "/images/noimage.png";
    }

    // var image = products.findOne({_id: prodId}).productImage;
    // var imageUrl = image.split("upload")
    // imageUrl = imageUrl[0] + "upload/w_200,h_500" + imageUrl[1]
    // return imageUrl;
  },
  outOfStock: function(favproduct){
    var productId = favproduct.productId
    var productAvailable = validateProductAvailable(productId);
    if(productAvailable){
      return true;
    }
  },
  storename: function(favProd){
    if(products.findOne({_id: favProd}) != null)
    {
      var storeId = products.findOne({_id: favProd});
      if(storeId !== null)
      {
        storeId = storeId.storeName;
        var a = stores.findOne({_id: storeId});
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
  }
});

Template.favorites.events({
	'click #favProducts': function (e) {
  	e.preventDefault();
  	var favproductId = $(e.target).data("id");
    //console.log("favproductId",favproductId);
    // favProducts.update({ _id: favproductId },{ $set: { 'status': false }},function(err,res));
    var userId = Meteor.userId();
    Meteor.call("unfavproduct",favproductId,userId, function(err,res){
      if(err){
        console.log(err);
      }
      else{
        //console.log("res",res);
        Toast.success("Product Removed from favorites!"); 
      }
    })
    // alert("Product Removed from favorites!");
  },

  'click #addFavCart':function(e){
    e.preventDefault();
    var storeId;
    var a = products.findOne({_id: $(e.target).data("attr")});
    if(Session.get("storeId") == undefined)
    {
      if(a != null)
      {
        if(typeof a.storeName !== "undefined")
        {
           storeId = a.storeName;
        }
      }
    }
    else
    {
       storeId = Session.get("storeId");
    }
    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({productId: productId, userId: userId});
    if(typeof presentProduct !== "undefined")
    {
      if(presentProduct !== null)
      {
        var currentQuantityInCart = parseInt(presentProduct.productQuantity);
        var productRemainingQuantity = a.productsAvailable;
        Meteor.call("updateCart", presentProduct, productId, userId, function(err, res){
          if(err){
            alert(err.reason);
          }
          else{
            // alert("Product Updated Sucessfully!");
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
              Session.set("storeId",  a.storeName);
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
              Session.set("storeId",  a.storeName);
              // alert("Product Added to Cart Sucessfully!");
              // Toast.success("Product Added to Cart Sucessfully!");
            }
          }
        });
      }
  }
});
