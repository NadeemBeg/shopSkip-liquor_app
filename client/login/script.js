var jwtDecode = require('jwt-decode');
Template.login.onCreated(function() {
});
Template.login.onRendered(function() {
	$("#ui-datepicker-div").hide();

	$("body").css("overflow","auto");
});
Template.login.helpers({
	isIOS: function(){
		if(Meteor.isCordova)
		{
			if(device.platform == "iOS")
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
			return true;
		}
		
	}	
});
Template.login.events({
	'click #signInButton': function(e)
	{
		e.preventDefault();
		var userName = $("#userName").val().trim();
		var userPassword = $("#userPassword").val();
		var requiredError = isRequired($("#loginForm"));
		var me = $(e.target);
		me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
		me.attr("disabled",true);
		if(requiredError)
		{
			me.html('Sign In');
			me.attr("disabled",false);
			return;
		}
		else
		{
			var emailError = validateEmail($("#loginForm"));
			if(emailError)
			{
				me.html('Sign In');
				me.attr("disabled",false);
				return;
			}
			else
			{
				Meteor.loginWithPassword({"username":userName}, userPassword, function(error){
	               if (Meteor.user()) {
	                  if(Meteor.user().profile.isActive){
	                  	me.html('Sign In');
						me.attr("disabled",false);
	                    // alert("You are successfully logged in.");
	                    Router.go("/dashboard");
	                  } else {
	                  	me.html('Sign In');
						me.attr("disabled",false);
	                    Meteor.logout(function(error) {
	                      $(".errorMsgSpanLogin").html('Your account is not activated. Please verify your account.');
	                    });
	                  }
	               } else {
	               	  	me.html('Sign In');
						me.attr("disabled",false);
	                  	$(".errorMsgSpanLogin").html(error.reason);
	               }
	            });
			}
		}
	},
	'click #facebookLogin': function(e) {
			e.preventDefault();
			Meteor.loginWithFacebook({
			requestPermissions: ['public_profile', 'email']
		},
		function(err)
		{
			if (err) {
				//console.log(err);
				//console.log("error function called.");
				if(typeof err.reason !== "undefined")
				sAlert.error("<b>" + err.reason + "</b>", {});
			}
			else
			{
				setTimeout(function(){
                	Router.go("/dashboard");
                },500);
			}
	    });
	},
	'click #googleLogin': function(e) {
		e.preventDefault();
		Meteor.loginWithGoogle(function(err)
		{
			if(err){
				//console.log(err);
				if(typeof err.reason !== "undefined")
				sAlert.error("<b>" + err.reason + "</b>", {});
			}
			else{
				setTimeout(function(){
                	Router.go("/dashboard");
                },500);
			}

		});
	},
	'click #appleLogin': function(e) {
		e.preventDefault();
		if(Meteor.isCordova)
		{
			window.cordova.plugins.SignInWithApple.signin(
			  { requestedScopes: [0, 1] },
			  function(succ){
			    console.log(succ)
			    Meteor.call("SignInUsingIOS", succ, function(err, res){
			        if(err)
			        {
			          alert(err.reason);
			        }
			        else
			        {
					  var response = res;
					  console.log("response", response);
			          if(response.userAlreadyFound && (response.changePassword == 0))
			          {
			            Accounts.loginWithImpersonate(response.token, function(error, res){
							console.log("error", error);
							console.log("res", res);
				            if(error)
				            {
				              console.log(error.reason);
				            }
				            else
				            {
				              Router.go("/");
				            }
			          	});
			          }
			          else
			          {
			            Meteor.loginWithPassword({"username":response.userDetails.username.trim()}, "iospassword", function(error){
				            if(error)
				            {
				              console.log(error.reason);
				            }
				            else
				            {
				              Router.go("/");
				            }
			          	});
			          }
			        }
			    });
			  },
			  function(err){
			    console.error(err)
			    console.log(JSON.stringify(err))
			  }
			);
		}
		else
		{
			AppleID.auth.init({
	            clientId : 'com.liquor.appservices',
	            scope : 'email name',
	            redirectURI : 'https://www.shopskip.shop/login',
	            state : 'signin',
	            usePopup : true //or false defaults to false
	        });
	        var data = AppleID.auth.signIn();
		}
	}
});