import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
advSliders1 = new Mongo.Collection('advsliders');
var Schemas = {};
Schemas.advSliders1Schema = new SimpleSchema({
	advSliderImage: {
		type: String,
		optional: false,
		label: "Adv Sliders Image",
		autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
	},

	categoryRadio: {
		type: Boolean,
		optional: true,
		label: "Select Category"
	},

	categoryType: {
    type: String,
    optional: true,
    autoform: {
      type: 'select',
      options: function()
      {
	     	Meteor.subscribe('getCategoryTypes');
	        return categories.find({}).map(function (c) {
	        return {label: c.categoryType, value: c._id};
	      });
      },
    }
  },

  productRadio: {
		type: Boolean,
		optional: true,
		label: "Select Product"
	},

	productsType: {
    type: Array,
    optional: true,
    autoform: {
      type: 'select-multiple',
      options: function()
      {
	     	Meteor.subscribe('getProducts');
	        return products.find({}).map(function (c) {
	        return {label: c.productName, value: c._id};
	      });
      },
    }
  },'productsType.$': {
	  type: String
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
advSliders1.attachSchema(Schemas.advSliders1Schema);

