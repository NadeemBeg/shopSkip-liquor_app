Template.receipePage.onCreated(function() {
  Meteor.subscribe("getReceipes", function(){
    // console.log("getReceipes",receipes.find().fetch());
  });
  Meteor.subscribe('getReviewRatings');
});
Template.receipePage.onRendered(function() {
  $("body").css("overflow","auto");
  
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  //$('.common-form').css('height', c);
  Session.set("productsArray", undefined);
});
Template.receipePage.helpers({
  isFirstThree: function(n){
    if(n <= 2)
    {
      return true;
    }
    else
    {
      return false;
    }
  },
  showMoreReviewsButton: function(){
    var data = reviewRecipes.find({receipeId: Router.current().params._id},{ sort: { createdAt: -1}}).fetch();
    if(data.length > 3)
    {
      return true;
    }
    else
    {
      return false;
    }
  },
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
  settings: function() { 
    return {
      position: "bottom",
      limit: 5,
      rules: [
        {
          collection: receipes,
          field: "receipeName",
          template: Template.receipeList,
            selector: function(match){
              regex = new RegExp(match, 'i');
              return {'receipeName': regex}
            }
          }
        ]
      };
  },

  lastReceipe: function(){
    // return receipes.find().fetch()[0];
    if(Router.current().params._id == undefined)
    {
      return receipes.findOne({}, { sort: { createdAt: -1}}, { limit: 1});
    }
    else
    {
      return receipes.findOne({_id: Router.current().params._id});
    }
  },

  stepsOrdering: function(index){
    return "Step " + (parseInt(index)+1) + " : "
  },

  getStatus: function(receipeId) {
    var a = favReceipes.find({userId:Meteor.userId(),receipeId:receipeId});
    if(a.count() > 0)
    {
      a = a.fetch()[0];
      if(typeof a.status !== "undefined")
      {
        if(a.status == true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false
      }
    }
    else
    {
      return false;
    }
  },

  getStatusString: function(receipeId) {
    var a = favReceipes.find({userId:Meteor.userId(),receipeId:receipeId});
    if(a.count() > 0)
    {
      a = a.fetch()[0];
      if(typeof a.status !== "undefined")
      {
        return a.status;
      }
      else
      {
        return "false"
      }
    }
    else
    {
      return "false";
    }
  },

  reviews: function(){
    var a =reviewRecipes.find({receipeId: Router.current().params._id}, { sort: { createdAt: -1}}).fetch();
    // var c = a.limit(2);
    return reviewRecipes.find({receipeId: Router.current().params._id},{ sort: { createdAt: -1}}).fetch();

    //console.log("reviews",a);
  },
  reviewsCount: function(){
    var a =reviewRecipes.find({receipeId: Router.current().params._id}, { sort: { createdAt: -1}}).count();
    if(a > 3){
      return true;
    }
  },
  avgRating: function(){
    totalRatings = 0;
    var ratings = reviewRecipes.find({receipeId: Router.current().params._id}).fetch();
    var count = ratings.length;
    $.each(ratings, function(index,value) {
      reviewRating = parseInt(value.reviewRating, 10);
      totalRatings = totalRatings + reviewRating;
    });
    if(totalRatings == 0){
      return 0;
    }
    else{
      return parseFloat(totalRatings/count).toFixed(2);
    }
  },
  getDays: function(date){
    if (date) {
      return moment(date).fromNow(true);
    }
  },
  ifFirstThree: function(indexValue){
    //console.log("indexValue",indexValue);
    if(indexValue < 3)
    {
      return true;
    }
    // return reviews.find({productId: Router.current().params._id}).fetch().limit(3);
  },
  receipeImage: function(lastReceipe){
    //console.log("lastReceipe",lastReceipe.id);
    var receipeImageId = lastReceipe.id;
    var receipeImage1 = receipes.findOne({_id:receipeImageId});
    //console.log("receipeImage1.receipeImage",receipeImage1.receipeImage);
    if(receipeImage1.receipeImage !== null){
      if(receipeImage1.receipeImage !== undefined){
        var imageUrl = receipeImage1.receipeImage;
        imageUrl = imageUrl.replace("http://","https://");
        var ext = imageUrl.substr(imageUrl.lastIndexOf(".")+1);
        if(ext == "webp")
        {
          ext = "png";
          imageUrl = imageUrl.substr(0,imageUrl.lastIndexOf("."));
          imageUrl += "." + ext;
        }
        return imageUrl;
      }
      else{
        return "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
      }
    }
    else{
      return "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
    }
  },

});
Template.receipePage.events({
  'click #loadMoreReviewsButton': function(e){
    e.preventDefault();
    $(".customer-reviewss").find(".customer-comments.hidden").removeClass("hidden");
    $(e.target).remove();
  },
  'click #viewReceipeProducts': function(e)
  {
    e.preventDefault();
    productsArray =[];
    var receipeProducts = $(e.target).data('receipeproduct');
    receipeProducts = receipeProducts.split(",");
    productsArray =  productsArray.concat(receipeProducts);
    if(receipeProducts != null)
    {
      Session.set('category', undefined);
      Session.set("productsArray", productsArray);
      Router.go('/products');
    }
  },
    'click #favReceipe': function (e) {
    e.preventDefault();
    var receipeId = $(e.target).data("id");
    // if(Session.get("storeId") == undefined)
    // {
    //   var storeId = receipes.findOne({_id: receipeId}).storeName;
    //   Session.set("storeId", storeId);
    // }
    // else
    // {
    //   var storeId = Session.get("storeId");
    // }
    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favReceipes.findOne({receipeId: receipeId});
    var presentfalse = favReceipes.findOne({status: false});
    if(event)
    {
      var action = false;
    }
    else
    {
      var action = true;
    }
    Meteor.call("updateFavReceipe", Meteor.userId(), action, receipeId, function(err,res){
      if(err)
      {
        console.log(err.reason);
      }
      else
      {
        if(res)
        {
          if(action)
          {
            $('[data-id="'+receipeId+'"]').attr('src', '/images/favorite-fill.png');
          }
          else
          {
            $('[data-id="'+receipeId+'"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    })
  },
  'click #loadMoreReviews': function(e)
  {
    e.preventDefault();
    $(".customer-reviewss").find(".customer-comments.hidden").removeClass("hidden");
    $(e.target).remove();
  }
});

