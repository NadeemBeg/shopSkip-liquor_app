import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
categories = new Mongo.Collection('categories');
var Schemas = {};
Schemas.categoriesSchema = new SimpleSchema({
	categoryType: {
		type: String,
		optional: false,
		label: "Category Type"
	},

	isActive: {
		type: Boolean,
		label: "Is Active",
		optional: false
	},

	categoryImage: {
		type: String,
		optional: false,
		label: "Category Image",
		autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
	},
	showFilter: {
		type: Boolean,
		label: "Show In Filter",
		optional: false,
		defaultValue: true
	},


	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
categories.attachSchema(Schemas.categoriesSchema);
