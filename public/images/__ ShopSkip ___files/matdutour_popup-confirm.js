//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package['templating-runtime'].Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Confirmation;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/matdutour_popup-confirm/lib/template.popup-confirm.js                          //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //

Template.__checkName("popup_confirm");
Template["popup_confirm"] = new Template("Template.popup_confirm", (function() {
  var view = this;
  return [ HTML.Raw('<div class="pc-dimmer"></div>\n  '), HTML.DIV({
    class: "pc-container pc-enter",
    id: function() {
      return Spacebars.mustache(view.lookup("_id"));
    }
  }, "\n    ", HTML.DIV("\n      ", HTML.H3(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n      ", HTML.DIV(Blaze.View("lookup:message", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("message")));
  })), "\n      ", HTML.BUTTON({
    class: "pc-button pc-button-cancel",
    id: "pc-cancel"
  }, HTML.SPAN(Blaze.View("lookup:cancelText", function() {
    return Spacebars.mustache(view.lookup("cancelText"));
  }))), "\n      ", HTML.BUTTON({
    class: function() {
      return [ "pc-button ", Blaze.If(function() {
        return Spacebars.call(view.lookup("success"));
      }, function() {
        return "pc-button-success";
      }, function() {
        return "pc-button-error";
      }) ];
    },
    id: "pc-ok"
  }, HTML.SPAN(Blaze.View("lookup:okText", function() {
    return Spacebars.mustache(view.lookup("okText"));
  }))), "\n    "), "\n  ") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/matdutour_popup-confirm/lib/popup-confirm.js                                   //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
Confirmation = (function () {
  function Confirmation(_options, _callback) {
    var self = this;

    this._callback = _callback;

    this._id = new Mongo.ObjectID().toHexString();

    this.options = {
      message: _options.message || "",
      title: _options.title || "",
      cancelText: _options.cancelText || "Cancel",
      okText: _options.okText || "Ok",
      success: _options.success,
      focus: _options.focus || "cancel",
      _id: this._id
    };

    this.view = Blaze.renderWithData(Template.popup_confirm, this.options, document.body);

    Meteor.setTimeout(function() {self._init();}, 50);

  }

  Confirmation.prototype._init = function () {
    this.popup   = $("#" + this._id);

    if(!this.popup) {
      var self = this;
      Meteor.setTimeout(function() { self._init(); }, 50);
      return;
    }

    this.okButton      = this.popup.find("#pc-ok");
    this.cancelButton  = this.popup.find("#pc-cancel");

    if (this.options.focus.toLowerCase() === 'ok') this.okButton.focus();
    else if (this.options.focus.toLowerCase() === 'cancel') this.cancelButton.focus();

    // TODO create a form and listen to submit
    this._okListener = this._okListener.bind(this);
    this._cancelListener = this._cancelListener.bind(this);

    this.okButton.bind('click', this._okListener);
    this.cancelButton.bind('click', this._cancelListener);
  };

  Confirmation.prototype._destroy = function () {
    Blaze.remove(this.view);
  };

  Confirmation.prototype._hide = function () {
    this.okButton.unbind('click', this._okListener);
    this.cancelButton.unbind('click', this._cancelListener);

    var self = this;
    this.popup.addClass('pc-leave');
    $(".pc-dimmer").addClass('pc-leave');
    Meteor.setTimeout( function() { self._destroy(); }, 500 );
  };

  Confirmation.prototype._okListener = function () {
    this._hide();
    this._callback(true);
  };

  Confirmation.prototype._cancelListener = function () {
    this._hide();
    this._callback(false);
  };

  return Confirmation;

})();

/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("matdutour:popup-confirm", {
  Confirmation: Confirmation
});

})();
