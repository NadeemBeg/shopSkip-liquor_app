Template.myChoiceProduct.onCreated(function() {
	// Meteor.subscribe('getProducts', Session.get("storeId"));
  Meteor.subscribe("getUserFavorites",Meteor.userId());
  Meteor.subscribe('getReviews');
  Meteor.subscribe('getCarts');
  Meteor.subscribe('getStores');
  // Meteor.subscribe('getProducts');

});
Template.myChoiceProduct.onRendered(function() {
  $("body").css("overflow","auto");
  
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  // $('.content.common-form.favorites-list').css('height', c);
  Session.set("listingPage",10);

  $(window).scroll(function() {
    var scrollVal = parseInt($(window).scrollTop() + $(window).height());
    var scrollVal1 = parseInt($(document).height());
    var scrollFinal = scrollVal1 - scrollVal;
    if(scrollFinal == 0 || scrollFinal == 1) 
    {
      var currentVal  = parseInt(Session.get("listingPage"));
      currentVal  = currentVal + 10;
      Session.set("listingPage",currentVal);
    }
  });

	/*$('input[type="rangeslide"]').ionRangeSlider({
    min: 0,
    max: 1000,
    step: 0.1
  });*/
});
Template.myChoiceProduct.helpers({
	categories: function(){
    return categories.find().fetch();
  },
  productTypes: function(){
    return productTypes.find().fetch();
  },
  stores: function(){
    return stores.find().fetch();
  },
  brands: function(){
    return brands.find().fetch();
  },
	getProducts:function(){
    var orderFind = Router.current().params._id;    
    Session.set("CurrentOrderId",orderFind);
    var outofStockId = Router.current().params._id2;
    Session.set("currentOutOfStockProdID",outofStockId);
    var orderRecord = orders.findOne({_id:orderFind});
    if(orderRecord != null)
    {
      var storeFind = orderRecord.storeId;
      var productIds = orderRecord.productIds;
      var outOfStockIds = [];
      for(var i = 0; i < productIds.length; i++)
      {
        if(productIds[i].outOfStock == true)
        {
          outOfStockIds.push(productIds[i].id);
        }
      }
      // Meteor.subscribe("getSpecificProducts", outOfStockIds);
      Meteor.subscribe('getProducts',storeFind);
      var productss = products.find({
        "storeName": storeFind,
        "_id": {
          $nin: outOfStockIds
        }
      },{limit:Session.get("listingPage")}).fetch();
      //console.log(productss);
      return productss;
    }
    
    // console.log("orderRecord",orderRecord.productIds.length);
    
   /* console.log("products",productss.length);
    var totalProducts = [];
    var proOutOFStoctArr = [];
    for(i=0; i<=orderRecord.productIds.length; i++){
      var prodOutStock = orderRecord.productIds[i];
      if(prodOutStock && prodOutStock.outOfStock)
      {
        var outOfStockProd = prodOutStock.outOfStock;

        // console.log("outOfStockProd",outOfStockProd); 
        if (outOfStockProd == true) {
          // console.log(orderRecord.productIds[i]);
          proOutOFStoctArr.push(orderRecord.productIds[i].id);
        }
        else if((outOfStockProd == false)){
          // console.log(orderRecord.productIds[i]);
        }
      } else {
        console.log("Error",prodOutStock);
      }
    }
    console.log("proOutOFStoctArr",proOutOFStoctArr);
    
    for(i=0; i<=proOutOFStoctArr.length; i++){
      for(j=0; j<productss.length; j++){
        if(proOutOFStoctArr[i] == productss[j]._id){
          console.log(proOutOFStoctArr[i] +"="+ productss[j]._id);
          productss.splice(productss[j]._id, 1); 
        } 
      }
      console.log('Array after removing the element = '+productss.length);
    }

    return productss;*/

    // return products.find({storeName: storeFind},{limit:Session.get("listingPage")}).fetch();
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
  outOfStock: function(product){
    var productId = product._id
    var productAvailable = validateProductAvailable(productId);
    if(productAvailable){
      return true;
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
  productQuantity:function(id){
    // console.log("productQuantity id", id);
    var prodQuantity = bottleSizes.findOne({_id:id});
    return prodQuantity.sizeValue;
  },
});

Template.myChoiceProduct.events({
  'click #loadMoreButton': function(e)
  {
    e.preventDefault();
    var currentVal  = parseInt(Session.get("listingPage"));
    currentVal  = currentVal + 10;
    Session.set("listingPage",currentVal);
  },
  'click #filter_product': function (e) {
  	e.preventDefault();
  	$("#myfilter").modal("hide");
    Session.set('category', $("#category").val());
    Session.set('type', $("#type").val());
    Session.set('storename', $("#storename").val());
    Session.set('brandName', $("#brandname").val());
    Session.set('price', $(".irs-hidden-input").val());
   $(window).scrollTop(0);
    Session.set("listingPage",10);
  },
  'click #reset_product': function (e) {
  	e.preventDefault();
    $("#myfilter").modal("hide");
    Session.set("listingPage",10);
  	Session.set('category', undefined);
    Session.set("productsArray", undefined);
    $(window).scrollTop(0);
    Session.set("listingPage",10);
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
  },

  
  'click #addProductInOrder' :function(e){
    e.preventDefault();
    //console.log( $(e.target).attr("data-prodId"));
    var alternateProdCost, alternateProdPrice, alternateProdTax, selectProdPrice ,selectProdTax, selectProdCost, totalPriceWithAlt, totalTaxWithAlt;
    var selectproductId = products.findOne({_id: $(e.target).attr("data-prodId")});
    //console.log("productId",selectproductId);
    if(selectproductId != null)
    {
      var selectProductName = selectproductId.productName;
      var outOfStockProductID = Router.current().params._id2;
      // console.log("outOfStockProductID",outOfStockProductID);
      var orderID =Router.current().params._id;

      var productsIDsArr = orders.findOne({_id: orderID}).productIds;

        Meteor.call("updateProduct",orderID,selectproductId,selectProductName,outOfStockProductID,function(err,res){
          if(err){
            console.log(err);
          }
          else{
            //console.log(res);
            var total = 0;
            var orderDetials = orders.findOne({_id: orderID});
            //console.log("orderDetials",orderDetials);
            var productIds = orderDetials.productIds;
            //console.log("productIds",productIds);
            for(var i =0; i<productIds.length; i++){
              if(productIds[i].alternateProdId != undefined){
                //console.log("productIds[i].alternateProdId",productIds[i].alternateProdId);
                var prodPrice1 = products.findOne({_id:productIds[i].alternateProdId});
                var prodPrice = prodPrice1.price;
                //console.log("prodPrice",prodPrice);
                total = Number(total) + (Number(prodPrice) * productIds[i].alternateProdQuantity); 
                if(typeof prodPrice1.productTax !== "undefined")
                {
                  if(prodPrice1.productTax > 0)
                  {
                    var oneProductTax = (prodPrice1.price * prodPrice1.productTax) / 100;
                    var finalTax = oneProductTax * productIds[i].alternateProdQuantity;
                    total += finalTax;
                  }
                }
                //console.log("total",total);
              }
              else{
                var prodPrice1 = products.findOne({_id:productIds[i].id});
                var prodPrice = prodPrice1.price;
                total = Number(total) + Number(prodPrice * productIds[i].quantity);
                if(typeof prodPrice1.productTax !== "undefined")
                {
                  if(prodPrice1.productTax > 0)
                  {
                    var oneProductTax = (prodPrice1.price * prodPrice1.productTax) / 100;
                    var finalTax = oneProductTax * productIds[i].quantity;
                    total += finalTax;
                  }
                } 
              }
            }
            total = parseFloat(total).toFixed(2);
            Meteor.call("onlyTotalUpdate",orderID,total, function(err,res){
              if(err){
                console.log(err);
              }
              else{
                //console.log(res);
                Router.go("/receiptPage/" + Router.current().params._id);
              }
            });
          }
        });
      // }
    }
    
  }
});
