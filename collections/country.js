import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
countries = new Mongo.Collection('countries');
var Schemas = {};
Schemas.countriesSchema = new SimpleSchema({
	countryName: {
		type: String,
		optional: false,
		label: "Country Name"
	},
	countryCodeISD: {
	    type: String,
	    optional: false,
    },
	countryCode: {
		type: String,
		optional: false,
		label: "Country Code"
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
countries.attachSchema(Schemas.countriesSchema);
