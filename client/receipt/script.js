Template.receiptPage.onCreated(function() {
	// Meteor.subscribe('getProducts');
	Meteor.subscribe('getCarts');
	Meteor.subscribe('getOrders');
	Meteor.subscribe('getBottleSizes');
});
Template.receiptPage.onRendered(function() {
  $("body").css("overflow","auto");
  
	setTimeout(function(){
		
		// JsBarcode("#barcode", "Hi!");
		var barcodeValue = orders.findOne({_id: Router.current().params._id}).barcodeOrderValue
		var barcodeValue = pad(barcodeValue,8)
		JsBarcode("#orderBarcodeImage", barcodeValue);
	},2000)
});
Template.receiptPage.helpers({
	altProdId: function(productId){
		// console.log("productId",productId.id);
		
		return productId.id;
	},
	CurrentOrderId: function(){
		// console.log("Router.current().params._id",Router.current().params._id);
		// var orderDetail = orders.findOne({_id: Router.current().params._id});
		// var productids = orderDetail.productIds;
		// for(var  i = 0; i<= a.length; i++){
		// 	if(productId.id == a[i].id){
		// 		if(productId.alternateProdId != undefined){
		// 			var pro = products.findOne({_id: productId.alternateProdId});
		// 			if(pro != null)
		// 			{
		// 				return pro.price;
		// 			}
		// 		}
		// 	}
		// } 
		
		return Router.current().params._id;
	},
	altProName: function(productId) {
		//console.log("alternate productId", productId);
		var a = orders.findOne({_id: Router.current().params._id}).productIds;		
		for(var  i = 0; i< a.length; i++){
		 if(productId.id == a[i].id){	 	
		 	if(productId.alternateProdId != undefined)
		 	{
		 		var pro =products.findOne({_id: productId.alternateProdId});
		 		if(pro != null)
		 		{
		 			return pro.productName;
		 		}
		 	}
		 }
		}
	},
	altProPrice: function(productId) {
		// console.log("productId alternateProductPrice",productId.id);
		// console.log("alternate productId", productId);
		var a = orders.findOne({_id: Router.current().params._id}).productIds;		
		for(var  i = 0; i< a.length; i++){
		 if(productId.id == a[i].id){	 	
		 	if(productId.alternateProdId != undefined)
		 	{
		 		var pro =products.findOne({_id: productId.alternateProdId});
		 		if(pro != null)
		 		{
		 			return pro.price;
		 		}
		 	}
		 }
		}		
	},
	altOrderProductCount: function(productId) {
		var p = orders.findOne({_id: Router.current().params._id});
		if(p != null)
		{
			var a = p.productIds;
			for(var  i = 0; i< a.length; i++){
				if(productId.id == a[i].id){
					if(productId.alternateProdId != undefined){
						return  a[i].alternateProdQuantity;
					}
				}
			}
		}
	}, 
	altProImage: function(productId) {
		var p = orders.findOne({_id: Router.current().params._id});
		if(p != null)
		{
			var a = p.productIds;		
			for(var  i = 0; i< a.length; i++){
				if(productId.id == a[i].id){
					if(productId.alternateProdId != undefined){
						var prod = products.findOne({_id: a[i].alternateProdId});
						if(typeof prod !== "undefined"){
							var image = prod.productImage;
							//console.log("product image --", image);
							if(image != null){
								image = image.replace("http://","https://");
								var ext = image.substr(image.lastIndexOf(".")+1);
								if(ext == "webp")
								{
								  ext = "png";
								  image = image.substr(0,image.lastIndexOf("."));
								  image += "." + ext;
								}
								return image;
							}
							else{
								return "/images/noimage.png";
							}
						}					
					}
				}
			}
		}
	},
	altProWithTotal: function(){
		//console.log("prodddddd")
		var altProTotal = 0;
		var order = orders.findOne({_id: Router.current().params._id});
    var productids = order.productIds;
    //console.log("productidsproductids", productids);
    for(var i=0; i < productids.length; i++)
  	{
  		if(productids[i].alternateProd)
  		{
  			var altProPrice = products.findOne({productName: productids[i].alternateProd}).price;
  			var altProQuanty = productids[i].alternateProdQuantity;
  			var tax = products.findOne({productName: productids[i].alternateProd}).productTax;
  			var prodWithTax = (parseFloat(altProPrice)*parseFloat(tax)/100)*parseInt(altProQuanty);
  			altProTotal += (Number(altProPrice)*altProQuanty)+prodWithTax;
  		}
  		else{
  			var ProPrice = products.findOne({_id: productids[i].id}).price;
  			var proQuanty = productids[i].quantity;
  			var tax = products.findOne({_id: productids[i].id}).productTax;
  			var prodWithTax = (parseFloat(ProPrice)*parseFloat(tax)/100)*parseInt(proQuanty);
  			altProTotal += (Number(ProPrice)*proQuanty)+prodWithTax;
  		}
 		}
 		return parseFloat(altProTotal).toFixed(2);
	},
	withoutAltProWithTotal: function(){
		//console.log("proooooood")
		var altProTotal = 0;
		var order = orders.findOne({_id: Router.current().params._id});
    var productids = order.productIds;
    for(var i=0; i < productids.length; i++)
  	{
  		if(productids[i].alternateProd != undefined)
  		{
  			// var altProPrice = products.findOne({_id: productids[i].alternateProd}).price;
  			// altProTotal +=Number(altProPrice);
  		}
  		else{
  			var ProPrice = products.findOne({_id: productids[i].id}).price;
  			var proQuanty = productids[i].quantity;
  			var tax = products.findOne({_id: productids[i].id}).productTax;
  			var prodWithTax = (parseFloat(ProPrice)*parseFloat(tax)/100)*parseInt(proQuanty);
  			altProTotal += (Number(ProPrice)*proQuanty)+prodWithTax;
  		}
 		}
 		return parseFloat(altProTotal).toFixed(2);
	},
	getOrderNumber: function(n) {
		var barcodeValue = n;
		var barcodeValue = pad(barcodeValue,8)
		return barcodeValue;
	},
	productDetails: function(){
		var totalProductIds = [];
		var totalProductIds1 = orders.findOne({_id: Router.current().params._id});
		if(typeof totalProductIds1 !== "undefined")
		{
			//console.log("totalProductIds1",totalProductIds1.productIds);
			totalProductIds = totalProductIds1.productIds;
			//console.log("totalProductIds totalProductIds",totalProductIds);
			var productIdsArr = [];
			if(totalProductIds !== null){
				for(var i = 0; i< totalProductIds.length; i++){
					// console.log("totalProductIds[i].id",totalProductIds[i].id);
					if(typeof totalProductIds !== "undefined"){
						productIdsArr.push(totalProductIds[i].id);
						//console.log("aaaaaa",totalProductIds[i]);
						if(totalProductIds[i].alternateProdId !== null && totalProductIds[i].alternateProdId !== undefined){
							productIdsArr.push(totalProductIds[i].alternateProdId);
							//console.log("totalProductIds[i].alternateProdId",totalProductIds[i].alternateProdId);
						}
					}
									
				}
			}
			//console.log("productIdsArr",productIdsArr);
			Meteor.subscribe('getSpecificProducts',productIdsArr);
			return orders.findOne({_id: Router.current().params._id}).productIds;
		}
		
	},
	// alternateProdDetails: function(){
	// 	var order = orders.findOne({_id: Router.current().params._id});
	// 	if(order != null)
	// 	{
	// 		return order.alternateProducts;
	// 	}
	// },
	alternateProdDetails1: function(){
		var a = orders.findOne({_id: Router.current().params._id});
		if(typeof a !== "undefined"){
			console.log("fdsfsdfds");
			var b = a.productIds;
			for(var  i = 0; i < b.length; i++){
				var alterProduct = b[i];
				console.log("alterProduct", alterProduct);
				if(typeof alterProduct.alternateProd !== "undefined"){
					return true
				}		 
			}
		}
		
	},
	orderDetail: function(){
		var order = orders.findOne({_id: Router.current().params._id});
		return order;
	},
	productName: function(productId){
		var proName = products.findOne({_id: productId.id}); 
		if(typeof proName !== "undefined"){
			return proName.productName;	
		}		
	},
	productPrice: function(productId){
		var proPrice = products.findOne({_id: productId.id});
		if(typeof proPrice !== "undefined"){
			return proPrice.price;	
		} 	
	},
	productQuanty: function(productId){
		var productQuantity = products.findOne({_id: productId.id});
		if(typeof productQuantity !== "undefined"){
			var quantity = productQuantity.quantity;
			if(quantity !== null)
			{
				var a= bottleSizes.findOne({_id:quantity});
				if(a !==null)
				{
					return a.sizeValue;
				}
			}
		}		
	},
	// alternateProducts
	alternateProductName: function(productName){
		return products.findOne({productName: productName}).productName;
	},
	alternateProductPrice: function(productName){
		return products.findOne({productName: productName}).price;
	},
	alternateProductQuanty: function(productName){
		var productQuantity = products.findOne({productName: productName}).quantity;
		return bottleSizes.findOne({_id:productQuantity}).sizeValue;
	},
	orderDate: function(){
		var orderdate = orders.findOne({_id: Router.current().params._id}).createdAt;
		if (orderdate) {
			var f = "MMMM DD, YYYY HH:MM";
      return moment(orderdate).format(f);
    }
	},
	orderProductCount: function(productId){
		var order = orders.findOne({_id: Router.current().params._id});
		for(var i=0; i < order.productIds.length; i++)
		{
			if(order.productIds[i].id == productId.id)
			{
				return order.productIds[i].quantity;
			}
		}
	},
	ProdCountIsZero: function(productId)
	{
		var order = orders.findOne({_id: Router.current().params._id});
		for(var i=0; i < order.productIds.length; i++)
		{
			if(order.productIds[i].id == productId.id)
			{
				if(order.productIds[i].outOfStock == true)
				{
					return true
				}
			}
		}
	},
	productImage: function(productId){
		var img = products.findOne({_id: productId.id})
		//console.log("img=====", img);
		if(typeof img !== "undefined")
		{
			//console.log("shakti");
			if( typeof img.productImage  !== "undefined"){

				var imageUrl = img.productImage;
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
			else
		    {
		      return "/images/noimage.png";
		    }
			
		}
		else
	    {
	    	//console.log("shakti1");
	      return "/images/noimage.png";
	    }
	},
	alternateProductImage: function(productName)
	{
		var data = products.find({productName: productName});
		if(data.count() > 0)
		{
			data = products.findOne({productName: productName});
			if(typeof data.productImage !== "undefined")
			{
				var imageUrl = data.productImage;
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
			else
		    {
		      return "/images/noimage.png";
		    }
		}
		else
	    {
	      return "/images/noimage.png";
	    }
	},
	totalOrderAmount: function(){
	    var totalOrder = orders.findOne({_id: Router.current().params._id});
	    if(typeof totalOrder !== "undefined"){
	    	return parseFloat(totalOrder.total).toFixed(2);	
	    }
    },
    productTaxTotal: function(){
	    var totalOrder = orders.findOne({_id: Router.current().params._id});
	    if(typeof totalOrder !== "undefined"){
	    	return parseFloat(totalOrder.tax).toFixed(2);	
	    }
    },
    sinProductTaxTotal: function(){
	    var totalOrder = orders.findOne({_id: Router.current().params._id});
	    if(typeof totalOrder !== "undefined"){
    		return parseFloat(totalOrder.sintax).toFixed(2);
    	}	
	},
  prodDetail: function(productId){
  	// console.log("productId",productId);
  	var id = productId.id;
  	var productsDetails = products.findOne({_id: id}); 
  	if(typeof productsDetails !== "undefined"){
  		var content = productsDetails.details;
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
  		// return productsDetails.details;	
  	}  	
  },
  alternateProdDetail: function(productName){
  	return products.findOne({productName: productName}).details;
  },
  orderDiscount: function(){
  	var discount = orders.findOne({_id: Router.current().params._id});
  	if(typeof discount !== "undefined"){
		return discount.discount;
  	}
  },
  totalGrossAmount: function(){
  	var order = orders.findOne({_id: Router.current().params._id});
  	if(order != null)
  	{
  		return parseFloat(order.grossTotal).toFixed(2);
  	}
  },
  isPaymentPending: function() {
  	var a = orders.findOne({_id: Router.current().params._id});
  	if(a !== null)
  	{
  		if(a.paymentStatus == "pending")
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
  },
  paymentStatus: function(){
  	var a = orders.findOne({_id: Router.current().params._id});
  	if(a != null)
  	{
  		return a.paymentStatus;
  	}
  },
  StoreName: function(){
  	var a = orders.findOne({_id: Router.current().params._id});
  	if(a != null)
  	{
  		var store = stores.findOne({_id: a.storeId});
  		if(typeof store !== "undefined"){
  			return store.storeName;
  		}
  		
  	}
  },
  OutOfStockNotification: function()
  {
  	// var retrievedData = localStorage.getItem("productsOutOfStock");
   //  var productsids = JSON.parse(retrievedData);
    var order = orders.findOne({_id: Router.current().params._id});
    var productids = order.productIds;
    for(var i=0; i < productids.length; i++)
  	{
  		if(productids[i].outOfStock == true)
  		{
  			return true;
  		}
 		}
  },
  orderStatus: function(){
  	var order = orders.findOne({_id: Router.current().params._id});
  	if(order)
  	{
  		return order.status;
  	}
  },
  notConfirmedOrCancelledOrder: function(){
  	var order = orders.findOne({_id: Router.current().params._id});
  	if(order)
  	{
	  	var orderConfirmedOrConfirm = order.isOrderConfrmdOrCanclled; 
	  	if(orderConfirmedOrConfirm)
	  	{
	  		return false;
	  	}
	  	else
	  	{
	  		return true;
	  	}
  	}
  },
  notifiedToCust: function(){
  	var order = orders.findOne({_id: Router.current().params._id});
  	if(order.notifiedCustomer == true)
  	{
  		return true;
  	}
  }
});
Template.receiptPage.events({
	'click #confirmOrderWith_OutOfStck': function(e)
	{
		e.preventDefault();
    	var order = orders.findOne({_id: Router.current().params._id});
    	var storeid = order.storeId;
    	var storeAdmin = stores.find({_id: storeid});
    	if(storeAdmin.count() > 0)
    	{
    		storeAdmin = storeAdmin.fetch()[0];
    		var storeAdminEmailAddress = storeAdmin.emailAddress;
    	}
    	var userId = order.userId;
    	var userDetails = Meteor.users.find({_id: userId});
    	if(userDetails.count() > 0)
    	{
    		userDetails = userDetails.fetch()[0];
    		userName = userDetails.profile.firstName;
    		var userMailId = userDetails.username;
    	}
    	var altProTotal = 0;
 		var altProTotalTax =0; 		
		var order = orders.findOne({_id: Router.current().params._id});
    	var productids = order.productIds;
    	var newTotal = 0;
    	var newTaxTotal = 0;
    	var newSinTaxTotal = 0;
    	var newGrossTotal = 0;
    	var oldTotal = 0;
    	var oldTaxTotal = 0;
    	var oldSinTaxTotal = 0;
    	var oldGrossTotal = 0;
    	for(var i = 0; i < productids.length; i++)
    	{
    		var rec = productids[i];
    		if(typeof rec.alternateProdId !== "undefined")
    		{
    			var prodId = rec.alternateProdId;
    			var oldprodId = rec.id;
    		}
    		else
    		{
    			var prodId = rec.id;
    			var oldprodId = rec.id;
    		}
    		var productDetails = products.find({
    			"_id": prodId
    		});
    		if(productDetails.count() > 0)
    		{
    			productDetails = productDetails.fetch()[0];
    			var productQuantity = parseInt(rec.quantity);
    			var productPrice = parseFloat(productDetails.price) * productQuantity;
    			var productTax = parseFloat((parseFloat(productDetails.price)*parseFloat(productDetails.productTax))/100) * productQuantity;
    			var productSinTax = parseFloat(productDetails.sinProductTax) * productQuantity;
    			newTotal += productPrice;
    			newTaxTotal += productTax;
    			newSinTaxTotal += productSinTax;
    			newGrossTotal += (productPrice + productTax + productSinTax);
    			var oldproductDetails = products.find({
	    			"_id": oldprodId
	    		});
	    		if(oldproductDetails.count() > 0)
	    		{
	    			oldproductDetails = oldproductDetails.fetch()[0];
	    			productPrice = parseFloat(oldproductDetails.price) * productQuantity;
	    			productTax = parseFloat((parseFloat(oldproductDetails.price)*parseFloat(oldproductDetails.productTax))/100) * productQuantity;
	    			productSinTax = parseFloat(oldproductDetails.sinProductTax) * productQuantity;
	    			oldTotal += productPrice;
	    			oldTaxTotal += productTax;
	    			oldSinTaxTotal += productSinTax;
	    			oldGrossTotal += (productPrice + productTax + productSinTax);
	    		}
    		}
    	}
    	console.log("newTotal", newTotal);
 		console.log("newTaxTotal", newTaxTotal);
 		console.log("newSinTaxTotal", newSinTaxTotal);
 		console.log("newGrossTotal", newGrossTotal);
 		console.log("oldTotal", oldTotal);
 		console.log("oldTaxTotal", oldTaxTotal);
 		console.log("oldSinTaxTotal", oldSinTaxTotal);
 		console.log("oldGrossTotal", oldGrossTotal);
 		if(newGrossTotal > oldGrossTotal)
 		{
 			var overdueAmount = newGrossTotal - oldGrossTotal;
 			var refundAmount = 0;
 			console.log("Overdue Amount: ", (newGrossTotal - oldGrossTotal));
 			if(order.paymentMethod == "Cash on delivery")
			{
				var overdueAmount = 0;
			}
 		}
 		else
 		{
 			var overdueAmount = 0;
 			var refundAmount = oldGrossTotal - newGrossTotal;
 			if(order.paymentMethod == "Cash on delivery")
			{
				var refundAmount = 0;
			}
 		}
    	Meteor.call("updateOrderOnRefund", order, newGrossTotal, newTotal, newTaxTotal, newSinTaxTotal, overdueAmount, refundAmount, function(err,res){
 			if(err)
			{
				console.log(err);
			}
			else
			{
				if(order.paymentMethod != "Cash on delivery")
				{
			    	var pdata = payments.find({requestId: order._id}).fetch();
			    	if(pdata.length > 0)
					{
						var fullres = JSON.parse(pdata[0].fullResponse);
						if(refundAmount > 0)
						{
							Meteor.call("initiateRefund", productRefundAmount, fullres, userId, function(errrr,resss){
								if(errrr)
								{
									console.log(errrr);
								}
								else
								{
									alert("Your refund for out of stock product is initiated..!!")
								}
							});
						}
						else
						{
							alert("Your order is confirmed..!!");
						}
					}
					else
					{
						alert("Your order is confirmed..!!");
					}
				}
				else
				{
					alert("Your order is confirmed..!!");
				}
			}
 		});
    	return;




    for(var i=0; i < productids.length; i++)
  	{
  		if(productids[i].alternateProd != undefined)
  		{
  			var altProPrice = products.findOne({productName: productids[i].alternateProd}).price;
  			var altProTax = products.findOne({productName: productids[i].alternateProd}).productTax;  			
  			if(altProTax == undefined){
  				altProTax =0;
  			}
  			
  			var altProQuanty =productids[i].alternateProdQuantity;
  			var altProPriceWithTax = (parseFloat(altProPrice)*parseFloat(altProQuanty)) + ((parseFloat(altProPrice) * parseFloat(altProTax) / 100)*parseFloat(altProQuanty));
  			var altTax =(parseFloat(altProPrice) * parseFloat(altProTax) / 100)*parseFloat(altProQuanty)	
  			altProTotalTax +=  (parseFloat(altProPrice) * parseFloat(altProTax) / 100)*parseFloat(altProQuanty);
  			altProTotal += Number(altProPriceWithTax);
  		}
  		else
  		{
  			var proPrice = products.findOne({_id: productids[i].id}).price;
  			var proTax = products.findOne({_id: productids[i].id}).productTax;
  			if(proTax == undefined){
  				proTax =0;
  			}
  			
  			// var proQuanty = productids[i].quantity;
  			if(productids[i].isRefunded == true)
  			{
  				if(productids[i].refundedQuantity != undefined)
  				{
  					var proQuanty = productids[i].refundedQuantity - productids[i].quantity;
  				}
  				else
  				{
  					var proQuanty = productids[i].quantity;	
  				}
  			}
  			else
  			{
  				var productQuantity = productids[i].quantity;
  			}
  			var proPriceWithTax = (parseFloat(proPrice)*parseFloat(proQuanty)) + ((parseFloat(proPrice) * parseFloat(proTax) / 100)*parseFloat(proQuanty)); 
  			altProTotalTax += ((parseFloat(proPrice) * parseFloat(proTax) / 100)*parseFloat(proQuanty));
  			altProTotal +=Number(proPriceWithTax);
  		}
 		}
    var orderGrossTotal = order.grossTotal;
    var productRefundAmount = 0;
    var alternateproductRefundAmount = 0;
    var productids = order.productIds;
    for(var i=0; i < productids.length; i++)
  	{
  		if(productids[i].outOfStock == true)
  		{
  			product = products.findOne({_id: productids[i].id});
  			if(productids[i].isRefunded == true)
  			{
  				if(productids[i].refundedQuantity != undefined)
  				{
  					var productQuantity = productids[i].refundedQuantity - productids[i].quantity;
  				}
  				else
  				{
  					var productQuantity = productids[i].quantity;	
  				}
  			}
  			else
  			{
  				var productQuantity = productids[i].quantity;
  			}
  			// var productQuantity = 1;
  			var alterprodRecord = products.findOne({productName: productids[i].alternateProd});
  			var alterProdTotal = parseFloat(alterprodRecord.price) + (parseFloat(alterprodRecord.price) * parseFloat(alterprodRecord.productTax) / 100)
  			var alterprodQuantity = Number(productids[i].alternateProdQuantity);	
  			
  			var alterProdTotall = alterProdTotal * alterprodQuantity;
  			alternateproductRefundAmount = alternateproductRefundAmount + alterProdTotall;
  			// productQuantity = cartProduct.productQuantity;
  			// productPrice = product.price;
  			var tax = (parseFloat(product.price) * parseFloat(product.productTax) / 100)*productQuantity;
  			productRefundAmount = productRefundAmount + (parseFloat(product.price)*parseInt(productQuantity))+ parseFloat(tax);
  			orderGrossTotal = orderGrossTotal - productRefundAmount;
  			// if(orderGrossTotal > altProTotal){
  			// 	orderGrossTotal = orderGrossTotal - altProTotal;
  			// }
  			orderGrossTotal = parseFloat(orderGrossTotal);
  		}
 		}
 		if(productRefundAmount > alternateproductRefundAmount)
 		{
 			refundAmountWithAlterNateProd = productRefundAmount - alternateproductRefundAmount;
 			orderGrossTotal = orderGrossTotal + refundAmountWithAlterNateProd;
 			Meteor.call("updateOrderOnRefund", order, orderGrossTotal, function(err,res){
 				if(err)
 				{
 					console.log(err);
 				}
 				else
 				{
 					if(order.paymentMethod != "Cash on delivery")
 					{
					//refund payment
					var pdata = payments.find({requestId: order._id}).fetch();
					if(pdata.length > 0)
					{
						var fullres = JSON.parse(pdata[0].fullResponse);
						Meteor.call("initiateRefund", refundAmountWithAlterNateProd, fullres, userId, function(errrr,resss){
							if(errrr)
							{
								console.log(errrr);
							}
							else
							{
								alert("Your refund for out of stock product is initiated..!!")
							}
						});
					}
					else
					{
						alert("Your order is confirmed..!!");
					}
				}
				else
				{
					alert("Your order is confirmed..!!");
				}
			}
		}); 
 		}
 		else
 		{
 			if(productRefundAmount < alternateproductRefundAmount)
 			{
 				alert("You need to pay extra for alternate products..!");
 				var dueAmount = alternateproductRefundAmount - productRefundAmount;
 				dueAmount = dueAmount.toFixed(2);
 				Meteor.call("updateOrderWithOFSproducts", order, dueAmount, function(err,res){
		 			if(err)
					{
						console.log("updateOrderWithOFSproducts error",err);
					}
					else
					{
						console.log("updateOrderWithOFSproducts Done",res);
					}
 				});
 			}
 			// alert("You need to pay extra for alternate products..!");
 		}

 		
 		// ==========================================================================================

 	
 		// ===============================================================================================
 		emailTemplate = "<p>Hello Admin, "+ 
                    "<br /><br />Customer <b>"+ userMailId +"</b> has confirmed the order#<b>" + order.orderNumber + "</b>.<br /><br />Place the order</p>";
    Meteor.call('sendEmail', storeAdminEmailAddress, "appbuilding24@gmail.com", "Order is Confirmed by: "+userMailId, emailTemplate);
	},
	'click #confirmOrderWithoutOutOfStck': function(e)
	{
		e.preventDefault();
    	var order = orders.findOne({_id: Router.current().params._id});
    	var storeid = order.storeId;
    	var storeAdmin = stores.find({_id: storeid});
    	if(storeAdmin.count() > 0)
    	{
    		storeAdmin = storeAdmin.fetch()[0];
    		var storeAdminEmailAddress = storeAdmin.emailAddress;
    	}
    	var userId = order.userId;
    	var userDetails = Meteor.users.find({_id: userId});
    	if(userDetails.count() > 0)
    	{
    		userDetails = userDetails.fetch()[0];
    		userName = userDetails.profile.firstName;
    		var userMailId = userDetails.username;
    	}
    	emailTemplate = "<p>Hello Admin, " + "<br /><br />Customer <b>" + userMailId +"</b> has confirmed the order#<b>" + order.orderNumber + "</b>.<br /><br />Place the order</p>";
    	//Meteor.call('sendEmail', storeAdminEmailAddress, "appbuilding24@gmail.com", "Order is Confirmed by: "+userMailId, emailTemplate);
    	var orderGrossTotal = order.grossTotal;
    	var productRefundAmount = 0;
    	var productids = order.productIds;
    	var newTotal = 0;
    	var newTaxTotal = 0;
    	var newSinTaxTotal = 0;
    	var newGrossTotal = 0;
    	var oldTotal = 0;
    	var oldTaxTotal = 0;
    	var oldSinTaxTotal = 0;
    	var oldGrossTotal = 0;
	    for(var i=0; i < productids.length; i++)
	  	{
	  		var productRefundAmount = 0;
	  		product = products.findOne({_id: productids[i].id});
	  		if(productids[i].isRefunded == true)
  			{
  				if(productids[i].refundedQuantity != undefined)
  				{
  					var productQuantity = productids[i].refundedQuantity - productids[i].quantity;
  				}
  				else
  				{
  					var productQuantity = productids[i].quantity;	
  				}
  			}
  			else
  			{
  				var productQuantity = productids[i].quantity;
  			}
	  		if(productids[i].outOfStock == false)
	  		{
	  			newTotal += (parseFloat(product.price) * parseFloat(productQuantity));
	  			var taxx = (parseFloat(product.price) * parseFloat(product.productTax) / 100);
	  			if(typeof product.sinProductTax !== "undefined")
	  			{
	  				newSinTaxTotal += (parseFloat(product.sinProductTax) * parseFloat(productQuantity));
	  			}
	  			newTaxTotal += (taxx*parseInt(productQuantity))
	  			prodPriceWithTax = parseFloat(product.price) + (parseFloat(product.price) * parseFloat(product.productTax) / 100) + parseFloat(product.sinProductTax);
	  			productRefundAmount = (prodPriceWithTax*parseInt(productQuantity));
	  			newGrossTotal += productRefundAmount;
	  		}
	  		else
	  		{
	  			oldTotal += (parseFloat(product.price) * parseFloat(productQuantity));
	  			var taxx = (parseFloat(product.price) * parseFloat(product.productTax) / 100);
	  			if(typeof product.sinProductTax !== "undefined")
	  			{
	  				oldSinTaxTotal += (parseFloat(product.sinProductTax) * parseFloat(productQuantity));
	  			}
	  			oldTaxTotal += (taxx*parseInt(productQuantity))
	  			prodPriceWithTax = parseFloat(product.price) + (parseFloat(product.price) * parseFloat(product.productTax) / 100) + parseFloat(product.sinProductTax);
	  			productRefundAmount = (prodPriceWithTax*parseInt(productQuantity));
	  			oldGrossTotal += productRefundAmount;
	  		}
 		}
 		var overdueAmount = 0;
 		var refundAmount = oldGrossTotal;
 		if(order.paymentMethod == "Cash on delivery")
		{
			var refundAmount = 0;
		}
 		console.log("newTotal", newTotal);
 		console.log("newTaxTotal", newTaxTotal);
 		console.log("newSinTaxTotal", newSinTaxTotal);
 		console.log("newGrossTotal", newGrossTotal);

 		console.log("oldTotal", oldTotal);
 		console.log("oldTaxTotal", oldTaxTotal);
 		console.log("oldSinTaxTotal", oldSinTaxTotal);
 		console.log("oldGrossTotal", oldGrossTotal);
 		
 		Meteor.call("updateOrderOnRefund", order, newGrossTotal, newTotal, newTaxTotal, newSinTaxTotal, overdueAmount,  refundAmount, function(err,res){
 			if(err)
			{
				console.log(err);
			}
			else
			{
				if(order.paymentMethod != "Cash on delivery")
				{
					//refund payment
			    	var pdata = payments.find({requestId: order._id}).fetch();
			    	if(pdata.length > 0)
					{
						var fullres = JSON.parse(pdata[0].fullResponse);
						Meteor.call("initiateRefund", productRefundAmount, fullres, userId, function(errrr,resss){
							if(errrr)
							{
								console.log(errrr);
							}
							else
							{
								alert("Your refund for out of stock product is initiated..!!")
							}
						});
					}
					else
					{
						alert("Your order is confirmed..!!");
					}
				}
				else
				{
					alert("Your order is confirmed..!!");
				}
			}
 		});
	},

	'click #cancelOrderWithOutOfStck': function(e)
	{
		e.preventDefault();
		var order = orders.findOne({_id: Router.current().params._id});
		Meteor.call("setCancelledForProdOutOfStockQuery", order, "Order Cancelled", function(err, res){
      if(err){
        alert(err.reason);
      }
      else{
      	// Session.set("orderConfirmedOrConfirmed", "YES");
        // alert("Your Order Is Cancelled..!!");
        // send mail to admin about cancellation of order
        var order = orders.findOne({_id: Router.current().params._id});
        var storeid = order.storeId;
		    var storeAdminEmailAddress = stores.findOne({_id: storeid}).emailAddress;
		    var userId = order.userId;
		    var userName = Meteor.users.findOne({_id: userId}).profile.firstName;
		    var userMailId = Meteor.users.findOne({_id: userId}).username;
		    emailTemplate = "<p>Hello Admin, "+ 
		                    "<br /><br />Customer <b>"+ userMailId +"</b> has cancelled the order#<b>" + order.orderNumber + "</b>.<br /><br />cancel and refund the order</p>";
		    Meteor.call('sendEmail', storeAdminEmailAddress, "appbuilding24@gmail.com", "Order is Cancelled by: "+userMailId, emailTemplate);
		    var orderGrossTotal = parseFloat(order.grossTotal);
		    Meteor.call("updateOrderOnRefund", order, orderGrossTotal, function(err,res){});
		    if(order.paymentMethod != "Cash on delivery")
		    {
			    // refund all amount
			    var pdata = payments.find({requestId: order._id, isRefunded: false}).fetch(); // added condition for refund only once(isrefund:false)
			    if(pdata.length > 0)
					{
						var fullres = JSON.parse(pdata[0].fullResponse);
						Meteor.call("initiateRefund", orderGrossTotal, fullres, userId, function(errrr,resss){
							if(errrr)
							{
								console.log(errrr);
							}
							else
							{
								alert("Your refund for cancelled order is initiated..!!");
							}
						});
					}
					else
					{
						alert("Your order is cancelled successfully..!!");
					}
		    }
		    else
		    {
		    	alert("Your order is cancelled successfully..!!");
		    }
      }
    });
	}
});

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

