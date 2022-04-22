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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package['templating-runtime'].Template;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"barbatus:stars-rating":{"template.stars_rating.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/barbatus_stars-rating/template.stars_rating.js                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //

Template.__checkName("starsRating");
Template["starsRating"] = new Template("Template.starsRating", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(view.lookup("getId"));
    },
    class: function() {
      return [ "stars-rating ", Spacebars.mustache(view.lookup("class")), " ", Spacebars.mustache(view.lookup("css"), view.lookup("size")) ];
    },
    style: function() {
      return Spacebars.mustache(view.lookup("font"), view.lookup("size"));
    },
    "data-rating": function() {
      return Spacebars.mustache(view.lookup("rating"));
    },
    star: function() {
      return Spacebars.mustache(view.lookup("star"));
    }
  }, "\n    ", HTML.DIV({
    class: "stars-inner-wrap"
  }, "\n      ", Blaze._TemplateWith(function() {
    return {
      mutable: Spacebars.call(view.lookup("getMutable")),
      size: Spacebars.call(5)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("_stars"));
  }), "\n      ", Blaze._TemplateWith(function() {
    return {
      mutable: Spacebars.call(view.lookup("getMutable")),
      size: Spacebars.call(4)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("_stars"));
  }), "\n      ", Blaze._TemplateWith(function() {
    return {
      mutable: Spacebars.call(view.lookup("getMutable")),
      size: Spacebars.call(3)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("_stars"));
  }), "\n      ", Blaze._TemplateWith(function() {
    return {
      mutable: Spacebars.call(view.lookup("getMutable")),
      size: Spacebars.call(2)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("_stars"));
  }), "\n      ", Blaze._TemplateWith(function() {
    return {
      mutable: Spacebars.call(view.lookup("getMutable")),
      size: Spacebars.call(1)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("_stars"));
  }), "\n    "), "\n  ");
}));

Template.__checkName("_stars");
Template["_stars"] = new Template("Template._stars", (function() {
  var view = this;
  return HTML.DIV({
    class: "stars",
    "data-stars": function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("stars"), "length"));
    }
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("stars"));
  }, function() {
    return HTML.SPAN({
      class: function() {
        return [ "star-", Spacebars.mustache(view.lookup(".")) ];
      }
    }, HTML.I({
      class: "star-glyph"
    }));
  }), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stars_rating.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/barbatus_stars-rating/stars_rating.js                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
'use strict';

var rtCss = 'current-rating';
var prCss = 'percent';
var hasUserCss = 'has-user-rating';

function getStarsEl($parent, index) {
  return $parent.find("[data-stars=\"" + index + "\"]");
}

function getPercentStarEl($parent, index) {
  return getStarsEl($parent, index).find('.star-' + index);
}

function getStarColor($el) {
  var span = $('<span>').addClass(rtCss).appendTo($el);
  var starColor = span.css('color');
  span.remove();
  return starColor;
}

function getStarGlyph($el) {
  var starGlyph = $el.attr('star');

  if (!starGlyph) {
    // For compatibility with older versions.
    //
    // If now star attr is set, take the star symbol
    // from the upper CSS class (via content property).
    // This will work in most browsers except IE.
    starGlyph = $el.css('content');

    if (!starGlyph || starGlyph === 'none') {
      starGlyph = '\\2605';
    } else {
      // if it's IE replace glyph with the default symbol.
      if (starGlyph === 'normal') {
        starGlyph = '\\2605';
      }
    }
  } // Prepare glyph for styles.


  starGlyph = '"' + starGlyph.trim().replace(/[\',\"]/g, '') + '"';
  return starGlyph;
}

function buildStyle(className, styles) {
  var styleStr = '';

  for (var style in meteorBabelHelpers.sanitizeForInObject(styles)) {
    styleStr += style + ":" + styles[style] + ";";
  }

  return "." + className + " {" + styleStr + "};";
}

function setRating($el, rating, isUser, starGlyph) {
  var ceil = Math.ceil(rating);
  var floor = Math.floor(rating);
  var percent = rating - floor;
  $el.find('.stars').removeClass(rtCss);
  $el.find('.stars').find('.percent').removeClass(prCss);
  $el.toggleClass(hasUserCss, isUser);

  for (var i = floor; i >= 0; i--) {
    getStarsEl($el, i).addClass(rtCss);
  }

  if (percent) {
    var $perStar = getPercentStarEl($el, ceil).addClass(prCss);
    var starColor = getStarColor($el);
    $perStar.find('style').remove();
    var style = "\n        <style>\n          #" + getOrSetTmplId() + " " + buildStyle('percent:before', {
      width: percent * 100 + '% !important',
      color: starColor,
      content: starGlyph
    }) + "\n        </style>\n      ";
    $perStar.append(style);
  }

  $el.trigger('change');
}

function addjQuryApi($el) {
  $el.bind('reset', function () {
    $el.find('.stars').removeClass(rtCss);
    $el.find('.stars').find('.percent').removeClass(prCss);
  });
}

function destroyApi() {
  $el.unbind('reset');
}

function getOrSetTmplId(opt_id) {
  if (!Template.instance()._id) {
    Template.instance()._id = opt_id || _.uniqueId('stars_');
  }

  return Template.instance()._id;
}

Template.starsRating.helpers({
  getId: function () {
    return getOrSetTmplId(this.id);
  },
  css: function (size) {
    if (_.isString(size)) {
      return 'stars-rating-' + (size || 'sm');
    }
  },
  font: function (size) {
    if (_.isNumber(size)) {
      return 'font-size:' + size + 'px';
    }
  }
});

function onDataChange($el, rating, starGlyph) {
  setRating($el, rating, false, starGlyph);
}

Template.starsRating.destroyed = function () {
  if (this.firstNode) {
    destroyApi($(this.firstNode));
  }
};

Template.starsRating.rendered = function () {
  var self = this;
  var $el = $(self.firstNode);
  var starGlyph = getStarGlyph($el);
  addjQuryApi($el); // Adds all required styles to set new symbol for the internal
  // pseudo elements.

  var style = "\n    <style>\n      #" + getOrSetTmplId() + " " + buildStyle('star-glyph:before', {
    content: starGlyph
  }) + "\n    </style>\n  ";
  $el.append(style);
  this.autorun(function () {
    var userData = Template.currentData();

    if (userData) {
      var rating = userData.rating;

      if (rating !== undefined) {
        onDataChange($el, rating, starGlyph);
      }
    }
  });
};

Template.starsRating.events({
  'mouseover .stars': function (event) {
    if (this.isMutable || this.mutable) {
      var $this = $(event.currentTarget);
      var rating = $this.data('stars');

      for (var i = rating; i >= 0; i--) {
        getStarsEl($this.parent(), i).addClass('active');
      }

      for (var _i = rating + 1; _i <= 5; _i++) {
        getStarsEl($this.parent(), _i).removeClass('active');
      }
    }
  },
  'mouseleave .stars-rating': function (event) {
    if (this.isMutable || this.mutable) {
      var $this = $(event.currentTarget);
      $this.find('.stars').removeClass('active');
    }
  },
  'click .stars': function (event) {
    if (this.isMutable || this.mutable) {
      var $this = $(event.currentTarget);
      var userRating = $this.data('stars');

      var _$el = $this.parent().parent();

      _$el.data('userrating', userRating);

      var $starsWrap = $this.parent();
      setRating($starsWrap, userRating, true);
      $starsWrap.children().removeClass('active');
    }
  }
});
Template.starsRating.helpers({
  getMutable: function (size) {
    return this.isMutable || this.mutable;
  }
});

Template._stars.helpers({
  stars: function () {
    return _.range(1, this.size + 1);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});
require("/node_modules/meteor/barbatus:stars-rating/template.stars_rating.js");
require("/node_modules/meteor/barbatus:stars-rating/stars_rating.js");

/* Exports */
Package._define("barbatus:stars-rating");

})();
