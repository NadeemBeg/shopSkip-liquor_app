Template.register.onCreated(function() {
	Meteor.subscribe("getCountries");
});
Template.register.onRendered(function() {
	$("body").css("overflow","auto");
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
Template.register.helpers({
	countries: function(){
    return countries.find().fetch();
  },
	isSelected:function(country){
    /*if(country == Meteor.user().profile.country){
    	return "select"
    }*/
  }
});
Template.register.events({
	'click #termsLink': function(e)
	{
		e.preventDefault();
		//console.log("test termlink");
		$(window).scrollTop(0);
		$("#termsDiv").slideToggle(1000);
		
	},
	'click #policyLink': function(e)
	{
		e.preventDefault();
		//console.log("test policyLink");
		$(window).scrollTop(0);
		$("#policyDiv").slideToggle(1000);
		
	}
	// 'click #uploadImage': function(e)
	// {
	// 	e.preventDefault();
 //    var files = []
	// 	var file = $('#userimage')[0].files[0];
	// 	files.push(file)
 //    Cloudinary.upload(files, {}, function(err, res) {
	// 	  if (err){
	// 	    console.log(err);
	// 	    return;
	// 	  }
	// 	  console.log(res);
	// 	});
	// }

	
	
});

// {
// 	e.preventDefault();
// 	var file = $('#userimage')[0].files[0];
//    Cloudinary.upload(file);
// }
