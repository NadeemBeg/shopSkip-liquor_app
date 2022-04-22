import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
bottleSizes = new Mongo.Collection('bottleSizes');
var Schemas = {};
Schemas.bottleSizesSchema = new SimpleSchema({
	sizeValue: {
		type: String,
		optional: false,
		label: "Bottle Size"
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
bottleSizes.attachSchema(Schemas.bottleSizesSchema);
