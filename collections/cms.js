import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
cms = new Mongo.Collection('cms');
var Schemas = {};
Schemas.cmsSchema = new SimpleSchema({
	pageCode: {
		type: String,
		optional: false,
		label: "Page Code"
	},

	pageTitle: {
		type: String,
		label: "Page Title",
		optional: false
	},

	pageContent: {
		type: String,
		label: "Page Content",
		optional: false,
		 autoform: {
      afFieldInput: {
        type: 'summernote'
      }
    }
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
cms.attachSchema(Schemas.cmsSchema);
