import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
faqs = new Mongo.Collection('faqs');
var Schemas = {};
Schemas.faqsSchema = new SimpleSchema({
	question: {
		type: String,
		optional: false,
		label: "Question"
	},

	answer: {
		type: String,
		optional: false,
		label: "Answer"
	},

	isCMS: {
		type: Boolean,
		optional: true,
		label: "Is CMS?",
		defaultValue: false

	},

	cmsId: {
		type: String,
		optional: true,
		label: "CMS"
	},	

	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
faqs.attachSchema(Schemas.faqsSchema);
