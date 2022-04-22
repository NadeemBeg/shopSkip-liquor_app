// Template.policy.events({
//     'click #termsLink' : function(e){
//         e.preventDefault();
//         console.log("policy div called from template");
//         $(window).scrollTop(0);
//         $("#termsDiv").slideToggle(1000);
//     },
    
// });

// Template.policy.events({

//     'click #closepolicyDiv': function(e){
//         e.preventDefault();
//         $('#policyDiv').slideUp();
//     }
// });
Template.termscondition.onRendered(function() {
    $("#policyDiv").hide();
    Meteor.subscribe("getContents");
});

Template.termscondition.events({
    'click #closeButtonTerms': function(e){
        e.preventDefault();
        $('#termsDiv').slideUp();
        var a = localStorage.getItem("termsOpen");
        if(a == "true")
        {
            $('#policyDiv').slideDown();
            localStorage.setItem("termsOpen", false);
        }
        
    },

    'click #policyLink' : function(e) {

        e.preventDefault();
        $('#policyDiv').slideDown();
        $('#termsDiv').hide();


    },

    'click #continuebtn' : function(e) {
        e.preventDefault();
        var me = $(e.target);
        if($("#termsOfService").is(":checked")){

              var id = Template.instance().data.id;
              //console.log(" id rcvd iss-->", id);

              Meteor.call('savetermscondition',id, function(error, res){
                if(error)
                {
                    alert("something is wrong-->"+error);
                }
                else { 

                        if(Meteor.user() != null) {
                            Router.go("/dashboard");

                        }
                        else {
                        setTimeout(function(){
                          sAlert.success('<b>Registration was successful. Please verify your email to signin into your account.</b>', {});
                        },500);
                        Router.go("/login");
                    }

                }
              });

        }
        else {

                

            alert("Please Accept Terms Of Service !!")
            me.html('Create Account');
            me.attr("disabled",false);
            return;
        }
    }
    
});

Template.termscondition.helpers({
    tremOfCondition:function(){
       //console.log("sjkdhf");
       var cmsInTrems = cms.findOne({"pageCode": "termsofservice"});
       return cmsInTrems.pageContent;
    },
    privacyPolicy:function(){
        var cmsInTrems = cms.findOne({"pageCode": "privacypolicy"});
       return cmsInTrems.pageContent;
    }
})