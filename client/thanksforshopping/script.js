Template.thanksforshopping.onCreated(function() {
});
Template.thanksforshopping.onRendered(function() {
	$("body").css("overflow","auto");
});
Template.thanksforshopping.helpers({
});
Template.thanksforshopping.events({
	'click #keepShooping': function(e)
		{
			e.preventDefault();
			Router.go("/products");
		}
});
