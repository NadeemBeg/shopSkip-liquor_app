Template.accountdetails.onCreated(function() {
});
Template.accountdetails.onRendered(function() {

	
	$("body").css("overflow","auto");
	this.$('.datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "1940:" + new Date().getFullYear(),
      beforeShow: function(){$('.datepicker').blur();}
    });

	$(".label-floating input[type='text'], .label-floating textarea").on("focus", function(e){
		if($(e.target).val() == "")
		   {
			$(e.target).parent().removeClass("is-empty");
		   }
	});
	$(".label-floating input[type='text'], .label-floating textarea").on("blur", function(e){
		if($(e.target).val() == "")
		  {
			$(e.target).parent().addClass("is-empty");
		  }
	});

});
Template.accountdetails.helpers({
	cartCount: function() {
    var totalProduct = 0;
    var count = carts.find({userId: Meteor.userId()}).fetch();
      for(i=0; i<count.length; i++){
        // console.log("carts",count[i].productQuantity);
        totalProduct +=Number(count[i].productQuantity);
        // console.log("totalProduct",totalProduct);
      }
      return totalProduct;
    },
	firstName:function(){
		return Meteor.user().profile.firstName;
	},
	lastName:function(){
		return Meteor.user().profile.lastName;
	},
	countryName:function(){
		return Meteor.user().profile.country;
	},
	userEmail:function(){
		return Meteor.user().username;
	},
	userBirthday:function(){
		// console.log("Meteor.user().profile.birthday",moment(Meteor.user().profile.birthday))
		return moment(Meteor.user().profile.birthday).format("MM/DD/YYYY");
	},
	userStreet:function(){
		return Meteor.user().profile.street;
	},
	userCity:function(){
		return Meteor.user().profile.city;
	},
	userState:function(){
		return Meteor.user().profile.state;
	},
	userZip:function(){
		return Meteor.user().profile.zip;
	},
	userCode:function(){
		return Meteor.user().profile.countryCode;
	},
	userPhoneNumber:function(){
		return Meteor.user().profile.phoneNumber;
	},
	isMatching: function(n) {
		if(this.countryCodeISD == n)
		{
			return true;
		}
		else
		{
			return false;
		}
	},
  countries: function(){
  	// var countries = countries.find().fetch();
  	   return countries.find().fetch();
  },
	isSelected:function(country){
    if(country == Meteor.user().profile.country){
    	return "select"
    }
  },
  isCodeSelected:function(country){
    if(country == Meteor.user().profile.countryCode){
    	return "select"
    }
  },
});
Template.accountdetails.events({
	'click #update_account': function(e)
		{
			e.preventDefault();
			var me = $(e.target);
			// me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
			me.attr("disabled",true);
			var firstName = $("#first_name").val();
			var lastName = $("#last_name").val();
			var emailAddress = $("#email_address").val();
			var birthday = $("#birthday").val();
			
			// var str = $("#birthday").val();
			// var moment1 = moment(str).utcOffset(str);
			// var birthday = moment1.format('DD/MM/YYYY HH:mm');
			// console.log("birthday",birthday);
			
			var userStreet = $("#user_street").val();
			var userCity = $("#user_city").val();
			var userState = $("#user_state").val();
			var userZip = $("#user_zip").val();
			// var code =$("#mobile_code").val();
			var phoneNumber =$("#phone_number").val();
			
			var requiredError = isRequired($("#changeAccountDetailForm"),true);
			if(requiredError)
			{
				me.attr("disabled",false);
				return;

			}
			else
			{
					var nameError = validateName($("#changeAccountDetailForm"),true);
						if(nameError > 0)
						{
							me.html('Update Account');
							me.attr("disabled",false);
							return;
						}

						else {
								var phoneError = validateMobileNumber($("#changeAccountDetailForm"),true);
								if(phoneError > 0)
								{
									me.html('Update Account');
									me.attr("disabled",false);
									return;
								}

							else
								{
									var zipError = validateZip($("#changeAccountDetailForm"),true);
									if(zipError > 0)
										{
										me.html('Update Account');
										me.attr("disabled",false);
										return;
									}

				else {

				var obj= {
					'profile.firstName': firstName,
					'profile.lastName': lastName,
					'profile.birthday': birthday,
					'username': emailAddress,
					// 'profile.country': userCountry,
					'profile.street': userStreet,
					'profile.city': userCity,
					'profile.state': userState,
					'profile.zip': userZip,
					// 'profile.countryCode':code,
					'profile.phoneNumber':phoneNumber
				}

				if(getAge(new Date(birthday)) >= 21){
					Meteor.call("updateUser",Meteor.userId(), obj, function(err, res){
						if(err){
							alert(err.reason);
						}
						else{
							if(res){
								Toast.success("user updated sucessfully.");
								Router.go("/dashboard");
							}
						}
					});
				}
				else {
					alert("You must be 21 years of age or older to use the app!!");
								me.html('Update Account');
								me.attr("disabled",false);
								return;
				}
				}
			}
		}
	
	  }
	},

});

function getAge(d1, d2){
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
