Template.howAreWeDoing.onCreated(function() {
	Meteor.subscribe("getSettings");
});
Template.howAreWeDoing.onRendered(function() {
	$("body").css("overflow","auto");
	
});
Template.howAreWeDoing.helpers({	
	isDevice: function(){
		if(Meteor.isCordova)
		{
			return true;
		}
		else
		{
			return false;
		}
	},
	getEmail: function(){
		if(settings.findOne({"settingName": "ADMINEMAIL"}) != null)
		{
			return settings.findOne({"settingName": "ADMINEMAIL"}).settingValue;
		}
	}
});
Template.howAreWeDoing.events({
	'click #rateAppLink': function(e)
	{
		e.preventDefault();
		AppRate.preferences.storeAppURL = {
  			ios: 'com.shopskip.app',
  			android: 'market://details?id=com.shopskip.app'
		};
		AppRate.promptForRating();
	},
	'click #shareApp': function(e)
	{
		e.preventDefault();
		var deviceName = device.platform;
		var setttingsAndroid = settings.findOne({"settingName": "ANDROIDAPPLINK"});
		var setttingsIOS = settings.findOne({"settingName": "ANDROIDAPPLINK"});
		var finalLink;
		if(deviceName.toLowerCase() == "android")
		{
			finalLink = setttingsAndroid.settingValue;
		}
		else
		{
			finalLink = setttingsIOS.settingValue;
		}
		var options = {
		  message: 'Shop Skip Liquor Store', // not supported on some apps (Facebook, Instagram)
		  subject: '', // fi. for email
		  url: finalLink,
		  chooserTitle: '' // Android only, you can override the default share sheet title
		};
		var onSuccess = function(result) {
		  //console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
		  //console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
		};

		var onError = function(msg) {
		  //console.log("Sharing failed with message: " + msg);
		};
		window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
	}
});
