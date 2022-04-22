var searchArray = new ReactiveVar([]);
Template.spirituousProduct.onCreated(function() {
	// Meteor.subscribe('products');
	// Meteor.subscribe('getOrders');
  Meteor.subscribe('getBottleSizes');
  Meteor.subscribe('getBottleTypes');
  Meteor.subscribe('getProductsByLiqourCat',Session.get("storeId"));
  setTimeout(function(){
        $('.itemsliquor').flyto({
          item      : 'li',
          target    : '.cartssa',
          button    : '.my-btn'
        });
      },1000);
});
Template.spirituousProduct.onRendered(function() {
  PostSubs.clear();
  $("body").css("overflow","auto");
	var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);

  Session.set("listingPage",10);
  $(".topPickProductsList").scroll(function() {
    console.log("currentVal 1234");

    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) 
    {
      var currentVal  = parseInt(Session.get("listingPage"));
      console.log("currentVal",currentVal);
      currentVal  = currentVal + 10;
      Session.set("listingPage",currentVal);
      console.log("currentVal 12",currentVal);
      setTimeout(function(){
        $('.itemsliquor').flyto({
          item      : 'li',
          target    : '.cartssa',
          button    : '.my-btn'
        });
      },1000);
    }

  });
});
Template.spirituousProduct.helpers({
  isDevice:function(){
    return Meteor.isCordova;
  },
  bottleTypeName:function(bottleTypeName) {
    var a = bottleTypes.findOne({_id:bottleTypeName});
    if(a != null){
      return a.BottletypeName;
    }   
  },
	getTopProducts: function(){
      var productListing = products.find({"categoryType":"He9WM9S2oLmDkyLao"},{limit:Session.get("listingPage")}).fetch();
      console.log("productListing",productListing);
      return productListing;

    // var orderList = orders.find().fetch();
    // var productsQueue = [];
    // var productsQuantityQueue = [];

    // for(var i = 0; i < orderList.length; i++)
    // {
    //   var singleOrder = orderList[i];
    //   var orderProducts = singleOrder.productIds;
    //   for(var j = 0; j < orderProducts.length; j++)
    //   {
    //     var singleProduct = orderProducts[j];
    //     // console.log("1234",productsQueue.indexOf(singleProduct.id));
    //     if(productsQueue.indexOf(singleProduct.id) == -1)
    //     {
    //       productsQueue.push(singleProduct.id);
    //       productsQuantityQueue.push(singleProduct.quantity);
    //     }
    //     else
    //     {
    //       var currentIndex = productsQueue.indexOf(singleProduct.id);
    //       var currentQuantity = productsQuantityQueue[currentIndex];
    //       currentQuantity = parseInt(currentQuantity) + parseInt(singleProduct.quantity);
    //       productsQuantityQueue[currentIndex] = currentQuantity;
    //       // console.log("productsQueue",productsQueue.length);
    //     }
    //     if(productsQueue.length >= 10)
    //     {
    //       // console.log("productsQueue.length",productsQueue.length);
    //       break;
    //     }
    //   }
    // }
    // var productListing = [];
    // // console.log("productsQueue",productsQueue);
    // Meteor.subscribe("getSpecificProducts", productsQueue);
    // $.each(productsQueue, function(index, value) {
    //   if(products.findOne({_id: value}) != null)
    //   {
    //     productListing.push(products.findOne({_id: value}));
    //   }
    // });
    // return productListing;
  },

    getStatusString: function() {
      var a = favProducts.find({userId:Meteor.userId(),productId:this._id});
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
      var a = favProducts.find({userId:Meteor.userId(),productId:this._id});
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

  prodImage: function(prodId){
    var product = products.findOne({_id: prodId});
    if(typeof product !== "undefined")
    {
      if(typeof product.productImage !== "undefined")
      {
        var image = product.productImage;
        console.log("image", image);
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
        return "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
      }
    }
    else
    {
      return "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
    }
  },
  productQuantity:function(id){
    //console.log("productQuantity id", id);
    var prodQuantity = bottleSizes.findOne({_id:id});
    var prodQuantity11 = prodQuantity.sizeValue;
    return prodQuantity11;
  },
});
Template.spirituousProduct.events({
  'click #barcodeIcon':function(e)
  {
    e.preventDefault()
    var test = Template.instance();
    cordova.plugins.barcodeScanner.scan(function(res){
      //sample: {text: "ABC-abc-1234", format: "CODE_128", cancelled: false}
      
      if(res.text != "")
      {
        var s = res.text;
        s = s.replace(/^0+/, '');
        s = Number(s).toString()
        // "8.5917E+11",859170000000
        Meteor.subscribe("getProductsBySKU", s, function(){
          //console.log("scanned by sku subscribed");
          var storeId = Session.get("storeId");
          var scannedProductsList = "";
          if(storeId !== null){
            if(storeId !== undefined){
              // scannedProductsList = products.find({"storeName": storeId},{$or: [{"productId": s},{"sku": s}]});
              scannedProductsList = products.find({$and : [{$or: [{"productId": s},{"sku": s}]},{"storeName": storeId}]});
          }
          else{
            scannedProductsList = products.find({$or: [{"productId": s},{"sku": s}]});
          }
      }
      else{
        scannedProductsList = products.find({$or: [{"productId": s},{"sku": s}]});
      }

          //console.log("scannedProductsList.count()",scannedProductsList.count());
          if(scannedProductsList.count() > 0)
          {
            //console.log("scannedProductsList",scannedProductsList.fetch());
            scannedProductsList = scannedProductsList.fetch();
            if(JSON.stringify(test.scanVar.get()) !== JSON.stringify(scannedProductsList))
            {
              test.scanVar.set(scannedProductsList);            
            }
            // $("#barcodeIcon").show();
            $('#scanedModal').modal('show');
        }
    });

    }
},
function (error) {
  console.log("Scanning failed:" + error);
},{
          showTorchButton : true, // iOS and Android
          saveHistory: true, // Android, save scan history (default false)
          disableSuccessBeep: false // iOS and Android
      })
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
          console.log(err.reason);
        }
        else{
          //alert("Product Updated Sucessfully!");
        }
      })
    }
    else
    {
      Meteor.call("createCart", productId, userId, storeId, function(err, res){
        if(err){
          console.log(err.reason);
        }
        else{
          if(res == "false"){
            Toast.info("You cannot select product from another store..!");
            // alert("You cannot select product from another store..!")
          }
          else
          {
            //Toast.success("Product Added to Cart Sucessfully!");
            // alert("Product Added to Cart Sucessfully!");
          }
        }
      })
    }
  },
  'keyup #searchTextBox': function(e){

    e.preventDefault();
    var searchVal = $(e.target).val();
    searchVal = searchVal.toLowerCase();
    $("#searchBoxList").show();
    var storeId = Session.get("storeId");
    Meteor.subscribe('getProductsForSearch', searchVal, function(){
      var isBrand = brands.findOne({"brandName": searchVal});
      if(typeof isBrand !== "undefined")
      {
        var productList ="";
        if(isBrand != null)
        {
          var brandId = isBrand._id;
          if(storeId !== null){
            if(storeId !== undefined){
              productList = products.find({"storeName":storeId,"brandName": brandId},{limit:5}).fetch();
            } 
            else{
              productList = products.find({"brandName": brandId},{limit:5}).fetch();
            }         
          }
          else{
            productList = products.find({"brandName": brandId},{limit:5}).fetch();
          }
          if(JSON.stringify(searchArray) != JSON.stringify(productList)){
            searchArray.set(productList);            
            var code = e.keyCode || e.which;
              if(code == 13) { //Enter keycode
                $( ".qty" ).trigger( "blur" );
                Router.go("/searchResult/" + searchVal);
                $("#searchproduct").val('');
                $('#searchBoxList').hide();
              }
          }
      }
  }
  else
  {
        //console.log("10");
        if(searchVal == '' || searchVal == undefined || searchVal == null){
          // console.log("searchVal",searchVal);
          //$('#searchBoxList').hide();
      }
      else{
          //console.log("searchVal console.log 75097",searchVal);
          //console.log("11");
          //Meteor.subscribe('getProductsForSearch',searchVal,function(){
            var productList ="";
          // console.log("searchVal",searchVal);
          // var productList = products.find({"productName": {'$regex':searchVal}}).fetch();
          if(storeId !== null){
            //console.log("12");
            if(storeId !== undefined){
              //console.log("13");
              // productList = products.find({"storeName": storeId},{"productName": {
              //   $regex: new RegExp(searchVal,"i")
              // }}).fetch();

              productList = products.find({"storeName": storeId,"productName": {$regex: new RegExp(searchVal,"i")}
          },{limit:5}).fetch();

          }
          else{
              //console.log("14");
              //console.log("products.find",products.find().fetch());
              productList = products.find({"productName": new RegExp(searchVal,"i")},{limit:5}).fetch();
          }              
      }
      else{
            //console.log("15");
            productList = products.find({"productName": new RegExp(searchVal,"i")},{limit:5}).fetch();
        }        
          //console.log("productList with word",productList);
          $('#searchBoxList').show();
          if(JSON.stringify(searchArray) != JSON.stringify(productList)){
            //console.log("16");
            searchArray.set(productList);
            var code = e.keyCode || e.which;
            //console.log("code",code);
            if(code == 13) { //Enter keycode
              //Do something
              $( ".qty" ).trigger( "blur" );
              //console.log("enter is pressed");
              Router.go("/searchResult/" + searchVal);
              $("#searchproduct").val('');
              // $("#searchBoxList").remove();
              $('#searchBoxList').hide();
          }
      }
          //});
          
      }
  }
});
      // console.log("keyup prodQuantity",$(e.target).val());
  },

});
