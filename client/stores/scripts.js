Template.storePage.onCreated(function() {
	Meteor.subscribe('getStores');
});
Template.storePage.onRendered(function() {
	PostSubs.clear();
	$("body").css("overflow","auto");
	
	var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  // $('.common-form').css('height', c);

	$('.switch').bootstrapSwitch();
});
Template.storePage.helpers({
	getStores: function(){
		return stores.find({"isActive":true}).fetch();
	},
	storeImage: function(storeId){
		if(stores.findOne({_id: storeId}) != null)
		{
			var store = stores.findOne({ _id: storeId});
	    var image = store.storeImage;
	    if(image != null)
	    {
		    var imageUrl = image.split("upload")
		    imageUrl = imageUrl[0]+"upload/c_scale,w_228,h_208"+imageUrl[1];
		    imageUrl = imageUrl.replace("http://","https://");
		    return imageUrl;
	    }
		}
	},
	StoreTime: function(storetime){
		return moment(storetime).format("hh:mm a");
	},
	setChecked: function(storeId){
		if(storeId ==  Session.get("storeId")){
			return "checked";
		}
	},
	setCheckedForAllStore: function()
	{
		var storeIdVal = Session.get("storeId");
		if(storeIdVal == undefined)
		{
			return "checked";
		}
	},
	getHref: function(n)
	{
		var temp = n;
		if (Meteor.isCordova) {
			if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
				var href =  buildiOSMapLinkNew(temp.storeLat,temp.storeLng);
			} else {
				 var href =  buildWebMapLinkNew(temp.storeLat,temp.storeLng);
			}
		} else {
			var href =  buildWebMapLinkNew(temp.storeLat,temp.storeLng);
		}
		return href;
	}
});
Template.storePage.events({
	'click #storeArrow': function(e)
	{
		e.preventDefault();
		var storeId = $(e.target).data("id");
		if(storeId == "all")
		{
			Session.set("storeId", undefined);
		}
		else
		{
			if(Session.get("storeId") == storeId){
				Session.set("storeId", undefined);
			}
			Session.set("storeId", storeId);
		}
		Router.go('/dashboard');
	},
	'click .shopLocationSpan': function(e)
	{
		e.preventDefault();
		var temp = {
			storeLat: $(e.target).data("lat"),
			storeLng: $(e.target).data("lng")
		}
		if (Meteor.isCordova) {
			if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
				var href =  buildiOSMapLinkNew(temp.storeLat,temp.storeLng);
			} else {
				 var href =  buildWebMapLinkNew(temp.storeLat,temp.storeLng);
			}
		} else {
			var href =  buildWebMapLinkNew(temp.storeLat,temp.storeLng);
		}
	},
	'click .StoreChecked': function(e){
		e.preventDefault();
		var storeId = $(e.target).data("id");
		if(storeId == "all")
		{
			Session.set("storeId", undefined);
		}
		else
		{
			if(Session.get("storeId") == storeId){
				Session.set("storeId", undefined);
			}
			Session.set("storeId", storeId);
		}
		Router.go('/dashboard');
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
     return `https://maps.apple.com/?daddr=${queryString}&dirflg=d&t=h`;
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
     return `https://www.google.com/maps/place/${queryString}`;
   }
 }