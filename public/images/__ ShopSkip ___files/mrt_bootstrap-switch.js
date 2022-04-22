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

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/mrt_bootstrap-switch/packages/mrt_bootstrap-switch.js    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mrt:bootstrap-switch/lib/jquery.switch.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! ============================================================                                                       // 1
 * bootstrap-switch v1.9.0 by Larentis Mattia @SpiritualGuru                                                           // 2
 * http://www.larentis.eu/                                                                                             // 3
 *                                                                                                                     // 4
 * Enhanced for radiobuttons by Stein, Peter @BdMdesigN                                                                // 5
 * http://www.bdmdesign.org/                                                                                           // 6
 *                                                                                                                     // 7
 * Project site:                                                                                                       // 8
 * http://www.larentis.eu/switch/                                                                                      // 9
 * ============================================================                                                        // 10
 * Licensed under the Apache License, Version 2.0                                                                      // 11
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 12
 * ============================================================ */                                                     // 13
                                                                                                                       // 14
!function ($) {                                                                                                        // 15
  "use strict";                                                                                                        // 16
                                                                                                                       // 17
  $.fn.bootstrapSwitch = function (method) {                                                                           // 18
    var inputSelector = 'input[type!="hidden"]';                                                                       // 19
    var methods = {                                                                                                    // 20
                                                                                                                       // 21
      init: function () {                                                                                              // 22
        return this.each(function () {                                                                                 // 23
            var $element = $(this),                                                                                    // 24
                $div,                                                                                                  // 25
                $switchLeft,                                                                                           // 26
                $switchRight,                                                                                          // 27
                $label,                                                                                                // 28
                $form = $element.closest('form'),                                                                      // 29
                myClasses = "",                                                                                        // 30
                classes = $element.attr('class'),                                                                      // 31
                color,                                                                                                 // 32
                moving,                                                                                                // 33
                onLabel = "ON",                                                                                        // 34
                offLabel = "OFF",                                                                                      // 35
                icon = false,                                                                                          // 36
                textLabel = false;                                                                                     // 37
                                                                                                                       // 38
            $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {                                 // 39
              if (classes.indexOf(el) >= 0) {                                                                          // 40
                myClasses = el;                                                                                        // 41
              }                                                                                                        // 42
            });                                                                                                        // 43
                                                                                                                       // 44
            $element.addClass('has-switch');                                                                           // 45
                                                                                                                       // 46
            if ($element.data('on') !== undefined) {                                                                   // 47
              color = "switch-" + $element.data('on');                                                                 // 48
            }                                                                                                          // 49
                                                                                                                       // 50
            if ($element.data('on-label') !== undefined) {                                                             // 51
              onLabel = $element.data('on-label');                                                                     // 52
            }                                                                                                          // 53
                                                                                                                       // 54
            if ($element.data('off-label') !== undefined) {                                                            // 55
              offLabel = $element.data('off-label');                                                                   // 56
            }                                                                                                          // 57
                                                                                                                       // 58
            if ($element.data('label-icon') !== undefined) {                                                           // 59
              icon = $element.data('label-icon');                                                                      // 60
            }                                                                                                          // 61
                                                                                                                       // 62
            if ($element.data('text-label') !== undefined) {                                                           // 63
              textLabel = $element.data('text-label');                                                                 // 64
            }                                                                                                          // 65
                                                                                                                       // 66
            $switchLeft = $('<span>')                                                                                  // 67
            .addClass("switch-left")                                                                                   // 68
            .addClass(myClasses)                                                                                       // 69
            .addClass(color)                                                                                           // 70
            .html('' + onLabel + '');                                                                                  // 71
                                                                                                                       // 72
            color = '';                                                                                                // 73
            if ($element.data('off') !== undefined) {                                                                  // 74
              color = "switch-" + $element.data('off');                                                                // 75
            }                                                                                                          // 76
                                                                                                                       // 77
            $switchRight = $('<span>')                                                                                 // 78
            .addClass("switch-right")                                                                                  // 79
            .addClass(myClasses)                                                                                       // 80
            .addClass(color)                                                                                           // 81
            .html('' + offLabel + '');                                                                                 // 82
                                                                                                                       // 83
            $label = $('<label>')                                                                                      // 84
            .html("&nbsp;")                                                                                            // 85
            .addClass(myClasses)                                                                                       // 86
            .attr('for', $element.find(inputSelector).attr('id'));                                                     // 87
                                                                                                                       // 88
            if (icon) {                                                                                                // 89
              $label.html('<i class="icon ' + icon + '"></i>');                                                        // 90
            }                                                                                                          // 91
                                                                                                                       // 92
            if (textLabel) {                                                                                           // 93
              $label.html('' + textLabel + '');                                                                        // 94
            }                                                                                                          // 95
                                                                                                                       // 96
            $div = $element.find(inputSelector).wrap($('<div>')).parent().data('animated', false);                     // 97
                                                                                                                       // 98
            if ($element.data('animated') !== false) {                                                                 // 99
              $div.addClass('switch-animate').data('animated', true);                                                  // 100
            }                                                                                                          // 101
                                                                                                                       // 102
            $div                                                                                                       // 103
            .append($switchLeft)                                                                                       // 104
            .append($label)                                                                                            // 105
            .append($switchRight);                                                                                     // 106
                                                                                                                       // 107
            $element.find('> div').addClass($element.find(inputSelector).is(':checked') ? 'switch-on' : 'switch-off'); // 108
                                                                                                                       // 109
            if ($element.find(inputSelector).is(':disabled')) {                                                        // 110
              $(this).addClass('deactivate');                                                                          // 111
            }                                                                                                          // 112
                                                                                                                       // 113
            var changeStatus = function ($this) {                                                                      // 114
              if ($element.parent('label').is('.label-change-switch')) {                                               // 115
                                                                                                                       // 116
              } else {                                                                                                 // 117
                $this.siblings('label').trigger('mousedown').trigger('mouseup').trigger('click');                      // 118
              }                                                                                                        // 119
            };                                                                                                         // 120
                                                                                                                       // 121
            $element.on('keydown', function (e) {                                                                      // 122
              if (e.keyCode === 32) {                                                                                  // 123
                e.stopImmediatePropagation();                                                                          // 124
                e.preventDefault();                                                                                    // 125
                changeStatus($(e.target).find('span:first'));                                                          // 126
              }                                                                                                        // 127
            });                                                                                                        // 128
                                                                                                                       // 129
            $switchLeft.on('click', function () {                                                                      // 130
              changeStatus($(this));                                                                                   // 131
            });                                                                                                        // 132
                                                                                                                       // 133
            $switchRight.on('click', function () {                                                                     // 134
              changeStatus($(this));                                                                                   // 135
            });                                                                                                        // 136
                                                                                                                       // 137
            $element.find(inputSelector).on('change', function (e, skipOnChange) {                                     // 138
              var $this = $(this),                                                                                     // 139
                  $element = $this.parent(),                                                                           // 140
                  thisState = $this.is(':checked'),                                                                    // 141
                  state = $element.is('.switch-off');                                                                  // 142
                                                                                                                       // 143
              e.preventDefault();                                                                                      // 144
                                                                                                                       // 145
              $element.css('left', '');                                                                                // 146
                                                                                                                       // 147
              if (state === thisState) {                                                                               // 148
                if (thisState) {                                                                                       // 149
                  $element.removeClass('switch-off').addClass('switch-on');                                            // 150
                }                                                                                                      // 151
                else {                                                                                                 // 152
                  $element.removeClass('switch-on').addClass('switch-off');                                            // 153
                }                                                                                                      // 154
                                                                                                                       // 155
                if ($element.data('animated') !== false) {                                                             // 156
                  $element.addClass("switch-animate");                                                                 // 157
                }                                                                                                      // 158
                                                                                                                       // 159
                if (typeof skipOnChange === 'boolean' && skipOnChange) {                                               // 160
                  return;                                                                                              // 161
                }                                                                                                      // 162
                                                                                                                       // 163
                $element.parent().trigger('switch-change', {                                                           // 164
                  el: $this,                                                                                           // 165
                  value: thisState                                                                                     // 166
                });                                                                                                    // 167
              }                                                                                                        // 168
            });                                                                                                        // 169
                                                                                                                       // 170
            $element.find('label').on('mousedown touchstart', function (e) {                                           // 171
              var $this = $(this);                                                                                     // 172
              moving = false;                                                                                          // 173
                                                                                                                       // 174
              e.preventDefault();                                                                                      // 175
              e.stopImmediatePropagation();                                                                            // 176
                                                                                                                       // 177
              $this.closest('div').removeClass('switch-animate');                                                      // 178
                                                                                                                       // 179
              if ($this.closest('.has-switch').is('.deactivate')) {                                                    // 180
                $this.unbind('click');                                                                                 // 181
              } else if ($this.closest('.switch-on').parent().is('.radio-no-uncheck')) {                               // 182
                $this.unbind('click');                                                                                 // 183
              } else {                                                                                                 // 184
                $this.on('mousemove touchmove', function (e) {                                                         // 185
                  var $element = $(this).closest('.make-switch'),                                                      // 186
                      relativeX = (e.pageX || e.originalEvent.targetTouches[0].pageX) - $element.offset().left,        // 187
                      percent = (relativeX / $element.width()) * 100,                                                  // 188
                      left = 25,                                                                                       // 189
                      right = 75;                                                                                      // 190
                                                                                                                       // 191
                  moving = true;                                                                                       // 192
                                                                                                                       // 193
                  if (percent < left) {                                                                                // 194
                    percent = left;                                                                                    // 195
                  }                                                                                                    // 196
                  else if (percent > right) {                                                                          // 197
                    percent = right;                                                                                   // 198
                  }                                                                                                    // 199
                                                                                                                       // 200
                  $element.find('>div').css('left', (percent - right) + "%");                                          // 201
                });                                                                                                    // 202
                                                                                                                       // 203
                $this.on('click touchend', function (e) {                                                              // 204
                  var $this = $(this),                                                                                 // 205
                      $myInputBox = $this.siblings('input');                                                           // 206
                                                                                                                       // 207
                  e.stopImmediatePropagation();                                                                        // 208
                  e.preventDefault();                                                                                  // 209
                                                                                                                       // 210
                  $this.unbind('mouseleave');                                                                          // 211
                                                                                                                       // 212
                  if (moving) {                                                                                        // 213
                    $myInputBox.prop('checked', !(parseInt($this.parent().css('left'), 10) < -25));                    // 214
                  }                                                                                                    // 215
                  else {                                                                                               // 216
                    $myInputBox.prop("checked", !$myInputBox.is(":checked"));                                          // 217
                  }                                                                                                    // 218
                                                                                                                       // 219
                  moving = false;                                                                                      // 220
                  $myInputBox.trigger('change');                                                                       // 221
                });                                                                                                    // 222
                                                                                                                       // 223
                $this.on('mouseleave', function (e) {                                                                  // 224
                  var $this = $(this),                                                                                 // 225
                      $myInputBox = $this.siblings('input');                                                           // 226
                                                                                                                       // 227
                  e.preventDefault();                                                                                  // 228
                  e.stopImmediatePropagation();                                                                        // 229
                                                                                                                       // 230
                  $this.unbind('mouseleave mousemove');                                                                // 231
                  $this.trigger('mouseup');                                                                            // 232
                                                                                                                       // 233
                  $myInputBox.prop('checked', ! (parseInt($this.parent().css('left'), 10) < -25)).trigger('change');   // 234
                });                                                                                                    // 235
                                                                                                                       // 236
                $this.on('mouseup', function (e) {                                                                     // 237
                  e.stopImmediatePropagation();                                                                        // 238
                  e.preventDefault();                                                                                  // 239
                                                                                                                       // 240
                  $(this).trigger('mouseleave');                                                                       // 241
                });                                                                                                    // 242
              }                                                                                                        // 243
            });                                                                                                        // 244
                                                                                                                       // 245
            if ($form.data('bootstrapSwitch') !== 'injected') {                                                        // 246
              $form.bind('reset', function () {                                                                        // 247
                setTimeout(function () {                                                                               // 248
                  $form.find('.make-switch').each(function () {                                                        // 249
                    var $input = $(this).find(inputSelector);                                                          // 250
                                                                                                                       // 251
                    $input.prop('checked', $input.is(':checked')).trigger('change');                                   // 252
                  });                                                                                                  // 253
                }, 1);                                                                                                 // 254
              });                                                                                                      // 255
              $form.data('bootstrapSwitch', 'injected');                                                               // 256
            }                                                                                                          // 257
          }                                                                                                            // 258
        );                                                                                                             // 259
      },                                                                                                               // 260
                                                                                                                       // 261
      toggleActivation: function () {                                                                                  // 262
        var $this = $(this);                                                                                           // 263
                                                                                                                       // 264
        $this.toggleClass('deactivate');                                                                               // 265
        $this.find(inputSelector).prop('disabled', $this.is('.deactivate'));                                           // 266
      },                                                                                                               // 267
                                                                                                                       // 268
      isActive: function () {                                                                                          // 269
        return !$(this).hasClass('deactivate');                                                                        // 270
      },                                                                                                               // 271
                                                                                                                       // 272
      setActive: function (active) {                                                                                   // 273
        var $this = $(this);                                                                                           // 274
                                                                                                                       // 275
        if (active) {                                                                                                  // 276
          $this.removeClass('deactivate');                                                                             // 277
          $this.find(inputSelector).removeAttr('disabled');                                                            // 278
        }                                                                                                              // 279
        else {                                                                                                         // 280
          $this.addClass('deactivate');                                                                                // 281
          $this.find(inputSelector).attr('disabled', 'disabled');                                                      // 282
        }                                                                                                              // 283
      },                                                                                                               // 284
                                                                                                                       // 285
      toggleState: function (skipOnChange) {                                                                           // 286
        var $input = $(this).find(':checkbox');                                                                        // 287
        $input.prop('checked', !$input.is(':checked')).trigger('change', skipOnChange);                                // 288
      },                                                                                                               // 289
                                                                                                                       // 290
      toggleRadioState: function (skipOnChange) {                                                                      // 291
        var $radioinput = $(this).find(':radio');                                                                      // 292
        $radioinput.not(':checked').prop('checked', !$radioinput.is(':checked')).trigger('change', skipOnChange);      // 293
      },                                                                                                               // 294
                                                                                                                       // 295
      toggleRadioStateAllowUncheck: function (uncheck, skipOnChange) {                                                 // 296
        var $radioinput = $(this).find(':radio');                                                                      // 297
                                                                                                                       // 298
        if (uncheck) {                                                                                                 // 299
          $radioinput.not(':checked').trigger('change', skipOnChange);                                                 // 300
        }                                                                                                              // 301
        else {                                                                                                         // 302
          $radioinput.not(':checked').prop('checked', ! $radioinput.is(':checked')).trigger('change', skipOnChange);   // 303
        }                                                                                                              // 304
      },                                                                                                               // 305
                                                                                                                       // 306
      setState: function (value, skipOnChange) {                                                                       // 307
        $(this).find(inputSelector).prop('checked', value).trigger('change', skipOnChange);                            // 308
      },                                                                                                               // 309
                                                                                                                       // 310
      setOnLabel: function (value) {                                                                                   // 311
        var $switchLeft = $(this).find(".switch-left");                                                                // 312
                                                                                                                       // 313
        $switchLeft.html(value);                                                                                       // 314
      },                                                                                                               // 315
                                                                                                                       // 316
      setOffLabel: function (value) {                                                                                  // 317
        var $switchRight = $(this).find(".switch-right");                                                              // 318
                                                                                                                       // 319
        $switchRight.html(value);                                                                                      // 320
      },                                                                                                               // 321
                                                                                                                       // 322
      setOnClass: function (value) {                                                                                   // 323
        var $switchLeft = $(this).find(".switch-left"),                                                                // 324
            color = '';                                                                                                // 325
                                                                                                                       // 326
        if (value !== undefined) {                                                                                     // 327
          if ($(this).attr('data-on') !== undefined) {                                                                 // 328
            color = "switch-" + $(this).attr('data-on');                                                               // 329
          }                                                                                                            // 330
          $switchLeft.removeClass(color);                                                                              // 331
          color = "switch-" + value;                                                                                   // 332
          $switchLeft.addClass(color);                                                                                 // 333
        }                                                                                                              // 334
      },                                                                                                               // 335
                                                                                                                       // 336
      setOffClass: function (value) {                                                                                  // 337
        var $switchRight = $(this).find(".switch-right"),                                                              // 338
            color = '';                                                                                                // 339
                                                                                                                       // 340
        if (value !== undefined) {                                                                                     // 341
          if ($(this).attr('data-off') !== undefined) {                                                                // 342
            color = "switch-" + $(this).attr('data-off');                                                              // 343
          }                                                                                                            // 344
          $switchRight.removeClass(color);                                                                             // 345
          color = "switch-" + value;                                                                                   // 346
          $switchRight.addClass(color);                                                                                // 347
        }                                                                                                              // 348
      },                                                                                                               // 349
                                                                                                                       // 350
      setAnimated: function (value) {                                                                                  // 351
        var $element = $(this).find(inputSelector).parent();                                                           // 352
                                                                                                                       // 353
        if (value === undefined) {                                                                                     // 354
          value = false;                                                                                               // 355
        }                                                                                                              // 356
                                                                                                                       // 357
        $element.data('animated', value);                                                                              // 358
        $element.attr('data-animated', value);                                                                         // 359
        $element[$element.data('animated') !== false ? 'addClass' : 'removeClass']("switch-animate");                  // 360
      },                                                                                                               // 361
                                                                                                                       // 362
      setSizeClass: function (value) {                                                                                 // 363
        var $element = $(this);                                                                                        // 364
        var $switchLeft = $element.find(".switch-left");                                                               // 365
        var $switchRight = $element.find(".switch-right");                                                             // 366
        var $label = $element.find("label");                                                                           // 367
        $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {                                     // 368
          if (el !== value) {                                                                                          // 369
            $switchLeft.removeClass(el);                                                                               // 370
            $switchRight.removeClass(el);                                                                              // 371
            $label.removeClass(el);                                                                                    // 372
          } else {                                                                                                     // 373
            $switchLeft.addClass(el);                                                                                  // 374
            $switchRight.addClass(el);                                                                                 // 375
            $label.addClass(el);                                                                                       // 376
          }                                                                                                            // 377
        });                                                                                                            // 378
      },                                                                                                               // 379
                                                                                                                       // 380
      status: function () {                                                                                            // 381
        return $(this).find(inputSelector).is(':checked');                                                             // 382
      },                                                                                                               // 383
                                                                                                                       // 384
      destroy: function () {                                                                                           // 385
        var $element = $(this),                                                                                        // 386
            $div = $element.find('div'),                                                                               // 387
            $form = $element.closest('form'),                                                                          // 388
            $inputbox;                                                                                                 // 389
                                                                                                                       // 390
        $div.find(':not(input)').remove();                                                                             // 391
        $inputbox = $div.children();                                                                                   // 392
        $inputbox.unwrap().unwrap();                                                                                   // 393
        $inputbox.unbind('change');                                                                                    // 394
                                                                                                                       // 395
        if ($form) {                                                                                                   // 396
          $form.unbind('reset');                                                                                       // 397
          $form.removeData('bootstrapSwitch');                                                                         // 398
        }                                                                                                              // 399
                                                                                                                       // 400
        return $inputbox;                                                                                              // 401
      }                                                                                                                // 402
    };                                                                                                                 // 403
                                                                                                                       // 404
    if (methods[method]) {                                                                                             // 405
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));                                    // 406
    }                                                                                                                  // 407
    if (typeof method === 'object' || ! method) {                                                                      // 408
      return methods.init.apply(this, arguments);                                                                      // 409
    }                                                                                                                  // 410
                                                                                                                       // 411
    $.error('Method ' + method + ' does not exist!');                                                                  // 412
  };                                                                                                                   // 413
}(jQuery);                                                                                                             // 414
                                                                                                                       // 415
(function ($) {                                                                                                        // 416
  $(function () {                                                                                                      // 417
    $('.make-switch').bootstrapSwitch();                                                                               // 418
  });                                                                                                                  // 419
})(jQuery);                                                                                                            // 420
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("mrt:bootstrap-switch");

})();
