import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	// //console.log("sku Produ", products.findOne({"sku":"8.5917E+11"}));
	
	var twilio = require('twilio');
	var accountSid = 'AC5853c868f6e7a8ace0eb10dd39a748a6'; // Your Account SID from www.twilio.com/console
	var authToken = '974cda7845bb1c3fcf9775cad3032a5a';   // Your Auth Token from www.twilio.com/console
	Cloudinary.config({
		cloud_name: Meteor.settings.public.CLOUDINARY_CLOUD_NAME,
		api_key: Meteor.settings.public.CLOUDINARY_API_KEY,
		api_secret: Meteor.settings.CLOUDINARY_API_SECRET
	});
	ServerSession.set("test","test");

	Push.Configure({
	  /*apn: {
	    certData: Assets.getText('apnDevCert.pem'),
	    keyData: Assets.getText('apnDevKey.pem'),
	    passphrase: 'xxxxxxxxx',
	    production: true,
	    //gateway: 'gateway.push.apple.com',
	},*/
	gcm: {
	    apiKey: 'AAAAHSMT_qU:APA91bEPtgnbdGEYkcEB4USrAkJR5NvhionFXg9NJL4A9jchKjXlTQIJfC_5iD2C-VBZ1NdjWHso0PQGfkXB_P5VASeSdnEfOGGgzfx1WkxIELm31iK5WTuTTvlETmn8d0b4ETD7KXpy',  // GCM/FCM server key
	},
	production: false

	//
});
	Push.debug = true;
  // code to run on server at startup
  ServiceConfiguration.configurations.remove({
  	service: "facebook"
  });

  ServiceConfiguration.configurations.insert({
  	service: "facebook",
  	appId: '599687467477136',
  	secret: '49fc35559ac68c2976338560c66f8044'
  });

  ServiceConfiguration.configurations.remove({
  	service: "google"
  });

  ServiceConfiguration.configurations.insert({
  	service: "google",
    clientId: "125142564517-bhua624utivtvf49qrg670hfa8e8h71n.apps.googleusercontent.com", //chng 3 july
    secret: "lJikNb5idGMR5EiaXEH_OZ5o" //chng 3 july
});
  var paypal = require('paypal-rest-sdk');
  Meteor.Paypal.config({
  	'host': 'api.sandbox.paypal.com',
  	'port': '',
    'client_id': 'AVh6jhsAM5O79sHDuJm3wZTFLMr0P0khGpyzUYmrhQZr3COYG9PmIYd2EhPSPidYEnEaU8E4b4QBO6XL', // chng 03 july
    'client_secret': 'EMObpYnnvo5poLR_tnBu5ECSRsmoBNpd7upnTqAREmRMNQOXAc_t021MesqviT1eE-vNRi4u1pSkBOhy' // chng 03 july
});
  paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'host': 'api.sandbox.paypal.com',
    'port': '',
    'client_id': 'AVh6jhsAM5O79sHDuJm3wZTFLMr0P0khGpyzUYmrhQZr3COYG9PmIYd2EhPSPidYEnEaU8E4b4QBO6XL', // chng 03 july
    'client_secret': 'EMObpYnnvo5poLR_tnBu5ECSRsmoBNpd7upnTqAREmRMNQOXAc_t021MesqviT1eE-vNRi4u1pSkBOhy' //chng 03 july
});

  process.env.MAIL_URL="smtps://mukesh.sachdev%40ifuturz.com:ifuturzjs@smtp.gmail.com:465";
 // //console.log(paypal);
 Accounts.onCreateUser(function(options, user) {
 	if (user.services.facebook) {
 		var email = user.services.facebook.email;
 		var fname = user.services.facebook.first_name;
 		var lname = user.services.facebook.last_name;
 		var emails = [{"address":email,"verified":true}]
 		user.emails = emails;
 		user.username = user.services.facebook.email;
 		user.profile = {};
 		user.profile.firstName = fname;
 		user.profile.lastName = lname;
 		user.profile.isActive = true;
 	}
 	else if (user.services.google) {
 		var email = user.services.google.email;
 		var fname = user.services.google.given_name;
 		var lname = user.services.google.family_name;
 		var emails = [{"address":email,"verified":true}]
 		user.emails = emails;
 		user.username = user.services.google.email;
 		user.profile = {};
 		user.profile.firstName = fname;
 		user.profile.lastName = lname;
 		user.profile.isActive = true;
 	}
 	else
 	{
 		user.profile = {};
 		user.profile = options.profile;
 	}
 	return user;
 });
 Meteor.methods({
 	SignInUsingIOS(data) {
      var jwtDecode = require('jwt-decode');
      if(typeof data.authorization !== "undefined")
      {
      	var token = data.authorization.id_token;
      }
      else
      {
      	var token = data.identityToken;
	  }
	  console.log("token", token);
	  var decoded = jwtDecode(token);
	  console.log("decoded", decoded);
      var checkIfUserExist = Meteor.users.find({
        "profile.iosSub": decoded.sub
	  });
	  console.log("decoded", decoded);
      if (checkIfUserExist.count() == 0) {
        var checkUserByEmail = Meteor.users.find({
          "username": decoded.email
        });
        if (checkUserByEmail.count() > 0) {
          checkUserByEmail = checkUserByEmail.fetch()[0];
          var finalReturn = {
            "userAlreadyFound": 1,
            "userDetails": checkUserByEmail,
            "changePassword": 0,
            "token": Accounts.impSvc.set(checkUserByEmail._id)
          };
          return finalReturn;
        } else {
          if (typeof data.user !== "undefined") {
            var fullName = "";
            var userEmail = "";
            if (typeof data.user.name !== "undefined") {
              if (typeof data.user.name.firstName !== "undefined") {
                fullName += data.user.name.firstName;
              }
              if (typeof data.user.name.lastName !== "undefined") {
                fullName += " " + data.user.name.lastName;
              }
              if (typeof data.user.email !== "undefined") {
                userEmail = data.user.email;
              }
            }
            if (fullName == "") {
              fullName = "No Name";
            }
            if (userEmail == "") {
              fullName = decoded.email;
            }
          } else {
            var fullName = "No Name";
            var userEmail = decoded.email;
          }
          var registerData = {
            profile: {
              fullName: fullName,
              iosSub: decoded.sub
            },
            email: userEmail,
            username: userEmail,
            password: "iospassword",
            roles: ["user"]
          };
          var registerUserResult = Accounts.createUser(registerData);
          if (registerUserResult) {
            var newUser = Meteor.users.find({
              "profile.iosSub": decoded.sub
            });
            if (newUser.count() > 0) {
              newUser = newUser.fetch()[0];
              return {
                "userAlreadyFound": 0,
                "userDetails": newUser,
                "changePassword": 1,
                "token": ""
              }
            }
          }
        }
      } else {
        var a = checkIfUserExist.fetch()[0];
        return {
          "userAlreadyFound": 1,
          "userDetails": a,
          "changePassword": 1,
          "token": ""
        }
      }
    },
 	getTopPicks: function(storeId){
 		if(storeId !== null)
 		{
 			if(storeId !== "")
 			{
 				var productsList = products.find({ 
 					categoryType: { 
 						$ne: "He9WM9S2oLmDkyLao" 
 					},
 					"storeName" : storeId,
 					"productImage":{
 						$exists: true
 					}
 				}).fetch();
 			}
 		}
 		else
 		{
 			var productsList = products.find({ 
 				categoryType: { 
 					$ne: "He9WM9S2oLmDkyLao" 
 				},
 				"productImage":{
 					$exists: true
 				}
 			}).fetch();
 		}
 		var randomProducts = getRandomProducts(productsList, 4);
 		return randomProducts;
 	},
 	getSpritiousLiquors(storeId)
 	{
 		if(storeId !== null)
 		{
 			if(storeId !== "")
 			{
 				var productsList = products.find({ 
 					"categoryType":"He9WM9S2oLmDkyLao",
 					"storeName" : storeId,
 					"productImage":{
 						$exists: true
 					}
 				}).fetch();
 			}
 		}
 		else
 		{
 			var productsList = products.find({ 
 				"categoryType":"He9WM9S2oLmDkyLao",
 				"productImage":{
 					$exists: true
 				}
 			}).fetch();
 		}
 		var randomProducts = getRandomProducts(productsList, 4);
 		return randomProducts;
 	},
 	removeFromCart(id)
 	{
 		carts.remove({_id: id});
 	},
 	registerUser(registerData)
 	{
 		return Accounts.createUser(registerData);
 	},
 	updateProfilePic(userId,url)
 	{
 		var a = Meteor.users.update(userId, {$set: {
 			"profile.profileImage": url
 		}});
 		if(a)
 		{
 			return true;
 		}
 		else
 		{
 			return false;
 		}
 	},
 	sendVerificationEmailToUser(userId)
 	{
 		Accounts.sendVerificationEmail(userId)
 	},
 	sendEmail(email, from, subject, text) 
 	{
 		check([email, from, subject, text], [String]);
 		this.unblock();
 		Email.send({
 			to: email,
 			from: from,
 			subject: subject,
 			html: text
 		});
 	},

 	sendSMS(numbertosend, msg)
 	{
 		var twilio = require('twilio');
 		console.log(numbertosend);
	    	////console.log(msg);
	    	var client = new twilio(accountSid, authToken);
	      // console.log("client 12321",client);
	      client.messages.create({
	      	body: msg,
	          to: numbertosend,  // Text this number
	          from: '+17372018202' // From a valid Twilio number
	      }).then(function(message){
	      	console.log("message.sid",message.sid);
	      	// console.log("message",message);
	      });

	  },
	    //shakti code
	    savetermscondition(id){

	    	var UserData = Meteor.users.findOne({"_id":id});
	    	if(UserData !=null || userData != undefined) {

	    		////console.log("saveterm service method call-->", UserData);
	    		return Meteor.users.update({ _id: id },{ $set: {'profile.termsofservice': true} });
	    	}
	    	else
	    	{
	    		return false;
	    	}

	    },
	    checkUserEmail(emailAddress)
	    {
	    	var UserData = Meteor.users.find({"emails.address":emailAddress}).count();
	    	if(UserData > 0)
	    	{
	    		return true;
	    	}
	    	else
	    	{
	    		return false;
	    	}
	    },
	    
	    updateUser(userId, userData){
	    	// //console.log("userData",userData);
	    	return Meteor.users.update({ _id: userId },{ $set:userData});
	    },
	    
	    insertFavProduct(productId, userId){
	    	return favProducts.insert({ productId: productId, userId: userId, status: true, createdAt: new Date() });
	    },
	    // favorite product
	    updateFavProduct(storeId, userId, action, id){
	    	var data = favProducts.find({userId:userId,productId:id})
	    	if(data.count() > 0)
	    	{
	    		return favProducts.update({userId:userId,productId:id},{$set:{status: action, storeId: storeId}});
	    	}
	    	else
	    	{
	    		return favProducts.insert({productId: id, userId: userId, status: action, storeId: storeId, createdAt: new Date()})
	    	}	
	    },
	    // favorite receipe
	    updateFavReceipe(userId, action, id){
	    	var data = favReceipes.find({userId:userId,receipeId:id})
	    	if(data.count() > 0)
	    	{
	    		return favReceipes.update({userId:userId,receipeId:id},{$set:{status: action}});
	    	}
	    	else
	    	{
	    		return favReceipes.insert({receipeId: id, userId: userId, status: action, createdAt: new Date()})
	    	}	
	    },

	    updateSameFavProduct(favProductId, productId, userId){
	    	return favProducts.update({ _id: favProductId._id}, {$set:{status: true }});
	    },

	    createCart(productId, userId, storeId){
	    	if(carts.find({userId: Meteor.userId()}).fetch().length == 0)
	    	{
	    		////console.log("nil");
	    		return carts.insert({ productId: productId, userId: userId, storeId: storeId, productQuantity: 1, createdAt: new Date() });
		    	//productsAvailability = products.findOne({_id: productId}).productsAvailable;
		    	// products.update({_id: productId}, {$set:{productsAvailable: productsAvailability - 1 }});
		    }
		    else
		    {
		    	if(carts.findOne({userId: Meteor.userId()}).storeId == storeId)
		    	{
	    			////console.log("present products", storeId);
	    			return carts.insert({ productId: productId, userId: userId, storeId: storeId, productQuantity: 1, createdAt: new Date() });
			    	//productsAvailability = products.findOne({_id: productId}).productsAvailable;
			    	// products.update({_id: productId}, {$set:{productsAvailable: productsAvailability - 1 }});
			    }
			    else
			    {
	    			////console.log("false");
	    			return "false";
	    		}
	    	}
	    },

	    updateCart(presentProduct, productId, userId){
	    	quantity = parseInt(presentProduct.productQuantity, 10);
	    	return carts.update({ _id: presentProduct._id}, {$set:{productQuantity: quantity + 1}});
	    	//productsAvailability = products.findOne({_id: productId}).productsAvailable;
	    	// products.update({_id: productId}, {$set:{productsAvailable: productsAvailability - 1 }});
	    },

	    incrementCart(presentProduct, productId, userId){
	    	quantity = parseInt(presentProduct.productQuantity, 10);
	    	//productsAvailability = products.findOne({_id: productId}).productsAvailable;
	    	// products.update({_id: productId}, {$set:{productsAvailable: productsAvailability - 1 }});
	    	/*if(productsAvailability > 0)
	    		{
	    			carts.update({ _id: presentProduct._id}, {$set:{productQuantity: quantity + 1}});
	    		}*/
	    		return carts.update({ _id: presentProduct._id}, {$set:{productQuantity: quantity + 1}});
	    	},

	    	decrementCart(presentProduct, productId, userId){
	    		quantity = parseInt(presentProduct.productQuantity, 10);
	    		var cart = carts.findOne({_id: presentProduct._id})
	    		if(quantity  == 1){
	    			return carts.remove({_id: presentProduct._id});
	    		// productsAvailability = products.findOne({_id: productId}).productsAvailable;
	    		// products.update({_id: productId}, {$set:{productsAvailable: productsAvailability + 1 }});
	    	}
	    	else{
	    		return carts.update({ _id: presentProduct._id}, {$set:{productQuantity: quantity - 1}});
		    	// productsAvailability = products.findOne({_id: productId}).productsAvailable;
	    		// products.update({_id: productId}, {$set:{productsAvailable: productsAvailability + 1 }});
	    	}
	    },
	    cartUpdate(presentProduct, productId, userId, prodQuantity){
	    	if(prodQuantity <= 0){
	    		return carts.remove({_id: presentProduct._id});
	    	}
	    	else{
	    		return carts.update({ _id: presentProduct._id}, {$set:{productQuantity: prodQuantity}});		
	    	}
	    	
	    },

	    updateProfileImage(url, userId){
	    	return Meteor.users.update({ _id: userId },{ $set: {'profile.profileImage': url} });
	    },

	    updateCartTotal(cartTotall, value){
	    	return carts.update({_id: value._id},{ $set: { totalPrice: cartTotall }});
	    },

	    insertIntoOrders(storeId, lastOrder, cartss, cartTotal, userId, orderTax, orderSinTax, orderGrossTotal, orderType){
	    	/*var lastOrd = orders.findOne({}, {sort:{createdAt:-1}});
	    	if(lastOrd){
	    		lastOrd = parseInt(lastOrd.barcodeOrderValue) + 1
	    	}*/
	    	orderTax = orderTax.toFixed(2);
	    	orderSinTax = orderSinTax.toFixed(2);
	    	var lastOrd = lastOrder;
	    	cartTotal = cartTotal.toFixed(2);
	    	orderGrossTotal = orderGrossTotal.toFixed(2);
	    	var user = Meteor.users.find({
	    		"_id": userId
	    	});
	    	if(user.count() > 0)
	    	{
	    		user = user.fetch()[0];
	    		var username = user.profile.firstName + " " + user.profile.lastName + " (" + user.username + ")";
	    	}
	    	var productsIds = []
	    	var deliveryProducts = [];
	    	var pickupProducts = [];
	    	var deliveryFees = 0;
	    	for(var i = 0; i < cartss.length; i++) {
	    		var obj = {
	    			"id":cartss[i].productId,
	    			"quantity":cartss[i].productQuantity
	    		};
	    		productsIds.push(obj);
	    		if(orderType == "delivery")
	    		{
	    			var productDetails = products.find({
	    				"_id": cartss[i].productId
	    			});
	    			if(productDetails.count() > 0)
	    			{
	    				productDetails = productDetails.fetch()[0];
	    				if(productDetails.categoryType == "He9WM9S2oLmDkyLao")
	    				{
	    					obj = {
	    						"id":cartss[i].productId
	    					};
	    					pickupProducts.push(obj);
	    				}
	    				else
	    				{
	    					obj = {
	    						"id":cartss[i].productId
	    					};
	    					deliveryProducts.push(obj);
	    				}
	    			}
	    		}
	    	}

	    	if(deliveryProducts.length == 0 && orderType == "delivery")
	    	{
	    		orderType = "pickup";
	    		
	    	}

	    	if(orderType == "delivery")
	    	{
	    		if(deliveryProducts.length > 0)
	    		{
	    			deliveryFees = "4.99";
	    		}
	    		else
	    		{
	    			deliveryFees = "0";
	    		}
	    	}
	    	else
    		{
    			deliveryFees = "0";
    		}
	    	console.log("orderDetailsMukesh", {
	    		paymentStatus: "pending",
	    		status:"pending",
	    		storeId: storeId,
	    		orderNumber: lastOrd,
	    		productIds: productsIds,
	    		total: cartTotal,
	    		grossTotal: orderGrossTotal,
	    		tax: orderTax,
	    		sintax: orderSinTax,
	    		userId: user._id,
	    		userName: username,
	    		emailAddress: user.username,
	    		barcodeOrderValue: lastOrd,
	    		createdAt: new Date(),
	    		OrderType: orderType,
	    		pickupProductIds: pickupProducts,
	    		deliveryProductIds: deliveryProducts,
	    		deliveryFees: deliveryFees
	    	});
	    	var a = orders.insert({
	    		paymentStatus: "pending",
	    		status:"pending",
	    		storeId: storeId,
	    		orderNumber: lastOrd,
	    		productIds: productsIds,
	    		total: cartTotal,
	    		grossTotal: orderGrossTotal,
	    		tax: orderTax,
	    		sintax: orderSinTax,
	    		userId: user._id,
	    		userName: username,
	    		emailAddress: user.username,
	    		barcodeOrderValue: lastOrd,
	    		createdAt: new Date(),
	    		OrderType: orderType,
	    		pickupProductIds: pickupProducts,
	    		deliveryProductIds: deliveryProducts,
	    		deliveryFees: deliveryFees
	    	});
	    	console.log("a", a);
	    	return a;
	    },
	    changePaymentStatus(orderId,status,type)
	    {
	    	return orders.update({_id: orderId},{$set:{paymentStatus: status, paymentMethod: type}});
	    },
	    updateOrders(firstname, lastname, emailaddress, phonenumber, orderId, pickupTime){
	    	return orders.update({_id: orderId}, {$set: {
	    		'contactDetails.firstName': firstname, 
	    		'contactDetails.lastName':lastname, 
	    		emailAddress: emailaddress, 
	    		phoneNumber: phonenumber, 
	    		pickupTime: pickupTime}});
	    },
	    updateOrdersDelivery(firstname, lastname, emailaddress, phonenumber, orderId, pickupTime, address, apt, mode){
	    	return orders.update({
	    		_id: orderId
	    	}, {
	    		$set: {
	    			'contactDetails.firstName': firstname,
	    			'contactDetails.lastName':lastname,
	    			emailAddress: emailaddress,
	    			phoneNumber: phonenumber,
	    			pickupTime: pickupTime,
	    			deliveryAddress: address,
	    			deliveryAptNumber: apt,
	    			preferredMode: mode
	    		}
	    	});
	    },
	    updateOrderCart(currentOrderId, cartTotal,totalTax){
	    	// remove products from order also
	    	return orders.update({_id: currentOrderId}, {$set: { total: cartTotal, grossTotal: cartTotal, tax: totalTax }});
	    },
	    updateStock(arr,id, cartss) {
	    	var productsIds = []
	    	for(var i = 0; i < cartss.length; i++){
	    		var obj = {"id":cartss[i].productId, "quantity":cartss[i].productQuantity};
	    		productsIds.push(obj)
	    	}
	    	return orders.update({
	    		_id: id
	    	}, {
	    		$set: {
	    			productIds: productsIds
	    		}
	    	});
	    },
	    insertCardDetails(orderId, cardNumber, NameOnCard, monthCategory, yearCategory, userId, saveThecard, paymentType, cardType,  transDate){
	    	var oldData =  paymentDetails.find({CardNumber: cardNumber, userId: userId});
	    	if(oldData.count() == 0)
	    	{
	    		return paymentDetails.insert({CardNumber: cardNumber, NameOnCard: NameOnCard, expirationMonth: monthCategory, expirationYear: yearCategory, userId: userId, cardType: cardType, createdAt: transDate });
	    	}
	    	else
	    	{
	    		oldData = oldData.fetch();
	    		return oldData[0]._id;
	    	}
	    },
	    //  insertCardDetails(orderId, cardNumber, NameOnCard, monthCategory, yearCategory, userId, saveThecard, paymentType, cardType){
	    // 	return paymentDetails.insert({CardNumber: cardNumber, NameOnCard: NameOnCard, expirationMonth: monthCategory, expirationYear: yearCategory, userId: userId, orderId: orderId, saveCardDetail: saveThecard, paymentType: paymentType, cardType: cardType });
	    // },

	    paymentProceed(dataDetails, dataAmounts)
	    {
	    	ServerSession.set("paymentResponse", null);
	     ////console.log(JSON.stringify(dataAmounts));
	     ////console.log(JSON.stringify(dataDetails));
	     var num = dataAmounts.total;
	     var n = parseFloat(num).toFixed(2);
	     dataAmounts.total = n;
	     Meteor.Paypal.purchase(dataDetails,dataAmounts,
	     	function(error, results){
		     	////console.log("1");
		     	if(error){
		       	////console.log("2");
		         //return error;
		         ServerSession.set("paymentResponse", error);
		        ////console.log(error)
		        return ServerSession.set("paymentResponse", error);
		    }
		    else
		    {
		    	if(results.saved)
		    	{
		           //return results;
		          ////console.log("3");
		          this.ServerSession.set("paymentResponse", results);
		          ////console.log("4");
		          ////console.log(ServerSession.get("paymentResponse"));
		          ////console.log("5");
		          return ServerSession.get("paymentResponse");
		      }
		      else
		      {
		         	////console.log("6");
		           //return results;
		          ////console.log(JSON.stringify(results));
		          ServerSession.set("paymentResponse", results);
		          ////console.log("7");
		          return ServerSession.set("paymentResponse", results);
		      }
		  }
		});
	 },

	 addPayment(response,requestId)
	 {
	 	
	 	if(response.messages.resultCode == "Ok")
	 	{
	 		var data = {
	 			'paymentId':response.transactionResponse.transId,
	 			'requestId':requestId,
	 			'amount':response.transactionResponse.userFields.userField[0]["value"],
	 			'fullResponse': JSON.stringify(response),
	 			'status':'Success'
	 		};
	 		
	 			var orderDetails = orders.find({
	 				"_id": requestId
	 			});
	 			if(orderDetails.count() > 0)
	 			{
	 				orderDetails = orderDetails.fetch()[0];
	 				orders.update({_id: requestId}, {$set: {paymentStatus: "paid", orderPlaced: true}});
	 				if(orderDetails.OrderType == "delivery")
	 				{
	 					var findConnectedOrder = orders.find({
	 						"connectedOrderId": requestId
	 					});
	 					if(findConnectedOrder.count() == 0)
	 					{
	 						if(orderDetails.pickupProductIds.length > 0)
	 						{
	 							var lastOrder = orders.find({}, {
	 								sort: {
	 									"createdAt": -1
	 								}
	 							});
	 							var lastOrderId = 0;
	 							if(lastOrder.count() > 0)
	 							{
	 								lastOrder = lastOrder.fetch()[0];
	 								lastOrderId = lastOrder.orderNumber + 1;
	 								var newProductIds = [];
	 								var newTotal = 0;
	 								var newGrossTotal = 0;
	 								var newTaxTotal = 0;
	 								var newSinTaxTotal = 0;
	 								var newProductIdsDelivery = [];
	 								var newTotalDelivery = 0;
	 								var newGrossTotalDelivery = 0;
	 								var newTaxTotalDelivery = 0;
	 								var newSinTaxTotalDelivery = 0;
	 								for(var j = 0; j < orderDetails.pickupProductIds.length; j++)
	 								{
	 									var rec = orderDetails.pickupProductIds[j];
	 									var pId = rec.id;
	 									var pDetails = products.find({
	 										"_id": pId
	 									});
	 									if(pDetails.count() > 0)
	 									{
	 										pDetails = pDetails.fetch()[0];
	 										var rNew;
	 										for(var k = 0; k < orderDetails.productIds.length; k++)
	 										{
	 											var r = orderDetails.productIds[k];
	 											if(r.id == pId)
	 											{
	 												rNew = r;
	 												newProductIds.push(r);
	 												break;
	 											}
	 										}
	 										var priceWithQuantity = parseFloat(pDetails.price) * parseInt(rNew.quantity);
	 										newTotal += priceWithQuantity;
	 										var t = (parseFloat(pDetails.price) * parseFloat(pDetails.productTax)) / 100
	 										t = t * parseInt(rNew.quantity);
	 										newTaxTotal += t;
	 										var st = parseFloat(pDetails.sinProductTax);
	 										st = st * parseInt(rNew.quantity);
	 										newSinTaxTotal += st;
	 										newGrossTotal += priceWithQuantity + t + st;
	 									}
	 								}
	 								for(var j = 0; j < orderDetails.deliveryProductIds.length; j++)
	 								{
	 									var rec = orderDetails.deliveryProductIds[j];
	 									var pId = rec.id;
	 									var pDetails = products.find({
	 										"_id": pId
	 									});
	 									if(pDetails.count() > 0)
	 									{
	 										pDetails = pDetails.fetch()[0];
	 										var rNew;
	 										for(var k = 0; k < orderDetails.productIds.length; k++)
	 										{
	 											var r = orderDetails.productIds[k];
	 											if(r.id == pId)
	 											{
	 												rNew = r;
	 												newProductIdsDelivery.push(r);
	 												break;
	 											}
	 										}
	 										var priceWithQuantity = parseFloat(pDetails.price) * parseInt(rNew.quantity);
	 										newTotalDelivery += priceWithQuantity;
	 										var t = (parseFloat(pDetails.price) * parseFloat(pDetails.productTax)) / 100
	 										t = t * parseInt(rNew.quantity);
	 										newTaxTotalDelivery += t;
	 										var st = parseFloat(pDetails.sinProductTax);
	 										st = st * parseInt(rNew.quantity);
	 										newSinTaxTotalDelivery += st;
	 										newGrossTotalDelivery += priceWithQuantity + t + st;
	 									}
	 								}
	 								var newOrder = orders.insert({
	 									paymentStatus: "paid",
	 									status:"pending",
	 									storeId: orderDetails.storeId,
	 									orderNumber: lastOrderId,
	 									productIds: newProductIds,
	 									total: newTotal,
	 									grossTotal: newGrossTotal,
	 									tax: newTaxTotal,
	 									sintax: newSinTaxTotal,
	 									userId: orderDetails.userId,
	 									userName: orderDetails.userName,
	 									emailAddress: orderDetails.emailAddress,
	 									barcodeOrderValue: lastOrderId,
	 									createdAt: new Date(),
	 									OrderType: "pickup",
	 									pickupProductIds: orderDetails.pickupProducts,
	 									deliveryProductIds: orderDetails.deliveryProducts,
	 									orderPlaced: true,
	 									connectedOrderId: requestId,
	 									contactDetails: {
	 										firstName: orderDetails.contactDetails.firstName,
	 										lastName: orderDetails.contactDetails.lastName
	 									},
	 									emailAddress: orderDetails.emailAddress,
	 									phoneNumber: orderDetails.phoneNumber,
	 									pickupTime: orderDetails.pickupTime,
	 									deliveryAddress: "",
	 									deliveryAptNumber: "",
	 									preferredMode: orderDetails.preferredMode,
	 									deliveryFees: 0
	 								});
	 								orders.update({
	 									_id: requestId
	 								}, {
	 									$set: {
	 										"connectedOrderId": newOrder,
	 										"productIds": newProductIdsDelivery,
	 										"total": newTotalDelivery,
	 										"grossTotal": newGrossTotalDelivery,
	 										"tax": newTaxTotalDelivery,
	 										"sintax": newSinTaxTotalDelivery,
	 										"pickupTime": ""
	 									}
	 								});
	 							}
	 						}
	 					}
	 					else
	 					{
	 						findConnectedOrder = findConnectedOrder.fetch()[0];
	 						orders.update({_id: findConnectedOrder._id}, {$set: {paymentStatus: "paid", orderPlaced: true}});
	 					}
	 				}
	 			}
	 			carts.remove({userId: orderDetails.userId,});
	 			var resInsert = payments.insert(data);
	 			console.log("resInsert", resInsert);
	 			return resInsert;

	 	}
	 	else
	 	{
	 		var data = {
	 			'paymentId':response.error.response.debug_id,
	 			'requestId':requestId,
	 			'amount':0,
	 			'fullResponse': JSON.stringify(response),
	 			'status':'Failed'
	 		};
	 		var res = payments.find({'paymentId':response.error.response.debug_id}).count();
	 		var resInsert = payments.insert(data);
	 		orders.update({_id: requestId}, {$set: {paymentStatus: "unpaid", status: "Failed", orderPlaced: false}});
	 		if(orderDetails.OrderType == "delivery")
	 		{
	 			var findConnectedOrder = orders.find({
	 				"connectedOrderId": requestId
	 			});
	 			if(findConnectedOrder.count() == 0)
	 			{
	 				if(orderDetails.pickupProducts.length > 0)
	 				{
	 					var lastOrder = orders.find({}, {
	 						sort: {
	 							"createdAt": -1
	 						}
	 					});
	 					var lastOrderId = 0;
	 					if(lastOrder.count() > 0)
	 					{
	 						lastOrder = lastOrder.fetch()[0];
	 						lastOrderId = lastOrder.orderNumber + 1;
	 					}
	 					else
	 					{
	 						lastOrderId = 1;
	 					}
	 					console.log("lastOrderId", lastOrderId);
	 					var newProductIds = [];
	 					var newTotal = 0;
	 					var newGrossTotal = 0;
	 					var newTaxTotal = 0;
	 					var newSinTaxTotal = 0;
	 					var newProductIdsDelivery = [];
	 					var newTotalDelivery = 0;
	 					var newGrossTotalDelivery = 0;
	 					var newTaxTotalDelivery = 0;
	 					var newSinTaxTotalDelivery = 0;
	 					for(var j = 0; j < orderDetails.pickupProducts.length; j++)
	 					{
	 						var rec = orderDetails.pickupProducts[j];
	 						var pId = rec.id;
	 						var pDetails = products.find({
	 							"_id": pId
	 						});
	 						if(pDetails.count() > 0)
	 						{
	 							pDetails = pDetails.fetch()[0];
	 							var rNew;
	 							for(var k = 0; k < orderDetails.productIds.length; k++)
	 							{
	 								var r = orderDetails.productIds[k];
	 								if(r.id == pId)
	 								{
	 									rNew = r;
	 									newProductIds.push(r);
	 									break;
	 								}
	 							}
	 							var priceWithQuantity = parseFloat(pDetails.price) * parseInt(rNew.quantity);
	 							newTotal += priceWithQuantity;
	 							var t = (parseFloat(pDetails.price) * parseFloat(pDetails.productTax)) / 100
	 							t = t * parseInt(rNew.quantity);
	 							newTaxTotal += t;
	 							var st = parseFloat(pDetails.sinProductTax);
	 							st = st * parseInt(rNew.quantity);
	 							newSinTaxTotal += st;
	 							newGrossTotal += priceWithQuantity + t + st;
	 						}
	 					}
	 					for(var j = 0; j < orderDetails.deliveryProducts.length; j++)
	 					{
	 						var rec = orderDetails.deliveryProducts[j];
	 						var pId = rec.id;
	 						var pDetails = products.find({
	 							"_id": pId
	 						});
	 						if(pDetails.count() > 0)
	 						{
	 							pDetails = pDetails.fetch()[0];
	 							var rNew;
	 							for(var k = 0; k < orderDetails.productIds.length; k++)
	 							{
	 								var r = orderDetails.productIds[k];
	 								if(r.id == pId)
	 								{
	 									rNew = r;
	 									newProductIdsDelivery.push(r);
	 									break;
	 								}
	 							}
	 							var priceWithQuantity = parseFloat(pDetails.price) * parseInt(rNew.quantity);
	 							newTotalDelivery += priceWithQuantity;
	 							var t = (parseFloat(pDetails.price) * parseFloat(pDetails.productTax)) / 100
	 							t = t * parseInt(rNew.quantity);
	 							newTaxTotalDelivery += t;
	 							var st = parseFloat(pDetails.sinProductTax);
	 							st = st * parseInt(rNew.quantity);
	 							newSinTaxTotalDelivery += st;
	 							newGrossTotalDelivery += priceWithQuantity + t + st;
	 						}
	 					}
	 					var newOrder = orders.insert({
	 						paymentStatus: "unpaid",
	 						status:"Failed",
	 						storeId: orderDetails.storeId,
	 						orderNumber: lastOrderId,
	 						productIds: newProductIds,
	 						total: newTotal,
	 						grossTotal: newGrossTotal,
	 						tax: newTaxTotal,
	 						sintax: newSinTaxTotal,
	 						userId: orderDetails.userId,
	 						userName: orderDetails.userName,
	 						emailAddress: orderDetails.emailAddress,
	 						barcodeOrderValue: lastOrderId,
	 						createdAt: new Date(),
	 						OrderType: "pickup",
	 						pickupProductIds: orderDetails.pickupProducts,
	 						deliveryProductIds: orderDetails.deliveryProducts,
	 						orderPlaced: true,
	 						connectedOrderId: requestId,
	 						contactDetails: {
	 							firstName: orderDetails.contactDetails.firstName,
	 							lastName: orderDetails.contactDetails.lastName
	 						},
	 						emailAddress: orderDetails.emailAddress,
	 						phoneNumber: orderDetails.phoneNumber,
	 						pickupTime: orderDetails.pickupTime,
	 						deliveryAddress: "",
	 						deliveryAptNumber: "",
	 						preferredMode: orderDetails.preferredMode,
	 						deliveryFees: 0
	 					});
	 					orders.update({
	 						_id: requestId
	 					}, {
	 						$set: {
	 							"connectedOrderId": newOrder,
	 							"productIds": newProductIdsDelivery,
	 							"total": newTotalDelivery,
	 							"grossTotal": newGrossTotalDelivery,
	 							"tax": newTaxTotalDelivery,
	 							"sintax": newSinTaxTotalDelivery,
	 							"pickupTime": ""
	 						}
	 					});
	 				}
	 			}
	 			else
	 			{
	 				findConnectedOrder = findConnectedOrder.fetch()[0];
	 				orders.update({_id: findConnectedOrder._id}, {$set: {paymentStatus: "unpaid", status: "Failed", orderPlaced: false}});
	 			}
	 		}
	 		return resInsert;
	 	}
	 },

	 addPaymentPaypal(response,requestId)
	 {
	 	var data = {
	 		'paymentId':response.id,
	 		'requestId':requestId,
	 		'amount':response.transactions[0].amount.total,
	 		'fullResponse': JSON.stringify(response),
	 		'status':'Success'
	 	};
	 	var res = payments.find({'paymentId':response.id}).count();

	 	if(res == 0)
	 	{
	 		var resInsert = payments.insert(data);
	 		orders.update({_id: requestId}, {$set: {paymentStatus: "paid"}});
	 		var orderProductIds = orders.findOne({_id: requestId}).productIds
	       ////console.log(orderProductIds)
	       for(var i = 0; i < orderProductIds.length; i++){
	       	prodQuantity = carts.findOne({productId: orderProductIds[i].id}).productQuantity
	       		////console.log(prodQuantity)
	       		// //console.log(products.findOne({_id: orderProductIds[i].id}))
	       		productsAvailability = products.findOne({_id: orderProductIds[i].id}).productsAvailable;
	       		products.update({_id: orderProductIds[i].id}, {$set:{productsAvailable: productsAvailability - prodQuantity}});
	       	}
	       	carts.remove({userId: Meteor.userId()});
	       	return resInsert;
	       }
	       else
	       {
	       	return 0;
	       }
	   },

	   updateOrderDiscount(couponCode, orderId, discount, discountedPrice)
	   {
	   	return orders.update({_id: orderId}, {$set: { couponCode: couponCode, grossTotal: discountedPrice, discount: discount}});
	   },

	   removeOrderDiscount(couponCode, orderId, orderDiscount, orderWithoutDiscountRate)
	   {
	   	return orders.update({_id: orderId}, {$set: { couponCode: couponCode, grossTotal: orderWithoutDiscountRate, discount: orderDiscount}});
	   },

	   updateOrderType(orderId, ordertype)
	   {
	   	return orders.update({_id: orderId}, {$set: { OrderType: ordertype}});
	   },

	   updateOrderPaymentStatus(order, paymentstatus)
	   {
	   	carts.remove({userId: Meteor.userId()});
	   	return orders.update({_id: order._id}, {$set: { paymentStatus: paymentstatus, paymentMethod: "Cash on delivery",orderPlaced: true}});

	   },

	   setCancelledForProdOutOfStockQuery(order,status)
	   {
	   	return orders.update({_id: order._id},{$set: {status: status}});
	   },

	   updateOrderOnRefund(order, orderGrossTotal, orderTotal, orderTax, orderSinTax, overdue, refunded)
	   {
	   	return orders.update({_id: order._id},{$set: { sintax: orderSinTax, tax: orderTax, total:orderTotal, grossTotal: orderGrossTotal, isOrderConfrmdOrCanclled: true, dueAmount: overdue, refundAmount: refunded}});
	   },
	    // updateOrderWithOFSproducts(order, altProTotal, altProTotalTax)
	    // {
	    // 	return orders.update({_id: order._id},{$set: {grossTotal: altProTotal, tax: altProTotalTax }});
	    // },
	    updateOrderWithOFSproducts(order, dueAmount)
	    {
	    	return orders.update({_id: order._id},{$set: {dueAmount: dueAmount, isOrderConfrmdOrCanclled: true }});
	    },
	    initiateRefund(orderRefundamnt, paymentObj, userId)
	    {
	    	var refundAmount = orderRefundamnt.toFixed(2);
	     ////console.log("refundAmnt "+orderRefundamnt.toFixed(2));
	     if(typeof paymentObj.payment !== "undefined")
	     {
	     	var salesId = paymentObj.payment.transactions[0].related_resources[0].sale.id;
	     }
	     else
	     {
	     	var salesId = paymentObj.transactions[0].related_resources[0].sale.id;
	     }
	     var data = {
	     	amount: {
	     		total: refundAmount,
	     		currency: 'USD'
	     	}
	     };
	     paypal.sale.refund(salesId, data, Meteor.bindEnvironment(function (error, refund){
	     	if (error){
	     		console.error(JSON.stringify(error));
	     	} else {
	     		if(typeof paymentObj.payment !== "undefined")
	     		{
	     			var u = payments.update({"paymentId":paymentObj.payment.id},{$set:{"isRefunded":true,"refundId":refund.id,"refundFullResponse":JSON.stringify(refund)}})
	     		}
	     		else
	     		{
	     			var u = payments.update({"paymentId":paymentObj.id},{$set:{"isRefunded":true,"refundId":refund.id,"refundFullResponse":JSON.stringify(refund)}})
	     		}
	     	}
	     }));
	 },

	 inserReviewRecipes(reviewerName, summary, writeYourReview, reviewRating ,receipeId){	    	
	 	return reviewRecipes.insert({reviewerName: reviewerName, summary: summary, WriteReview: writeYourReview, reviewRating: reviewRating,receipeId: receipeId, createdAt: new Date()});	
	 },

	 inserReviewProducts(reviewerName, summary, writeYourReview, reviewRating ,productId){
	 	return reviews.insert({reviewerName: reviewerName, summary: summary, WriteReview: writeYourReview, reviewRating: reviewRating, productId: productId, createdAt: new Date()});
	 },
	 termsofservices(check,userId){
	 	return Meteor.users.update({_id :userId._id}, {$set:{"profile.termsofservice": check}})
	 },
	 updateProduct(orderID,productId,AltproductName,productIdForAlternetPro){
	    	// //console.log("productId",productId._id);
	    	////console.log("AltproductName",AltproductName);
	    	// //console.log("productIdForAlternetPro",productIdForAlternetPro);
	    	var order = orders.findOne({_id:orderID});
	    	var productsIDS = order.productIds;
	    	////console.log(productsIDS);
	    	for(var i=0; i < productsIDS.length; i++){
	    		// //console.log(productsIDS[i]);
	    		if(productsIDS[i].id == productIdForAlternetPro){
	    			// //console.log("productId._id",productId._id);
	    			////console.log("productsIDS[i].alternateProdId",productsIDS[i].alternateProdId);
	    			var id = productId._id;
	    			////console.log("mychoiceproductID",id);
	    			// //console.log("productsIDS[i]",productsIDS[i]);
	    			productsIDS[i].alternateProdId = id;
	    			productsIDS[i].alternateProd = AltproductName;
	    			//console.log("productsIDS[i].alternateProdId = productId._id",productsIDS[i].alternateProdId);
	    			// orders.update({_id: orderID, productIds: {id : productsIDS[i].id}}, {$set:{"productsIDS.id.$.alternateProdId" : productId._id}});
	    		}
	    	}
	    	// console.log("productsIDS",productsIDS);
	    	return orders.update({_id: orderID}, {$set: { productIds: productsIDS}});
	    }, 
	    onlyTotalUpdate(orderID,total){
	    	return orders.update({_id: orderID}, {$set: {total:total,grossTotal : total}});
	    },
	    productTypesListGet(val){
	    	var prodTypeNameArr = [];
	    	var categoryDetails = categories.find({"_id":val});
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
                console.log("categoryIds", categoryIds);
                var productList = products.find({
                	"categoryType": {
                		$in: categoryIds
                	}
                }).fetch();
                for(i = 0; i < productList.length; i++){
		    		if(typeof productList[i].productType !== "undefined") {
		    			prodTypeNameArr.push(productList[i].productType);
		    		}
			    }
			    var productTypesList = productTypes.find({
			    	"_id": {
			    		$in : prodTypeNameArr
			    	}
			    },{	
			    	sort: {
			    		"typeName":1
			    	}
			    }).fetch();
	    		return productTypesList;
	    	}
	    },
	    productBrandNameList(category, val){
	    	var prodBrandNameArr = [];
	    	var a = products.find({categoryType: category,productType: val}).fetch();
	    	// //console.log("a",a);
	    	for(i = 0; i < a.length; i++){
	    		if(typeof a[i].brandName == "undefined"){
	    			// //console.log("a[iiiiiii]",a[i]);
	    		}
	    		else{	    			
	    			prodBrandNameArr.push(a[i].brandName);
		    		// //console.log("a[i]",a[i].productType);
		    	}
		    }
	    	// //console.log("prodBrandNameArr arrr", prodBrandNameArr);
	    	var b = brands.find( {_id: {$in : prodBrandNameArr}},{sort:{brandName:1}}).fetch();
	    	// //console.log("bnb",b);
	    	return b;
	    },
	    unfavproduct(favproductId, userId){
	    	return favProducts.update({ productId: favproductId, userId: userId},{ $set: { 'status': false }});
	    },
	    updatePhoneNumber(userId, phoneNumber){
	    	return Meteor.users.update(userId, {$set: {"profile.phoneNumber": phoneNumber}});
	    },
	    unfavoriteReceipes(favReceipeId){
	    	return favReceipes.update({ _id: favReceipeId },{ $set: { 'status': false }});
	    },
	    hiddenVarValueStore(userId, hiddenVar){
	    	return Meteor.users.update({_id: userId}, {$set: {"profile.profileImageOrientation": hiddenVar}});
	    }    
	});
});



function getRandomProducts(arr, n) {
	var result = new Array(n),
	len = arr.length,
	taken = new Array(len);
	if (n > len)
		throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
		var x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}