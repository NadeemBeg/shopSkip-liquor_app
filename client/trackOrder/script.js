Template.trackOrder.onCreated(function(){
	Meteor.subscribe("getOrderById", Template.instance().data.id);
	Meteor.subscribe("getStores");
});
Template.trackOrder.onRendered(function(){});
Template.trackOrder.helpers({
	getOrderDetails: function(){
		var orderDetails = orders.find({
			"_id": Template.instance().data.id
		});
		if(orderDetails.count() > 0)
		{
			orderDetails = orderDetails.fetch()[0];
			console.log("orderDetails", orderDetails);
			return orderDetails;
		}
	},
	getConnectedOrderNumber: function(id){
		Meteor.subscribe("getOrderById", id);
		var orderDetails = orders.find({
			"_id": id
		});
		if(orderDetails.count() > 0)
		{
			orderDetails = orderDetails.fetch()[0];
			console.log("connectedOrder", orderDetails);
			return orderDetails.orderNumber;
		}
	},
	getStoreDetails: function(id)
	{
		var storeDetails = stores.find({
			"_id": id
		});
		if(storeDetails.count() > 0)
		{
			storeDetails = storeDetails.fetch()[0];
			console.log("storeDetails", storeDetails);
			return storeDetails;
		}
	},
	getNumbers: function(arr)
	{
		var html = "";
		html = "<ul>";
		for(var i = 0; i < arr.length; i++)
		{
			html += '<li>' + arr[i].phoneNum + '</li>';
		}
		html += "</ul>";
		return html;
	},
	getOrderStatus: function(orderRec)
	{
		if(orderRec.OrderType == "delivery")
		{
			if(orderRec.status == "pending")
			{
				return "Hang tight<br>Your order is being put together<br><br>You will be notified<br>when it is picked up<br>for delivery"
			}
			else if(orderRec.status == "Ready for pickup")
			{
				return "Your order is on its way<br>for delivery"
			}
			else if(orderRec.status == "Completed")
			{
				return "Your order has been delivered"
			}
			else if(orderRec.status == "Order Cancelled")
			{
				return "Hang tight<br>Your order is being put together<br><br>You will be notified<br>when it is picked up<br>for delivery"
			}
			
		}
		else if(orderRec.OrderType == "pickup")
		{
			if(orderRec.status == "pending")
			{
				return "Hang tight<br>Your order is being put together<br><br>You will be notified<br>when it is ready up<br>for pick up"
			}
			else if(orderRec.status == "Ready for pickup")
			{
				return "Your order is ready for<br>pick up"
			}
			else if(orderRec.status == "Completed")
			{
				return "Your order has been picked up"
			}
			else if(orderRec.status == "Order Cancelled")
			{
				return "Your order has been cancelled"
			}
		}
	}
});
Template.trackOrder.events({});