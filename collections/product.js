import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
products = new Mongo.Collection('products');
PostSubs = new SubsManager();
var Schemas = {};
Schemas.productsSchema = new SimpleSchema({
	productId: {
		type: Number,
		optional: true,
		label: "Product Id",
		defaultValue:0,
		autoform: {
      /*afFormGroup: {
        'formgroup-class': 'hidden'
      },*/
    }
	},

	productName: {
		type: String,
		optional: false,
		label: "Product Name"
	},
	alternateName: {
		type: String,
		optional: true,
		label: "Alternate Name"
	},

	price: {
		type: Number,
		label: "Price",
		optional: false,
		defaultValue: "0",
		autoform: {
	    type: 'number'
	  }
	},
	
	productCost: {
		type: String,
		label: "Product Cost",
		optional: true,
			autoform: {
	     type: 'number'
	    }
	},

	// costOfItem: {
	// 	type: String,
	// 	label: "Cost Of Item",
	// 	optional: true,
	// 	defaultValue: "0",
	// 	autoform: {
 //      type: 'number'
 //    }
 // },
	

	taxRate: {
    type: Boolean,
    optional: true,
    label: "Taxes"
	},

	productTax: {
		type: Number,
  	optional: true,
  	defaultValue: 0,
  	label: "Product Tax Rate",
		autoform: {
      type: 'number',
      afFormGroup: {
		  	'formgroup-class': 'col-xs-6 pad0'
		 	},
      onAfterInsert:function(e)
			{
				var a = setInterval(function(){
					if($("input[name='productTax']").length > 0)
					{
						clearInterval(a);
						if($("input[name='productTax']").parent().next(".addProductTaxesDiv").length == 0)
						{
							$("input[name='productTax']").parent().after("<div class='col-xs-6 addProductTaxesDiv padright0'><label>&nbsp;</label><button  id='addProductTaxes' class='form-control btn btn-primary '>Select Taxes</button></div>");
						}
					}
				},100);
				
			}
    }
	},

	SintaxRate: {
		type: Boolean,
		label: "Sin Tax",
		optional: true,
		autoform: {
			afFormGroup: {
				'formgroup-class': 'clearBoth'
			}
		}
	},

	productsAvailable:{
		type: Number,
  	optional: true,
  	defaultValue: 0,
  	label: "Stock Quantity",
		autoform: {
     type: 'number'
    }
	},

	sku: {
		type: String,
		label: "SKU",
		optional: true
	},


	categoryType: {
    type: String,
    label: "Category Type",
    optional: false,
    autoform: {
      type: 'select',
      afFormGroup: {
	  	  'formgroup-class': 'col-xs-6 pad0'
	 		},
     options: function()
      {
	     	Meteor.subscribe('getCategoryTypes');
	        return categories.find({}).map(function (c) {
	        return {label: c.categoryType, value: c._id};
	      });
      },
      onAfterInsert:function(e)
			{
				var a = setInterval(function(){
					if($("select[name='categoryType']").length > 0)
					{
						clearInterval(a);
						if($("select[name='categoryType']").parent().next(".addCategoryTypeDiv").length == 0)
						{
							$("select[name='categoryType']").parent().after("<div class='col-xs-6 addCategoryTypeDiv padright0'><label>&nbsp;</label><button  id='addCategoryType' class='form-control btn btn-primary '>Add Category Type</button></div>");
						}
					}
				},100);
				
			}
    }
  },

  categoryTypeName: {
    type: String,
    label: "Category Type Name",
    optional: true,
    autoform: {
     type: 'hidden'
    }
  },

  brandName: {
		type: String,
		label: "Brand Name",
		optional: true,
		autoform: {
			afFormGroup: {
		  	 'formgroup-class': 'col-xs-6 pad0 clearBoth'
		 	},
     type: 'select',
     options: function()
      {
	     	Meteor.subscribe('getBrandNames');
	        return brands.find({}).map(function (c) {
	        return {label: c.brandName, value: c._id};
	      });
      },
      onAfterInsert:function(e)
			{
				var a = setInterval(function(){
					if($("select[name='brandName']").length > 0)
					{
						clearInterval(a);
						if($("select[name='brandName']").parent().next(".addBrandNameDiv").length == 0)
						{
							$("select[name='brandName']").parent().after("<div class='col-xs-6 addBrandNameDiv padright0'><label>&nbsp;</label><button  id='addBrandss' class='form-control btn btn-primary '>Add Brand</button></div>");
						}
					}
				},100);
				
			}
    }
	},

	productType: {
		type: String,
		label: "Product Type",
		optional: true,
		 autoform: {
		 	afFormGroup: {
		  	 'formgroup-class': 'col-xs-6 pad0 clearBoth'
		 	},
     type: 'select',
     options: function()
      {
	     	Meteor.subscribe('getProductTypes');
	        return productTypes.find({}).map(function (c) {
	        return {label: c.typeName, value: c._id};
	      });
      },
      onAfterInsert:function(e)
			{
				var a = setInterval(function(){
					if($("select[name='productType']").length > 0)
					{
						clearInterval(a);
						if($("select[name='productType']").parent().next(".addProductTypeDiv").length == 0)
						{
							$("select[name='productType']").parent().after("<div class='col-xs-6 addProductTypeDiv padright0'><label>&nbsp;</label><button  id='addProductType' class='form-control btn btn-primary '>Add Product Type</button></div>");
						}
					}
				},100);
				
			}
    }
	},

	bottleTypes: {
		type: String,
    label: "Bottle Types",
    optional: true,
    autoform: {
  		afFormGroup: {
	  	 'formgroup-class': 'col-xs-6 pad0 clearBoth'
		 	},
	     type: 'select',
	     options: function()
	      {
		     	Meteor.subscribe('getBottleTypes');
		        return bottleTypes.find({}).map(function (c) {
		        return {label: c.BottletypeName, value: c._id};
		      });
	      },
	      onAfterInsert:function(e)
				{
					var a = setInterval(function(){
						if($("select[name='bottleTypes']").length > 0)
						{
							clearInterval(a);
							if($("select[name='bottleTypes']").parent().next(".addBottleTypeDiv").length == 0)
							{
								$("select[name='bottleTypes']").parent().after("<div class='col-xs-6 addBottleTypeDiv padright0'><label>&nbsp;</label><button  id='addBottleType' class='form-control btn btn-primary '>Add Bottle Type</button></div>");
							}
						}
					},100);
				}
    	}
	},

	quantity: {
		type: String,
		label: "Bottle Size (in ML)",
		optional: true,
		autoform: {
			afFormGroup: {
		  	'formgroup-class': 'col-xs-6 pad0 clearBoth'
		 	},
	     	type: 'select',
	     	options: function()
			{
			 	Meteor.subscribe('getBottleSizes');
			    return bottleSizes.find({}).map(function (c) {
			    return {label: c.sizeValue, value: c.sizeValue};
				});
			},
			onAfterInsert:function(e)
				{
					var a = setInterval(function(){
						if($("select[name='quantity']").length > 0)
						{
							clearInterval(a);
							if($("select[name='quantity']").parent().next(".addBottleSizesDiv").length == 0)
							{
								$("select[name='quantity']").parent().after("<div class='col-xs-6 addBottleSizesDiv padright0'><label>&nbsp;</label><button  id='addBottleSize' class='form-control btn btn-primary '>Add Bottle Size</button></div>");
							}
						}
					},100);
					
				}	
	    }
	},

	storeName: {
		type: String,
	    label: "Store Name",
	    optional: true,
	    autoform: {
	    	afFormGroup: {
			  	'formgroup-class': 'clearBoth'
			 },
	     type: 'select',
	     options: function()
	      {
		     	Meteor.subscribe('getStoreNames');
		        return stores.find({}).map(function (c) {
		        return {label: c.storeName, value: c._id};
	      	});
	      }
	    }
	},

	details: {
		type: String,
		label: "Details",
		optional: true,
    autoform: {
    	afFormGroup: {
		  	 'formgroup-class': 'clearBoth'
		 	},
      type: 'textarea'
    }
	},


  productImage: {
		type: String,
		optional: true,
		autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
	},

	adBanner:{
		type: Boolean,
  	optional: true,
  	defaultValue: true
	},

	cloverId: {
		type: String,
		optional: true,
		autoform: {
      afFormGroup: {
        'formgroup-class': 'hidden'
      },
	  }
	},
	isHidden: {
		type: Boolean,
		optional: true,
		defaultValue: false,
		autoform: {
      afFormGroup: {
        'formgroup-class': 'hidden'
      },
    }
	},
	isStoreDeleted: {
		type: Boolean,
		optional: true,
		defaultValue: false,
		autoform: {
      afFormGroup: {
        'formgroup-class': 'hidden'
      },
    }
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
products.attachSchema(Schemas.productsSchema);
