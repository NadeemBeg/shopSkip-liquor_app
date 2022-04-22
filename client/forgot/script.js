Template.forgot.onCreated(function() {
});
Template.forgot.onRendered(function() {
	$("body").css("overflow","auto");
	
	$(".label-floating input[type='text'], .label-floating textarea").on("focus", function(e){
	if($(e.target).val() == "")
	   {
	$(e.target).parent().removeClass("is-empty");
	   }
	})
	$(".label-floating input[type='text'], .label-floating textarea").on("blur", function(e){
	if($(e.target).val() == "")
	   {
	$(e.target).parent().addClass("is-empty");
	   }
	});
});
Template.forgot.helpers({
});
Template.forgot.events({
	'click #forgotSubmit': function(e) {
		e.preventDefault();
		var me = $(e.target);
		me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
		me.attr("disabled",true);
		var requiredErrors = isRequired($("#forgotForm"),true);
		if(requiredErrors > 0)
		{
			me.html('Submit');
			me.attr("disabled",false);
			return;
		}
		else
		{
			var emailError = validateEmail($("#forgotForm"),true);
			if(emailError > 0)
			{
				me.html('Submit');
				me.attr("disabled",false);
				return;
			}
			else
			{
				var forgotEmail = $("#forgotEmailAddress").val().trim();
				Meteor.call('checkUserEmail',forgotEmail,function(err, response) {
					if(err){
						me.html('Submit');
						me.attr("disabled",false);
			            //console.log('err',err);
			            sAlert.error("<b>"+err.reason+"</b>", {});
			          } 
			          else 
			          {
			            if(response) 
			            {
			            	me.html('Submit');
							me.attr("disabled",false);
			                Accounts.forgotPassword({email: forgotEmail});
			                Router.go("/login");
			                setTimeout(function(){
			                	sAlert.success("<b>We have sent you a link to reset the password. Please check your email account.</b>", {});
			                },500);
			            } 
			            else 
			            {
			            	me.html('Submit');
							me.attr("disabled",false);
						  $("#forgot-email").html('Email does not exist.');
			            }
			          }
				});
			}
		}
	}
});