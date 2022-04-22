import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
receipes = new Mongo.Collection('receipes');
PostRecipesSubs = new SubsManager();
var Schemas = {};
Schemas.receipesSchema = new SimpleSchema({

	receipeImage: {
		type: String,
		optional: true,
		autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
	},

	receipeName: {
		type: String,
    optional: true,
    label: "Receipe Name"
	},

	receipeDescription: {
		type: String,
    optional: true,
    autoform: {
      type: 'textarea'
    }
	},

	receipeSteps: {
		type: Array,
		label: "Receipe Steps",
		optional: true
	},

	'receipeSteps.$': {
		type: Object,
		label: "Product",
		optional: true
	},

	'receipeSteps.$.stepId': {
		type: String,
		optional: false,
		label: "Steps Id",
		defaultValue: "",
		autoform: {
      type: 'hidden',
      class: 'randomStepId'
    }
	},
	
	'receipeSteps.$.Instructions': {
		type: String,
		label: "Receipe Making Instructions",
		optional: true,
		autoform: {
      class: 'stepInstructions'
    }
	},

	'receipeSteps.$.productIds': {
		type: String, // previously it was [String]
		optional: true,
    autoform: {
      type: "universe-select",
      afFieldInput: {
        multiple: true
      },
      options: function()
      {
	     	Meteor.subscribe('getProducts');
	        return products.find({}).map(function (c) {
	        return {label: c.productName, value: c._id};
	      });
      }
    }
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
receipes.attachSchema(Schemas.receipesSchema);
