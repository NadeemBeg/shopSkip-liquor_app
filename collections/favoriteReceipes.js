import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
favReceipes = new Mongo.Collection('favReceipes');
var Schemas = {};
Schemas.favReceipesSchema = new SimpleSchema({
	receipeId: {
    type: String,
    optional: false,
    label: "Receipe Id"
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

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
favReceipes.attachSchema(Schemas.favReceipesSchema);
