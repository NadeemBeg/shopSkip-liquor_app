import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
paymentDetails = new Mongo.Collection('paymentDetails');
var Schemas = {};
Schemas.paymentDetailsSchema = new SimpleSchema({
	CardNumber: {
		type: String,
		optional: false,
		label: "Card Number"
	},

	NameOnCard: {
		type: String,
		optional: false,
		label: "Name on Card"
	},

	expirationMonth: {
		type: Number,
		optional: false,
		label: "Expiration Month"
	},

	expirationYear: {
		type: Number,
		optional: false,
		label: "Expiration Year"
	},

	


	cardType:{
		type: String,
		optional: false,
		label: "Card Type"
	},


	

	userId:{
		type: String
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
paymentDetails.attachSchema(Schemas.paymentDetailsSchema);
