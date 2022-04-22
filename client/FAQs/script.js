Template.faq.onCreated(function() {
  Meteor.subscribe('getfaqs');
  Meteor.subscribe('getContents');
});
Template.faq.onRendered(function() {
	
});
Template.faq.helpers({
  FAQs: function(){
    return faqs.find().fetch();
  },
  getCMSContent: function(rec)
  {
  	var CMSID = rec.cmsId;
  	var CMSRecord = cms.find({
  		"_id": CMSID
  	});
  	if(CMSRecord.count() > 0)
  	{
  		return cms.findOne({
	  		"_id": CMSID
	  	});
  	}
  }
});
Template.faq.events({
});

