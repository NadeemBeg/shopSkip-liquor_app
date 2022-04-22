Template.changepassword.onCreated(function() {
});
Template.changepassword.onRendered(function() {
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
	})

	
  $('.common-form').css('height', "calc(100vh - 47px)");
});
Template.changepassword.helpers({	
});
Template.changepassword.events({
		'click #changepasswordbutton': function(e)
	{
		e.preventDefault();
		var oldPassword = $("#oldpassword").val();
		var newPassword = $("#newpassword").val();
		var confirmPassword = $("#confirmpassword").val();
		var requiredError = isRequired($("#changePasswordForm"),true);
		var me = $(e.target);
		me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
		me.attr("disabled",true);
		if(requiredError)
		{
			me.html('Submit');
			me.attr("disabled",false);
			return;
		}
		else
		{
			if(confirmPassword != newPassword)
			{
				me.html('Submit');
				me.attr("disabled",false);
				alert("Password and confirm password should be same!");
			}
			else

			{
				if(oldPassword === newPassword)
				{

					//console.log("called test function");
					me.html('Submit');
					me.attr("disabled",false);
					alert("Old password and new password should not be same!");
				}

				else 
				{

				me.html('Submit');
				me.attr("disabled",false);
				Accounts.changePassword(oldPassword, newPassword, function(error){
			        if(error)
			        {
			          alert(error.reason);
			        }
			        else
			        {
			        	alert("Password changed successfully.");
			          	Router.go("/dashboard");
			        }
	      		})
			}
		
		}
		}
	},
});
