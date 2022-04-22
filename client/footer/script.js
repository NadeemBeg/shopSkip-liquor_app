Template.footer.onCreated(function(){
	
});
Template.footer.helpers({
	cartCount: function() {
    var totalProduct = 0;
    var count = carts.find({userId: Meteor.userId()}).fetch();
      for(i=0; i<count.length; i++){
        // console.log("carts",count[i].productQuantity);
        totalProduct +=Number(count[i].productQuantity);
        // console.log("totalProduct",totalProduct);
      }
      if(totalProduct > 99)
      {
        totalProduct = "99+"
      }
      return totalProduct;
    },
  isSearchProductPage: function()
  {
    if(Router.current().route.getName() == "searchSubCategoryProducts")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
});