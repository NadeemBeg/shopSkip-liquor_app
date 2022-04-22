import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


  

var typeList = new ReactiveVar([]);
var brandList = new ReactiveVar([]);

var searchArray = new ReactiveVar([]);

var rotation = {
  1: 'rotate(0deg)',
  3: 'rotate(180deg)',
  6: 'rotate(90deg)',
  8: 'rotate(270deg)'
};
function _arrayBufferToBase64( buffer ) {
    var binary = ''
    var bytes = new Uint8Array( buffer )
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] )
    }
    return window.btoa( binary );
  }
  function orientation(file, callback) {
  var fileReader = new FileReader();
  fileReader.onloadend = function() {
    var base64img = "data:"+file.type+";base64," + _arrayBufferToBase64(fileReader.result);
    var scanner = new DataView(fileReader.result);
    var idx = 0;
    var value = 1; // Non-rotated is the default
    if(fileReader.result.length < 2 || scanner.getUint16(idx) != 0xFFD8) {
      // Not a JPEG
      if(callback) {
        callback(base64img, value);
      }
      return;
    }
    idx += 2;
    var maxBytes = scanner.byteLength;
    while(idx < maxBytes - 2) {
      var uint16 = scanner.getUint16(idx);
      idx += 2;
      switch(uint16) {
        case 0xFFE1: // Start of EXIF
          var exifLength = scanner.getUint16(idx);
          maxBytes = exifLength - idx;
          idx += 2;
          break;
        case 0x0112: // Orientation tag
          // Read the value, its 6 bytes further out
          // See page 102 at the following URL
          // https://www.kodak.com/global/plugins/acrobat/en/service/digCam/exifStandard2.pdf
          value = scanner.getUint16(idx + 6, false);
          maxBytes = 0; // Stop scanning
          break;
      }
    }
    if(callback) {
      callback(base64img, value);
    }
  }
  fileReader.readAsArrayBuffer(file);
};
function anim()
{
  console.log("teeeest");
  /*!
 * jQuery lightweight Fly to
 * Author: @ElmahdiMahmoud
 * Licensed under the MIT license
 */

// self-invoking
;(function ($, window, document, undefined) {
    $.fn.flyto = function ( options ) {
        
    // Establish default settings
        
        var settings = $.extend({
            item      : '.flyto-item',
            target    : '.flyto-target',
            button    : '.flyto-btn',
            shake     : true
        }, options);
        
        
        return this.each(function () {
            var 
                $this    = $(this),
                flybtn   = $this.find(settings.button),
                target   = $(settings.target),
                itemList = $this.find(settings.item);
            
        flybtn.on('click', function () {
            var _this = $(this),
                eltoDrag = _this.parent().parent().find("img").eq(0);
        if (eltoDrag) {
            var imgclone = eltoDrag.clone()
                .offset({
                top: eltoDrag.offset().top,
                left: eltoDrag.offset().left
            })
                .css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': eltoDrag.height() /2,
                    'width': eltoDrag.width() /2,
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                    'top': target.offset().top + 10,
                    'left': target.offset().left + 15,
                    'height': eltoDrag.height() /2,
                    'width': eltoDrag.width() /2
            }, 1000, 'easeInOutExpo');
            
            if (settings.shake) {
              console.log("target", target);
                setTimeout(function () {
                    target.effect("shake", {
                        distance: 21,
                        direction: "left",
                        times: 1
                    }, 200);
                }, 1500);
            }

        
            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
        });
        });
    }
})(jQuery, window, document);
}
Meteor.startup(() => {

  //console.log("teste");

  anim();

  if(Meteor.isCordova)
  {
    document.addEventListener("deviceready", onDeviceReady, false);
  }

  function onDeviceReady()
  {
    //initAd();     
    document.addEventListener("backbutton", onBackKeyDown, false);
        //console.log("device.model",device.model);
  }
  //display the banner
  function showBannerFunc(){
      window.plugins.AdMob.createBannerView();
  }

  //Listen for authorization success
  document.addEventListener('AppleIDSignInOnSuccess', (data) => {
       //handle successful response
    console.log("AppleIDSignInOnSuccess", data);
    Meteor.call("SignInUsingIOS", data.detail, function(err, res){
        if(err)
        {
          alert(err.reason);
        }
        else
        {
          var response = res;
          if(response.userAlreadyFound && (response.changePassword == 0))
          {
            Accounts.loginWithImpersonate(response.token, function(error, res){
            if(error)
            {
              console.log(error.reason);
            }
            else
            {
              Router.go("/");
            }
          });
          }
          else
          {
            Meteor.loginWithPassword({"username":response.userDetails.username.trim()}, "iospassword", function(error){
            if(error)
            {
              console.log(error.reason);
            }
            else
            {
              Router.go("/");
            }
          });
          }
        }
    });
  });
  //Listen for authorization failures
  document.addEventListener('AppleIDSignInOnFailure', (error) => {
       //handle error.
       console.log("AppleIDSignInOnFailure", error);
  });

  function initAd(){
        var ad_units = {
        ios : {
              banner: 'ca-app-pub-4219829707896921/2786607330' //3940256099942544/6300978111
          },
          android : {
            banner: 'ca-app-pub-4219829707896921/8355107715'
          }
        };
        console.log(ad_units);
        if(navigator.platform.match(/(iPad|iPhone|iPod)/g))
        {
          var admobid = ad_units.ios;
        }
        else
        {
          var admobid = ad_units.android;
        }
        console.log(admobid);
        //console.log("admobid", admobid);
        window.plugins.AdMob.setOptions( {
          publisherId: admobid.banner,
          isTesting: false,
          autoShow: true
        });
        registerAdEvents();
        window.plugins.AdMob.createBannerView();
}
//functions to allow you to know when ads are shown, etc.
function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){
           console.log("onReceiveAd");
        });
        document.addEventListener('onFailedToReceiveAd', function(data){
           console.log(data);
        });
        document.addEventListener('onPresentAd', function(){
           console.log("onPresentAd");
      });
        document.addEventListener('onDismissAd', function(){
         console.log("onDismissAd");
       });
        document.addEventListener('onLeaveToAd', function(){
           console.log("onLeaveToAd"); 
      });
        document.addEventListener('onReceiveInterstitialAd', function(){ 
          console.log("onReceiveInterstitialAd");
      });
        document.addEventListener('onPresentInterstitialAd', function(){ 
          console.log("onPresentInterstitialAd");
      });
        document.addEventListener('onDismissInterstitialAd', function(){
           console.log("onDismissInterstitialAd");
          window.plugins.AdMob.createBannerView();
        });
    }
  function onBackKeyDown(e) {
    e.preventDefault();
    if(Meteor.user() == null)
    {
      if(Router.current().url == "/login")
      {
        var closeAppCormfirm = confirm("Are you sure you want to close the app?");
        if(closeAppCormfirm)
        {
          navigator.app.exitApp();
        }
      }
      else
      {
        Router.go('/login');
        return;
      }
    }
    else
    {
      if(Router.current().url == "/dashboard")
      {
        var closeAppCormfirm = confirm("Are you sure you want to close the app?");
        if(closeAppCormfirm)
        {
          navigator.app.exitApp();
        }
      }
      else
      {
        if($(".column.backIcon").length > 0)
        {
          $(".backButton").click()
        }
        else
        {
          return false;
        }
      }
    }
  }
  Push.Configure({
    android: {
      senderID: 125142564517,
      alert: true,
      badge: true,
      sound: true,
      vibrate: true,
      clearNotifications: true
      // icon: '',
      // iconColor: ''
    },
    ios: {
      alert: true,
      badge: true,
      sound: true
    }
  });
  Push.addListener('message', function(notification) {
      //console.log(notification);
      if(typeof notification.payload.orderNotification !== "undefined")
      {
        if(notification.payload.orderNotification)
        {
          Router.go("/receiptPage/" + notification.payload.orderId);
          return;
        }
      }
  });
  Push.addListener('startup', function(notification) {
      if(typeof notification.payload.orderNotification !== "undefined")
      {
        if(notification.payload.orderNotification)
        {
          Router.go("/receiptPage/" + notification.payload.orderId);
          return;   
        }
      }
  });
  GoogleMaps.load({ v: '3', key: 'AIzaSyCqgWP1rJWs5VZiMe5d4rByQFipGQXB-D0', libraries: 'geometry,places' }); //chng 3 july
	sAlert.config({
    effect: 'jelly',
    position: 'top',
    timeout: 10000,
    html: true,
    onRouteClose: true,
    stack: true,
    // or you can pass an object:
    // stack: {
    //     spacing: 10 // in px
    //     limit: 3 // when fourth alert appears all previous ones are cleared
    // }
    offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
    beep: false,
    // examples:
    // beep: '/beep.mp3'  // or you can pass an object:
    // beep: {
    //     info: '/beep-info.mp3',
    //     error: '/beep-error.mp3',
    //     success: '/beep-success.mp3',
    //     warning: '/beep-warning.mp3'
    // }
    onClose: _.noop //
    // examples:
    // onClose: function() {
    //     /* Code here will be executed once the alert closes. */
    // }
  });
  $(".topPortion").scroll(function() {
    console.log("testtt");
     if(Router.current().route._path == "/products")
     {
      var scrollVal = parseInt($(window).scrollTop() + $(window).height());
      var scrollVal1 = parseInt($(document).height());
      var scrollFinal = scrollVal1 - scrollVal;
      if(scrollFinal < 100) 
      {
        if($(".listingContainer").find("img.loaderImageClass").length == 0)
        {
          $(".listingContainer").append('<div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12"><img src="/images/loader.gif" class="loaderImageClass"/></div>');  
        }
        
        var currentVal  = parseInt(Session.get("listingPage"));
        currentVal  = currentVal + 10;
        Session.set("listingPage",currentVal);
        $(".listingContainer").find("img.loaderImageClass").parent().remove();
        var storeId = Session.get("storeId");
        var handle = PostSubs.subscribe('getProducts', storeId, Session.get("listingPage"));
        self.ready.set(handle.ready());
      }
     }
     else if(Router.current().route._path == "/recipesList")
     {
      var scrollVal = parseInt($(window).scrollTop() + $(window).height());
      var scrollVal1 = parseInt($(document).height());
      var scrollFinal = scrollVal1 - scrollVal;
      
     }
    
    
  });
  

  
});
//console.log();
Template.menu.onRendered(function() {
  $("#ui-datepicker-div").hide();
  setTimeout(function(){
    Toast.options = {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-center',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
      "preventDuplicates": true,
      timeOut: 1200,
    };
  /**
   * sidebarEffects.js v1.0.0
   * https://www.codrops.com
   *
   * Licensed under the MIT license.
   * https://www.opensource.org/licenses/mit-license.php
   * 
   * Copyright 2013, Codrops
   * https://www.codrops.com
   */
   var SidebarMenuEffects = (function() {

    function hasParentClass( e, classname ) {
      if(e === document) return false;
      if( classie.has( e, classname ) ) {
        return true;
      }
      return e.parentNode && hasParentClass( e.parentNode, classname );
    }

    // https://coveroverflow.com/a/11381730/989439
    function mobilecheck() {
      var check = false;
      (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }

    function init() {

      var container = document.getElementById( 'st-container' ),
        buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects > .menu-open' ) ),
        // event type (if mobile use touch events)
        eventtype = mobilecheck() ? 'touchstart' : 'click',
        resetMenu = function() {
          classie.remove( container, 'st-menu-open' );
          classie.remove( container, 'st-effect-3' );
          classie.add( container, 'page-wrapper' );
          $("body").css("overflow","auto");
        },
        bodyClickFn = function(evt) {
          /*classie.remove( container, 'st-menu-open' );
          classie.remove( container, 'st-effect-3' );
          classie.add( container, 'page-wrapper' );
          $("body").css("overflow","auto");*/
          if( !hasParentClass( evt.target, 'st-menu' ) ) {
            resetMenu();
            document.removeEventListener( eventtype, bodyClickFn );
          }
        };

      buttons.forEach( function( el, i ) {
        var effect = el.getAttribute( 'data-effect' );

        el.addEventListener( eventtype, function( ev ) {
          ev.stopPropagation();
          ev.preventDefault();
          window.scrollTo(0,0);
          container.className = 'st-container'; // clear
          classie.add( container, effect );
          setTimeout( function() {
            classie.add( container, 'st-menu-open' );
          }, 25 );
          document.addEventListener( eventtype, bodyClickFn );
        });
      } );

    }

    init();

  })();

  /*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */



( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



$(document).ready(function(){
    $(".menu-close").click(function(){
        $("#st-container").removeClass("st-menu-open");
        $("#st-container").removeClass("st-effect-3");
        $("#st-container").addClass("page-wrapper");
        $("body").css("overflow","auto");
    });
});

//paymnet tab
$(document).ready( function() {
    $('#mypayment').carousel({
      interval:false
  });
  
  var clickEvent = true;
  $('#mypayment').on('click', '.nav a', function() {
      clickEvent = true;
      $('.nav li').removeClass('active');
      $(this).parent().addClass('active');    
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.nav').children().length -1;
      var current = $('.nav li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.nav li').first().addClass('active');  
      }
    }
    clickEvent = true;
  });

});


/* Home page CSS BOF */


}, 1000);

});

Template.menu.events({
  'click .rotated':function(e){
    e.preventDefault();
    // var me = $(e.target);
    // me.attr("disabled",true);
    var hiddenVar = parseInt($("#hiddenVar").val());
    hiddenVar +=  90;
    //$('#profileImage').css('transform', "rotate("+hiddenVar+"deg)");
    $("#hiddenVar").val(hiddenVar);
    Meteor.call("hiddenVarValueStore", Meteor.userId(), hiddenVar.toString(),function(err,res){
      if(err){
        console.log("hiddenVarValueStore err",err);
      }
      else{
        console.log("hiddenVarValueStore res",res);
        // me.attr("disabled",false);
      }
    });
  },
  'change #ProfilePic': function(evt) {
    if(evt.target.files.length > 0)
    {
      var f = evt.target.files[0]; 
      selectedProfilePic = [];
      selectedProfilePic.push(f);
          if (f) {
            var r = new FileReader();
            r.onload = function(e) { 
              var contents = e.target.result;
              $("#profileImageMenu").attr("src",contents);
              if(selectedProfilePic.length > 0)
              {
                Cloudinary.upload(selectedProfilePic[0],{}, function(err, img) {
                  if(err)
                  {
                    alert(err.reason);
                   
                  }
                  else
                  {
                    //console.log("img.type cloudinary",img.type); 
                    Meteor.call("updateProfilePic", Meteor.userId(), img.url,function(err,res){
                    if(res)
                    {
                      Toast.success("Profile Image updated successfully.");

                      // orientation(selectedProfilePic[0], function(base64img, value) {
                      //   // $('#placeholder1').attr('src', base64img);
                      //   console.log(rotation[value]);
                      //   var rotated = $('#profileImageMenu').attr('src', base64img);
                      //   if(Meteor.isCordova)
                      //       {
                      //         if(device.manufacturer == "samsung" || device.manufacturer == "sony")
                      //         {
                                
                      //           rotated.css('transform', "rotate(90deg)");
                      //           // console.log("value",rotated.css('transform', rotation[value]));
                              
                      //         }
                      //         else
                      //         {
                      //           rotated.css('transform', rotation[value]);
                      //         }
                      //       }
                      //       else
                      //       {
                      //         rotated.css('transform', rotation[value]);
                      //       }
                        
                      // });
                    }
                    });
                  }
                });
              }
            }
            r.readAsDataURL(f);
          } else { 
            Toast.info("Failed to load file");
          } 
        }
      },
  'click #testProduct':function(e){
    e.preventDefault();
    Router.go("/products");
  },
  'click #user_sign_out': function(e) {
      e.preventDefault();
    new Confirmation({
      message: "Are you sure you want to logout?",
      title: "Confirmation",
      cancelText: "Cancel",
      okText: "Ok",
      success: true, // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    }, function (ok) {
      if(ok)
      {
        Router.go("/login");
        Meteor._localStorage.removeItem('Meteor.loginToken');
        Meteor._localStorage.removeItem('Meteor.loginTokenExpires');
        Meteor._localStorage.removeItem('Meteor.userId');
        Meteor.logout(function(err,res){
          if(err)
          {
            sAlert.error(err.reason);
            
          }
          else
          {
            sAlert.success("You have been successfully logged out!!!!");
          }
        });
        
      }
      else
      {
        if($(".pc-dimmer.pc-leave").length > 0)
          $(".pc-dimmer.pc-leave").remove();
        if($(".pc-container.pc-enter").length > 0)
          $(".pc-container.pc-enter").remove();
      }
    });
    
  },
  
  'click #change_password': function(e) {
    e.preventDefault();
    Router.go("/changepassword");
  }
});

Template.menu.helpers({
  getRotation: function()
  {
    var userDEtails = Meteor.user();
    if(typeof userDEtails !== "undefined")
    {
      if(typeof userDEtails.profile.profileImageOrientation !== "undefined")
      {
        return userDEtails.profile.profileImageOrientation;
      }
      else
      {
        return "0";
      }
    }
    else
    {
      return "0";
    }
  },
  current_user_name: function(){
    try{ return Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName; } catch(e){}
  },
  userImage: function(){
    if(typeof Meteor.user() !== "undefined")
    {
      if(Meteor.user() != null)
      {
        if(typeof Meteor.user().profile !== "undefined")
        {
          if(typeof Meteor.user().profile.profileImage !== "undefined")
          {
            if(Meteor.user().profile.profileImage == "")
            {
              return "/images/user-thumbnail.jpg";
            }
            else
            {
              var url1 = Meteor.user().profile.profileImage;
              //console.log("urls mainjs", url1);
              var url = url1.replace("http://","https://"); 
              //console.log("urls mainjs", url);
                  // var fileName11 = url;
              if(typeof Meteor.user().profile.profileImageOrientation !== "undefined")
                {
                   url = url.split("/upload");
                  url = url[0]+"/upload/a_"+Meteor.user().profile.profileImageOrientation+url[1];
                }
                url = url.replace("http://","https://");
                return url;
            }
          }
          else
          {
            return "/images/user-thumbnail.jpg";
          }
        }
        else
          {
            return "/images/user-thumbnail.jpg";
          }
      }
    }
    else
        {
          return "/images/user-thumbnail.jpg";
        }
  },
  lastReceipeId: function(){
    a=receipes.findOne({}, { sort: { createdAt: -1}}, { limit: 1});
    if(a)
    {
      return  a._id;
    }
  }
});



/*Template.connectionOverlay.helpers({
  isWaiting: function() {
    return Meteor.status().status == 'waiting';
  },
  isConnecting: function() {
    return Meteor.status().status == 'connecting';
  },
  isOffline: function() {
    return Meteor.status().status == 'offline';
  },
  isConnected: function() {
    return Meteor.status().status == 'connected';
  },
  waitingDuration: function() {
    var s = Math.round((Meteor.status().retryTime - Chronos.now()) / 1000);
    if(typeof s !== "undefined")
    {
      if(s == 1 || s == 0)
      {
        return '1 second';
      }
      else
      {
        '#' + s + ' seconds';
      }
    }
  }
});
Template.connectionOverlay.events({
  'click a': function(e) {
    e.preventDefault();
    Meteor.reconnect();
  }
});*/
Template.topHeader.onCreated(function(){
  this.scanVar = new ReactiveVar([]);
  Meteor.subscribe('getProductTypes');
    Meteor.subscribe('getBottleSizes');
    Meteor.subscribe('getBottleTypes');
})
Template.topHeader.onRendered(function(){

  $('#searchBoxList').hide();

  if(Router.current().url == "/dashboard"){
    var typeSession = Session.get("FilterArray");
    if(typeof typeSession.brandName != undefined){
      delete typeSession["brandName"];
      Session.set("FilterArray", typeSession);
    }
    if(typeof typeSession.productType !=undefined){
      delete typeSession["productType"];
      Session.set("FilterArray", typeSession);
    }
    if(typeof typeSession.categoryType !=undefined){
      delete typeSession["categoryType"];
      Session.set("FilterArray", typeSession);
    }
  }

  
  
});
Template.topHeader.helpers({
  allCategories: function(){
   return categories.find({"showFilter":true}).fetch();
  },
  isSelectedCategory: function(catId)
  {
    var selectCategory = Session.get("FilterArray");
    if(typeof selectCategory !== "undefined")
    {
      if(typeof selectCategory.categoryType == "undefined")
      {
        return "";
      }
      else
      {
        if(selectCategory.categoryType == null)
        {
          return "";
        }
        else
        { 
          if(selectCategory.categoryType == catId)
          {
            return "selected";
          }
          else
          {
            return "";
          }
        }
      }
    }
  },
  allProductTypes: function(){
    //console.log("sir ");
    var selectCategory = Session.get("FilterArray");
    if(typeof selectCategory !== "undefined")
    {
      //console.log("INININ");
      Meteor.call("productTypesListGet", selectCategory.categoryType, function(err, res){
        if(err){
          console.log(err);
        }
        else{
          //console.log("hjgfhjfhj",res);
          if(JSON.stringify(typeList.get()) !== JSON.stringify(res))
          {
            typeList.set(res);
          }
        }        
      }); 
      return typeList.get(); 
    }
    
  },
  isSelectedProduct: function(ProTypeId)
  {
    // console.log("ProTypeId",ProTypeId);
    var selectCategory = Session.get("FilterArray");
    if(typeof selectCategory.productType == "undefined")
    {
      return "";
    }
    else
    {
      if(selectCategory.productType == null)
      {
        return "";
      }
      else
      {
        if(selectCategory.productType == ProTypeId)
        {
          return "selected";
        }
        else
        {
          return "";
        }
      }
    }
  },
  allBrandsTypes: function(){
    // var html ="";
    // html += '<option value="">Brand Type</option>';
    var selectCategory = Session.get("FilterArray");
    if(typeof selectCategory !== "undefined")
    {
      Meteor.call("productBrandNameList", selectCategory.categoryType, selectCategory.productType, function(err, res){
        if(err){
          console.log(err);
        }
        else{
          //console.log("barands",res);        
          // if(res.length>0){
          //   for(var i =0; i< res.length; i++){
          //     html += '<option isSelectedBrand="selected" value='+res[i]._id+'>'+res[i].brandName+'</option>';
          //   }
          // }
          // return $("#brand").html(html);
            if(JSON.stringify(brandList.get()) !== JSON.stringify(res))
            {
              brandList.set(res);
            }
        }
        
      }); 
      return brandList.get(); 
    }
  },
  isSelectedBrand: function(brandId)
  {
    //console.log("brandId",brandId);
    var selectBrandType = Session.get("FilterArray");
    //console.log("selectBrandType",selectBrandType.brandName);
    if(typeof selectBrandType.brandName == "undefined")
    {
      //console.log("undefined brand");
      return "";             
    }
    else
    {
      if(typeof selectBrandType.brandName == null)
      {
        //console.log("Null brand");
        return "";
      }
      else
      {
        if(selectBrandType.brandName == brandId)
        {
          //console.log("brand selected");
          return "selected";
        }
        else
        {
          return "";
        }
      }
    }
  },
  cartCount: function() {
    var totalProduct = 0;
    var count = carts.find({userId: Meteor.userId()}).fetch();
      for(i=0; i<count.length; i++){
        // console.log("carts",count[i].productQuantity);
        totalProduct +=Number(count[i].productQuantity);
        // console.log("totalProduct",totalProduct);
      }
      if(totalProduct > 99)
      {
        totalProduct = "99+"
      }
      return totalProduct;
    },
  selectedStoreName: function(){
      var currentStore = Session.get("storeId");
      if(currentStore)
      {
        var a = stores.findOne({_id: currentStore});
        if(a !== null)
        {
          a = a.storeName;
          return a;
        }
      }
      else
      {
        return "All Stores"
      }
    },
  settings: function() {
    var currentStore = Session.get("storeId");
    if(currentStore)
    {
      return {
        position: "bottom",
        limit: 5,
        rules: [
        {
          collection: products,
          field: "productName",
          template: Template.productList,
          selector: function(match){
            currentStore = Session.get("storeId");
            regex = new RegExp(match, 'i');
            return { $and: [ {storeName: currentStore}, {'productName': regex}] }
          }
        }
        ]
      };
    }
    // else{
    //   return {
    //   position: "bottom",
    //   limit: 5,
    //   rules: [
    //     {
    //       collection: brands,
    //       field: "brandName",
    //       template: Template.productList,
    //         selector: function(match){
    //           regex = new RegExp(match);

    //           var text = String(regex);
    //           var text = text.replace("/", "");
    //           text = text.replace("/", "");
    //           console.log("regex",text);
    //           var brandID = brands.findOne({brandName:text});                
    //           console.log("brandID",brandID);
    //           if(brandID !== null){
    //             var productNamess = products.find({"brandName": brandID._id}).fetch();
    //             console.log("productName with brand name filter", productNamess);
    //             var productNames = [];
    //             for(var i = 0; i< productNamess.length; i++){
    //               productNames.push(productNamess[i]);
    //             }
    //             return productNames;
    //           }
    //           else
    //           {
    //             return {
    //             position: "bottom",
    //             limit: 5,
    //             rules: [
    //               {
    //                 collection: products,
    //                 field: "productName",
    //                 template: Template.productList
    //               }]
    //             };
    //           }                
    //         }
    //       }
    //     ]
    //   };
    // }
    else
    {
      return {
        position: "bottom",
        limit: 5,
        rules: [
        {
          collection: products,
          field: "productName",
          template: Template.productList
        }]
      };
    }
  },
  isCordova: function()
  {
    return Meteor.isCordova;
  },
  getTitle: function() {
    var titleMappingArray = {
      "/dashboard": "Home",
      "/accountdetails": "Account Details",
      "/profiles": "User Profile",
      "/changepassword": "Change Password",
      "/products": "Products List",
      "/ratings/:_id?": "Reviews",
      "/productDetails/:_id?": "Product Detail",
      "/cart/:_id?": "Your Cart",
      "/storePage": "Stores List",
      "/storePage/map": "Stores Map",
      "/favorites": "Favorite Products",
      "/favoriteReceipes": "Favorite Recipes",
      "/orderHistory": "Order History",
      "/receiptPage/:_id?": "Receipt",
      "/coupons": "Coupons",
      "/receipePage/:_id?": "Recipe Page",
      "/ratingsReceipes/:_id?": "Recipe Reviews",
      "/howappworks": "How App Works",
      "/settings": "Settings",
      "/faq": "FAQ",
      "/notification": "Notifications",
      "/notification/:_id?": "Notifications",
      "/checkoutPagefirst/:_id?": "Checkout",
      "/checkoutPageSecond/:_id?": "Checkout",
      "/checkoutPagethird/:_id?": "Checkout",
      "/successPage/:_id?": "Success",
      "/storeSuccessPage:_id?": "Success",
      "/checkoutPageforth/:_id?": "Checkout",
      "/checkoutPagefifth/:_id?": "Checkout",
      "/topPickProducts": "Top Picks",
      "/bannerproducts/:_id": "Banner Products",
      "/recipesList": "Recipes",
      "/myChoiceProduct/:_id?/ProductsId/:_id2?": "My Choice",
      "/chooseProductDetails/:_id?": "Product Details",
      "/posterproducts/:_id?":"Poster Products",
      "/searchResult/:_id":"Search Result",
      "/termsofservice":"Terms Of Service",
      "/privacypolicy":"Privacy Policy",
      "/interestbasedads":"Interest Based Ads.",
      "/returnpolicy":"Return Policy",
      "/howAreWeDoing":"How Are We Doing",
      "/ratings/:_id": "Ratings",
      "/advSliderProducts/:_id": "Products",
      "/liquorProduct": "Liquor Product",
      "/delivery-checkout-step1/:_id?": "Checkout",
      "/trackOrder/:_id?": "Track Order",
      "/full-menu": "Account Settings",
      "/search-category": "Search",
      "/search-subcategory/:_id": "Search",
      "/search-subcategoryproducts/:_id/:_id1": "Search"
    } 
    var getPageUrl = Router.current().route._path;
    // console.log(titleMappingArray.getPageUrl);
    if(getPageUrl == "/")
    {
      var isFirst = localStorage.getItem("newlyInstalled");
      if(isFirst == null)
      {
        Session.set("currentPageTitle","How App Works");
      }
      else if(isFirst == "Yes")
      {
        Session.set("currentPageTitle","How App Works");
      }
    }
    else
    {
      Session.set("currentPageTitle",titleMappingArray[getPageUrl]);
    }
    return Session.get("currentPageTitle");
  },
  FilterShowHide: function(){
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/dashboard'){
     return true;
    }
  },
  storeIcon: function() {
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/dashboard'){
     return true;
    }
  },
  cartIcon: function(){
    var getPageUrl = Router.current().route._path;
    // console.log("cartIcon getPageUrl",getPageUrl);
    if(getPageUrl == '/liquorProduct' || getPageUrl == '/accountdetails' || getPageUrl == '/profiles' || getPageUrl == '/notification' || getPageUrl == '/faq' || getPageUrl == '/settings' || getPageUrl == '/ratingsReceipes/:_id' || getPageUrl == '/receipePage/:_id?' || getPageUrl == '/coupons' || getPageUrl == '/receiptPage/:_id?' || getPageUrl == '/favoriteReceipes' || getPageUrl == '/favorites' || getPageUrl == '/productDetails/:_id?' || getPageUrl == 'ratings/:_id?' || getPageUrl == '/products' || getPageUrl == '/changepassword' || getPageUrl == '/dashboard' || getPageUrl == '/successPage/:_id?' || getPageUrl == '/cart/:_id?' || getPageUrl == '/topPickProducts' || getPageUrl ==  '/notification/:_id?' || getPageUrl == '/bannerproducts/:_id' || getPageUrl == '/recipesList' || getPageUrl == "/posterproducts/:_id?" || getPageUrl == "/searchResult/:_id" || getPageUrl == "/howAreWeDoing" || getPageUrl == "/storeSuccessPage:_id?" || getPageUrl == "/ratings/_id" || getPageUrl == "/advSliderProducts/:_id" || getPageUrl == "/trackOrder/:_id?"){
     return true;
    }
    else if(getPageUrl == "/howappworks" || getPageUrl == "/termsofservice")
      {
       if(!Meteor.userId())
       {
         return false;
       }
       else
       {
         return true;
       }
    }
  },
  HomeIcon: function(){
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/orderHistory'){
      return true;
    }
  },
  MapIcon: function(){
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/storePage'){
      return true;
    }
  },
  BackMapIcon: function(){
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/storePage/map'){
      return true;
    }
  },
  sreachBar: function(){
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/topPickProducts' || getPageUrl == '/liquorProduct' || getPageUrl == '/favorites' || getPageUrl == '/productDetails/:_id?' || getPageUrl == '/products'  || getPageUrl == '/dashboard' || getPageUrl == '/myChoiceProduct/:_id?/ProductsId/:_id2?' || getPageUrl == "/searchResult/:_id"){
     return true;
    }
  },
  cartPage: function(){
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/cart/:_id?'){
      return false;
    }
  },
  menuIcon: function(){
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/chooseProductDetails/:_id?'){
      return false;
    }
    else if(getPageUrl == "/howappworks" || getPageUrl == "/termsofservice" || getPageUrl == "/")
      {
       if(!Meteor.userId())
       {
         return false;
       }
       else
       {
         return true;
       }
    }
    else{
      return true;
    }
  },
  backIcon: function(){
    var getPageUrl = Router.current().route._path;
    console.log("getPageUrl", getPageUrl);
    var dontShow = [
      "/dashboard",
      "/checkoutPagefirst/:_id?",
      "/checkoutPageSecond/:_id?",
      "/checkoutPagethird/:_id?",
      "/successPage/:_id?",
      "/storeSuccessPage:_id?",
      "/checkoutPageforth/:_id?",
      "/checkoutPagefifth/:_id?",
      "/myChoiceProduct/:_id?/ProductsId/:_id2?",
      "/thanksforshopping",
      "/chooseProductDetails/:_id?",
      "/delivery-checkout-step1/:_id?"
    ];
    if(dontShow.indexOf(getPageUrl) > -1){
      return false;
    }
    else
    {
      if(getPageUrl == "/howappworks" || getPageUrl == "/termsofservice" || getPageUrl == "/")
      {
        if(Meteor.userId() == null)
        {
          return false;
        }
        else
        {
          return true;
        }
      }
      else
      {
        return true;
      }
    }
    // else if(getPageUrl == "/howappworks" || getPageUrl == "/termsofservice")
    //   {
    //    if(!Meteor.userId())
    //    {
    //      return false;
    //    }
    //    else
    //    {
    //      return true;
    //    }
    // }
    
  },
  backChooseProd: function(){
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/chooseProductDetails/:_id?'){
      return true;
    }
  },
  getOrderId: function(){
    return Session.get('CurrentOrderId');
    // console.log("currentOrderId",currentOrderId);
    // var OutOfStockProdID = Session.get('currentOutOfStockProdID');
    // console.log("OutOfStockProdID",OutOfStockProdID);
  },
  getOutOfStockProdID: function(){
    // return Session.get('CurrentOrderId');
    // console.log("currentOrderId",currentOrderId);
    return Session.get('currentOutOfStockProdID');
    // console.log("OutOfStockProdID",OutOfStockProdID);
  },
  getSearchList: function(){
    var list = searchArray.get();
    // console.log("list", list);
    return list;
  },
  productQuantity: function(){
    var proQuantity = this.quantity;
    // console.log("proQuantity",proQuantity);
    var prodQuantity = bottleSizes.findOne({_id: proQuantity});
    // console.log("prodQuantity",prodQuantity);
    var a = prodQuantity.sizeValue 
    return a;
  },
  productType: function(){
    var proType = this.bottleTypes;
    // console.log("this.bottleTypes",proType);  
    var prodType1 = bottleTypes.findOne({_id: proType});
    // console.log("prodType1",prodType1);
    return prodType1.BottletypeName;
  },
  productsImage: function(){
    // console.log("this productIMGESSSSS", this);
    if(typeof this.productImage !== "undefined")
    {
      // console.log("this.productImage",this.productImage)
      return this.productImage ;
    }
    else
    {
      return "/images/noimageLightGrey.png";
    }
  },
  productImgAvlb:function(){
    if(typeof this.productImage !== "undefined")
    {
      // console.log("this.productImage",this.productImage)
      return true ;
    }
    else
    {
      return false;
    }
  },
  productDetailPage: function(){
    // console.log("this id ", this._id);
    return this._id;
  },

  //31_july
  getScannedProducts: function()
  {
    //Meteor.subscribe('getBrands');
    // Meteor.subscribe('getCategories');
    // Meteor.subscribe('getProductTypes');
    return Template.instance().scanVar.get();
  },
  getStatus: function() {
    var a = favProducts.find({userId:Meteor.userId(),productId:this._id});
    if(a.count() > 0)
    {
      a = a.fetch()[0];
      if(typeof a.status !== "undefined")
      {
        if(a.status == true)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false
      }
    }
    else
    {
      return false;
    }
  },
  prodImage: function(prodId){
    var product = products.findOne({_id: prodId});
    if(typeof product !== "undefined")
    {
      if(typeof product.productImage !== "undefined")
      {
        var image = product.productImage;
        var imageUrl = image.split("upload")
        imageUrl = imageUrl[0] + "upload" + imageUrl[1]

        imageUrl = imageUrl.replace("http://","https://");
        return imageUrl;
      }
      else{
        return "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
      }
    }
    else
    {
      return "https://res.cloudinary.com/liqour/image/upload/v1541056478/eia5zhxxm6dxks2pyoy0.png";
    }
  },
  getStatusString: function() {
    var a = favProducts.find({userId:Meteor.userId(),productId:this._id});
    if(a.count() > 0)
    {
      a = a.fetch()[0];
      if(typeof a.status !== "undefined")
      {
        return a.status;
      }
      else
      {
        return "false"
      }
    }
    else
    {
      return "false";
    }
  },
  bottlesize: function(n){
    // console.log("nnnn",n);
    Meteor.subscribe('getBottleSizes');   
    var getBottleSize = bottleSizes.findOne({
      _id: n
    });
    if(getBottleSize == null)
    {
      return ' ';
    }
    else
    {
      return getBottleSize.sizeValue;
    }
  },
  bottleTypeName:function(bottleTypeName) {
    Meteor.subscribe('getBottleTypes');
    var a = bottleTypes.findOne({_id:bottleTypeName});
    if(a != null){
      return a.BottletypeName;
    }   
  },
  storename: function(storeId){
    Meteor.subscribe('getStores');
    if(typeof storeId.storeName !== "undefined")
    {
      if(storeId.storeName !== "")
      {
        var a = stores.findOne({_id: storeId.storeName});
        if(a != null)
        {
          return a.storeName;
        }
        else
        {
          return false;
        }
      }
      else
        {
          return false;
        }
    }
    else
    {
      return false;
    }
  },
});
Template.topHeader.events({
  'click .backButton': function(e){
    e.preventDefault();
    var routeName = Router.current().route._path;
    var routeArray = {
      "/accountdetails": "/dashboard",
      "/profiles": "/dashboard",
      "/changepassword": "/dashboard",
      "/products": "/dashboard",
      "/storePage": "/dashboard",
      "/favorites": "/dashboard",
      "/favoriteReceipes": "/dashboard",
      "/orderHistory": "/dashboard",
      "/coupons": "/dashboard",
      "/recipesList": "/dashboard",
      "/howappworks": "/dashboard",
      "/settings": "/dashboard",
      "/faq": "/dashboard",
      "/notification/:_id?": "/dashboard",
      "/howAreWeDoing": "/profiles",
      "/termsofservice": "/dashboard",
      "/privacypolicy": "/dashboard",
      "/interestbasedads": "/dashboard",
      "/returnpolicy": "/dashboard",
      "/productDetails/:_id?": "/products",
      "/bannerproducts/:_id": "/dashboard",
      "/posterproducts/:_id?": "/dashboard",
      "/advSliderProducts/:_id": "/dashboard",
      "/searchResult/:_id": "/dashboard",
      "/ratings/:_id?": "/productDetails",
      "/topPickProducts": "/dashboard",
      "/cart/:_id?": "/dashboard",
      "/ratingsReceipes/:_id?": "/dashboard",
      "/receiptPage/:_id?": "/orderHistory",
      "/storePage/map": "/storePage",
      "/receipePage/:_id?": "/recipesList",
      "/liquorProduct": "/dashboard",
      "/full-menu": "/dashboard",
      "/search-category": "/dashboard",
      "/search-subcategory/:_id": "/search-category"
    };
    if(routeName == "/accountdetails" || routeName == "/notification/:_id?" || routeName == "/orderHistory" || routeName == "/howappworks")
    {
      if(Session.get("PreviousPage") == "/profiles")
      {
        Router.go(Session.get("PreviousPage"));
      }
      else
      {
        Router.go(routeArray[routeName]);
      }
    }
    else if(routeName == "/productDetails/:_id?")
    {
      if(Session.get("PreviousPage") == "/dashboard")
      {
        Router.go(Session.get("PreviousPage"));
      }
      else
      {
        Router.go(Session.get("PreviousPage"));
      }
    }
    else if(routeName == "/ratings/:_id?" || routeName == "/ratingsReceipes/:_id?")
    {
      Router.go(Session.get("PreviousPage"));
    }
    else if(routeName == "/cart/:_id?")
    {
      history.back();
    }
    else if(routeName == "/search-subcategoryproducts/:_id/:_id1")
    {
      Router.go("/search-subcategory/" + Session.get("currentCategorySearch"));
    }
    else
    {
      Router.go(routeArray[routeName]);
    }
    
  },
  'click .logoForHomePage': function(e){
    e.preventDefault();
    var getPageUrl = Router.current().route._path;
    if(getPageUrl == '/dashboard' || getPageUrl == '/checkoutPagefirst/:_id?' || getPageUrl == '/delivery-checkout-step1/:_id?' || getPageUrl == '/checkoutPageSecond/:_id?' || getPageUrl == '/checkoutPagethird/:_id?' || getPageUrl == '/checkoutPageforth/:_id?' || getPageUrl == '/checkoutPagefifth/:_id?' || getPageUrl == '/myChoiceProduct/:_id?/ProductsId/:_id2?'){
     return ;
    }
    else{
      Router.go('/dashboard');
    }
    
  },
  'click .homeFilterButton': function(e){
    e.preventDefault();
    if ($('.dashbordFilter').css('display') == 'none'){
      $('.dashbordFilter').show();
      $('.dashbordFilter')[0].focus();
    }
    else{
      $('.dashbordFilter').hide();
    }
    
  },
  'click #barcodeIcon':function(e)
  {
    e.preventDefault()
    var test = Template.instance();
    cordova.plugins.barcodeScanner.scan(function(res){
      //sample: {text: "ABC-abc-1234", format: "CODE_128", cancelled: false}
      
      if(res.text != "")
      {
        var s = res.text;
        s = s.replace(/^0+/, '');
        s = Number(s).toString()
        // "8.5917E+11",859170000000
        Meteor.subscribe("getProductsBySKU", s, function(){
          //console.log("scanned by sku subscribed");
          var storeId = Session.get("storeId");
          var scannedProductsList = "";
          if(storeId !== null){
            if(storeId !== undefined){
              // scannedProductsList = products.find({"storeName": storeId},{$or: [{"productId": s},{"sku": s}]});
              scannedProductsList = products.find({$and : [{$or: [{"productId": s},{"sku": s}]},{"storeName": storeId}]});
            }
            else{
              scannedProductsList = products.find({$or: [{"productId": s},{"sku": s}]});
            }
          }
          else{
            scannedProductsList = products.find({$or: [{"productId": s},{"sku": s}]});
          }
          
          //console.log("scannedProductsList.count()",scannedProductsList.count());
          if(scannedProductsList.count() > 0)
          {
            //console.log("scannedProductsList",scannedProductsList.fetch());
            scannedProductsList = scannedProductsList.fetch();
            if(JSON.stringify(test.scanVar.get()) !== JSON.stringify(scannedProductsList))
            {
              test.scanVar.set(scannedProductsList);            
            }
            // $("#barcodeIcon").show();
            $('#scanedModal').modal('show');
          }
        });
          
      }
    },
    function (error) {
          console.log("Scanning failed:" + error);
      },{
          showTorchButton : true, // iOS and Android
          saveHistory: true, // Android, save scan history (default false)
          disableSuccessBeep: false // iOS and Android
      })
      /*s = Number("859170000000").toString()
        // "8.5917E+11",859170000000
        Meteor.subscribe("getProductsBySKU", s, function(){
          console.log("scanned by sku subscribed");
          var scannedProductsList = products.find({$or: [{"productId": s},{"sku": s}]});
          console.log("scannedProductsList.count()",scannedProductsList.count());
          if(scannedProductsList.count() > 0)
          {
            console.log("scannedProductsList",scannedProductsList.fetch());
            scannedProductsList = scannedProductsList.fetch();
            if(JSON.stringify(test.scanVar.get()) !== JSON.stringify(scannedProductsList))
            {
              test.scanVar.set(scannedProductsList);            
            }
            // $("#barcodeIcon").show();
            $('#scanedModal').modal('show');
          }
        });*/
  },
  'click .productLink':function(e){
    e.preventDefault();
    $("#searchproduct").val("");
    $("#searchBoxList").hide();
    Router.go('/productDetails/' + $(e.target).attr("data-id"));
  },
  'keyup #searchproduct': function(e){

    e.preventDefault();

    if ($('.dashbordFilter').css('display') == 'block'){
      console.log("dashbordFilter block");
      $('.dashbordFilter').hide();
      // $('.dashbordFilter')[0].focus();
    }
    else{
      if($(".new-filter").hasClass("showFilterDiv"))
      {
        if($(window).width() < 768)
         $('.new-filter').animate({ 
              "bottom": "-217px"
          }, 500);
         $(".new-filter").removeClass("showFilterDiv");
         $(".new-filter").addClass("hideFilterDiv");
      }
      else
      {
        if($(window).width() < 768){

        }
        else{
          $('.new-filter').animate({ 
              "bottom": "0px"
          }, 500);
         $(".new-filter").removeClass("hideFilterDiv");
         $(".new-filter").addClass("showFilterDiv");
        }
        
      }
    }
    var searchVal = $(e.target).val();
    searchVal = searchVal.toLowerCase();
    if(searchVal.length <= 3)
    {      
      $("#searchBoxList").hide();
      return false;
    }
    $("#searchBoxList").show();
    var storeId = Session.get("storeId");
    Meteor.subscribe('getProductsForSearch', searchVal, function(){
      var isBrand = brands.findOne({"brandName": searchVal});
      if(typeof isBrand !== "undefined")
      {
        var productList ="";
        if(isBrand != null)
        {
          var brandId = isBrand._id;
          if(storeId !== null){
            if(storeId !== undefined){
              productList = products.find({"storeName":storeId,"brandName": brandId},{limit:5}).fetch();
            } 
            else{
              productList = products.find({"brandName": brandId},{limit:5}).fetch();
            }         
          }
          else{
            productList = products.find({"brandName": brandId},{limit:5}).fetch();
          }
          if(JSON.stringify(searchArray) != JSON.stringify(productList)){
            searchArray.set(productList);            
            var code = e.keyCode || e.which;
            if(code == 13) { //Enter keycode
              $( ".qty" ).trigger( "blur" );
              Router.go("/searchResult/" + searchVal);
              $("#searchproduct").val('');
              $('#searchBoxList').hide();
            }
          }
        }
      }
    else
    {
      //console.log("10");
      if(searchVal == '' || searchVal == undefined || searchVal == null){
        // console.log("searchVal",searchVal);
        $('#searchBoxList').hide();
      }
      else{
        //console.log("searchVal console.log 75097",searchVal);
        //console.log("11");
        //Meteor.subscribe('getProductsForSearch',searchVal,function(){
          var productList ="";
        // console.log("searchVal",searchVal);
        // var productList = products.find({"productName": {'$regex':searchVal}}).fetch();
        if(storeId !== null){
          //console.log("12");
          if(storeId !== undefined){
            //console.log("13");
            // productList = products.find({"storeName": storeId},{"productName": {
            //   $regex: new RegExp(searchVal,"i")
            // }}).fetch();

            productList = products.find({"storeName": storeId,"productName": {$regex: new RegExp(searchVal,"i")}
            },{limit:5}).fetch();

          }
          else{
            //console.log("14");
            //console.log("products.find",products.find().fetch());
          productList = products.find({"productName": new RegExp(searchVal,"i")},{limit:5}).fetch();
          }              
        }
        else{
          //console.log("15");
          productList = products.find({"productName": new RegExp(searchVal,"i")},{limit:5}).fetch();
        }        
        //console.log("productList with word",productList);
        $('#searchBoxList').show();
        if(JSON.stringify(searchArray) != JSON.stringify(productList)){
          //console.log("16");
          searchArray.set(productList);
          var code = e.keyCode || e.which;
          //console.log("code",code);
          if(code == 13) { //Enter keycode
            //Do something
            $( ".qty" ).trigger( "blur" );
            //console.log("enter is pressed");
            Router.go("/searchResult/" + searchVal);
            $("#searchproduct").val('');
            // $("#searchBoxList").remove();
            $('#searchBoxList').hide();
          }
        }
        //});
        
      }
    }
    });
    // console.log("keyup prodQuantity",$(e.target).val());
  }
});