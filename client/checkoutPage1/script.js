Template.checkoutPagefirst.onCreated(function() {
  Meteor.subscribe('getCheckoutFirst');
  Meteor.subscribe('getOrders');
  Meteor.subscribe('getStores');
});
Template.checkoutPagefirst.onRendered(function() {
  var forCheckMsg = Router.current().params._id;
  Session.set("forCheckMsg",forCheckMsg);
  $("body").css("overflow","auto");
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
  },300);

  var j = setInterval(function(){
    if($('.content.common-form.checkout-page.form .container').length > 0)
    {
      clearInterval(j);
      var a = $(window).height();
      var b = $('.main-header').outerHeight();
      var c = $(".checkoptsetp").outerHeight();
      var d = $(".next-btns").outerHeight();
      var f = a - b - c - d;
      $('.content.common-form.checkout-page.form .container').css('height', f);
      $('.content.common-form.checkout-page.form .container').css('overflow', "auto");
    }
  },100);


});
Template.checkoutPagefirst.helpers({
  getOrderId: function(){
    return Router.current().params._id;
  },
  checkMsg: function(){
    return !Meteor.user().profile.smsOrderUpdate;
  },
  userFirstName: function(){
    return Meteor.user().profile.firstName;
  },
  userLastName: function(){
    return Meteor.user().profile.lastName;
  },
  userEmailAddress: function(){
    return Meteor.user().username;
  },
  userPhoneNumber: function(){
    return Meteor.user().profile.phoneNumber;
  },
  orderDetails: function(){
    return orders.findOne({_id: Router.current().params._id});
  },
  productStoreAddress: function(){
    var storeId = orders.findOne({_id: Router.current().params._id})
    
    if(typeof storeId !== "undefined")
    {
      storeId = storeId.storeId;
      //console.log("storeId",storeId);
      var a = stores.findOne({_id: storeId});
      //console.log("muki", a);
      if(typeof a !== "undefined")
      {
        
        return a.address;
      }
    }
  },
  productStorePhnNumber: function(){
    var storeId = orders.findOne({_id: Router.current().params._id})
    
    if(typeof storeId !== "undefined")
    {
      storeId = storeId.storeId;
      //console.log("storeId",storeId);
      var a = stores.findOne({_id: storeId});
      if(typeof a !== "undefined")
      {
        //console.log("muki", a);
        return a.phoneNumber;
      }
    }
   
  },
  productStoreTiming: function(){
    
    var storeId = orders.findOne({_id: Router.current().params._id})
    
    if(typeof storeId !== "undefined")
    {
      storeId = storeId.storeId;
      //console.log("storeId",storeId);
      var a = stores.findOne({_id: storeId});
      if(typeof a !== "undefined")
      {
        //console.log("muki", a);
        var storeTimings = a.storetimes;
        var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
        var d = new Date(usaTime);

        //console.log("NEW YORK TIME ZONE ----", d);
        var dayName = days[d.getDay()]+"Time";
        return  moment(storeTimings[dayName].openTime).format("hh:mm A") + " - " +  moment(storeTimings[dayName].closeTime).format("hh:mm A")
      }
    }
  },
  pickupTimes: function(){
    var order = orders.findOne({_id: Router.current().params._id});
    var storeId = order.storeId;
    var store = stores.findOne({_id: storeId});
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
        })
        }
        else
        {
        arr.push({
        "val": c,
        "text": c + " minutes"
        })
        }
      c = c + 30;
    }
    //console.log("close or not", arr);
    return arr;
  }
});
Template.checkoutPagefirst.events({
  'click #goNotificationPage':function(){
    Router.go("/notification/");
  },
  'click #submitcheckoutPagefirst': function(e)
    {
      e.preventDefault();
      var me = $(e.target);
      var firstname = $("#firstname").val();
      var lastname = $("#lastname").val();
      var emailaddress = $("#emailaddress").val();
      var phonenumber = $("#phonenumber").val();
      var pickupTime = $("#pickupTimingSelectBox").val();
      //console.log("pickupTime",pickupTime);
      
      if(pickupTime == ""){
        alert("Please select pickup Time");  
      }
      else{
        // if($("#receiveTextMessages").is(':checked')){
        //   var receiveTextMessages = true;
        //   // alert(receiveTextMessages)
        // }
        // else{
        //  var receiveTextMessages = false;
        //   // alert(receiveTextMessages)  
        // }
      var orderId = Router.current().params._id;
      var requiredError = isRequired($("#checkoutPage1form"),true);
      if(requiredError)
      { 
        
        me.attr("disabled",false);
        return;
        
      }

      else
      {

            var nameError = validateName($("#checkoutPage1form"),true);
              if(nameError > 0)
              {
                me.html('checkout Account');
                me.attr("disabled",false);
                return;
              }

             else { 


              var phoneError = validateMobileNumber($("#checkoutPage1form"),true);
              if(phoneError > 0)
              {
                me.html('checkout Account');
                me.attr("disabled",false);
                return;
              }

             else { 


              var emailError = validateEmail($("#checkoutPage1form"),true);
              if(emailError > 0)
              {
                me.html('checkout Account');
                me.attr("disabled",false);
                return;
              }

             else { 

        Meteor.call("updateOrders", firstname, lastname, emailaddress, phonenumber, orderId, pickupTime, function(err, res){
          if(err){
            alert(err.reason);
          }
          else{
            Meteor.call("updatePhoneNumber", Meteor.user(), phonenumber, function(err, res){
              if(err){
                console.log(err);
              }
              else{
                Router.go("/checkoutPageSecond/" + orderId);
              }
            })            
          }
        });
      }
    }
  }
  }

    }
    }
});
