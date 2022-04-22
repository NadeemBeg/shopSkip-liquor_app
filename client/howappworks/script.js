Template.howappworks.onCreated(function() {
	Meteor.subscribe('getAppContents');
});
Template.howappworks.onRendered(function() {
	$("body").css("overflow","auto");
	
	
	$('.common-form').css('height', "calc(100vh - 47px)");
});
Template.howappworks.helpers({
	getAppContents:function(){
		return howappworks.find().fetch();
	},
	isActive:function(n){
		if(n==0){
			return "active"
		}
	},
	isLoggedIn: function()
	{
		if(typeof Meteor.user() !== "undefined")
		{
			if(Meteor.user() != null)
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
	},
	getImage: function(n)
	{
		var url = n;
		url = url.split("upload");
		url = url[0] + "upload/c_pad,h_400,w_400" + url[1];
		url = url.replace("http://","https://");
		var ext = url.substr(url.lastIndexOf(".")+1);
		if(ext == "webp")
		{
		  ext = "png";
		  url = url.substr(0,url.lastIndexOf("."));
		  url += "." + ext;
		}
		return url;
	}
});
Template.howappworks.events({
	'click #skipIntro': function(e)
	{
		localStorage.setItem("newlyInstalled","No")
		Router.go("/dashboard");
	}
});
