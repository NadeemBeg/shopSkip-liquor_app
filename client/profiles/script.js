var selectedProfilePic = [];
Template.profiles.onCreated(function() {
});
Template.profiles.onRendered(function() {
	
	$("body").css("overflow","auto");
});
Template.profiles.helpers({
	getRotation: function()
	{
		var userDEtails = Meteor.user();
		if(typeof userDEtails !== "undefined")
		{
			if(typeof userDEtails.profile.profileImageOrientation !== "undefined")
			{
				return userDEtails.profile.profileImageOrientation;
			}
			else
			{
				return "0";
			}
		}
		else
		{
			return "0";
		}
	},
	getProfileImage: function(){


		var file ="" ;
		if(typeof Meteor.user() !== "undefined")
		{
			if(typeof Meteor.user().profile !== "undefined")
			{
				if(typeof Meteor.user().profile.profileImage !== "undefined")
				{
					if(Meteor.user().profile.profileImage == "")
			          {
			            return "/images/user-thumbnail.jpg";
			          }
			          else
			          {
			          	//console.log("picccccc1",Meteor.user().profile.profileImage);
			          	var url1 = Meteor.user().profile.profileImage;
			            //console.log("urls ", url1);
			            var url = url1.replace("https://","https://"); 
			            //console.log("urls ", url);
			            if(typeof Meteor.user().profile.profileImageOrientation !== "undefined")
			            {
			            	 url = url.split("/upload");
			            	url = url[0]+"/upload/a_"+Meteor.user().profile.profileImageOrientation+url[1];
			            }
			            url = url.replace("http://","https://");
			            var ext = url.substr(url.lastIndexOf(".")+1);
						if(ext == "webp")
						{
						  ext = "png";
						  url = url.substr(0,url.lastIndexOf("."));
						  url += "." + ext;
						}
			            return url;
			          	
			   // 			function srcToFile(src, fileName, mimeType){
						//     return (fetch(src)
						//         .then(function(res){return res.arrayBuffer();})
						//         .then(function(buf){return new File([buf], fileName, {type:mimeType});})
						//     );
						// }
						// srcToFile(
						//     url,
						//     fileNAME,
						//     extension
						// )
						// .then(function(file){
						//     console.log("file urlurlurl",file);
						// })

			          	// return Meteor.user().profile.profileImage;

			            // var pic =  Meteor.user().profile.profileImage;

			            
			          }
				}
				else
				{
					return "/images/user-thumbnail.jpg";
				}
			}
			else
				{
					return "/images/user-thumbnail.jpg";
				}
		}
		else
				{
					return "/images/user-thumbnail.jpg";
				}
	}
});
Template.profiles.events({
	'click .links': function(e){
		e.preventDefault();
		Session.set("PreviousPage", "/profiles");
		Router.go($(e.target).attr("data-src"));
	},
	'click .rotated':function(e){
		e.preventDefault();
		// var me = $(e.target);
		// me.attr("disabled",true);
		var hiddenVar = parseInt($("#hiddenVar").val());
		hiddenVar +=  90;
		//$('#profileImage').css('transform', "rotate("+hiddenVar+"deg)");
		$("#hiddenVar").val(hiddenVar);
		Meteor.call("hiddenVarValueStore", Meteor.userId(), hiddenVar.toString(),function(err,res){
			if(err){
				console.log("hiddenVarValueStore err",err);
			}
			else{
				//console.log("hiddenVarValueStore res",res);
				// me.attr("disabled",false);
			}
		});
	},
	'change #ProfilePic': function(evt) {
		
		if(evt.target.files.length > 0)
		{
			// console.log(evt);
			var f = evt.target.files[0];
			// console.log("file ffff",f );
			selectedProfilePic = [];
			selectedProfilePic.push(f);
			var r = new FileReader();
	          r.onload = function(e) {
	          	var contents = e.target.result;
	          	$('#profileImage').attr('src', contents);
	          };
	          r.readAsDataURL(f);

	          Cloudinary.upload(selectedProfilePic[0],{}, function(err, img) {
				  if(err)
				  {
				    alert(err.reason);
				   
				  }
				  else
				  {
				    Meteor.call("updateProfilePic", Meteor.userId(), img.url,function(err,res){
						if(res)
						{
							Toast.success("Profile Image updated successfully.");
							// console.log("piccc2",selectedProfilePic[0]);		
							// orientation(selectedProfilePic[0], function(base64img, value) {
			    //                 // $('#placeholder1').attr('src', base64img);				                    
			    //                 // console.log(rotation[value]);
			    //                 var rotated = $('#profileImage').attr('src', base64img);
			    //                 if(Meteor.isCordova)
			    //                 {
			    //                   if(device.manufacturer == "samsung" || device.manufacturer == "sony")
			    //                   {
			                        
				   //                    rotated.css('transform', "rotate(90deg)");
				   //                    // console.log("value",rotated.css('transform', rotation[value]));
				                    
			    //                   }
			    //                   else
			    //                   {
			    //                   	rotated.css('transform', rotation[value]);
			    //                   }
			    //                 }
			    //                 else
				   //                {
				   //                	rotated.css('transform', rotation[value]);
				   //                }
			                    
			                    
			    //             });
						}
				    });
				  }
				});
		}
      },
	'click #user_log_out': function(e) {
	    e.preventDefault();
	    new Confirmation({
		      message: "Are you sure you want to logout?",
		      title: "Confirmation",
		      cancelText: "Cancel",
		      okText: "Ok",
		      success: true, // whether the button should be green or red
		      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
		    }, function (ok) {
		      if(ok)
		      {
		        Meteor.logout(function(err,res){
		          if(err)
		          {
		            sAlert.error(err.reason);
		            
		          }
		          else
		          {
		            Router.go("/login");
		            sAlert.success("You have been successfully logged out!!!!");
		          }
		        });
		      }
		      else
		      {
		        if($(".pc-dimmer.pc-leave").length > 0)
		          $(".pc-dimmer.pc-leave").remove();
		        if($(".pc-container.pc-enter").length > 0)
		          $(".pc-container.pc-enter").remove();
		      }
		    });
	   
  },
  'click #address_billing': function(e) {
    e.preventDefault();
    alert("functionality under process");
  }
});


var rotation = {
  1: 'rotate(0deg)',
  3: 'rotate(180deg)',
  6: 'rotate(90deg)',
  8: 'rotate(270deg)'
};
function _arrayBufferToBase64( buffer ) {
    var binary = ''
    var bytes = new Uint8Array( buffer )
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] )
    }
    return window.btoa( binary );
  }
  function orientation(file, callback) {
  var fileReader = new FileReader();
  fileReader.onloadend = function() {
    var base64img = "data:"+file.type+";base64," + _arrayBufferToBase64(fileReader.result);
    var scanner = new DataView(fileReader.result);
    var idx = 0;
    var value = 1; // Non-rotated is the default
    if(fileReader.result.length < 2 || scanner.getUint16(idx) != 0xFFD8) {
      // Not a JPEG
      if(callback) {
        callback(base64img, value);
      }
      return;
    }
    idx += 2;
    var maxBytes = scanner.byteLength;
    while(idx < maxBytes - 2) {
      var uint16 = scanner.getUint16(idx);
      idx += 2;
      switch(uint16) {
        case 0xFFE1: // Start of EXIF
          var exifLength = scanner.getUint16(idx);
          maxBytes = exifLength - idx;
          idx += 2;
          break;
        case 0x0112: // Orientation tag
          // Read the value, its 6 bytes further out
          // See page 102 at the following URL
          // https://www.kodak.com/global/plugins/acrobat/en/service/digCam/exifStandard2.pdf
          value = scanner.getUint16(idx + 6, false);
          //console.log("value", value);
          maxBytes = 0; // Stop scanning
          break;
      }
    }
    if(callback) {
      callback(base64img, value);
    }
  }
  fileReader.readAsArrayBuffer(file);
};

// 30 Dec 19

// public static int fixOrientation(Bitmap bitmap) {
//     if (bitmap.getWidth() > bitmap.getHeight()) {
//         return 90;
//     }
//     return 0;
// }

// public static Bitmap flipIMage(Bitmap bitmap) {
//     //Moustafa: fix issue of image reflection due to front camera settings
//     Matrix matrix = new Matrix();
//     int rotation = fixOrientation(bitmap);
//     matrix.postRotate(rotation);
//     matrix.preScale(-1, 1);
//     return Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);
// }