import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
reviewRecipes = new Mongo.Collection('reviewRecipes');
var Schemas = {};
Schemas.reviewRecipesSchema = new SimpleSchema({
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

	receipeId: {
		type: String,
		optional: false,
		label: "Receipe Id"
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
reviewRecipes.attachSchema(Schemas.reviewRecipesSchema);
