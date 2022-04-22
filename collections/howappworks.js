import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
howappworks = new Mongo.Collection('howappworks');
var Schemas = {};
Schemas.howappworksSchema = new SimpleSchema({
	title: {
		type: String,
		optional: false,
		label: "Title"
	},

	content: {
		type: String,
		label: "Content",
		optional: false,
		autoform: {
      type: 'textarea'
    }
	},

	appImage: {
		type: String,
		optional: false,
		autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
howappworks.attachSchema(Schemas.howappworksSchema);
