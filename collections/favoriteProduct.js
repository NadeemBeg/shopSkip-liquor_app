import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
favProducts = new Mongo.Collection('favProducts');
var Schemas = {};
Schemas.favProductsSchema = new SimpleSchema({
	productId: {
    type: String,
    optional: false,
    label: "Product Id"
  },

  userId: {
    type: String,
		optional: false,
		label: "User Id"
  },

  status: {
    type: Boolean,
    optional: false,
    label: "Fav Status"
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
favProducts.attachSchema(Schemas.favProductsSchema);
