Template.ratings.onCreated(function() {
	var productsQueue = [Router.current().params._id];
    Meteor.subscribe("getSpecificProducts", productsQueue, function(){
      //console.log("trest", products.find().fetch());
    });
});
Template.ratings.onRendered(function() {
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
Template.ratings.helpers({
  getproduct: function(){
  	if(products.findOne({ _id: Router.current().params._id}) != null)
  	{
	    var product = products.findOne({ _id: Router.current().params._id});
	    return product;
  	}
  },
  currentUserName: function(){
  	var user = Meteor.user();
  	if(user != null)
  	{
  		return user.profile.firstName;
  	}
  },
  productQuantity:function(id){
    // console.log("productQuantity id", id);
    var prodQuantity = bottleSizes.findOne({_id:id});
    return prodQuantity.sizeValue;
  },
});
Template.ratings.events({
	'click .rating'(e) {
        const value = $(e.target).val();
        const beerId = this.beer;
        Session.set("rating",$(e.target).val());
        //Beer.update(beerId, { $set: { rating: Number(value) } });
    },
	'click #submitReview': function(e)
	{
		e.preventDefault();
		var productId = Router.current().params._id;
		const value = $(e.target).val();
		var reviewerName = $("#reviewerName").val();
		var summary = $("#summary").val();
		var writeYourReview = $("#writeReview").val();
		var reviewRating = Session.get("rating");
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
				Meteor.call("inserReviewProducts", reviewerName, summary, writeYourReview, reviewRating, productId, function(err, res){
					if(err)
					{
						//console.log(err);
						alert(err.reason);
					} 
					else
					{
						alert("Products review added sucessfully.");
						Router.go("/productDetails/"+ productId);
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
		var productId = Router.current().params._id;
		// Router.go("/products");
		Router.go("/productDetails/"+ productId);
	}
});
