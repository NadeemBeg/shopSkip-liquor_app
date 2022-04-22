Template.cart.onCreated(function() {
   Meteor.subscribe('getStores');
   Meteor.subscribe('getOrders');
  Meteor.subscribe('getCartsByUserId', Meteor.userId(), function(){
    var data = carts.find({"userId": Meteor.userId()}).fetch();
    var productsQueue = [];
    for(var i = 0; i < data.length; i++)
    {
      productsQueue.push(data[i].productId);
    }
    //console.log("productsQueue",productsQueue);
    Meteor.subscribe("getSpecificProducts", productsQueue, function(){
      //console.log("trest", products.find().fetch());
    });
  });
  //Meteor.subscribe('getProducts');
});
Template.cart.onRendered(function() { 

  // setTimeout(function(){
    $("body").css("overflow","auto");
    $('.content.common-form.cartPage .container').css('overflow', "auto");
    /*var v = setInterval(function(){
      if($('.content.common-form.cartPage .container').length > 0)
      {
        var a = $(window).height();
        var b = $('.main-header').outerHeight();
        var d = $(".place-orders").outerHeight();
        var e = $(".serch-homepage").outerHeight();
        
        var c = a - b - d -25;
        $(".yourcart").css('height', a);
        $('.content.common-form.cartPage .container').css('height', c);
        
        clearInterval(v);
      }
    },100); */
    
    if(Session.get("orderTypeSelected") == undefined)
    {
      Session.set("orderTypeSelected", "pickup");
      $(".tabItems").removeClass("activeTab");
      $("div[data-selection='pickup']").addClass("activeTab");
      Session.set("deliveryFees", 0);
    }
    else
    {
      var selectedType = Session.get("orderTypeSelected");
      $(".tabItems").removeClass("activeTab");
      $("div[data-selection='"+selectedType+"']").addClass("activeTab");

      if(selectedType == "delivery")
      {
        var cartRecords = carts.find({"userId": Meteor.userId()}).fetch();
        var liquorProducts = [];
        if(cartRecords.length > 0)
        {
          for(var i = 0; i < cartRecords.length; i++)
          {
            var singleRecord = cartRecords[i];
            var productDetails = products.find({
              "_id": singleRecord.productId
            });
            if(productDetails.count() > 0)
            {
              productDetails = productDetails.fetch()[0];
              if(productDetails.categoryType == "He9WM9S2oLmDkyLao")
              {
                liquorProducts.push(singleRecord);
              }
            }
          }
          if(liquorProducts.length > 0)
          {
            Session.set("deliveryFees", 4.99);
          }
          else
          {
            Session.set("deliveryFees", 0);
          }
        }
      }
      else
      {
        Session.set("deliveryFees", 0);
      }
    }
  // },1000)
});
Template.cart.helpers({
  getCarts: function(){
    if(typeof Meteor.userId() !== "undefined")
    {   
      var cartRecords = carts.find({"userId": Meteor.userId()}).fetch();
      var liquorProducts = [];
      var nonLiquorProducts = [];
      if(cartRecords.length > 0)
      {
        for(var i = 0; i < cartRecords.length; i++)
        {
          var singleRecord = cartRecords[i];
          var productDetails = products.find({
            "_id": singleRecord.productId
          });
          if(productDetails.count() > 0)
          {
            productDetails = productDetails.fetch()[0];
            if(productDetails.categoryType == "He9WM9S2oLmDkyLao")
            {
              liquorProducts.push(singleRecord);
            }
            else
            {
              nonLiquorProducts.push(singleRecord);
            }
          }
        }
        return {
          "liquorProducts": liquorProducts,
          "nonLiquorProducts": nonLiquorProducts
        };
      }
      else
      {
        return [];
      }
    }
  },
  productDetails: function(id)
  {
    return products.findOne({_id: id});
  },
  hasProductImage: function(productId){
    // console.log("productId",productId);
    var productDetail = products.find({_id: productId});
    // console.log("productDetail",productDetail);
      productDetail = products.findOne({_id: productId});
      // console.log("productDetail.productImage",productDetail.productImage);
      if(typeof productDetail.productImage !== "undefined")
      {
        if(productDetail.productImage != "")
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
        return false;
      }
    
  },
  productImage: function(productId){
    var productDetail = products.find({_id: productId});
    if(productDetail.count() > 0)
    {
      // console.log("productDetail.productImage",productDetail.productImage);
      productDetail = products.findOne({_id: productId});
      if(typeof productDetail.productImage !== "undefined")
      {
        // console.log("productDetail.productImage",productDetail.productImage);
        if(productDetail.productImage != "")
        {
          var image = productDetail.productImage;
          // console.log("image1",image);
        }
        else
        {
          var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
          // console.log("image2",image);
        }
      }
      else
      {
        var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
        // console.log("image3",image);
      }
    }
    else
    {
      var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
      //console.log("image4",image);
    }
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
  },
  totalAmount: function(){
    var userProducts = carts.find({userId: Meteor.userId()}).fetch();
    totalAmount = 0;
    $.each(userProducts, function(index, value) {
      var perProduct = products.find({_id: value.productId});
      if(perProduct.count() > 0)
      {
        perProduct = products.findOne({_id: value.productId});
        var productFinalPrice = 0;
        productFinalPrice = parseFloat(perProduct.price);
        console.log("perProduct", perProduct);
        if(perProduct.productTax != null)
        {
          perProdTax = parseFloat(perProduct.price) * parseFloat(perProduct.productTax)/100;
          productFinalPrice = parseFloat(perProduct.price) + perProdTax;
          //perProduct = parseFloat(perProduct.price) + perProdTax;
        }
        console.log("productFinalPrice", productFinalPrice);
        if(typeof perProduct.sinProductTax !== "undefined")
        {
          console.log("sintax", perProduct.sinProductTax);
          if(perProduct.sinProductTax > 0)
          {
            perProdTax = perProduct.sinProductTax;
            productFinalPrice = productFinalPrice + perProdTax;
          }
        }
        productFinalPrice = productFinalPrice * value.productQuantity;
        totalAmount = totalAmount + productFinalPrice;
      }
    });

      var orderType = Session.get("orderTypeSelected");
      var cartRecords = carts.find({"userId": Meteor.userId()}).fetch();
      var liquorProducts = [];
      if(cartRecords.length > 0)
      {
        for(var i = 0; i < cartRecords.length; i++)
        {
          var singleRecord = cartRecords[i];
          var productDetails = products.find({
            "_id": singleRecord.productId
          });
          if(productDetails.count() > 0)
          {
            productDetails = productDetails.fetch()[0];
            if(productDetails.categoryType == "He9WM9S2oLmDkyLao")
            {
              liquorProducts.push(singleRecord);
            }
          }
        }
        
      }
      if(Session.get("orderTypeSelected") == "delivery")
      {
        if(liquorProducts.length > 0)
        {
          totalAmount += 4.99;
        }
        else
        {
          totalAmount += 0;
        }
      }
      //totalAmount += parseFloat(Session.get("deliveryFees"));

    if(totalAmount <= 9.99)
    {
      return "0"+totalAmount.toFixed(2);
    }
    else
    {
      return totalAmount.toFixed(2);
    }
    
  },
  quantity: function(cart){
    var cartProduct = carts.findOne({_id: cart._id});
    return cartProduct.productQuantity;
  },
  updateOrderCart: function(){
    return Router.current().params._id;
  },

  storename: function(productId){
    var storeId = products.findOne({_id: productId}).storeName;
    // console.log("XXXXXXXXXX--", products.findOne({_id: productId}).storeName);
    return stores.findOne({_id: storeId}).storeName;
  },
  bottleSize: function(productId){
    var productQuantity = products.findOne({_id: productId}).quantity;
    return bottleSizes.findOne({_id: productQuantity}).sizeValue;
  },
  isDeliverySelected: function(){
    if(Session.get("orderTypeSelected") == "delivery")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
});
Template.cart.events({
  'click .qtyplus': function(e)
    {
      // Stop acting like a button
      e.preventDefault();
      var productId = $(e.target).data("attr");
      var userId = Meteor.userId();
      var presentProduct = carts.findOne({productId: productId, userId: userId});
      var elem = $(e.target);
      var inval =  parseInt(elem.prev().val());
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = inval;
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment
        Meteor.call("incrementCart", presentProduct, productId, userId, function(err, res){
            if(err){
              alert(err.reason);
            }
            else{
              elem.prev().val(inval + 1);
            }
          });
      } else {
          // Otherwise put a 0 there
         elem.prev().val(0);
      }
    },

    'click .qtyminus': function(e)
    {
      // Stop acting like a button
      e.preventDefault();
      var productId = $(e.target).data("attr");
      var userId = Meteor.userId();
      var presentProduct = carts.findOne({productId: productId, userId: userId});
      var elem = $(e.target);
      var inval =  parseInt(elem.next().val());
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = inval;
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal >= 0) {
          // Decrement one
          elem.next().val(inval - 1);
          Meteor.call("decrementCart", presentProduct, productId, userId, function(err, res){
          if(err){
            alert(err.reason);
          }
          else{
          }
        })
      }
      else {
        // Otherwise put a 0 there
        elem.next().val(0);
      }
    },

    'click #removeFromCart': function(e)
    {
      e.preventDefault();

      var c = confirm("Are you sure you want to delete this product from cart?");
      if(c){
        var cartId = $(e.target).data("attr");
        Meteor.call("removeFromCart",cartId, function(err,res){
          if(err)
          {
             Toast.error(err.reason);
          }
          else
          {
             Toast.info("Product Removed From Cart..!");
          }
        });
        setTimeout(function(){
          if($('.content.common-form.cartPage .container').length > 0)
          {
            var a = $(window).height();
            var b = $('.main-header').outerHeight();
            var d = $(".place-orders").outerHeight();
            var c = a - b - d - 1;
            $(".yourcart").css('height', a);
            $('.content.common-form.cartPage .container').css('height', c);
            $('.content.common-form.cartPage .container').css('overflow', "auto");
          }
        },500);
      }
      
      // alert("Product Removed From Cart..!");
    },

    'click #storeCloseButton' : function(e){

      $('#storecloseModal').modal('hide');
    },

    'click #placeOrder': function(e)
    {
      var arr = [];
      var store;
      if(Session.get("storeId") !== undefined)
      {
        var storeId = Session.get("storeId");
        var storeDetails = stores.find({
          "_id": Session.get("storeId")
        });
      }
      else
      {
        var cartRecords = carts.find({
          "userId": Meteor.userId()
        });
        if(cartRecords.count() > 0)
        {
          cartRecords = cartRecords.fetch();
          var firstProductIdInCart = cartRecords[0].productId;
          var firstProductDetailsInCart = products.find({
            "_id": firstProductIdInCart
          });
          if(firstProductDetailsInCart.count() > 0)
          {
            firstProductDetailsInCart = firstProductDetailsInCart.fetch()[0];
            var storeId = firstProductDetailsInCart.storeName;
            Session.set("storeId", storeId);
            var storeDetails = stores.find({
              "_id": storeId
            });
          }
        }
      }
      if(storeDetails.count() > 0)
      {
        store = storeDetails.fetch()[0];
        var storeTimings = store.storetimes;
        var currentDate = new Date();
        var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        var d = new Date();
        var dayName = days[d.getDay()]+"Time";
        var a = new Date();
        var b = new Date();
        var c = storeTimings[dayName].closeTime;
        b.setHours(c.getHours());
        b.setMinutes(c.getMinutes());
        var difference = b.getTime() - a.getTime();
        var resultInMinutes = Math.round(difference / 60000);
        var hours = resultInMinutes / 60;
        var loops = hours * 2;
        var c = 30;
        var arr = [];
        for(var i = 0; i < loops; i++)
        {
          if(c >= 60)
          {
            arr.push({
              "val": c,
              "text": c/60 + " hours"
            });
          }
          else
          {
            arr.push({
              "val": c,
              "text": c + " minutes"
            });
          }
          c = c + 30;
        }
        if(arr.length > 0)
        {
          var cartRecords = carts.find({
            "userId": Meteor.userId()
          });
          if(cartRecords.count() > 0)
          {
            cartRecords = cartRecords.fetch();
            var total = 0;
            var taxTotal = 0;
            var sinTaxTotal = 0;
            var grossTotal = 0;
            var lastOrder = orders.find({}, {
              sort: {
                "createdAt": -1
              }
            });
            var lastOrderId = 0;
            if(lastOrder.count() > 0)
            {
              lastOrder = lastOrder.fetch()[0];
              lastOrderId = lastOrder.orderNumber + 1;
            }
            else
            {
              lastOrderId = 1;
            }

            $.each(cartRecords, function(index, value) {
              var productId = value.productId;
              var productQuantity = value.productQuantity;
              var productDetails = products.find({_id: productId});
              if(productDetails.count() > 0)
              {
                productDetails = productDetails.fetch()[0];
                total += parseFloat(productDetails.price) * parseInt(productQuantity);
                if(typeof productDetails.productTax !== "undefined")
                {
                  var productTax = (parseFloat(productDetails.price) * parseFloat(productDetails.productTax)) / 100;
                  productTax = productTax * parseInt(productQuantity);
                  taxTotal += productTax;
                }
                else
                {
                  var productTax = 0;
                }
                if(typeof productDetails.sinProductTax !== "undefined")
                {
                  var sinProductTaxs = parseFloat(productDetails.sinProductTax) * parseInt(productQuantity);
                  sinTaxTotal += sinProductTaxs;
                }
                else
                {
                  var sinProductTaxs = 0;
                }
                var productPriceWithTaxs = (parseFloat(productDetails.price) * parseInt(productQuantity));
                productPriceWithTaxs += productTax;
                productPriceWithTaxs += sinProductTaxs;
                grossTotal += productPriceWithTaxs;
              }
            });
            console.log("total", total);
            console.log("taxTotal", taxTotal);
            console.log("sinTaxTotal", sinTaxTotal);
            console.log("grossTotal", grossTotal);
            var orderType = Session.get("orderTypeSelected");

            Meteor.call("insertIntoOrders", store._id, lastOrderId, cartRecords, total, Meteor.userId(), taxTotal, sinTaxTotal, grossTotal, orderType, function(err,res){
              if(err)
              {
                console.log(err.reason);
              }
              else
              {
                console.log("resres", res);
                $("#orderId").val(res);
                var orderDetailsNew = orders.find({
                  "_id": res
                });
                console.log("testtesttesttes", orderDetailsNew.count());
                if(orderDetailsNew.count() > 0)
                {
                  orderDetailsNew = orderDetailsNew.fetch()[0];
                  if(orderDetailsNew.OrderType == "pickup")
                  {
                    var url = "delivery-checkout-step1";
                  }
                  else if(orderDetailsNew.OrderType == "delivery")
                  {
                    var url = "delivery-checkout-step1";
                  }
                  else 
                  {
                    var url = "checkoutPageforth";
                  }
                  console.log("url",url);
                  Router.go("/" + url + "/" + res);
                }
              }
            });
          }
          
        }
        else
        {
          $('#storecloseModal').modal('show');
        }
      }
      console.log("arr", arr);
      console.log("store", store);
      return;
      if(arr.length > 0){
        
         
        $.each(cartss, function(index, value) {
          product = products.findOne({_id: value.productId});
          if(product.productTax != null)
            {
              orderTax = product.productTax;
              prodPriceWithTax = product.price * product.productTax / 100;
              totalTaxs = parseFloat(prodPriceWithTax);
              cartTotall = parseFloat(product.price) + parseFloat(prodPriceWithTax);
              cartTotall = parseFloat(cartTotall * parseInt(value.productQuantity));
            }
          else
            {
              cartTotall = (product.price * value.productQuantity);
            }
          cartTotall = parseFloat(cartTotall);
          Meteor.call("updateCartTotal", cartTotall, value, function(err, res){
            if(err){
              alert(err.reason);
            }
          });
          totalTax = parseFloat(totalTax) + totalTaxs;
          cartTotal = cartTotal + cartTotall;
        });
        Meteor.call("insertIntoOrders", storeId, lastOrder, cartss, cartTotal, userId, totalTax, function(err,res){
          if(err)
          {
            console.log(err.reason);
          }
          else
          {
            $("#orderId").val(res);
            $('#placeOrderModal').modal('show');
            // Session.set("ordertotal", cartTotal);
          }
        });
      }
      else{
        $('#storecloseModal').modal('show');
      }
    },

     'click #updateOrder': function(e)
     {
      var cartTotal = 0;
      var totalTax = 0;
      var currentOrderId = Router.current().params._id;
      var cartss = carts.find({userId: Meteor.userId()}).fetch();
      var productsList = orders.findOne({_id: currentOrderId}).productIds;
      /*for(var i = 0; i < cartss.length; i++){
          console.log("cartss.productQuantity",cartss[i].productQuantity);
        }*/

      
      var productIdRemoves =[];
        $.each(cartss, function(index, value) {
            for(var j=0; j<productsList.length; j++){
              if(value.productId == productsList[j].id){
               // productIdRemoves.push(value.productQuantity);
               productIdRemoves.push(productsList[j]);
              }
              
            }
          });
      Meteor.call("updateStock", productIdRemoves,currentOrderId,cartss,  function(err,res){
        //console.log(res);
      });

      $.each(cartss, function(index, value) {
        product = products.findOne({_id: value.productId});
        if(product.productTax != null)
          {
            prodPriceWithTax = product.price * product.productTax / 100
            productTotalTax = (prodPriceWithTax * value.productQuantity);
            cartTotall = (prodPriceWithTax * value.productQuantity);
          }
        else
          {
            cartTotall = (product.price * value.productQuantity);
          }
        // cartTotall = (product.price * value.productQuantity);
        cartTotall = parseFloat(Number(cartTotall) + parseFloat(Number(product.price)*value.productQuantity));
        totalTax = parseFloat(Number(totalTax) + Number(productTotalTax));
        Meteor.call("updateCartTotal", cartTotall, value, function(err, res){
          if(err){
            alert(err.reason);
          }
        });
        cartTotal = cartTotal + cartTotall;
        // totalTax = parseFloat(Number(totalTax) + Number(prodPriceWithTax));
      });
        Meteor.call("updateOrderCart", currentOrderId, cartTotal,totalTax, function(err,res){
          if(err)
          {
            console.log(err.reason);
          }
          else
          {
            alert("order updated successfully..!!");
            history.back();
            //Router.go("/checkoutPageSecond/" + currentOrderId);
          }
        });
    },

    'click #pickingUp':function(e)
    {
      var orderId = $('#orderId').val();
      $('#placeOrderModal').modal('hide');
      $("body").removeClass("modal-open");
      $("body").css("padding-right", "");
      var orderType = "pickup"
      Meteor.call("updateOrderType", orderId, orderType, function(err,res){
        if(err)
        {
          console.log(err.reason);
        }
        else
        {
          Router.go("/checkoutPagefirst/" + orderId);
        }
      });
      // Router.go("/checkoutPagefirst/" + orderId).then(() => window.scrollTo(0, 0));
    },

    'click #shoppingInStore': function(e)
    {
      var orderId = $('#orderId').val();
      $('#placeOrderModal').modal('hide');
      $("body").removeClass("modal-open");
      $("body").css("padding-right", "");
      
      var orderType = "shopInStore"
      Meteor.call("updateOrderType", orderId, orderType, function(err,res){
        if(err)
        {
          console.log(err.reason);
        }
        else
        {
          Router.go("/checkoutPageforth/" + orderId);
        }
      });
    },
    'change .qty': function(e){

      var prodQuantity;
      
      $(".qty").on("keyup",function(e){
        //console.log("keyup prodQuantity",$(e.target).val());
        prodQuantity = $(e.target).val();
        var code = e.keyCode || e.which;
        //console.log("code",code);

       if(code == 13) { //Enter keycode
         //Do something
          $( ".qty" ).trigger( "blur" );
          //console.log("enter is pressed");
       }
      })    
      

      $(".qty").on("blur",function(e){
        //console.log("blur prodQuantity",$(e.target).val());
        prodQuantity = $(e.target).val();
        var productId = $(e.target).data("attr");
        //console.log("productId",productId);
        var userId = Meteor.userId();
        //console.log("userId",userId);
        var presentProduct = carts.findOne({productId: productId, userId: userId});
        //console.log("presentProductpresentProduct",presentProduct);
        //console.log("prodQuantity",prodQuantity);
        Meteor.call("cartUpdate", presentProduct, productId, userId, prodQuantity, function(err, res){
          if(err){
            console.log(err);
          }
          else{
            //console.log(res);
          }
        })
                   

      })
      
    },
    'click .tabItems': function(e){
      e.preventDefault();
      if($(e.target).get(0).tagName == "DIV")
      {
        var elem = $(e.target);
      }
      else if($(e.target).get(0).tagName == "SPAN")
      {
        var elem = $(e.target).parent();
      }
      var selectedType = elem.attr("data-selection");
      $(".tabItems").removeClass("activeTab");
      elem.addClass("activeTab");
      Session.set("orderTypeSelected", selectedType);


      var cartRecords = carts.find({"userId": Meteor.userId()}).fetch();
      var liquorProducts = [];
      if(cartRecords.length > 0)
      {
        for(var i = 0; i < cartRecords.length; i++)
        {
          var singleRecord = cartRecords[i];
          var productDetails = products.find({
            "_id": singleRecord.productId
          });
          if(productDetails.count() > 0)
          {
            productDetails = productDetails.fetch()[0];
            if(productDetails.categoryType == "He9WM9S2oLmDkyLao")
            {
              liquorProducts.push(singleRecord);
            }
          }
        }
        if(liquorProducts.length > 0)
        {
          $(".deliveryFeesDiv .rightSide span").html("$4.99");
          Session.set("deliveryFees", 4.99);
        }
        else
        {
          $(".deliveryFeesDiv .rightSide span").html("$0.00");
          Session.set("deliveryFees", 0);
        }
        
      }
    }
});