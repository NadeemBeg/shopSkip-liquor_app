import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
ProfileSchema = new SimpleSchema({
 firstName: {
   type: String,
   optional: false,
 },
 lastName: {
   type: String,
   optional: true,
 },
 country: {
   type: String,
   optional: true,
 },
 birthday: {
   type: String,
      optional: true,
      autoform: {
         type: 'datetime-local'
      }
   // optional: true,
 },
 street: {
   type: String,
   optional: true,
 },
 city: {
   type: String,
   optional: true,
 },
 state: {
   type: String,
   optional: true,
 },
 zip: {
   type: String,
   optional: true,
 },
 isActive: {
  type: Boolean,
  optional: true,
 },
 isNew: {
  type: Boolean,
  optional: true,
  defaultValue: true
 },
 promotions: {
  type: Boolean,
  optional: true,
  defaultValue: false
 },
 pushOrderUpdate: {
  type: Boolean,
  optional: true,
  defaultValue: false
 },
 smsOrderUpdate: {
  type: Boolean,
  optional: true,
  defaultValue: false
 },
 termsofservice: {
  type: Boolean,
  optional: true,
  defaultValue: false
 },
 settingNotifications: {
  type: Boolean,
  optional: true,
  defaultValue: false
 },
  profileImage: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  },
  profileImageOrientation: {
    type: String,
    optional: true,
  },
  phoneNumber: {
    type: Number,
    optional: true,
    label: "Phone Number"
  },
  countryCode: {
    type: String,
    optional: true,
    label: "Country Code"
  },
  lat: {
    type: String,
    optional: true,
    label: "Country Code"
  },
  lng: {
    type: String,
    optional: true,
    label: "Country Code"
  },
  formattedAddress: {
    type: String,
    optional: true,
    label: "Country Code"
  },
  locationEntered: {
    type: String,
    optional: true,
    label: "Country Code"
  },
  aptNumber: {
    type: String,
    optional: true,
    label: "Country Code"
  },
  gender: {
    type: String,
    optional: true,
    label: "Country Code"
  }
});
Meteor.users.attachSchema(new SimpleSchema({
 username: {
   type: String,
   regEx: SimpleSchema.RegEx.Email,
   optional: true
 },
 emails: {
   type: Array,
   optional: true
 },
 'emails.$': {
   type: Object
 },
 "emails.$.address": {
   type: String,
   regEx: SimpleSchema.RegEx.Email,
   optional: true,
   autoform: {
     type: 'email'
   }
 },
 "emails.$.verified": {
   type: Boolean,
   optional: true
 },
 createdAt: {
   type: Date,
   optional: true,
   defaultValue: new Date()
 },
 profile: {
   type: ProfileSchema,
 },
 services: {
   type: Object,
   optional: true,
   blackbox: true
 },
 roles: {
   type: Array,
   defaultValue: [],
   blackbox: true
 },
 'roles.$': {
   type: String
 }
 
}));

Meteor.users.after.update((userId, doc) => {
    if(doc.emails[0].verified == true && doc.profile.isActive == false)
    {
      Meteor.users.update({"_id":doc._id},{$set:{"profile.isActive":true}});
    }
});
