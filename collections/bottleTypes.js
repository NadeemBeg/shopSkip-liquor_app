import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
bottleTypes = new Mongo.Collection('bottleTypes');
var Schemas = {};
Schemas.bottleTypesSchema = new SimpleSchema({
	BottletypeName: {
		type: String,
		optional: false,
		label: "Bottle Type Name"
	},
	bottleTypeImage: {
		type: String,
		optional: true,
		label: "Bottle Type Image"
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
bottleTypes.attachSchema(Schemas.bottleTypesSchema);
