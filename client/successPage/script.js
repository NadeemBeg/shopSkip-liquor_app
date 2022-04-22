Template.successPage.onCreated(function() {
	Meteor.subscribe("getOrders");
	Meteor.subscribe("getStores");
});
Template.successPage.onRendered(function() {
	$("body").css("overflow","auto");
	 ServerSession.set("paymentResponse",undefined);

	 setTimeout(function(){
	 	console.log("test settime out");
		function pad(n, width, z) {
		  z = z || '0';
		  n = n + '';
		  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		}
		// JsBarcode("#barcode", "Hi!");
		var barcodeValue = orders.findOne({_id: Router.current().params._id});
		if(barcodeValue != null)
		{
			barcodeValue = barcodeValue.barcodeOrderValue
		}
		var barcodeValue = pad(barcodeValue,8)
		JsBarcode("#barcode", barcodeValue);
		//console.log("barcodeValue",barcodeValue);
	},2000)

      var orderUserID = orders.findOne({_id: Router.current().params._id});
      var orderPrice = orderUserID.total;
      var orderNumber = orderUserID.orderNumber;
      var smsOrderUpdate = Meteor.user().profile.smsOrderUpdate;
      if(smsOrderUpdate == true){
            // if(orderUserID.receiveTextMessages == true){
              var num = orderUserID.phoneNumber;
              var code = Meteor.user().profile.countryCode;
              var numbertosend = code+num; //9723875945  9714843622
              var msg = "\n Hello"+orderUserID.contactDetails.firstName+" "+orderUserID.contactDetails.lastName+"\n \n Your Order ID is "+orderNumber+ " And Order Cost is "+orderPrice+" \n\n Thank You, \n Liquor Team.";
              Meteor.call("sendSMS", numbertosend, msg, function(err,res){
                if(err){
                  console.log(err);
                }
              })
            // }
        }
        else{
        	var num = orderUserID.phoneNumber;
        	var code =Meteor.user().profile.countryCode;
            // var numbertosend = '+'+code+num;
            var numbertosend = code+num;
            var msg = "\n Hello"+orderUserID.contactDetails.firstName+" "+orderUserID.contactDetails.lastName+"\n \n Your Setting in Order Update SMS not On. \n\n Thank You, \n Liquor Team.";
              Meteor.call("sendSMS", numbertosend, msg, function(err,res){
                if(err){
                  console.log("send msg error ",err);
                }
                else{
                  //console.log("successfully send msg2 ", res);
      						// console.log(res);
                }
              })
        }

        //28/2/19 

        //30march2020 code start
        console.log("test start store admin msg");
        var storeID = orderUserID.storeId;
        if(storeID !== "undefined"){
        	var storeDeatils = stores.findOne({_id:storeID});
        	if(storeDeatils.storeNumbers !== "undefined"){
        		var storeNumberCount = storeDeatils.storeNumbers
        		if(storeNumberCount.length > 0 ){
        			for(var i = 0; i < storeNumberCount.length; i++){
        				var numbertosend = "+91"+storeNumberCount[i].phoneNum;
        				var msg = "New order receieved!!! \n Please find the below order details: \n\n Order Id: " + orderUserID._id;
        				Meteor.call("sendSMS", numbertosend, msg, function(err,res){
			                if(err){
			                  console.log("send msg error ",err);
			                }
			                else{
			                  //console.log("successfully send msg2 ", res);
			      						// console.log(res);
			                }
			        	});
        			}
        		}
        	}
        	else{
        		console.log("store number null");
        	}
        }
        else{
        	console.log("not found store");
        }

        //30march2020 code end
	
	var a = $(window).height();
 	var b = $('.main-header').outerHeight();
  	var c = a - b;
  	// $('.common-form').css('height', c);
	
	// setTimeout(function(){
	// 	function pad(n, width, z) {
	// 	  z = z || '0';
	// 	  n = n + '';
	// 	  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	// 	}
	// 	// JsBarcode("#barcode", "Hi!");
	// 	var barcodeValue = orders.findOne({_id: Router.current().params._id});
	// 	if(barcodeValue != null)
	// 	{
	// 		barcodeValue = barcodeValue.barcodeOrderValue
	// 	}
	// 	var barcodeValue = pad(barcodeValue,8)
	// 	JsBarcode("#barcode", barcodeValue);
	// 	console.log("barcodeValue",barcodeValue);
	// },2000)

});
Template.successPage.helpers({
	isOrderSucceed: function(){
		// var order = payments.findOne({_id: Router.current().params._id});
		var order = orders.findOne({_id: Router.current().params._id});
		if(order != null)
		{
			orderId = order._id;
			var orderDetails = orders.findOne({_id: orderId});
			if(orderDetails != null)
			{
				orderDetails = orderDetails.status;
				if(orderDetails == "pending")
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		}
		else
		{
			var orderDetails = orders.findOne({_id: Router.current().params._id});
			if(orderDetails != null)
			{
				orderDetails = orderDetails.status;
				if(orderDetails == "pending")
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		}
	},
	storeDetails: function(){
		var order = orders.find({_id: Router.current().params._id});
		if(order.count() > 0)
		{
			order = order.fetch()[0];
			var storeId = order.storeId;
			var storeDetails = stores.find({
				"_id": storeId
			});
			if(storeDetails.count() > 0)
			{
				return storeDetails.fetch()[0];
			}
		}

	},
	getNumbers: function(arr)
	{
		console.log(arr);
		var html = "";
		html = "<ul>";
		for(var i = 0; i < arr.length; i++)
		{
			html += '<li>' + arr[i].phoneNum + '</li>';
		}
		html += "</ul>";
		return html;
	},
	openinmap: function(storeRec)
	{
		try{
			if (Meteor.isCordova) {
				if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
				    return buildiOSMapLinkNew(storeRec.storeLat,storeRec.storeLng);
				} else {
				    return buildWebMapLinkNew(storeRec.storeLat,storeRec.storeLng);
				}
			} else {
				return buildWebMapLinkNew(storeRec.storeLat,storeRec.storeLng);
			}
		}
		catch(err)
		{

		}
	},
	isNotShopInStore: function(){
		var a = Session.get("orderTypeSelected");
		if(a == "delivery" || a == "pickup")
		{
			return true;
		}
		else
		{
			return false;
		}
	},
	isPickup: function(){
		var a = Session.get("orderTypeSelected");
		if(a == "pickup")
		{
			return true;
		}
		else
		{
			return false;
		}
	},
	isDelivery: function(){
		var a = Session.get("orderTypeSelected");
		if(a == "delivery")
		{
			return true;
		}
		else
		{
			return false;
		}
	},
	isShopInStore: function(){
		var a = Session.get("orderTypeSelected");
		if(a == "delivery" || a == "pickup")
		{
			return false;
		}
		else
		{
			return true;
		}
	},
	isDeliveryAndPickup: function(){
		var a = Session.get("orderTypeSelected");
		if(a == "delivery")
		{
			var order = orders.find({_id: Router.current().params._id});
			var d = 0;
			var p = 0;
			if(order.count() > 0)
			{
				order = order.fetch()[0];
				if(order.deliveryProductIds.length > 0)
				{
					d = 1;
				}
				if(order.pickupProductIds.length > 0)
				{
					p = 1;
				}
				if(d == 1 && p == 1)
				{
					return true;
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
	},
});
Template.successPage.events({
	'click #keepShopping': function(e)
		{
			e.preventDefault();
			ServerSession.set("paymentResponse",undefined);
	    	Router.go("/products");
		}
});

function buildiOSMapLinkNew(lat,lng)
{
   let locationString = _.compact([
     lat,
     lng
   ]).join(',');

   if (locationString) {
     let queryString = encodeURIComponent(locationString);
     return `http://maps.apple.com/?daddr=${queryString}&dirflg=d&t=h`;
   }

}

function buildWebMapLinkNew(lat,lng)
{
	var queryString;

   var locationString = _.compact([
     lat,
     lng
   ]).join(',');

   if (locationString) {
     queryString = encodeURIComponent(locationString);
     return `https://www.google.com/maps?saddr=My+Location&daddr=${queryString}`;
   }
}
function buildAndroidLinkNew(lat,lng){
   var queryString;

   var locationString = _.compact([
     lat,
     lng
   ]).join(' ');

   if (locationString) {
     queryString = encodeURIComponent(locationString);
     return `http://www.google.com/maps/place/${queryString}`;
   }
 }