Template.favoriteReceipes.onCreated(function() {
	Meteor.subscribe('getFavReceipes');
  Meteor.subscribe('getReceipes',10);
});
Template.favoriteReceipes.onRendered(function() {
  $("body").css("overflow","auto");
  
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  // $('.common-form').css('height', c);
});
Template.favoriteReceipes.helpers({
  getFavoriteReceipes: function(){
    return favReceipes.find({status: true, userId: Meteor.userId()}).fetch();
  },
  getReceipeImage: function(favReceipeId){
    var receipeId = favReceipeId.receipeId;
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
    var receipeId = favReceipeId.receipeId;
    var receipe = receipes.findOne({_id: receipeId});
    //console.log("receipe",receipe);
    return receipe.receipeName;
  }
});

Template.favoriteReceipes.events({
	'click #favoriteReceipes': function (e) {
    //console.log("e", $(e.target).data("id"));
    e.preventDefault();
    var favReceipeId = $(e.target).data("id");
    if(favReceipeId !== null){
      Meteor.call("unfavoriteReceipes", favReceipeId, function(err, res){
        if(err){
          Toast.info("Cannot Receipe Removed from favorites!");
          //console.log(err);
        }
        else{
          Toast.success("Receipe Removed from favorites!");
        }
      }); 
    }    
  },
});

