Template.notification.onCreated(function() {
});
Template.notification.onRendered(function() {
	$("body").css("overflow","auto");
	
	var a = $(window).height();
	var b = $('.main-header').outerHeight();
	var c = a - b;
	// $('.common-form').css('height', c);
	
	setTimeout(function(){
		$('.switch').show();
		$('.switch').bootstrapSwitch();
	},1000);
});
Template.notification.helpers({
	cartCount: function() {
		var totalProduct = 0;
		var count = carts.find({userId: Meteor.userId()}).fetch();
		for(i=0; i<count.length; i++){
      // console.log("carts",count[i].productQuantity);
      totalProduct +=Number(count[i].productQuantity);
      // console.log("totalProduct",totalProduct);
  }
  return totalProduct;
},
promotionChecked: function(){
	if(typeof Meteor.user() !== "undefined")
	{
		if(typeof Meteor.user().profile !== "undefined")
		{
			if(typeof Meteor.user().profile.promotions !== "undefined")
			{
				return Meteor.user().profile.promotions;
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
pushOrderChecked: function(){
	if(typeof Meteor.user() !== "undefined")
	{
		if(typeof Meteor.user().profile !== "undefined")
		{
			if(typeof Meteor.user().profile.pushOrderUpdate !== "undefined")
			{
				if(Meteor.user().profile.pushOrderUpdate == true)
				{
					return "checked"
				}
				else
				{
					return ""
				}
			}
		}
	}
},
smsChecked: function(){
	if(typeof Meteor.user() !== "undefined")
	{
		if(typeof Meteor.user().profile !== "undefined")
		{
			if(typeof Meteor.user().profile.smsOrderUpdate !== "undefined")
			{
				if(Meteor.user().profile.smsOrderUpdate == true)
				{
					return "checked"
				}
				else
				{
					return ""
				}
			}
		}
	}
},
showOrderButton: function(){
	if(typeof Template.instance().data.id !== "undefined"){
		return true;
	}
	else
	{
		return false;
	}
}

});
Template.notification.events({
	'change #Promotion': function(e)
	{
		e.preventDefault();
		if($("#Promotion").is(":checked")){
			var a = Meteor.users.update({ _id: Meteor.userId() },{ $set: { 'profile.promotions': true }});
		}
		else
		{
			var a = Meteor.users.update({ _id: Meteor.userId() },{ $set: { 'profile.promotions': false }});
		}
	},
	'change #push_ord_update': function(e)
	{
		e.preventDefault();
		if($("#push_ord_update").is(":checked")){
			Meteor.users.update({ _id: Meteor.userId() },{ $set: { 'profile.pushOrderUpdate': true }});
		}
		else
		{
			Meteor.users.update({ _id: Meteor.userId() },{ $set: { 'profile.pushOrderUpdate': false }});
		}
	},
	'change #sms_ord_update': function(e)
	{
		e.preventDefault();
		if($("#sms_ord_update").is(":checked")){
			Meteor.users.update({ _id: Meteor.userId() },{ $set: { 'profile.smsOrderUpdate': true }});	
		}
		else
		{
			Meteor.users.update({ _id: Meteor.userId() },{ $set: { 'profile.smsOrderUpdate': false }});
		}
	},
	'click #backToMyOrder': function(){

	if(typeof Template.instance().data.id !== "undefined"){
		var goCheckout1 = Template.instance().data.id;	
		Router.go("/checkoutPagefirst/" + goCheckout1);
	}
	else{

	}
	
	}
});
