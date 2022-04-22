import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
brands = new Mongo.Collection('brands');
var Schemas = {};
Schemas.brandsSchema = new SimpleSchema({
	brandName: {
		type: String,
		optional: false,
		label: "Brand Name"
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
brands.attachSchema(Schemas.brandsSchema);
