Meteor.publish('getProductForTopPicks',function(storeID){
	var productArray =[];
	if(typeof storeID !== "undefined" && storeID !== null){
        return products.find({ 
			categoryType: { 
				$ne: "aLe2FbawraQid9NCN" 
			},
			"storeName" : storeId,
		});
    }
    else{
    	return products.find({ 
			categoryType: { 
				$ne: "aLe2FbawraQid9NCN" 
			}
		});
    }
});
Meteor.publish("getUserById", function(id){
	return Meteor.users.find({
		"_id": id
	});
});

Meteor.publish('getProductForspirituous',function(storeID){
	var productArray =[];
	if(typeof storeID !== "undefined" && storeID !== null){
        var storeFind = stores.findOne({_id:storeID});
    	//console.log("storeID",storeID)
        var productsFind = products.find({ "categoryType":"He9WM9S2oLmDkyLao","storeName":storeID},{limit: 20}).fetch();

        //console.log("productsFind if ",productsFind)
        if(productsFind.length > 4){
        	for(i = 0; i < productsFind.length; i++){
	        	var randomIndex = ( parseInt(Math.random()*10)+1);
	        	var productss = (productsFind[randomIndex]);
	        	//console.log("productss first if",productss);
	        	productArray.push(productss._id);
	        	// console.log("productArray2112",productArray);
	        }
	        // console.log("productArray2112",productArray);
        }
        else{
	    	var productsFind = products.find({},{limit: 20}).fetch();
	    	//console.log("productsFind else",productsFind);
	    	for(i = 0; i < productsFind.length; i++){
	    		var randomIndex = ( parseInt(Math.random()*10)+1);
	    		var productss = (productsFind[randomIndex]);
	    		//console.log("productss",productss);
	        	productArray.push(productss._id);
	    	}
	    	//console.log("productArray111",productArray);
	    	// console.log("element1",element);
	    }
        
    }
        
    else{
    	var productsFind = products.find({"categoryType":"He9WM9S2oLmDkyLao"},{limit: 20}).fetch();
    	//console.log("productsFind final else",productsFind);
    	for(i = 0; i < productsFind.length; i++){
    		var randomIndex = ( parseInt(Math.random()*10)+1);
    		var productss = (productsFind[randomIndex]);
    		// console.log("productss",productss);
        	productArray.push(productss._id);
    	}
    	//console.log("productArray111",productArray);
    	// console.log("element1",element);
    }

    if(productArray.length > 0){
    	return products.find({
			"_id": {
				$in: productArray
			}
		});
    }
    
});


Meteor.publish('getProductsByFilter',function(newFilterArray, l){
	return products.find(newFilterArray,{limit:l});
});
Meteor.publish('getProductsForSearch',function(searchVal){	
	//console.log("searchVal",searchVal);
	
		return products.find({"productName": new RegExp(searchVal.trim(),"i")});

});
Meteor.publish('getProductTypes',function(){
	return productTypes.find();
});
Meteor.publish('getProductType',function(id){
	return productTypes.find({"_id":id});
});
Meteor.publish('getContents',function () {
 return cms.find();
});
Meteor.publish('getAppContents',function () {
 return howappworks.find();
});
Meteor.publish('getCoupons',function () {
 return coupons.find();
});
Meteor.publish("getSpecificProducts", function(arr){
	if(arr.length > 0)
	{
		return products.find({
			"_id": {
				$in: arr
			}
		});
	}
});
Meteor.publish("getSearchProducts", function(data, limit){
	var categoryDetails = categories.find({"_id":data.categoryType});
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
        if(typeof data.storeName !== "undefined")
        {
        	var newData = {
	        	"categoryType": {
	        		$in: categoryIds
	        	},
	        	"productType": data.productType,
	        	"storeName": data.storeName
	        }
        }
        else
        {
        	var newData = {
	        	"categoryType": {
	        		$in: categoryIds
	        	},
	        	"productType": data.productType
	        }
        }
        return products.find(newData,{
			"limit": limit
		});
	}
});
Meteor.publish("getSpecificProductsForTopPicks", function(arr){
	if(arr.length > 0)
	{
		// console.log("arr",arr);
		// return products.find({"_id": {$in: arr}},{ categoryType: { $ne:"aLe2FbawraQid9NCN"}});
		return products.find({ categoryType: { $ne:"He9WM9S2oLmDkyLao"},"_id": {$in: arr}});
	}
});
Meteor.publish('getProducts',function (storeId,length) {
	// console.log("storeId", storeId);
	// console.log("length", length);
	if(storeId == undefined)
	{
		if(typeof length == "undefined")
		{
			return products.find({});
		}
		else
		{
			return products.find({},{limit:length});
		}
		
	}
	else
	{
		if(typeof length == "undefined")
		{
			return products.find({storeName: storeId});
		}
		else
		{
			return products.find({storeName: storeId},{limit:length});
		}
		
	}
 
});
Meteor.publish('getProductsByLiqourCat',function (storeId) {
	// console.log("storeId", storeId);
	// console.log("length", length);
	if(storeId == undefined)
	{
		return products.find({"categoryType":"He9WM9S2oLmDkyLao"});
	}
	else
	{
		return products.find({categoryType:"He9WM9S2oLmDkyLao",storeName: storeId});
	}
 
});
Meteor.publish('getfavProducts',function () {
 return favProducts.find();
});
Meteor.publish("getUserFavorites", function(userId){
	return favProducts.find({userId:userId});
});
Meteor.publish("getReviews", function(userId){
	return reviews.find();
});
Meteor.publish("getCarts", function(){
	return carts.find();
});
Meteor.publish("getCategories", function(){
	return categories.find();
});
Meteor.publish('getPosters',function () {
 return posters.find();
});
Meteor.publish("getBanners", function () {
	return banner.find();
});
Meteor.publish("getCheckoutFirst", function (userId) {
	return checkoutPagefirst.find({
		"userId": userId
	});
});
Meteor.publish("getOrders", function () {
	return orders.find();
});
Meteor.publish("getOrderById", function (id) { 
	return orders.find({
		"_id": id
	});
});
Meteor.publish("getBrands", function () {
	return brands.find();
});
Meteor.publish("getBottleSizes", function () {
	return bottleSizes.find();
});
Meteor.publish("getStores", function () {
	return stores.find();
});
Meteor.publish("getSettings", function () {
	return settings.find();
});
Meteor.publish("getfaqs", function () {
	return faqs.find();
});
Meteor.publish('getCartsByUserId', function(userId){
	return carts.find({"userId": userId});
});
Meteor.publish('getReceipes', function(length){
	// return receipes.find();
	console.log("getReceipes length",length);
	if(typeof length == "undefined")
	{
		return receipes.find();
	}
	else
	{
		// console.log("receipes",receipes.find({},{limit:length}));
		return receipes.find({},{limit:length});
	}
});
Meteor.publish('getFavReceipes', function(userId){
	return favReceipes.find();
});
Meteor.publish('getReviewRatings', function(userId){
	return reviewRecipes.find();
}); 
Meteor.publish('getMonths', function(userId){
	return expirationmonths.find();
});  
Meteor.publish('getYears', function(userId){
	return expirationyears.find();
});
//17 July
Meteor.publish('getBottleTypes', function(userId){
	return bottleTypes.find();
});
Meteor.publish('getSpecificCategoryProducts',function(categoryType,length){
	return products.find({"categoryType":categoryType},{limit:length});
});
//23_july
Meteor.publish('getAllUsers', function(){
	return Meteor.users.find();
});
//16_aug
Meteor.publish('getAdvSliderProducts', function(){
	return advSliders1.find();
});
// Meteor.publishComposite('getlistingProdType', function(val) {
// 	console.log("val",val);
// 	var prodTypeArr = [];
//     return {
//         find () {
//             // Find posts made by user. Note arguments for callback function
//             // being used in query.
//             var a = products.find({categoryType: val}).fetch(); 
//             // console.log("a",a);
//             return products.find({categoryType: val});
//         },
//         children: [
//            {
//             find (list) {
//             	console.log("list",list.productType);
//             	var prodTypes = productTypes.findOne({_id:list.productType});
//             	console.log("prodTypes",prodTypes);
//             	// prodTypeArr.push(prodTypes.typeName);
//             	// console.log("prodTypeArr",prodTypeArr);
//               return productTypes.findOne({_id:list.productType});
//             }
//         }
//         ]
//     }
// });

Meteor.publish("getProductsBySKU", function(sku){
	// console.log("sku",sku);
	//console.log(products.find({$or: [{"productId": sku},{"sku": sku}]}).count());
	return products.find({$or: [{"productId": sku},{"sku": sku}]});
});

Meteor.publish('getpaymentDetails',function(userId){
return paymentDetails.find({"userId": userId});
});
