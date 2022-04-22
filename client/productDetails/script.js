Template.productDetails.onCreated(function() {
    // Meteor.subscribe('getProducts');
    Meteor.subscribe('getReviews'); 
    Meteor.subscribe('getBottleSizes');
    Meteor.subscribe('getBottleTypes');
});
Template.productDetails.onRendered(function() {
  PostSubs.clear();
  window.scrollTo(0,0);
  $("body").css("overflow","auto");
});
Template.productDetails.helpers({
  reviewValues: function()
  {
    return reviews.find().fetch();
  },
  productDetail: function(){
    var productsQueue = [];
    var data = Router.current().params._id;
    // console.log("current id",Router.current().params._id);
      productsQueue.push(data);
    //console.log("productsQueue",productsQueue);
    Meteor.subscribe("getSpecificProducts", productsQueue);
    if(products.findOne({ _id: Router.current().params._id}) != null)
    {
      var product = products.findOne({ _id: Router.current().params._id});
      var content = product.details;
      content= content.replace(/�/g,"'");
      content=content.replace(/“/g,'"');
      content=content.replace(/”/g,'"');
      content=content.replace(/’/g,"'");
      content=content.replace(/–/g,"-");
      content=content.replace(/©/g,"&copy;");
      content=content.replace(/®/g,"&reg;");
      content=content.replace(/°/g,"&deg;");
      content=content.replace(/¶/g,"<p>");
      content=content.replace(/¿/g,"&iquest;");
      content=content.replace(/¡/g,'&iexcl;');
      content=content.replace(/¢/g,'&cent;');
      content=content.replace(/£/g,'&pound;');
      content=content.replace(/¥/g,'&yen;');
      // console.log("product.details",content);
      return content;
    }
  },
  productPrice: function(){
    if(products.findOne({ _id: Router.current().params._id}) != null)
    {
      var product = products.findOne({ _id: Router.current().params._id});
      return product.price;
    }
  },
  productRec: function(){
    if(products.findOne({ _id: Router.current().params._id}) != null)
    {
      var product = products.findOne({ _id: Router.current().params._id});
      return product;
    }
  },
  productName: function(){
    if(products.findOne({ _id: Router.current().params._id}) != null)
    {
      var product = products.findOne({ _id: Router.current().params._id});
      return product.productName;
    }
  },
  hasProductImage: function(){
    if(products.findOne({ _id: Router.current().params._id}) != null)
    {
      var product = products.findOne({ _id: Router.current().params._id});
      if(typeof product !== "undefined")
      {
        if(typeof product.productImage !== "undefined")
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
        return false;
      }
    }
    else
    {
      return false;
    }
   
  },
  productImage: function(){
    if(products.findOne({ _id: Router.current().params._id}) != null)
    {
      var product = products.findOne({ _id: Router.current().params._id});
      if(typeof product !== "undefined")
      {
        if(typeof product.productImage !== "undefined")
        {
          var image = product.productImage;
        }
       else
        {
          var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
        }
      }
      else
      {
        var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
      }
    }
    else
    {
      var image = "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
    }
    var imageUrl = image.split("upload")
    imageUrl = imageUrl[0]+"upload/"+imageUrl[1];
    imageUrl = imageUrl.replace("http://","https://");
    var ext = imageUrl.substr(imageUrl.lastIndexOf(".")+1);
    if(ext == "webp")
    {
      ext = "png";
      imageUrl = imageUrl.substr(0,imageUrl.lastIndexOf("."));
      imageUrl += "." + ext;
    }
    return imageUrl;
  },
  // productQuantity: function(){
  //   if(products.findOne({ _id: Router.current().params._id}) != null)
  //   {
  //     var product = products.findOne({ _id: Router.current().params._id});
  //     return product.quantity;
  //   }
  // },
  // New code add for quantity
  bottlesize: function(){
      var getproductQuantity = products.findOne({_id:Router.current().params._id}).quantity;
      if(getproductQuantity == null || getproductQuantity == undefined){
        return ' ';
    }
    else{
      var getBottleSize = bottleSizes.findOne({
      _id: getproductQuantity
      });
      if(getBottleSize == null)
      {
        return ' ';
      }
      else
      {
        return getBottleSize.sizeValue;
      }
    }
    
  },
  bottleName: function(){
    var productBottleName = products.findOne({ _id: Router.current().params._id});
    var bottleNAme = bottleTypes.findOne({_id:productBottleName.bottleTypes});
    return bottleNAme.BottletypeName;
  },
  productABV: function(){
    if(products.findOne({ _id: Router.current().params._id}) != null)
    {
      var product = products.findOne({ _id: Router.current().params._id});
      return product.alcoholContent;
    }
  },
  reviews: function(){
    return reviews.find({productId: Router.current().params._id}).fetch();
  },
  reviewCount: function(){
    var a = reviews.find({productId: Router.current().params._id}, { sort: { createdAt: -1}}).count();
    if(a > 3){
      return true;
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
  favProduct: function(){
    return Router.current().params._id;
  },
  avgRating: function(){
    totalRatings = 0;
    var ratings = reviews.find({productId: Router.current().params._id}).fetch();
    var count = ratings.length;
    $.each(ratings, function(index,value) {
      reviewRating = parseInt(value.reviewRating, 10);
      totalRatings = totalRatings + reviewRating;
    });
    return parseFloat(totalRatings/count).toFixed(0);
  },
  getDays: function(date){
    if (date) {
      return moment(date).fromNow(true);
    }
  },

  productReviewId: function(){
    return Router.current().params._id
  },

  getStatusString: function() {
    var a = favProducts.find({userId:Meteor.userId(),productId:Router.current().params._id});
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

  getStatus: function() {
    var a = favProducts.find({userId:Meteor.userId(),productId:Router.current().params._id});
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
  
  outOfStock: function(product){
    var productId = product._id
    var productAvailable = validateProductAvailable(productId);
    if(productAvailable){
      return true;
    }
  },

  productBottleType: function(){
    if(products.findOne({ _id: Router.current().params._id}) != null);
    {
      a = products.findOne({_id: Router.current().params._id})
      if(a!=null)
      {
        bottleTypeId = a.bottleTypes;
        if(bottleTypeId != undefined)
        {
          var b = bottleTypes.findOne({_id: bottleTypeId}); 
          if(b != null)
          {
            return b.BottletypeName;
          }
        }
        else
        {
          return "No Bottle Type Available";
        }
      }
    }
  },

  topprodDetailsPicks: function(){
    var orderList = orders.find({status: "Success"}).fetch();
    if(orderList.length>0)
    {
      var productsQueue = [];
      var productsQuantityQueue = [];

      for(var i = 0; i < orderList.length; i++)
      {
        var singleOrder = orderList[i];
        var orderProducts = singleOrder.productIds;
        for(var j = 0; j < orderProducts.length; j++)
        {
          var singleProduct = orderProducts[j];
          if(productsQueue.indexOf(singleProduct.id) == -1)
          {
            productsQueue.push(singleProduct.id);
            productsQuantityQueue.push(singleProduct.quantity);
          }
          else
          {
            var currentIndex = productsQueue.indexOf(singleProduct.id);
            var currentQuantity = productsQuantityQueue[currentIndex];
            currentQuantity = parseInt(currentQuantity) + parseInt(singleProduct.quantity);
            productsQuantityQueue[currentIndex] = currentQuantity;
          }
          if(productsQueue.length >=5)
          {
            break;
          }
        }
      }
      var productListing = [];
      $.each(productsQueue, function(index, value) {
        if(products.findOne({_id: value}))
        {
          productListing.push(products.findOne({_id: value}));
        }
      });
      return productListing.slice(-2); 
    }
    // else
    // {
    //   return products.find().fetch().slice(-2);
    // }

  },

  prodImage: function(prodId){
    var product = products.findOne({_id: prodId});
    if(typeof product !== "undefined")
    {
      if(typeof product.productImage !== "undefined")
      {
        var image = product.productImage;
        var imageUrl = image.split("upload")
        imageUrl = imageUrl[0] + "upload/w_200,h_500" + imageUrl[1];
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
  }
});

Template.productDetails.events({
  'click .productImageDiv': function(e)
  {
    var src = $(e.target).find("img").attr("src");
    //console.log(src);
    $(".fullScreenImage").slideDown();
    $(".fullScreenImage").find("img").prop("src", src);
    
  },
  'click .productImageDetailPage': function(e){
    var src = $(e.target).attr("src");
    //console.log(src);
    $(".fullScreenImage").slideDown();
    $(".fullScreenImage").find("img").prop("src", src);
  },
  'click #favProduct1': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");
    /*var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({productId: productId});
    if(presentRecord)
    {
      Meteor.call("updateFavProduct", presentRecord, $(e.target).data("id"), Meteor.userId(), function(err, res){
        if(err){
          alert(err.reason);
        }
        else{
          if(res){
            $('[data-id="'+productId+'"]').attr('src', '/images/favorites-heart.png');
            alert("Product removed from Favorite!");
          }
        }
      })
    }*/
    if(Session.get("storeId") == undefined)
    {
      if(products.findOne({_id: productId}) != null)
      {
        var storeId = products.findOne({_id: productId}).storeName;
      }
    }
    else
    {
      var storeId = Session.get("storeId");
    }
    
    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({productId: productId});
    var presentfalse = favProducts.findOne({status: false});
    if(event)
    {
      var action = false;
    }
    else
    {
      var action = true;
    }
    Meteor.call("updateFavProduct", storeId, Meteor.userId(), action, productId, function(err,res){
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
            $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
          }
          else
          {
            $('[data-id="'+productId+'"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    })
  },
  'click #AddTocartFromDetails': function(e)
  {
    e.preventDefault();
    if(Session.get("storeId") == undefined)
    {
      if(products.findOne({_id: Router.current().params._id}) != null)
      {
        var storeId = products.findOne({_id: Router.current().params._id}).storeName;
      }
    }
    else
    {
      var storeId = Session.get("storeId");
    }
    var productId =  Router.current().params._id;
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({productId: productId, userId: userId});
    if(presentProduct)
    {
      Meteor.call("updateCart", presentProduct, productId, userId, function(err, res){
        if(err){
          alert(err.reason);
        }
        else{
          // alert("Product Updated Sucessfully!");
          // Toast.success("Product Updated Sucessfully!");
        }
      })
    }
    else
    {
      // if()
      //   {
      //     Session.get("storeId")
      //   }
        Meteor.call("createCart", productId, userId, storeId, function(err, res){
          if(err){
            alert(err.reason);
          }
          else{
            if(res == "false"){
              // alert("You cannot select product from another store..!");
              Toast.info("You cannot select product from another store..!");
            }
            else
            {
              // Toast.success("Product Added to Cart Sucessfully!");
              // alert("Product Added to Cart Sucessfully!");
            }
          }
        })
    }
  },
  'click #favProduct': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");
    if(Session.get("storeId") == undefined)
    {
      if(products.findOne({_id: productId}) != null)
      {
        var storeId = products.findOne({_id: productId}).storeName;
        Session.set("storeId", storeId);
      } 
    }
    else
    {
      var storeId = Session.get("storeId");
    }
    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({productId: productId});
    var presentfalse = favProducts.findOne({status: false});
    if(event)
    {
      var action = false;
    }
    else
    {
      var action = true;
    }
    Meteor.call("updateFavProduct", storeId, Meteor.userId(), action, productId, function(err,res){
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
            $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
          }
          else
          {
            $('[data-id="'+productId+'"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    })
  },
  'click #addCart':function(e){
    e.preventDefault();
    if(Session.get("storeId") == undefined)
    {
      if(products.findOne({_id: $(e.target).data("attr")}) != null)
      {
        var storeId = products.findOne({_id: $(e.target).data("attr")}).storeName;
        Session.set("storeId", storeId);
      }
    }
    else
    {
      var storeId = Session.get("storeId");
    }
    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({productId: productId, userId: userId});
    if(presentProduct)
    {
      Meteor.call("updateCart", presentProduct, productId, userId, function(err, res){
        if(err){
          alert(err.reason);
        }
        else{
          // alert("Product Updated Sucessfully!");
          // Toast.success("Product Updated Sucessfully!");
        }
      })
    }
    else
    {
      Meteor.call("createCart", productId, userId, storeId, function(err, res){
        if(err){
          alert(err.reason);
        }
        else{
          if(res == "false"){
            Toast.info("You cannot select product from another store..!");
            // alert("You cannot select product from another store..!")
          }
          else
          {
            // Toast.success("Product Added to Cart Sucessfully!");
            // alert("Product Added to Cart Sucessfully!");
          }
        }
      })
    }
  },

  'click #loadMoreReviews': function(e)
  {
    e.preventDefault();
    $(".customer-reviewss").find(".customer-comments.hidden").removeClass("hidden");
    $(e.target).remove();
  },
});
