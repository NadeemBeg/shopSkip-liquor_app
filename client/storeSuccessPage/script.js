Template.storeSuccessPage.onCreated(function() {
	Meteor.subscribe("getOrders");
});
Template.storeSuccessPage.onRendered(function() {
	$("body").css("overflow","auto");
	ServerSession.set("paymentResponse",undefined);
	var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);

  setTimeout(function(){
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
		//console.log("barcodeValue storeSuccessPage",barcodeValue);
	},2000)
  
});
Template.storeSuccessPage.helpers({
	isOrderSucceed: function(){
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
	}
});
Template.storeSuccessPage.events({
	'click #keepShopping': function(e)
		{
			e.preventDefault();
			ServerSession.set("paymentResponse",undefined);
	    Router.go("/products"); 
		}
});
