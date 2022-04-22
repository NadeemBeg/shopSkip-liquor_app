import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
expirationmonths = new Mongo.Collection('expirationmonths');
var Schemas = {};
Schemas.expirationmonthsSchema = new SimpleSchema({
	month: {
		type: String,
		optional: false,
		label: "month"
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
expirationmonths.attachSchema(Schemas.expirationmonthsSchema);
