import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
expirationyears = new Mongo.Collection('expirationyears');
var Schemas = {};
Schemas.expirationyearsSchema = new SimpleSchema({
	year: {
		type: String,
		optional: false,
		label: "year"
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
expirationyears.attachSchema(Schemas.expirationyearsSchema);
