import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
productTypes = new Mongo.Collection('productTypes');
var Schemas = {};
Schemas.productTypesSchema = new SimpleSchema({
	typeName: {
		type: String,
		optional: false,
		label: "Type Name"
	},
	productTypeImage: {
		type: String,
		optional: true,
		label: "Product Type Image"
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
productTypes.attachSchema(Schemas.productTypesSchema);
