import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
fieldsOfOperations = new SimpleSchema({
	openTime: {
		type: Date,
	 	optional: false,
	 	label: "Opening Time",
	 	defaultValue: new Date(),
	 	autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker",
        dateTimePickerOptions: {
       		pickDate: false
       	}
      },
    	afFormGroup: {
	  		'formgroup-class': 'col-sm-4'
	  	}
    }
	},
	closeTime: {
		type: Date,
	 	optional: false,
	 	label: "Closing Time",
	 	defaultValue: new Date(),
	 	autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker",
        dateTimePickerOptions: {
       		pickDate: false
        }
      },
    	afFormGroup: {
	  		'formgroup-class': 'col-sm-4'
	  	}
    }
	},

	isClosed: {
		type: String,
   	optional: true,
   	defaultValue: false,
   	label: "Closed for the day?",
   	autoform: {
      type: 'boolean-checkbox',
      afFormGroup: {
			 'formgroup-class': 'col-sm-4'
			}
    }
	},
});

HoursofOperations = new SimpleSchema({
	mondayTime: {
		type: fieldsOfOperations
	},
	tuesdayTime: {
		type: fieldsOfOperations
	},
	wednesdayTime: {
		type: fieldsOfOperations
	},
	thursdayTime: {
		type: fieldsOfOperations
	},
	fridayTime: {
		type: fieldsOfOperations
	},
	saturdayTime: {
		type: fieldsOfOperations
	},
	sundayTime: {
		type: fieldsOfOperations
	}
});

stores = new Mongo.Collection('stores');
var Schemas = {};
Schemas.storesSchema = new SimpleSchema({
	storeName: {
		type: String,
		optional: false,
		label: "Legal Name"
	},

	dba: {
		optional: false,
		label: "DBA",
		type: String
	},

	address: {
		optional: false,
		label: "Address",
		type: String,
      autoform: {
         type: 'textarea'
      }
	},

	fein: {
		optional: false,
		label: "FEIN",
		type: String
	},

	agencyNumber: {
		optional: false,
		label: "Agency #",
		type: String
	},

	description: {
		optional: false,
		label: "Description",
		type: String
	},

	storetimes: {
		type: HoursofOperations
	},

	emailAddress: {
		type: String,
		label: "Email Address",
		regEx: SimpleSchema.RegEx.Email,
    optional: false,
    autoform: {
      type: 'email'
    }
	},

	phoneNumber: {
		type: String,
		optional: false,
		label: "Phone Number"
	},

	storeImage: {
		type: String,
		optional: false,
		autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
	},

	storeLocation: {
		type: String,
		optional: false,
		label: "Store Location"
	},

	storeLat: {
		type: String,
		optional: false,
		label: "Store Latitude"
	},

	storeLng: {
		type: String,
		optional: false,
		label: "Store Longitude"
	},

	storeLocation: {
		type: String,
		optional: false,
		label: "Store Location"
	},
	isActive: {
		type: Boolean,
		optional: true,
		defaultValue: true
	},
	createdAt: {
		type: Date,
		optional: false,
		defaultValue: new Date()
	}
});
stores.attachSchema(Schemas.storesSchema);

