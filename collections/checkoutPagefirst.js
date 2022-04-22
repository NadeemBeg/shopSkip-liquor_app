import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
checkoutPagefirst = new Mongo.Collection('checkoutPagefirst');
var Schemas = {};
Schemas.checkoutPagefirstSchema = new SimpleSchema({
	firstName: {
		type: String,
		optional: false,
		label: "First Name"
	},

	lastName: {
		type: String,
		optional: false,
		label: "Last Name"
	},

	emailAddress: {
		type: String,
	  regEx: SimpleSchema.RegEx.Email,
	  optional: false,
		label: "Email Address"
	},

	phoneNumber:{
		type: String,
		optional: false,
		label: "Phone Number"
	},

	userId:{
		type: String,
		optional: false,
		label: "User Id"
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
checkoutPagefirst.attachSchema(Schemas.checkoutPagefirstSchema);
