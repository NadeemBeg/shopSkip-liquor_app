var self;
Template.recipesList.onCreated(function() {
	Meteor.subscribe('getReceipes',Session.get("listingPageRecipe"));
	// Meteor.subscribe('getReceipes');
  Meteor.subscribe('getFavReceipes');

  self = this;
  //console.log("self", this);
  self.ready = new ReactiveVar();
  self.autorun(function() {
      // var storeId = Session.get("storeId");
      var handle = PostRecipesSubs.subscribe('getReceipes', 10);
      self.ready.set(handle.ready());
  });



});
Template.recipesList.onRendered(function() {
  PostRecipesSubs.clear();
  window.scrollTo(0,0);

  $("body").css("overflow","auto");
  
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  // $('.common-form').css('height', c);
  Session.set("listingPageRecipe",10);
  $('.recipeListDiv').on('scroll', function() {
      if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          var currentVal  = parseInt(Session.get("listingPageRecipe"));
          currentVal  = currentVal + 10;
          Session.set("listingPageRecipe", currentVal);
          Meteor.subscribe('getReceipes',Session.get("listingPageRecipe"));
      }
  })

});
Template.recipesList.helpers({
  getStatusString: function(receipeId) {
    // console.log("receipeId",receipeId);
    var a = favReceipes.find({userId:Meteor.userId(),receipeId:receipeId});
    // console.log("receipeId or not",a);
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
  getFavoriteReceipes: function(){
    return receipes.find({},{limit:Session.get("listingPageRecipe")}).fetch();
  },
  getReceipeImage: function(favReceipeId){
    var receipeId = favReceipeId._id;
    var receipe = receipes.findOne({_id: receipeId});
    if(typeof receipe !== "undefined")
    {
      if(typeof receipe.receipeImage !== "undefined")
      {
        var image = receipe.receipeImage;
        var imageUrl = image.split("upload")
        imageUrl = imageUrl[0] + "upload" + imageUrl[1];
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
        return "/images/noimage.png";
      }
    }
    else
    {
      return "/images/noimage.png";
    }
  },
  getReceipeName: function(favReceipeId){
    // console.log("favReceipeId",favReceipeId);
    var receipeId = favReceipeId._id;
    // console.log("receipeId",receipeId);
    var receipe = receipes.findOne({_id: receipeId});
    return receipe.receipeName;
  }
});

Template.recipesList.events({
  'click #favReceipe': function (e) {
    e.preventDefault();
    var receipeId = $(e.target).data("id");
    // console.log("favReceipe event receipeId",receipeId);
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
    // console.log("event",event);
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
    var data = favReceipes.find({userId:userId,receipeId:receipeId});
    // console.log("data",data.count());

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
	// 'click #favoriteReceipes': function (e) {
 //    e.preventDefault();
 //    var favReceipeId = $(e.target).data("id");
 //    console.log("favReceipeId",favReceipeId);
 //    favReceipes.update({ _id: favReceipeId },{ $set: { 'status': false }});
 //    alert("Receipe Removed from favorites!");
 //  },
});

