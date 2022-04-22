Template.orderHistory.onCreated(function() {
	Meteor.subscribe('getOrders');
});
Template.orderHistory.onRendered(function() {
	$("body").css("overflow","auto");
	
	var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  // $('.common-form').css('height', c);								
});
Template.orderHistory.helpers({
	getAllOrders: function(){
		if(typeof Meteor.user() !== "undefined")
		{
			//console.log("test");
			var u = Meteor.user()._id;
			var ordersList = orders.find({userId:u}, {sort: {createdAt: -1}}).fetch();
			//console.log("ordersList",ordersList);
			var productsQueue = [];
			for(var i = 0; i < ordersList.length; i++)
			{
				if(typeof ordersList[i].productIds !== "undefined")
				{
					//console.log("testtest");
					var a = ordersList[i].productIds;
					//console.log(a);
					for(var j = 0; j < a.length; j++)
					{
						productsQueue.push(a[j].id);
					}
				}
			}
			//console.log("productsQueue",productsQueue);
			Meteor.subscribe("getSpecificProducts", productsQueue, function(){
			//console.log("trest", products.find().fetch());
			});
			return ordersList;
		}
	
	},
	
	hasProductImage: function(order){
    // console.log("productId",productId);
    // var order = orders.findOne({_id: order._id});
    // console.log("ooorder", order);
    var prodId = orders.findOne({_id: order._id});
    var products1Id = prodId.productIds[0]
    //console.log("ooorder_prodId", prodId);
    var id = products1Id.id;
    //console.log("products idsssssssss",id);
    var productDetail = products.findOne({_id: id});
    //console.log("productDetail",productDetail);
      // productDetail = products.findOne({_id: productId});
      if(productDetail !== undefined){
      	var imgs = productDetail.productImage; 
      	//console.log("productDetail.productImage",imgs);
      	if(typeof imgs !== "undefined")
      	{
      		if(imgs != "")
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
      else{
      	return false;
      }   
  	},
	productImage: function(order){
		var prodId = orders.findOne({_id: order._id});
		if(prodId != null)
		{
			prodId = orders.findOne({_id: order._id}).productIds[0];
			var product = products.findOne({_id: prodId.id});
			if(product != null)
			{
				if(typeof product.productImage !== "undefined")
				{
					if(product.productImage != "")
					{
					  var image = product.productImage;
					}
					else
					{
					  var image = "https://res.cloudinary.com/liqour/image/upload/h_150/v1541056478/eia5zhxxm6dxks2pyoy0.png";
					}
				}
				else
				{
				  var image = "https://res.cloudinary.com/liqour/image/upload/h_150/v1541056478/eia5zhxxm6dxks2pyoy0.png";
				}
			}
			else
			{
			var image = "https://res.cloudinary.com/liqour/image/upload/h_150/v1541056478/eia5zhxxm6dxks2pyoy0.png";
			}
	    }
	    else
	    {
	      var image = "https://res.cloudinary.com/liqour/image/upload/h_150/v1541056478/eia5zhxxm6dxks2pyoy0.png";
	    }
	    //var imageUrl = image.split("upload")
	    //imageUrl = imageUrl[0] + "upload/w_38,h_144" + imageUrl[1]
	    imageUrl = image;
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
	productName: function(order){
		var prodId = orders.find({_id: order._id});
		if(prodId.count() > 0)
		{
			prodId = orders.findOne({_id: order._id});
			prodId = prodId.productIds[0];
			var p = products.findOne({_id: prodId.id});
			if(p != null)
			try{ return p.productName } catch(e) {};
		}
	},
	productPrice: function(order){
		var prodId = orders.find({_id: order._id});
		if(prodId.count() > 0)
		{
			prodId = orders.findOne({_id: order._id});
			prodId = prodId.productIds[0];
			try{ return products.findOne({_id: prodId.id}).price } catch(e) {};
		}
	},
	productQuanty: function(order){
		//console.log("order",order);
		var prodId = orders.findOne({_id: order._id});
		//console.log("prodId",prodId);
		if(prodId.length > 0)
		{
			prodId = orders.findOne({_id: order._id});
			prodId = prodId.productIds[0];
			try{
			 var productQuantity = products.findOne({_id: prodId.id}).quantity;
			 return bottleSizes.findOne({_id: productQuantity}).sizeValue;
			} 
			catch(e) {};
		}
	},
	orderDate: function(orderdate){
		if (orderdate) {
			var f = "MMMM DD, YYYY";
      return moment(orderdate).format(f);
    }
	},
	orderProductCount: function(orderId){
		var orderProducts = orders.findOne({_id: orderId});
		if(orderProducts !== null)
		{
			var orderP = orderProducts.productIds;
			return orderP.length;
		}
		else
		{
			return 0;
		}
		/*
		var productCount = 0
		$.each(orderProducts, function(index, value) {
     	var prodQuan = carts.findOne({productId: value}).productQuantity
      prodQuan = parseFloat(prodQuan, 10);
      productCount = productCount + prodQuan; 
    });
    return productCount;*/
	},
	setOrderNumber: function(order){
		function pad(n, width, z) {
		  z = z || '0';
		  n = n + '';
		  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		}
		
		var barcodeValue = orders.findOne({_id: order._id}).barcodeOrderValue
		return pad(barcodeValue,5);
	}

});
Template.orderHistory.events({
	// 'click .goToOrderDetails': function (e) {
 //    e.preventDefault();
 //    var orderId = $(e.target).data("prodId");
 //    console.log("orderId",orderId);
 //    Router.go("/receiptPage/"+orderId);
 //  },
  'click #viewCart': function(e){
  	e.preventDefault();
  	Router.go("/cart");
  },
});
