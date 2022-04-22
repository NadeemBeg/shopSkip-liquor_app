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
var _ = Package.underscore._;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var ServerSession;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/matteodem_server-session/packages/matteodem_server-session.js                                  //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/matteodem:server-session/lib/server-session.js                                           //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
/*global Meteor, ServerSession:true, console */                                                      // 1
/*jslint eqeq: true */                                                                               // 2
ServerSession = (function () {                                                                       // 3
    'use strict';                                                                                    // 4
                                                                                                     // 5
    var Collection = new Meteor.Collection('serversession'),                                         // 6
        getSessionValue = function (obj) {                                                           // 7
            if (_.isObject(obj)) {                                                                   // 8
                return obj.value;                                                                    // 9
            }                                                                                        // 10
                                                                                                     // 11
            return obj;                                                                              // 12
        },                                                                                           // 13
        checkForKey = function (key) {                                                               // 14
            if ("undefined" === typeof key) {                                                        // 15
                throw new Error('Please provide a key!');                                            // 16
            }                                                                                        // 17
        },                                                                                           // 18
        condition = function () {                                                                    // 19
            return true;                                                                             // 20
        };                                                                                           // 21
                                                                                                     // 22
    if (Meteor.isServer) {                                                                           // 23
        Meteor.publish('serversession', function () {                                                // 24
            return Collection.find();                                                                // 25
        });                                                                                          // 26
                                                                                                     // 27
        Collection.allow({                                                                           // 28
            'insert' : function () {                                                                 // 29
                return false;                                                                        // 30
            },                                                                                       // 31
            'update'  : function () {                                                                // 32
                return false;                                                                        // 33
            },                                                                                       // 34
            'remove' : function () {                                                                 // 35
                return false;                                                                        // 36
            }                                                                                        // 37
        });                                                                                          // 38
    }                                                                                                // 39
                                                                                                     // 40
    if (Meteor.isClient) {                                                                           // 41
        Meteor.subscribe('serversession');                                                           // 42
    }                                                                                                // 43
                                                                                                     // 44
    Meteor.methods({                                                                                 // 45
        'serversession_set' : function (key, value) {                                                // 46
            // Check again, since Meteor.methods is encapsulated                                     // 47
            checkForKey(key);                                                                        // 48
                                                                                                     // 49
            if (!condition(key, value)) {                                                            // 50
                throw new Meteor.Error('Condition failed (has to be specified on server!)');         // 51
            }                                                                                        // 52
                                                                                                     // 53
            if (!Collection.findOne({ 'key' : key })) {                                              // 54
                Collection.insert({ 'key' : key, 'value' : value });                                 // 55
                return;                                                                              // 56
            }                                                                                        // 57
                                                                                                     // 58
            Collection.update({ 'key' : key }, { $set : { 'value' : value }});                       // 59
        }                                                                                            // 60
    });                                                                                              // 61
                                                                                                     // 62
    // Return public API                                                                             // 63
    return {                                                                                         // 64
        'set' : function (key, value) {                                                              // 65
            checkForKey(key);                                                                        // 66
            Meteor.call('serversession_set', key, value);                                            // 67
        },                                                                                           // 68
        'get' : function (key) {                                                                     // 69
            var sessionObj = Collection.findOne({ 'key' : key });                                    // 70
            return getSessionValue(sessionObj);                                                      // 71
        },                                                                                           // 72
        'equals' : function (key, expected, identical) {                                             // 73
            var sessionObj = Collection.findOne({ 'key' : key }),                                    // 74
                value = getSessionValue(sessionObj);                                                 // 75
                                                                                                     // 76
            if (_.isObject(value) && _.isObject(expected)) {                                         // 77
                return _(value).isEqual(expected);                                                   // 78
            }                                                                                        // 79
                                                                                                     // 80
            if (false === identical) {                                                               // 81
                return expected == value;                                                            // 82
            }                                                                                        // 83
                                                                                                     // 84
            return expected === value;                                                               // 85
        },                                                                                           // 86
        'setCondition' : function (newCondition) {                                                   // 87
            if (Meteor.isClient) {                                                                   // 88
                throw new Meteor.Error('You have to set conditions on the server, not the client!'); // 89
            }                                                                                        // 90
            condition = newCondition;                                                                // 91
        }                                                                                            // 92
    };                                                                                               // 93
}());                                                                                                // 94
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("matteodem:server-session", {
  ServerSession: ServerSession
});

})();
