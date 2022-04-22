import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
carts = new Mongo.Collection('carts');
var Schemas = {};
Schemas.cartsSchema = new SimpleSchema({
	productId: {
		type: String,
		optional: false,
		label: "Product Id"
	},

	productQuantity: {
		type: String,
		optional: true,
		label: "Product Quantity"
	},

	totalPrice: {
		type: Number,
		optional: true,
		label: "Total Price"
	},

	userId:{
		type: String,
		optional: false,
		label: "User Id"
	},

	storeId: {
    type: String,
    optional: false,
    label: "Store Id"
  	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
carts.attachSchema(Schemas.cartsSchema);
