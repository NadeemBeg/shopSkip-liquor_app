Template.termsofservice.onCreated(function() {
	Meteor.subscribe("getContents");
});
Template.termsofservice.onRendered(function() {
	$('#policyDiv').slideUp();
	$("body").css("overflow","auto");
	
	

});
Template.termsofservice.helpers({
	// getContents:function(){
	// 	if(cms.findOne({pageCode: 'termsofservice'}) != null)
	// 	{
	// 		return cms.findOne({pageCode: 'termsofservice'})
	// 	}
	// },
	tremOfCondition:function(){
       //console.log("sjkdhf");
       var cmsInTrems = cms.findOne({"pageCode": "termsofservice"});
       return cmsInTrems.pageContent;
    },
    privacyPolicy:function(){
        var cmsInTrems = cms.findOne({"pageCode": "privacypolicy"});
       return cmsInTrems.pageContent;
    },
	// selectCheckBox:function(){
	// 	var user = Meteor.user();
	// 	user = user._id;
	// 	var checkOrNot = Meteor.users.findOne({_id:user}).profile;
	// 	checkOrNot = checkOrNot.termsofservice;
	// 	console.log("checkOrNot",checkOrNot);
	// 	if (checkOrNot == true){
	// 		return false;
	// 	}
	// 	else{
	// 		return true;
	// 	}
	// }
});
// Template.termsofservice.events({
// 		'click #policyLink' : function(e) {

//         e.preventDefault();
//         $('#policyDiv').slideDown();
//           $('#termsDiv').hide();

//     },

// 	'click #AcceptTerms': function(e)
// 	{
// 		if($("#termsConditions").is(":checked"))
// 		{
// 			var check = $("#termsConditions").is(":checked");
// 			console.log("user",Meteor.user());
// 			Meteor.call("termsofservices", check, Meteor.user(), function(err, res){
// 				if(err){
// 					console.log(err);
// 				}
// 				else{
// 					Router.go("/signup");
// 					console.log("update termsofservice",res);
// 				}
// 			});			
// 		}
// 		else
// 		{
// 			alert("Please accept terms of service !!");
// 			return;
// 		}
// 	}
// });
Template.privacyPolicySection.onCreated(function() {
	Meteor.subscribe("getContents");
});
Template.privacyPolicySection.onRendered(function() {
	$('#policyDiv').slideUp();
	$("body").css("overflow","auto");
	
	

});
Template.privacyPolicySection.helpers({
	// getContents:function(){
	// 	if(cms.findOne({pageCode: 'termsofservice'}) != null)
	// 	{
	// 		return cms.findOne({pageCode: 'termsofservice'})
	// 	}
	// },
	tremOfCondition:function(){
       //console.log("sjkdhf");
       var cmsInTrems = cms.findOne({"pageCode": "termsofservice"});
       return cmsInTrems.pageContent;
    },
    privacyPolicy:function(){
        var cmsInTrems = cms.findOne({"pageCode": "privacypolicy"});
       return cmsInTrems.pageContent;
    },
	// selectCheckBox:function(){
	// 	var user = Meteor.user();
	// 	user = user._id;
	// 	var checkOrNot = Meteor.users.findOne({_id:user}).profile;
	// 	checkOrNot = checkOrNot.termsofservice;
	// 	console.log("checkOrNot",checkOrNot);
	// 	if (checkOrNot == true){
	// 		return false;
	// 	}
	// 	else{
	// 		return true;
	// 	}
	// }
});
  
Template.interestBaseAds.onCreated(function() {
	Meteor.subscribe("getContents");
});
Template.interestBaseAds.onRendered(function() {
	$('#policyDiv').slideUp();
	$("body").css("overflow","auto");
	
	

});
Template.interestBaseAds.helpers({
	// getContents:function(){
	// 	if(cms.findOne({pageCode: 'termsofservice'}) != null)
	// 	{
	// 		return cms.findOne({pageCode: 'termsofservice'})
	// 	}
	// },
	tremOfCondition:function(){
       //console.log("sjkdhf");
       var cmsInTrems = cms.findOne({"pageCode": "termsofservice"});
       return cmsInTrems.pageContent;
    },
    interestBasedAds:function(){
        var cmsInTrems = cms.findOne({"pageCode": "interestbasedads"});
       return cmsInTrems.pageContent;
    },
	// selectCheckBox:function(){
	// 	var user = Meteor.user();
	// 	user = user._id;
	// 	var checkOrNot = Meteor.users.findOne({_id:user}).profile;
	// 	checkOrNot = checkOrNot.termsofservice;
	// 	console.log("checkOrNot",checkOrNot);
	// 	if (checkOrNot == true){
	// 		return false;
	// 	}
	// 	else{
	// 		return true;
	// 	}
	// }
});

Template.returnpolicy.onCreated(function() {
	Meteor.subscribe("getContents");
});
Template.returnpolicy.onRendered(function() {
	$('#policyDiv').slideUp();
	$("body").css("overflow","auto");
	
	

});
Template.returnpolicy.helpers({
	// getContents:function(){
	// 	if(cms.findOne({pageCode: 'termsofservice'}) != null)
	// 	{
	// 		return cms.findOne({pageCode: 'termsofservice'})
	// 	}
	// },
	tremOfCondition:function(){
       //console.log("sjkdhf");
       var cmsInTrems = cms.findOne({"pageCode": "termsofservice"});
       return cmsInTrems.pageContent;
    },
    returnpolicy:function(){
        var cmsInTrems = cms.findOne({"pageCode": "returnpolicy"});
       return cmsInTrems.pageContent;
    },
	// selectCheckBox:function(){
	// 	var user = Meteor.user();
	// 	user = user._id;
	// 	var checkOrNot = Meteor.users.findOne({_id:user}).profile;
	// 	checkOrNot = checkOrNot.termsofservice;
	// 	console.log("checkOrNot",checkOrNot);
	// 	if (checkOrNot == true){
	// 		return false;
	// 	}
	// 	else{
	// 		return true;
	// 	}
	// }
});