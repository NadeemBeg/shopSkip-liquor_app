Template.settings.onCreated(function() {
});

Template.settings.onRendered(function() {
	$("body").css("overflow","auto");
	
	setTimeout(function(){
		//$('.switch').bootstrapSwitch();
		$('.switch')['bootstrapSwitch']();
	},500);
	var a = $(window).height();
	var b = $('.main-header').outerHeight();
	var c = a - b;
	$('.common-form').css('height', c);
});

Template.settings.helpers({
	settingNotChecked: function(){
		if(typeof Meteor.user() !== "undefined")
		{
			if(typeof Meteor.user().profile !== "undefined")
			{
				if(typeof Meteor.user().profile.settingNotifications !== "undefined")
				{
					if(Meteor.user().profile.settingNotifications == true)
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
  }
});

Template.settings.events({
	'change #notification': function(e)
		{
			e.preventDefault();
			if($("#notification").is(":checked")){
				var a = Meteor.users.update({ _id: Meteor.userId() },{ $set: { 'profile.settingNotifications': true }});
			}
			else
			{
				var a = Meteor.users.update({ _id: Meteor.userId() },{ $set: { 'profile.settingNotifications': false }});
			}
		}
});
