var emailTemplate='';
Template.checkoutPagethird.onCreated(function() {
  Meteor.subscribe('getOrders');
  //Meteor.subscribe('getProducts');
  Meteor.subscribe("getStores");
  Meteor.subscribe("getpaymentDetails", Meteor.userId());
});
Template.checkoutPagethird.onRendered(function() {
  $("body").css("overflow","auto");

  emailTemplate = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="https://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <title>Oxygen Invoice</title> <style type="text/css">/* Take care of image borders and formatting, client hacks */img{max-width: 600px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}a img{border: none;}table{border-collapse: collapse !important;}#outlook a{padding:0;}.ReadMsgBody{width: 100%;}.ExternalClass{width: 100%;}.backgroundTable{margin: 0 auto; padding: 0; width: 100% !important;}table td{border-collapse: collapse;}.ExternalClass *{line-height: 115%;}.container-for-gmail-android{min-width: 600px;}/* General styling */*{font-family: Helvetica, Arial, sans-serif;}body{-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: none;width: 100% !important;margin: 0 !important;height: 100%;color: #676767;}td{font-family: Helvetica, Arial, sans-serif;font-size: 14px;color: #777777;text-align: center;line-height: 21px;}a{color: #676767;text-decoration: none !important;}.pull-left{text-align: left;}.pull-right{text-align: right;}.header-lg,.header-md,.header-sm{font-size: 32px;font-weight: 700;line-height: normal;padding: 35px 0 0;color: #4d4d4d;}.header-md{font-size: 24px;}.header-sm{padding: 5px 0;font-size: 18px;line-height: 1.3;}.content-padding{padding: 20px 0 5px;}.mobile-header-padding-right{width: 290px;text-align: right;padding-left: 10px;}.mobile-header-padding-left{width: 290px;text-align: left;padding-left: 10px;}.free-text{width: 100% !important;padding: 10px 60px 0px;}.button{padding: 30px 0;}.mini-block{border: 1px solid #e5e5e5;border-radius: 5px;background-color: #ffffff;padding: 12px 15px 15px;text-align: left;width: 253px;}.mini-container-left{width: 278px;padding: 10px 0 10px 15px;}.mini-container-right{width: 278px;padding: 10px 14px 10px 15px;}.product{text-align: left;vertical-align: top;width: 175px;}.total-space{padding-bottom: 8px;display: inline-block;}.item-table{padding: 50px 20px;width: 560px;}.item{width: 300px;}.mobile-hide-img{text-align: left;width: 125px;}.mobile-hide-img img{border: 1px solid #e6e6e6;border-radius: 4px;}.title-dark{text-align: left;border-bottom: 1px solid #cccccc;color: #4d4d4d;font-weight: 700;padding-bottom: 5px;}.item-col{padding-top: 20px;text-align: left;vertical-align: top;}.force-width-gmail{min-width:600px;height: 0px !important;line-height: 1px !important;font-size: 1px !important;}</style> <style type="text/css" media="screen">@import url(https://fonts.googleapis.com/css?family=Oxygen:400,700);</style> <style type="text/css" media="screen">@media screen{/* Thanks Outlook 2013! */*{font-family: \'Oxygen\', \'Helvetica Neue\', \'Arial\', \'sans-serif\' !important;}}</style> <style type="text/css" media="only screen and (max-width: 480px)">/* Mobile styles */@media only screen and (max-width: 480px){table[class*="container-for-gmail-android"]{min-width: 290px !important;width: 100% !important;}img[class="force-width-gmail"]{display: none !important;width: 0 !important;height: 0 !important;}table[class="w320"]{width: 320px !important;}td[class*="mobile-header-padding-left"]{width: 160px !important;padding-left: 0 !important;}td[class*="mobile-header-padding-right"]{width: 160px !important;padding-right: 0 !important;}td[class="header-lg"]{font-size: 24px !important;padding-bottom: 5px !important;}td[class="content-padding"]{padding: 5px 0 5px !important;}td[class="button"]{padding: 5px 5px 30px !important;}td[class*="free-text"]{padding: 10px 18px 30px !important;}td[class~="mobile-hide-img"]{display: none !important;height: 0 !important;width: 0 !important;line-height: 0 !important;}td[class~="item"]{width: 140px !important;vertical-align: top !important;}td[class~="quantity"]{width: 50px !important;}td[class~="price"]{width: 90px !important;}td[class="item-table"]{padding: 30px 20px !important;}td[class="mini-container-left"],td[class="mini-container-right"]{padding: 0 15px 15px !important;display: block !important;width: 290px !important;}}</style> </head> <body bgcolor="#f7f7f7"> <table align="center" cellpadding="0" cellspacing="0" class="container-for-gmail-android" width="100%"> <tr> <td align="left" valign="top" width="100%" style="background: #ffffff;"> <center> <table cellspacing="0" cellpadding="0" width="100%" bgcolor="#ffffff"style="background-color:transparent"> <tr> <td width="100%" height="80" valign="top" style="text-align: center; vertical-align:middle;"><!--[if gte mso 9]> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;height:80px; v-text-anchor:middle;"> <v:fill type="tile" src="https://s3.amazonaws.com/swu-filepicker/4E687TRe69Ld95IDWyEg_bg_top_02.jpg" color="#ffffff"/> <v:textbox inset="0,0,0,0"><![endif]--> <center> <table cellpadding="0" cellspacing="0" width="600" class="w320"> <tr> <td class="pull-left mobile-header-padding-left" style="vertical-align: middle;"><a href="" style="color: #000;font-size: 23px;font-weight: 600;">Shop Skip</a></td><td class="pull-right mobile-header-padding-right" style="color: #4d4d4d;"><a href=""><img width="44" height="47" src="https://s3.amazonaws.com/swu-filepicker/k8D8A7SLRuetZspHxsJk_social_08.gif" alt="twitter"/></a><a href=""><img width="38" height="47" src="https://s3.amazonaws.com/swu-filepicker/LMPMj7JSRoCWypAvzaN3_social_09.gif" alt="facebook"/></a><a href=""><img width="40" height="47" src="https://s3.amazonaws.com/swu-filepicker/hR33ye5FQXuDDarXCGIW_social_10.gif" alt="rss"/></a></td></tr></table> </center><!--[if gte mso 9]> </v:textbox> </v:rect><![endif]--> </td></tr></table> </center> </td></tr><tr> <td align="center" valign="top" width="100%" style="background-color: #f7f7f7;" class="content-padding"> <center> <table cellspacing="0" cellpadding="0" width="600" class="w320"> <tr> <td class="header-lg">Thank you for your order!</td></tr><tr> <td class="w320"> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td class="mini-container-left"> <table cellpadding="0" cellspacing="0" width="100%"> <tr style="min-height: 137px;display: inline-block;"> <td class="mini-block-padding"> <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:separate !important;"> <tr> <td class="mini-block"><span class="header-sm">Shipping Address</span><br/>[GETSHIPPINGADDRESS]</td></tr></table> </td></tr></table> </td><td class="mini-container-right"> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td class="mini-block-padding"> <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:separate !important;"> <tr> <td class="mini-block"><span class="header-sm">Date Ordered</span><br/>[DATEORDERED] <br/><br/><span class="header-sm">Order</span> <br/>[ORDERNUMBER]</td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </center> </td></tr><tr> <td align="center" valign="top" width="100%" style="background-color: #ffffff;border-top: 1px solid #e5e5e5; border-bottom: 1px solid #e5e5e5;"> <center> <table cellpadding="0" cellspacing="0" width="600" class="w320"> <tr> <td class="item-table"> <table cellspacing="0" cellpadding="0" width="100%"> <tr> <td class="title-dark" width="300"> Item</td><td class="title-dark" width="163">Qty</td><td class="title-dark" width="97">Total</td></tr>[PRODUCTS] <tr> <td class="item-col item mobile-row-padding"></td><td class="item-col quantity"></td><td class="item-col price"></td></tr><tr> <td class="item-col item"></td><td class="item-col quantity" style="text-align:right; padding-right: 10px; border-top: 1px solid #cccccc;"><span class="total-space">Subtotal</span> <br/><span class="total-space">Tax</span><br/><span class="total-space">Sin Tax</span><br/><span class="total-space">Discount</span> <br/><span class="total-space" style="font-weight: bold; color: #4d4d4d">Total</span></td><td class="item-col price" style="text-align: left; border-top: 1px solid #cccccc;"><span class="total-space">$[SUBTOTAL]</span> <br/><span class="total-space">$[TAX]</span><br/><span class="total-space">$[SINTAX]</span><br/><span class="total-space">$[DISCOUNT]</span><br/><span class="total-space" style="font-weight:bold; color: #4d4d4d">$[GROSSTOTAL]</span></td></tr></table> </td></tr></table> </center> </td></tr><tr> <td align="center" valign="top" width="100%" style="background-color: #f7f7f7; height: 100px;">[FOOTER]</td></tr></table> </div></body></html>';

 var j = setInterval(function(){
    if($('.content.common-form.checkout-page .container').length > 0)
    {
      clearInterval(j);
      var a = $(window).height();
      var b = $('.main-header').outerHeight();
      var c = $(".checkoptsetp").outerHeight();
      var d = $(".next-btns").outerHeight();
      var f = a - b - c - d;
      $('.content.common-form.checkout-page .container').css('height', f);
      $('.content.common-form.checkout-page .container').css('overflow', "auto");
    }
  },300);
  var a = setInterval(function(){
    var orderDetails = orders.findOne({_id: Session.get("ORDERID")});
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
  /*if(orderDetails != null)
  {
    if(orderDetails.status == "Success")
    {
      Router.go("/");
      return;
    }
  }*/
  paypal.Button.render({
      env: 'sandbox', // Or 'sandbox',
      commit: true, // Show a 'Pay Now' button
      style: {
        color: 'gold',
        size: 'small'
      },
      client: {
            sandbox: 'AVh6jhsAM5O79sHDuJm3wZTFLMr0P0khGpyzUYmrhQZr3COYG9PmIYd2EhPSPidYEnEaU8E4b4QBO6XL',
            //production: 'xxxxxxxxx'
        },
      payment: function(data, actions) {
        var order = orders.findOne({_id: Session.get("ORDERID")});
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: { total: order.grossTotal, currency: 'USD' }
              }
            ]
          }
        });
        /* 
         * Set up the payment here 
         */
      },
      onAuthorize: function(data, actions) {
        var order = orders.findOne({_id: Session.get("ORDERID")});
        var orderDetailss = orders.findOne({_id:Session.get("ORDERID")});
        var storeDetails = stores.findOne({_id:orderDetailss.storeId});
        return actions.payment.execute().then(function(payment) {
          var resData = payment;
          if(resData !== null)
          {
            if(typeof resData !== "undefined"){
              Meteor.call("addPaymentPaypal", resData, Session.get("ORDERID"), function(err, res){
                if(err){
                  console.log(err.reason);
                }
                else{
                   var orderDetailss = orders.findOne({_id:Session.get("ORDERID")});
                  // Session.set('cvvNumber', undefined);
                  //console.log("storeDetails.address",storeDetails.address);
                  emailTemplate = emailTemplate.replace("[GETSHIPPINGADDRESS]",storeDetails.address.replace(",",", <br>"));
                  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                  var c = orderDetailss.createdAt;
                  var d = ("0" + c.getDate()).slice("-2") + " " + monthNames[c.getMonth()] + ", " + c.getFullYear();
                  emailTemplate = emailTemplate.replace("[DATEORDERED]",d);
                  var oId = "#"+pad(orderDetailss.barcodeOrderValue,8);
                  emailTemplate = emailTemplate.replace("[ORDERNUMBER]",oId);
                  var productIdss = orderDetailss.productIds;
                  var productsHTML = "";
                  var total = 0;
                  var productTax = 0;
                  var finalDiscount = 0;
                  var finaltotal = 0;
                  for(var i = 0; i < productIdss.length; i++)
                  {
                    var productsss =  products.findOne({_id:productIdss[i].id});
                    productsHTML += '<tr><td class="item-col item"><table cellspacing="0" cellpadding="0" width="100%"><tr><td class="product"><span style="color: #4d4d4d; font-weight:bold;">'+productsss.productName+'</span></td></tr></table></td><td class="item-col quantity">'+productIdss[i].quantity+'</td><td class="item-col">$'+(productsss.price*productIdss[i].quantity)+'</td></tr>';
                    total += (productsss.price*productIdss[i].quantity);
                    if(productsss.productTax)
                    {
                      var tax =  (productsss.price*productsss.productTax)/100;
                      productTax += (tax*productIdss[i].quantity);
                      // productTax = parseFloat(productTax).toFixed(2);
                    }
                    else
                    {
                      productTax = 0.00;
                    }
                  }
                  //
                  if(orderDetailss.discount){
                    finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
                    finaltotal = Number(total) + Number(productTax) - Number(finalDiscount);
                    // total = Number(total) + Number(productTax) - Number(finalDiscount);
                  }
                  else{
                    finalDiscount = 0.00;
                    finaltotal = Number(total) + Number(productTax);
                    // total = Number(total) + Number(productTax);
                  }
                  // var finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
                  // total = total + productTax - finalDiscount;
                  total = parseFloat(total).toFixed(2);
                  productTax = parseFloat(productTax).toFixed(2);
                  finaltotal = parseFloat(finaltotal).toFixed(2);
                  //
                  // // var discount = orderDetailss.discount;
                  // var finalDiscount = orderDetailss.discount
                  // total = total + productTax - finalDiscount;
                  // total = total+;
                  emailTemplate = emailTemplate.replace("[PRODUCTS]",productsHTML);
                  emailTemplate = emailTemplate.replace("[SUBTOTAL]",total);
                  emailTemplate = emailTemplate.replace("[TAX]",productTax);
                  emailTemplate = emailTemplate.replace("[DISCOUNT]",finalDiscount);
                  emailTemplate = emailTemplate.replace("[GROSSTOTAL]",finaltotal);
                  emailTemplate = emailTemplate.replace("[FOOTER]","");
                  Meteor.call('sendEmail',Meteor.user().username,"appbuilding24@gmail.com","Your Order Invoice!!!",emailTemplate);
                  Push.send({
                      from: 'push',
                      title: 'Order Placed Successfully!!!!',
                      text: 'Your order was placed successfully. Click to see details.',
                      badge: 1, //optional, use it to set badge count of the receiver when the app is in background.
                      query: {
                          userId: Meteor.userId()
                      }, // Query the appCollection
                      notId: parseInt(Math.random() * 1000000000, 10),
                      payload: {
                          "orderNotification": true,
                          "orderId": Session.get("ORDERID")
                      }
                      // token: appId or token eg. "{ apn: token }"
                      // tokens: array of appId's or tokens
                      // payload: user data
                      // delayUntil: Date
                  });
                  Router.go("/successPage/"+order._id);
                }
              });
            }
          }
        });
      },
      onCancel: function(data, actions) {
        /* 
         * Buyer cancelled the payment
         */
          var orderId = Session.get("ORDERID");
          Meteor.call("changePaymentStatus", orderId, "pending");
      },
      onError: function(err) {
        /* 
         * An error occurred during the transaction 
         */
         alert("Something went wrong. Please try again later.");
      },
      onClick: function(e)
      {
        var orderId = Session.get("ORDERID");
        Meteor.call("changePaymentStatus", orderId, "Waiting for payment", "Paypal");
      }
    }, '#paypal-button');
});

Template.checkoutPagethird.helpers({
  isNotDelivery: function(){
    if(Session.get("orderTypeSelected") == "delivery")
    {
      return false;
    }
    else
    {
      return true;
    }
  },
  savedCard: function(){
    var a = paymentDetails.find({userId:Meteor.userId()},{limit:1},{sort:{createdAt:-1}}).fetch();
    if(a.length > 0)
    {
      return a[0];
    }
    else
    {
      return [];
    }
  },

  selectedCard: function(card, type){
    var cardtype = card.cardType;
    if(cardtype == type){
      return "selected";
    }
  },

  getmonths: function(){
    var a = [];
    for(var i = 1; i <= 12; i++)
    {
      a.push({"monthVal": i});
    }
    console.log("a", a);
    return a;
  },

  getyears: function(){
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var a = [];
    for(var i = currentYear; i < (currentYear + 16); i++)
    {
      a.push({"yearVal": i});
    }
    return a;
  },

  isSelectedMonth:function(month, card){
    if(month == card.expirationMonth){
      return "select"
    }
  },

  isSelectedYear:function(year, card){
    if(year == card.expirationYear){
      return "select"
    }
  },

});


var tempName = "";

Template.checkoutPagethird.events({
  'change #useNameOnAccount': function(e){
    e.preventDefault();
    
    if($(e.target).is(":checked"))
    {
      tempName = $("#NameOnCard").val();
      var a = Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;
      $("#NameOnCard").val(a.trim());
    }
    else
    {
      $("#NameOnCard").val(tempName);
    }
  },
  'click #submitOrder': function(e)
    {
      e.preventDefault();
      var me = $(e.target);
      var cardNumber = $("#cardNumber").val().trim();
      var NameOnCard = $("#NameOnCard").val();
      var monthCategory = $("#monthCategory").val();
      var yearCategory = $("#yearCategory").val();
      var cvvNumber = $("#cvvNumber").val().trim();
      var paymentType = "credit card";
      var cardType = $("#cardType").val();
      var orderId = Session.get("ORDERID");
      Meteor.call("changePaymentStatus", orderId, "Waiting for payment", "Card");
      var orderDetailss = orders.findOne({_id:orderId});
      var storeDetails = stores.findOne({_id:orderDetailss.storeId});
      var userId = Meteor.userId();
      if($("#saveThecard").is(":checked"))
        {
          var saveThecard = true;
        }
      else
        {
          var saveThecard = false;
        }
      var requiredError = isRequired($("#paymentDetailsForm"),true);
      if(requiredError)
      { 
        return;
        alert("Please Fill Up All Card Details");
      }
      else
      {

          var cardtypecheck = validateCardType(cardNumber);

          //console.log("cardType---",cardType);
          //console.log("cardtypecheck-----",cardtypecheck);
          
          if(cardtypecheck !== cardType)
          {

            alert("Card type and card number are not matching.")
            return false;
          }


        Meteor.call("insertCardDetails", orderId, cardNumber, NameOnCard, monthCategory, yearCategory, userId, saveThecard, paymentType, cardType, new Date(), function(err,res){
          if(err)
          {
            console.log(err.reason);
          }
          else
          {
            // var paymentdetail = paymentDetails.findOne({orderId: Session.get("ORDERID")})
            var currentOrder = orders.findOne({_id: Session.get("ORDERID")});
            var dataDetails = {
              name: NameOnCard,
              number: cardNumber,
              type: cardType.toLowerCase(),
              cvv2: cvvNumber,
              expire_year: yearCategory,
              expire_month: monthCategory
            };
            var finalTotal = parseFloat(currentOrder.grossTotal) + parseFloat(currentOrder.deliveryFees);
            var dataAmounts = {
              total: finalTotal.toString(),
              currency: 'USD'
            };
            me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
            me.attr("disabled",true);


            var aa = require("authorizenet");
            console.log("aa",aa);
            var merchantAuthenticationType = new aa.APIContracts.MerchantAuthenticationType();
            merchantAuthenticationType.setName('562ARFyhB'); //3Ph3uzbH4T6
            merchantAuthenticationType.setTransactionKey('9WQV5Mu2b6Wct82Q'); // 86A8rwF32Q67w7Np

            




            //console.log("merchantAuthenticationType", merchantAuthenticationType);

            var creditCard = new aa.APIContracts.CreditCardType();
            //console.log("CARD TYPE DETAILS---", creditCard); 
            creditCard.setCardNumber(cardNumber);

            //console.log("SETCARDNUMBER---", cardNumber);
            creditCard.setExpirationDate(monthCategory+yearCategory);
            creditCard.setCardCode(cvvNumber);

            var paymentType = new aa.APIContracts.PaymentType();
            paymentType.setCreditCard(creditCard);



            var userField_a = new aa.APIContracts.UserField();
            userField_a.setName('total');
            var finalTotal = parseFloat(currentOrder.grossTotal) + parseFloat(currentOrder.deliveryFees);
            userField_a.setValue(finalTotal.toString());

            

            var userFieldList = [];
            userFieldList.push(userField_a);

            var userFields = new aa.APIContracts.TransactionRequestType.UserFields();
            userFields.setUserField(userFieldList);
            var transactionRequestType = new aa.APIContracts.TransactionRequestType();
            transactionRequestType.setTransactionType(aa.APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
            transactionRequestType.setPayment(paymentType);
            transactionRequestType.setAmount(currentOrder.grossTotal);
            transactionRequestType.setUserFields(userFields);

            var createRequest = new aa.APIContracts.CreateTransactionRequest();
            createRequest.setMerchantAuthentication(merchantAuthenticationType);
            createRequest.setTransactionRequest(transactionRequestType);

            //pretty print request
            //console.log(JSON.stringify(createRequest.getJSON(), null, 2));
              
            var ctrl = new aa.APIControllers.CreateTransactionController(createRequest.getJSON());
            //Defaults to sandbox
            ctrl.setEnvironment(aa.Constants.endpoint.production);

            ctrl.execute(function(){

              var apiResponse = ctrl.getResponse();

              var response = new aa.APIContracts.CreateTransactionResponse(apiResponse);

              //pretty print response
              console.log(JSON.stringify(response, null, 2));
              if(response != null){
                  if(response.getMessages().getResultCode() == aa.APIContracts.MessageTypeEnum.OK){
                    if(response.getTransactionResponse().getMessages() != null){
                      console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
                      console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
                      console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
                      console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
                      Meteor.call("addPayment", response, Router.current().params._id, function(err, res){
                          if(err){
                            console.log(err.reason);
                            me.html('Submit Order');
                            me.attr("disabled",false);
                          }
                          else{
                            if(res == undefined)
                              return;
                            me.html('Submit Order');
                            me.attr("disabled",false);
                            if(typeof storeDetails.address !== "undefined")
                            {
                              emailTemplate = emailTemplate.replace("[GETSHIPPINGADDRESS]",storeDetails.address.replace(",",", <br>"));
                            }
                            else
                            {
                              emailTemplate = emailTemplate.replace("[GETSHIPPINGADDRESS]","");
                            }
                            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                            var c = orderDetailss.createdAt;
                            var d = ("0" + c.getDate()).slice("-2") + " " + monthNames[c.getMonth()] + ", " + c.getFullYear();
                            emailTemplate = emailTemplate.replace("[DATEORDERED]",d);
                            var oId = "#"+pad(orderDetailss.barcodeOrderValue,8);
                            emailTemplate = emailTemplate.replace("[ORDERNUMBER]",oId);
                            var productIdss = orderDetailss.productIds;
                            var productsHTML = "";
                            var total = 0;
                            var productTax = 0;
                            var sinproductTax = 0;
                            var finalDiscount = 0;
                            var finaltotal = 0;
                            for(var i = 0; i < productIdss.length; i++)
                            {
                              var productsss =  products.findOne({_id:productIdss[i].id});
                              productsHTML += '<tr><td class="item-col item"><table cellspacing="0" cellpadding="0" width="100%"><tr><td class="product"><span style="color: #4d4d4d; font-weight:bold;">'+productsss.productName+'</span></td></tr></table></td><td class="item-col quantity">'+productIdss[i].quantity+'</td><td class="item-col">$'+(productsss.price*productIdss[i].quantity)+'</td></tr>';
                              total += (productsss.price*productIdss[i].quantity);
                              if(productsss.productTax)
                              {
                                var tax =  (productsss.price*productsss.productTax)/100;
                                productTax += (tax*productIdss[i].quantity);
                                // productTax = parseFloat(productTax).toFixed(2);
                              }
                              if(productsss.sinProductTax)
                              {
                                var tax =  productsss.sinProductTax;
                                sinproductTax += (tax*productIdss[i].quantity);
                                //total += sinproductTax;
                                // productTax = parseFloat(productTax).toFixed(2);
                              }
                            }

                            /*if(orderDetailss.discount){
                              finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
                              finaltotal = Number(total) + Number(productTax) - Number(finalDiscount);
                            }
                            else{
                              finalDiscount = 0.00;
                              finaltotal = Number(total) + Number(productTax);
                            }*/
                            // var finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
                            // total = total + productTax - finalDiscount;
                            total = parseFloat(total).toFixed(2);
                            productTax = parseFloat(productTax).toFixed(2);
                            sinproductTax = parseFloat(sinproductTax).toFixed(2);
                            finaltotal = parseFloat(total) + parseFloat(productTax) + parseFloat(sinproductTax);
                            finaltotal = finaltotal.toFixed(2);

                            emailTemplate = emailTemplate.replace("[PRODUCTS]",productsHTML);
                            emailTemplate = emailTemplate.replace("[SUBTOTAL]",total);
                            emailTemplate = emailTemplate.replace("[TAX]",productTax);
                            emailTemplate = emailTemplate.replace("[SINTAX]",sinproductTax);
                            emailTemplate = emailTemplate.replace("[DISCOUNT]",finalDiscount);
                            emailTemplate = emailTemplate.replace("[GROSSTOTAL]",finaltotal);
                            emailTemplate = emailTemplate.replace("[FOOTER]","");
                            Meteor.call('sendEmail',Meteor.user().username,"appbuilding24@gmail.com","Your Order Invoice!!!",emailTemplate);
                            Push.send({
                                from: 'push',
                                title: 'Order Placed Successfully!!!!',
                                text: 'Your order was placed successfully. Click to see details.',
                                badge: 1, //optional, use it to set badge count of the receiver when the app is in background.
                                query: {
                                    userId: Meteor.userId()
                                }, // Query the appCollection
                                notId: parseInt(Math.random() * 1000000000, 10),
                                payload: {
                                    "orderNotification": true,
                                    "orderId": Router.current().params._id
                                }
                                // token: appId or token eg. "{ apn: token }"
                                // tokens: array of appId's or tokens
                                // payload: user data
                                // delayUntil: Date
                            });
                            // Router.go("/successPage/"+Router.current().params._id);
                            Router.go("/successPage/"+Session.get("ORDERID"));
                          }
                        });
                    }
                    else {
                      console.log('Failed Transaction.');
                      if(response.getTransactionResponse().getErrors() != null){
                        console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                        console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                        me.html('Submit Order');
                        me.attr("disabled",false);
                        alert(response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                      }
                    }
                  }
                  else {
                    console.log('Failed Transaction.');
                    if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null){
                    
                      console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                      console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                      me.html('Submit Order');
                        me.attr("disabled",false);
                        alert(response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                    }
                    else {
                      console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
                      console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
                      me.html('Submit Order');
                        me.attr("disabled",false);
                        alert(response.getMessages().getMessage()[0].getText());
                    }
                  }
                }
                else {
                  console.log('Null Response.');
                  me.html('Submit Order');
                        me.attr("disabled",false);
                        alert("Something went wrong. Please try again after sometime.");
                }
              /*if(response.messages.resultCode == "Ok")
              {
                Meteor.call("addPayment", response, Router.current().params._id, function(err, res){
                  if(err){
                    console.log(err.reason);
                    me.html('Submit Order');
                    me.attr("disabled",false);
                  }
                  else{
                    if(res == undefined)
                      return;
                    me.html('Submit Order');
                    me.attr("disabled",false);
                    if(typeof storeDetails.address !== "undefined")
                    {
                      emailTemplate = emailTemplate.replace("[GETSHIPPINGADDRESS]",storeDetails.address.replace(",",", <br>"));
                    }
                    else
                    {
                      emailTemplate = emailTemplate.replace("[GETSHIPPINGADDRESS]","");
                    }
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                    var c = orderDetailss.createdAt;
                    var d = ("0" + c.getDate()).slice("-2") + " " + monthNames[c.getMonth()] + ", " + c.getFullYear();
                    emailTemplate = emailTemplate.replace("[DATEORDERED]",d);
                    var oId = "#"+pad(orderDetailss.barcodeOrderValue,8);
                    emailTemplate = emailTemplate.replace("[ORDERNUMBER]",oId);
                    var productIdss = orderDetailss.productIds;
                    var productsHTML = "";
                    var total = 0;
                    var productTax = 0;
                    var finalDiscount = 0;
                    var finaltotal = 0;
                    for(var i = 0; i < productIdss.length; i++)
                    {
                      var productsss =  products.findOne({_id:productIdss[i].id});
                      productsHTML += '<tr><td class="item-col item"><table cellspacing="0" cellpadding="0" width="100%"><tr><td class="product"><span style="color: #4d4d4d; font-weight:bold;">'+productsss.productName+'</span></td></tr></table></td><td class="item-col quantity">'+productIdss[i].quantity+'</td><td class="item-col">$'+(productsss.price*productIdss[i].quantity)+'</td></tr>';
                      total += (productsss.price*productIdss[i].quantity);
                      if(productsss.productTax)
                      {
                        var tax =  (productsss.price*productsss.productTax)/100;
                        productTax += (tax*productIdss[i].quantity);
                        // productTax = parseFloat(productTax).toFixed(2);
                      }
                      else
                      {
                        productTax = 0.00;
                      }
                    }

                    if(orderDetailss.discount){
                      finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
                      finaltotal = Number(total) + Number(productTax) - Number(finalDiscount);
                    }
                    else{
                      finalDiscount = 0.00;
                      finaltotal = Number(total) + Number(productTax);
                    }
                    // var finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
                    // total = total + productTax - finalDiscount;
                    total = parseFloat(total).toFixed(2);
                    productTax = parseFloat(productTax).toFixed(2);
                    finaltotal = parseFloat(finaltotal).toFixed(2);

                    emailTemplate = emailTemplate.replace("[PRODUCTS]",productsHTML);
                    emailTemplate = emailTemplate.replace("[SUBTOTAL]",total);
                    emailTemplate = emailTemplate.replace("[TAX]",productTax);
                    emailTemplate = emailTemplate.replace("[DISCOUNT]",finalDiscount);
                    emailTemplate = emailTemplate.replace("[GROSSTOTAL]",finaltotal);
                    emailTemplate = emailTemplate.replace("[FOOTER]","");
                    Meteor.call('sendEmail',Meteor.user().username,"appbuilding24@gmail.com","Your Order Invoice!!!",emailTemplate);
                    Push.send({
                        from: 'push',
                        title: 'Order Placed Successfully!!!!',
                        text: 'Your order was placed successfully. Click to see details.',
                        badge: 1, //optional, use it to set badge count of the receiver when the app is in background.
                        query: {
                            userId: Meteor.userId()
                        }, // Query the appCollection
                        notId: parseInt(Math.random() * 1000000000, 10),
                        payload: {
                            "orderNotification": true,
                            "orderId": Router.current().params._id
                        }
                        // token: appId or token eg. "{ apn: token }"
                        // tokens: array of appId's or tokens
                        // payload: user data
                        // delayUntil: Date
                    });
                    // Router.go("/successPage/"+Router.current().params._id);
                    Router.go("/successPage/"+Session.get("ORDERID"));
                  }
                });
              }
              else
              {
                me.html('Submit Order');
                    me.attr("disabled",false);
                alert("Payment was failed. Please try again.");
              }*/
            });
          }
        });
      
        }
    },      






    //         Meteor.call("paymentProceed", dataDetails, dataAmounts, function(err, res){
    //           if(err){
    //             me.html('Submit Order');
    //             me.attr("disabled",false);
    //             alert(err.reason);
    //           }
    //           else{
    //             // $(window).load(function(){});
    //               Tracker.autorun(function(){
    //               if(ServerSession.get("paymentResponse")){
    //                 var paymntresponse = ServerSession.get("paymentResponse");
    //                 if(paymntresponse.saved){
    //                   Meteor.call("addPayment", paymntresponse, currentOrder._id, function(err, res){
    //                     if(err){
    //                       cosnole.log(err.reason);
    //                       me.html('Submit Order');
    //                       me.attr("disabled",false);
    //                     }
    //                     else{
    //                       me.html('Submit Order');
    //                       me.attr("disabled",false);

    //                       emailTemplate = emailTemplate.replace("[GETSHIPPINGADDRESS]",storeDetails.address.replace(",",", <br>"));
    //                       var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    //                       var c = orderDetailss.createdAt;
    //                       var d = ("0" + c.getDate()).slice("-2") + " " + monthNames[c.getMonth()] + ", " + c.getFullYear();
    //                       emailTemplate = emailTemplate.replace("[DATEORDERED]",d);
    //                       var oId = "#"+pad(orderDetailss.barcodeOrderValue,8);
    //                       emailTemplate = emailTemplate.replace("[ORDERNUMBER]",oId);
    //                       var productIdss = orderDetailss.productIds;
    //                       var productsHTML = "";
    //                       var total = 0;
    //                       var productTax = 0;
    //                       var finaltotal = 0;
    //                       var finalDiscount = 0;
    //                       for(var i = 0; i < productIdss.length; i++)
    //                       {
    //                         var productsss =  products.findOne({_id:productIdss[i].id});
    //                         productsHTML += '<tr><td class="item-col item"><table cellspacing="0" cellpadding="0" width="100%"><tr><td class="product"><span style="color: #4d4d4d; font-weight:bold;">'+productsss.productName+'</span></td></tr></table></td><td class="item-col quantity">'+productIdss[i].quantity+'</td><td class="item-col">$'+(productsss.price*productIdss[i].quantity)+'</td></tr>';
    //                         total += (productsss.price*productIdss[i].quantity);
    //                         if(productsss.productTax)
    //                         {
    //                           var tax =  (productsss.price*productsss.productTax)/100;
    //                           productTax += (tax*productIdss[i].quantity);
    //                           // productTax = parseFloat(productTax).toFixed(2);
    //                         }
    //                         else
    //                         {
    //                           productTax = 0.00;
    //                         }
    //                       }

    //                       if(orderDetailss.discount){
    //                         finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
    //                         finaltotal = Number(total) + Number(productTax) - Number(finalDiscount);
    //                       }
    //                       else{
    //                         finalDiscount = 0.00;
    //                         finaltotal = Number(total) + Number(productTax);
    //                       }
    //                       // var finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
    //                       // total = total + productTax - finalDiscount;
    //                       total = parseFloat(total).toFixed(2);
    //                       productTax = parseFloat(productTax).toFixed(2);
    //                       finaltotal = parseFloat(finaltotal).toFixed(2);

    //                       // var finalDiscount = orderDetailss.discount
    //                       // total = total + productTax - finalDiscount;
                          
    //                       emailTemplate = emailTemplate.replace("[PRODUCTS]",productsHTML);
    //                       emailTemplate = emailTemplate.replace("[SUBTOTAL]",total);
    //                       emailTemplate = emailTemplate.replace("[TAX]",productTax);
    //                       emailTemplate = emailTemplate.replace("[DISCOUNT]",finalDiscount);
    //                       emailTemplate = emailTemplate.replace("[GROSSTOTAL]",finaltotal);
    //                       emailTemplate = emailTemplate.replace("[FOOTER]","");
    //                       Meteor.call('sendEmail',Meteor.user().username,"appbuilding24@gmail.com","Your Order Invoice!!!",emailTemplate);
    //                       Push.send({
    //                           from: 'push',
    //                           title: 'Order Placed Successfully!!!!',
    //                           text: 'Your order was placed successfully. Click to see details.',
    //                           badge: 1, //optional, use it to set badge count of the receiver when the app is in background.
    //                           query: {
    //                               userId: Meteor.userId()
    //                           }, // Query the appCollection
    //                           notId: parseInt(Math.random() * 1000000000, 10),
    //                           payload: {
    //                               "orderNotification": true,
    //                               "orderId": Session.get("ORDERID")
    //                           }
    //                           // token: appId or token eg. "{ apn: token }"
    //                           // tokens: array of appId's or tokens
    //                           // payload: user data
    //                           // delayUntil: Date
    //                       });
    //                       Router.go("/successPage/"+Session.get("ORDERID"));
    //                     }
    //                   }); 
    //                 }
    //                 else{
    //                   Meteor.call("addPayment", paymntresponse, Session.get("ORDERID"), function(err, res){
    //                     if(err){
    //                       alert(err.reason);
    //                       me.html('Submit Order');
    //                       me.attr("disabled",false);
    //                     }
    //                     else{
    //                       me.html('Submit Order');
    //                       me.attr("disabled",false);
    //                       Router.go("/successPage/"+Session.get("ORDERID"));
    //                     }
    //                   });
    //                   me.html('Submit Order');
    //                   me.attr("disabled",false);
    //                   alert("payment failed");
    //                 }
    //               }
    //             });
    //           }
    //         });
    //       }
    //     });
    //   }
    // },

    'click #cashOnDelivery': function(e)
    {


      if(confirm("Are you sure for COD ?"))
      {
        // $("#mypayment").hide();
        e.preventDefault();
        var me = $(e.target);

        var currentOrder = orders.findOne({_id: Session.get("ORDERID")});
        var orderDetailss = currentOrder;
        var storeDetails = stores.findOne({_id:orderDetailss.storeId});
        //console.log("storeDetails",storeDetails);

          me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
          me.attr("disabled",true);

        paymentType = "pending"
        Meteor.call("updateOrderPaymentStatus", currentOrder, paymentType, function(err,res){
          if(err)
          {
            console.log(err.reason);
          }
          else
          {
            emailTemplate = emailTemplate.replace("[GETSHIPPINGADDRESS]",storeDetails.address.replace(",",", <br>"));
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
            var c = orderDetailss.createdAt;
            var d = ("0" + c.getDate()).slice("-2") + " " + monthNames[c.getMonth()] + ", " + c.getFullYear();
            emailTemplate = emailTemplate.replace("[DATEORDERED]",d);
            var oId = "#"+pad(orderDetailss.barcodeOrderValue,8);
            emailTemplate = emailTemplate.replace("[ORDERNUMBER]",oId);
            var productIdss = orderDetailss.productIds;
            var productsHTML = "";
            var total = 0;
            var productTax = 0;
            var sinproductTax = 0;
            var finalDiscount = 0;
            var finaltotal = 0;

             // me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
             // me.attr("disabled",true);


            for(var i = 0; i < productIdss.length; i++)
            {
              var productsss =  products.findOne({_id:productIdss[i].id});
              productsHTML += '<tr><td class="item-col item"><table cellspacing="0" cellpadding="0" width="100%"><tr><td class="product"><span style="color: #4d4d4d; font-weight:bold;">'+productsss.productName+'</span></td></tr></table></td><td class="item-col quantity">'+productIdss[i].quantity+'</td><td class="item-col">$'+(productsss.price*productIdss[i].quantity)+'</td></tr>';
              total += (productsss.price*productIdss[i].quantity);
              if(productsss.productTax)
              {
                var tax =  (productsss.price*productsss.productTax)/100;
                productTax += (tax*productIdss[i].quantity);
                //total += productTax;
                // productTax = parseFloat(productTax).toFixed(2);
              }
              
              if(productsss.sinProductTax)
              {
                var tax =  productsss.sinProductTax;
                sinproductTax += (tax*productIdss[i].quantity);
                //total += sinproductTax;
                // productTax = parseFloat(productTax).toFixed(2);
              }
              
            }
            /*if(orderDetailss.discount){
              finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
              finaltotal = Number(total) + Number(productTax) - Number(finalDiscount);
            }
            else{
              finalDiscount = 0.00;
              finaltotal = Number(total) + Number(productTax);
            }*/
            // var finalDiscount = parseFloat(orderDetailss.discount).toFixed(2);
            // total = total + productTax - finalDiscount;
            total = parseFloat(total).toFixed(2);
            productTax = parseFloat(productTax).toFixed(2);
            sinproductTax = parseFloat(sinproductTax).toFixed(2);
            finaltotal = parseFloat(total) + parseFloat(productTax) + parseFloat(sinproductTax);
            finaltotal = finaltotal.toFixed(2);
            emailTemplate = emailTemplate.replace("[PRODUCTS]",productsHTML);
            emailTemplate = emailTemplate.replace("[SUBTOTAL]",total);
            emailTemplate = emailTemplate.replace("[TAX]",productTax);
            emailTemplate = emailTemplate.replace("[SINTAX]",sinproductTax);
            emailTemplate = emailTemplate.replace("[DISCOUNT]",finalDiscount);
            emailTemplate = emailTemplate.replace("[GROSSTOTAL]",finaltotal);
            emailTemplate = emailTemplate.replace("[FOOTER]","<span class=\"header-sm\">Please pay at the store and collect your order.</span>");
            Meteor.call('sendEmail',Meteor.user().username,"appbuilding24@gmail.com","Your Order Invoice!!!",emailTemplate);
            Push.send({
                      from: 'push',
                      title: 'Order Placed Successfully!!!!',
                      text: 'Your order was placed successfully. Click to see details.',
                      badge: 1, //optional, use it to set badge count of the receiver when the app is in background.
                      query: {
                          userId: Meteor.userId()
                      }, // Query the appCollection
                       notId: parseInt(Math.random() * 1000000000, 10),
                      payload: {
                          "orderNotification": true,
                          "orderId": currentOrder._id
                      }
                      // token: appId or token eg. "{ apn: token }"
                      // tokens: array of appId's or tokens
                      // payload: user data
                      // delayUntil: Date
                  });
            me.attr("disabled",false);
            Router.go("/SuccessPage/"+currentOrder._id);
          }
        });
        // add value for cash on delivery
      }
      else
      {
        // $("#mypayment").show();
        return;
      }

    }
});
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}