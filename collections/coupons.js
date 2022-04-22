import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
coupons = new Mongo.Collection('coupons');
var Schemas = {};
Schemas.couponsSchema = new SimpleSchema({
	couponName: {
		type: String,
		optional: false,
		label: "Coupon Name"
	},
	
	productName: {
		type: String,
		label: "Product Name",
		optional: true,
		autoform: {
	    type: 'select',
	    options: function()
      {
	     	Meteor.subscribe('getProducts');
	        return products.find({}).map(function (c) {
	        return {label: c.productName, value: c._id};
	      });
      }
	  }
	},

	brandName: {
		type: String,
		label: "Brand Name",
		optional: true,
		autoform: {
     type: 'select',
     options: function()
      {
	     	Meteor.subscribe('getBrandNames');
	        return brands.find({}).map(function (c) {
	        return {label: c.brandName, value: c._id};
	      });
      }
    }
	},

	couponType: {
    type: String,
    optional: true,
    autoform: {
      type: 'select-radio-inline',
       options: function(){return[{label:"Percent",value:"percent"},{label:"Amount",value:"amount"}]}
    }
  },
   
  discount: {
		type: Number,
		optional: false,
		label: "Discount"
	},
	
	validTo: {
		type: Date,
		optional: false,
		defaultValue: new Date(),
		 autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker",
        dateTimePickerOptions: {
        	pickTime: false
        }
      }
    }
	},

	validFrom: {
		type: Date,
		optional: false,
		defaultValue: new Date(),
		 autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker",
        dateTimePickerOptions: {
        	pickTime: false
        }
      }
    }
	},

	description: {
		type: String,
		optional: false,
		label: "Description"
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
coupons.attachSchema(Schemas.couponsSchema);
