Template.receipeList.onCreated(function() {
});

Template.receipeList.onRendered(function() {
	$("body").css("overflow","auto");
});

Template.receipeList.helpers({
	receipeImage: function(){
		return '<img src=" '+ this.receipeImage + ' " width="50px">' ;
	},
	receipeNames: function(){
		return this.receipeName;
	},
	receipePageId: function(){
		return this._id;
	}
	// productDetails: function(){
	// 	if(this.details.length >= 100)
	// 		{
	// 			return this.details.substring(0,100) + ".....";
	// 		}
	// 	else
	// 	{
	// 		return this.details;
	// 	}
	// },
	// productPrice: function(){
	// 	return this.price
	// }
});

Template.receipeList.events({
});
