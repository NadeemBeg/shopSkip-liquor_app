var selectedProfilePic = [];
Template.fullMenu.onCreated(function(){

});
Template.fullMenu.onRendered(function(){

});
Template.fullMenu.helpers({
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
	userImage: function(){
	    if(typeof Meteor.user() !== "undefined")
	    {
	      if(Meteor.user() != null)
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
	              var url1 = Meteor.user().profile.profileImage;
	              //console.log("urls mainjs", url1);
	              var url = url1.replace("http://","https://"); 
	              //console.log("urls mainjs", url);
	                  // var fileName11 = url;
	              if(typeof Meteor.user().profile.profileImageOrientation !== "undefined")
	                {
	                   url = url.split("/upload");
	                  url = url[0]+"/upload/a_"+Meteor.user().profile.profileImageOrientation+url[1];
	                }
	                url = url.split("/upload");
	                  url = url[0]+"/upload/h_130,c_pad/"+url[1];
	                
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
	    }
	    else
	        {
	          return "/images/user-thumbnail.jpg";
	        }
	  },
	  current_user_name: function(){
    try{ return Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName; } catch(e){}
  },
});
Template.fullMenu.events({
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
				console.log("hiddenVarValueStore res",res);
				// me.attr("disabled",false);
			}
		});
	},
'click #user_sign_out': function(e) {
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
        Router.go("/login");
        Meteor._localStorage.removeItem('Meteor.loginToken');
        Meteor._localStorage.removeItem('Meteor.loginTokenExpires');
        Meteor._localStorage.removeItem('Meteor.userId');
        Meteor.logout(function(err,res){
          if(err)
          {
            sAlert.error(err.reason);
            
          }
          else
          {
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
  'click #userProfilePicture': function(e){
  	e.preventDefault();
  	selectedProfilePic = [];
  	if(Meteor.isCordova)
	{
		var callback = function(buttonIndex) {
			setTimeout(function() {
			  if(buttonIndex == 1)
			  {
			  	function setOptions(srcType) {
				    var options = {
				        // Some common settings are 20, 50, and 100
				        quality: 50,
				        destinationType: Camera.DestinationType.NATIVE_URI,
				        // In this app, dynamically set the picture source, Camera or photo gallery
				        sourceType: srcType,
				        encodingType: Camera.EncodingType.JPEG,
				        mediaType: Camera.MediaType.PICTURE,
				        allowEdit: true,
				        correctOrientation: true
				    }
				    return options;
				}
			  	var srcType = Camera.PictureSourceType.CAMERA;
			    var options = setOptions(srcType);
			    
			 
			    navigator.camera.getPicture(function cameraSuccess(imageUri) {
			 		console.log(imageUri);
			 		window.resolveLocalFileSystemURL(imageUri, function (fileEntry) {
			 			fileEntry["type"] = "image/";
			 			fileEntry.file(function (file) {
			 				console.log(file);
			 				selectedProfilePic.push(file);
			 				var reader = new FileReader();
						    reader.readAsDataURL(file);
						    reader.onload =  function(e){
						        console.log('DataURL:', e.target.result);
						        $("#userProfilePicture").attr("src", e.target.result);
						    };
						    if(selectedProfilePic.length > 0)
              				{
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
							                    }
										});
				                  }
				              });
              				}
			 			});
			 		});
			 	});
			  }
			  else if(buttonIndex == 2)
			  {
			  	function setOptions(srcType) {
				    var options = {
				        // Some common settings are 20, 50, and 100
				        quality: 50,
				        destinationType: Camera.DestinationType.NATIVE_URI,
				        // In this app, dynamically set the picture source, Camera or photo gallery
				        sourceType: srcType,
				        encodingType: Camera.EncodingType.JPEG,
				        mediaType: Camera.MediaType.PICTURE,
				        allowEdit: true,
				        correctOrientation: true  //Corrects Android orientation quirks
				    }
				    return options;
				}
			  	var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
			    var options = setOptions(srcType);
			    
			 
			    navigator.camera.getPicture(function cameraSuccess(imageUri) {
			 		console.log(imageUri);
			 		window.resolveLocalFileSystemURL(imageUri, function (fileEntry) {
			 			fileEntry["type"] = "image/";
			 			fileEntry.file(function (file) {
			 				console.log(file);
			 				selectedProfilePic.push(file);
			 				var reader = new FileReader();
						    reader.readAsDataURL(file);
						    reader.onload =  function(e){
						        console.log('DataURL:', e.target.result);
						        $("#userProfilePicture").attr("src", e.target.result);
						    };
						    if(selectedProfilePic.length > 0)
              				{
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
							                    }
										});
				                  }
				              });
              				}
			 			});
			 		});
			 	}, function cameraError(error) {
			        console.debug("Unable to obtain picture: " + error, "app");
			 
			    }, options);
			  }
			});
		};
		var options = {
		    androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT,
		    title: 'Profile Picture',
		    subtitle: '',
		    buttonLabels: ['Camera', 'Gallery'],
		    androidEnableCancelButton : true,
		    winphoneEnableCancelButton : true,
		    addCancelButtonWithLabel: 'Cancel',
		    position: [20, 40],
		    destructiveButtonLast: false
		};
		window.plugins.actionsheet.show(options, callback);
	}
	else
	{
		$("#profilePicFile").click();
	}
  },
  'change #profilePicFile': function(evt){
  	evt.preventDefault();
  	if(evt.target.files.length > 0)
    {
      var f = evt.target.files[0]; 
      selectedProfilePic = [];
      selectedProfilePic.push(f);
          if (f) {
            var r = new FileReader();
            r.onload = function(e) { 
              var contents = e.target.result;
              $("#userProfilePicture").attr("src",contents);
              if(selectedProfilePic.length > 0)
              {
                Cloudinary.upload(selectedProfilePic[0],{}, function(err, img) {
                  if(err)
                  {
                    alert(err.reason);
                   
                  }
                  else
                  {
                    //console.log("img.type cloudinary",img.type); 
                    Meteor.call("updateProfilePic", Meteor.userId(), img.url,function(err,res){
                    if(res)
                    {
                      Toast.success("Profile Image updated successfully.");
                    }
                    });
                  }
                });
              }
            }
            r.readAsDataURL(f);
          } else { 
            Toast.info("Failed to load file");
          } 
        }
  }
});