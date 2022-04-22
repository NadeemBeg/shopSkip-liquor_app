import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
settings = new Mongo.Collection('settings');
var Schemas = {};
Schemas.settingsSchema = new SimpleSchema({
	settingName: {
		type: String,
		optional: false,
		label: "Setting Name"
	},
	settingValue: {
		type: String,
		optional: false,
		label: "Setting Value"
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
settings.attachSchema(Schemas.settingsSchema);
