var self;
var typeList = new ReactiveVar([]);
var brandList = new ReactiveVar([]);
var searchArray = new ReactiveVar([]);
Template.products.onCreated(function() {
	//Meteor.subscribe('getProducts', Session.get("storeId"),10);
  Meteor.subscribe("getUserFavorites",Meteor.userId());
  Meteor.subscribe('getReviews');
  Meteor.subscribe('getCarts');
  Meteor.subscribe('getStores');
  Meteor.subscribe('getBrands');
  Meteor.subscribe('getBottleSizes');
  Meteor.subscribe('getBottleTypes');
  Meteor.subscribe('getCategories');
  Meteor.subscribe('getProductTypes');

 
  self = this;
  //console.log("self", this);
  self.ready = new ReactiveVar();
  self.autorun(function() {
      var storeId = Session.get("storeId");
      var handle = PostSubs.subscribe('getProducts', storeId, 10);
      self.ready.set(handle.ready());
  });
  setTimeout(function(){
        $('.itemsproducts').flyto({
          item      : 'li',
          target    : '.cartssa',
          button    : '.my-btn'
        });
      },1000);
  
});

Template.products.onRendered(function() {
  
  $('.topPortion').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          if($(".listingContainer").find("img.loaderImageClass").length == 0)
          {
            $(".listingContainer").append('<div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12"><img src="/images/loader.gif" class="loaderImageClass"/></div>');  
          }
          
          var currentVal  = parseInt(Session.get("listingPage"));
          currentVal  = currentVal + 10;
          Session.set("listingPage",currentVal);
          $(".listingContainer").find("img.loaderImageClass").parent().remove();
          var storeId = Session.get("storeId");
          var handle = PostSubs.subscribe('getProducts', storeId, Session.get("listingPage"));
          self.ready.set(handle.ready());
          setTimeout(function(){
          $('.itemsproducts').flyto({
            item      : 'li',
            target    : '.cartssa',
            button    : '.my-btn'
          });
        },1000);
        }
      });
  PostSubs.clear();
  window.scrollTo(0,0);
// var highPriceProd0 = Session.get("highPrice");
// console.log("highPriceProd0 1",highPriceProd0);
var highPriceProd0 = parseFloat(localStorage.getItem("highPrice"));
// console.log("highPriceProd0 1",highPriceProd0);
// Session.set("FilterArray", null);

// console.log("highPriceProd",highPriceProd0);
$( "#sliderRange" ).slider({
  range: true,
  min: 0,
  max:  highPriceProd0,
  values: [ 0, highPriceProd0 ],
  slide: function( event, ui ) {

  var html = '<span>('+ui.values[0]+'</span> - <span>'+ui.values[1]+')</span>';
  $("#rangeValues").html(html);
   Session.set("minPrice",ui.values[ 0 ]);
   Session.set("maxPrice",parseFloat(ui.values[ 1 ]));
   //console.log("ui.values[ 1 ]",ui.values[ 1 ]);
   //console.log(" Session.get maxPrice",Session.get("maxPrice"));
   Session.set("unFliter", true);



   var cat = {};
   cat = {
    $lte:parseFloat(Session.get("maxPrice")),
    $gte:parseFloat(Session.get("minPrice"))
  }
  //console.log("cat",cat);
  if(cat == "")
  {
    if(Session.get("FilterArray") != undefined)
    {
      var temp = Session.get("FilterArray");
      delete temp["price"];
      Session.set("FilterArray", temp);
    }
  }
  else
  {
    // console.log('Session.get("FilterArray")',Session.get("FilterArray"));
    if(Session.get("FilterArray") == null)
    {
      var temp = {};
      temp["price"] = cat;
      Session.set("FilterArray", temp);
    }
    else
    {
      var temp = Session.get("FilterArray");
      temp["price"] = cat;
      Session.set("FilterArray", temp);
    }
  }


   }
});

  // $('input[type="rangeslide"]').ionRangeSlider();
  $("body").css("overflow","auto");
  
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var d = $('.serch-homepage').outerHeight();
  var c = a - b - d;
  // $('.content.common-form.favorites-list.productListPage').css('height', c);
  Session.set("listingPage",10);

  
// $("#example_id").ionRangeSlider();


	// $('input[type="rangeslide"]').ionRangeSlider({
 //    min: 0,
 //    max: 1000,
 //    step: 0.1
 //  });
});
Template.products.helpers({
  allCategories: function(){
   return categories.find({"showFilter":true}).fetch();
  },
  isSelectedCategory: function(catId)
  {
    var selectCategory = Session.get("FilterArray");
    if(typeof selectCategory.categoryType == "undefined")
    {
      return "";
    }
    else
    {
      if(selectCategory.categoryType == null)
      {
        return "";
      }
      else
      {
        if(selectCategory.categoryType == catId)
        {
          return "selected";
        }
        else
        {
          return "";
        }
      }
    }
  },
  allProductTypes: function(){
    //console.log("sir1 ");
    var selectCategory = Session.get("FilterArray");
    if(typeof selectCategory.categoryType !== "undefined"){
      //console.log("categoryType for  productType", selectCategory.categoryType);
      Meteor.call("productTypesListGet", selectCategory.categoryType, function(err, res){
        if(err){
          console.log(err);
        }
        else{
          //console.log("hjgfhjfhj",res);
          if(JSON.stringify(typeList.get()) !== JSON.stringify(res))
          {
            //console.log("allProductTypes res",res);
            typeList.set(res);
          }
        }
        
      }); 
      return typeList.get(); 
    }  
    else{

      typeList.set([]);
      //console.log("sir else",typeList.get());
      return typeList.get();
    }  
  },
  isSelectedProduct: function(ProTypeId)
  {
    //console.log("ProTypeId",ProTypeId);
    var selectCategory = Session.get("FilterArray");
    if(typeof selectCategory.productType == "undefined")
    {
      //console.log("1");
      return "";
    }
    else
    {
      //console.log("2");
      if(selectCategory.productType == null)
      {
        //console.log("3");
        return "";
      }
      else
      {//console.log("4");
        if(selectCategory.productType == ProTypeId)
        {
          //console.log("5");
          return "selected";
        }
        else
        {
          //console.log("6");
          return "";
        }
      }
    }
  },
  allBrandsTypes: function(){
    // var html ="";
    // html += '<option value="">Brand Type</option>';
    var selectCategory = Session.get("FilterArray");
    if(typeof selectCategory.categoryType !== "undefined" && typeof selectCategory.productType !== "undefined" ){
      //console.log("categoryType for  productType", selectCategory.categoryType);
    Meteor.call("productBrandNameList", selectCategory.categoryType, selectCategory.productType, function(err, res){
      if(err){
        console.log(err);
      }
      else{
        //console.log("barands",res);        
        // if(res.length>0){
        //   for(var i =0; i< res.length; i++){
        //     html += '<option isSelectedBrand="selected" value='+res[i]._id+'>'+res[i].brandName+'</option>';
        //   }
        // }
        // return $("#brand").html(html);
          if(JSON.stringify(brandList.get()) !== JSON.stringify(res))
          {
            brandList.set(res);
          }
      }
      
    }); 
    return brandList.get(); 
    }
    
    
  },
  isSelectedBrand: function(brandId)
  {
    //console.log("brandId",brandId);
    var selectBrandType = Session.get("FilterArray");
    //console.log("selectBrandType",selectBrandType.brandName);
    if(typeof selectBrandType.brandName == "undefined")
    {
      //console.log("undefined brand");
      return "";             
    }
    else
    {
      if(typeof selectBrandType.brandName == null)
      {
        //console.log("Null brand");
        return "";
      }
      else
      {
        if(selectBrandType.brandName == brandId)
        {
          //console.log("brand selected");
          return "selected";
        }
        else
        {
          return "";
        }
      }
    }
  },  
  bottleTypeName:function(bottleTypeName) {
    var a = bottleTypes.findOne({_id:bottleTypeName});
    if(a != null){
      return a.BottletypeName;
    }   
  },
  priceMin1:function(){
    var minPrice = (parseFloat(Session.get("minPrice")));
    // console.log("minPrice",minPrice);
    if(isNaN(minPrice)){
      var a = 0;
      return a;
    }
    else{      
      return (parseFloat(Session.get("minPrice")));         
    }
  },
  // old code
  // priceMax1:function(){
  //   var highPriceProd0 = localStorage.getItem("highPrice");
  //   var maxPrice = (parseFloat(Session.get("maxPrice")));
  //   if(isNaN(maxPrice)){
  //     return parseFloat(highPriceProd0);
  //   }
  //   else{      
  //     return (parseFloat(Session.get("maxPrice")));   
  //   }
  // },
  priceMax1:function(){

    // var highPriceProd0 = parseFloat(localStorage.getItem("highPrice"));
    var maxPrice = (parseFloat(Session.get("maxPrice")));
    // console.log("highPriceProd0 priceMax1",highPriceProd0);
    if((maxPrice)){
      return parseFloat(Session.get("maxPrice"));
    }
    else{      
      return parseFloat(Session.get("maxPrice"));   
    }
  },



	categories: function(){
      return categories.find({},{sort:{categoryType:1}}).fetch();  
  },
  productTypes: function(){  
    // return productTypes.find().fetch();
    return 0;
  },
  
  stores: function(){
    return stores.find().fetch();
  },
  brands: function(){
    // return brands.find().fetch();
    return 0;
  },
  bottlesize: function(n){
    // console.log("nnnn",n);
    var getBottleSize = bottleSizes.findOne({
      _id: n
    });
    if(getBottleSize == null)
    {
      return ' ';
    }
    else
    {
      return getBottleSize.sizeValue;
    }
  },
	getProducts:function(){

    // var priceaa = products.find({price: { $lte: Session.get("minPrice").toString(),  $gte: Session.get("maxPrice").toString() }}).fetch();
    var minPrice = Session.get("minPrice");
    // console.log("minPrice",minPrice);
    var maxPrice = Session.get("maxPrice");
    // console.log("maxPrice",maxPrice);
    var priceaa =  products.find({'price':{$lte: maxPrice, $gte: minPrice }}).fetch();
    // console.log("priceaa",priceaa);
    if(Session.get("storeId") != null && Session.get("storeId") != undefined){
      var highPriceProd = products.findOne({storeName:Session.get("storeId") },{sort: {price: -1}});
    }
    else{      
      var highPriceProd = products.findOne({},{sort: {price: -1}});
    }
    // console.log("highPriceProd",highPriceProd);
    if(highPriceProd != null){
      highPriceProd = getMax();
      // console.log("highPrice.price.set",highPriceProd);
      // Session.set("highPrice", highPriceProd);
      localStorage.setItem("highPrice",highPriceProd);
    }
    var productArr=[];
    // if(Session.get('unFliter') == undefined){
    
		// if(Session.get('category') == undefined)
		// {
		// 	if(Session.get("storeId") == undefined)
  //     {
  //       if(Session.get("productsArray") != undefined )
  //       {
  //         productIds = Session.get("productsArray");
  //         for(var i=0;i<productIds.length;i++)
  //         {
  //           productArr.push(products.findOne({_id:productIds[i]}));
  //         }
  //         console.log("productArr",productArr);
  //         return productArr;
  //       }
  //       else
  //       {
  //         if(Session.get("listingPage") == undefined)
  //         {
  //           Session.set("listingPage",10);
  //           return products.find({},{limit:Session.get("listingPage")}).fetch();
  //         }
  //         else
  //         {

  //           return products.find({},{limit:Session.get("listingPage")}).fetch();
  //         }
  //       }
        
  //     }
  //     else
  //     {
  //       if(Session.get("listingPage") == undefined){
  //         Session.set("listingPage",10);
  //         return products.find({storeName: Session.get("storeId")},{limit:Session.get("listingPage")}).fetch();
  //       }
  //       else{
  //         return products.find({storeName: Session.get("storeId")},{limit:Session.get("listingPage")}).fetch();
  //       }
  //     }
		// }
  
		// else
		// {
  //     var cat = {}
  //     if((Session.get('category') != undefined) && Session.get('category') != "")
  //     {
  //       cat["categoryType"] = Session.get('category')
  //     }
  //     if((Session.get('storeId') != undefined) && Session.get('storeId') != "")
  //     {
  //       cat["storeName"] = Session.get('storeId')
  //     }
  //     if((Session.get('brandName') != undefined) && Session.get('brandName') != "")
  //     {
  //       cat["brandName"] = Session.get('brandName')
  //     }
  //     if((Session.get('type') != undefined) && Session.get('type') != "")
  //     {
  //       cat["productType"] = Session.get('type')
  //     }
  //     if((Session.get("minPrice") != undefined) && Session.get("maxPrice") != "")
  //     {
  //       cat['price'] = {
  //         $lte:parseFloat(Session.get("maxPrice")),
  //         $gte:parseFloat(Session.get("minPrice"))
  //       }

  //     }
  //     Session.set("listingPage",10);
  //     console.log("cat",cat);
  //      var newFilterArray = Session.get("FilterArray");
  //      console.log("newFilterArray",newFilterArray);
  //   	 return products.find(newFilterArray,{limit:Session.get("listingPage")}).fetch();
     
		// }
    // if((Session.get('storeId') != undefined) && Session.get('storeId') != "")
    //   {
    //     cat["storeName"] = Session.get('storeId')
    //   }
      var selectStoreID = Session.get('storeId');
      // console.log("selectStoreID 1 ",selectStoreID);
    if(selectStoreID == "" && selectStoreID != undefined)
        {
          // console.log("selectStoreID 2 ",selectStoreID);
          if(Session.get("FilterArray") != undefined)
          {
            // console.log("selectStoreID 3 ",selectStoreID);
            var temp = Session.get("FilterArray");
            delete temp["storeName"];
            Session.set("FilterArray", temp);
          }
        }
        else
        {
          // console.log("selectStoreID 4 ",selectStoreID);
          // console.log('Session.get("FilterArray")',Session.get("FilterArray"));
          if(Session.get("FilterArray") == null)
          {
            // console.log("selectStoreID 4 ",selectStoreID);
            var temp = {};
            temp["storeName"] = selectStoreID;
            Session.set("FilterArray", temp);
          }
          else
          {
            // console.log("selectStoreID 5 ",selectStoreID);
            var temp = Session.get("FilterArray");
            temp["storeName"] = selectStoreID;
            Session.set("FilterArray", temp);
          }
        }

       var newFilterArray = Session.get("FilterArray");
       if(newFilterArray == null){
        return products.find({},{limit:Session.get("listingPage")}).fetch();
       }
       else{        
       // console.log("newFilterArray",newFilterArray);
       Meteor.subscribe("getProductsByFilter",newFilterArray, Session.get("listingPage"));
       // console.log("productLIST",products.find(newFilterArray,{limit:Session.get("listingPage")}).fetch());
       return products.find(newFilterArray,{limit:Session.get("listingPage")}).fetch();
       }
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
  storename: function(storeId){
    if(typeof storeId.storeName !== "undefined")
    {
      if(storeId.storeName !== "")
      {
        var a = stores.findOne({_id: storeId.storeName});
        if(a != null)
        {
          return a.storeName;
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
  prodImage: function(prodId){
    var product = products.findOne({_id: prodId});
    if(typeof product !== "undefined")
    {
      if(typeof product.productImage !== "undefined")
      {
        var image = product.productImage;
        var imageUrl = image.split("upload")
        imageUrl = imageUrl[0] + "upload" + imageUrl[1];
        // console.log("mukesh", imageUrl);
        imageUrl = imageUrl.replace("http://","https://");
        // console.log("mukesh2", imageUrl);
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
  }
});


Template.products.events({
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
},
  'click #loadMoreButton': function(e)
  {
    e.preventDefault();
    var currentVal  = parseInt(Session.get("listingPage"));
    currentVal  = currentVal + 10;
    Session.set("listingPage",currentVal);
  },
 'change #category': function (e) {
    e.preventDefault();
   /* var a = $("#category").val();
    console.log("On change", a);
    $("#catModal").modal("hide");
    Session.set("unFliter", true);
    Session.set('category', undefined);
    Session.set('type', undefined);
    Session.set('category', $("#category").val());
    // Session.set('type', $("#type").val());
    // Session.set('storename', $("#storename").val());
    // Session.set('brandName', $("#brandname").val());
    // Session.set('price', $(".irs-hidden-input").val());
    Session.set('price', $("#price").val());
   $(window).scrollTop(0);
    Session.set("listingPage",10);*/
    var typeSession = Session.get("FilterArray");
    //console.log("typeSession",typeSession.brandName);
    if(typeof typeSession.brandName != undefined){
      delete typeSession["brandName"];
      Session.set("FilterArray", typeSession);
    }
    if(typeof typeSession.productType !=undefined){
      delete typeSession["productType"];
      Session.set("FilterArray", typeSession);
    }

    var val = $(e.target).val();
    //console.log(val);
    if(val == "")
    {
      if(Session.get("FilterArray") != undefined)
      {
        var temp = Session.get("FilterArray");
        delete temp["categoryType"];
        Session.set("FilterArray", temp);
      }
    }
    else
    {
      //console.log('Session.get("FilterArray")',Session.get("FilterArray"));
      if(Session.get("FilterArray") == null)
      {
        var temp = {};
        temp["categoryType"] = val;
        Session.set("FilterArray", temp);
      }
      else
      {
        var temp = Session.get("FilterArray");
        temp["categoryType"] = val;
        Session.set("FilterArray", temp);
      }
    }
    Meteor.call("productTypesListGet", val, function(err, res){
      if(err){
        console.log(err);
      }
      else{
        //console.log(res);

        var html = "";

        html += '<option value="">Product Type</option>';
        if(res.length>0){
          for(var i =0; i< res.length; i++){
            html += '<option value='+res[i]._id+'>'+res[i].typeName+'</option>';
          }
        }        
        $("#type").html(html);
      }
    });
    var html = "";
      html += '<option value="">Brand Name</option>';
      $("#brand").html(html);
  },
  'click #catModal_reset_product': function (e) {
  	e.preventDefault();
    $("#catModal").modal("hide");
    Session.set("listingPage",10);
  	Session.set('category', undefined);
    Session.set("productsArray", undefined);
    $(window).scrollTop(0);
    Session.set("listingPage",10);
  },
  'change #type': function (e) {

    var typeSession = Session.get("FilterArray");
    // console.log("typeSession",typeSession.brandName);
    if( typeof typeSession.brandName !=undefined){
      delete typeSession["brandName"];
      Session.set("FilterArray", typeSession);
    }
    e.preventDefault();
   var val = $(e.target).val();
    //console.log(val);
    if(val == "")
    {
      if(Session.get("FilterArray") != undefined)
      {
        var temp = Session.get("FilterArray");
        delete temp["productType"];
        Session.set("FilterArray", temp);
      }
    }
    else
    {
      //console.log('Session.get("FilterArray")',Session.get("FilterArray"));
      if(Session.get("FilterArray") == null)
      {
        var temp = {};
        temp["productType"] = val;
        Session.set("FilterArray", temp);
      }
      else
      {
        var temp = Session.get("FilterArray");
        temp["productType"] = val;
        Session.set("FilterArray", temp);
      }
    }

    var category =$("#category").val();
    Meteor.call("productBrandNameList",category, val, function(err,res){
      if(err){
        console.log(err);
      }
      else{
        //console.log(res);

        var html = "";

        html += '<option value="">Brand Name</option>';
        if(res.length>0){
          for(var i = 0; i< res.length; i++){
            html += '<option value='+res[i]._id+'>'+res[i].brandName+'</option>';
          }
        }              
        $("#brand").html(html);
      }
    });
  },
  'change #brand': function (e) {
    e.preventDefault();
   var val = $(e.target).val();
    // console.log(val);
    if(val == "")
    {
      if(Session.get("FilterArray") != undefined)
      {
        var temp = Session.get("FilterArray");
        delete temp["brandName"];
        Session.set("FilterArray", temp);
      }
    }
    else
    {
      // console.log('Session.get("FilterArray")',Session.get("FilterArray"));
      if(Session.get("FilterArray") == null)
      {
        var temp = {};
        temp["brandName"] = val;
        Session.set("FilterArray", temp);
      }
      else
      {
        var temp = Session.get("FilterArray");
        temp["brandName"] = val;
        Session.set("FilterArray", temp);
      }
    }
  },
  'click #productCatModal_reset_product': function (e) {
    e.preventDefault();
    $("#productCatModal").modal("hide");
    Session.set("listingPage",10);
    Session.set('category', undefined);
    Session.set("productsArray", undefined);
    $(window).scrollTop(0);
    Session.set("listingPage",10);
  },
  'click #resetFilter': function (e) {
    e.preventDefault();
    $("#type").html('<option selected="selected" value="">Product Type</option>');
    $("#brand").html('<option selected="selected" value="">Brand Type</option>');

    $("#productCatModal").modal("hide");
    Session.set("listingPage",10);
    // Session.set('category', undefined);
    // Session.set("productsArray", undefined);
    // Session.set('type', undefined);
    // Session.set("unFliter", undefined);
    Session.set("FilterArray",undefined);
    $(window).scrollTop(0);
    Session.set("listingPage",10);
  },
  


  'click #favProduct': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");
    if(Session.get("storeId") == undefined || typeof Session.get("storeId") == "undefined")
    {
      var storeId = products.findOne({_id: productId});
      if(storeId !== null)
      {
        storeId = storeId.storeName;
        // Session.set("storeId", storeId);
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
    // if(presentRecord)
    //   {
    //     if(presentfalse)
    //     {
    //       Meteor.call("updateSameFavProduct", presentfalse, $(e.target).data("id"), Meteor.userId(), function(err, res){
    //         if(err){
    //           alert(err.reason);
    //         }
    //         else{
    //           if(res){
    //             $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
    //             // $('#favProduct [data-id="'+productId+'"]').attr('src', "/images/redHeart.png");
    //             alert("Product added to Favorite!");
    //           }
    //         }
    //       })
    //     }
    //     else
    //     {
    //       Meteor.call("updateFavProduct", presentRecord, $(e.target).data("id"), Meteor.userId(), function(err, res){
    //         if(err){
    //           alert(err.reason);
    //         }
    //         else{
    //           if(res){
    //             $('[data-id="'+productId+'"]').attr('src', '/images/favorites-heart.png');
    //             alert("Product removed from Favorite!");
    //           }
    //         }
    //       })
    //     }
        
    //   }
    // else
    //   {
    //     Meteor.call("insertFavProduct", $(e.target).data("id"), Meteor.userId(), function(err, res){
    //       if(err){
    //         alert(err.reason);
    //       }
    //       else{
    //         if(res){
    //           $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
    //           alert("Product added as Favorite sucessfully!");
    //         }
    //       }
    //     })
    //   }
  },

  'click #addCart':function(e){
    e.preventDefault();
    var a = products.findOne({_id: $(e.target).data("attr")});
    if(Session.get("storeId") == undefined)
    {
      if(a != null)
      {
        if(typeof a.storeName !== "undefined")
        {
          var storeId = a.storeName;
          Session.set("storeId",  a.storeName);
        }
      }
    }
    else
    {
      var storeId = Session.get("storeId");
    }
    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({productId: productId, userId: userId});;
    if(typeof presentProduct !== "undefined")
    {
      if(presentProduct !== null)
      {
        Meteor.call("updateCart", presentProduct, productId, userId, function(err, res){
            if(err){
              alert(err.reason);
            }
            else{
              // alert("Product Updated Sucessfully!");
              Session.set("storeId",  a.storeName);
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
              // alert("You cannot select product from another store..!")
              Toast.info("You cannot select product from another store..!");
            }
            else
            {
              // alert("Product Added to Cart Sucessfully!");
              // Toast.success("Product Added to Cart Sucessfully!");
            }
          }
        });
      }
    }
    else
      {
        Meteor.call("createCart", productId, userId, storeId, function(err, res){
          if(err){
            alert(err.reason);
          }
          else{
            if(res == "false"){
              // alert("You cannot select product from another store..!")
              Toast.info("You cannot select product from another store..!");
            }
            else
            {
              // alert("Product Added to Cart Sucessfully!");
              // Toast.success("Product Added to Cart Sucessfully!");
            }
          }
        });
      }
  },
  'click #showFilter': function(evt) {

    if($(".new-filter").hasClass("showFilterDiv"))
    {
      if($(window).width() < 768)
       $('.onlyBody').animate({ 
            "bottom": "-285px"
        }, 500);
        $('.onlyTitle').animate({ 
            "bottom": "51px"
        }, 500);
       $(".new-filter").removeClass("showFilterDiv");
       $(".new-filter").addClass("hideFilterDiv");
    }
    else
    {
      $('.new-filter').animate({ 
            "bottom": "0px"
        }, 500);
      $('.onlyBody').animate({ 
            "bottom": "51px"
        }, 500);
        $('.onlyTitle').animate({ 
            "bottom": "-285px"
        }, 500);
       $(".new-filter").removeClass("hideFilterDiv");
       $(".new-filter").addClass("showFilterDiv");
    }
  },
});
function getMax(){
  var currentPageListing = Session.get("listingPage");
  var storeAvbl = Session.get("storeId");
  if(typeof storeAvbl != "undefined"){
    var a = products.find({storeName:storeAvbl},{limit:currentPageListing}).fetch();
    var maximumPrice = 0;
    for(var i = 0;i<a.length;i++){
      if(maximumPrice < (a[i].price))
      {
        maximumPrice = (a[i].price);
      }
    } 
     Session.set("maxPrice",maximumPrice);

     $( "#sliderRange" ).slider({
        range: true,
        min: 0,
        max:  maximumPrice
      })
    return maximumPrice;   
  }
  else
  {
    var a = products.find({},{limit:currentPageListing}).fetch();
    var maximumPrice = 0;
    for(var i = 0;i<a.length;i++){
      if(maximumPrice < (a[i].price))
      {
        maximumPrice = (a[i].price);
        // console.log("maximumPrice",maximumPrice);
      }
    } 
     Session.set("maxPrice",maximumPrice);

     $( "#sliderRange" ).slider({
        range: true,
        min: 0,
        max:  maximumPrice
      })
    return maximumPrice; 
  }
}