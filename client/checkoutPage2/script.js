Template.checkoutPageSecond.onCreated(function(){
  Meteor.subscribe('getOrders');
  Meteor.subscribe('getStores');
  // Meteor.subscribe('getProducts');
});
Template.checkoutPageSecond.onRendered(function(){
  $("body").css("overflow","auto");
  
  var j = setInterval(function(){
    if($('.content.common-form.checkout-page .container').length > 0)
    {
      clearInterval(j);
      var a = $(window).height();
      var b = $('.main-header').outerHeight();
      var c = $(".checkoptsetp").outerHeight();
      var d = $(".next-btns").outerHeight();
      var f = a - b - c - d -1;
      $('.content.common-form.checkout-page .container').css('height', f);
      $('.content.common-form.checkout-page .container').css('overflow', "auto");
    }
  },300);
  var a = setInterval(function(){
    var orderDetails = orders.findOne({_id: Router.current().params._id});
    if(typeof orderDetails !== "undefined")
    {
      clearInterval(a);
      if(orderDetails != null)
      {
        if(orderDetails.status == "Success")
        {
          Router.go("/");
          return;
        }
      }
    }
  },100);
});
Template.checkoutPageSecond.helpers({
  myOrders: function(){
    var orderId = Router.current().params._id;
    var userId = Meteor.userId();
    var productIds = orders.findOne({ _id: orderId});
    if(productIds != null)
    {
      productIds = productIds.productIds;
      var productss = [];
      $.each(productIds, function(index, value) {
        productss.push(products.findOne({_id: value.id}));
      });
      //console.log("productss212121",productss);
      return productss;
    }
  },

  prodImage: function(prodId){
    var product = products.findOne({_id: prodId});
    if(typeof product !== "undefined")
    {
      if(typeof product.productImage !== "undefined")
      {
        var imageUrl = product.productImage;
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
  },

  productQuantities: function(productId){
    var a = carts.findOne({productId: productId, userId: Meteor.userId()});
    if(a !== null)
    return a.productQuantity;
  },
  getOrderTotal: function(){
    var orderDetail = orders.find({_id: Router.current().params._id});
    if(orderDetail.count() > 0)
    {
      orderDetail = orderDetail.fetch()[0];
      var productIds = orderDetail.productIds;
      if(productIds.length > 0)
      {
        var totalSinTax = 0;
        
        var aa = parseFloat(orderDetail.grossTotal);
        console.log("orderDetails.deliveryFees", orderDetail.deliveryFees);
        aa += parseFloat(orderDetail.deliveryFees);
        return parseFloat(aa).toFixed(2);
      }
    }
  },
  getDeliveryFees: function(){
    var orderDetail = orders.find({_id: Router.current().params._id});
    if(orderDetail.count() > 0)
    {
      orderDetail = orderDetail.fetch()[0];
      var t = orderDetail.deliveryFees;
      return t
    } 
  },
  getGrossTotal: function(){
    var orderDetail = orders.find({_id: Router.current().params._id});
    if(orderDetail.count() > 0)
    {
      orderDetail = orderDetail.fetch()[0];
      var productIds = orderDetail.productIds;
      if(productIds.length > 0)
      {
        var totalSinTax = 0;
        for(var i = 0; i < productIds.length; i++)
        {
          var productRecord = productIds[i];
          var productId = productRecord.id;
          var productDetails = products.find({"_id": productId});
          if(productDetails.count() > 0)
          {
            productDetails = productDetails.fetch()[0];
            if(typeof productDetails.sinProductTax !== "undefined")
            {
              if(productDetails.sinProductTax > 0)
              {
                totalSinTax += parseFloat(productDetails.sinProductTax * productRecord.quantity);
              }
            }
          }
        }
        var aa = parseFloat(totalSinTax) + parseFloat(orderDetail.grossTotal);
        return parseFloat(aa).toFixed(2);
      }
    }
  },
  getProductPriceWithoutTax: function(){
    var order = orders.findOne({_id: Router.current().params._id});
    if(order != null)
    {
      var productTotalWithoutTax = 0;
      var orderProdIds = order.productIds;
      for(var i=0; i<orderProdIds.length; i++)
      {
        product = products.findOne({_id: orderProdIds[i].id});
        if(product)
        {
          productTotalWithoutTax += parseFloat(product.price) * orderProdIds[i].quantity;
        }
      }
      return parseFloat(productTotalWithoutTax).toFixed(2);
    }
  },
  getProductTaxInPercentage: function(){
    var a = orders.findOne({_id: Router.current().params._id});
    if(a != null)
    {
      return a.tax;
    } 
  },
  getProductSinTaxInDollars: function(){
    var orderDetail = orders.find({_id: Router.current().params._id});
    if(orderDetail.count() > 0)
    {
      orderDetail = orderDetail.fetch()[0];
      var productIds = orderDetail.productIds;
      if(productIds.length > 0)
      {
        var totalSinTax = 0;
        for(var i = 0; i < productIds.length; i++)
        {
          var productRecord = productIds[i];
          var productId = productRecord.id;
          var productDetails = products.find({"_id": productId});
          if(productDetails.count() > 0)
          {
            productDetails = productDetails.fetch()[0];
            if(typeof productDetails.sinProductTax !== "undefined")
            {
              if(productDetails.sinProductTax > 0)
              {
                totalSinTax += parseFloat(productDetails.sinProductTax * productRecord.quantity);
              }
            }
          }
        }
        return totalSinTax.toFixed(2);
      }
    }
  },
  getProductTaxInDollars: function(){
    var orderDetail = orders.find({_id: Router.current().params._id});
    if(orderDetail.count() > 0)
    {
      orderDetail = orderDetail.fetch()[0];
      var productIds = orderDetail.productIds;
      if(productIds.length > 0)
      {
        var totalTax = 0;
        for(var i = 0; i < productIds.length; i++)
        {
          var productRecord = productIds[i];
          var productId = productRecord.id;
          var productDetails = products.find({"_id": productId});
          if(productDetails.count() > 0)
          {
            productDetails = productDetails.fetch()[0];
            if(typeof productDetails.productTax !== "undefined")
            {
              if(productDetails.productTax > 0)
              {
                var tax = (parseFloat(productDetails.price) * parseFloat(productDetails.productTax)) / 100;
                totalTax += parseFloat(tax * productRecord.quantity);
              }
            }
          }
        }
        return totalTax.toFixed(2);
      }
    }
  },
  getCouponDiscount:function(){
    var a = orders.findOne({_id: Router.current().params._id});
    if(a != null)
    {
      if(a.discount != undefined)
      {
        return parseFloat(a.discount).toFixed(2);
      }
    }
  },
  RecentAppliedCoupon: function(){
    var a = orders.findOne({_id: Router.current().params._id})
    if(a != null)
    {
      return a.couponCode;
    }
  },
  getProductCount: function(){
    var a = orders.findOne({_id: Router.current().params._id});
    if(a != null)
    {
      return a.productIds.length;
    }
  },
  creditCardNumber: function(){
    var cardNumber = paymentDetails.findOne({orderId: Router.current().params._id})
    if(cardNumber != null)
    {
      cardNumber = cardNumber.CardNumber;
      return cardNumber.replace(/\d(?=\d{4})/g, "*");
    }
  },
  updateOrderId: function(){
    return Router.current().params._id;
  },

  productStoreAddress: function(){
    var totalProductIds = [];
    var storeId = orders.findOne({_id: Router.current().params._id});

    
    if(typeof storeId !== "undefined"){

     
      totalProductIds = storeId.productIds;
     

      var productIdsArr = [];
      var arrayLength = totalProductIds.length;
      if(totalProductIds !== null){
        for(var i = 0; i< arrayLength; i++){
          if(typeof totalProductIds !== "undefined"){
            productIdsArr.push(totalProductIds[i].id);

            
          }      
        }
      }
      Meteor.subscribe('getSpecificProducts',productIdsArr);
    }
    if(storeId != null){
      storeId = storeId.storeId;
      var a = stores.findOne({_id: storeId});
       if(a != null) 
      return a.address;
    }
  },



  hasProductImage: function(productId){
    
    var productDetail = products.findOne({_id: productId});
     
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
      productDetail = products.findOne({_id: productId});
      if(typeof productDetail.productImage !== "undefined")
      {
        if(productDetail.productImage != "")
        {
          var image = productDetail.productImage;
        }
        else
        {
          var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
        }
      }
      else
      {
        var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
      }
    }
    else
    {
      var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
    }
    var imageUrl = image.split("upload")
    imageUrl = imageUrl[0] + "upload/" + imageUrl[1];
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
});
Template.checkoutPageSecond.events({
  
  'click #submitcheckoutPageSecond': function(e)
    {
      e.preventDefault();
      var orderId = Router.current().params._id;
      Router.go("/checkoutPagethird/"+orderId)
    },

    'click #applycouponButton': function(e)
    {
      var couponCode = $("#couponCode").val().trim();
      // var couponUsed = orders.findOne({userId: Meteor.userId(), couponCode: couponname, status: "Success"});
      var couponExists = coupons.findOne({couponName: couponCode, validFrom: { $lte: new Date() }, validTo: { $gte: new Date() }});
      if(couponExists)
      {
        var couponUsed = orders.findOne({userId: Meteor.userId(), couponCode: couponExists.couponName});
        if(couponUsed)
        {
          alert("Coupon Redeemed");
          $("#couponCode").val("");
        }
        // else
        // {
        //   // alert(discount);
        //   var orderId = Router.current().params._id;
        //   var order = orders.findOne({_id: Router.current().params._id})
        //   var orderTotal = orders.findOne({_id: Router.current().params._id}).grossTotal;
        //   if(coupons.findOne({couponName: couponCode}).couponType == "percent")
        //   {
        //     var discountt = coupons.findOne({couponName: couponCode}).discount;
        //     var discount = orderTotal*discountt/100
        //   }
        //   else
        //   {
        //     var discountt = coupons.findOne({couponName: couponCode}).discount;
        //     var discount = discountt
        //   }
        //   var discountedPrice = order.total - discount;
        //   Meteor.call("updateOrderDiscount", couponCode, orderId, discount, discountedPrice, function(err,res){
        //     if(err)
        //     {
        //       //console.log(err.reason);
        //     }
        //     else
        //     {
        //       // $("#couponList").hide();
        //       $("#removeCouponcode").show();
        //       alert("Coupon code:" + couponCode + " is applied successfully..!!");
        //       $("#couponCode").prop('disabled', true);
        //       $("#couponCode").css('background-color', "#bfbfbf");
        //       // Session.set("couponId", coupon);
        //     }
        //   });
        // }
        else
        {
          // alert(discount);
          var orderId = Router.current().params._id;
          var order = orders.findOne({_id: Router.current().params._id})
          var orderTotal = orders.findOne({_id: Router.current().params._id}).grossTotal;
          if(coupons.findOne({couponName: couponCode}).couponType == "percent")
          {
            var discountt = coupons.findOne({couponName: couponCode}).discount;
            var discount = parseFloat(orderTotal*discountt/100).toFixed(2);
          }
          else
          {
            var discountt = coupons.findOne({couponName: couponCode}).discount;
            if(orderTotal > discountt)
            { 
              var discount = parseFloat(discountt).toFixed(2);
            }
            else
            {
              alert("please select other coupon");
              return;
            }
          }
          var discountedPrice = parseFloat(order.total - discount).toFixed(2);
          Meteor.call("updateOrderDiscount", couponCode, orderId, discount, discountedPrice, function(err,res){
            if(err)
            {
              console.log(err.reason);
            }
            else
            {
              // $("#couponList").hide();
              $("#removeCouponcode").show();
              alert("Coupon code:" + couponCode + " is applied successfully..!!");
              $("#couponCode").prop('disabled', true);
              $("#couponCode").css('background-color', "#bfbfbf");
              // Session.set("couponId", coupon);
            }
          });
        }

        //{
        //   var prodBasedDiscount = getDiscount(couponCode);
        //   // console.log(prodBasedDiscount);
        //   // alert(discount);
        //   var orderId = Router.current().params._id;
        //   if(orders.findOne({_id: Router.current().params._id}) != null)
        //   {
        //     var order = orders.findOne({_id: Router.current().params._id})
        //     var orderTotal = orders.findOne({_id: Router.current().params._id}).grossTotal;
        //   }
        //   var discountedPrice = order.total - prodBasedDiscount;
        //   // console.log("discountedGrosTtl" + discountedPrice)
        //   Meteor.call("updateOrderDiscount", couponCode, orderId, prodBasedDiscount, discountedPrice, function(err,res){
        //     if(err)
        //     {
        //       console.log(err.reason);
        //     }
        //     else
        //     {
        //       // $("#couponList").hide();
        //       $("#removeCouponcode").show();
        //       alert("Coupon code:" + couponCode + "is applied successfully..!!");
        //       $("#couponCode").prop('disabled', true);
        //       $("#couponCode").css('background-color', "#bfbfbf");
        //       // Session.set("couponId", coupon);
        //     }
        //   });
        // }

      }
      else
      {
        alert("Wrong coupon code or coupon expired..!!");
        $("#couponCode").val("");
      }
    },

    'click #removeCouponcode': function(e)
      {
        var orderId = Router.current().params._id;
        // var orderDiscount = orders.findOne({_id: Router.current().params._id}).discount;
        // var orderTotal = orders.findOne({_id: Router.current().params._id}).grossTotal;
        var orderWithoutDiscountRate = orders.findOne({_id: Router.current().params._id}).total;
        var couponCode = ""
        var orderDiscount = ""
        // alert(orderWithoutDiscountRate);
        Meteor.call("removeOrderDiscount", couponCode, orderId, orderDiscount, orderWithoutDiscountRate, function(err,res){
          if(err)
          {
            console.log(err.reason);
          }
          else
          {
            $("#removeCouponcode").hide();
            $("#couponCode").prop('disabled', false);
            $("#couponCode").css('background-color', "");
            $("#couponCode").val("");
            // $("#couponList").show();
            alert("Coupon code removed");
            // Session.set("couponId", undefined);
          }
        });
      }
});

// function getDiscount(codeName)
// {
//   var coupon = coupons.findOne({couponName: codeName});
//   var userId = Meteor.userId();
//   var cartProducts = carts.find({"userId": Meteor.userId()}).fetch();
//   var orderTotal = orders.findOne({_id: Router.current().params._id}).grossTotal;
//   var discount = 0;
//   if(coupon != null)
//   {
//     if(typeof coupon.productName != "undefined" && typeof coupon.brandName != "undefined")
//       {
//         if(coupon.productName != "" && coupon.brandName != "")
//         {
//           for(var i=0; i<cartProducts.length;i++)
//           {
//             cartProductId = cartProducts[i].productId;
//             productCount = cartProducts[i].productQuantity;
//             productCoupon = products.findOne({_id: cartProductId});
//             // console.log(productCoupon)
//             if(productCoupon._id == coupon.productName && productCoupon.brandName == coupon.brandName)
//             {
//               if(coupon.couponType == "percent")
//                 {
//                   var discountt = coupon.discount;
//                   var discounted = parseInt(orderTotal)*parseInt(discountt)/100;
//                 }
//                 else
//                 {
//                   var discountt = coupon.discount;
//                   var discounted = discountt;
//                 }
//               discount = productCount*discounted;
//             }
//           }
//           return discount;
//         }
//       }
//     else if(typeof coupon.productName != "undefined" && typeof coupon.brandName == "undefined")
//       {
//         if(coupon.productName != "")
//         {
//           for(var i=0; i<cartProducts.length;i++)
//           {
//             cartProductId = cartProducts[i].productId;
//             productCount = cartProducts[i].productQuantity;
//             productCoupon = products.findOne({_id: cartProductId});
//             if(productCoupon._id == coupon.productName)
//             {
//               if(coupon.couponType == "percent")
//                 {
//                   var discountt = coupon.discount;
//                   var discounted = parseInt(orderTotal)*parseInt(discountt)/100
//                 } 
//               else
//                 {
//                   var discountt = coupon.discount;
//                   var discounted = discountt;
//                 }
//               discount = productCount*discounted;
//             }
//           }
//           return discount;
//         }
//       }
//     else if(typeof coupon.productName == "undefined" && typeof coupon.brandName != "undefined")
//       {
//         if(coupon.brandName != "")
//         {
//           for(var i=0; i<cartProducts.length;i++)
//           {
//             cartProductId = cartProducts[i].productId;
//             productCount = cartProducts[i].productQuantity;
//             productCoupon = products.findOne({_id: cartProductId});
//             if(productCoupon.brandName == coupon.brandName)
//             {
//               if(coupon.couponType == "percent")
//                 {
//                   var discountt = coupon.discount;
//                   var discounted = parseInt(orderTotal)*parseInt(discountt)/100;
//                 }
//               else
//                 {
//                   var discountt = coupon.discount;
//                   var discounted = discountt;
//                 }
//               discount = productCount*discounted;
//             }
//           }
//           return discount;
//         }
//       }
//     else
//       {
//         if(coupon.couponType == "percent")
//           {
//             var discountt = coupon.discount;
//             var discounted = parseInt(orderTotal)*parseInt(discountt)/100;
//           }
//         else
//           {
//             var discountt = coupon.discount;
//             var discounted = discountt;
//           }
//         discount = discounted;
//         return discount;
//       }
//   }
// }
