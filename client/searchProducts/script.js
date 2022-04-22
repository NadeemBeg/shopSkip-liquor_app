Template.productList.onCreated(function() {
});

Template.productList.onRendered(function() {
	$("body").css("overflow","auto");
});

Template.productList.helpers({
	productsImage: function(){
		//console.log(this);
		if(typeof this.productImage !== "undefined")
		{
			return '<img src=" '+ this.productImage + ' " width="50px" height="50px" style="margin-top:10px;">' ;
		}
		else
		{
			return '<img src="/images/noimageLightGrey.png" width="20px" height="20px" style="margin-top:15px;">';
		}
	},
	productDetailPage: function(){
		//console.log("this id ", this._id);
		return this._id;
	},
	productDetails: function(){
		if(typeof this.details !== "undefined")
		{
			if(this.details.length >= 100)
				{
					return this.details.substring(0,100) + ".....";
				}
			else
			{
				return this.details;
			}
		}
	},
	productPrice: function(){
		return this.price
	},
	productType: function(){
		var proType = this.productType;
		var prodType = productTypes.findOne({_id: proType});
		return prodType.typeName;
	},
	productQuantity: function(){
		var proQuantity = this.quantity;
		var prodQuantity = bottleSizes.findOne({_id: proQuantity});
		return prodQuantity.sizeValue;
	},
});

Template.productList.events({
});
