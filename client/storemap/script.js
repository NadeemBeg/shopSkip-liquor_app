var markers = [];
Template.storesmap.onCreated(function(){
	
});
Template.storesmap.onRendered(function(){
	Meteor.subscribe("getStores", {
	  onReady: function () { 
	  	var storeList = stores.find({}).fetch();
	  	var count = 0;
	  	addMarkers(storeList[count],storeList,count,function(){
	  		// console.log("all stores listed.");
	  	})



	  	/*for(var i = 0; i < storeList.length; i++)
		{
			var store = storeList[i];
			var storeAddress = store.address;
			$.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?address="+storeAddress+"&key=AIzaSyAK_vkvxDH5vsqGkd0Qn-dDmq-rShTA7UA", success: function(result){
			    if(result.status == "OK")
			    {
			    	//addMarkers(store,result);
			    }
			}});



			
			
		    	
		}*/
	},
	  onError: function () { console.log("onError", arguments); }
	});
	
	var a = setInterval(function(){
		var loc = Geolocation.currentLocation();
		if(loc != null)
		{
			clearInterval(a);
			setTimeout(function(){
				var latlng = new google.maps.LatLng(loc.coords.latitude,loc.coords.longitude);
			GoogleMaps.maps.storesmap.instance.setCenter(latlng);
			},2000);
			
		}
	},100);
	
	
});
Template.storesmap.events({});
Template.storesmap.helpers({
	storesMapOptions: function()
	{
		// Make sure the maps API has loaded
	    if (GoogleMaps.loaded()) {
	      // Map initialization options
	      return {
	        center: new google.maps.LatLng(-37.8136, 144.9631),
	        zoom: 17
	      };
	    }
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

function addMarkers(store,list,count,callback)
{
	//console.log(store.address);
	var storeAddress = store.address;
	$.ajax({url: "https://maps.googleapis.com/maps/api/geocode/json?address="+storeAddress+"&key=AIzaSyAK_vkvxDH5vsqGkd0Qn-dDmq-rShTA7UA", success: function(result){
	    if(result.status == "OK")
	    {
	    	var url = store.storeImage;
			url = url.split("upload");
			url = url[0] + "upload/c_scale,e_auto_color,h_40,r_100,w_40/" + url[1];
			url = url.substr(0,url.lastIndexOf("."));
			url = url + ".png";
			url = url.replace("http://","https://");
			var icon = {
				url: url
			};
			var marker = new google.maps.Marker({
		      position: new google.maps.LatLng(result.results[0].geometry.location.lat,result.results[0].geometry.location.lng),
		      map: GoogleMaps.maps.storesmap.instance,
		      animation:google.maps.Animation.Drop,
		      icon:icon
		    });
		    (function(temp,lat,lng){
				marker.addListener('click', function(e) {
					if (Meteor.isCordova) {
						if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
							var href =  buildiOSMapLinkNew(lat,lng);
						} else {
							 var href =  buildWebMapLinkNew(lat,lng);
						}
					} else {
						var href =  buildWebMapLinkNew(lat,lng);
					}
		    	var contentString = '<div id="contentMap">'+
			      '<h3 class="infoheading">'+temp.storeName+'</h3>'+
			      '<div id="bodyContent">'+
			      '<p>'+temp.address+'</p>'+
			      '<p>For directions click <br /><a href="'+href+'" target="_blank">Here</a>'+
			      '</div>'+
			      '</div>';
			      var infowindow = new google.maps.InfoWindow({
				    content: contentString
				  });
				  GoogleMaps.maps.storesmap.instance.setCenter(this.position);
			    	infowindow.open(GoogleMaps.maps.storesmap.instance, this);
			  })
			})(store,result.results[0].geometry.location.lat,result.results[0].geometry.location.lng);
			markers.push(marker);
	    }
	    count++;
		if(count < list.length)
		{
			addMarkers(list[count],list,count,callback);
		}
		else
		{
			callback();
		}
	}});
	/**/
}