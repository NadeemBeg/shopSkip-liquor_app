Template.deliveryStep1.onCreated(function(){
  Meteor.subscribe('getCheckoutFirst', Meteor.userId());
  Meteor.subscribe('getOrders');
  Meteor.subscribe('getStores');
});
Template.deliveryStep1.onRendered(function(){});
Template.deliveryStep1.helpers({
  getOrderId: function(){
    return Router.current().params._id;
  },
  userFirstName: function(){
    return Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;
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
  },
  hasPickupProducts: function(){
    if(Session.get("orderTypeSelected") == "pickup")
    {
      return true;
    }
    var orderDetails = orders.find({_id: Router.current().params._id});
    if(orderDetails.count() > 0)
    {
      orderDetails = orderDetails.fetch()[0];
      if(typeof orderDetails.pickupProductIds !== "undefined")
      {
        if(orderDetails.pickupProductIds.length > 0)
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
    }
  },
  hasDeliveryProducts: function(){
    if(Session.get("orderTypeSelected") == "delivery")
    {
      
      var orderDetails = orders.find({_id: Router.current().params._id});
      if(orderDetails.count() > 0)
      {
        orderDetails = orderDetails.fetch()[0];
        if(typeof orderDetails.deliveryProductIds !== "undefined")
        {
          if(orderDetails.deliveryProductIds.length > 0)
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
      }

    }
    else
    {
      return false;
    }
  }
});
Template.deliveryStep1.events({
  'click #submitcheckoutPagefirst': function(e)
  {
    e.preventDefault();
    var me = $(e.target);
    var name = $("#firstname").val();
    name = name.split(" ");
    var firstname = name[0];
    var lastname = (typeof name[1] !== "undefined")?name[1]:"";
    var emailaddress = $("#emailaddress").val();
    var phonenumber = $("#phonenumber").val();
    var aptNumber = $("#aptNumber").val();
    var address = $("#address").val();
    var pickupTime = $("#pickupTimingSelectBox").val();
    var mode = $("input[name='prefferedNotificationMode']:checked").val();
    if(address == ""){
      alert("Please add Delivery Address.");
      return;  
    }
    else if(pickupTime == ""){
      alert("Please select Pickup Time.");
      return;
    }
    else
    {
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
        else
        { 
          var phoneError = validateMobileNumber($("#checkoutPage1form"),true);
          if(phoneError > 0)
          {
            me.html('checkout Account');
            me.attr("disabled",false);
            return;
          }
          else
          {
            var emailError = validateEmail($("#checkoutPage1form"),true);
            if(emailError > 0)
            {
              me.html('checkout Account');
              me.attr("disabled",false);
              return;
            }
            else
            {
              Meteor.call("updateOrdersDelivery", firstname, lastname, emailaddress, phonenumber, orderId, pickupTime, address, aptNumber, mode, function(err, res)
              {
                if(err)
                {
                  alert(err.reason);
                }
                else
                {
                  Meteor.call("updatePhoneNumber", Meteor.user(), phonenumber, function(err, res)
                  {
                    if(err)
                    {
                      console.log(err);
                    }
                    else
                    {
                      //Router.go("/checkoutPagethird/" + orderId);
                      Router.go("/checkoutPageSecond/" + orderId);
                    }
                  });            
                }
              });
            }
          }
        }
      }
    }
  }
});