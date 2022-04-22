import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
reviews = new Mongo.Collection('reviews');
var Schemas = {};
Schemas.reviewsSchema = new SimpleSchema({
	reviewerName: {
		type: String,
		optional: false,
		label: "User Name"
	},
	
	summary: {
		type: String,
		optional: false,
		label: "Summary"
	},

	WriteReview: {
		type: String,
		optional: false,
		label: "Write Your Review",
    autoform: {
      type: 'textarea'
    }
	},

	productId: {
		type: String,
		optional: false,
		label: "Product Id"
	},

	reviewRating: {
		type: String,
		optional: false,
		label: "Rating"
	},

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
reviews.attachSchema(Schemas.reviewsSchema);
