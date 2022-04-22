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
var Template = Package['templating-runtime'].Template;
var Async = Package['arunoda:npm'].Async;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Paypal;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/mrt_paypal/packages/mrt_paypal.js                                                        //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/mrt:paypal/paypal.js                                                               //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Meteor.Paypal = {                                                                              // 1
                                                                                               // 2
  account_options: {},                                                                         // 3
  //authorize submits a payment authorization to Paypal                                        // 4
  authorize: function(card_info, payment_info, callback){                                      // 5
    Meteor.call('paypal_submit', 'authorize', card_info, payment_info, callback);              // 6
  },                                                                                           // 7
  purchase: function(card_info, payment_info, callback){                                       // 8
    Meteor.call('paypal_submit', 'sale', card_info, payment_info, callback);                   // 9
  },                                                                                           // 10
  //config is for the paypal configuration settings.                                           // 11
  config: function(options){                                                                   // 12
    this.account_options = options;                                                            // 13
  },                                                                                           // 14
  payment_json: function(){                                                                    // 15
    return {                                                                                   // 16
      "intent": "sale",                                                                        // 17
      "payer": {                                                                               // 18
        "payment_method": "credit_card",                                                       // 19
        "funding_instruments": []},                                                            // 20
      "transactions": []                                                                       // 21
    };                                                                                         // 22
  },                                                                                           // 23
  //parseCardData splits up the card data and puts it into a paypal friendly format.           // 24
  parseCardData: function(data){                                                               // 25
    var first_name = '', last_name = '';                                                       // 26
    if (data.name){                                                                            // 27
      first_name = data.name.split(' ')[0];                                                    // 28
      last_name = data.name.split(' ')[1]                                                      // 29
    }                                                                                          // 30
    return {                                                                                   // 31
      credit_card: {                                                                           // 32
        type: data.type,                                                                       // 33
        number: data.number,                                                                   // 34
        first_name: first_name,                                                                // 35
        last_name: last_name,                                                                  // 36
        cvv2: data.cvv2,                                                                       // 37
        expire_month: data.expire_month,                                                       // 38
        expire_year: data.expire_year                                                          // 39
      }};                                                                                      // 40
  },                                                                                           // 41
  //parsePaymentData splits up the card data and gets it into a paypal friendly format.        // 42
  parsePaymentData: function(data){                                                            // 43
    return {amount: {total: data.total, currency: data.currency}};                             // 44
  }                                                                                            // 45
};                                                                                             // 46
                                                                                               // 47
if(Meteor.isServer){                                                                           // 48
  Meteor.startup(function(){                                                                   // 49
    var paypal_sdk = Npm.require('paypal-rest-sdk');                                           // 50
    var Fiber = Npm.require('fibers');                                                         // 51
    var Future = Npm.require('fibers/future');                                                 // 52
    Meteor.methods({                                                                           // 53
      paypal_submit: function(transaction_type, cardData, paymentData){                        // 54
        paypal_sdk.configure(Meteor.Paypal.account_options);                                   // 55
        var payment_json = Meteor.Paypal.payment_json();                                       // 56
        payment_json.intent = transaction_type;                                                // 57
        payment_json.payer.funding_instruments.push(Meteor.Paypal.parseCardData(cardData));    // 58
        payment_json.transactions.push(Meteor.Paypal.parsePaymentData(paymentData));           // 59
        var fut = new Future();                                                                // 60
        this.unblock();                                                                        // 61
        paypal_sdk.payment.create(payment_json, Meteor.bindEnvironment(function(err, payment){ // 62
          if (err){                                                                            // 63
            fut.return({saved: false, error: err});                                            // 64
          } else {                                                                             // 65
            fut.return({saved: true, payment: payment});                                       // 66
          }                                                                                    // 67
        },                                                                                     // 68
        function(e){                                                                           // 69
          console.error(e);                                                                    // 70
        }));                                                                                   // 71
        return fut.wait();                                                                     // 72
    }});                                                                                       // 73
  });                                                                                          // 74
}                                                                                              // 75
                                                                                               // 76
                                                                                               // 77
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/mrt:paypal/template.paypal_credit_card_form.js                                     //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
                                                                                               // 1
Template.__define__("paypalCreditCardForm", (function() {                                      // 2
  var view = this;                                                                             // 3
  return HTML.Raw('<form class="form" id="paypal-payment-form" action="#">\n		<div class="form-group">\n		  <label for="name">Name</label>\n		  <input type="text" class="form-control" name="name" id="name" placeholder="Name on card">\n		</div>\n		<div class="form-group">\n		  <label for="card_type">Card Type</label>\n		  <select name="card_type" id="card-type">\n		  	<option selected="selected">Card Type</option>\n		    <option value="visa"> Visa </option>\n		    <option value="mastercard"> Mastercard </option>\n		    <option value="americanexpress"> American Express </option>\n		    <option value="discover"> Discover </option>\n		  </select>\n		</div>\n		<div class="form-group">\n		  <label for="credit_card">Card Number</label>\n		  <input type="text" class="form-control" name="card_number" id="card-number" placeholder="XXXX XXXX XXXX XXXX">\n		</div>\n		<div class="form-group">\n		  <label for="expire_month">Expiration Month</label>\n		  <select name="expire_month" id="expire-month">\n		  	<option selected="selected">Expiration Month</option>\n		    <option value="01"> 1 - Jan </option>\n		    <option value="02"> 2 - Feb </option>\n		    <option value="03"> 3 - Mar </option>\n		    <option value="04"> 4 - Apr </option>\n		    <option value="05"> 5 - May </option>\n		    <option value="06"> 6 - Jun </option>\n		    <option value="07"> 7 - Jul </option>\n		    <option value="08"> 8 - Aug </option>\n		    <option value="09"> 9 - Sep </option>\n		    <option value="10"> 10 - Oct </option>\n		    <option value="11"> 11 - Nov </option>\n		    <option value="12"> 12 - Dec </option>\n		  </select>\n		</div>\n		<div class="form-group">\n		  <label for="expire_year">Expiration Year</label>\n		  <select name="expire_year" id="expire-year">\n		  	<option selected="selected">Expiration Year</option>\n		    <option value="2013">2013</option>\n		    <option value="2014">2014</option>\n		    <option value="2015">2015</option>\n		    <option value="2016">2016</option>\n		    <option value="2017">2017</option>\n		    <option value="2018">2018</option>\n		    <option value="2019">2019</option>\n		  </select>\n		</div>\n		<div class="form-group">\n		  <label for="cvv2">CVV</label>\n		  <input type="text" class="form-control" name="cvv" id="cvv" placeholder="123">\n		</div>\n		<button type="submit" class="btn btn-default">Submit</button>\n	</form>');
}));                                                                                           // 5
                                                                                               // 6
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/mrt:paypal/paypal_credit_card_form.js                                              //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Template.paypalCreditCardForm.card_data = function(){                                          // 1
	return {                                                                                      // 2
      type: $('#card-type').val(),                                                             // 3
	    name: $('#name').val(),                                                                   // 4
	    number: $('#card-number').val(),                                                          // 5
	    expire_month: $('#expire-month').val(),                                                   // 6
	    expire_year: $('#expire-year').val(),                                                     // 7
	    cvv: $('#cvv').val()                                                                      // 8
	};                                                                                            // 9
};                                                                                             // 10
                                                                                               // 11
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("mrt:paypal", {
  Paypal: Paypal
});

})();
