var searchArray = new ReactiveVar([]);
var typeList = new ReactiveVar([]);
var self;
Template.searchCategory.onCreated(function(){
	Meteor.subscribe("getCategories");
});
Template.searchCategory.onRendered(function(){});
Template.searchCategory.helpers({
	getCategories: function(){
		var activeCategories = categories.find({isActive:true}).fetch();
		var finalCategoryList = [];
		var tempArray = [];
		if(activeCategories.length > 0)
		{
			for(var i = 0; i < activeCategories.length; i++)
			{
				var rec = activeCategories[i];
				if(tempArray.indexOf(rec.categoryType.toLowerCase()) == -1)
				{
					finalCategoryList.push(rec);
					tempArray.push(rec.categoryType.toLowerCase());
				}
			}
			return finalCategoryList;
		}
	},
	isDevice:function(){
		return Meteor.isCordova;
	},
	getImage: function(url)
	{
		var url = url.split("upload");
		return url[0] + "upload/h_60,w_100,c_pad" + url[1];
	}
});
Template.searchCategory.events({
	'click .clickableCategory': function(e)
	{
		e.preventDefault();
		var elem = $(e.target);
		var catId = elem.attr("data-id");
		Router.go("/search-subcategory/" + catId);
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
});




Template.searchSubCategory.onCreated(function(){
	Meteor.subscribe("getCategories");
});
Template.searchSubCategory.onRendered(function(){
	typeList.set([]);
});
Template.searchSubCategory.helpers({
	getImage: function(url)
	{
		var url = url.split("upload");
		return url[0] + "upload/h_60,w_100,c_pad" + url[1];
	},
	isDevice:function(){
		return Meteor.isCordova;
	},
	getCategoryDetails: function(){
		var selectCategory = Template.instance().data.id;
		return categories.findOne({
			"_id": selectCategory
		});
	},
	getSubCategories: function(){
		var selectCategory = Template.instance().data.id;
	    if(typeof selectCategory !== "undefined")
	    {
	      Meteor.call("productTypesListGet", selectCategory, function(err, res){
	        if(err){
	          console.log(err);
	        }
	        else{
	          //console.log("hjgfhjfhj",res);
	          if(JSON.stringify(typeList.get()) !== JSON.stringify(res))
	          {
	            typeList.set(res);
	          }
	        }
	        
	      }); 
	      console.log("typeList.get()", typeList.get());
	      return typeList.get();
	    }
	},
	isDevice:function(){
		return Meteor.isCordova;
	}
});
Template.searchSubCategory.events({
	'click .clickableCategory': function(e)
	{
		e.preventDefault();
		var elem = $(e.target);
		var catId = Template.instance().data.id;
		var typeId = elem.attr("data-id");
		Router.go("/search-subcategoryproducts/" + catId + "/" + typeId);
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
});




Template.searchSubCategoryProducts.onCreated(function(){
	Meteor.subscribe("getUserFavorites",Meteor.userId());
	Meteor.subscribe('getReviews');
	Meteor.subscribe('getCarts');
	Meteor.subscribe('getStores');
	Meteor.subscribe('getBrands');
	Meteor.subscribe('getBottleSizes');
	Meteor.subscribe('getBottleTypes');
	Meteor.subscribe('getCategories');
	Meteor.subscribe("getProductType", Template.instance().data.id1);
	self = this;
	self.ready = new ReactiveVar();
	self.autorun(function() {
		var storeId = Session.get("storeId");
		if(Session.get("storeId") == undefined)
		{
			var data = {
				"categoryType": Template.instance().data.id,
				"productType": Template.instance().data.id1
			}
		}
		else
		{
			var data = {
				"categoryType": Template.instance().data.id,
				"productType": Template.instance().data.id1,
				"storeName": Session.get("storeId")
			}
		}
		var handle = PostSubs.subscribe('getSearchProducts', data, 10, function(){
			setTimeout(function(){
				$('.items').flyto({
				  item      : 'li',
				  target    : '.cartssa',
				  button    : '.my-btn'
				});
			},1000);
		});
		self.ready.set(handle.ready());
	});
	anim();
});
Template.searchSubCategoryProducts.onRendered(function(){
	PostSubs.clear();
	Session.set("listingPage",10);
	Session.set("currentCategorySearch", Template.instance().data.id);
	var test = Template.instance();
	setTimeout(function(){
		$('.items').flyto({
		  item      : 'li',
		  target    : '.cartssa',
		  button    : '.my-btn'
		});
	},1000);
	/*$(".topPortion").scroll(function() {
	    console.log("testtt");
		if(Router.current().route._path == "/search-subcategoryproducts/:_id/:_id1")
		{
			var scrollVal = parseInt($(".topPortion").scrollTop());
			var scrollVal1 = parseInt($(".topPortion").height());
			var scrollFinal = scrollVal1 - scrollVal;
			console.log("scrollVal", scrollVal);
			console.log("scrollVal1", scrollVal1);
			console.log("scrollFinal", scrollFinal);
			if(scrollFinal < 100) 
			{
				var currentVal  = parseInt(Session.get("listingPage"));
				currentVal  = currentVal + 10;
				Session.set("listingPage",currentVal);
				var storeId = Session.get("storeId");
				if(Session.get("storeId") == undefined)
				{
					var data = {
						"categoryType": test.data.id,
						"productType": test.data.id1
					}
				}
				else
				{
					var data = {
						"categoryType": Template.instance().data.id,
						"productType": Template.instance().data.id1,
						"storeName": Session.get("storeId")
					}
				}
				var handle = PostSubs.subscribe('getSearchProducts', data, 10);
				self.ready.set(handle.ready());
			}
		}
	  });*/
	  var test = Template.instance();
	  $('.topPortion').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        	if(Router.current().route._path == "/search-subcategoryproducts/:_id/:_id1")
			{
				$(".searchLoder").show();
				$('.topPortion').css("overflow-y","hidden");
	            var currentVal  = parseInt(Session.get("listingPage"));
				currentVal  = currentVal + 10;
				console.log("currentVal", currentVal);
				Session.set("listingPage",currentVal);
				var storeId = Session.get("storeId");
				var categoryDetails = categories.find({"_id":test.data.id});
				if(categoryDetails.count() > 0)
				{
					categoryDetails = categoryDetails.fetch()[0];
					var categoryTypeName = categoryDetails.categoryType.toLowerCase();
					var allCategoriesWithSameName = categories.find({ 
						"categoryType" : {
			            	$regex : new RegExp(categoryTypeName, "i") 
			            } 
			        }).fetch();
			        var categoryIds = [];
			        for(var j = 0; j < allCategoriesWithSameName.length; j++)
			        {
			        	categoryIds.push(allCategoriesWithSameName[j]._id);
			        }
			        console.log(categoryIds);
			        if(Session.get("storeId") == undefined)
			        {
			        	
				        var data = {
				        	"categoryType": {
				        		$in: categoryIds
				        	},
				        	"productType": test.data.id1
				        }
				        var data1 = {
							"categoryType": test.data.id,
							"productType": test.data.id1
						}
			        }
			        else
			        {
			        	var data = {
				        	"categoryType": {
				        		$in: categoryIds
				        	},
				        	"productType": test.data.id1,
				        	"storeName": Session.get("storeId")
				        }
				        var data1 = {
							"categoryType": test.data.id,
							"productType": test.data.id1,
							"storeName": Session.get("storeId")
						}
			        }
				}
				var handle = PostSubs.subscribe('getSearchProducts', data1, currentVal, function(){
					$(".searchLoder").hide();
					$('.topPortion').css("overflow-y","auto");
					setTimeout(function(){
						$('.items').flyto({
						  item      : 'li',
						  target    : '.cartssa',
						  button    : '.my-btn'
						});
					},1000);
				});
				self.ready.set(handle.ready());
			}
        }
    })
});
Template.searchSubCategoryProducts.helpers({
	getURL: function()
	{
		return Template.instance().data.id + "/" + Template.instance().data.id1;
	},
	getProductTypeDetails: function(){
		return productTypes.findOne({
			"_id": Template.instance().data.id1
		});
	},
	getProducts: function(){
		var storeId = Session.get("storeId");
		var categoryDetails = categories.find({"_id":Template.instance().data.id});
		if(categoryDetails.count() > 0)
		{
			categoryDetails = categoryDetails.fetch()[0];
			var categoryTypeName = categoryDetails.categoryType.toLowerCase();
			var allCategoriesWithSameName = categories.find({ 
				"categoryType" : {
	            	$regex : new RegExp(categoryTypeName, "i") 
	            } 
	        }).fetch();
	        var categoryIds = [];
	        for(var j = 0; j < allCategoriesWithSameName.length; j++)
	        {
	        	categoryIds.push(allCategoriesWithSameName[j]._id);
	        }
	        console.log(categoryIds);
	        if(Session.get("storeId") == undefined)
	        {
	        	
		        var data = {
		        	"categoryType": {
		        		$in: categoryIds
		        	},
		        	"productType": Template.instance().data.id1
		        }
		        var data1 = {
					"categoryType": Template.instance().data.id,
					"productType": Template.instance().data.id1
				}
	        }
	        else
	        {
	        	var data = {
		        	"categoryType": {
		        		$in: categoryIds
		        	},
		        	"productType": Template.instance().data.id1,
		        	"storeName": Session.get("storeId")
		        }
		        var data1 = {
					"categoryType": Template.instance().data.id,
					"productType": Template.instance().data.id1,
					"storeName": Session.get("storeId")
				}
	        }
		}
		var handle = PostSubs.subscribe('getSearchProducts', data1, 10);
		self.ready.set(handle.ready());
		if(Session.get("storeId") == undefined)
		{
			return products.find(data,{limit: Session.get("listingPage")}).fetch();
		}
		else
		{
			return products.find(data,{limit: Session.get("listingPage")}).fetch();
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
  bottleTypeName:function(bottleTypeName) {
    var a = bottleTypes.findOne({_id:bottleTypeName});
    if(a != null){
      return a.BottletypeName;
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
});
Template.searchSubCategoryProducts.events({
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
    });
  },
  'click #barcodeIcon':function(e)
	{
		e.preventDefault()
		var test = Template.instance();
		cordova.plugins.barcodeScanner.scan(function(res){      
			if(res.text != "")
			{
				var s = res.text;
				s = s.replace(/^0+/, '');
				s = Number(s).toString()
	        	Meteor.subscribe("getProductsBySKU", s, function(){
	        		var storeId = Session.get("storeId");
	        		var scannedProductsList = "";
	       			if(storeId !== null){
	          			if(storeId !== undefined){
	              			scannedProductsList = products.find({
	              				$and: [{
	              					$or: [{
	              						"productId": s
	              					},
	              					{"sku": s}
	              					]
	              				},
	              				{"storeName": storeId}
	              				]
	              			});
	          			}
		          		else{
		          			scannedProductsList = products.find({$or: [{"productId": s},{"sku": s}]});
		          		}
	      			}
					else{
						scannedProductsList = products.find({$or: [{"productId": s},{"sku": s}]});
					}
	          		if(scannedProductsList.count() > 0)
	          		{
	            		scannedProductsList = scannedProductsList.fetch();
			            if(JSON.stringify(test.scanVar.get()) !== JSON.stringify(scannedProductsList))
			            {
			            	test.scanVar.set(scannedProductsList);            
			            }
	            		$('#scanedModal').modal('show');
	        		}
	    		});
    		}
		});
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
	}
});

function anim()
{
	console.log("teeeest");
	/*!
 * jQuery lightweight Fly to
 * Author: @ElmahdiMahmoud
 * Licensed under the MIT license
 */

// self-invoking
;(function ($, window, document, undefined) {
    $.fn.flyto = function ( options ) {
        
    // Establish default settings
        
        var settings = $.extend({
            item      : '.flyto-item',
            target    : '.flyto-target',
            button    : '.flyto-btn',
            shake     : true
        }, options);
        
        
        return this.each(function () {
            var 
                $this    = $(this),
                flybtn   = $this.find(settings.button),
                target   = $(settings.target),
                itemList = $this.find(settings.item);
            
        flybtn.on('click', function () {
            var _this = $(this),
                eltoDrag = _this.parent().parent().find("img").eq(0);
        if (eltoDrag) {
            var imgclone = eltoDrag.clone()
                .offset({
                top: eltoDrag.offset().top,
                left: eltoDrag.offset().left
            })
                .css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': eltoDrag.height() /2,
                    'width': eltoDrag.width() /2,
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                    'top': target.offset().top + 10,
                    'left': target.offset().left + 15,
                    'height': eltoDrag.height() /2,
                    'width': eltoDrag.width() /2
            }, 1000, 'easeInOutExpo');
            
            if (settings.shake) {
            	console.log("target", target);
                setTimeout(function () {
                    target.effect("shake", {
                        distance: 21,
                        direction: "left",
                        times: 1
                    }, 200);
                }, 1500);
            }

    		
            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
        });
        });
    }
})(jQuery, window, document);
}