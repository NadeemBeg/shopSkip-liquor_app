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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Template = Package['templating-runtime'].Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var check = Package.check.check;
var Match = Package.check.Match;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var Mongo = Package.mongo.Mongo;
var DDP = Package['ddp-client'].DDP;
var getCaretCoordinates = Package['dandv:caret-position'].getCaretCoordinates;
var HTML = Package.htmljs.HTML;
var Spacebars = Package.spacebars.Spacebars;

/* Package-scope variables */
var __coffeescriptShare, AutocompleteTest;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ifuturz_autocomplete/template.inputs.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("inputAutocomplete");
Template["inputAutocomplete"] = new Template("Template.inputAutocomplete", (function() {
  var view = this;
  return [ HTML.INPUT(HTML.Attrs({
    type: "text"
  }, function() {
    return Spacebars.attrMustache(view.lookup("attributes"));
  })), "\n    ", Spacebars.include(view.lookupTemplate("autocompleteContainer")) ];
}));

Template.__checkName("textareaAutocomplete");
Template["textareaAutocomplete"] = new Template("Template.textareaAutocomplete", (function() {
  var view = this;
  return [ HTML.TEXTAREA(HTML.Attrs(function() {
    return Spacebars.attrMustache(view.lookup("attributes"));
  }, {
    value: function() {
      return Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      });
    }
  })), "\n    ", Spacebars.include(view.lookupTemplate("autocompleteContainer")) ];
}));

Template.__checkName("_autocompleteContainer");
Template["_autocompleteContainer"] = new Template("Template._autocompleteContainer", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isShowing"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      class: "-autocomplete-container"
    }, "\n        ", Blaze.If(function() {
      return Spacebars.call(view.lookup("isLoaded"));
    }, function() {
      return [ "\n            ", Blaze.Unless(function() {
        return Spacebars.call(view.lookup("empty"));
      }, function() {
        return [ "\n            ", HTML.UL({
          class: "-autocomplete-list"
        }, "\n                ", Blaze.Each(function() {
          return Spacebars.call(view.lookup("filteredList"));
        }, function() {
          return [ "\n                ", HTML.LI({
            class: "-autocomplete-item"
          }, "\n                    ", Spacebars.With(function() {
            return Spacebars.call(Spacebars.dot(view.lookup(".."), "currentTemplate"));
          }, function() {
            return [ "\n                        ", Spacebars.With(function() {
              return Spacebars.call(view.lookup(".."));
            }, function() {
              return [ "  \n                            ", Spacebars.include(view.lookupTemplate("..")), "  \n                        " ];
            }), "\n                    " ];
          }), "\n                "), "\n                " ];
        }), "\n            "), "\n            " ];
      }, function() {
        return [ "\n                ", Spacebars.include(view.lookupTemplate("noMatchTemplate")), "\n            " ];
      }), "\n        " ];
    }, function() {
      return [ "\n            ", HTML.I("loading..."), "\n        " ];
    }), "\n    "), "\n    " ];
  });
}));

Template.__checkName("_noMatch");
Template["_noMatch"] = new Template("Template._noMatch", (function() {
  var view = this;
  return HTML.Raw("(<i>no matches</i>)");
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ifuturz_autocomplete/autocomplete-client.coffee.js                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var AutoCompleteRecords, getField, getFindParams, getRegExp, isServerSearch, isWholeField, validateRule,                  
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AutoCompleteRecords = new Mongo.Collection("autocompleteRecords");

isServerSearch = function(rule) {
  return (rule.subscription != null) || _.isString(rule.collection);
};

validateRule = function(rule) {
  if ((rule.subscription != null) && (rule.collection != null)) {
    throw new Error("Rule cannot specify both a server-side subscription and a client/server collection to search simultaneously");
  }
  if (!((rule.subscription != null) || Match.test(rule.collection, Match.OneOf(String, Mongo.Collection)))) {
    throw new Error("Collection to search must be either a Mongo collection or server-side name");
  }
  if (rule.callback != null) {
    return console.warn("autocomplete no longer supports callbacks; use event listeners instead.");
  }
};

isWholeField = function(rule) {
  return !rule.token;
};

getRegExp = function(rule) {
  if (!isWholeField(rule)) {
    return new RegExp('(^|\\b|\\s)' + rule.token + '([\\w.]*)$');
  } else {
    return new RegExp('(^)(.*)$');
  }
};

getFindParams = function(rule, filter, limit) {
  var options, selector, sortspec;
  selector = _.extend({}, rule.filter || {});
  options = {
    limit: limit
  };
  if (!filter) {
    return [selector, options];
  }
  if (rule.sort && rule.field) {
    sortspec = {};
    sortspec[rule.field] = 1;
    options.sort = sortspec;
  }
  if (_.isFunction(rule.selector)) {
    _.extend(selector, rule.selector(filter));
  } else {
    selector[rule.field] = {
      $regex: rule.matchAll ? filter : "^" + filter,
      $options: typeof rule.options === 'undefined' ? 'i' : rule.options
    };
  }
  return [selector, options];
};

getField = function(obj, str) {
  var j, key, len, ref;
  ref = str.split(".");
  for (j = 0, len = ref.length; j < len; j++) {
    key = ref[j];
    obj = obj[key];
  }
  return obj;
};

this.AutoComplete = (function() {
  AutoComplete.KEYS = [40, 38, 13, 27, 9];

  function AutoComplete(settings) {
    this.onItemClick = bind(this.onItemClick, this);
    var j, len, ref, rule;
    this.limit = settings.limit || 5;
    this.position = settings.position || "bottom";
    this.rules = settings.rules;
    ref = this.rules;
    for (j = 0, len = ref.length; j < len; j++) {
      rule = ref[j];
      validateRule(rule);
    }
    this.expressions = (function() {
      var k, len1, ref1, results;
      ref1 = this.rules;
      results = [];
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        rule = ref1[k];
        results.push(getRegExp(rule));
      }
      return results;
    }).call(this);
    this.matched = -1;
    this.loaded = true;
    this.ruleDep = new Deps.Dependency;
    this.filterDep = new Deps.Dependency;
    this.loadingDep = new Deps.Dependency;
    this.sub = null;
    this.comp = Deps.autorun((function(_this) {
      return function() {
        var filter, options, ref1, ref2, selector, subName;
        if ((ref1 = _this.sub) != null) {
          ref1.stop();
        }
        if (!((rule = _this.matchedRule()) && (filter = _this.getFilter()) !== null)) {
          return;
        }
        if (!isServerSearch(rule)) {
          _this.setLoaded(true);
          return;
        }
        ref2 = getFindParams(rule, filter, _this.limit), selector = ref2[0], options = ref2[1];
        _this.setLoaded(false);
        subName = rule.subscription || "autocomplete-recordset";
        return _this.sub = Meteor.subscribe(subName, selector, options, rule.collection, function() {
          return _this.setLoaded(true);
        });
      };
    })(this));
  }

  AutoComplete.prototype.teardown = function() {
    return this.comp.stop();
  };

  AutoComplete.prototype.matchedRule = function() {
    this.ruleDep.depend();
    if (this.matched >= 0) {
      return this.rules[this.matched];
    } else {
      return null;
    }
  };

  AutoComplete.prototype.setMatchedRule = function(i) {
    this.matched = i;
    return this.ruleDep.changed();
  };

  AutoComplete.prototype.getFilter = function() {
    this.filterDep.depend();
    return this.filter;
  };

  AutoComplete.prototype.setFilter = function(x) {
    this.filter = x;
    this.filterDep.changed();
    return this.filter;
  };

  AutoComplete.prototype.isLoaded = function() {
    this.loadingDep.depend();
    return this.loaded;
  };

  AutoComplete.prototype.setLoaded = function(val) {
    if (val === this.loaded) {
      return;
    }
    this.loaded = val;
    return this.loadingDep.changed();
  };

  AutoComplete.prototype.onKeyUp = function() {
    var breakLoop, i, matches, results, startpos, val;
    if (!this.$element) {
      return;
    }
    startpos = this.element.selectionStart;
    val = this.getText().substring(0, startpos);

    /*
      Matching on multiple expressions.
      We always go from a matched state to an unmatched one
      before going to a different matched one.
     */
    i = 0;
    breakLoop = false;
    results = [];
    while (i < this.expressions.length) {
      matches = val.match(this.expressions[i]);
      if (!matches && this.matched === i) {
        this.setMatchedRule(-1);
        breakLoop = true;
      }
      if (matches && this.matched === -1) {
        this.setMatchedRule(i);
        breakLoop = true;
      }
      if (matches && this.filter !== matches[2]) {
        this.setFilter(matches[2]);
        breakLoop = true;
      }
      if (breakLoop) {
        break;
      }
      results.push(i++);
    }
    return results;
  };

  AutoComplete.prototype.onKeyDown = function(e) {
    if (this.matched === -1 || (this.constructor.KEYS.indexOf(e.keyCode) < 0)) {
      return;
    }
    switch (e.keyCode) {
      case 9:
      case 13:
        if (this.select()) {
          e.preventDefault();
          e.stopPropagation();
        }
        break;
      case 40:
        e.preventDefault();
        this.next();
        break;
      case 38:
        e.preventDefault();
        this.prev();
        break;
      case 27:
        this.$element.blur();
        this.hideList();
    }
  };

  AutoComplete.prototype.onFocus = function() {
    return Meteor.defer((function(_this) {
      return function() {
        return _this.onKeyUp();
      };
    })(this));
  };

  AutoComplete.prototype.onBlur = function() {
    return Meteor.setTimeout((function(_this) {
      return function() {
        return _this.hideList();
      };
    })(this), 500);
  };

  AutoComplete.prototype.onItemClick = function(doc, e) {
    return this.processSelection(doc, this.rules[this.matched]);
  };

  AutoComplete.prototype.onItemHover = function(doc, e) {
    this.tmplInst.$(".-autocomplete-item").removeClass("selected");
    return $(e.target).closest(".-autocomplete-item").addClass("selected");
  };

  AutoComplete.prototype.filteredList = function() {
    var filter, options, ref, rule, selector;
    filter = this.getFilter();
    if (this.matched === -1) {
      return null;
    }
    rule = this.rules[this.matched];
    if (!(rule.token || filter)) {
      return null;
    }
    ref = getFindParams(rule, filter, this.limit), selector = ref[0], options = ref[1];
    Meteor.defer((function(_this) {
      return function() {
        return _this.ensureSelection();
      };
    })(this));
    if (isServerSearch(rule)) {
      return AutoCompleteRecords.find({}, options);
    }
    return rule.collection.find(selector, options);
  };

  AutoComplete.prototype.isShowing = function() {
    var rule, showing;
    rule = this.matchedRule();
    showing = (rule != null) && (rule.token || this.getFilter());
    if (showing) {
      Meteor.defer((function(_this) {
        return function() {
          _this.positionContainer();
          return _this.ensureSelection();
        };
      })(this));
    }
    return showing;
  };

  AutoComplete.prototype.select = function() {
    var doc, node;
    node = this.tmplInst.find(".-autocomplete-item.selected");
    if (node == null) {
      return false;
    }
    doc = Blaze.getData(node);
    if (!doc) {
      return false;
    }
    this.processSelection(doc, this.rules[this.matched]);
    return true;
  };

  AutoComplete.prototype.processSelection = function(doc, rule) {
    var replacement;
    replacement = getField(doc, rule.field);
    if (!isWholeField(rule)) {
      this.replace(replacement, rule);
      this.hideList();
    } else {
      this.setText(replacement);
      this.onBlur();
    }
    this.$element.trigger("autocompleteselect", doc);
  };

  AutoComplete.prototype.replace = function(replacement) {
    var finalFight, fullStuff, newPosition, posfix, separator, startpos, val;
    startpos = this.element.selectionStart;
    fullStuff = this.getText();
    val = fullStuff.substring(0, startpos);
    val = val.replace(this.expressions[this.matched], "$1" + this.rules[this.matched].token + replacement);
    posfix = fullStuff.substring(startpos, fullStuff.length);
    separator = (posfix.match(/^\s/) ? "" : " ");
    finalFight = val + separator + posfix;
    this.setText(finalFight);
    newPosition = val.length + 1;
    this.element.setSelectionRange(newPosition, newPosition);
  };

  AutoComplete.prototype.hideList = function() {
    this.setMatchedRule(-1);
    return this.setFilter(null);
  };

  AutoComplete.prototype.getText = function() {
    return this.$element.val() || this.$element.text();
  };

  AutoComplete.prototype.setText = function(text) {
    if (this.$element.is("input,textarea")) {
      return this.$element.val(text);
    } else {
      return this.$element.html(text);
    }
  };


  /*
    Rendering functions
   */

  AutoComplete.prototype.positionContainer = function() {
    var offset, pos, position, rule;
    position = this.$element.position();
    rule = this.matchedRule();
    offset = getCaretCoordinates(this.element, this.element.selectionStart);
    if ((rule != null) && isWholeField(rule)) {
      pos = {
        left: position.left,
        width: this.$element.outerWidth()
      };
    } else {
      pos = {
        left: position.left + offset.left
      };
    }
    if (this.position === "top") {
      pos.bottom = this.$element.offsetParent().height() - position.top - offset.top;
    } else {
      pos.top = position.top + offset.top + parseInt(this.$element.css('font-size'));
    }
    return this.tmplInst.$(".-autocomplete-container").css(pos);
  };

  AutoComplete.prototype.ensureSelection = function() {
    var selectedItem;
    selectedItem = this.tmplInst.$(".-autocomplete-item.selected");
    if (!selectedItem.length) {
      return this.tmplInst.$(".-autocomplete-item:first-child").addClass("selected");
    }
  };

  AutoComplete.prototype.next = function() {
    var currentItem, next;
    currentItem = this.tmplInst.$(".-autocomplete-item.selected");
    if (!currentItem.length) {
      return;
    }
    currentItem.removeClass("selected");
    next = currentItem.next();
    if (next.length) {
      return next.addClass("selected");
    } else {
      return this.tmplInst.$(".-autocomplete-item:first-child").addClass("selected");
    }
  };

  AutoComplete.prototype.prev = function() {
    var currentItem, prev;
    currentItem = this.tmplInst.$(".-autocomplete-item.selected");
    if (!currentItem.length) {
      return;
    }
    currentItem.removeClass("selected");
    prev = currentItem.prev();
    if (prev.length) {
      return prev.addClass("selected");
    } else {
      return this.tmplInst.$(".-autocomplete-item:last-child").addClass("selected");
    }
  };

  AutoComplete.prototype.currentTemplate = function() {
    return this.rules[this.matched].template;
  };

  return AutoComplete;

})();

AutocompleteTest = {
  records: AutoCompleteRecords,
  isServerSearch: isServerSearch,
  getRegExp: getRegExp,
  getFindParams: getFindParams
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ifuturz_autocomplete/templates.coffee.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var acEvents, attributes, autocompleteHelpers;

acEvents = {
  "keydown": function(e, t) {
    return t.ac.onKeyDown(e);
  },
  "keyup": function(e, t) {
    return t.ac.onKeyUp(e);
  },
  "focus": function(e, t) {
    return t.ac.onFocus(e);
  },
  "blur": function(e, t) {
    return t.ac.onBlur(e);
  }
};

Template.inputAutocomplete.events(acEvents);

Template.textareaAutocomplete.events(acEvents);

attributes = function() {
  return _.omit(this, 'settings');
};

autocompleteHelpers = {
  attributes: attributes,
  autocompleteContainer: new Template('AutocompleteContainer', function() {
    var ac;
    ac = new AutoComplete(Blaze.getData().settings);
    this.parentView.templateInstance().ac = ac;
    this.onViewReady(function() {
      ac.element = this.parentView.firstNode();
      return ac.$element = $(ac.element);
    });
    return Blaze.With(ac, function() {
      return Template._autocompleteContainer;
    });
  })
};

Template.inputAutocomplete.helpers(autocompleteHelpers);

Template.textareaAutocomplete.helpers(autocompleteHelpers);

Template._autocompleteContainer.rendered = function() {
  return this.data.tmplInst = this;
};

Template._autocompleteContainer.destroyed = function() {
  return this.data.teardown();
};


/*
  List rendering helpers
 */

Template._autocompleteContainer.events({
  "click .-autocomplete-item": function(e, t) {
    return t.data.onItemClick(this, e);
  },
  "mouseenter .-autocomplete-item": function(e, t) {
    return t.data.onItemHover(this, e);
  }
});

Template._autocompleteContainer.helpers({
  empty: function() {
    return this.filteredList().count() === 0;
  },
  noMatchTemplate: function() {
    return this.matchedRule().noMatchTemplate || Template._noMatch;
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("ifuturz:autocomplete", {
  AutocompleteTest: AutocompleteTest
});

})();
