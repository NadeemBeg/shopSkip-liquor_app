import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
banner = new Mongo.Collection('banner');
var Schemas = {};
Schemas.bannerSchema = new SimpleSchema({
	bannerImage: {
		type: String,
		optional: false,
		label: "Banner Image"
	},

	textOne: {
		type: String,
		optional: true,
		label: "Text 1"
	},

	textTwo: {
		type: String,
		optional: true,
		label: "Text 2"
	},

	textThree: {
		type: String,
		optional: true,
		label: "Text 3"
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
banner.attachSchema(Schemas.bannerSchema);
