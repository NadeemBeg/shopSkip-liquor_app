import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
payments = new Mongo.Collection('payments');
var Schemas = {};
Schemas.paymentsSchema = new SimpleSchema({
	paymentId: {
		type: String,
		optional: false
	},

	requestId:{
		type: String,
		optional: false
	},

	amount:{
		type: String,
		optional: false
	},

	fullResponse:{
		type: String,
		optional: false
	},

	status:{
		type: String,
		optional: false
	},

	isRefunded:{
		type: Boolean,
		optional: true,
		defaultValue: false
	},

	refundResponse:{
		type: String,
		optional: true
	},

	paymentMethod:{
		type: String,
		optional: true
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
payments.attachSchema(Schemas.paymentsSchema);
