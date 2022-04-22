Template.ratingsReceipes.onCreated(function() {
	Meteor.subscribe('getReviewRatings');
});
Template.ratingsReceipes.onRendered(function() {
	$("body").css("overflow","auto");
	
	Session.set("rating",undefined);

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
});
Template.ratingsReceipes.helpers({ //reviewRecipes
   getReceipe: function(){
  	if(receipes.findOne({ _id: Router.current().params._id}) != null)
  	{
	    var receipe = receipes.findOne({ _id: Router.current().params._id});
	    return receipe;
  	}
  }
});
Template.ratingsReceipes.events({
	'click .rating'(e) {
        const value = $(e.target).val();
        const beerId = this.beer;
        Session.set("rating",$(e.target).val());
        //Beer.update(beerId, { $set: { rating: Number(value) } });
    },
	'click #submitReview': function(e)
	{
		e.preventDefault();
		var reviewerName = $("#reviewerName").val();
		var summary = $("#summary").val();
		var writeYourReview = $("#writeReview").val();
		var reviewRating = Session.get("rating");
		// var reviewRating = $("#review_rating").data('userrating');
		var requiredError = isRequired($("#reviewForm"),true);
		if(requiredError)
		{	
			return;
			alert("Please Fill Up All Details");
		}
		else
		{
			if(reviewRating != undefined || reviewRating != "")
			{
				Meteor.call("inserReviewRecipes", reviewerName, summary, writeYourReview, reviewRating, Router.current().params._id, function(err, res){
					if(err)
					{
						console.log(err);
						// alert(err.reason);
					} 
					else
					{
						Toast.success("Receipe Review added sucessfully.");
						Router.go("/receipePage/"+Router.current().params._id);
					}
				});
			}
			else
			{
				alert("Please fill star rating");
				return false;
			}
		}
	},
	'click #cancel': function(e)
	{
		Router.go("/receipePage/"+Router.current().params._id);
	}
});
