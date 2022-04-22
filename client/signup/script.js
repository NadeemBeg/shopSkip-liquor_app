Template.register.onCreated(function() {
	Meteor.subscribe('getAllUsers');
	Meteor.subscribe('getContents');

});
Template.register.onRendered(function() {
	$("body").css("overflow","auto");
	
	this.$('.datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "1940:" + new Date().getFullYear(),
      beforeShow: function(){$('.datepicker').blur();}
    });
});
Template.register.helpers({
	getContents:function(){
		if(cms.findOne({pageCode: 'termsofservice'}) != null)
		{
			return cms.findOne({pageCode: 'termsofservice'})
		}
	},
});
Template.register.events({
	'click #createAccount': function(e)
	{
		e.preventDefault();
		var me = $(e.target);
		me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
		me.attr("disabled",true);
		var requiredErrors = isRequired($("#signupForm"),true);
		if(requiredErrors > 0)
		{
			me.html('Create Account');
			me.attr("disabled",false);
			return;
		}
		else
		{
			var emailError = validateEmail($("#signupForm"),true);
			if(emailError > 0)
			{
				me.html('Create Account');
				me.attr("disabled",false);
				return;
			}
			else
			{
				var zipError = validateZip($("#signupForm"),true);
				if(zipError > 0)
				{
					me.html('Create Account');
					me.attr("disabled",false);
					return;
				}
				else
				{	
					var nameError = validateName($("#signupForm"),true);
					if(nameError > 0)
					{
						me.html('Create Account');
						me.attr("disabled",false);
						return;
					}

					else {
							var phoneError = validateMobileNumber($("#signupForm"),true);
							if(phoneError > 0)
					{
						me.html('Create Account');
						me.attr("disabled",false);
						return;
					}

					else{


						var confirmPasswordError = $("#userPasswordRegister").val() == $("#userConfirmPasswordRegister").val();
						if(!confirmPasswordError)
						{
							me.html('Create Account');
							me.attr("disabled",false);
							$("#userConfirmPasswordRegister").next(".errorSpan").html("Confirm Password does not match with Password.");
							return;
						}
					else
					{
						var formData = $("form#registerForm")
						var registerData = 
							{
								profile: {
									firstName: formData[0].firstName.value,
									lastName: formData[0].lastName.value,
									// country: formData[0].userCountry.value,
									countryCode: "+1",
									birthday: formData[0].userdob.value,
									street: formData[0].userStreet.value,
									city: formData[0].userCity.value,
									state: formData[0].userState.value,
									zip: formData[0].userZip.value,
									isActive: true,
									isNew: true,
									phoneNumber: formData[0].phoneNumber.value,
							},
							username: formData[0].userEmailRegister.value,
							password: formData[0].userPasswordRegister.value,
							email: formData[0].userEmailRegister.value
						}
						// if($("#termsOfService").is(":checked"))
						// {
							if(getAge(new Date(formData[0].userdob.value)) >= 21)
							{
								Meteor.call("registerUser",registerData,function(error,res){
									if(error)
					          		{
					          			//console.log(error);
					          			if(error.reason == "Username already exists.")
					          			{
					          				me.html('Create Account');
														me.attr("disabled",false);
					          				$("#userEmailRegister").next(".errorSpan").html("User already exists.");
					          				$("#userEmailRegister").val("");
					          				$("#userEmailRegister").focus();
					          				return;
					          			}
					          			else
					          			{
					          				me.html('Create Account');
														me.attr("disabled",false);
														sAlert.error("<b>" + error.reason + "</b>", {});
					          			}
					          		}
					          		else
					          		{ 
					          			Meteor.subscribe('getAllUsers');
					          			//console.log("res1",res);
					          			if(res)
					          			{
					          				var userID = res;
					          				//console.log("res in if",res);
					          				me.html('Create Account');
														me.attr("disabled",false);
														var file = $('#userimage')[0].files[0];
														Cloudinary.upload(file, {}, function(err, res) {
													if (err){
															sAlert.error(err.reason, {});
															//console.log(err);
															return;
													} else {
														//console.log("Cloudinary res", res);
														Meteor.call('updateProfileImage', res.url, userID);
													}
												});
														//console.log("res userDetails",res);														
											var userDetails = Meteor.users.findOne({
												_id: res
											});
											//console.log("userDetails",userDetails);
											if(userDetails != null || userDetails != undefined)
											{
												// console.log("calling user--->");
												// Router.go("/termsandcondition");

												var subject = "Welcome to Shop Skip";
												var emailBody = "<p>Hi " + userDetails.profile.firstName + ",<br /><br />Welcome to Shop Skip.<br /><br />You have successfully registered on Shop Skip.<br /><br />Regards,<br />Shop Skip Team.</p>";
												Meteor.call('sendEmail',userDetails.username,"appbuilding24@gmail.com",subject,emailBody);
												Meteor.call('sendVerificationEmailToUser',res);
												// Router.go("/login");
												Router.go("/termsandcondition/"+ res);
												// setTimeout(function(){
												// 	sAlert.success('<b>Registration was successful. Please verify your email to signin into your account.</b>', {});
												// },500);
											}
					          			}
					          		}
								});
							}
							else
							{
								// alert("Your age must be 21+ years !!");
								alert("you must be 21 years of age or older to use the app!!");
								me.html('Create Account');
								me.attr("disabled",false);
								return;
							}
						// }
						// else
						// {
						// 	alert("Please Accept Terms Of Service !!")
						// 	me.html('Create Account');
						// 	me.attr("disabled",false);
						// 	return;
							 }
						}
					}
				}
			}
		}
	},
	//shakti
	'change #userimage': function(e){
		var a;

		var elem = $(e.target);
		var filesToUpload = e.currentTarget.files[0];

		//console.log("filesToUpload intial-->",filesToUpload)
		var image = document.getElementById('showImg');
		image.src = URL.createObjectURL(filesToUpload);

	} ,

//old code
	// 'change #userimage': function(){
	// 	console.log("uploadImage");

	//        var file = $('#userimage')[0].files[0] //sames as here

	//        Cloudinary.upload(file, {}, function(err, res){
	//        	if(err){
	//        		console.log("error Cloudinary", err);
	//        	}
	//        	else{
 //    		    $('#showImg').attr("src",res.url);

	//        		return res.url;
	//        	}
	//        });

	// } ,
	// 'click .termsRead':function(){
	// 	$('#termsAndCondition').modal('show');
	// }
	// 'click #termsOfService': function(e)
	// {
	// 	e.preventDefault();
	// 	if($("#termsOfService").is(":checked"))
	// 	{

	// 	}
	// }
});

function getAge(d1, d2){
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}






Template.signup.onCreated(function(){});
Template.signup.onRendered(function(){
	GoogleMaps.load({
	    key: 'AIzaSyCqgWP1rJWs5VZiMe5d4rByQFipGQXB-D0', // optional, could be loaded via Meteor.settings.public.GOOGLE_MAP_API
	    libraries: 'places'  // can be an array
	  });
	this.autorun(function () {
    if (GoogleMaps.loaded()) {
		$("#home-address").geocomplete({ details: "form" }).bind("geocode:result", function(event, result){
		console.log(result);
		});
    }
  });
});
Template.signup.helpers({
	optsGoogleplace: function() {
	    return {
	      type: 'googleUI',
	      stopTimeoutOnKeyup: false,
	      googleOptions: {
	        componentRestrictions: { country:'us' }
	      }
	    }
	  }
});
Template.signup.events({
	'click #continueButton': function(e)
	{
		e.preventDefault();
		var locationEntered = $("#home-address").val();
		var aptNumber = $("#aptNumber").val();
		var phoneNumber = $("#phoneNumber").val();
		var hasError = 0;
		var phoneNumberRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
		if(locationEntered == "")
		{
			$(".locationError").html("Home Address is required.");
			hasError++;
		}
		else
		{
			$(".locationError").html("");
		}
		if(phoneNumber == "")
		{
			$(".phoneNumberError").html("Phone Number is required.");
			hasError++;
		}
		else
		{
			$(".phoneNumberError").html("");
			if(!phoneNumber.match(phoneNumberRegex))
			{
				$(".phoneNumberError").html("Phone Number is invalid.");
				hasError++;
			}
			else
			{
				$(".phoneNumberError").html("");
			}
		}
		if(hasError == 0) {
			localStorage.setItem("signUpStep1",JSON.stringify({
				"locationEntered": locationEntered,
				"lat": $("input[name='lat']").val(),
				"lng": $("input[name='lng']").val(),
				"formatted_address": $("input[name='formatted_address']").val(),
				"aptNumber": aptNumber,
				"phoneNumber": phoneNumber,
			}));
			Router.go("/signup-step2");
			return;
		}
	}
});

Template.signupstep2.onCreated(function(){});
Template.signupstep2.onRendered(function(){
	Session.set("monthSelection", "");
});
Template.signupstep2.helpers({
	getDates: function(){
		var html = "";
		var selectedMonth = $("#birthdaymonth").val();
		Session.set("monthSelection", selectedMonth);
		if(Session.get("monthSelection") == "")
		{
			var noOfDays = 30;
		}
		else
		{
			var daysObject = [31,29,31,30,31,30,31,31,30,31,30,31];
			var noOfDays = daysObject[parseInt(selectedMonth)];
		}
		console.log("noOfDays", noOfDays);
		html = '<option value="">Date</option>';
		for(var i = 1; i <= 31; i++)
		{
			html += '<option value="'+i+'">'+("0" + i).slice(-2)+'</option>';
		}
		return html;
	},
	getYears: function(){
		var html = "";
		var year = new Date();
		year = year.getFullYear();
		html = '<option value="">Year</option>';
		for(var i = year; i >= 1930; i--)
		{
			html += '<option value="'+i+'">'+i+'</option>';
		}
		return html;
	}
});
Template.signupstep2.events({
	'click #signupstep2Submit': function(e)
	{
		e.preventDefault();
		var fullName = $("#fullName").val();
		var month = $("#birthdaymonth").val();
		var date = $("#birthdaydate").val();
		var year = $("#birthdayyear").val();
		var birthday = new Date(month + "-" + date + "-" + year);
		var gender = $("input[name='type-btn-1']:checked").val();
		var email = $("#email").val();
		var confirmEmail = $("#confirmEmail").val();
		var password = $("#password").val();
		var confirmPassword = $("#confirmPassword").val();
		var customCheckDisabled1 = $("#customCheckDisabled1").is(":checked");
		var testAlpha = /^[A-Za-z ]+$/;
		var testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var hasError = 0;
		var me = $(this.target);
		if(fullName == "")
		{
			$(".fullNameError").html("Full name is required.");
			hasError++;
		}
		else
		{
			$(".fullNameError").html("");
			if(!fullName.match(testAlpha))
			{
				$(".fullNameError").html("Full name is invalid.");
				hasError++;
			}
			else
			{
				$(".fullNameError").html("");
			}
		}
		if(birthday == "")
		{
			$(".birthdayError").html("Birthday is required.");
			hasError++;
		}
		else
		{
			$(".birthdayError").html("");
		}
		if(gender == undefined)
		{
			$(".genderError").html("Gender is required.");
			hasError++;
		}
		else
		{
			$(".genderError").html("");
		}
		if(email == "")
		{
			$(".emailError").html("Email is required.");
			hasError++;
		}
		else
		{
			$(".emailError").html("");
			if(!email.match(testEmail))
			{
				$(".emailError").html("Email is invalid.");
				hasError++;
			}
			else
			{
				$(".emailError").html("");
			}
		}
		if(confirmEmail == "")
		{
			$(".confirmEmailError").html("Confirm email is required.");
			hasError++;
		}
		else
		{
			$(".confirmEmailError").html("");
			if(!confirmEmail.match(testEmail))
			{
				$(".confirmEmailError").html("Confirm email is invalid.");
				hasError++;
			}
			else
			{
				$(".confirmEmailError").html("");
			}
		}
		if(email !== "" && confirmEmail !== "")
		{
			if(email !== confirmEmail)
			{
				$(".confirmEmailError").html("Confirm email must be same as email.");
				hasError++;
			}
			else
			{
				$(".confirmEmailError").html("");
			}
		}
		if(password == "")
		{
			$(".passwordError").html("Password is required.");
			hasError++;
		}
		else
		{
			$(".passwordError").html("");
		}
		if(confirmPassword == "")
		{
			$(".confirmPasswordError").html("Confirm password is required.");
			hasError++;
		}
		else
		{
			$(".confirmPasswordError").html("");
		}
		if(password !== "" && confirmPassword !== "")
		{
			if(password !== confirmPassword)
			{
				$(".confirmPasswordError").html("Confirm password must be same as password.");
				hasError++;
			}
			else
			{
				$(".confirmPasswordError").html("");
			}
		}
		if(hasError == 0)
		{
			if(customCheckDisabled1 == false)
			{
				alert("Please check terms and conditions.");
				return;
			}
			else
			{
				if(getAge(new Date(birthday)) < 21)
				{
					alert("You must be 21 years old or more to register in Shopskip.");
					return;
				}
				var splittedFullName = fullName.split(" ");
				var signUpStep1Details = JSON.parse(localStorage.getItem("signUpStep1"));
				var registerData = {
						profile: {
							firstName: typeof splittedFullName[0] !== "undefined"?splittedFullName[0]:"No Name",
							lastName: typeof splittedFullName[1] !== "undefined"?splittedFullName[1]:"No Name",
							countryCode: "+1",
							birthday: birthday,
							isActive: false,
							isNew: true,
							phoneNumber: signUpStep1Details.phoneNumber,
							gender: gender,
							aptNumber: signUpStep1Details.aptNumber,
							locationEntered: signUpStep1Details.locationEntered,
							formattedAddress: signUpStep1Details.formatted_address,
							lat: signUpStep1Details.lat,
							lng: signUpStep1Details.lng
					},
					username: email,
					password: password,
					email: email
				};
				me.html('Please wait ...');
				me.attr("disabled",true);
				Meteor.call("registerUser",registerData,function(error,res){
					if(error)
	          		{
	          			//console.log(error);
	          			if(error.reason == "Username already exists.")
	          			{
	          				me.html('Agree and Continue');
							me.attr("disabled",false);
	          				sAlert.error("<b>User already exists.</b>", {});
	          				$("#email").val("");
	          				$("#confirmEmail").val("");
	          				$("#email").focus();
	          				return;
	          			}
	          			else
	          			{
	          				me.html('Agree and Continue');
							me.attr("disabled",false);
							sAlert.error("<b>" + error.reason + "</b>", {});
	          			}
	          		}
	          		else
	          		{ 
	          			if(res)
	          			{
	          				
	          				Meteor.subscribe("getUserById", res, function(){
	          					var userDetails = Meteor.users.find({
	          						"_id": res
	          					});
	          					if(userDetails.count() > 0)
	          					{
	          						userDetails = userDetails.fetch()[0];
	          						var subject = "Welcome to Shop Skip";
	          						var emailBody = "<p>Hi " + userDetails.profile.firstName + ",<br /><br />Welcome to Shop Skip.<br /><br />You have successfully registered on Shop Skip.<br /><br />Regards,<br />Shop Skip Team.</p>";
	          						Meteor.call('sendEmail',userDetails.username,"appbuilding24@gmail.com",subject,emailBody);
	          						Meteor.call('sendVerificationEmailToUser',res);
	          						
	          						setTimeout(function(){
	          							sAlert.success("<b>Registration was successful.</b>", {});
	          						},2000);
	          						Router.go("/login");
	          						
	          						
	          					}
	          				});
							/*if(userDetails != null || userDetails != undefined)
							{
								// console.log("calling user--->");
								// Router.go("/termsandcondition");

								var subject = "Welcome to Shop Skip";
								var emailBody = "<p>Hi " + userDetails.profile.firstName + ",<br /><br />Welcome to Shop Skip.<br /><br />You have successfully registered on Shop Skip.<br /><br />Regards,<br />Shop Skip Team.</p>";
								Meteor.call('sendEmail',userDetails.username,"appbuilding24@gmail.com",subject,emailBody);
								Meteor.call('sendVerificationEmailToUser',res);
								// Router.go("/login");
								Router.go("/termsandcondition/"+ res);
								// setTimeout(function(){
								// 	sAlert.success('<b>Registration was successful. Please verify your email to signin into your account.</b>', {});
								// },500);
							}*/
	          			}
	          		}
				});
			}
		}
		else
		{
			return;
		}
	},
	'click .Terms-condition': function(e)
	{
		$("html, body").animate({ scrollTop: 0 }, "slow");
		$(".termsPopupDiv").show();
		$("body").css("overflow", "hidden");
	}
});