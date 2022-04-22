Template.coupons.onCreated(function() {
	Meteor.subscribe('getCoupons');
});
Template.coupons.onRendered(function() {
	$("body").css("overflow","auto");
	
	var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  // $('.common-form').css('height', c);
});
Template.coupons.helpers({
	getCoupons:function()
	{
		return coupons.find({validFrom: { $lte: new Date() }, validTo: { $gte: new Date() }}).fetch();
	},
	couponAvailability: function(couponId)
	{
		if(coupons.findOne({_id: couponId}))
		{
			var couponname = coupons.findOne({_id: couponId}).couponName
		}
		var couponUsed = orders.findOne({userId: Meteor.userId(), couponCode: couponname, status: "Success"});
		if(couponUsed)
		{
			return "Coupon Redeemed"
		}
		else
		{
			return "Coupon Available"
		}
	},
	getCouponType: function(id)
	{
		var data = coupons.findOne({_id: id});
		if(data !== null)
		{
			if(data.couponType == "percent")
			{
				return "%";
			}
			else
			{
				return "$";
			}
		}
	}
});
Template.coupons.events({
});
