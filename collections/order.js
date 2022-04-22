import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

contactDetailsSchema = new SimpleSchema({
 firstName: {
		type: String,
		optional: true,
		label: "First Name"
	},

	lastName: {
		type: String,
		optional: true,
		label: "Last Name"
	}
});

orders = new Mongo.Collection('orders');
var Schemas = {};
Schemas.ordersSchema = new SimpleSchema({
	orderNumber: {
		type: Number,
		optional: true,
		label: "Order Number",
		defaultValue: 1
	},

	userId:{
		type: String,
		optional: true,
		label: "User Id"
	},
	userName:{
		type: String,
		optional: true,
		label: "User Id"
	},
	emailAddress: {
		type: String,
		label: "Email Address",
		regEx: SimpleSchema.RegEx.Email,
    optional: true,
    autoform: {
      type: 'email'
    }
	},

	phoneNumber: {
		type: Number,
		label: "Phone Number",
		optional: true
	},

	productIds: {
		type: Array,
		label: "Products",
		optional: true
	},

	'productIds.$': {
		type: Object,
		label: "Product",
		optional: true
	},

	'productIds.$.id': {
		type: String,
		label: "Product Name",
		optional: true,
		autoform: {
	     type: 'select',
	     options: function()
	      {
		     	Meteor.subscribe('getProducts');
		        return products.find({storeName:Session.get("StoreId")}).map(function (c) {
		        return {label: c.productName, value: c._id};
		      });
	      }
	    }
	},

	'productIds.$.quantity': {
		type: String,
		label: "Quantity",
		optional: true
	},

	'productIds.$.outOfStock': {
		type: Boolean,
		label: "Out Of Stock",
		optional: true
	},

	'productIds.$.isRefunded': {
		type: Boolean,
		label: "Is Refunded?",
		optional: true,
		defaultValue: false
	},

	'productIds.$.refundedQuantity': {
		type: Number,
		label: "Refunded Quantity",
		optional: true
	},

	'productIds.$.alternateProd': {
		type: String,
		label: "Alternate Products",
		optional: true
	},
	'productIds.$.alternateProdId': {
		type: String,
		label: "Alternate Products Id",
		optional: true
	},
	'productIds.$.alternateProdQuantity': {
		type: String,
		label: "Alternate Product Quantity",
		optional: true
	},

	alternateProducts: {
    type: Array,
    optional: true,
    autoform: {
      type: 'select-multiple',
      options: function()
      {
	     	Meteor.subscribe('getProducts');
	        return products.find({}).map(function (c) {
	        return {label: c.productName, value: c._id};
	      });
      },
    }
  },'alternateProducts.$': {
	  type: String
	},

	total: {
		type: String,
		label: "Total",
		optional: true
	},

	discount: {
		type: String,
		label: "Discount",
		optional: true
	},

	tax: {
		type: String,
		label: "Tax",
		optional: true
	},

	sintax: {
		type: String,
		label: "Sin Tax",
		optional: true
	},

	deliveryFees:{
		type: String,
		label: "Sin Tax",
		optional: true
	},

	grossTotal: {
		type: String,
		label: "Gross Total",
		optional: true
	},

	status: {
		type: String,
		label: "Status",
		optional: true
	},
	orderPlaced: {
		type: Boolean,
		label: "Order Placed",
		optional: true,
		defaultValue: false
	},
	paymentMethod: {
		type: String,
		label: "Payment Method",
		optional: true
	},

	paymentStatus: {
		type: String,
		label: "Payment Status",
		optional: true
	},

	barcode: {
		type: String,
		label: "Barcode",
		optional: true
	},

	// receiveTextMessages: {
	// 	type: Boolean,
	// 	label: "Receive Text Messages",
	// 	defaultValue: false,
	// 	optional: true
	// },

	contactDetails: {
	  type: contactDetailsSchema,
	  optional: true
	},

	barcodeOrderValue:{
		type: String,
		label: "Barcode Order Value",
		optional: true,
		defaultValue: "1"
	},

	storeId: {
    type: String,
    optional: false,
    label: "Store Id"
  },

  OrderType: {
  	type: String,
    optional: true,
    label: "Order Type"
  },

  couponCode: {
  	type: String,
    optional: true,
    label: "Coupon Code"
  },

  isOrderConfrmdOrCanclled: {
  	type: Boolean,
		defaultValue: false,
		optional: true
  },

  pickupTime: {
		label: "Store Pickup time",
		type: String,
		optional: true
	},

	deliveryAddress: {
		type: String,
		optional: true
	},

	deliveryAptNumber: {
		type: String,
		optional: true
	},

	preferredMode:{
		type: String,
		optional: true
	},

	

	pickupProductIds: {
		type: Array,
		label: "Products",
		optional: true
	},

	'pickupProductIds.$': {
		type: Object,
		label: "Product",
		optional: true
	},

	'pickupProductIds.$.id': {
		type: String,
		label: "Product Name",
		optional: true,
		autoform: {
	     type: 'select',
	     options: function()
	      {
		     	Meteor.subscribe('getProducts');
		        return products.find({storeName:Session.get("StoreId")}).map(function (c) {
		        return {label: c.productName, value: c._id};
		      });
	      }
	    }
	},

	deliveryProductIds: {
		type: Array,
		label: "Products",
		optional: true
	},

	'deliveryProductIds.$': {
		type: Object,
		label: "Product",
		optional: true
	},

	'deliveryProductIds.$.id': {
		type: String,
		label: "Product Name",
		optional: true,
		autoform: {
	     type: 'select',
	     options: function()
	      {
		     	Meteor.subscribe('getProducts');
		        return products.find({storeName:Session.get("StoreId")}).map(function (c) {
		        return {label: c.productName, value: c._id};
		      });
	      }
	    }
	},

	connectedOrderId: {
		type: String,
		optional: true
	},

	notifiedCustomer: {
		type: Boolean,
		label: "Notified Customer",
		defaultValue: false,
		optional: true
	},

	dueAmount: {
		type: String,
		label: "Due Amount",
		optional: true
	},

	refundAmount: {
		type: String,
		label: "Refund Amount",
		optional: true
	},

	createdAt: {
		type: Date,
		optional: true,
		defaultValue: new Date()
	}
});
orders.attachSchema(Schemas.ordersSchema);
