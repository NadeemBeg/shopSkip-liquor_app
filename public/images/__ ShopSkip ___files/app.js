var require = meteorInstall({"client":{"FAQs":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/FAQs/template.template.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("faq");
Template["faq"] = new Template("Template.faq", (function() {
  var view = this;
  return HTML.DIV({
    class: "howappworks"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 col-lg-6 col-md-6 col-sm-6 npm">\n                      <div class="header_title">\n                        <h2>FAQ</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form faq"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                 ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "panel-group",
    id: "accordion"
  }, "\n                    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("FAQs"));
  }, function() {
    return [ "\n                      ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("FAQs"));
    }, function() {
      return [ "\n                      ", HTML.DIV({
        class: "panel panel-default"
      }, "\n                          ", HTML.DIV({
        class: "panel-heading"
      }, "\n                              ", HTML.H4({
        class: "panel-title"
      }, "\n                                  ", HTML.A({
        "data-toggle": "collapse",
        "data-parent": "#accordion",
        href: function() {
          return [ "#", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
        }
      }, Blaze.View("lookup:..question", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "question"));
      })), "\n                              "), "\n                          "), "\n                          ", HTML.DIV({
        id: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        },
        class: "panel-collapse collapse"
      }, "\n                              ", HTML.DIV({
        class: "panel-body"
      }, "\n                                  ", HTML.P(Blaze.View("lookup:..answer", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "answer"));
      })), "\n                              "), "\n                          "), "\n                      "), "\n                      " ];
    }), "\n                    " ];
  }, function() {
    return "\n                    ";
  }), "\n                    "), "\n                    \n                  "), "\n                "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/FAQs/script.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.faq.onCreated(function () {
  Meteor.subscribe('getfaqs');
});
Template.faq.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.faq.helpers({
  FAQs: function () {
    return faqs.find().fetch();
  }
});
Template.faq.events({});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"accountdetails":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/accountdetails/template.template.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("accountdetails");
Template["accountdetails"] = new Template("Template.accountdetails", (function() {
  var view = this;
  return HTML.DIV({
    class: "account-details gray-color-bg"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 npm">\n                      <div class="header_title">\n                        <h2>Account Details</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form favorites-list"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form",
    id: "changeAccountDetailForm"
  }, "\n                      ", HTML.DIV({
    class: "account-details-page"
  }, "\n                        ", HTML.Raw("<h3>Edit Details</h3>"), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">First Name</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    id: "first_name",
    value: function() {
      return Spacebars.mustache(view.lookup("firstName"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input errorSpan"></span>'), " \n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">Last Name</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    id: "last_name",
    value: function() {
      return Spacebars.mustache(view.lookup("lastName"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input errorSpan"></span>'), " \n                        "), "\n                        ", HTML.DIV({
    class: "select-box"
  }, "\n                          ", HTML.DIV({
    class: "form-group"
  }, "\n                            ", HTML.SELECT({
    class: "form-control isRequired",
    id: "user_country"
  }, "\n                              ", HTML.Raw('<option disabled="disabled" selected="selected">Select Country</option>'), " \n                              ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("countries")),
      _variable: "country"
    };
  }, function() {
    return [ "\n                                ", HTML.OPTION({
      selected: function() {
        return Spacebars.mustache(view.lookup("isSelected"), Spacebars.dot(view.lookup("country"), "countryName"));
      }
    }, Blaze.View("lookup:country.countryName", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("country"), "countryName"));
    })), "\n                              " ];
  }), "\n                            "), "\n                            ", HTML.Raw('<span class="material-input errorSpan"></span>'), "\n                          "), "\n                          ", HTML.Raw('<div class="selectarrow"><i class="fa fa-angle-down"></i></div>'), "\n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">Email</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    id: "email_address",
    value: function() {
      return Spacebars.mustache(view.lookup("userEmail"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input errorSpan"></span>'), " \n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">Birthday</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "datepicker form-control isRequired",
    id: "birthday",
    value: function() {
      return Spacebars.mustache(view.lookup("userBirthday"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input errorSpan"></span>'), " \n                        "), "\n                        ", HTML.Raw("<h3>Home Address</h3>"), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">Street</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    name: "userStreet",
    id: "user_street",
    value: function() {
      return Spacebars.mustache(view.lookup("userStreet"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input errorSpan"></span>'), "\n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">City</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    name: "userCity",
    id: "user_city",
    value: function() {
      return Spacebars.mustache(view.lookup("userCity"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input errorSpan"></span>'), "\n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">State</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    name: "userState",
    id: "user_state",
    value: function() {
      return Spacebars.mustache(view.lookup("userState"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input errorSpan"></span>'), "\n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">Zip</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    name: "userZip",
    id: "user_zip",
    value: function() {
      return Spacebars.mustache(view.lookup("userZip"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input errorSpan"></span>'), "\n                        "), "\n                      "), "\n                      ", HTML.Raw('<div class="form-group">\n                        <div class="pos-relative">\n                          <button class="btn btn-block text-uppercase" id="update_account">\n                            Update\n                            <div class="ripple-container"></div>\n                          </button>\n                        </div>\n                      </div>'), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), " \n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/accountdetails/script.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.accountdetails.onCreated(function () {});
Template.accountdetails.onRendered(function () {
  this.$('.datepicker').datepicker();
});
Template.accountdetails.helpers({
  firstName: function () {
    return Meteor.user().profile.firstName;
  },
  lastName: function () {
    return Meteor.user().profile.lastName;
  },
  countryName: function () {
    return Meteor.user().profile.country;
  },
  userEmail: function () {
    return Meteor.user().username;
  },
  userBirthday: function () {
    return moment(Meteor.user().profile.birthday).format("DD/MM/YYYY");
  },
  userStreet: function () {
    return Meteor.user().profile.street;
  },
  userCity: function () {
    return Meteor.user().profile.city;
  },
  userState: function () {
    return Meteor.user().profile.state;
  },
  userZip: function () {
    return Meteor.user().profile.zip;
  },
  countries: function () {
    return countries.find().fetch();
  },
  isSelected: function (country) {
    if (country == Meteor.user().profile.country) {
      return "select";
    }
  }
});
Template.accountdetails.events({
  'click #update_account': function (e) {
    e.preventDefault();
    var firstName = $("#first_name").val();
    var lastName = $("#last_name").val();
    var emailAddress = $("#email_address").val();
    var birthday = $("#birthday").val();
    var userCountry = $("#user_country").val();
    var userStreet = $("#user_street").val();
    var userCity = $("#user_city").val();
    var userState = $("#user_state").val();
    var userZip = $("#user_zip").val();
    var requiredError = isRequired($("#changeAccountDetailForm"), true);

    if (requiredError) {
      return;
    } else {
      var obj = {
        'profile.firstName': firstName,
        'profile.lastName': lastName,
        'profile.birthday': birthday,
        'username': emailAddress,
        'profile.country': userCountry,
        'profile.street': userStreet,
        'profile.city': userCity,
        'profile.state': userState,
        'profile.zip': userZip
      };
      Meteor.call("updateUser", Meteor.userId(), obj, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          if (res) {
            alert("user updated sucessfully.");
            Router.go("/dashboard");
          }
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"cart":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/cart/template.template.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("cart");
Template["cart"] = new Template("Template.cart", (function() {
  var view = this;
  return HTML.DIV({
    class: "yourcart"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner cartlisting"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Your Cart</h2>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form cartPage"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form cartlist"
  }, "\n                      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getCarts"));
  }, function() {
    return [ "\n                        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getCarts"));
    }, function() {
      return [ "\n                          ", HTML.DIV({
        class: "form-group your-cart-list"
      }, "\n                            ", HTML.DIV({
        class: "cartproduct"
      }, "\n                              ", HTML.DIV({
        class: "cartproduct-image"
      }, HTML.A({
        href: "#"
      }, HTML.IMG({
        src: function() {
          return Spacebars.mustache(view.lookup("productImage"), Spacebars.dot(view.lookup("."), "productId"));
        },
        alt: "bottle-product"
      }))), "\n                            "), "\n                            ", HTML.DIV({
        class: "cartprodutitles"
      }, "\n                              ", HTML.SPAN(Blaze.View("lookup:productName", function() {
        return Spacebars.mustache(view.lookup("productName"), Spacebars.dot(view.lookup("."), "productId"));
      })), "\n                              ", HTML.DIV({
        class: "rodutitles-price"
      }, " $", Blaze.View("lookup:productPrice", function() {
        return Spacebars.mustache(view.lookup("productPrice"), Spacebars.dot(view.lookup("."), "productId"));
      }), " ", HTML.SPAN(Blaze.View("lookup:productQuantity", function() {
        return Spacebars.mustache(view.lookup("productQuantity"), Spacebars.dot(view.lookup("."), "productId"));
      }), " ml Bottle"), " "), "\n                              ", HTML.DIV(HTML.B("Store:"), " ", Blaze.View("lookup:storename", function() {
        return Spacebars.mustache(view.lookup("storename"), Spacebars.dot(view.lookup("."), "productId"));
      })), "\n                            "), "\n                            ", HTML.DIV({
        class: "product-quality"
      }, "\n                              ", HTML.DIV({
        id: "myform",
        action: "#"
      }, "\n                                ", HTML.INPUT({
        type: "button",
        value: "-",
        class: "qtyminus",
        field: "quantity",
        "data-attr": function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productId"));
        }
      }), "\n                                ", HTML.INPUT({
        type: "text",
        name: "quantity",
        value: function() {
          return Spacebars.mustache(view.lookup("quantity"), view.lookup("."));
        },
        class: "qty"
      }), "\n                                ", HTML.INPUT({
        type: "button",
        value: "+",
        class: "qtyplus",
        field: "quantity",
        "data-attr": function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productId"));
        }
      }), "\n                              "), "\n                            "), "\n                            ", HTML.DIV({
        class: "closebtn"
      }, HTML.A({
        href: "#"
      }, HTML.IMG({
        src: "/images/close-arrow.png",
        id: "removeFromCart",
        "data-attr": function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        },
        alt: "close-arrow"
      }))), "\n                          "), "\n                        " ];
    }), "\n                      " ];
  }, function() {
    return [ "\n                        ", HTML.DIV({
      class: "form-group col-xs-12"
    }, "\n                          ", HTML.DIV({
      class: "favorites-products"
    }, "\n                            Your Cart Is Empty..!\n                            ", HTML.A({
      href: "/products"
    }, HTML.BUTTON({
      class: "btn btn-block"
    }, HTML.IMG({
      src: "/images/carts-icon.png",
      alt: "carts-icon"
    }), "Continue Shopping")), "\n                          "), "\n                        "), "\n                      " ];
  }), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n              ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getCarts"));
  }, function() {
    return [ "\n                ", HTML.DIV({
      class: "place-orders"
    }, "\n                  ", HTML.DIV({
      class: "subtotals"
    }, "TOTAL\n                    ", HTML.SPAN("$", Blaze.View("lookup:totalAmount", function() {
      return Spacebars.mustache(view.lookup("totalAmount"));
    })), "\n                  "), "\n                  ", Blaze.If(function() {
      return Spacebars.call(view.lookup("updateOrderCart"));
    }, function() {
      return [ "\n                    ", HTML.DIV({
        class: "place-orderbtn"
      }, "\n                      ", HTML.BUTTON({
        class: "btn btn-block",
        id: "updateOrder"
      }, HTML.IMG({
        src: "/images/carts-icon.png",
        alt: "carts-icon"
      }), " update order"), "\n                      ", HTML.Comment(' data-toggle="modal" data-target="#basicModal"  '), "\n                    "), "\n                  " ];
    }, function() {
      return [ "\n                    ", HTML.DIV({
        class: "place-orderbtn"
      }, "\n                      ", HTML.BUTTON({
        class: "btn btn-block",
        id: "placeOrder"
      }, HTML.IMG({
        src: "/images/carts-icon.png",
        alt: "carts-icon"
      }), " place order"), "\n                      ", HTML.Comment(' data-toggle="modal" data-target="#basicModal"  '), "\n                    "), "\n                  " ];
    }), "\n                "), "\n              " ];
  }), "\n            "), "\n          "), "\n        "), "\n      "), "\n\n      ", HTML.Raw('<div class="modal fade" id="placeOrderModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">\n        <div class="modal-dialog">\n          <div class="modal-content">\n            <div class="modal-header" style="background: #c42128;">\n              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n            </div>\n            <div class="modal-body pickingup">\n              <input type="hidden" name="orderId" id="orderId" value="">\n              Lorem ipsum dolor sit amet, consectetur\n              adipiscing elit. Curabitur a porttitor massa,\n              eu fringilla neque.\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-default" id="pickingUp">Picking Up</button>\n              <button type="button" class="btn btn-default" id="shoppingInStore">Shopping In Store</button>\n            </div>\n          </div>\n        </div>\n      </div>'), "\n    "), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/cart/script.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.cart.onCreated(function () {
  Meteor.subscribe('getCarts');
  Meteor.subscribe('getProducts');
});
Template.cart.onRendered(function () {
  // setTimeout(function(){
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c); // },1000)
});
Template.cart.helpers({
  getCarts: function () {
    return carts.find().fetch();
  },
  productName: function (productId) {
    return products.findOne({
      _id: productId
    }).productName;
  },
  productPrice: function (productId) {
    return products.findOne({
      _id: productId
    }).price;
  },
  productQuantity: function (productId) {
    return products.findOne({
      _id: productId
    }).quantity;
  },
  productImage: function (productId) {
    var image = products.findOne({
      _id: productId
    }).productImage;
    var imageUrl = image.split("upload");
    imageUrl = imageUrl[0] + "upload/w_38,h_144" + imageUrl[1];
    return imageUrl;
  },
  totalAmount: function () {
    var userProducts = carts.find({
      userId: Meteor.userId()
    }).fetch();
    totalAmount = 0;
    $.each(userProducts, function (index, value) {
      perProduct = products.findOne({
        _id: value.productId
      }).price;
      perProduct = parseFloat(perProduct, 10);
      perProduct = perProduct * value.productQuantity;
      totalAmount = totalAmount + perProduct;
    });
    return totalAmount;
  },
  quantity: function (cart) {
    var cartProduct = carts.findOne({
      _id: cart._id
    });
    return cartProduct.productQuantity;
  },
  updateOrderCart: function () {
    return Router.current().params._id;
  },
  storename: function (productId) {
    var storeId = products.findOne({
      _id: productId
    }).storeName;
    return stores.findOne({
      _id: storeId
    }).storeName;
  }
});
Template.cart.events({
  'click .qtyplus': function (e) {
    // Stop acting like a button
    e.preventDefault();
    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({
      productId: productId,
      userId: userId
    });
    var elem = $(e.target);
    var inval = parseInt(elem.prev().val()); // Get the field name

    fieldName = $(this).attr('field'); // Get its current value

    var currentVal = inval; // If is not undefined

    if (!isNaN(currentVal)) {
      // console.log(currentVal)
      // Increment
      if (products.findOne({
        _id: productId
      }).productsAvailable > currentVal) {
        Meteor.call("incrementCart", presentProduct, productId, userId, function (err, res) {
          if (err) {
            alert(err.reason);
          } else {// elem.prev().val(inval + 1);
          }
        });
      } else {
        alert("Product Unavailable!!");
        return;
      }
    } else {
      // Otherwise put a 0 there
      elem.prev().val(0);
    }
  },
  'click .qtyminus': function (e) {
    // Stop acting like a button
    e.preventDefault();
    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({
      productId: productId,
      userId: userId
    });
    var elem = $(e.target);
    var inval = parseInt(elem.next().val()); // Get the field name

    fieldName = $(this).attr('field'); // Get its current value

    var currentVal = inval; // If it isn't undefined or its greater than 0

    console.log(currentVal);

    if (!isNaN(currentVal) && currentVal >= 0) {
      // Decrement one
      elem.next().val(inval - 1);
      Meteor.call("decrementCart", presentProduct, productId, userId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {}
      });
    } else {
      // Otherwise put a 0 there
      elem.next().val(0);
    }
  },
  'click #removeFromCart': function (e) {
    e.preventDefault();
    var cartId = $(e.target).data("attr");
    carts.remove({
      _id: cartId
    });
    alert("Product Removed From Cart..!");
  },
  'click #placeOrder': function (e) {
    if (Session.get("storeId")) {
      var storeId = Session.get("storeId");
    } else {
      var prodId = carts.findOne({
        userId: Meteor.userId()
      }).productId;
      var storeId = products.findOne({
        _id: prodId
      }).storeName;
    }

    var cartTotal = 0;
    var userId = Meteor.userId();
    var cartss = carts.find({
      userId: userId
    }).fetch();
    var lastOrder = orders.findOne({}, {
      sort: {
        createdAt: -1
      }
    });

    if (lastOrder) {
      var lastOrder = lastOrder.orderNumber + 1;
    } // else
    // {
    //   var lastOrder = 0
    // }


    $.each(cartss, function (index, value) {
      product = products.findOne({
        _id: value.productId
      }); // if(product.productsAvailable 0)
      //   {

      cartTotall = product.price * value.productQuantity;
      cartTotall = parseFloat(cartTotall);
      Meteor.call("updateCartTotal", cartTotall, value, function (err, res) {
        if (err) {
          alert(err.reason);
        }
      });
      cartTotal = cartTotal + cartTotall; // }
      // else if(product.productsAvailable == 0)
      //   {
      //     alert("Product Unavailable!!");
      //     return;
      //   }
    });
    Meteor.call("insertIntoOrders", storeId, lastOrder, cartss, cartTotal, userId, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        $("#orderId").val(res);
        $('#placeOrderModal').modal('show'); // Session.set("ordertotal", cartTotal);
      }
    });
  },
  'click #updateOrder': function (e) {
    var cartTotal = 0;

    var currentOrderId = Router.current().params._id;

    var cartss = carts.find({
      userId: Meteor.userId()
    }).fetch();
    $.each(cartss, function (index, value) {
      product = products.findOne({
        _id: value.productId
      });
      cartTotall = product.price * value.productQuantity;
      cartTotall = parseFloat(cartTotall);
      Meteor.call("updateCartTotal", cartTotall, value, function (err, res) {
        if (err) {
          alert(err.reason);
        }
      });
      cartTotal = cartTotal + cartTotall;
    });
    Meteor.call("updateOrderCart", currentOrderId, cartTotal, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        alert("order updated successfully..!!");
        history.back(); //Router.go("/checkoutPageSecond/" + currentOrderId);
      }
    });
  },
  'click #pickingUp': function (e) {
    var orderId = $('#orderId').val();
    $('#placeOrderModal').modal('hide');
    $("body").removeClass("modal-open");
    $("body").css("padding-right", "");
    var orderType = "pickup";
    Meteor.call("updateOrderType", orderId, orderType, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        Router.go("/checkoutPagefirst/" + orderId);
      }
    }); // Router.go("/checkoutPagefirst/" + orderId).then(() => window.scrollTo(0, 0));
  },
  'click #shoppingInStore': function (e) {
    var orderId = $('#orderId').val();
    $('#placeOrderModal').modal('hide');
    $("body").removeClass("modal-open");
    $("body").css("padding-right", "");
    var orderType = "shopInStore";
    Meteor.call("updateOrderType", orderId, orderType, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        Router.go("/checkoutPageforth/" + orderId);
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"changepassword":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/changepassword/template.template.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("changepassword");
Template["changepassword"] = new Template("Template.changepassword", (function() {
  var view = this;
  return HTML.DIV({
    class: "changepassword"
  }, "\n    ", HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.Raw('<div class="st-content">\n          <div class="st-content-inner">\n            <div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 col-lg-6 col-md-6 col-sm-6 npm">\n                      <div class="header_title">\n                        <h2>Change Password</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="content common-form">\n        <div class="container">\n          <div class="row">\n            <div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n              <div class="form" id="changePasswordForm">\n                <h3>Change Your Password</h3>\n                <div class="form-group label-floating is-empty">\n                  <label class="control-label">Old Password</label>\n                  <input type="password" class="form-control isRequired" name="oldpassword" id="oldpassword">\n                  <span class="material-input errorSpan"></span>\n                </div>\n                <div class="form-group label-floating is-empty">\n                  <label class="control-label">New Password</label>\n                  <input type="password" class="form-control isRequired" name="newpassword" id="newpassword">\n                  <span class="material-input errorSpan"></span>\n                </div>\n                <div class="form-group label-floating is-empty">\n                  <label class="control-label">Re-Enter New Password</label>\n                  <input type="password" class="form-control isRequired" name="confirmpassword" id="confirmpassword">\n                  <span class="material-input errorSpan"></span>\n                </div>\n              </div>\n            </div>\n            \n          </div>\n          <button class="btn btn-block" id="changepasswordbutton" style="position: absolute;bottom: 0;left: 0;margin: 0;">\n                                Submit\n                                <div class="ripple-container"></div>\n                              </button>\n        </div>\n      </div>\n          </div>\n        </div>'), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/changepassword/script.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.changepassword.onCreated(function () {});
Template.changepassword.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.changepassword.helpers({});
Template.changepassword.events({
  'click #changepasswordbutton': function (e) {
    e.preventDefault();
    var oldPassword = $("#oldpassword").val();
    var newPassword = $("#newpassword").val();
    var confirmPassword = $("#confirmpassword").val();
    var requiredError = isRequired($("#changePasswordForm"), true);
    var me = $(e.target);
    me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
    me.attr("disabled", true);

    if (requiredError) {
      me.html('Submit');
      me.attr("disabled", false);
      return;
    } else {
      if (confirmPassword != newPassword) {
        me.html('Submit');
        me.attr("disabled", false);
        alert("Password and confirm password should be same!");
      } else {
        me.html('Submit');
        me.attr("disabled", false);
        Accounts.changePassword(oldPassword, newPassword, function (error) {
          if (error) {
            alert(error.reason);
          } else {
            alert("Password changed successfully.");
            Router.go("/dashboard");
          }
        });
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"checkoutPage1":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage1/template.template.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("checkoutPagefirst");
Template["checkoutPagefirst"] = new Template("Template.checkoutPagefirst", (function() {
  var view = this;
  return HTML.DIV({
    class: "checkout-step01"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                          <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Checkout</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right"><a href="#"><img class="store-icons" alt="store-icons" src="/images/store-icons.png"></a><a href="/cart"><img alt="cart-icons" src="/images/cart-icons.png"></a></div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.Raw('<div class="checkoptsetp">\n              <div class="steptabs">\n                <div class="container">\n                  <div class="row npm text-center">\n                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      <div class="row">\n                        <ul class="menutabs-main">\n                          <div class="lines-divider"></div>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"> <a class="active" href="Javascript:void(0);"> <span></span> Picking up </a> </li>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"> <a href="Javascript:void(0);"> <span></span> Payment </a></li>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"><a href="Javascript:void(0);"> <span></span> Order </a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "content common-form checkout-page form",
    id: "checkoutPage1form"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV("\n                      ", HTML.Raw("<h2>Contact details</h2>"), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">First Name</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    id: "firstname",
    value: function() {
      return Spacebars.mustache(view.lookup("userFirstName"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input"></span>'), " \n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">Last Name</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    id: "lastname",
    value: function() {
      return Spacebars.mustache(view.lookup("userLastName"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input"></span>'), " \n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">Email Address</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    id: "emailaddress",
    value: function() {
      return Spacebars.mustache(view.lookup("userEmailAddress"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input"></span>'), " \n                        "), "\n                        ", HTML.DIV({
    class: "form-group label-floating"
  }, "\n                          ", HTML.Raw('<label class="control-label">Phone</label>'), "\n                          ", HTML.INPUT({
    type: "text",
    class: "form-control isRequired",
    id: "phonenumber",
    value: function() {
      return Spacebars.mustache(view.lookup("userPhoneNumber"));
    }
  }), "\n                          ", HTML.Raw('<span class="material-input"></span>'), " \n                        "), "\n                      ", HTML.Raw('<div class="form-group label-floating is-empty">\n                        <div class="checkboxmark">\n                          <label>\n                            <input type="checkbox" value="off" id="receiveTextMessages">\n                            <span class="checkeds blackboder"><i class="fa fa-check checkeds-icon"></i></span>\n                            <h3 class="font-weit-normal">Check To Recieve Text Messages About Order</h3>\n                          </label>\n                        </div>\n                        <span class="material-input"></span> \n                      </div>'), "\n                      ", HTML.DIV({
    class: "picking-address"
  }, "\n                        ", HTML.Raw("<h2>Picking up address</h2>"), "\n                        ", HTML.DIV({
    class: "form-group links"
  }, " ", HTML.Raw('<img src="/images/map-iconsa.png" alt="map-iconsa">'), " ", Blaze.View("lookup:productStoreAddress", function() {
    return Spacebars.mustache(view.lookup("productStoreAddress"));
  }), " "), "\n                        ", HTML.DIV({
    class: "form-group links"
  }, " ", HTML.A({
    href: function() {
      return [ "tel:", Spacebars.mustache(view.lookup("productStorePhnNumber")) ];
    }
  }, HTML.Raw('<img src="/images/phone-contact.png" alt="phone-contact">')), Blaze.View("lookup:productStorePhnNumber", function() {
    return Spacebars.mustache(view.lookup("productStorePhnNumber"));
  })), "\n                        ", HTML.DIV({
    class: "form-group links"
  }, " ", HTML.Raw('<img src="/images/passage-of-time.png" alt="passage-of-time">'), " ", HTML.Raw("<span>Store Time: </span>"), " ", Blaze.View("lookup:productStoreTiming", function() {
    return Spacebars.mustache(view.lookup("productStoreTiming"));
  })), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n              ", HTML.Raw('<div class="form-group next-btns">\n                <div class="pos-relative">\n                  <button class="btn btn-block text-uppercase" id="submitcheckoutPagefirst">\n                    Next\n                    <div class="ripple-container"></div>\n                  </button>\n                </div>\n              </div>'), "\n            "), "\n            ", HTML.Raw("<!-- ====== /CONTENT EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /FOOTER BOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /FOOTER EOC ====== -->"), " \n          "), "\n        "), "\n      "), "\n    "), HTML.Raw("\n    <!-- ====== /WRAPPER EOC ====== --> \n  "));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage1/script.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.checkoutPagefirst.onCreated(function () {
  Meteor.subscribe('getCheckoutFirst');
});
Template.checkoutPagefirst.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.checkoutPagefirst.helpers({
  userFirstName: function () {
    return Meteor.user().profile.firstName;
  },
  userLastName: function () {
    return Meteor.user().profile.lastName;
  },
  userEmailAddress: function () {
    return Meteor.user().username;
  },
  userPhoneNumber: function () {
    return Meteor.user().profile.phoneNumber;
  },
  orderDetails: function () {
    return orders.findOne({
      _id: Router.current().params._id
    });
  },
  productStoreAddress: function () {
    var storeId = orders.findOne({
      _id: Router.current().params._id
    }).storeId;
    return stores.findOne({
      _id: storeId
    }).address;
  },
  productStorePhnNumber: function () {
    var storeId = orders.findOne({
      _id: Router.current().params._id
    }).storeId;
    return stores.findOne({
      _id: storeId
    }).phoneNumber;
  },
  productStoreTiming: function () {
    var storeId = orders.findOne({
      _id: Router.current().params._id
    }).storeId;
    var storeOpentime = stores.findOne({
      _id: storeId
    }).storeOpeningTime;
    var storeClosetime = stores.findOne({
      _id: storeId
    }).storeClosingTime;
    return moment(storeOpentime).format("hh:mm a") + " - " + moment(storeClosetime).format("hh:mm a");
  }
});
Template.checkoutPagefirst.events({
  'click #submitcheckoutPagefirst': function (e) {
    e.preventDefault();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var emailaddress = $("#emailaddress").val();
    var phonenumber = $("#phonenumber").val();

    if ($("#receiveTextMessages").is(':checked')) {
      var receiveTextMessages = true; // alert(receiveTextMessages)
    } else {
      var receiveTextMessages = false; // alert(receiveTextMessages)	
    }

    var orderId = Router.current().params._id;

    var requiredError = isRequired($("#checkoutPage1form"), true);

    if (requiredError) {
      return;
      alert("Please Fill Up All Usefull Details");
    } else {
      Meteor.call("updateOrders", firstname, lastname, emailaddress, phonenumber, receiveTextMessages, orderId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          Router.go("/checkoutPageSecond/" + orderId);
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"checkoutPage2":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage2/template.template.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("checkoutPageSecond");
Template["checkoutPageSecond"] = new Template("Template.checkoutPageSecond", (function() {
  var view = this;
  return HTML.DIV({
    class: "checkout-step03"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Checkout</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right"> <a href="#"><img class="store-icons" alt="store-icons" src="/images/store-icons.png"> </a> <a href="/cart"><img alt="cart-icons" src="/images/cart-icons.png"> </a> </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw('<div class="checkoptsetp">\n              <div class="steptabs">\n                <div class="container">\n                  <div class="row npm text-center">\n                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      <div class="row">\n                        <ul class="menutabs-main">\n                          <div class="lines-divider"></div>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"> <a class="disabled" href="Javascript:void(0);"> <span class="complete-checked"></span> Picking up </a> </li>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"> <a class="active" href="Javascript:void(0);"> <span></span> Order </a></li>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"><a href="Javascript:void(0);"> <span></span> Payment </a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "content common-form checkout-page"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", HTML.DIV({
    class: "order-sendpage"
  }, "\n                        ", HTML.DIV({
    class: "form-group links"
  }, "\n                          ", HTML.Raw("<p>Shipping to</p>"), "\n                           ", HTML.SPAN(Blaze.View("lookup:productStoreAddress", function() {
    return Spacebars.mustache(view.lookup("productStoreAddress"));
  })), " \n                        "), "\n                        ", HTML.Raw('<!-- <div class="form-group links">\n                          <p>Payment details</p>\n                          <span>{{creditCardNumber}}</span> <a class="edit-icons" href="#"> <i class="fa fa-pencil"></i> </a>\n                        </div> -->'), "\n                        ", HTML.DIV({
    class: "form-group links border-none padd-bottom-none"
  }, "\n                          ", HTML.Raw("<span>\n                            <p>your order</p>\n                          </span>"), "\n                          ", HTML.A({
    class: "edit-icons",
    href: function() {
      return [ "/cart/", Spacebars.mustache(view.lookup("updateOrderId")) ];
    }
  }, " ", HTML.Raw('<i class="fa fa-pencil"></i>')), "\n                          ", HTML.Raw('<!-- <a class="edit-icons" href="/cart"> <i class="fa fa-pencil"></i></a>  -->'), "\n                        "), "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("myOrders"));
  }, function() {
    return [ "\n                          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("myOrders"));
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "form-group your-cart-list"
      }, "\n                              ", HTML.DIV({
        class: "cartproduct"
      }, "\n                                ", HTML.DIV({
        class: "cartproduct-image"
      }, HTML.A({
        href: "#"
      }, HTML.IMG({
        src: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productImage"));
        },
        alt: "bottle-product"
      }))), "\n                              "), "\n                              ", HTML.DIV({
        class: "cartprodutitles"
      }, "\n                                ", HTML.SPAN(Blaze.View("lookup:..productName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productName"));
      })), "\n                                ", HTML.DIV({
        class: "rodutitles-price quantity-order"
      }, HTML.SPAN("Quantity : ", Blaze.View("lookup:productQuantities", function() {
        return Spacebars.mustache(view.lookup("productQuantities"), Spacebars.dot(view.lookup("."), "_id"));
      }))), "\n                              "), "\n                              ", HTML.DIV({
        class: "product-quality"
      }, "\n                                ", HTML.DIV({
        class: "product-price"
      }, "\n                                  ", HTML.H2("$ ", Blaze.View("lookup:..price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "price"));
      })), "\n                                "), "\n                              "), "\n                            "), "\n                          " ];
    }), "\n                        " ];
  }), "\n                        ", HTML.DIV({
    class: "ordertotal-summary ordertotals"
  }, "\n                          ", HTML.UL("\n                            ", HTML.LI("Item Cost (", Blaze.View("lookup:getProductCount", function() {
    return Spacebars.mustache(view.lookup("getProductCount"));
  }), ") ", HTML.SPAN("$ ", Blaze.View("lookup:getOrderTotal", function() {
    return Spacebars.mustache(view.lookup("getOrderTotal"));
  }))), "\n                            ", HTML.LI({
    class: "font-we-rg"
  }, "Order Total ", HTML.SPAN("$ ", Blaze.View("lookup:getOrderTotal", function() {
    return Spacebars.mustache(view.lookup("getOrderTotal"));
  }))), "\n                            ", HTML.LI({
    class: "font-we-rg"
  }, "Discount ", HTML.SPAN(Blaze.If(function() {
    return Spacebars.call(view.lookup("getCouponDiscount"));
  }, function() {
    return [ " $", Blaze.View("lookup:getCouponDiscount", function() {
      return Spacebars.mustache(view.lookup("getCouponDiscount"));
    }), " " ];
  }, function() {
    return " - ";
  }))), "\n                            ", HTML.LI({
    class: "font-we-rg"
  }, "Gross Total ", HTML.SPAN("$ ", Blaze.View("lookup:getGrossTotal", function() {
    return Spacebars.mustache(view.lookup("getGrossTotal"));
  }), " ")), "\n                          "), "\n\n                          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("RecentAppliedCoupon"));
  }, function() {
    return [ "\n                            ", HTML.DIV({
      style: "display:block",
      id: "removeCouponcode"
    }, HTML.A({
      href: "#"
    }, " Coupon code: ", HTML.B(Blaze.View("lookup:couponAppliedName", function() {
      return Spacebars.mustache(view.lookup("couponAppliedName"));
    })), " applied successfully... Remove Coupon ", HTML.CharRef({
      html: "&times;",
      str: "×"
    }))), "\n                          " ];
  }, function() {
    return [ "\n                            ", HTML.DIV({
      style: "display:none;",
      id: "removeCouponcode"
    }, HTML.A({
      href: "#"
    }, " Coupon code: ", HTML.B(Blaze.View("lookup:couponAppliedName", function() {
      return Spacebars.mustache(view.lookup("couponAppliedName"));
    })), " applied successfully... Remove Coupon ", HTML.CharRef({
      html: "&times;",
      str: "×"
    }))), "\n                          " ];
  }), "\n                          ", HTML.Raw("<br>"), "\n                          ", HTML.DIV({
    class: "row"
  }, "\n                            ", HTML.DIV({
    class: "col-xs-6"
  }, "\n                              ", HTML.INPUT({
    type: "text",
    class: "form-control",
    name: "applycoupon",
    id: "couponCode",
    value: function() {
      return Spacebars.mustache(view.lookup("RecentAppliedCoupon"));
    }
  }), "\n                            "), "\n                            ", HTML.Raw('<div class="col-xs-6">\n                              <button class="form-control" id="applycouponButton">Apply Coupon</button>\n                            </div>'), "\n                          "), "\n\n                        "), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n              ", HTML.Raw('<div class="next-btns">\n                <div>\n                  <button class="btn btn-block text-uppercase" id="submitcheckoutPageSecond">\n                    Next\n                    <div class="ripple-container"></div>\n                  </button>\n                </div>\n              </div>'), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage2/script.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.checkoutPageSecond.onCreated(function () {
  Meteor.subscribe('getOrders');
  Meteor.subscribe('getProducts');
});
Template.checkoutPageSecond.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.checkoutPageSecond.helpers({
  myOrders: function () {
    var orderId = Router.current().params._id;

    var userId = Meteor.userId();
    var productIds = orders.findOne({
      _id: orderId
    }).productIds;
    var productss = [];
    $.each(productIds, function (index, value) {
      productss.push(products.findOne({
        _id: value.id
      }));
    });
    return productss;
  },
  productQuantities: function (productId) {
    return carts.findOne({
      productId: productId,
      userId: Meteor.userId()
    }).productQuantity;
  },
  getOrderTotal: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).total.toFixed(2);
  },
  getGrossTotal: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).grossTotal.toFixed(2);
  },
  getCouponDiscount: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).discount.toFixed(2);
  },
  RecentAppliedCoupon: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).couponCode;
  },
  getProductCount: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).productIds.length;
  },
  creditCardNumber: function () {
    var cardNumber = paymentDetails.findOne({
      orderId: Router.current().params._id
    }).CardNumber;
    return cardNumber.replace(/\d(?=\d{4})/g, "*");
  },
  updateOrderId: function () {
    return Router.current().params._id;
  },
  productStoreAddress: function () {
    var storeId = orders.findOne({
      _id: Router.current().params._id
    }).storeId;
    return stores.findOne({
      _id: storeId
    }).address;
  }
});
Template.checkoutPageSecond.events({
  'click #submitcheckoutPageSecond': function (e) {
    e.preventDefault();

    var orderId = Router.current().params._id;

    Router.go("/checkoutPagethird/" + orderId);
  },
  'click #applycouponButton': function (e) {
    var couponCode = $("#couponCode").val().trim(); // var couponUsed = orders.findOne({userId: Meteor.userId(), couponCode: couponname, status: "Success"});

    var couponExists = coupons.findOne({
      couponName: couponCode,
      validFrom: {
        $lte: new Date()
      },
      validTo: {
        $gte: new Date()
      }
    });

    if (couponExists) {
      var couponUsed = orders.findOne({
        userId: Meteor.userId(),
        couponCode: couponExists.couponName,
        status: "Success"
      });

      if (couponUsed) {
        alert("Coupon Redeemed");
        $("#couponCode").val("");
      } else {
        // alert(discount);
        var orderId = Router.current().params._id;

        var order = orders.findOne({
          _id: Router.current().params._id
        });
        var orderTotal = orders.findOne({
          _id: Router.current().params._id
        }).grossTotal;

        if (coupons.findOne({
          couponName: couponCode
        }).couponType == "percent") {
          var discountt = coupons.findOne({
            couponName: couponCode
          }).discount;
          var discount = orderTotal * discountt / 100;
        } else {
          var discountt = coupons.findOne({
            couponName: couponCode
          }).discount;
          var discount = discountt;
        }

        var discountedPrice = order.total - discount;
        Meteor.call("updateOrderDiscount", couponCode, orderId, discount, discountedPrice, function (err, res) {
          if (err) {
            console.log(err.reason);
          } else {
            // $("#couponList").hide();
            $("#removeCouponcode").show();
            alert("Coupon code:" + couponCode + " is applied successfully..!!");
            $("#couponCode").prop('disabled', true);
            $("#couponCode").css('background-color', "#bfbfbf"); // Session.set("couponId", coupon);
          }
        });
      }
    } else {
      alert("Wrong coupon code or coupon expired..!!");
      $("#couponCode").val("");
    }
  },
  'click #removeCouponcode': function (e) {
    var orderId = Router.current().params._id; // var orderDiscount = orders.findOne({_id: Router.current().params._id}).discount;
    // var orderTotal = orders.findOne({_id: Router.current().params._id}).grossTotal;


    var orderWithoutDiscountRate = orders.findOne({
      _id: Router.current().params._id
    }).total;
    var couponCode = "";
    var orderDiscount = ""; // alert(orderWithoutDiscountRate);

    Meteor.call("removeOrderDiscount", couponCode, orderId, orderDiscount, orderWithoutDiscountRate, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        $("#removeCouponcode").hide();
        $("#couponCode").prop('disabled', false);
        $("#couponCode").css('background-color', "");
        $("#couponCode").val(""); // $("#couponList").show();

        alert("Coupon code removed"); // Session.set("couponId", undefined);
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"checkoutPage3":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage3/template.template.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("checkoutPagethird");
Template["checkoutPagethird"] = new Template("Template.checkoutPagethird", (function() {
  var view = this;
  return HTML.DIV({
    class: "checkout-step02"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.Raw('<div class="st-content">\n          <!-- this is the wrapper for the content -->\n          <div class="st-content-inner">\n            <!-- extra div for emulating position:fixed of the menu --> \n            <!-- Top Navigation -->\n            <div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Checkout</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right">\n                      <a href="#"><img class="store-icons" alt="store-icons" src="/images/store-icons.png"> </a>\n                      <a href="/cart"><img alt="cart-icons" src="/images/cart-icons.png"> </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- ====== /HEADER EOC ====== --> \n            <!-- ====== /CONTENT BOC ====== -->\n            <div class="checkoptsetp">\n              <div class="steptabs">\n                <div class="container">\n                  <div class="row npm text-center">\n                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      <div class="row">\n                        <ul class="menutabs-main">\n                          <div class="lines-divider"></div>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"> <a class="disabled" href="Javascript:void(0);"> <span class="complete-checked"></span> Picking up </a> </li>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"> <a class="disabled" href="Javascript:void(0);"> <span class="complete-checked"></span> Order </a></li>\n                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4"><a class="active" href="Javascript:void(0);"> <span></span> Payment </a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="content common-form checkout-page" id="paymentDetailsForm">\n              <div class="container">\n                <div class="row">\n                  <div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n                    <div class="form">\n                      <div class="payment_wrapper">\n                        <h2>Payment Method</h2>\n\n                          <div class="form-group label-floating is-empty">\n                          <!-- <div class="checkboxmark"> -->\n                            <!-- <label> -->\n                              <!-- <input type="checkbox" value="off" id="cashOnDelivery">\n                              <span class="checkeds blackboder"><i class="fa fa-check checkeds-icon"></i></span> -->\n                            <!-- </label> -->\n                            <div class=" nav nav-pills nav-justified">\n                              <button class="btn" id="cashOnDelivery">Cash On Delivery</button>\n                            </div>\n                          </div>\n                          <span class="material-input"></span> \n                        <!-- </div> -->\n                        <hr style="width:50%;margin-left: 25%;border-color:#c52128;" class="nav nav-pills nav-justified">\n                        <div class="nav nav-pills nav-justified">\n                          <strong>OR</strong>\n                        </div>\n                        <hr style="width:50%;margin-left: 25%;border-color:#c52128;" class="nav nav-pills nav-justified">\n                        <div id="mypayment" class="carousel slide" data-ride="carousel" data-interval="false">\n                          <!-- Wrapper for slides -->\n                          <ul class="nav nav-pills nav-justified">\n                            <li data-target="#mypayment" data-slide-to="0" class="active"> <a href="#"> <i class="fa fa-fw"></i> Credit Card </a> </li>\n                            <li data-target="#mypayment" data-slide-to="1"> <a href="#"> <i class="fa fa-fw"></i>PayPal</a> </li>\n                          </ul>\n                          <div class="carousel-inner">\n                            <div class="item active">\n                              <div class="payment_card">\n                                <div class="payment_title">\n                                  <h2>Payment Details</h2>\n                                </div>\n                                <div class="payment_details">\n                                  <form>\n                                    <div class="form-group label-floating ">\n                                      <label class="control-label">Card Number</label>\n                                      <input type="text" class="form-control isRequired" id="cardNumber" value="4842887511933198">\n                                      <span class="material-input"></span>\n                                    </div>\n\n                                      <div class="form-group label-floating is-empty">\n                                        <div class="select-box">\n                                          <div class="form-group">\n                                            <select id="cardType" class="form-control isRequired">\n                                              <option selected="select">Select Card Type</option>\n                                              <option selected="">Visa</option>\n                                              <option>Master</option>\n                                              <option>American Express</option>\n                                              <option>Discover</option>\n                                              <option>JCB</option>\n                                            </select>\n                                          </div>\n                                          <div class="selectarrow"><i class="fa fa-angle-down"></i></div>\n                                        </div>\n                                        <span class="material-input"></span> \n                                      </div>\n                                    \n                                    <div class="form-group label-floating">\n                                      <label class="control-label">Name on Card</label>\n                                      <input type="text" class="form-control isRequired" id="NameOnCard" value="James Hall">\n                                      <span class="material-input"></span> \n                                    </div>\n                                    <div class="form-group">\n                                      <div class="expirationpgdm expiry-date"> Expiration </div>\n                                    </div>\n                                    <div class="monthyearpickered">\n                                      <div class="form-group label-floating">\n                                        <div class="select-box">\n                                          <div class="form-group">\n                                            <select id="monthCategory" class="form-control isRequired">\n                                              <option selected="select">Select Month</option>\n                                              <option>01</option>\n                                              <option>02</option>\n                                              <option>03</option>\n                                              <option>04</option>\n                                              <option>05</option>\n                                              <option selected="">06</option>\n                                              <option>07</option>\n                                              <option>08</option>\n                                              <option>09</option>\n                                              <option>10</option>\n                                              <option>11</option>\n                                              <option>12</option>\n                                            </select>\n                                          </div>\n                                          <div class="selectarrow"><i class="fa fa-angle-down"></i></div>\n                                        </div>\n                                        <span class="material-input"></span> \n                                      </div>\n                                    </div>\n                                    <div class="monthyearpickered pull-right">\n                                      <div class="form-group label-floating is-empty">\n                                        <div class="select-box">\n                                          <div class="form-group">\n                                            <select id="yearCategory" class="form-control isRequired">\n                                              <option selected="select">Select Year</option>\n                                              <option>2018</option>\n                                              <option>2019</option>\n                                              <option>2020</option>\n                                              <option>2021</option>\n                                              <option selected="">2022</option>\n                                              <option>2023</option>\n                                              <option>2024</option>\n                                              <option>2025</option>\n                                              <option>2026</option>\n                                              <option>2027</option>\n                                              <option>2028</option>\n                                              <option>2029</option>\n                                              <option>2030</option>\n                                              <option>2031</option>\n                                              <option>2032</option>\n                                              <option>2033</option>\n                                              <option>2034</option>\n                                            </select>\n                                          </div>\n                                          <div class="selectarrow"><i class="fa fa-angle-down"></i></div>\n                                        </div>\n                                        <span class="material-input"></span> \n                                      </div>\n                                    </div>\n                                    <div class="form-group label-floating">\n                                      <label class="control-label">C V V</label>\n                                      <input type="text" class="form-control isRequired" id="cvvNumber" value="881">\n                                      <span class="material-input"></span> \n                                    </div>\n                                    <div class="form-group label-floating is-empty">\n                                      <div class="checkboxmark">\n                                        <label>\n                                          <input type="checkbox" id="saveThecard">\n                                          <span class="checkeds blackboder"><i class="fa fa-check checkeds-icon"></i></span>\n                                          <h3 class="font-weit-normal">Save my Card details</h3>\n                                        </label>\n                                      </div>\n                                      <span class="material-input"></span> \n                                    </div>\n                                  </form>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- End Item -->\n                            <div class="item">\n                              <div class="payment_card">\n                                <div class="payment_title">\n                                  <h2>Login to PayPal</h2>\n                                </div>\n                                <br>\n                                <div id="paypal-button"></div>\n                              </div>\n                            </div>\n                            <!-- End Item --> \n                          </div>\n                          <!-- End Carousel Inner --> \n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="form-group next-btns">\n                <div class="pos-relative">\n                  <button class="btn btn-block text-uppercase" id="submitOrder">\n                    Submit Order\n                    <div class="ripple-container"></div>\n                  </button>\n                </div>\n              </div>\n            </div>\n            <!-- ====== /CONTENT EOC ====== --> \n            <!-- ====== /FOOTER BOC ====== --> \n            <!-- ====== /FOOTER EOC ====== --> \n          </div>\n        </div>'), "\n      "), "\n    "), HTML.Raw("\n    <!-- ====== /WRAPPER EOC ====== --> \n  "));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage3/script.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.checkoutPagethird.onCreated(function () {});
Template.checkoutPagethird.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
  paypal.Button.render({
    env: 'sandbox',
    // Or 'sandbox',
    commit: true,
    // Show a 'Pay Now' button
    style: {
      color: 'gold',
      size: 'small'
    },
    client: {
      sandbox: 'AegE0DJG2Nt6NbQVKBbTPRwknBH8WWKHuCuwEdIiKQ0FBnMFttck-DgCvHpabySFeEKrAiKmSJRmPTJ6' //production: 'xxxxxxxxx'

    },
    payment: function (data, actions) {
      var order = orders.findOne({
        _id: Router.current().params._id
      });
      return actions.payment.create({
        payment: {
          transactions: [{
            amount: {
              total: order.grossTotal,
              currency: 'USD'
            }
          }]
        }
      });
      /* 
       * Set up the payment here 
       */
    },
    onAuthorize: function (data, actions) {
      var order = orders.findOne({
        _id: Router.current().params._id
      });
      return actions.payment.execute().then(function (payment) {
        console.log(payment);
        var resData = payment;
        console.log(resData);

        if (resData !== null) {
          if (typeof resData !== "undefined") {
            Meteor.call("addPaymentPaypal", resData, Router.current().params._id, function (err, res) {
              console.log(err);
              console.log(res);

              if (err) {
                alert(err.reason);
              } else {
                // Session.set('cvvNumber', undefined);
                Router.go("/successPage/" + order._id);
              }
            });
          }
        }
      });
    },
    onCancel: function (data, actions) {
      /* 
       * Buyer cancelled the payment
       */
      console.log(data);
      console.log(actions);
    },
    onError: function (err) {
      /* 
       * An error occurred during the transaction 
       */
      alert("Something went wrong. Please try again later.");
    }
  }, '#paypal-button');
});
Template.checkoutPagethird.helpers({});
Template.checkoutPagethird.events({
  'click #submitOrder': function (e) {
    e.preventDefault();
    var me = $(e.target);
    var cardNumber = $("#cardNumber").val();
    var NameOnCard = $("#NameOnCard").val();
    var monthCategory = $("#monthCategory").val();
    var yearCategory = $("#yearCategory").val();
    var cvvNumber = $("#cvvNumber").val();
    Session.set("cvvNumber", cvvNumber);
    var paymentType = "credit card";
    var cardType = $("#cardType").val();

    var orderId = Router.current().params._id;

    $('input[type="checkbox"]').click(function () {
      if ($(this).is(":checked")) {
        var saveThecard = true;
      } else {
        var saveThecard = false;
      }
    });
    var requiredError = isRequired($("#paymentDetailsForm"), true);

    if (requiredError) {
      return;
      alert("Please Fill Up All Card Details");
    } else {
      Meteor.call("insertCardDetails", orderId, cardNumber, NameOnCard, monthCategory, yearCategory, Meteor.userId(), saveThecard, paymentType, cardType, function (err, res) {
        if (err) {
          console.log(err.reason);
        } else {
          // var paymentdetail = paymentDetails.findOne({orderId: Router.current().params._id})
          var currentOrder = orders.findOne({
            _id: Router.current().params._id
          });
          var dataDetails = {
            name: NameOnCard,
            number: cardNumber,
            type: cardType.toLowerCase(),
            cvv2: cvvNumber,
            expire_year: yearCategory,
            expire_month: monthCategory
          };
          console.log(dataDetails);
          var dataAmounts = {
            total: currentOrder.grossTotal,
            currency: 'USD'
          };
          me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
          me.attr("disabled", true);
          Meteor.call("paymentProceed", dataDetails, dataAmounts, function (err, res) {
            if (err) {
              me.html('Submit Order');
              me.attr("disabled", false);
              alert(err.reason);
            } else {
              console.log(res); // $(window).load(function(){});
              // $("#inject-loader-wrapper").fadeOut(500, function() { $(this).remove(); });

              Tracker.autorun(function () {
                if (ServerSession.get("paymentResponse")) {
                  var paymntresponse = ServerSession.get("paymentResponse");

                  if (paymntresponse.saved) {
                    Meteor.call("addPayment", paymntresponse, currentOrder._id, function (err, res) {
                      if (err) {
                        alert(err.reason);
                        me.html('Submit Order');
                        me.attr("disabled", false);
                      } else {
                        me.html('Submit Order');
                        me.attr("disabled", false);
                        Router.go("/successPage/" + currentOrder._id);
                      }
                    });
                  } else {
                    me.html('Submit Order');
                    me.attr("disabled", false);
                    alert("payment failed");
                  }

                  console.log(paymntresponse);
                }
              });
            }
          });
        }
      });
    }
  },
  'click #cashOnDelivery': function (e) {
    if (confirm("Are you sure for COD ?")) {
      // $("#mypayment").hide();
      var currentOrder = orders.findOne({
        _id: Router.current().params._id
      });
      paymentType = "unpaid";
      Meteor.call("updateOrderPaymentStatus", currentOrder, paymentType, function (err, res) {
        if (err) {
          console.log(err.reason);
        } else {
          Router.go("/storeSuccessPage/" + currentOrder._id);
        }
      }); // add value for cash on delivery
    } else {
      // $("#mypayment").show();
      return;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"checkoutPage4":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage4/template.template.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("checkoutPageforth");
Template["checkoutPageforth"] = new Template("Template.checkoutPageforth", (function() {
  var view = this;
  return HTML.DIV({
    class: "checkout-step02"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Checkout</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right">\n                      <a href="#"><img class="store-icons" alt="store-icons" src="/images/store-icons.png"> </a>\n                      <a href="/cart"><img alt="cart-icons" src="/images/cart-icons.png"> </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.Raw('<div class="checkoptsetp">\n              <div class="steptabs">\n                <div class="container">\n                  <div class="row npm text-center">\n                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      <div class="row">\n                        <ul class="menutabs-main">\n                          <div class="lines-divider divider-second"></div>\n                          <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6"> <a class="active" href="Javascript:void(0);"> <span></span> Order </a></li>\n                          <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><a class="disabled" href="Javascript:void(0);"> <span></span> Payment </a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "content common-form checkout-page"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", HTML.DIV({
    class: "order-sendpage"
  }, "\n                        ", HTML.DIV({
    class: "form-group links"
  }, "\n                          ", HTML.Raw("<p>Shipping to</p>"), "\n                          ", HTML.SPAN(Blaze.View("lookup:productStoreAddress", function() {
    return Spacebars.mustache(view.lookup("productStoreAddress"));
  })), "\n                          ", HTML.Raw('<!-- <a class="edit-icons" href="#"> <i class="fa fa-pencil"></i></a>  -->'), "\n                        "), "\n                        ", HTML.Raw('<!-- <div class="form-group links">\n                          <p>Payment details</p>\n                          <span>{{creditCardNumber}}</span> <a class="edit-icons" href="#"> <i class="fa fa-pencil"></i> </a> \n                        </div> -->'), "\n                        ", HTML.DIV({
    class: "form-group links border-none padd-bottom-none"
  }, "\n                          ", HTML.Raw("<span>\n                            <p>your order</p>\n                          </span>"), "\n                          ", HTML.A({
    class: "edit-icons",
    href: function() {
      return [ "/cart/", Spacebars.mustache(view.lookup("updateOrderIdd")) ];
    }
  }, " ", HTML.Raw('<i class="fa fa-pencil"></i>'), " "), " \n                        "), "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("myOrders"));
  }, function() {
    return [ "\n                          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("myOrders"));
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "form-group your-cart-list"
      }, "\n                              ", HTML.DIV({
        class: "cartproduct"
      }, "\n                                ", HTML.DIV({
        class: "cartproduct-image"
      }, HTML.A({
        href: "#"
      }, HTML.IMG({
        src: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productImage"));
        },
        alt: "bottle-product"
      }))), "\n                              "), "\n                              ", HTML.DIV({
        class: "cartprodutitles"
      }, "\n                                ", HTML.SPAN(Blaze.View("lookup:..productName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productName"));
      })), "\n                                ", HTML.DIV({
        class: "rodutitles-price quantity-order"
      }, " ", HTML.SPAN("Quantity : ", Blaze.View("lookup:productQuantities", function() {
        return Spacebars.mustache(view.lookup("productQuantities"), Spacebars.dot(view.lookup("."), "_id"));
      })), " "), "\n                              "), "\n                              ", HTML.DIV({
        class: "product-quality"
      }, "\n                                ", HTML.DIV({
        class: "product-price"
      }, "\n                                  ", HTML.H2("$ ", Blaze.View("lookup:..price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "price"));
      })), "\n                                "), "\n                              "), "\n                            "), "\n                          " ];
    }), "\n                        " ];
  }), "\n                       ", HTML.DIV({
    class: "ordertotal-summary ordertotals"
  }, "\n                          ", HTML.UL("\n                            ", HTML.LI("Item Cost (", Blaze.View("lookup:getProductCount", function() {
    return Spacebars.mustache(view.lookup("getProductCount"));
  }), ")  ", HTML.SPAN("$ ", Blaze.View("lookup:getOrderTotal", function() {
    return Spacebars.mustache(view.lookup("getOrderTotal"));
  }))), "\n                            ", HTML.LI({
    class: "font-we-rg"
  }, "Order Total ", HTML.SPAN("$ ", Blaze.View("lookup:getOrderTotal", function() {
    return Spacebars.mustache(view.lookup("getOrderTotal"));
  }), " ")), "\n                            ", HTML.LI({
    class: "font-we-rg"
  }, "Discount ", HTML.SPAN(Blaze.If(function() {
    return Spacebars.call(view.lookup("getCouponDiscount"));
  }, function() {
    return [ " $", Blaze.View("lookup:getCouponDiscount", function() {
      return Spacebars.mustache(view.lookup("getCouponDiscount"));
    }), " " ];
  }, function() {
    return " - ";
  }))), "\n                            ", HTML.LI({
    class: "font-we-rg"
  }, "Gross Total ", HTML.SPAN("$ ", Blaze.View("lookup:getGrossTotal", function() {
    return Spacebars.mustache(view.lookup("getGrossTotal"));
  }), " ")), "\n                          "), "\n                          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("RecentAppliedCoupon"));
  }, function() {
    return [ "\n                            ", HTML.DIV({
      style: "display:block",
      id: "removeCouponcode"
    }, HTML.A({
      href: "#"
    }, " Coupon code: ", HTML.B(Blaze.View("lookup:couponAppliedName", function() {
      return Spacebars.mustache(view.lookup("couponAppliedName"));
    })), " applied successfully... Remove Coupon ", HTML.CharRef({
      html: "&times;",
      str: "×"
    }))), "\n                          " ];
  }, function() {
    return [ "\n                            ", HTML.DIV({
      style: "display:none;",
      id: "removeCouponcode"
    }, HTML.A({
      href: "#"
    }, " Coupon code: ", HTML.B(Blaze.View("lookup:couponAppliedName", function() {
      return Spacebars.mustache(view.lookup("couponAppliedName"));
    })), " applied successfully... Remove Coupon ", HTML.CharRef({
      html: "&times;",
      str: "×"
    }))), "\n                          " ];
  }), "\n                          ", HTML.Raw("<br>"), "\n                          ", HTML.DIV({
    class: "row"
  }, "\n                            ", HTML.DIV({
    class: "col-xs-6"
  }, "\n                              ", HTML.INPUT({
    type: "text",
    class: "form-control",
    name: "applycoupon",
    id: "couponCode",
    value: function() {
      return Spacebars.mustache(view.lookup("RecentAppliedCoupon"));
    }
  }), "\n                            "), "\n                            ", HTML.Raw('<div class="col-xs-6">\n                              <button class="form-control" id="applycouponButton">Apply Coupon</button>\n                            </div>'), "\n                          "), "\n\n                        "), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n             ", HTML.Raw('<!--  <div class="form-group next-btns">\n                <div class="pos-relative" style="display: -webkit-box;">\n                  <button class="btn btn-block text-uppercase" id="submitcheckoutPageForth">\n                    Next\n                    <div class="ripple-container"></div>\n                  </button>\n                </div>\n              </div> -->'), "\n               ", HTML.Raw('<div class="next-btns">\n                <div>\n                  <button class="btn btn-block text-uppercase" id="submitcheckoutPageForth">\n                    Next\n                    <div class="ripple-container"></div>\n                  </button>\n                </div>\n              </div>'), "\n\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage4/script.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.checkoutPageforth.onCreated(function () {
  Meteor.subscribe('getCoupons');
  Meteor.subscribe('getOrders');
});
Template.checkoutPageforth.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.checkoutPageforth.helpers({
  myOrders: function () {
    var orderId = Router.current().params._id;

    var userId = Meteor.userId();
    var productIds = orders.findOne({
      _id: orderId
    }).productIds;
    var productss = [];
    $.each(productIds, function (index, value) {
      productss.push(products.findOne({
        _id: value.id
      }));
    });
    return productss;
  },
  productQuantities: function (productId) {
    return carts.findOne({
      productId: productId,
      userId: Meteor.userId()
    }).productQuantity;
  },
  getOrderTotal: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).total.toFixed(2);
  },
  getGrossTotal: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).grossTotal.toFixed(2);
  },
  getCouponDiscount: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).discount.toFixed(2);
  },
  RecentAppliedCoupon: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).couponCode;
  },
  getProductCount: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).productIds.length;
  },
  creditCardNumber: function () {
    var cardNumber = paymentDetails.findOne({
      orderId: Router.current().params._id
    }).CardNumber;
    return cardNumber.replace(/\d(?=\d{4})/g, "*");
  },
  updateOrderIdd: function () {
    return Router.current().params._id;
  },
  productStoreAddress: function () {
    var storeId = orders.findOne({
      _id: Router.current().params._id
    }).storeId;
    return stores.findOne({
      _id: storeId
    }).address;
  },
  couponsList: function () {
    return coupons.find().fetch();
  },
  couponAppliedName: function () {
    var couponcodename = orders.findOne({
      _id: Router.current().params._id
    }).couponCode;

    if (couponcodename) {
      return couponcodename;
    } else {
      return "";
    }
  }
});
Template.checkoutPageforth.events({
  'click #submitcheckoutPageForth': function (e) {
    e.preventDefault();

    var orderId = Router.current().params._id;

    Router.go("/checkoutPagefifth/" + orderId);
  },
  'click #applycouponButton': function (e) {
    var couponCode = $("#couponCode").val().trim(); // var couponUsed = orders.findOne({userId: Meteor.userId(), couponCode: couponname, status: "Success"});

    var couponExists = coupons.findOne({
      couponName: couponCode,
      validFrom: {
        $lte: new Date()
      },
      validTo: {
        $gte: new Date()
      }
    });

    if (couponExists) {
      var couponUsed = orders.findOne({
        userId: Meteor.userId(),
        couponCode: couponExists.couponName,
        status: "Success"
      });

      if (couponUsed) {
        alert("Coupon Redeemed");
        $("#couponCode").val("");
      } else {
        // alert(discount);
        var orderId = Router.current().params._id;

        var order = orders.findOne({
          _id: Router.current().params._id
        });
        var orderTotal = orders.findOne({
          _id: Router.current().params._id
        }).grossTotal;
        console.log();

        if (coupons.findOne({
          couponName: couponCode
        }).couponType == "percent") {
          var discountt = coupons.findOne({
            couponName: couponCode
          }).discount;
          var discount = orderTotal * discountt / 100;
        } else {
          var discountt = coupons.findOne({
            couponName: couponCode
          }).discount;
          var discount = discountt;
        }

        var discountedPrice = order.total - discount;
        Meteor.call("updateOrderDiscount", couponCode, orderId, discount, discountedPrice, function (err, res) {
          if (err) {
            console.log(err.reason);
          } else {
            // $("#couponList").hide();
            $("#removeCouponcode").show();
            alert("Coupon code:" + couponCode + " is applied successfully..!!");
            $("#couponCode").prop('disabled', true);
            $("#couponCode").css('background-color', "#bfbfbf"); // Session.set("couponId", coupon);
          }
        });
      }
    } else {
      alert("Wrong coupon code or coupon expired..!!");
      $("#couponCode").val("");
    }
  },
  // 'click #singleApplyCoupon': function(e)
  //   {
  //     e.preventDefault();
  //     // alert($(e.target).data("attr"));
  //     var coupon = $(e.target).data("attr");
  //     var discount = coupons.findOne({_id: coupon}).discount;
  //     var couponCode = coupons.findOne({_id: coupon}).couponName;
  //     var orderId = Router.current().params._id;
  //     var orderTotal = orders.findOne({_id: Router.current().params._id}).total;
  //     var discountedPrice = orderTotal - (orderTotal*discount/100);
  //     // alert(discountedPrice);
  //     Meteor.call("updateOrderDiscount", orderId, discount, discountedPrice, function(err,res){
  //       if(err)
  //       {
  //         console.log(err.reason);
  //       }
  //       else
  //       {
  //         $("#couponList").hide();
  //         $("#removeCouponcode").show();
  //         alert("Coupon code:" + couponCode + " is applied successfully..!!");
  //         Session.set("couponId", coupon);
  //       }
  //     });
  //   },
  'click #removeCouponcode': function (e) {
    var orderId = Router.current().params._id; // var orderDiscount = orders.findOne({_id: Router.current().params._id}).discount;
    // var orderTotal = orders.findOne({_id: Router.current().params._id}).grossTotal;


    var orderWithoutDiscountRate = orders.findOne({
      _id: Router.current().params._id
    }).total;
    var couponCode = "";
    var orderDiscount = ""; // alert(orderWithoutDiscountRate);

    Meteor.call("removeOrderDiscount", couponCode, orderId, orderDiscount, orderWithoutDiscountRate, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        $("#removeCouponcode").hide();
        $("#couponCode").prop('disabled', false);
        $("#couponCode").css('background-color', "");
        $("#couponCode").val(""); // $("#couponList").show();

        alert("Coupon code removed"); // Session.set("couponId", undefined);
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"checkoutPage5":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage5/template.template.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("checkoutPagefifth");
Template["checkoutPagefifth"] = new Template("Template.checkoutPagefifth", (function() {
  var view = this;
  return HTML.DIV({
    class: "checkout-step02"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.Raw('<div class="st-content">\n          <!-- this is the wrapper for the content -->\n          <div class="st-content-inner">\n            <!-- extra div for emulating position:fixed of the menu --> \n            <!-- Top Navigation -->\n            <div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Checkout</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right">\n                      <a href="#"><img class="store-icons" alt="store-icons" src="/images/store-icons.png"> </a>\n                      <a href="/cart"><img alt="cart-icons" src="/images/cart-icons.png"> </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- ====== /HEADER EOC ====== --> \n            <!-- ====== /CONTENT BOC ====== -->\n            <div class="checkoptsetp">\n              <div class="steptabs">\n                <div class="container">\n                  <div class="row npm text-center">\n                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      <div class="row">\n                        <ul class="menutabs-main">\n                          <!-- <ul class="menutabs-main menutabs-main-pay"> -->\n                          <div class="lines-divider divider-second"></div>\n                          <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6"> <a class="disabled" href="Javascript:void(0);"> <span class="complete-checked"></span> Order </a></li>\n                          <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><a class="active" href="Javascript:void(0);"> <span></span> Payment </a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="content common-form checkout-page" id="paymentDetailsSecForm">\n              <div class="container">\n                <div class="row">\n                  <div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n                    <div class="form">\n                      <div class="payment_wrapper">\n                        <h2>Payment Method</h2>\n                        \n                        <div class="form-group label-floating is-empty">\n                          <!-- <div class="checkboxmark"> -->\n                            <!-- <label> -->\n                              <!-- <input type="checkbox" value="off" id="cashOnDelivery">\n                              <span class="checkeds blackboder"><i class="fa fa-check checkeds-icon"></i></span> -->\n                            <!-- </label> -->\n                            <div class=" nav nav-pills nav-justified">\n                              <button class="btn" id="cashOnDelivery">Cash On Delivery</button>\n                            </div>\n                          </div>\n                          <span class="material-input"></span> \n                        <!-- </div> -->\n                        <hr style="width:50%;margin-left: 25%;border-color:#c52128;" class="nav nav-pills nav-justified">\n                        <div class="nav nav-pills nav-justified">\n                          <strong>OR</strong>\n                        </div>\n                        <hr style="width:50%;margin-left: 25%;border-color:#c52128;" class="nav nav-pills nav-justified">\n                       \n                        <div id="mypayment" class="carousel slide" data-ride="carousel" data-interval="false">\n                          <!-- Wrapper for slides -->\n                          <ul class="nav nav-pills nav-justified">\n                            <li data-target="#mypayment" data-slide-to="0" class="active"> <a href="#"> <i class="fa fa-fw"></i> Credit Card </a> </li>\n                            <li data-target="#mypayment" data-slide-to="1"> <a href="#"> <i class="fa fa-fw"></i>PayPal</a> </li>\n                          </ul>\n                          <div class="carousel-inner">\n                            <div class="item active">\n                              <div class="payment_card">\n                                <div class="payment_title">\n                                  <h2>Payment Details</h2>\n                                </div>\n                                <div class="payment_details">\n                                  <form>\n                                    <div class="form-group label-floating is-empty">\n                                      <label class="control-label">Card Number</label>\n                                      <input type="text" class="form-control isRequired" id="cardNumber">\n                                      <span class="material-input"></span> \n                                    </div>\n                                      <div class="form-group label-floating is-empty">\n                                        <div class="select-box">\n                                          <div class="form-group">\n                                            <select id="cardType" class="form-control isRequired">\n                                              <option selected="select">Select Card Type</option>\n                                              <option>Visa</option>\n                                              <option>Master</option>\n                                              <option>American Express</option>\n                                              <option>Discover</option>\n                                              <option>JCB</option>\n                                            </select>\n                                          </div>\n                                          <div class="selectarrow"><i class="fa fa-angle-down"></i></div>\n                                        </div>\n                                        <span class="material-input"></span> \n                                      </div>\n                                    <div class="form-group label-floating is-empty">\n                                      <label class="control-label">Name on Card</label>\n                                      <input type="text" class="form-control isRequired" id="NameOnCard">\n                                      <span class="material-input"></span> \n                                    </div>\n                                    <div class="form-group">\n                                      <div class="expirationpgdm expiry-date"> Expiration </div>\n                                    </div>\n                                    <div class="monthyearpickered">\n                                      <div class="form-group label-floating is-empty">\n                                        <div class="select-box">\n                                          <div class="form-group">\n                                            <select id="monthCategory" name="category" class="form-control isRequired">\n                                              <option selected="select">Select Month</option>\n                                              <option>01</option>\n                                              <option>02</option>\n                                              <option>03</option>\n                                              <option>04</option>\n                                              <option>05</option>\n                                              <option>06</option>\n                                              <option>07</option>\n                                              <option>08</option>\n                                              <option>09</option>\n                                              <option>10</option>\n                                              <option>11</option>\n                                              <option>12</option>\n                                            </select>\n                                          </div>\n                                          <div class="selectarrow"><i class="fa fa-angle-down"></i></div>\n                                        </div>\n                                        <span class="material-input"></span> \n                                      </div>\n                                    </div>\n                                    <div class="monthyearpickered pull-right">\n                                      <div class="form-group label-floating is-empty">\n                                        <div class="select-box">\n                                          <div class="form-group">\n                                            <select id="yearCategory" name="category" class="form-control isRequired">\n                                              <option selected="select">Select Year</option>\n                                              <option>2018</option>\n                                              <option>2019</option>\n                                              <option>2020</option>\n                                              <option>2021</option>\n                                              <option>2022</option>\n                                              <option>2023</option>\n                                              <option>2024</option>\n                                              <option>2025</option>\n                                              <option>2026</option>\n                                              <option>2027</option>\n                                              <option>2028</option>\n                                              <option>2029</option>\n                                              <option>2030</option>\n                                            </select>\n                                          </div>\n                                          <div class="selectarrow"><i class="fa fa-angle-down"></i></div>\n                                        </div>\n                                        <span class="material-input"></span> \n                                      </div>\n                                    </div>\n                                    <div class="form-group label-floating is-empty">\n                                      <label class="control-label">C V V</label>\n                                      <input type="text" class="form-control">\n                                      <span class="material-input"></span> \n                                    </div>\n                                    <div class="form-group label-floating is-empty">\n                                      <div class="checkboxmark">\n                                        <label>\n                                          <input type="checkbox" value="" id="saveThecard">\n                                          <span class="checkeds blackboder"><i class="fa fa-check checkeds-icon"></i></span>\n                                          <h3 class="font-weit-normal">Save my Card details</h3>\n                                        </label>\n                                      </div>\n                                      <span class="material-input"></span> \n                                    </div>\n                                  </form>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- End Item -->\n                            <div class="item">\n                              <div class="payment_card">\n                                <div class="payment_title">\n                                  <h2>Login to PayPal</h2>\n                                </div>\n                                <br>\n                                <div id="paypal-button-second"></div>\n                              </div>\n                            </div>\n                            <!-- End Item --> \n                          </div>\n                          <!-- End Carousel Inner --> \n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="form-group next-btns">\n                <div class="pos-relative">\n                  <button class="btn btn-block text-uppercase" id="submitOrder">\n                    Submit Order\n                    <div class="ripple-container"></div>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>'), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/checkoutPage5/script.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.checkoutPagefifth.onCreated(function () {});
Template.checkoutPagefifth.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
  paypal.Button.render({
    env: 'sandbox',
    // Or 'sandbox',
    commit: true,
    // Show a 'Pay Now' button
    style: {
      color: 'gold',
      size: 'small'
    },
    client: {
      sandbox: 'AegE0DJG2Nt6NbQVKBbTPRwknBH8WWKHuCuwEdIiKQ0FBnMFttck-DgCvHpabySFeEKrAiKmSJRmPTJ6' //production: 'xxxxxxxxx'

    },
    payment: function (data, actions) {
      var order = orders.findOne({
        _id: Router.current().params._id
      });
      return actions.payment.create({
        payment: {
          transactions: [{
            amount: {
              total: order.grossTotal,
              currency: 'USD'
            }
          }]
        }
      });
      /* 
       * Set up the payment here 
       */
    },
    onAuthorize: function (data, actions) {
      var order = orders.findOne({
        _id: Router.current().params._id
      });
      return actions.payment.execute().then(function (payment) {
        console.log(payment);
        var resData = payment;
        console.log(resData);

        if (resData !== null) {
          if (typeof resData !== "undefined") {
            Meteor.call("addPaymentPaypal", resData, Router.current().params._id, function (err, res) {
              console.log(err);
              console.log(res);

              if (err) {
                alert(err.reason);
              } else {
                // Session.set('cvvNumber', undefined);
                Router.go("/storeSuccessPage/" + order._id);
              }
            });
          }
        }
      });
    },
    onCancel: function (data, actions) {
      /* 
       * Buyer cancelled the payment
       */
      console.log(data);
      console.log(actions);
    },
    onError: function (err) {
      /* 
       * An error occurred during the transaction 
       */
      alert("Something went wrong. Please try again later.");
    }
  }, '#paypal-button-second');
});
Template.checkoutPagefifth.helpers({});
Template.checkoutPagefifth.events({
  'click #submitOrder': function (e) {
    e.preventDefault();
    var me = $(e.target);
    var cardNumber = $("#cardNumber").val();
    var NameOnCard = $("#NameOnCard").val();
    var monthCategory = $("#monthCategory").val();
    var yearCategory = $("#yearCategory").val();
    var cvvNumber = $("#cvvNumber").val();
    Session.set("cvvNumber", cvvNumber);
    var paymentType = "credit card";
    var cardType = $("#cardType").val();

    var orderId = Router.current().params._id;

    if ($("#saveThecard").is(':checked')) {
      var saveThecard = true; // alert(saveThecard)
    } else {
      var saveThecard = false; // alert(saveThecard) 
    }

    var requiredError = isRequired($("#paymentDetailsForm"), true);

    if (requiredError) {
      return;
      alert("Please Fill Up All Card Details");
    } else {
      Meteor.call("insertCardDetails", orderId, cardNumber, NameOnCard, monthCategory, yearCategory, Meteor.userId(), saveThecard, paymentType, cardType, function (err, res) {
        if (err) {
          console.log(err.reason);
        } else {
          // var paymentdetail = paymentDetails.findOne({orderId: Router.current().params._id})
          var currentOrder = orders.findOne({
            _id: Router.current().params._id
          });
          var dataDetails = {
            name: NameOnCard,
            number: cardNumber,
            type: cardType.toLowerCase(),
            cvv2: cvvNumber,
            expire_year: yearCategory,
            expire_month: monthCategory
          };
          console.log(dataDetails);
          var dataAmounts = {
            total: currentOrder.grossTotal,
            currency: 'USD'
          };
          me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
          me.attr("disabled", true);
          Meteor.call("paymentProceed", dataDetails, dataAmounts, function (err, res) {
            if (err) {
              alert(err.reason);
            } else {
              // $(window).load(function(){});
              var a = setInterval(function () {
                // $("#inject-loader-wrapper").fadeOut(500, function() { $(this).remove(); });
                var paymntresponse = ServerSession.get("paymentResponse");

                if (typeof paymntresponse !== "undefined") {
                  clearInterval(a);

                  if (paymntresponse.saved) {
                    Meteor.call("addPayment", paymntresponse, currentOrder._id, function (err, res) {
                      if (err) {
                        alert(err.reason);
                      } else {
                        Router.go("/storeSuccessPage/" + currentOrder._id);
                      }
                    });
                  } else {
                    alert("payment failed");
                  }

                  console.log(paymntresponse);
                }
              }, 500);
            }
          });
        }
      });
    }
  },
  'click #cashOnDelivery': function (e) {
    if (confirm("Are you sure for COD ?")) {
      // $("#mypayment").hide();
      var currentOrder = orders.findOne({
        _id: Router.current().params._id
      });
      paymentType = "unpaid";
      Meteor.call("updateOrderPaymentStatus", currentOrder, paymentType, function (err, res) {
        if (err) {
          console.log(err.reason);
        } else {
          Router.go("/storeSuccessPage/" + currentOrder._id);
        }
      }); // add value for cash on delivery
    } else {
      // $("#mypayment").show();
      return;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"coupons":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/coupons/template.template.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("coupons");
Template["coupons"] = new Template("Template.coupons", (function() {
  var view = this;
  return HTML.DIV({
    class: "coupons"
  }, "\n    ", HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 col-lg-6 col-md-6 col-sm-6 npm">\n                      <div class="header_title">\n                        <h2>Coupons</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "content common-form coupons-main"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", HTML.DIV({
    class: "row text-center"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getCoupons"));
  }, function() {
    return [ "\n                          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getCoupons"));
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
      }, "\n                              ", HTML.DIV({
        class: "coupons-bg"
      }, "\n                                ", HTML.DIV({
        class: "offers-text"
      }, "\n                                  ", Blaze.View("lookup:..discount", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "discount"));
      }), "%", HTML.SPAN(" OFF "), "\n                                "), "\n                                ", HTML.P(Blaze.View("lookup:..description", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "description"));
      }), "."), "\n                                ", HTML.DIV({
        class: "freecode"
      }, "\n                                  ", Blaze.View("lookup:..promocode", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "promocode"));
      }), "\n                                  ", HTML.DIV({
        class: "free-codeimg"
      }, HTML.IMG({
        src: "/images/free-img-code.png",
        alt: "free-img-code"
      })), "\n                                "), "\n                                ", HTML.P(Blaze.View("lookup:couponAvailability", function() {
        return Spacebars.mustache(view.lookup("couponAvailability"), Spacebars.dot(view.lookup("."), "_id"));
      })), "\n                              "), "\n                            "), "\n                          " ];
    }), "\n                        " ];
  }, function() {
    return "\n                        ";
  }), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/coupons/script.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.coupons.onCreated(function () {
  Meteor.subscribe('getCoupons');
  Meteor.subscribe('getCoupons');
});
Template.coupons.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.coupons.helpers({
  getCoupons: function () {
    return coupons.find({
      validFrom: {
        $lte: new Date()
      },
      validTo: {
        $gte: new Date()
      }
    }).fetch();
  },
  couponAvailability: function (couponId) {
    var couponname = coupons.findOne({
      _id: couponId
    }).couponName;
    var couponUsed = orders.findOne({
      userId: Meteor.userId(),
      couponCode: couponname,
      status: "Success"
    });

    if (couponUsed) {
      return "Coupon Redeemed";
    } else {
      return "Coupon Available";
    }
  }
});
Template.coupons.events({});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"dashboard":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/dashboard/template.template.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return HTML.DIV({
    class: "home_page animated slideInUp"
  }, "\n    ", HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Home</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right"> <a href="/storePage"><img class="store-icons" alt="store-icons" src="/images/store-icons.png"> </a> <a href="/cart"><img alt="cart-icons" src="/images/cart-icons.png"> </a> </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "serch-homepage"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "search-with-scaner"
  }, "\n                      ", HTML.Raw('<span class="search-icon">\n                      <button type="submit">\n                      <span class="fa fa-search"></span>\n                      </button>  \n                      </span>'), "\n                      ", HTML.Raw('<!-- <input type="text" id="searchproduct" placeholder="Search" class="form-control"> -->'), "\n                      ", Blaze._TemplateWith(function() {
    return {
      settings: Spacebars.call(view.lookup("settings")),
      id: Spacebars.call("searchproduct"),
      class: Spacebars.call("input-xlarge form-control"),
      placeholder: Spacebars.call("Search")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("inputAutocomplete"));
  }), "\n                      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isCordova"));
  }, function() {
    return [ "\n                      ", HTML.A({
      href: "#",
      id: "barcodeIcon"
    }, HTML.IMG({
      class: "scanner",
      src: "/images/scanner-bar-img.png",
      alt: "Scanner"
    })), "\n                      " ];
  }), "\n                    "), "\n                    ", HTML.DIV({
    class: "currently-shopping"
  }, "\n                      Currently Shopping At ", HTML.A({
    href: "#"
  }, Blaze.View("lookup:selectedStoreName", function() {
    return Spacebars.mustache(view.lookup("selectedStoreName"));
  })), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.DIV({
    class: "banner-liquor"
  }, "\n              ", HTML.DIV({
    id: "bootstrap-touch-slider",
    class: "carousel bs-slider control-round indicators-line",
    "data-ride": "carousel",
    "data-pause": "hover",
    "data-interval": "false"
  }, "\n                ", HTML.Raw("<!-- Indicators -->"), "\n                ", HTML.OL({
    class: "carousel-indicators"
  }, "\n                  ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("getBanners"));
  }, function() {
    return [ "\n                  ", HTML.LI({
      "data-target": "#bootstrap-touch-slider",
      "data-slide-to": function() {
        return Spacebars.mustache(view.lookup("@index"));
      },
      class: function() {
        return Spacebars.mustache(view.lookup("isFirst"), view.lookup("@index"));
      }
    }), "\n                  " ];
  }), "\n                "), "\n                ", HTML.Raw("<!-- Wrapper For Slides -->"), "\n                ", HTML.DIV({
    class: "carousel-inner",
    role: "listbox"
  }, "\n                  ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("getBanners"));
  }, function() {
    return [ "\n                  ", HTML.DIV({
      class: function() {
        return [ "item ", Spacebars.mustache(view.lookup("isFirst"), view.lookup("@index")) ];
      }
    }, "\n                    ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("imageResize"), Spacebars.dot(view.lookup("."), "bannerImage"));
      },
      alt: "Banner Image",
      class: "slide-image"
    }), "\n                    ", HTML.DIV({
      class: "bs-slider-overlay"
    }), "\n                    ", HTML.DIV({
      class: "container"
    }, "\n                      ", HTML.DIV({
      class: "row"
    }, "\n                        ", HTML.DIV({
      class: "slide-text slide_style_center"
    }, "\n                          ", HTML.H3({
      "data-animation": "animated lightSpeedIn aachenroman"
    }, Blaze.View("lookup:..textOne", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "textOne"));
    })), "\n                          ", HTML.H1({
      "data-animation": "animated flipInX"
    }, " ", Blaze.View("lookup:..textTwo", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "textTwo"));
    }), " "), "\n                          ", HTML.H4({
      "data-animation": "animated lightSpeedIn"
    }, Blaze.View("lookup:..textThree", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "textThree"));
    })), "\n                        "), "\n                      "), "\n                    "), "\n                  "), "\n                  " ];
  }), "\n                "), "\n                ", HTML.Raw("<!-- End of Wrapper For Slides -->"), "\n              "), "\n              ", HTML.Raw("<!-- End  bootstrap-touch-slider Slider -->"), "  \n            "), "\n            ", HTML.DIV({
    class: "categories"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12 content_bg"
  }, "\n                    ", HTML.DIV({
    class: "content"
  }, "\n                      ", HTML.Raw("<h2>Categories</h2>"), "\n                      ", HTML.DIV({
    class: "owl-carousel nonloop"
  }, "\n                        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("categoriesList"));
  }, function() {
    return [ "\n                        ", HTML.DIV({
      class: "main_list"
    }, "\n                          ", HTML.IMG({
      class: "img-responsive",
      src: function() {
        return Spacebars.mustache(view.lookup("categoryImage"), view.lookup("."));
      },
      alt: "favorites-heart"
    }), "\n                          ", HTML.H3(Blaze.View("lookup:..categoryType", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "categoryType"));
    })), "\n                        "), "\n                        " ];
  }), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.DIV({
    class: "advertisement"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-xs-6 nopdn-left nopdn-right"
  }, "\n                    ", HTML.DIV({
    class: "ad-img-1"
  }, "\n                      ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("posterFirst"));
    },
    alt: "ad-img-1",
    style: "display: block !important;"
  }), "\n                    "), "\n                  "), "\n                  ", HTML.DIV({
    class: "col-xs-6 nopdn-left nopdn-right"
  }, "\n                    ", HTML.DIV({
    class: "ad-img-2"
  }, "\n                      ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("posterSecond"));
    },
    alt: "ad-img-2",
    style: "display: block !important;"
  }), "\n                    "), "\n                    ", HTML.DIV({
    class: "ad-img-3"
  }, "\n                      ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("posterThird"));
    },
    alt: "ad-img-3",
    style: "display: block !important;"
  }), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.DIV({
    class: "toppicks-products position-relative"
  }, "\n              ", HTML.Raw('<!-- <div class="inprogress"><p>In Progress</p></div> -->'), "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form gray-color-bg"
  }, "\n                      ", HTML.Raw('<div class="toppicks">\n                        <h2>Top Picks</h2>\n                        <div class="viewalls">\n                          <a href="/topPickProducts">View All</a>\n                        </div>\n                      </div>'), "\n                      ", HTML.DIV({
    class: "row"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("topPicks"));
  }, function() {
    return [ "\n                          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("topPicks"));
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-6 pdnright"
      }, "\n                              ", HTML.DIV({
        class: "favorites-products"
      }, "\n                                ", HTML.DIV({
        class: "favorites-proimg"
      }, "\n                                  ", HTML.A({
        href: function() {
          return [ "/productDetails/", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
        }
      }, HTML.IMG({
        class: "img-responsive center-block",
        src: function() {
          return Spacebars.mustache(view.lookup("prodImage"), Spacebars.dot(view.lookup("."), "_id"));
        },
        alt: "Favorites Product"
      })), "  \n                                  ", HTML.DIV({
        class: "favorites-heart"
      }, "\n                                    ", HTML.A({
        href: "#"
      }, "\n                                      ", HTML.Comment(' <img class="img-responsive" src="/images/favorites-heart.png" alt="favorites-heart"> '), "\n                                      ", Blaze.If(function() {
        return Spacebars.call(view.lookup("getStatus"));
      }, function() {
        return [ "\n                                        ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorite-fill.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                      " ];
      }, function() {
        return [ "\n                                        ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorites-heart.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                      " ];
      }), "\n                                    "), " \n                                  "), "\n                                "), "\n                                ", HTML.DIV({
        class: "pricetables"
      }, "\n                                  ", HTML.A({
        href: "#"
      }, Blaze.View("lookup:..productName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productName"));
      })), "\n                                  ", HTML.DIV({
        class: "pricefvrt"
      }, "\n                                    $ ", Blaze.View("lookup:..price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "price"));
      }), " ", HTML.SPAN(Blaze.View("lookup:..quantity", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "quantity"));
      }), "ml Bottle"), "\n                                  "), "\n                                "), "\n                                ", HTML.DIV({
        class: "fvrt-btnaddtocart"
      }, "\n                                  ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("outOfStock"), view.lookup("."));
      }, function() {
        return [ "\n                                    ", HTML.BUTTON({
          class: "btn btn-block",
          id: "addCart",
          "data-attr": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          }
        }, "\n                                      Add To Cart ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/cart-icons.png"
        }), "\n                                      ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                    "), "\n                                  " ];
      }, function() {
        return [ "\n                                    ", HTML.BUTTON({
          class: "btn btn-block outOfStock"
        }, "\n                                      Out Of Stock ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/outofstock.png",
          class: "outOfStockIcon"
        }), "\n                                      ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                    "), "\n                                  " ];
      }), "\n                                "), "\n                              "), "\n                            "), "\n                          " ];
    }), "\n                        " ];
  }, function() {
    return "\n                        ";
  }), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.DIV({
    class: "ad_banner",
    style: "display: block !important;"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-5 col-md-5 col-sm-5 col-xs-5"
  }, "\n                    ", HTML.DIV({
    class: "image"
  }, "\n                      ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("bannerProductImage"));
    },
    alt: "beer_oatmeal_stout.png"
  }), "\n                    "), "\n                  "), "\n                  ", HTML.DIV({
    class: "col-lg-6 col-md-6 col-sm-6 col-xs-6"
  }, "\n                    ", HTML.DIV({
    class: "content"
  }, "\n                      ", HTML.H2(Blaze.If(function() {
    return Spacebars.call(view.lookup("bannerProductCategory"));
  }, function() {
    return [ " ", Blaze.View("lookup:bannerProductCategory", function() {
      return Spacebars.mustache(view.lookup("bannerProductCategory"));
    }), " " ];
  }, function() {
    return [ " ", HTML.CharRef({
      html: "&nbsp;",
      str: " "
    }), " " ];
  })), "\n                      ", HTML.H3(Blaze.View("lookup:bannerProductName.productName", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("bannerProductName"), "productName"));
  })), "\n                      ", HTML.A({
    href: function() {
      return [ "/productDetails/", Spacebars.mustache(Spacebars.dot(view.lookup("bannerProductName"), "_id")) ];
    },
    class: "btn"
  }, "shop now"), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.DIV({
    class: "toppicks-products last"
  }, "\n              ", HTML.Raw('<!-- <div class="inprogress"><p>In Progress</p></div> -->'), "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form gray-color-bg"
  }, "\n                      ", HTML.Raw('<div class="toppicks">\n                        <h2>Collections For You</h2>\n                       <!--  <div class="viewalls">\n                          <a href="#">View All</a>\n                        </div> -->\n                      </div>'), "\n                      ", HTML.DIV({
    class: "row"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("collectionForYou"));
  }, function() {
    return [ "\n                          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("collectionForYou"));
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-6 pdnright"
      }, "\n                              ", HTML.DIV({
        class: "favorites-products"
      }, "\n                                ", HTML.DIV({
        class: "favorites-proimg"
      }, "\n                                  ", HTML.A({
        href: function() {
          return [ "/productDetails/", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
        }
      }, HTML.IMG({
        class: "img-responsive center-block",
        src: function() {
          return Spacebars.mustache(view.lookup("prodImage"), Spacebars.dot(view.lookup("."), "_id"));
        },
        alt: "Favorites Product"
      })), "  \n                                  ", HTML.DIV({
        class: "favorites-heart"
      }, "\n                                    ", HTML.A({
        href: "#"
      }, "\n                                      ", HTML.Comment(' <img class="img-responsive" src="/images/favorites-heart.png" alt="favorites-heart"> '), "\n                                      ", Blaze.If(function() {
        return Spacebars.call(view.lookup("getStatus"));
      }, function() {
        return [ "\n                                        ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorite-fill.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                      " ];
      }, function() {
        return [ "\n                                        ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorites-heart.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                      " ];
      }), "\n                                    "), "\n                                  "), "\n                                "), "\n                                ", HTML.DIV({
        class: "pricetables"
      }, "\n                                  ", HTML.A({
        href: "#"
      }, Blaze.View("lookup:..productName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productName"));
      })), "\n                                  ", HTML.DIV({
        class: "pricefvrt"
      }, "\n                                    $ ", Blaze.View("lookup:..price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "price"));
      }), " ", HTML.SPAN(Blaze.View("lookup:..quantity", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "quantity"));
      }), "ml Bottle"), "\n                                  "), "\n                                "), "\n                                ", HTML.DIV({
        class: "fvrt-btnaddtocart"
      }, "\n                                  ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("outOfStock"), view.lookup("."));
      }, function() {
        return [ "\n                                    ", HTML.BUTTON({
          class: "btn btn-block",
          id: "addCart",
          "data-attr": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          }
        }, "\n                                      Add To Cart ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/cart-icons.png"
        }), "\n                                      ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                    "), "\n                                  " ];
      }, function() {
        return [ "\n                                    ", HTML.BUTTON({
          class: "btn btn-block outOfStock"
        }, "\n                                      Out Of Stock ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/outofstock.png",
          class: "outOfStockIcon"
        }), "\n                                      ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                    "), "\n                                  " ];
      }), "\n                                "), "\n                              "), "\n                            "), "\n                          " ];
    }), "\n                        " ];
  }, function() {
    return "\n                        ";
  }), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/dashboard/script.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

Template.dashboard.onCreated(function () {
  Meteor.subscribe('getCategories');
  Meteor.subscribe('getPosters');
  Meteor.subscribe('getBanners');
  Meteor.subscribe('getOrders');
  Meteor.subscribe('getProducts', Session.get("storeId"));
});
Template.dashboard.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
  sliderHelper(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      dots: false,
      responsive: {
        0: {
          items: 2.5,
          margin: 10
        },
        600: {
          items: 3.5,
          margin: 20
        },
        1000: {
          items: 4.5,
          margin: 30
        }
      }
    });
  });

  $.fn.bsTouchSlider = function (options) {
    var carousel = $("#bootstrap-touch-slider");
    return this.each(function () {
      function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elems.each(function () {
          var $this = $(this),
              $animationType = $this.data('animation');
          $this.addClass($animationType).one(animEndEv, function () {
            $this.removeClass($animationType);
          });
        });
      } //Variables on page load


      var $firstAnimatingElems = carousel.find('.item:first').find("[data-animation ^= 'animated']"); //Initialize carousel

      carousel.carousel(); //Animate captions in first slide on page load

      doAnimations($firstAnimatingElems); //Other slides to be animated on carousel slide event

      carousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
      }); //swipe initial 

      $(".carousel .carousel-inner").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
          this.parent().carousel('next');
        },
        swipeRight: function () {
          this.parent().carousel('prev');
        },
        threshold: 0
      });
    });
  };

  $('#bootstrap-touch-slider').bsTouchSlider();
});
Template.dashboard.helpers({
  categoriesList: function () {
    return categories.find().fetch();
  },
  categoryImage: function (category) {
    var category = categories.findOne({
      _id: category._id
    });

    if (typeof category !== "undefined") {
      if (typeof category.categoryImage !== "undefined") {
        var image = category.categoryImage;
        var imageUrl = image.split("upload");
        imageUrl = imageUrl[0] + "upload/c_pad,w_127,h_46" + imageUrl[1];
        return imageUrl;
      } else {
        var image = "https://res.cloudinary.com/liqour/image/upload/v1540539031/zu2kbqbkobjvqgx5oyjc.png";
        var imageUrl = image.split("upload");
        imageUrl = imageUrl[0] + "upload/c_pad,w_127,h_46" + imageUrl[1];
        return imageUrl;
      }
    }
  },
  bannerProductImage: function () {
    /*if(Session.get("storeId") == undefined)
    {
      var banner = products.findOne({adBanner: true}).productImage;
      var imageUrl = banner.split("upload")
      imageUrl = imageUrl[0] + "upload/c_scale,h_718,w_500" + imageUrl[1]
      return imageUrl;
    }
    else
    {
      var banner = products.findOne({storeName: Session.get("storeId"), adBanner: true}).productImage;
      var imageUrl = banner.split("upload")
      imageUrl = imageUrl[0] + "upload/c_scale,h_718,w_500" + imageUrl[1]
      return imageUrl;
    }*/
    var banner = products.find({
      adBanner: true
    });

    if (banner.count() > 0) {
      banner = products.findOne({
        adBanner: true
      });
      var url = banner.productImage;
      var imageUrl = url.split("upload");
      imageUrl = imageUrl[0] + "upload/c_scale,h_718,w_500" + imageUrl[1];
      return imageUrl;
    }
  },
  bannerProductCategory: function () {
    /*if(Session.get("storeId") == undefined)
    {
      var banner = products.findOne({adBanner: true});
      return categories.findOne({_id: banner.categoryType}).categoryType;
    }
    else
    {
      var banner = products.findOne({storeName: Session.get("storeId"), adBanner: true});
      return categories.findOne({_id: banner.categoryType}).categoryType;
    }*/
    var banner = products.find({
      adBanner: true
    });

    if (banner.count() > 0) {
      banner = products.findOne({
        adBanner: true
      });
      return categories.findOne({
        _id: banner.categoryType
      }).categoryType;
    }
  },
  bannerProductName: function () {
    /*if(Session.get("storeId") == undefined)
    {
      var banner = products.findOne({adBanner: true});
      return banner;
    }
    else
    {
      var banner = products.findOne({storeName: Session.get("storeId"),adBanner: true});
      return banner; 
    }*/
    var banner = products.findOne({
      adBanner: true
    });
    return banner;
  },
  posterFirst: function () {
    var data = posters.find().fetch();

    if (typeof data !== "undefined") {
      if (typeof posters.find().fetch()[0] !== "undefined") {
        if (typeof posters.find().fetch()[0].posterImage !== "undefined") {
          return posters.find().fetch()[0].posterImage;
        }
      }
    }
  },
  posterSecond: function () {
    var data = posters.find().fetch();

    if (typeof data !== "undefined") {
      if (typeof posters.find().fetch()[1] !== "undefined") {
        if (typeof posters.find().fetch()[1].posterImage !== "undefined") {
          return posters.find().fetch()[1].posterImage;
        }
      }
    }
  },
  posterThird: function () {
    var data = posters.find().fetch();

    if (typeof data !== "undefined") {
      if (typeof posters.find().fetch()[2] !== "undefined") {
        if (typeof posters.find().fetch()[2].posterImage !== "undefined") {
          return posters.find().fetch()[2].posterImage;
        }
      }
    }
  },
  getBanners: function () {
    return banner.find({}).fetch();
  },
  imageResize: function (url) {
    var imageUrl = url.split("upload");
    imageUrl = imageUrl[0] + "upload/c_scale,h_617,w_1242" + imageUrl[1];
    return imageUrl;
  },
  isFirst: function (n) {
    if (n == 0) return "active";
  },
  settings: function () {
    var currentStore = Session.get("storeId");

    if (currentStore) {
      return {
        position: "bottom",
        limit: 5,
        rules: [{
          collection: products,
          field: "productName",
          template: Template.productList,
          selector: function (match) {
            currentStore = Session.get("storeId");
            regex = new RegExp(match, 'i');
            return {
              $and: [{
                storeName: currentStore
              }, {
                'productName': regex
              }]
            };
          }
        }]
      };
    } else {
      return {
        position: "bottom",
        limit: 5,
        rules: [{
          collection: products,
          field: "productName",
          template: Template.productList
        }]
      };
    }
  },
  isCordova: function () {
    return Meteor.isCordova;
  },
  selectedStoreName: function () {
    var currentStore = Session.get("storeId");

    if (currentStore) {
      return stores.findOne({
        _id: currentStore
      }).storeName;
    } else {
      return "All Stores";
    }
  },
  outOfStock: function (product) {
    var productId = product._id;
    var productAvailable = validateProductAvailable(productId);

    if (productAvailable) {
      return true;
    }
  },
  topPicks: function () {
    var orderList = orders.find({
      status: "Success"
    }).fetch();
    console.log(orderList);

    if (orderList.length > 0) {
      var productsQueue = [];
      var productsQuantityQueue = [];

      for (var i = 0; i < orderList.length; i++) {
        var singleOrder = orderList[i];
        var orderProducts = singleOrder.productIds;

        for (var j = 0; j < orderProducts.length; j++) {
          var singleProduct = orderProducts[j];

          if (productsQueue.indexOf(singleProduct.id) == -1) {
            productsQueue.push(singleProduct.id);
            productsQuantityQueue.push(singleProduct.quantity);
          } else {
            var currentIndex = productsQueue.indexOf(singleProduct.id);
            var currentQuantity = productsQuantityQueue[currentIndex];
            currentQuantity = parseInt(currentQuantity) + parseInt(singleProduct.quantity);
            productsQuantityQueue[currentIndex] = currentQuantity;
          }

          if (productsQueue.length >= 5) {
            break;
          }
        }
      } // console.log(productsQueue);
      // console.log(productsQuantityQueue);


      var productListing = [];
      $.each(productsQueue, function (index, value) {
        productListing.push(products.findOne({
          _id: value
        })); // console.log(productListing);
      });
      return productListing;
    } // else
    // {
    //   return products.find().fetch().slice(-4);
    // }

  },
  collectionForYou: function () {
    var orderList = orders.find({
      userId: Meteor.userId(),
      status: "Success"
    }).fetch();

    if (orderList.length > 0) {
      var productsQueue = [];
      var productsQuantityQueue = [];

      for (var i = 0; i < orderList.length; i++) {
        var singleOrder = orderList[i];
        var orderProducts = singleOrder.productIds;

        for (var j = 0; j < orderProducts.length; j++) {
          var singleProduct = orderProducts[j];

          if (productsQueue.indexOf(singleProduct.id) == -1) {
            productsQueue.push(singleProduct.id);
            productsQuantityQueue.push(singleProduct.quantity);
          } else {
            var currentIndex = productsQueue.indexOf(singleProduct.id);
            var currentQuantity = productsQuantityQueue[currentIndex];
            currentQuantity = parseInt(currentQuantity) + parseInt(singleProduct.quantity);
            productsQuantityQueue[currentIndex] = currentQuantity;
          }

          if (productsQueue.length >= 5) {
            break;
          }
        }
      } // console.log(productsQueue);
      // console.log(productsQuantityQueue);


      var collectionListing = [];
      $.each(productsQueue, function (index, value) {
        console.log("category" + products.findOne({
          _id: value
        }).productName);
        var categoryId = products.findOne({
          _id: value
        }).categoryType;
        var sameCatProds = products.findOne({
          _id: {
            $ne: value
          },
          categoryType: categoryId
        });
        collectionListing.push(sameCatProds); // console.log(collectionListing);
      });
      return collectionListing;
    } // else
    // {
    //   return products.find().fetch().slice(-4);
    // }

  },
  getStatusString: function () {
    var a = favProducts.find({
      userId: Meteor.userId(),
      productId: this._id
    });

    if (a.count() > 0) {
      a = a.fetch()[0];

      if (typeof a.status !== "undefined") {
        return a.status;
      } else {
        return "false";
      }
    } else {
      return "false";
    }
  },
  getStatus: function () {
    console.log(this._id);
    var a = favProducts.find({
      userId: Meteor.userId(),
      productId: this._id
    });
    console.log(a);

    if (a.count() > 0) {
      a = a.fetch()[0];

      if (typeof a.status !== "undefined") {
        console.log(a);

        if (a.status == true) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  prodImage: function (prodId) {
    var product = products.findOne({
      _id: prodId
    });
    var image = product.productImage;
    var imageUrl = image.split("upload");
    imageUrl = imageUrl[0] + "upload/w_200,h_500" + imageUrl[1];
    return imageUrl;
  }
});
Template.dashboard.events({
  'click #barcodeIcon': function (e) {
    e.preventDefault();
    cordova.plugins.barcodeScanner.scan(function (res) {
      //sample: {text: "ABC-abc-1234", format: "CODE_128", cancelled: false}
      if (res.text != "") {
        var s = res.text;
        s = s.replace(/^0+/, '');
        var data = products.findOne({
          "productId": s
        });

        if (data != null) {
          Router.go("/productDetails/" + data._id);
        } else {
          alert("No product found.");
        }
      }
    }, function (error) {
      alert("Scanning failed:" + error);
    }, {
      showTorchButton: true,
      // iOS and Android
      saveHistory: true,
      // Android, save scan history (default false)
      disableSuccessBeep: false // iOS and Android

    });
  },
  'click #addCart': function (e) {
    e.preventDefault();

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: $(e.target).data("attr")
      }).storeName;
      Session.set("storeId", storeId);
    } else {
      var storeId = Session.get("storeId");
    }

    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({
      productId: productId,
      userId: userId
    });

    if (presentProduct) {
      Meteor.call("updateCart", presentProduct, productId, userId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          alert("Product Updated Sucessfully!");
        }
      });
    } else {
      Meteor.call("createCart", productId, userId, storeId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          if (res == "false") {
            alert("You cannot select product from another store..!");
          } else {
            alert("Product Added to Cart Sucessfully!");
          }
        }
      });
    }
  },
  'click #favProduct': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: productId
      }).storeName;
      Session.set("storeId", storeId);
    } else {
      var storeId = Session.get("storeId");
    }

    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({
      productId: productId
    });
    var presentfalse = favProducts.findOne({
      status: false
    });

    if (event) {
      var action = false;
    } else {
      var action = true;
    }

    Meteor.call("updateFavProduct", storeId, Meteor.userId(), action, productId, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        if (res) {
          if (action) {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorite-fill.png');
          } else {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    });
  }
});

function sliderHelper(callback) {
  /**
   * Owl Carousel v2.3.4
   * Copyright 2013-2018 David Deutsch
   * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
   */
  !function (a, b, c, d) {
    function e(b, c) {
      this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: {
          start: null,
          current: null
        },
        direction: null
      }, this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"]
        }
      }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
        this._handlers[c] = a.proxy(this[c], this);
      }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
        this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
      }, this)), a.each(e.Workers, a.proxy(function (b, c) {
        this._pipe.push({
          filter: c.filter,
          run: a.proxy(c.run, this)
        });
      }, this)), this.setup(), this.initialize();
    }

    e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab"
    }, e.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer"
    }, e.Type = {
      Event: "event",
      State: "state"
    }, e.Plugins = {}, e.Workers = [{
      filter: ["width", "settings"],
      run: function () {
        this._width = this.$element.width();
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (a) {
        a.current = this._items && this._items[this.relative(this._current)];
      }
    }, {
      filter: ["items", "settings"],
      run: function () {
        this.$stage.children(".cloned").remove();
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (a) {
        var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
          width: "auto",
          "margin-left": d ? b : "",
          "margin-right": d ? "" : b
        };
        !c && this.$stage.children().css(e), a.css = e;
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (a) {
        var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];

        for (a.items = {
          merge: !1,
          width: b
        }; d--;) {
          c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
        }

        this._widths = f;
      }
    }, {
      filter: ["items", "settings"],
      run: function () {
        var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
            h = "",
            i = "";

        for (g /= 2; g > 0;) {
          b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
        }

        this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function () {
        for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
          d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
        }

        this._coordinates = f;
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function () {
        var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
          width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
          "padding-left": a || "",
          "padding-right": a || ""
        };
        this.$stage.css(c);
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (a) {
        var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
        if (c && a.items.merge) for (; b--;) {
          a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
        } else c && (a.css.width = a.items.width, d.css(a.css));
      }
    }, {
      filter: ["items"],
      run: function () {
        this._coordinates.length < 1 && this.$stage.removeAttr("style");
      }
    }, {
      filter: ["width", "items", "settings"],
      run: function (a) {
        a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
      }
    }, {
      filter: ["position"],
      run: function () {
        this.animate(this.coordinates(this._current));
      }
    }, {
      filter: ["width", "position", "items", "settings"],
      run: function () {
        var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];

        for (c = 0, d = this._coordinates.length; c < d; c++) {
          a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
        }

        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
      }
    }], e.prototype.initializeStage = function () {
      this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
        "class": this.settings.stageClass
      }).wrap(a("<div/>", {
        "class": this.settings.stageOuterClass
      })), this.$element.append(this.$stage.parent()));
    }, e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length) return this._items = b.get().map(function (b) {
        return a(b);
      }), this._mergers = this._items.map(function () {
        return 1;
      }), void this.refresh();
      this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
    }, e.prototype.initialize = function () {
      if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
        var a, b, c;
        a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }

      this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }, e.prototype.setup = function () {
      var b = this.viewport(),
          c = this.options.responsive,
          d = -1,
          e = null;
      c ? (a.each(c, function (a) {
        a <= b && a > d && (d = Number(a));
      }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
        property: {
          name: "settings",
          value: e
        }
      }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
        property: {
          name: "settings",
          value: this.settings
        }
      });
    }, e.prototype.optionsLogic = function () {
      this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", {
        content: b
      });
      return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
        content: c.data
      }), c.data;
    }, e.prototype.update = function () {
      for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
        return this[a];
      }, this._invalidated), e = {}; b < c;) {
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
      }

      this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, e.prototype.width = function (a) {
      switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;

        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin;
      }
    }, e.prototype.refresh = function () {
      this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
    }, e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function () {
      return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
    }, e.prototype.registerEventHandlers = function () {
      a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
        return !1;
      })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }, e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
        x: d[16 === d.length ? 12 : 4],
        y: d[16 === d.length ? 13 : 5]
      }) : (d = this.$stage.position(), d = {
        x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
        y: d.top
      }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b));
        a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
      }, this)));
    }, e.prototype.onDragMove = function (a) {
      var b = null,
          c = null,
          d = null,
          e = this.difference(this._drag.pointer, this.pointer(a)),
          f = this.difference(this._drag.stage.start, e);
      this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
    }, e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
          e = this._drag.stage.current,
          f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
        return !1;
      })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, e.prototype.closest = function (b, c) {
      var e = -1,
          f = 30,
          g = this.width(),
          h = this.coordinates();
      return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
        return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e;
      }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e;
    }, e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
        transform: "translate3d(" + b + "px,0px,0px)",
        transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
      }) : c ? this.$stage.animate({
        left: b + "px"
      }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
        left: b + "px"
      });
    }, e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }, e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;

      if (a = this.normalize(a), this._current !== a) {
        var b = this.trigger("change", {
          property: {
            name: "position",
            value: a
          }
        });
        b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
          property: {
            name: "position",
            value: this._current
          }
        });
      }

      return this._current;
    }, e.prototype.invalidate = function (b) {
      return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
        return b;
      });
    }, e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
    }, e.prototype.normalize = function (a, b) {
      var c = this._items.length,
          e = b ? 0 : this._clones.length;
      return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
    }, e.prototype.relative = function (a) {
      return a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function (a) {
      var b,
          c,
          d,
          e = this.settings,
          f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
        if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);) {
          ;
        }
        f = b + 1;
      } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }, e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function (a) {
      return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function (a) {
      return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
          e = c + this._items.length,
          f = function (a) {
        return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
      };

      return b === d ? a.map(this._clones, function (a, b) {
        return f(b);
      }) : a.map(this._clones, function (a, c) {
        return a === b ? f(c) : null;
      });
    }, e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function (b) {
      var c,
          e = 1,
          f = b - 1;
      return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
        return this.coordinates(b);
      }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
    }, e.prototype.duration = function (a, b, c) {
      return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function (a, b) {
      var c = this.current(),
          d = null,
          e = a - this.relative(c),
          f = (e > 0) - (e < 0),
          g = this._items.length,
          h = this.minimum(),
          i = this.maximum();
      this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update();
    }, e.prototype.next = function (a) {
      a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function (a) {
      a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function (a) {
      if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
      this.leave("animating"), this.trigger("translated");
    }, e.prototype.viewport = function () {
      var d;
      return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
    }, e.prototype.replace = function (b) {
      this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
        return 1 === this.nodeType;
      }).each(a.proxy(function (a, b) {
        b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
      }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
        content: b,
        position: c
      }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
        content: b,
        position: c
      });
    }, e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
        content: this._items[a],
        position: a
      }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
        content: null,
        position: a
      }));
    }, e.prototype.preloadAutoWidthImages = function (b) {
      b.each(a.proxy(function (b, c) {
        this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
          c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
        }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
      }, this));
    }, e.prototype.destroy = function () {
      this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

      for (var d in meteorBabelHelpers.sanitizeForInObject(this._plugins)) {
        this._plugins[d].destroy();
      }

      this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;

      switch (b) {
        case "<":
          return d ? a > c : a < c;

        case ">":
          return d ? a < c : a > c;

        case ">=":
          return d ? a <= c : a >= c;

        case "<=":
          return d ? a >= c : a <= c;
      }
    }, e.prototype.on = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function (a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function (b, c, d, f, g) {
      var h = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
          i = a.camelCase(a.grep(["on", b, d], function (a) {
        return a;
      }).join("-").toLowerCase()),
          j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
        relatedTarget: this
      }, h, c));
      return this._supress[b] || (a.each(this._plugins, function (a, b) {
        b.onTrigger && b.onTrigger(j);
      }), this.register({
        type: e.Type.Event,
        name: b
      }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
    }, e.prototype.enter = function (b) {
      a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
        this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
      }, this));
    }, e.prototype.leave = function (b) {
      a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
        this._states.current[b]--;
      }, this));
    }, e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
          var c = a.event.special[b.name]._default;
          a.event.special[b.name]._default = function (a) {
            return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
          }, a.event.special[b.name].owl = !0;
        }
      } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
        return a.inArray(c, this._states.tags[b.name]) === d;
      }, this)));
    }, e.prototype.suppress = function (b) {
      a.each(b, a.proxy(function (a, b) {
        this._supress[b] = !0;
      }, this));
    }, e.prototype.release = function (b) {
      a.each(b, a.proxy(function (a, b) {
        delete this._supress[b];
      }, this));
    }, e.prototype.pointer = function (a) {
      var c = {
        x: null,
        y: null
      };
      return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
    }, e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }, e.prototype.difference = function (a, b) {
      return {
        x: a.x - b.x,
        y: a.y - b.y
      };
    }, a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
            f = d.data("owl.carousel");
        f || (f = new e(this, "object" == (0, _typeof2.default)(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
          f.register({
            type: e.Type.Event,
            name: c
          }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
            a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
          }, f));
        })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }, a.fn.owlCarousel.Constructor = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
      this._core = b, this._interval = null, this._visible = null, this._handlers = {
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.autoRefresh && this.watch();
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };

    e.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500
    }, e.prototype.watch = function () {
      this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function () {
      this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function () {
      var a, c;
      b.clearInterval(this._interval);

      for (a in meteorBabelHelpers.sanitizeForInObject(this._handlers)) {
        this._core.$element.off(a, this._handlers[a]);
      }

      for (c in meteorBabelHelpers.sanitizeForInObject(Object.getOwnPropertyNames(this))) {
        "function" != typeof this[c] && (this[c] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
      this._core = b, this._loaded = [], this._handlers = {
        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
          if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
            var c = this._core.settings,
                e = c.center && Math.ceil(c.items / 2) || c.items,
                f = c.center && -1 * e || 0,
                g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                h = this._core.clones().length,
                i = a.proxy(function (a, b) {
              this.load(b);
            }, this);

            for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) {
              this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
            }
          }
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };

    e.Defaults = {
      lazyLoad: !1,
      lazyLoadEager: 0
    }, e.prototype.load = function (c) {
      var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");

      !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
        var e,
            f = a(d),
            g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
        this._core.trigger("load", {
          element: f,
          url: g
        }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
          f.css("opacity", 1), this._core.trigger("loaded", {
            element: f,
            url: g
          }, "lazy");
        }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
          this._core.trigger("loaded", {
            element: f,
            url: g
          }, "lazy");
        }, this)).attr("srcset", g) : (e = new Image(), e.onload = a.proxy(function () {
          f.css({
            "background-image": 'url("' + g + '")',
            opacity: "1"
          }), this._core.trigger("loaded", {
            element: f,
            url: g
          }, "lazy");
        }, this), e.src = g);
      }, this)), this._loaded.push(d.get(0)));
    }, e.prototype.destroy = function () {
      var a, b;

      for (a in meteorBabelHelpers.sanitizeForInObject(this.handlers)) {
        this._core.$element.off(a, this.handlers[a]);
      }

      for (b in meteorBabelHelpers.sanitizeForInObject(Object.getOwnPropertyNames(this))) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (c) {
      this._core = c, this._previousHeight = null, this._handlers = {
        "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.autoHeight && this.update();
        }, this),
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
        }, this),
        "loaded.owl.lazy": a.proxy(function (a) {
          a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
      var d = this;
      a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }), a(b).resize(function () {
        d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
          d.update();
        }, 250));
      });
    };

    e.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height"
    }, e.prototype.update = function () {
      var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;

      a.each(e, function (b, c) {
        f.push(a(c).height());
      }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
    }, e.prototype.destroy = function () {
      var a, b;

      for (a in meteorBabelHelpers.sanitizeForInObject(this._handlers)) {
        this._core.$element.off(a, this._handlers[a]);
      }

      for (b in meteorBabelHelpers.sanitizeForInObject(Object.getOwnPropertyNames(this))) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
      this._core = b, this._videos = {}, this._playing = null, this._handlers = {
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.register({
            type: "state",
            name: "playing",
            tags: ["interacting"]
          });
        }, this),
        "resize.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
        }, this),
        "refreshed.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
        }, this),
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace && "position" === a.property.name && this._playing && this.stop();
        }, this),
        "prepared.owl.carousel": a.proxy(function (b) {
          if (b.namespace) {
            var c = a(b.content).find(".owl-video");
            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
          }
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
        this.play(a);
      }, this));
    };

    e.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1
    }, e.prototype.fetch = function (a, b) {
      var c = function () {
        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
      }(),
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");

      if (!g) throw new Error("Missing video URL.");
      if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
        if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
        c = "vzaar";
      }
      d = d[6], this._videos[g] = {
        type: c,
        id: d,
        width: e,
        height: f
      }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, e.prototype.thumbnail = function (b, c) {
      var d,
          e,
          f,
          g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (c) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
          "class": "owl-video-tn " + j,
          srcType: c
        }) : a("<div/>", {
          "class": "owl-video-tn",
          style: "opacity:1;background-image:url(" + c + ")"
        }), b.after(d), b.after(e);
      };

      if (b.wrap(a("<div/>", {
        "class": "owl-video-wrapper",
        style: g
      })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
      "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
        type: "GET",
        url: "//vimeo.com/api/v2/video/" + c.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function (a) {
          f = a[0].thumbnail_large, l(f);
        }
      }) : "vzaar" === c.type && a.ajax({
        type: "GET",
        url: "//vzaar.com/api/videos/" + c.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function (a) {
          f = a.framegrab_url, l(f);
        }
      });
    }, e.prototype.stop = function () {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function (b) {
      var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();

      this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
    }, e.prototype.isInFullScreen = function () {
      var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
      return b && a(b).parent().hasClass("owl-video-frame");
    }, e.prototype.destroy = function () {
      var a, b;

      this._core.$element.off("click.owl.video");

      for (a in meteorBabelHelpers.sanitizeForInObject(this._handlers)) {
        this._core.$element.off(a, this._handlers[a]);
      }

      for (b in meteorBabelHelpers.sanitizeForInObject(Object.getOwnPropertyNames(this))) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
      this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
        "change.owl.carousel": a.proxy(function (a) {
          a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
        }, this),
        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
          a.namespace && (this.swapping = "translated" == a.type);
        }, this),
        "translate.owl.carousel": a.proxy(function (a) {
          a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
        }, this)
      }, this.core.$element.on(this.handlers);
    };

    e.Defaults = {
      animateOut: !1,
      animateIn: !1
    }, e.prototype.swap = function () {
      if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
        this.core.speed(0);
        var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
        this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
          left: b + "px"
        }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
      }
    }, e.prototype.clear = function (b) {
      a(b.target).css({
        left: ""
      }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
    }, e.prototype.destroy = function () {
      var a, b;

      for (a in meteorBabelHelpers.sanitizeForInObject(this.handlers)) {
        this.core.$element.off(a, this.handlers[a]);
      }

      for (b in meteorBabelHelpers.sanitizeForInObject(Object.getOwnPropertyNames(this))) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
      this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
        }, this),
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.autoplay && this.play();
        }, this),
        "play.owl.autoplay": a.proxy(function (a, b, c) {
          a.namespace && this.play(b, c);
        }, this),
        "stop.owl.autoplay": a.proxy(function (a) {
          a.namespace && this.stop();
        }, this),
        "mouseover.owl.autoplay": a.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
        }, this),
        "mouseleave.owl.autoplay": a.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
        }, this),
        "touchstart.owl.core": a.proxy(function () {
          this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
        }, this),
        "touchend.owl.core": a.proxy(function () {
          this._core.settings.autoplayHoverPause && this.play();
        }, this)
      }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
    };

    e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }, e.prototype._next = function (d) {
      this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
    }, e.prototype.read = function () {
      return new Date().getTime() - this._time;
    }, e.prototype.play = function (c, d) {
      var e;
      this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
    }, e.prototype.stop = function () {
      this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"));
    }, e.prototype.pause = function () {
      this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call));
    }, e.prototype.destroy = function () {
      var a, b;
      this.stop();

      for (a in meteorBabelHelpers.sanitizeForInObject(this._handlers)) {
        this._core.$element.off(a, this._handlers[a]);
      }

      for (b in meteorBabelHelpers.sanitizeForInObject(Object.getOwnPropertyNames(this))) {
        "function" != typeof this[b] && (this[b] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";

    var e = function (b) {
      this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
        next: this._core.next,
        prev: this._core.prev,
        to: this._core.to
      }, this._handlers = {
        "prepared.owl.carousel": a.proxy(function (b) {
          b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
        }, this),
        "added.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
        }, this),
        "remove.owl.carousel": a.proxy(function (a) {
          a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
        }, this),
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace && "position" == a.property.name && this.draw();
        }, this),
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
        }, this),
        "refreshed.owl.carousel": a.proxy(function (a) {
          a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
    };

    e.Defaults = {
      nav: !1,
      navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
    }, e.prototype.initialize = function () {
      var b,
          c = this._core.settings;
      this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
        this.prev(c.navSpeed);
      }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
        this.next(c.navSpeed);
      }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
        var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
        b.preventDefault(), this.to(d, c.dotsSpeed);
      }, this));

      for (b in meteorBabelHelpers.sanitizeForInObject(this._overrides)) {
        this._core[b] = a.proxy(this[b], this);
      }
    }, e.prototype.destroy = function () {
      var a, b, c, d, e;
      e = this._core.settings;

      for (a in meteorBabelHelpers.sanitizeForInObject(this._handlers)) {
        this.$element.off(a, this._handlers[a]);
      }

      for (b in meteorBabelHelpers.sanitizeForInObject(this._controls)) {
        "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
      }

      for (d in meteorBabelHelpers.sanitizeForInObject(this.overides)) {
        this._core[d] = this._overrides[d];
      }

      for (c in meteorBabelHelpers.sanitizeForInObject(Object.getOwnPropertyNames(this))) {
        "function" != typeof this[c] && (this[c] = null);
      }
    }, e.prototype.update = function () {
      var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

      if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
        if (b >= h || 0 === b) {
          if (this._pages.push({
            start: Math.min(f, a - d),
            end: a - d + h - 1
          }), Math.min(f, a - d) === f) break;
          b = 0, ++c;
        }

        b += this._core.mergers(this._core.relative(a));
      }
    }, e.prototype.draw = function () {
      var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;

      this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }, e.prototype.onTrigger = function (b) {
      var c = this._core.settings;
      b.page = {
        index: a.inArray(this.current(), this._pages),
        count: this._pages.length,
        size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
      };
    }, e.prototype.current = function () {
      var b = this._core.relative(this._core.current());

      return a.grep(this._pages, a.proxy(function (a, c) {
        return a.start <= b && a.end >= b;
      }, this)).pop();
    }, e.prototype.getPosition = function (b) {
      var c,
          d,
          e = this._core.settings;
      return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, e.prototype.next = function (b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, e.prototype.prev = function (b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, e.prototype.to = function (b, c, d) {
      var e;
      !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";

    var e = function (c) {
      this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
        "initialized.owl.carousel": a.proxy(function (c) {
          c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
        }, this),
        "prepared.owl.carousel": a.proxy(function (b) {
          if (b.namespace) {
            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
            if (!c) return;
            this._hashes[c] = b.content;
          }
        }, this),
        "changed.owl.carousel": a.proxy(function (c) {
          if (c.namespace && "position" === c.property.name) {
            var d = this._core.items(this._core.relative(this._core.current())),
                e = a.map(this._hashes, function (a, b) {
              return a === d ? b : null;
            }).join();

            if (!e || b.location.hash.slice(1) === e) return;
            b.location.hash = e;
          }
        }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
        var c = b.location.hash.substring(1),
            e = this._core.$stage.children(),
            f = this._hashes[c] && e.index(this._hashes[c]);

        f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
      }, this));
    };

    e.Defaults = {
      URLhashListener: !1
    }, e.prototype.destroy = function () {
      var c, d;
      a(b).off("hashchange.owl.navigation");

      for (c in meteorBabelHelpers.sanitizeForInObject(this._handlers)) {
        this._core.$element.off(c, this._handlers[c]);
      }

      for (d in meteorBabelHelpers.sanitizeForInObject(Object.getOwnPropertyNames(this))) {
        "function" != typeof this[d] && (this[d] = null);
      }
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
  }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
          f = b.charAt(0).toUpperCase() + b.slice(1);
      return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
        if (g[b] !== d) return e = !c || b, !1;
      }), e;
    }

    function f(a) {
      return e(a, !0);
    }

    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend"
        }
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        }
      }
    },
        j = {
      csstransforms: function () {
        return !!e("transform");
      },
      csstransforms3d: function () {
        return !!e("perspective");
      },
      csstransitions: function () {
        return !!e("transition");
      },
      cssanimations: function () {
        return !!e("animation");
      }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
  }(window.Zepto || window.jQuery, window, document);
  setTimeout(function () {
    callback();
  }, 4000);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"favorites":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/favorites/template.template.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("favorites");
Template["favorites"] = new Template("Template.favorites", (function() {
  var view = this;
  return HTML.DIV({
    class: "favorites gray-color-bg"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n      \t", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 npm">\n                      <div class="header_title">\n                        <h2>Favorites</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form favorites-list"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", HTML.DIV({
    class: "row"
  }, "\n                      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getfavProducts"));
  }, function() {
    return [ "\n                        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getfavProducts"));
    }, function() {
      return [ "\n                          ", HTML.DIV({
        class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
      }, "\n                            ", HTML.DIV({
        class: "favorites-products"
      }, "\n                              ", HTML.DIV({
        class: "favorites-proimg"
      }, "\n                                ", HTML.A({
        href: function() {
          return [ "/productDetails/", Spacebars.mustache(Spacebars.dot(view.lookup("."), "productId")) ];
        }
      }, HTML.IMG({
        class: "img-responsive center-block",
        src: function() {
          return Spacebars.mustache(view.lookup("getProductImage"), view.lookup("."));
        },
        alt: "Favorites Product"
      })), "\t\n                                ", HTML.DIV({
        class: "favorites-heart"
      }, "\n                                  ", HTML.A({
        href: "#"
      }, HTML.IMG({
        class: "img-responsive",
        id: "favProducts",
        "data-id": function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        },
        src: "images/favorite-fill.png",
        alt: "favorites-heart"
      })), "\t\n                                "), "\n                              "), "\n                              ", HTML.DIV({
        class: "pricetables"
      }, "\n                                ", HTML.A({
        href: "#"
      }, Blaze.View("lookup:getproductName", function() {
        return Spacebars.mustache(view.lookup("getproductName"), view.lookup("."));
      })), "\n                                ", HTML.DIV({
        class: "pricefvrt"
      }, "\n                                  $", Blaze.View("lookup:getproductPrice", function() {
        return Spacebars.mustache(view.lookup("getproductPrice"), view.lookup("."));
      }), " ", HTML.SPAN(Blaze.View("lookup:getproductQuantity", function() {
        return Spacebars.mustache(view.lookup("getproductQuantity"), view.lookup("."));
      }), "ml Bottle"), HTML.BR(), "\n                                ", HTML.DIV(HTML.B("Store:"), " ", Blaze.View("lookup:storename", function() {
        return Spacebars.mustache(view.lookup("storename"), view.lookup("."));
      })), "\n                                "), "\n                              "), "\n                              ", HTML.DIV({
        class: "fvrt-btnaddtocart"
      }, "\n                                ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("outOfStock"), view.lookup("."));
      }, function() {
        return [ "\n                                  ", HTML.BUTTON({
          class: "btn btn-block",
          id: "addFavCart",
          "data-attr": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productId"));
          }
        }, "\n                                    Add To Cart ", HTML.IMG({
          alt: "carts-icon",
          src: "images/cart-icons.png"
        }), " \n                                    ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                  "), "\n                                " ];
      }, function() {
        return [ "\n                                  ", HTML.BUTTON({
          class: "btn btn-block outOfStock"
        }, "\n                                    Out Of Stock ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/outofstock.png",
          class: "outOfStockIcon"
        }), "\n                                    ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                  "), "\n                                " ];
      }), "\n                              "), "\n                            "), "\n                          "), "\n                          " ];
    }), "\n                        " ];
  }, function() {
    return [ "\n                          ", HTML.DIV({
      class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, "\n                            ", HTML.DIV({
      class: "favorites-products"
    }, "\n                              No Favorite Products Available..!\n                            "), "\n                          "), "\n                        " ];
  }), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/favorites/script.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.favorites.onCreated(function () {
  Meteor.subscribe('getfavProducts');
  Meteor.subscribe("getUserFavorites", Meteor.userId());
});
Template.favorites.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.favorites.helpers({
  getfavProducts: function () {
    return favProducts.find({
      status: true,
      userId: Meteor.userId()
    }).fetch();
  },
  getproductName: function (favProd) {
    var prodId = favProd.productId;
    return products.findOne({
      _id: prodId
    }).productName;
  },
  getproductPrice: function (favProd) {
    var prodId = favProd.productId;
    return products.findOne({
      _id: prodId
    }).price;
  },
  getproductQuantity: function (favProd) {
    var prodId = favProd.productId;
    return products.findOne({
      _id: prodId
    }).quantity;
  },
  getProductImage: function (favProd) {
    var prodId = favProd.productId;
    var image = products.findOne({
      _id: prodId
    }).productImage;
    var imageUrl = image.split("upload");
    imageUrl = imageUrl[0] + "upload/w_200,h_500" + imageUrl[1];
    return imageUrl;
  },
  outOfStock: function (favproduct) {
    var productId = favproduct.productId;
    var productAvailable = validateProductAvailable(productId);

    if (productAvailable) {
      return true;
    }
  },
  storename: function (favProd) {
    var storeId = products.findOne({
      _id: favProd.productId
    }).storeName;
    return stores.findOne({
      _id: storeId
    }).storeName;
  }
});
Template.favorites.events({
  'click #favProducts': function (e) {
    e.preventDefault();
    var favproductId = $(e.target).data("id");
    favProducts.update({
      _id: favproductId
    }, {
      $set: {
        'status': false
      }
    });
    alert("Product Removed from favorites!");
  },
  'click #addFavCart': function (e) {
    e.preventDefault();

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: $(e.target).data("attr")
      }).storeName;
    } else {
      var storeId = Session.get("storeId");
    }

    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({
      productId: productId,
      userId: userId
    });

    if (presentProduct) {
      Meteor.call("updateCart", presentProduct, productId, userId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          alert("Product Updated Sucessfully!");
        }
      });
    } else {
      Meteor.call("createCart", productId, userId, storeId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          if (res == "false") {
            alert("You cannot select product from another store..!");
          } else {
            alert("Product Added to Cart Sucessfully!");
          }
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"forgot":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/forgot/template.template.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("forgot");
Template["forgot"] = new Template("Template.forgot", (function() {
  var view = this;
  return HTML.Raw('<div class="forgot_password">\n\t\t<div class="page-wrapper"> \n  \n  <!-- ====== HEADER BOC ====== -->\n  \n  <div class="banner">\n    <div class="header">\n      <div class="container">\n        <div class="row npm">\n          <div class="col-xs-3 npm icon-left"> <a href="/login" id="nav-icon2"><img src="images/back-icon.png" alt="back-icon"> </a> </div>\n          <div class="col-xs-6 npm">\n            <div class="header_title">\n              <h2>Forgot Password</h2>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="container">\n      <div class="row">\n        <div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n          <div class="logo"> <img src="images/logo.png" alt="logo" class="img-responsive"> </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- ====== /HEADER EOC ====== --> \n  \n  <!-- ====== /CONTENT BOC ====== -->\n  <div class="content common-form">\n    <div class="container">\n      <div class="row">\n        <div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n        \t<form>\n          <div class="form" id="forgotForm">\n            \n            \n            <div class="form-group label-floating is-empty forgotpassword">\n              <label class="control-label">Enter Email Address</label>\n              <input type="text" class="form-control isRequired validateEmail" name="forgotEmailAddress" id="forgotEmailAddress">\n              <span class="errorSpan" id="forgot-email"></span> </div>\n            \n            <div class="form-group">\n              <div class="pos-relative">\n                <button class="btn btn-block" id="forgotSubmit"> Submit                  \n                <div class="ripple-container"></div>\n                </button>\n              </div>\n            </div>\n          </div>\n     \t </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <!-- ====== /CONTENT EOC ====== --> \n  \n  <!-- ====== /FOOTER BOC ====== --> \n  \n  <!-- ====== /FOOTER EOC ====== --> \n  \n</div>\n\t</div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/forgot/script.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.forgot.onCreated(function () {});
Template.forgot.onRendered(function () {});
Template.forgot.helpers({});
Template.forgot.events({
  'click #forgotSubmit': function (e) {
    e.preventDefault();
    var me = $(e.target);
    me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
    me.attr("disabled", true);
    var requiredErrors = isRequired($("#forgotForm"), true);

    if (requiredErrors > 0) {
      me.html('Submit');
      me.attr("disabled", false);
      return;
    } else {
      var emailError = validateEmail($("#forgotForm"), true);

      if (emailError > 0) {
        me.html('Submit');
        me.attr("disabled", false);
        return;
      } else {
        var forgotEmail = $("#forgotEmailAddress").val();
        Meteor.call('checkUserEmail', forgotEmail, function (err, response) {
          if (err) {
            me.html('Submit');
            me.attr("disabled", false);
            console.log('err', err);
            sAlert.error("<b>" + err.reason + "</b>", {});
          } else {
            if (response) {
              me.html('Submit');
              me.attr("disabled", false);
              Accounts.forgotPassword({
                email: forgotEmail
              });
              Router.go("/login");
              setTimeout(function () {
                sAlert.success("<b>We have sent you a link to reset the password. Please check your email account.</b>", {});
              }, 500);
            } else {
              me.html('Submit');
              me.attr("disabled", false);
              $("#forgot-email").html('Email does not exist.');
            }
          }
        });
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"howAreWeDoing":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/howAreWeDoing/template.template.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("howAreWeDoing");
Template["howAreWeDoing"] = new Template("Template.howAreWeDoing", (function() {
  var view = this;
  return HTML.DIV({
    class: "howarewedoing"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), "\n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open"><a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a></button>\n                      </div>\n                    </div>\n                    <div class="col-xs-7 col-lg-6 col-md-6 col-sm-6 npm">\n                      <div class="header_title">\n                        <h2>How Are We Doing</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isDevice"));
  }, function() {
    return [ "\n                      ", HTML.DIV({
      class: "form-group links"
    }, "\n                        ", HTML.A({
      href: "#",
      id: "rateAppLink"
    }, "Enjoying Our App? Let Us Know! ", HTML.IMG({
      src: "images/right_icon_chevron.png",
      alt: "right_icon_chevron.png"
    })), "\n                      "), "\n                      " ];
  }), "\n                      ", HTML.DIV({
    class: "form-group links"
  }, "\n                        ", HTML.A({
    href: function() {
      return [ "mailto:", Spacebars.mustache(view.lookup("getEmail")), "?subject=Report an issue in Shop Skip App." ];
    }
  }, "Having An Issue With The App? ", HTML.Raw('<img src="images/right_icon_chevron.png" alt="right_icon_chevron.png">')), "\n                      "), "\n                      ", HTML.DIV({
    class: "form-group links"
  }, "\n                        ", HTML.A({
    href: function() {
      return [ "mailto:", Spacebars.mustache(view.lookup("getEmail")), "?subject=Feature Suggestion for Shop Skip App." ];
    }
  }, "Have A Feature Suggestion? ", HTML.Raw('<img src="images/right_icon_chevron.png" alt="right_icon_chevron.png">'), "\n                        "), "\n                      "), "\n                      ", HTML.DIV({
    class: "form-group links"
  }, "\n                        ", HTML.A({
    href: function() {
      return [ "mailto:", Spacebars.mustache(view.lookup("getEmail")), "?subject=Questions, Comments, Or Criticisms about Shop Skip App." ];
    }
  }, "Questions, Comments, Or Criticisms? ", HTML.Raw('<img src="images/right_icon_chevron.png" alt="right_icon_chevron.png">'), "\n                        "), "\n                      "), "\n                      ", HTML.DIV({
    class: "form-group links"
  }, "\n                        ", HTML.A({
    href: function() {
      return [ "mailto:", Spacebars.mustache(view.lookup("getEmail")), "?subject=Contact Us for any help or query in Shop Skip App." ];
    }
  }, "Contact Us ", HTML.Raw('<img src="images/right_icon_chevron.png" alt="right_icon_chevron.png">'), "\n                        "), "\n                      "), "\n                      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isDevice"));
  }, function() {
    return [ "\n                      ", HTML.DIV({
      class: "form-group links"
    }, "\n                        ", HTML.A({
      href: "#",
      id: "shareApp"
    }, "Share App ", HTML.IMG({
      src: "images/right_icon_chevron.png",
      alt: "right_icon_chevron.png"
    }), "\n                        "), "\n                      "), "\n                      " ];
  }), "\n                      ", HTML.Raw('<!--\n                        <div class="form-group links">\n                          <a href="login.html">Logout <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a>\n                        </div>\n                       -->'), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/howAreWeDoing/script.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.howAreWeDoing.onCreated(function () {
  Meteor.subscribe("getSettings");
});
Template.howAreWeDoing.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.howAreWeDoing.helpers({
  isDevice: function () {
    if (Meteor.isCordova) {
      return true;
    } else {
      return false;
    }
  },
  getEmail: function () {
    return settings.findOne({
      "settingName": "ADMINEMAIL"
    }).settingValue;
  }
});
Template.howAreWeDoing.events({
  'click #rateAppLink': function (e) {
    e.preventDefault();
    AppRate.preferences.storeAppURL = {
      ios: 'com.shopskip.app',
      android: 'market://details?id=com.shopskip.app'
    };
    AppRate.promptForRating();
  },
  'click #shareApp': function (e) {
    e.preventDefault();
    var options = {
      message: 'Shop Skip Liquor Store',
      // not supported on some apps (Facebook, Instagram)
      subject: '',
      // fi. for email
      url: 'https://shopskip.app.link/shareapp',
      chooserTitle: '' // Android only, you can override the default share sheet title

    };

    var onSuccess = function (result) {
      console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true

      console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    };

    var onError = function (msg) {
      console.log("Sharing failed with message: " + msg);
    };

    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"howappworks":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/howappworks/template.template.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("howappworks");
Template["howappworks"] = new Template("Template.howappworks", (function() {
  var view = this;
  return HTML.DIV({
    class: "howappworks"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.DIV({
    class: "main-header"
  }, "\n              ", HTML.DIV({
    class: "header"
  }, "\n                ", HTML.DIV({
    class: "container"
  }, "\n                  ", HTML.DIV({
    class: "row npm"
  }, "\n                    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isLoggedIn"));
  }, function() {
    return [ "\n                    ", HTML.DIV({
      class: "col-xs-3 npm icon-left"
    }, "\n                      ", HTML.DIV({
      id: "st-trigger-effects",
      class: "column"
    }, "\n                        ", HTML.BUTTON({
      "data-effect": "st-effect-8",
      class: "menu-open"
    }, "\n                        ", HTML.A({
      href: "#",
      id: "nav-icon3"
    }, HTML.IMG({
      src: "images/menu-icon.png",
      alt: "menu-icon"
    }), " "), "\n                        "), "\n                      "), "\n                    "), "\n                    ", HTML.DIV({
      class: "col-xs-6 col-lg-6 col-md-6 col-sm-6 npm"
    }, "\n                      ", HTML.DIV({
      class: "header_title"
    }, "\n                        ", HTML.H2("How App Works"), "\n                      "), "\n                    "), "\n                    ", HTML.DIV({
      class: "col-xs-3 npm text-right icon-right"
    }, "\n                      ", HTML.A({
      href: "/cart"
    }, HTML.IMG({
      src: "/images/cart-icons.png",
      alt: "cart-icons"
    }), " "), " \n                    "), "\n                    " ];
  }, function() {
    return [ "\n                      ", HTML.DIV({
      class: "col-xs-12 col-lg-12 col-md-12 col-sm-12 npm"
    }, "\n                        ", HTML.DIV({
      class: "header_title"
    }, "\n                          ", HTML.H2("How App Works"), "\n                        "), "\n                      "), "\n                    " ];
  }), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form howappworksslider"
  }, "\n                      ", HTML.DIV({
    id: "myCarousel",
    class: "carousel slide",
    "data-ride": "carousel"
  }, "\n                        ", HTML.Raw("<!-- Indicators -->"), "\n                        ", HTML.OL({
    class: "carousel-indicators"
  }, "\n                          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getAppContents"));
  }, function() {
    return [ "\n                            ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getAppContents"));
    }, function() {
      return [ "\n                              ", HTML.LI({
        "data-target": "#myCarousel",
        "data-slide-to": function() {
          return Spacebars.mustache(view.lookup("@index"));
        },
        class: function() {
          return Spacebars.mustache(view.lookup("isActive"), view.lookup("@index"));
        }
      }), "\n                            " ];
    }), "\n                          " ];
  }, function() {
    return "\n                          ";
  }), "\n                        "), "\n                        ", HTML.Raw("<!-- Wrapper for slides -->"), "\n                        ", HTML.DIV({
    class: "carousel-inner text-center appworkslider"
  }, "\n                          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getAppContents"));
  }, function() {
    return [ "\n                            ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getAppContents"));
    }, function() {
      return [ "\n                              ", HTML.DIV({
        class: function() {
          return [ "item ", Spacebars.mustache(view.lookup("isActive"), view.lookup("@index")) ];
        }
      }, "\n                                ", HTML.IMG({
        class: "img-responsive center-block",
        src: function() {
          return Spacebars.mustache(view.lookup("getImage"), Spacebars.dot(view.lookup("."), "appImage"));
        },
        alt: "wine-home-img"
      }), "\n                                ", HTML.DIV({
        class: "contants-slider"
      }, "\n                                  ", HTML.H2(Blaze.View("lookup:..title", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
      })), "\n                                  ", HTML.P(Blaze.View("lookup:..content", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "content"));
      })), "\n                                "), "\n                              "), "\n                            " ];
    }), "\n                          " ];
  }, function() {
    return "\n                          ";
  }), "\n                        "), "\n                      "), "\n                      ", HTML.Raw('<div class="form-group skipintro">\n                        <div class="pos-relative">\n                          <button class="btn btn-block" id="skipIntro">\n                            Skip Intro\n                            <div class="ripple-container"></div>\n                          </button>\n                        </div>\n                      </div>'), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/howappworks/script.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.howappworks.onCreated(function () {
  Meteor.subscribe('getAppContents');
});
Template.howappworks.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.howappworks.helpers({
  getAppContents: function () {
    return howappworks.find().fetch();
  },
  isActive: function (n) {
    if (n == 0) {
      return "active";
    }
  },
  isLoggedIn: function () {
    if (typeof Meteor.user() !== "undefined") {
      if (Meteor.user() != null) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  getImage: function (n) {
    var url = n;
    url = url.split("upload");
    url = url[0] + "upload/c_scale,h_513,w_513" + url[1];
    return url;
  }
});
Template.howappworks.events({
  'click #skipIntro': function (e) {
    localStorage.setItem("newlyInstalled", "No");
    Router.go("/dashboard");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"login":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/login/template.template.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<div class="login">\n\t<div class="page-wrapper"> \n  <!-- ====== /CONTENT BOC ====== -->\n\t<div class="content">\n\t\t<div class="container">\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n\t\t\t\t\t<div class="logo">\n\t\t\t\t\t\t<img src="/images/logo.png" alt="logo" class="img-responsive">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n\t\t\t\t\t<form>\n\t\t\t\t\t<div class="form" id="loginForm">\n\t\t\t\t\t\t<div class="input-group">   \n\t\t\t\t\t\t\t<span class="input-group-addon">\n\t\t\t\t\t\t\t\t<i class="fa fa-envelope-o"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<div class="form-group"><input type="text" class="form-control isRequired validateEmail" placeholder="Email" id="userName" name="userName" readonly="" onclick="$(\'#userName\').attr(\'readonly\',false)" onblur="$(\'#userName\').attr(\'readonly\',true)"><span class="errorSpan"></span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="input-group">\n\t\t\t\t\t\t\t<span class="input-group-addon">\n\t\t\t\t\t\t\t\t<i class="fa fa-lock"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<div class="form-group"><input type="Password" class="form-control isRequired" placeholder="Password" id="userPassword" name="userPassword" readonly="" onclick="$(\'#userPassword\').attr(\'readonly\',false)" onblur="$(\'#userPassword\').attr(\'readonly\',true)" onfocus="$(\'#userPassword\').attr(\'readonly\',false)"><span class="errorSpan"></span><span class="material-input"></span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="errorMsgSpanLogin"></div>\n\t\t\t\t\t\t<div class="pos-relative">\n\t\t\t\t\t\t\t<button class="btn btn-block" id="signInButton">Sign In</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<div class="or">\n\t\t\t\t\t\t<h3>or</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="social-icon">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href="" id="facebookLogin"><img src="/images/facebook-icon.png" alt="facebook"></a></li>\n\t\t\t\t\t\t\t<li><a href="" id="googleLogin"><img src="/images/google-icon.png" alt="images"></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="bottom-text">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><a href="/signup">Create Account</a></div>\n\t\t\t\t\t\t\t<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right"><a href="/forgotpassword">Forgot Password</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  \t\n  <!-- ====== /CONTENT EOC ====== --> \n  \n  <!-- ====== /FOOTER BOC ====== -->\n  \n  <!-- ====== /FOOTER EOC ====== -->\n  \n</div>\n<!-- ====== /WRAPPER EOC ====== --> \n</div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/login/script.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.login.onCreated(function () {});
Template.login.onRendered(function () {});
Template.login.helpers({});
Template.login.events({
  'click #signInButton': function (e) {
    e.preventDefault();
    var userName = $("#userName").val().trim();
    var userPassword = $("#userPassword").val();
    var requiredError = isRequired($("#loginForm"));
    var me = $(e.target);
    me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
    me.attr("disabled", true);

    if (requiredError) {
      me.html('Sign In');
      me.attr("disabled", false);
      return;
    } else {
      var emailError = validateEmail($("#loginForm"));

      if (emailError) {
        me.html('Sign In');
        me.attr("disabled", false);
        return;
      } else {
        Meteor.loginWithPassword({
          "username": userName
        }, userPassword, function (error) {
          if (Meteor.user()) {
            if (Meteor.user().profile.isActive) {
              me.html('Sign In');
              me.attr("disabled", false); // alert("You are successfully logged in.");

              Router.go("/dashboard");
            } else {
              me.html('Sign In');
              me.attr("disabled", false);
              Meteor.logout(function (error) {
                $(".errorMsgSpanLogin").html('Your account is not activated. Please wait for approval.');
              });
            }
          } else {
            me.html('Sign In');
            me.attr("disabled", false);
            $(".errorMsgSpanLogin").html(error.reason);
          }
        });
      }
    }
  },
  'click #facebookLogin': function (e) {
    e.preventDefault();
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email']
    }, function (err) {
      if (err) {
        console.log(err);
        sAlert.error("<b>" + err.reason + "</b>", {});
      }

      console.log(Meteor.user());
    });
  },
  'click #googleLogin': function (e) {
    e.preventDefault();
    Meteor.loginWithGoogle(function (err) {
      if (err) {
        console.log(err);
        sAlert.error("<b>" + error.reason + "</b>", {});
      } else {
        console.log('successfully google login');
        console.log(Meteor.user());
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"notifications":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/notifications/template.template.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("notification");
Template["notification"] = new Template("Template.notification", (function() {
  var view = this;
  return HTML.DIV({
    class: "notifications"
  }, "\n\t\t", HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), "\n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open"><a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a></button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 npm">\n                      <div class="header_title">\n                        <h2>Notifications</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "notificationpage"
  }, "\n                      ", HTML.DIV({
    class: "form"
  }, "\n                        ", HTML.Raw("<h2>Push Notifications</h2>"), "\n                        ", HTML.DIV({
    class: "form-group links"
  }, "\n                          ", HTML.Raw('<a href="#">\n                            Promotions \n                            \n                          </a>'), "\n                          ", HTML.LABEL({
    class: "switch-light switch-material",
    onclick: "",
    style: "float: right;"
  }, "\n                            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("promotionChecked"));
  }, function() {
    return [ "\n                              ", HTML.INPUT({
      type: "checkbox",
      id: "Promotion",
      checked: ""
    }), "\n                            " ];
  }, function() {
    return [ "\n                              ", HTML.INPUT({
      type: "checkbox",
      class: "",
      id: "Promotion"
    }), "\n                            " ];
  }), "\n\n                            ", HTML.Raw("<span>\n                            <span>Off</span>\n                            <span>On</span>\n                            <a></a>\n                            </span>"), "\n                          "), "\n                        "), "\n                        ", HTML.DIV({
    class: "form-group links border-none"
  }, "\n                          ", HTML.Raw('<a href="#">\n                            Push Order Updates\n                            \n                          </a>'), "\n                          ", HTML.LABEL({
    class: "switch-light switch-material",
    onclick: "",
    style: "float: right;"
  }, "\n                            ", HTML.INPUT(HTML.Attrs({
    type: "checkbox",
    id: "push_ord_update"
  }, function() {
    return Spacebars.attrMustache(view.lookup("pushOrderChecked"));
  })), "\n\n                            \n\n                            ", HTML.Raw("<span>\n                            <span>Off</span>\n                            <span>On</span>\n                            <a></a>\n                            </span>"), "\n                          "), "\n                        "), "\n                      "), "\n                    "), "\n                    ", HTML.DIV({
    class: "notificationpage"
  }, "\n                      ", HTML.DIV({
    class: "form"
  }, "\n                        ", HTML.Raw("<h2>Text Messages</h2>"), "\n                        ", HTML.DIV({
    class: "form-group links border-none"
  }, "\n                           ", HTML.Raw('<a href="#">\n\t\t                        SMS Order Updates \n\t\t                       \n\t\t                      </a>'), "\n                          ", HTML.LABEL({
    class: "switch-light switch-material",
    onclick: "",
    style: "float: right;"
  }, "\n                            ", HTML.INPUT(HTML.Attrs({
    type: "checkbox",
    id: "sms_ord_update"
  }, function() {
    return Spacebars.attrMustache(view.lookup("smsChecked"));
  })), "\n\n                            \n\n                            ", HTML.Raw("<span>\n                            <span>Off</span>\n                            <span>On</span>\n                            <a></a>\n                            </span>"), "\n                          "), "\n                        "), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.Raw("<!-- ====== /CONTENT EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /FOOTER BOC ====== -->"), "\n            ", HTML.Raw("<!-- ====== /FOOTER EOC ====== -->"), "\n          "), "\n        "), "\n      "), "\n    "), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/notifications/script.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.notification.onCreated(function () {});
Template.notification.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
  setTimeout(function () {
    $('.switch').show();
    $('.switch').bootstrapSwitch();
  }, 1000);
});
Template.notification.helpers({
  promotionChecked: function () {
    if (typeof Meteor.user() !== "undefined") {
      console.log("1");

      if (typeof Meteor.user().profile !== "undefined") {
        console.log("2");

        if (typeof Meteor.user().profile.promotions !== "undefined") {
          console.log("3");
          console.log(Meteor.user().profile.promotions);
          return Meteor.user().profile.promotions;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  pushOrderChecked: function () {
    if (typeof Meteor.user() !== "undefined") {
      if (typeof Meteor.user().profile !== "undefined") {
        if (typeof Meteor.user().profile.pushOrderUpdate !== "undefined") {
          if (Meteor.user().profile.pushOrderUpdate == true) {
            return "checked";
          } else {
            return "";
          }
        }
      }
    }
  },
  smsChecked: function () {
    if (typeof Meteor.user() !== "undefined") {
      if (typeof Meteor.user().profile !== "undefined") {
        if (typeof Meteor.user().profile.smsOrderUpdate !== "undefined") {
          if (Meteor.user().profile.smsOrderUpdate == true) {
            return "checked";
          } else {
            return "";
          }
        }
      }
    }
  }
});
Template.notification.events({
  'change #Promotion': function (e) {
    e.preventDefault();

    if ($("#Promotion").is(":checked")) {
      var a = Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.promotions': true
        }
      });
    } else {
      var a = Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.promotions': false
        }
      });
    }
  },
  'change #push_ord_update': function (e) {
    e.preventDefault();

    if ($("#push_ord_update").is(":checked")) {
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.pushOrderUpdate': true
        }
      });
    } else {
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.pushOrderUpdate': false
        }
      });
    }
  },
  'change #sms_ord_update': function (e) {
    e.preventDefault();

    if ($("#sms_ord_update").is(":checked")) {
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.smsOrderUpdate': true
        }
      });
    } else {
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.smsOrderUpdate': false
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"orderHistory":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/orderHistory/template.template.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("orderHistory");
Template["orderHistory"] = new Template("Template.orderHistory", (function() {
  var view = this;
  return HTML.DIV({
    class: "order_history"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner cartlisting"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Order History</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right"> <a href="/dashboard"><img src="/images/home-icons.png" alt="home-icons"> </a> </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form cartlist"
  }, "\n                      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getAllOrders"));
  }, function() {
    return [ "\n                        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getAllOrders"));
    }, function() {
      return [ "\n                          ", HTML.DIV({
        class: "form-group your-cart-list"
      }, "\n                            ", HTML.DIV({
        class: "cartproduct"
      }, "\n                              ", HTML.DIV({
        class: "cartproduct-image"
      }, "\n                                ", HTML.A({
        href: "#"
      }, "\n                                  ", HTML.IMG({
        src: function() {
          return Spacebars.mustache(view.lookup("productImage"), view.lookup("."));
        },
        alt: "bottle-product",
        id: "goToOrderDetails",
        "data-attr": function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        }
      }), "\n                                "), "\n                              "), "\n                            "), "\n                            ", HTML.DIV({
        class: "cartprodutitles"
      }, "\n                              ", HTML.DIV({
        class: "order-number"
      }, "Order #", Blaze.View("lookup:setOrderNumber", function() {
        return Spacebars.mustache(view.lookup("setOrderNumber"), view.lookup("."));
      })), "\n                              ", HTML.SPAN(Blaze.View("lookup:productName", function() {
        return Spacebars.mustache(view.lookup("productName"), view.lookup("."));
      })), "\n                              ", HTML.DIV({
        class: "rodutitles-price"
      }, " $ ", Blaze.View("lookup:productPrice", function() {
        return Spacebars.mustache(view.lookup("productPrice"), view.lookup("."));
      }), " ", HTML.SPAN(Blaze.View("lookup:productQuanty", function() {
        return Spacebars.mustache(view.lookup("productQuanty"), view.lookup("."));
      }), "ml Bottle"), " "), "\n                            "), "\n                            ", HTML.DIV({
        class: "order-history"
      }, "\n                              ", HTML.DIV({
        class: "orderdate"
      }, " ", Blaze.View("lookup:orderDate", function() {
        return Spacebars.mustache(view.lookup("orderDate"), Spacebars.dot(view.lookup("."), "createdAt"));
      }), " "), " \n                              ", HTML.Comment(" {{this.createdAt}} "), "\n                              ", HTML.DIV({
        class: "orderqunty"
      }, " ", Blaze.View("lookup:orderProductCount", function() {
        return Spacebars.mustache(view.lookup("orderProductCount"), Spacebars.dot(view.lookup("."), "_id"));
      }), " "), "\n                            "), "\n                          "), "\n                        " ];
    }), "\n                      " ];
  }), "\n                      ", HTML.Raw('<div class="form-group view-cart">\n                        <div class="pos-relative">\n                          <button class="btn btn-block" id="viewCart">\n                            View Cart\n                            <div class="ripple-container"></div>\n                          </button>\n                        </div>\n                      </div>'), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n      ", HTML.Raw('<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">\n        <div class="modal-dialog">\n          <div class="modal-content">\n            <div class="modal-header">\n              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n            </div>\n            <div class="modal-body pickingup"> Lorem ipsum dolor sit amet, consectetur\n              adipiscing elit. Curabitur a porttitor massa,\n              eu fringilla neque. \n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-default">Picking Up</button>\n              <button type="button" class="btn btn-primary">Shopping In Store</button>\n            </div>\n          </div>\n        </div>\n      </div>'), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/orderHistory/script.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.orderHistory.onCreated(function () {
  Meteor.subscribe('getOrders');
});
Template.orderHistory.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.orderHistory.helpers({
  getAllOrders: function () {
    return orders.find({
      emailAddress: Meteor.user().username
    }).fetch();
  },
  productImage: function (order) {
    var prodId = orders.findOne({
      _id: order._id
    }).productIds[0];
    console.log(orders.findOne({
      _id: order._id
    }).productIds);
    return products.findOne({
      _id: prodId.id
    }).productImage;
  },
  productName: function (order) {
    var prodId = orders.findOne({
      _id: order._id
    }).productIds[0];
    return products.findOne({
      _id: prodId.id
    }).productName;
  },
  productPrice: function (order) {
    var prodId = orders.findOne({
      _id: order._id
    }).productIds[0];
    return products.findOne({
      _id: prodId.id
    }).price;
  },
  productQuanty: function (order) {
    var prodId = orders.findOne({
      _id: order._id
    }).productIds[0];
    return products.findOne({
      _id: prodId.id
    }).quantity;
  },
  orderDate: function (orderdate) {
    if (orderdate) {
      var f = "MMMM DD, YYYY";
      return moment(orderdate).format(f);
    }
  },
  orderProductCount: function (orderId) {
    var orderProducts = orders.findOne({
      _id: orderId
    });

    if (orderProducts !== null) {
      var orderP = orderProducts.productIds;
      return orderP.length;
    } else {
      return 0;
    }
    /*console.log("orderProducts",orderProducts);
    var productCount = 0
    $.each(orderProducts, function(index, value) {
       	var prodQuan = carts.findOne({productId: value}).productQuantity
        prodQuan = parseFloat(prodQuan, 10);
        productCount = productCount + prodQuan; 
      });
      return productCount;*/

  },
  setOrderNumber: function (order) {
    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    var barcodeValue = orders.findOne({
      _id: order._id
    }).barcodeOrderValue;
    return pad(barcodeValue, 5);
  }
});
Template.orderHistory.events({
  'click #goToOrderDetails': function (e) {
    e.preventDefault();
    var orderId = $(e.target).data("attr");
    Router.go("/receiptPage/" + orderId);
  },
  'click #viewCart': function (e) {
    e.preventDefault();
    Router.go("/cart");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"pickingup":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/pickingup/template.template.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("pickingup");
Template["pickingup"] = new Template("Template.pickingup", (function() {
  var view = this;
  return HTML.DIV({
    class: "picking-up"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Picking Up</h2>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form"
  }, "\n              ", HTML.Raw('<div class="store-info-bg">\n                <div class="container">\n                  <div class="row">\n                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-7">\n                      <div class="bluehill">\n                        <span>Blue Hill</span>\n                        <ul>\n                          <li><img src="images/white-location.png" alt="white-location"> <span>75 Washington Pl</span></li>\n                        </ul>\n                      </div>\n                    </div>\n                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5">\n                      <div class="bluehill pickingupnumber text-center">\n                        <ul>\n                          <li><span>888 999 7777</span></li>\n                          <li><span>Change the store</span></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>'), "\n              ", HTML.DIV({
    class: "content common-form pickingup-form"
  }, "\n                ", HTML.DIV({
    class: "container"
  }, "\n                  ", HTML.DIV({
    class: "row"
  }, "\n                    ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                      ", HTML.DIV({
    class: "form"
  }, "\n                        ", HTML.Raw('<div class="form-group label-static selecdatetime">\n                          <input type="text" class="datepicker form-control" value="Select Date">\n                          <span class="material-input"></span> \n                          <span class="selectarrow"><img alt="right_icon_chevron" src="images/right_icon_chevron.png"></span>\n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group label-static selecdatetime">\n                          <input type="text" class="form-control" value="Select Time">\n                          <span class="material-input"></span> \n                          <span class="selectarrow"><img alt="right_icon_chevron" src="images/right_icon_chevron.png"></span>\n                        </div>'), "\n                        ", HTML.DIV({
    class: "form-group label-floating is-empty"
  }, "\n                          ", HTML.Raw('<label class="control-label">Special Instructions</label>'), "\n                          ", HTML.TEXTAREA({
    type: "text",
    class: "form-control"
  }), "\n                          ", HTML.Raw('<span class="material-input"></span>'), " \n                        "), "\n                        ", HTML.Raw('<div class="form-group label-floating is-empty">\n                          <label class="control-label">Enter Phone Number</label>\n                          <input type="text" class="form-control">\n                          <span class="material-input"></span> \n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group">\n                          <div class="pos-relative">\n                            <button class="btn btn-block text-uppercase">\n                              Continue to Payment\n                              <div class="ripple-container"></div>\n                            </button>\n                          </div>\n                        </div>'), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/pickingup/script.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.pickingup.onCreated(function () {});
Template.pickingup.onRendered(function () {});
Template.pickingup.helpers({});
Template.pickingup.events({});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"productDetails":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/productDetails/template.template.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("productDetails");
Template["productDetails"] = new Template("Template.productDetails", (function() {
  var view = this;
  return HTML.BODY({
    class: "product-detail"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner cartlisting productDetail"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <!--<div class="col-xs-1 npm icon-left"> <a href="#" id="nav-icon2"><img src="images/back-icon.png" alt="back-icon"> </a> </div>-->\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 npm">\n                      <div class="header_title">\n                        <h2>Product Detail</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "rating_wrapper details"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-xs-12 npbm"
  }, "\n                    ", HTML.DIV({
    class: "product-img text-center"
  }, " \n                      ", HTML.IMG({
    class: "img-responsive center-block",
    src: function() {
      return Spacebars.mustache(view.lookup("productImage"));
    },
    alt: "product-img"
  }), " \n                    "), "\n                  "), "\n                  ", HTML.DIV({
    class: "row rating_content details-sec"
  }, "\n                    ", HTML.DIV({
    class: "col-xs-12 npbm"
  }, "\n                      ", HTML.DIV({
    class: "title title-descrpt"
  }, "\n                        ", HTML.H3(Blaze.View("lookup:productName", function() {
    return Spacebars.mustache(view.lookup("productName"));
  })), "\n                        ", HTML.DIV({
    class: "sub-title prices"
  }, "\n                          ", HTML.H5(Blaze.View("lookup:productQuantity", function() {
    return Spacebars.mustache(view.lookup("productQuantity"));
  }), "ml Bottle"), "\n                        "), "\n                        ", HTML.DIV({
    class: "price-products"
  }, "$", Blaze.View("lookup:productPrice", function() {
    return Spacebars.mustache(view.lookup("productPrice"));
  })), "\n                        ", HTML.Raw("<br>"), "\n                        ", HTML.DIV("Bottle Type: ", HTML.B(Blaze.View("lookup:productBottleType", function() {
    return Spacebars.mustache(view.lookup("productBottleType"));
  }))), "\n                      "), "\n                      ", HTML.DIV({
    class: "star-ratings"
  }, "\n                        ", HTML.DIV({
    class: "rating-star"
  }, "\n                          ", Blaze._TemplateWith(function() {
    return {
      rating: Spacebars.call(view.lookup("avgRating")),
      size: Spacebars.call("lg")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("starsRating"));
  }), "\n                        "), "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getStatus"));
  }, function() {
    return [ "\n                          ", HTML.IMG({
      class: "img-responsive",
      src: "/images/favorite-fill.png",
      id: "favProduct1",
      "data-id": function() {
        return Spacebars.mustache(view.lookup("favProduct"));
      },
      "data-status": function() {
        return Spacebars.mustache(view.lookup("getStatusString"));
      },
      alt: "favorites-heart"
    }), "\n                        " ];
  }, function() {
    return [ "\n                          ", HTML.IMG({
      class: "img-responsive",
      src: "/images/favorites-heart.png",
      id: "favProduct1",
      "data-id": function() {
        return Spacebars.mustache(view.lookup("favProduct"));
      },
      "data-status": function() {
        return Spacebars.mustache(view.lookup("getStatusString"));
      },
      alt: "favorites-heart"
    }), "\n                        " ];
  }), "\n                      "), "\n                    "), "\n                  "), "\n                ", HTML.Raw('<!--   <div class="row bottle-type">\n                    <div class="common-form">\n                      <div class="select-box">\n                        <div class="form-group">\n                          \n                          <select name="category" id="category" class="form-control">\n                            <option selected="select">Bottle Type</option>\n                            <option>Bottle 1</option>\n                            <option>Bottle 2</option>\n                            <option>Bottle 3</option>\n                            <option>Bottle 4</option>\n                          </select>\n                        </div>\n                        <div class="selectarrow"><i class="fa fa-angle-down"></i></div>\n                      </div>\n                    </div>\n                  </div> -->'), "\n                  ", HTML.Raw("<!-- ====== /REVIEW  BOC ====== -->"), "\n                  ", HTML.DIV({
    class: "content common-form"
  }, "\n                    ", HTML.DIV({
    class: "container"
  }, "\n                      ", HTML.DIV({
    class: "row"
  }, "\n                        ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12 npbm"
  }, "\n                          ", HTML.DIV({
    class: "form maindetail"
  }, "\n                            ", HTML.DIV({
    class: "form-group"
  }, "\n                              ", HTML.DIV({
    class: "order-details product-detaisls"
  }, "\n                                ", HTML.Raw('<h3 class="font-we-lt">Details</h3>'), "\n                                  ", Blaze.View("lookup:productDetail", function() {
    return Spacebars.mustache(view.lookup("productDetail"));
  }), "\n                              "), "\n                            "), "\n                            ", HTML.DIV({
    class: "customer-reviewss"
  }, "\n                              ", HTML.Raw('<h3 class="font-we-lt">Customer Reviews</h3>'), "\n                              ", Blaze.If(function() {
    return Spacebars.call(view.lookup("reviews"));
  }, function() {
    return [ "\n                                ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("reviews"));
    }, function() {
      return [ "\n                                  ", HTML.DIV({
        class: "customer-comments"
      }, "\n                                    ", HTML.H4(Blaze.View("lookup:..reviewerName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "reviewerName"));
      })), "\n                                    ", HTML.DIV({
        class: "raiting-times"
      }, "\n                                      ", HTML.DIV({
        class: "rating-star"
      }, "\n                                        ", Blaze._TemplateWith(function() {
        return {
          rating: Spacebars.call(Spacebars.dot(view.lookup("."), "reviewRating")),
          size: Spacebars.call("lg")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("starsRating"));
      }), "\n                                      "), "\n                                      ", HTML.DIV({
        class: "timehours"
      }, Blaze.View("lookup:getDays", function() {
        return Spacebars.mustache(view.lookup("getDays"), Spacebars.dot(view.lookup("."), "createdAt"));
      }), " ago"), "\n                                    "), "\n                                    ", HTML.P(Blaze.View("lookup:..WriteReview", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "WriteReview"));
      })), "\n                                  "), "\n                                  " ];
    }), "\n                                " ];
  }, function() {
    return [ "\n                                  ", HTML.DIV({
      class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, "\n                                    ", HTML.DIV({
      class: "favorites-products"
    }, "\n                                      No Products Reviews Available..!\n                                      ", HTML.A({
      href: function() {
        return [ "/ratings/", Spacebars.mustache(view.lookup("productReviewId")) ];
      }
    }, "\n                                        ", HTML.BUTTON({
      class: "btn btn-block"
    }, "\n                                          Add Review\n                                          ", HTML.DIV({
      class: "ripple-container"
    }), "\n                                        "), "\n                                      "), "\n                                    "), "\n                                  "), "\n                                " ];
  }), "\n                            "), "\n                          "), "\n                        "), "\n                      "), "\n                    "), "\n                  "), "\n                  ", HTML.Raw("<!-- ====== /REVIEW  EOC ====== -->"), " \n                "), "\n              "), "\n            "), "\n            ", HTML.Raw("<!--***************** Top Picks section ***************************-->"), "\n            ", HTML.DIV({
    class: "toppicks-products"
  }, "\n              ", HTML.Raw('<!-- <div class="inprogress"><p>In Progress</p></div> -->'), "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", HTML.Raw('<div class="toppicks">\n                        <h2>Top Picks</h2>\n                        <div class="viewalls">\n                          <a href="/topPickProducts">View All</a>\n                        </div>\n                      </div>'), "\n                      ", HTML.DIV({
    class: "row"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("topprodDetailsPicks"));
  }, function() {
    return [ "\n                          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("topprodDetailsPicks"));
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
      }, "\n                              ", HTML.DIV({
        class: "favorites-products"
      }, "\n                                ", HTML.DIV({
        class: "favorites-proimg"
      }, "\n                                  ", HTML.A({
        href: function() {
          return [ "/productDetails/", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
        }
      }, HTML.IMG({
        class: "img-responsive center-block",
        src: function() {
          return Spacebars.mustache(view.lookup("prodImage"), Spacebars.dot(view.lookup("."), "_id"));
        },
        alt: "Favorites Product"
      })), "\t\n                                  ", HTML.DIV({
        class: "favorites-heart"
      }, "\n                                    ", HTML.A({
        href: "#"
      }, "\n                                      ", HTML.Comment(' <img class="img-responsive" src="/images/favorites-heart.png" alt="favorites-heart"/> '), "\n                                      ", Blaze.If(function() {
        return Spacebars.call(view.lookup("getStatus"));
      }, function() {
        return [ "\n                                        ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorite-fill.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                      " ];
      }, function() {
        return [ "\n                                        ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorites-heart.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                      " ];
      }), "\n                                    "), "\t\n                                  "), "\n                                "), "\n                                ", HTML.DIV({
        class: "pricetables"
      }, "\n                                  ", HTML.A({
        href: "#"
      }, Blaze.View("lookup:..productName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productName"));
      })), "\n                                  ", HTML.DIV({
        class: "pricefvrt"
      }, "\n                                    $ ", Blaze.View("lookup:..price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "price"));
      }), " ", HTML.SPAN(Blaze.View("lookup:..quantity", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "quantity"));
      }), "ml Bottle"), "\n                                  "), "\n                                "), "\n                                ", HTML.DIV({
        class: "fvrt-btnaddtocart"
      }, "\n                                  ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("outOfStock"), view.lookup("."));
      }, function() {
        return [ "\n                                    ", HTML.BUTTON({
          class: "btn btn-block",
          id: "addCart",
          "data-attr": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          }
        }, "\n                                      Add To Cart ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/cart-icons.png"
        }), "\n                                      ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                    "), "\n                                  " ];
      }, function() {
        return [ "\n                                    ", HTML.BUTTON({
          class: "btn btn-block outOfStock"
        }, "\n                                      Out Of Stock ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/outofstock.png",
          class: "outOfStockIcon"
        }), "\n                                      ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                    "), "\n                                  " ];
      }), "\n                                "), "\n                              "), "\n                            "), "\n                          " ];
    }), "\n                        " ];
  }, function() {
    return "\n                        ";
  }), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.Raw('<div class="addtocart-btn-bottom">\n              <div class="form-group">\n                <div class="pos-relative">\n                  <button class="btn btn-block" id="AddTocartFromDetails">\n                    Add To Cart <img alt="carts-icon" src="/images/cart-icons.png">\n                    <div class="ripple-container"></div>\n                  </button>\n                </div>\n              </div>\n            </div>'), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/productDetails/script.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.productDetails.onCreated(function () {
  Meteor.subscribe('getProducts');
  Meteor.subscribe('getReviews');
});
Template.productDetails.onRendered(function () {});
Template.productDetails.helpers({
  productDetail: function () {
    var product = products.findOne({
      _id: Router.current().params._id
    });
    return product.details;
  },
  productPrice: function () {
    var product = products.findOne({
      _id: Router.current().params._id
    });
    return product.price;
  },
  productName: function () {
    var product = products.findOne({
      _id: Router.current().params._id
    });
    return product.productName;
  },
  productImage: function () {
    var product = products.findOne({
      _id: Router.current().params._id
    });

    if (typeof product !== "undefined") {
      if (typeof product.productImage !== "undefined") {
        var image = product.productImage;
        var imageUrl = image.split("upload");
        imageUrl = imageUrl[0] + "upload/c_scale,w_527" + imageUrl[1];
        return imageUrl;
      } else {
        return "/images/noimage.png";
      }
    } else {
      return "/images/noimage.png";
    }
  },
  productQuantity: function () {
    var product = products.findOne({
      _id: Router.current().params._id
    });
    return product.quantity;
  },
  reviews: function () {
    return reviews.find({
      productId: Router.current().params._id
    }).fetch();
  },
  favProduct: function () {
    return Router.current().params._id;
  },
  avgRating: function () {
    totalRatings = 0;
    var ratings = reviews.find({
      productId: Router.current().params._id
    }).fetch();
    var count = ratings.length;
    $.each(ratings, function (index, value) {
      reviewRating = parseInt(value.reviewRating, 10);
      totalRatings = totalRatings + reviewRating;
    });
    return totalRatings / count;
  },
  getDays: function (date) {
    if (date) {
      return moment(date).fromNow(true);
    }
  },
  productReviewId: function () {
    return Router.current().params._id;
  },
  getStatusString: function () {
    var a = favProducts.find({
      userId: Meteor.userId(),
      productId: Router.current().params._id
    });

    if (a.count() > 0) {
      a = a.fetch()[0];

      if (typeof a.status !== "undefined") {
        return a.status;
      } else {
        return "false";
      }
    } else {
      return "false";
    }
  },
  getStatus: function () {
    console.log(this._id);
    var a = favProducts.find({
      userId: Meteor.userId(),
      productId: Router.current().params._id
    });
    console.log(a);

    if (a.count() > 0) {
      a = a.fetch()[0];

      if (typeof a.status !== "undefined") {
        console.log(a);

        if (a.status == true) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  outOfStock: function (product) {
    var productId = product._id;
    var productAvailable = validateProductAvailable(productId);

    if (productAvailable) {
      return true;
    }
  },
  productBottleType: function () {
    bottleTypeId = products.findOne({
      _id: Router.current().params._id
    }).bottleTypes;
    return bottleTypes.findOne({
      _id: bottleTypeId
    }).BottletypeName;
  },
  topprodDetailsPicks: function () {
    var orderList = orders.find({
      status: "Success"
    }).fetch();

    if (orderList.length > 0) {
      var productsQueue = [];
      var productsQuantityQueue = [];

      for (var i = 0; i < orderList.length; i++) {
        var singleOrder = orderList[i];
        var orderProducts = singleOrder.productIds;

        for (var j = 0; j < orderProducts.length; j++) {
          var singleProduct = orderProducts[j];

          if (productsQueue.indexOf(singleProduct.id) == -1) {
            productsQueue.push(singleProduct.id);
            productsQuantityQueue.push(singleProduct.quantity);
          } else {
            var currentIndex = productsQueue.indexOf(singleProduct.id);
            var currentQuantity = productsQuantityQueue[currentIndex];
            currentQuantity = parseInt(currentQuantity) + parseInt(singleProduct.quantity);
            productsQuantityQueue[currentIndex] = currentQuantity;
          }

          if (productsQueue.length >= 5) {
            break;
          }
        }
      } // console.log(productsQueue);
      // console.log(productsQuantityQueue);


      var productListing = [];
      $.each(productsQueue, function (index, value) {
        productListing.push(products.findOne({
          _id: value
        })); // console.log(productListing);
      });
      return productListing.slice(-2);
    } // else
    // {
    //   return products.find().fetch().slice(-2);
    // }

  },
  prodImage: function (prodId) {
    var product = products.findOne({
      _id: prodId
    });
    var image = product.productImage;
    var imageUrl = image.split("upload");
    imageUrl = imageUrl[0] + "upload/w_200,h_500" + imageUrl[1];
    return imageUrl;
  }
});
Template.productDetails.events({
  'click #favProduct1': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");
    console.log(productId);
    /*var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({productId: productId});
    if(presentRecord)
    {
      Meteor.call("updateFavProduct", presentRecord, $(e.target).data("id"), Meteor.userId(), function(err, res){
        if(err){
          alert(err.reason);
        }
        else{
          if(res){
            $('[data-id="'+productId+'"]').attr('src', '/images/favorites-heart.png');
            alert("Product removed from Favorite!");
          }
        }
      })
    }*/

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: productId
      }).storeName;
    } else {
      var storeId = Session.get("storeId");
    }

    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({
      productId: productId
    });
    console.log(presentRecord);
    var presentfalse = favProducts.findOne({
      status: false
    });

    if (event) {
      var action = false;
    } else {
      var action = true;
    }

    Meteor.call("updateFavProduct", storeId, Meteor.userId(), action, productId, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        if (res) {
          if (action) {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorite-fill.png');
          } else {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    });
  },
  'click #AddTocartFromDetails': function (e) {
    e.preventDefault();

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: Router.current().params._id
      }).storeName;
    } else {
      var storeId = Session.get("storeId");
    }

    var productId = Router.current().params._id;

    var userId = Meteor.userId();
    var presentProduct = carts.findOne({
      productId: productId,
      userId: userId
    });

    if (presentProduct) {
      Meteor.call("updateCart", presentProduct, productId, userId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          alert("Product Updated Sucessfully!");
        }
      });
    } else {
      // if()
      //   {
      //     Session.get("storeId")
      //   }
      Meteor.call("createCart", productId, userId, storeId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          console.log(res);

          if (res == "false") {
            alert("You cannot select product from another store..!");
          } else {
            alert("Product Added to Cart Sucessfully!");
          }
        }
      });
    }
  },
  'click #favProduct': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: productId
      }).storeName;
      Session.set("storeId", storeId);
    } else {
      var storeId = Session.get("storeId");
    }

    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({
      productId: productId
    });
    var presentfalse = favProducts.findOne({
      status: false
    });

    if (event) {
      var action = false;
    } else {
      var action = true;
    }

    Meteor.call("updateFavProduct", storeId, Meteor.userId(), action, productId, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        if (res) {
          if (action) {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorite-fill.png');
          } else {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    });
  },
  'click #addCart': function (e) {
    e.preventDefault();

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: $(e.target).data("attr")
      }).storeName;
      Session.set("storeId", storeId);
    } else {
      var storeId = Session.get("storeId");
    }

    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({
      productId: productId,
      userId: userId
    });

    if (presentProduct) {
      Meteor.call("updateCart", presentProduct, productId, userId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          alert("Product Updated Sucessfully!");
        }
      });
    } else {
      Meteor.call("createCart", productId, userId, storeId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          if (res == "false") {
            alert("You cannot select product from another store..!");
          } else {
            alert("Product Added to Cart Sucessfully!");
          }
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"products":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/products/template.template.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("products");
Template["products"] = new Template("Template.products", (function() {
  var view = this;
  return HTML.DIV({
    class: "product-list gray-color-bg"
  }, "\n    ", HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 npm">\n                      <div class="header_title">\n                        <h2>Product List</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "content common-form favorites-list"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", HTML.DIV({
    class: "row"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getProducts"));
  }, function() {
    return [ "\n                          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getProducts"));
    }, function() {
      return [ "\n                          ", HTML.DIV({
        class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
      }, "\n                            ", HTML.DIV({
        class: "favorites-products"
      }, "\n                              ", HTML.DIV({
        class: "favorites-proimg"
      }, "\n                                ", HTML.A({
        href: function() {
          return [ "/productDetails/", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
        }
      }, HTML.IMG({
        class: "img-responsive center-block",
        src: function() {
          return Spacebars.mustache(view.lookup("prodImage"), Spacebars.dot(view.lookup("."), "_id"));
        },
        alt: "Favorites Product"
      })), "\n                                ", HTML.DIV({
        class: "favorites-heart favheart"
      }, "\n                                  ", HTML.A({
        href: "#"
      }, "\n                                    ", Blaze.If(function() {
        return Spacebars.call(view.lookup("getStatus"));
      }, function() {
        return [ "\n                                      ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorite-fill.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                    " ];
      }, function() {
        return [ "\n                                      ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorites-heart.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                    " ];
      }), "\n                                  "), " \n                                "), "\n                              "), "\n                              ", HTML.INPUT({
        type: "hidden",
        name: "productId",
        value: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        }
      }), "\n                              ", HTML.DIV({
        class: "pricetables"
      }, "\n                                ", HTML.A({
        href: "#"
      }, " ", Blaze.View("lookup:..productName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productName"));
      }), " "), "\n                                ", HTML.DIV({
        class: "pricefvrt"
      }, " $ ", Blaze.View("lookup:..price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "price"));
      }), " ", HTML.SPAN(" ", Blaze.View("lookup:..quantity", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "quantity"));
      }), " "), " "), HTML.BR(), "\n                                ", HTML.DIV(HTML.B("Store:"), " ", Blaze.View("lookup:storename", function() {
        return Spacebars.mustache(view.lookup("storename"), Spacebars.dot(view.lookup("."), "storeName"));
      })), "\n                              "), "\n\n                              ", HTML.DIV({
        class: "fvrt-btnaddtocart"
      }, "\n                                ", HTML.A({
        href: function() {
          return [ "/ratings/", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
        }
      }, "\n                                  ", HTML.BUTTON({
        class: "btn btn-block"
      }, "\n                                    Add Review\n                                    ", HTML.DIV({
        class: "ripple-container"
      }), "\n                                  "), "\n                                "), "\n                                ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("outOfStock"), view.lookup("."));
      }, function() {
        return [ "\n                                  ", HTML.BUTTON({
          class: "btn btn-block",
          id: "addCart",
          "data-attr": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          }
        }, "\n                                    Add To Cart ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/cart-icons.png"
        }), "\n                                    ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                  "), "\n                                " ];
      }, function() {
        return [ "\n                                  ", HTML.BUTTON({
          class: "btn btn-block outOfStock"
        }, "\n                                    Out Of Stock ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/outofstock.png",
          class: "outOfStockIcon"
        }), "\n                                    ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                  "), "\n                                " ];
      }), "\n                              "), "\n                            "), "\n                          "), "\n                          " ];
    }), "\n                        " ];
  }, function() {
    return [ "\n                          ", HTML.DIV({
      class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, "\n                            ", HTML.DIV({
      class: "favorites-products"
    }, "\n                              No Products Available..!\n                            "), "\n                          "), "\n                        " ];
  }), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n                ", HTML.Raw('<!-- <div style="\n                    text-align: center;\n                    padding: 30px;\n                "><button class="btn" id="loadMoreButton">Load More</button></div> -->'), "\n              "), "\n            "), "\n            ", HTML.Raw("<!-- ====== /CONTENT EOC ====== -->"), "\n            ", HTML.Raw('<div class="filter-add-btn"> <a href="#" data-toggle="modal" data-target="#myfilter"><i class="fa fa-filter"></i></a></div>'), "\n            ", HTML.Raw("<!-- Modal -->"), "\n            ", HTML.DIV({
    class: "filter-modal"
  }, "\n              ", HTML.DIV({
    class: "modal",
    id: "myfilter",
    role: "dialog"
  }, "\n                ", HTML.DIV({
    class: "modal-dialog"
  }, "\n                  ", HTML.Raw("<!-- Modal content-->"), "\n                  ", HTML.DIV({
    class: "modal-content"
  }, "\n                    ", HTML.Raw('<div class="modal-header text-center">\n                      <button type="button" class="close" data-dismiss="modal">&times;</button>\n                      <h4 class="modal-title">Filter By</h4>\n                    </div>'), "\n                    ", HTML.DIV({
    class: "modal-body"
  }, "\n\n                      ", HTML.DIV({
    class: "content common-form"
  }, "\n                        ", HTML.DIV({
    class: "select-box"
  }, "\n                          ", HTML.DIV({
    class: "form-group"
  }, "\n                            ", HTML.SELECT({
    name: "category",
    id: "category",
    class: "form-control"
  }, "\n                              ", HTML.Raw('<option selected="selected" value="">Select category</option>'), " \n                              ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("categories")),
      _variable: "category"
    };
  }, function() {
    return [ "\n                                ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("category"), "_id"));
      }
    }, Blaze.View("lookup:category.categoryType", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("category"), "categoryType"));
    })), "\n                              " ];
  }), "\n                            "), "\n                          "), "\n                          ", HTML.Raw('<div class="selectarrow"><i class="fa fa-angle-down"></i></div>'), "\n                        "), "\n                        ", HTML.DIV({
    class: "select-box"
  }, "\n                          ", HTML.DIV({
    class: "form-group"
  }, "\n                            ", HTML.SELECT({
    name: "category",
    id: "type",
    class: "form-control"
  }, "\n                              ", HTML.Raw('<option selected="selected" value="">Select Type</option>'), " \n                              ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("productTypes")),
      _variable: "productType"
    };
  }, function() {
    return [ "\n                                ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("productType"), "_id"));
      }
    }, Blaze.View("lookup:productType.typeName", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("productType"), "typeName"));
    })), "\n                              " ];
  }), "\n                            "), "\n                          "), "\n                          ", HTML.Raw('<div class="selectarrow"><i class="fa fa-angle-down"></i></div>'), "\n                        "), "\n                        ", HTML.Raw('<!-- <div class="form-group">\n                          <input type="text" class="ex1" value="" data-slider-min="-20" data-slider-max="20" data-slider-step="1" data-slider-value="-14" data-slider-orientation="vertical" data-slider-selection="after" data-slider-tooltip="hide">\n\n                          <input id="ex1" data-slider-id=\'ex1Slider\' type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="14"/>\n\n                          <input type="rangeslide"/>\n\n                        </div> -->'), "\n                        ", HTML.DIV({
    class: "select-box"
  }, "\n                          ", HTML.DIV({
    class: "form-group"
  }, "\n                            ", HTML.SELECT({
    name: "category",
    id: "storename",
    class: "form-control"
  }, "\n                              ", HTML.Raw('<option selected="select" value="">Store Name</option>'), "\n                              ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("stores")),
      _variable: "store"
    };
  }, function() {
    return [ "\n                                ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("store"), "_id"));
      }
    }, Blaze.View("lookup:store.storeName", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("store"), "storeName"));
    })), "\n                              " ];
  }), "\n                            "), "\n                          "), "\n                          ", HTML.Raw('<div class="selectarrow"><i class="fa fa-angle-down"></i></div>'), "\n                        "), "\n                        ", HTML.DIV({
    class: "select-box"
  }, "\n                          ", HTML.DIV({
    class: "form-group"
  }, "\n                            ", HTML.SELECT({
    name: "category",
    id: "brandname",
    class: "form-control"
  }, "\n                              ", HTML.Raw('<option selected="select" value="">Brand Name</option>'), "\n                              ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("brands")),
      _variable: "brand"
    };
  }, function() {
    return [ "\n                                ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("brand"), "_id"));
      }
    }, Blaze.View("lookup:brand.brandName", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("brand"), "brandName"));
    })), "\n                              " ];
  }), "\n                            "), "\n                          "), "\n                          ", HTML.Raw('<div class="selectarrow"><i class="fa fa-angle-down"></i></div>'), "\n                        "), "\n                      "), "\n                      ", HTML.Raw('<button id="filter_product" class="btn btn-block">\n                        submit\n                        <div class="ripple-container"></div>\n                      </button>'), "\n                      ", HTML.Raw("<br>"), "\n                      ", HTML.Raw('<button id="reset_product" class="btn btn-block">\n                        Reset\n                      <div class="ripple-container"></div>\n                      </button>'), "\n                      ", HTML.Raw('<!-- <button id="filter_product">submit</button> -->'), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/products/script.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.products.onCreated(function () {
  Meteor.subscribe('getProducts', Session.get("storeId"));
  Meteor.subscribe("getUserFavorites", Meteor.userId());
  Meteor.subscribe('getReviews');
  Meteor.subscribe('getCarts');
  Meteor.subscribe('getStores');
});
Template.products.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.content.common-form.favorites-list').css('height', c);
  Session.set("listingPage", 10); // $(window).scroll(function() {
  //   if($(window).scrollTop() + $(window).height() == $(document).height()) 
  //   {
  //     var currentVal  = parseInt(Session.get("listingPage"));
  //   currentVal  = currentVal + 10;
  //   Session.set("listingPage",currentVal);
  //   }
  // });

  /*$('input[type="rangeslide"]').ionRangeSlider({
     min: 0,
     max: 1000,
     step: 0.1
   });*/
});
Template.products.helpers({
  categories: function () {
    return categories.find().fetch();
  },
  productTypes: function () {
    return productTypes.find().fetch();
  },
  stores: function () {
    return stores.find().fetch();
  },
  brands: function () {
    return brands.find().fetch();
  },
  getProducts: function () {
    if (Session.get('category') == undefined) {
      if (Session.get("storeId") == undefined) {
        if (Session.get("listingPage") == undefined) {
          Session.set("listingPage", 10);
          return products.find({}, {
            limit: Session.get("listingPage")
          }).fetch();
        } else {
          return products.find({}, {
            limit: Session.get("listingPage")
          }).fetch();
        }
      } else {
        if (Session.get("listingPage") == undefined) {
          Session.set("listingPage", 10);
          return products.find({
            storeName: Session.get("storeId")
          }, {
            limit: Session.get("listingPage")
          }).fetch();
        } else {
          return products.find({
            storeName: Session.get("storeId")
          }, {
            limit: Session.get("listingPage")
          }).fetch();
        }
      }
    } else {
      var cat = {}; // categoryType: Session.get('category'), 
      // storeName: Session.get('storename'), 
      // brandName: Session.get('brandName'), 
      // productType: Session.get('type'),
      // price: Session.get('price')

      if (Session.get('category') != undefined && Session.get('category') != "") {
        cat["categoryType"] = Session.get('category');
      }

      if (Session.get('storename') != undefined && Session.get('storename') != "") {
        cat["storeName"] = Session.get('storename');
      }

      if (Session.get('brandName') != undefined && Session.get('brandName') != "") {
        cat["brandName"] = Session.get('brandName');
      }

      if (Session.get('type') != undefined && Session.get('type') != "") {
        cat["productType"] = Session.get('type');
      } // if((Session.get('price') != undefined) || Session.get('price') != "")
      // {
      //   cat["price"] = Session.get('price')
      // }


      console.log(cat);
      return products.find(cat).fetch();
    }
  },
  getStatusString: function () {
    var a = favProducts.find({
      userId: Meteor.userId(),
      productId: this._id
    });

    if (a.count() > 0) {
      a = a.fetch()[0];

      if (typeof a.status !== "undefined") {
        return a.status;
      } else {
        return "false";
      }
    } else {
      return "false";
    }
  },
  getStatus: function () {
    console.log(this._id);
    var a = favProducts.find({
      userId: Meteor.userId(),
      productId: this._id
    });
    console.log(a);

    if (a.count() > 0) {
      a = a.fetch()[0];

      if (typeof a.status !== "undefined") {
        console.log(a);

        if (a.status == true) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  outOfStock: function (product) {
    var productId = product._id;
    var productAvailable = validateProductAvailable(productId);

    if (productAvailable) {
      return true;
    }
  },
  storename: function (storeId) {
    return stores.findOne({
      _id: storeId
    }).storeName;
  },
  prodImage: function (prodId) {
    var product = products.findOne({
      _id: prodId
    });

    if (typeof product !== "undefined") {
      if (typeof product.productImage !== "undefined") {
        var image = product.productImage;
        var imageUrl = image.split("upload");
        imageUrl = imageUrl[0] + "upload/w_200,h_500" + imageUrl[1];
        return imageUrl;
      } else {
        return "/images/noimage.png";
      }
    } else {
      return "/images/noimage.png";
    }
  }
});
Template.products.events({
  'click #loadMoreButton': function (e) {
    e.preventDefault();
    var currentVal = parseInt(Session.get("listingPage"));
    currentVal = currentVal + 10;
    Session.set("listingPage", currentVal);
  },
  'click #filter_product': function (e) {
    e.preventDefault();
    $("#myfilter").modal("hide");
    Session.set('category', $("#category").val());
    Session.set('type', $("#type").val());
    Session.set('storename', $("#storename").val());
    Session.set('brandName', $("#brandname").val());
    Session.set('price', $(".irs-hidden-input").val());
  },
  'click #reset_product': function (e) {
    e.preventDefault();
    $("#myfilter").modal("hide");
    Session.set('category', undefined);
  },
  'click #favProduct': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: productId
      }).storeName;
      Session.set("storeId", storeId);
    } else {
      var storeId = Session.get("storeId");
    }

    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({
      productId: productId
    });
    var presentfalse = favProducts.findOne({
      status: false
    });

    if (event) {
      var action = false;
    } else {
      var action = true;
    }

    Meteor.call("updateFavProduct", storeId, Meteor.userId(), action, productId, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        if (res) {
          if (action) {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorite-fill.png');
          } else {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    }); // if(presentRecord)
    //   {
    //     if(presentfalse)
    //     {
    //       Meteor.call("updateSameFavProduct", presentfalse, $(e.target).data("id"), Meteor.userId(), function(err, res){
    //         if(err){
    //           alert(err.reason);
    //         }
    //         else{
    //           if(res){
    //             $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
    //             // $('#favProduct [data-id="'+productId+'"]').attr('src', "/images/redHeart.png");
    //             alert("Product added to Favorite!");
    //           }
    //         }
    //       })
    //     }
    //     else
    //     {
    //       Meteor.call("updateFavProduct", presentRecord, $(e.target).data("id"), Meteor.userId(), function(err, res){
    //         if(err){
    //           alert(err.reason);
    //         }
    //         else{
    //           if(res){
    //             $('[data-id="'+productId+'"]').attr('src', '/images/favorites-heart.png');
    //             alert("Product removed from Favorite!");
    //           }
    //         }
    //       })
    //     }
    //   }
    // else
    //   {
    //     Meteor.call("insertFavProduct", $(e.target).data("id"), Meteor.userId(), function(err, res){
    //       if(err){
    //         alert(err.reason);
    //       }
    //       else{
    //         if(res){
    //           $('[data-id="'+productId+'"]').attr('src', '/images/favorite-fill.png');
    //           alert("Product added as Favorite sucessfully!");
    //         }
    //       }
    //     })
    //   }
  },
  'click #addCart': function (e) {
    e.preventDefault();

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: $(e.target).data("attr")
      }).storeName;
      Session.set("storeId", storeId);
    } else {
      var storeId = Session.get("storeId");
    }

    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({
      productId: productId,
      userId: userId
    });

    if (presentProduct) {
      Meteor.call("updateCart", presentProduct, productId, userId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          alert("Product Updated Sucessfully!");
        }
      });
    } else {
      // if()
      //   {
      //     Session.get("storeId")
      //   }
      Meteor.call("createCart", productId, userId, storeId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          if (res == "false") {
            alert("You cannot select product from another store..!");
          } else {
            alert("Product Added to Cart Sucessfully!");
          }
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"profiles":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/profiles/template.template.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("profiles");
Template["profiles"] = new Template("Template.profiles", (function() {
  var view = this;
  return HTML.DIV({
    class: "thanks-for-shopping"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner cartlisting"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <!--<div class="col-xs-1 npm icon-left"> <a href="#" id="nav-icon2"><img src="images/back-icon.png" alt="back-icon"> </a> </div>-->\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 npm">\n                      <div class="header_title">\n                        <h2>User Profile</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "profile_wrapper"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "account_setting"
  }, "\n                    ", HTML.DIV({
    class: "account_Profile_img"
  }, "\n                      ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("getProfileImage"));
    },
    alt: "profile-img",
    id: "profileImage",
    name: "profileImage",
    width: "180px",
    height: "180px"
  }), "\n                      ", HTML.Raw('<div class="Profile_camera"><img src="/images/photo-camera.png" alt="camera" onclick="$(\'#ProfilePic\').click();">\n                        <input type="file" name="ProfilePic" id="ProfilePic" accept="image/*">\n                      </div>'), "\n                    "), "\n                  "), "\n                "), "\n                ", HTML.Raw('<div class="container">\n                  <div class="box_bg content common-form">\n                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      <div class="form">\n                        <h3>Account</h3>\n                        <div class="form-group links"> <a href="/accountdetails">Account Details <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a> </div>\n                        <!-- <div class="form-group links"> <a href="#" id="address_billing">Address & Billing <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a> </div> -->\n                        <div class="form-group links"> <a href="/notification">Notifications <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a> </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>'), "\n                ", HTML.Raw('<div class="container">\n                  <div class="box_bg content common-form">\n                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      <div class="form">\n                        <h3>Help &amp; More</h3>\n                        <div class="form-group links"> <a href="/orderHistory">Order History <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a> </div>\n                        <div class="form-group links"> <a href="/howappworks">How App Works <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a> </div>\n                        <div class="form-group links"> <a href="/howAreWeDoing">How Are We Doing <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a> </div>\n                        <div class="form-group links"> <a href="/termsofservice">Terms of Services &amp; Legal <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a> </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>'), "\n                ", HTML.Raw("<!-- ====== /REVIEW  BOC ====== -->"), "\n                ", HTML.Raw('<div class="content common-form">\n                  <div class="container">\n                    <div class="row">\n                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 npbm">\n                        <div class="form">\n                          <div class="form-group">\n                            <div class="pos-relative" id="user_log_out">\n                              <button class="btn btn-block">\n                                LOG OUT\n                                <div class="ripple-container"></div>\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>'), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/profiles/script.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var selectedProfilePic = [];
Template.profiles.onCreated(function () {});
Template.profiles.onRendered(function () {});
Template.profiles.helpers({
  getProfileImage: function () {
    if (typeof Meteor.user() !== "undefined") {
      if (typeof Meteor.user().profile !== "undefined") {
        if (typeof Meteor.user().profile.profileImage !== "undefined") {
          if (Meteor.user().profile.profileImage == "") {
            return "/images/user-thumbnail.jpg";
          } else {
            return Meteor.user().profile.profileImage;
          }
        } else {
          return "/images/user-thumbnail.jpg";
        }
      } else {
        return "/images/user-thumbnail.jpg";
      }
    } else {
      return "/images/user-thumbnail.jpg";
    }
  }
});
Template.profiles.events({
  'change #ProfilePic': function (evt) {
    if (evt.target.files.length > 0) {
      var f = evt.target.files[0];
      selectedProfilePic = [];
      selectedProfilePic.push(f);

      if (f) {
        var r = new FileReader();

        r.onload = function (e) {
          var contents = e.target.result;
          $("#profileImage").attr("src", contents);

          if (selectedProfilePic.length > 0) {
            Cloudinary.upload(selectedProfilePic[0], {}, function (err, img) {
              if (err) {
                alert(err.reason);
              } else {
                Meteor.call("updateProfilePic", Meteor.userId(), img.url, function (err, res) {
                  if (res) {
                    alert("Profile Image updated successfully.");
                  }
                });
              }
            });
          }
        };

        r.readAsDataURL(f);
      } else {
        alert("Failed to load file");
      }
    }
  },
  'click #user_log_out': function (e) {
    e.preventDefault();
    Meteor.logout();
    Router.go("/login");
  },
  'click #address_billing': function (e) {
    e.preventDefault();
    alert("functionality under process");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ratings":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/ratings/template.template.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("ratings");
Template["ratings"] = new Template("Template.ratings", (function() {
  var view = this;
  return HTML.DIV({
    class: "thanks-for-shopping"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n       ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner cartlisting"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Reviews</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "rating_wrapper"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-xs-12 npbm"
  }, "\n                    ", HTML.DIV({
    class: "product-img text-center"
  }, " ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("getproduct"), "productImage"));
    },
    alt: "product-img"
  }), " "), "\n                  "), "\n                  ", HTML.DIV({
    class: "row rating_content"
  }, "\n                    ", HTML.DIV({
    class: "col-xs-12 npbm"
  }, "\n                      ", HTML.DIV({
    class: "title"
  }, "\n                        ", HTML.H3(Blaze.View("lookup:getproduct.productName", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("getproduct"), "productName"));
  })), "\n                        ", HTML.DIV({
    class: "sub-title"
  }, "\n                          ", HTML.H5(Blaze.View("lookup:getproduct.quantity", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("getproduct"), "quantity"));
  }), "ml Bottle"), "\n                        "), "\n                      "), "\n                    "), "\n                  "), "\n                  ", HTML.DIV({
    class: "row rating_icon"
  }, "\n                    ", HTML.DIV({
    class: "col-xs-12 npbm"
  }, "\n                      ", HTML.DIV({
    class: "title"
  }, "\n                        ", HTML.Raw("<h4>Rate Your Review</h4>"), "\n                        ", HTML.DIV("\n                          ", HTML.FIELDSET({
    class: "rating"
  }, "\n                            ", Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("review_rating"),
      size: Spacebars.call("lg"),
      mutable: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("starsRating"));
  }), "\n                          "), "\n                        "), "\n                      "), "\n                    "), "\n                  "), "\n                  ", HTML.Raw("<!-- ====== /REVIEW  BOC ====== -->"), "\n                  ", HTML.DIV({
    class: "content common-form"
  }, "\n                    ", HTML.DIV({
    class: "container"
  }, "\n                      ", HTML.DIV({
    class: "row"
  }, "\n                        ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12 npbm"
  }, "\n                          ", HTML.DIV({
    class: "form",
    id: "reviewForm"
  }, "\n                            ", HTML.Raw('<div class="form-group label-floating is-empty">\n                              <label class="control-label">Name</label>\n                              <input type="text" class="form-control isRequired" id="reviewerName">\n                              <span class="material-input errorSpan"></span> \n                            </div>'), "\n                            ", HTML.Raw('<div class="form-group label-floating is-empty">\n                              <label class="control-label">Summary</label>\n                              <input type="text" class="form-control isRequired" id="summary">\n                              <span class="material-input errorSpan"></span> \n                            </div>'), "\n                            ", HTML.DIV({
    class: "form-group label-floating is-empty"
  }, "\n                              ", HTML.Raw('<label class="control-label">Write Your Review</label>'), "\n                              ", HTML.TEXTAREA({
    class: "form-control form-area isRequired",
    rows: "4",
    id: "writeReview"
  }), "\n                              ", HTML.Raw('<span class="material-input errorSpan"></span>'), " \n                            "), "\n                            ", HTML.Raw('<div class="form-group">\n                              <div class="pos-relative">\n                                <button class="btn btn-block" id="submitReview">\n                                  Submit Review\n                                  <div class="ripple-container errorSpan"></div>\n                                </button>\n                              </div>\n                            </div>'), "\n                          "), "\n                        "), "\n                      "), "\n                    "), "\n                  "), " \n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/ratings/script.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.ratings.onCreated(function () {});
Template.ratings.onRendered(function () {});
Template.ratings.helpers({
  getproduct: function () {
    var product = products.findOne({
      _id: Router.current().params._id
    });
    return product;
  }
});
Template.ratings.events({
  'click #submitReview': function (e) {
    e.preventDefault();
    var reviewerName = $("#reviewerName").val();
    var summary = $("#summary").val();
    var writeYourReview = $("#writeReview").val();
    var reviewRating = $("#review_rating").data('userrating');
    var requiredError = isRequired($("#reviewForm"), true);

    if (requiredError) {
      return;
      alert("Please Fill Up All Details");
    } else {
      reviews.insert({
        reviewerName: reviewerName,
        summary: summary,
        WriteReview: writeYourReview,
        reviewRating: reviewRating,
        productId: Router.current().params._id,
        createdAt: new Date()
      });
      alert("Review added sucessfully.");
      Router.go("/products");
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"receipt":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/receipt/template.template.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("receiptPage");
Template["receiptPage"] = new Template("Template.receiptPage", (function() {
  var view = this;
  return HTML.DIV({
    class: "receipt-screen"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n       ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner cartlisting"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Receipt</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right"> <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form receipt-btni"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form cartlist receipt-page"
  }, "\n                      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("productDetails"));
  }, function() {
    return [ "\n                        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("productDetails"));
    }, function() {
      return [ "\n\t\t                      ", HTML.DIV({
        class: "form-group your-cart-list"
      }, "\n\t\t                        ", HTML.DIV({
        class: "cartproduct border-none"
      }, "\n\t\t                          ", HTML.DIV({
        class: "cartproduct-image"
      }, HTML.A({
        href: "#"
      }, HTML.IMG({
        src: function() {
          return Spacebars.mustache(view.lookup("productImage"), view.lookup("."));
        },
        alt: "bottle-product"
      }))), "\n\t\t                        "), "\n\t\t                        ", HTML.DIV({
        class: "cartprodutitles"
      }, "\n\t\t                          ", HTML.DIV({
        class: "order-number"
      }, "Order #", Blaze.View("lookup:getOrderNumber", function() {
        return Spacebars.mustache(view.lookup("getOrderNumber"), Spacebars.dot(view.lookup("orderDetail"), "barcodeOrderValue"));
      })), "\n\t\t                          ", HTML.SPAN(Blaze.View("lookup:productName", function() {
        return Spacebars.mustache(view.lookup("productName"), view.lookup("."));
      })), "\n\t\t                          ", HTML.DIV({
        class: "rodutitles-price"
      }, " $ ", Blaze.View("lookup:productPrice", function() {
        return Spacebars.mustache(view.lookup("productPrice"), view.lookup("."));
      }), " ", HTML.SPAN(Blaze.View("lookup:productQuanty", function() {
        return Spacebars.mustache(view.lookup("productQuanty"), view.lookup("."));
      }), "ml Bottle"), " "), "\n\t\t                        "), "\n\t\t                        ", HTML.DIV({
        class: "order-history"
      }, "\n\t\t                          ", HTML.DIV({
        class: "orderdate"
      }, " ", Blaze.View("lookup:orderDate", function() {
        return Spacebars.mustache(view.lookup("orderDate"));
      }), " "), "\n\t\t                          ", HTML.DIV({
        class: "orderqunty"
      }, " ", Blaze.View("lookup:orderProductCount", function() {
        return Spacebars.mustache(view.lookup("orderProductCount"), view.lookup("."));
      }), " "), "\n\t\t                        "), "\n\t\t                        ", HTML.DIV({
        class: "order-details"
      }, "\n\t\t                          ", HTML.H3({
        class: "font-we-lt"
      }, "Details"), "\n\t\t                          ", Blaze.View("lookup:prodDetail", function() {
        return Spacebars.mustache(view.lookup("prodDetail"), view.lookup("."));
      }), "\n\t\t                        "), "\n\t\t                      "), "\n\t                      " ];
    }), "\n                      " ];
  }), "\n                      ", HTML.Raw('<div class="form-group payment-summary">\n                        <div class="payment-summary-code">\n                          <img class="center-block" src="" alt="" id="orderBarcodeImage">\n                          <h4>Payment summary</h4>\n                        </div>\n                      </div>'), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n              ", HTML.DIV({
    class: "ordertotal-summary"
  }, "\n                ", HTML.UL("\n                  ", HTML.LI("Order Total ", HTML.SPAN("$ ", Blaze.View("lookup:totalOrderAmount", function() {
    return Spacebars.mustache(view.lookup("totalOrderAmount"));
  }))), "\n                  ", HTML.LI("Discount ", HTML.SPAN("$ ", Blaze.View("lookup:orderDiscount", function() {
    return Spacebars.mustache(view.lookup("orderDiscount"));
  }))), "\n                  ", HTML.LI("Order Gross Total ", HTML.SPAN("$ ", Blaze.View("lookup:totalGrossAmount", function() {
    return Spacebars.mustache(view.lookup("totalGrossAmount"));
  }))), "\n                  ", HTML.Raw('<li>Charges  <span class="greencolor">Free</span></li>'), "\n                  ", HTML.LI({
    class: "font-we-rg"
  }, "Total Amount", HTML.SPAN({
    class: "greencolor"
  }, "$ ", Blaze.View("lookup:totalOrderAmount", function() {
    return Spacebars.mustache(view.lookup("totalOrderAmount"));
  }))), "\n                  ", HTML.LI("Payment Status ", HTML.SPAN(Blaze.View("lookup:paymentStatus", function() {
    return Spacebars.mustache(view.lookup("paymentStatus"));
  }))), "\n                "), "\n              "), "\n              ", HTML.Raw('<div class="container">\n                <div class="row">\n                  <div class="col-lg-12">\n                    <div class="form-group view-cart">\n                      <div class="pos-relative">\n                        <!-- <button class="btn btn-block text-uppercase">\n                          view Product\n                          <div class="ripple-container"></div>\n                        </button> -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>'), "\n            "), "\n          "), "\n        "), "\n      "), "\n      ", HTML.Raw('<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">\n        <div class="modal-dialog">\n          <div class="modal-content">\n            <div class="modal-header">\n              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n            </div>\n            <div class="modal-body pickingup"> Lorem ipsum dolor sit amet, consectetur\n              adipiscing elit. Curabitur a porttitor massa,\n              eu fringilla neque. \n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-default">Picking Up</button>\n              <button type="button" class="btn btn-primary">Shopping In Store</button>\n            </div>\n          </div>\n        </div>\n      </div>'), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/receipt/script.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.receiptPage.onCreated(function () {
  Meteor.subscribe('getProducts');
  Meteor.subscribe('getCarts');
  Meteor.subscribe('getOrders');
});
Template.receiptPage.onRendered(function () {
  setTimeout(function () {
    // JsBarcode("#barcode", "Hi!");
    var barcodeValue = orders.findOne({
      _id: Router.current().params._id
    }).barcodeOrderValue;
    var barcodeValue = pad(barcodeValue, 8);
    JsBarcode("#orderBarcodeImage", barcodeValue);
  }, 2000);
});
Template.receiptPage.helpers({
  getOrderNumber: function (n) {
    var barcodeValue = n;
    var barcodeValue = pad(barcodeValue, 8);
    return barcodeValue;
  },
  productDetails: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).productIds;
  },
  orderDetail: function () {
    var order = orders.findOne({
      _id: Router.current().params._id
    });
    return order;
  },
  productName: function (productId) {
    console.log(productId);
    return products.findOne({
      _id: productId.id
    }).productName;
  },
  productPrice: function (productId) {
    return products.findOne({
      _id: productId.id
    }).price;
  },
  productQuanty: function (productId) {
    return products.findOne({
      _id: productId.id
    }).quantity;
  },
  orderDate: function () {
    var orderdate = orders.findOne({
      _id: Router.current().params._id
    }).createdAt;

    if (orderdate) {
      var f = "MMMM DD, YYYY";
      return moment(orderdate).format(f);
    }
  },
  orderProductCount: function (productId) {
    return carts.findOne({
      productId: productId
    }).productQuantity;
  },
  productImage: function (productId) {
    return products.findOne({
      _id: productId.id
    }).productImage;
  },
  totalOrderAmount: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).total.toFixed(2);
  },
  prodDetail: function (productId) {
    return products.findOne({
      _id: productId.id
    }).details;
  },
  orderDiscount: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).discount.toFixed(2);
  },
  totalGrossAmount: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).grossTotal.toFixed(2);
  },
  paymentStatus: function () {
    return orders.findOne({
      _id: Router.current().params._id
    }).paymentStatus;
  }
});
Template.receiptPage.events({});

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"register":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/register/template.template.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("register");
Template["register"] = new Template("Template.register", (function() {
  var view = this;
  return HTML.Raw('<div class="signup">\n\t\t<div class="page-wrapper"> \n\t\t\t<div class="banner">\n\t\t\t\t<div class="header">\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="row npm">\n\t\t\t\t\t\t\t<div class="col-xs-3 npm icon-left"> <a href="/login" id="nav-icon2"><img src="/images/back-icon.png" alt="back-icon"> </a> </div>\n\t\t\t\t\t\t\t<div class="col-xs-6 npm">\n\t\t\t\t\t\t\t\t<div class="header_title"><h2>Create Account</h2></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class="col-xs-3 npm text-right icon-right"> \n\t\t\t\t\t\t\t\t<a href="#"><img src="/images/check-icon.png" alt="check-icon"/> </a> \n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="container">\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n\t\t\t\t\t<div class="logo">\n\t\t\t\t\t\t<img src="/images/logo.png" alt="logo" class="img-responsive">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="content common-form">\n\t\t<div class="container">\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">\n\t\t\t\t\t<form id="registerForm">\n\t\t\t\t\t\t<div class="form" id="signupForm">\n\t\t\t\t\t\t\t<h3>Your Account Details</h3>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">First Name</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control isRequired" name="firstName" id="firstName">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">Last Name</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control isRequired" name="lastName" id="lastName">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<input type="file" id="userimage" name="profileImage">\n   \t\t\t\t\t\t\t<button id="uploadImage">Upload Image</button>\n   \t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="select-box">\n\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t<select class="form-control isRequired" id="userCountry" name="userCountry">\n\t\t\t\t\t\t\t\t\t\t<option selected="select">Country</option>\n\t\t\t\t\t\t\t\t\t\t<option>Country1</option>\n\t\t\t\t\t\t\t\t\t\t<option>Country2</option>\n\t\t\t\t\t\t\t\t\t\t<option>Country3</option>\n\t\t\t\t\t\t\t\t\t\t<option>Country4</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="selectarrow"><i class="fa fa-angle-down"></i></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">Birthday</label>\n\t\t\t\t\t\t\t\t<input type="text" class="datepicker form-control isRequired" name="userdob" id="userdob">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">Email</label>\n\t\t\t\t\t\t\t\t<input type="email" class="form-control isRequired validateEmail" name="userEmailRegister" id="userEmailRegister">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">Password</label>\n\t\t\t\t\t\t\t\t<input type="password" class="form-control isRequired" name="userPasswordRegister" id="userPasswordRegister">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">Confirm Password</label>\n\t\t\t\t\t\t\t\t<input type="password" class="form-control isRequired" name="userConfirmPasswordRegister" id="userConfirmPasswordRegister">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">Phone Number</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control isRequired" name="phoneNumber" id="phoneNumber">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h3>Home Address</h3>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">Street</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control isRequired" name="userStreet" id="userStreet">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">City</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control isRequired" name="userCity" id="userCity">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">State</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control isRequired" name="userState" id="userState">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group label-floating is-empty">\n\t\t\t\t\t\t\t\t<label class="control-label">Zip</label>\n\t\t\t\t\t\t\t\t<input type="text" class="form-control isRequired validateZip" name="userZip" id="userZip">\n\t\t\t\t\t\t\t\t<span class="errorSpan"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- terms of service -->\n\t\t\t\t\t    <div class="form-group label-floating is-empty">\n                <div class="checkboxmark">\n                  <label>\n                    <input type="checkbox" value="off" id="termsOfService">\n                    <span class="checkeds blackboder"><i class="fa fa-check checkeds-icon"></i></span>\n                    <h3 class="font-weit-normal"><a href="/termsofservice"> Terms Of Service</a></h3>\n                  </label>\n                </div>\n                <span class="material-input"></span> \n              </div>\n              <!-- end -->\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<div class="pos-relative">\n\t\t\t\t\t\t\t\t\t<button class="btn btn-block" id="createAccount">Create Account<div class="ripple-container"></div></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/register/script.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.register.onCreated(function () {});
Template.register.onRendered(function () {});
Template.register.helpers({});
Template.register.events({// 'click #uploadImage': function(e)
  // {
  // 	e.preventDefault();
  //    var files = []
  // 	var file = $('#userimage')[0].files[0];
  // 	files.push(file)
  // 	console.log(files)
  //    Cloudinary.upload(files, {}, function(err, res) {
  // 	  if (err){
  // 	    console.log(err);
  // 	    return;
  // 	  }
  // 	  console.log(res);
  // 	});
  // }
}); // {
// 	e.preventDefault();
// 	var file = $('#userimage')[0].files[0];
//    Cloudinary.upload(file);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"searchProducts":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/searchProducts/template.template.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("productList");
Template["productList"] = new Template("Template.productList", (function() {
  var view = this;
  return HTML.A({
    href: function() {
      return [ "/productDetails/", Spacebars.mustache(view.lookup("productDetailPage")) ];
    }
  }, " \n  \t", HTML.DIV({
    class: "row"
  }, "\n  \t\t", HTML.DIV({
    class: "col-xs-2 text-center"
  }, "\n\t\t\t\t", Blaze.View("lookup:productsImage", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("productsImage")));
  }), "\n  \t\t"), "\n  \t\t", HTML.DIV({
    class: "col-xs-10"
  }, "\n  \t\t\t", HTML.P({
    class: "prodName"
  }, " ", HTML.H3(Blaze.View("lookup:productName", function() {
    return Spacebars.mustache(view.lookup("productName"));
  }))), "\n  \t\t\t", HTML.P({
    class: "prodDetail"
  }, " ", HTML.H5(" ", Blaze.View("lookup:productDetails", function() {
    return Spacebars.mustache(view.lookup("productDetails"));
  }), " ")), "\n  \t\t\t", HTML.P({
    class: "prodPrice"
  }, HTML.H5("$ ", Blaze.View("lookup:productPrice", function() {
    return Spacebars.mustache(view.lookup("productPrice"));
  }))), "\n  \t\t"), "\n  \t"), "\n   ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/searchProducts/script.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.productList.onCreated(function () {});
Template.productList.onRendered(function () {});
Template.productList.helpers({
  productsImage: function () {
    return '<img src=" ' + this.productImage + ' " width="50px">';
  },
  productDetailPage: function () {
    return this._id;
  },
  productDetails: function () {
    if (this.details.length >= 100) {
      return this.details.substring(0, 100) + ".....";
    } else {
      return this.details;
    }
  },
  productPrice: function () {
    return this.price;
  }
});
Template.productList.events({});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"settings":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/settings/template.template.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("settings");
Template["settings"] = new Template("Template.settings", (function() {
  var view = this;
  return HTML.DIV({
    class: "settings"
  }, HTML.Raw("\n  <!-- ====== /WRAPPER BOC ====== -->\n\t  "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n\t    ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n\t    ", HTML.DIV({
    class: "st-pusher"
  }, "\n\t      ", Spacebars.include(view.lookupTemplate("menu")), "\n\t      ", HTML.DIV({
    class: "st-content"
  }, "\n\t        ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n\t        ", HTML.DIV({
    class: "st-content-inner"
  }, "\n\t          ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), "\n\t          ", HTML.Raw("<!-- Top Navigation -->"), "\n\t          ", HTML.Raw('<div class="main-header">\n\t            <div class="header">\n\t              <div class="container">\n\t                <div class="row npm">\n\t                  <div class="col-xs-3 npm icon-left">\n\t                    <div id="st-trigger-effects" class="column">\n\t                      <button data-effect="st-effect-8" class="menu-open"><a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a></button>\n\t                    </div>\n\t                  </div>\n\t                  <div class="col-xs-6 npm">\n\t                    <div class="header_title">\n\t                      <h2>Settings</h2>\n\t                    </div>\n\t                  </div>\n\t                  <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n\t                </div>\n\t              </div>\n\t            </div>\n\t          </div>'), "\n\t          ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n\t          ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n\t          ", HTML.DIV({
    class: "content common-form"
  }, "\n\t            ", HTML.DIV({
    class: "container"
  }, "\n\t              ", HTML.DIV({
    class: "row"
  }, "\n\t                ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n\t                  ", HTML.DIV({
    class: "form"
  }, "\n\t                    ", HTML.Raw('<div class="form-group links">\n\t                      <a href="/changepassword">Change Password<img src="/images/right_icon_chevron.png" alt="right_icon_chevron.png"></a>\n\t                    </div>'), "\n\t                    ", HTML.Raw('<div class="form-group links">\n\t                      <a href="/accountdetails">Edit Account Info <img src="/images/right_icon_chevron.png" alt="right_icon_chevron.png"></a>\n\t                    </div>'), "\n\t                     ", HTML.DIV({
    class: "form-group links"
  }, "\n                         \n                           ", HTML.Raw("<a> Notification </a>"), "\n                            ", HTML.Raw('<!-- <span class="switch" style="float: right;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type="checkbox" class="switch" id="notification" {{settingNotChecked}}>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->'), "\n\n\t\t\t\t\t\t\t\n                          \n\n                          \n\n                          \t", HTML.LABEL({
    class: "switch-light switch-material",
    onclick: "",
    style: "float: right;"
  }, "\n\t\t\t\t\t\t\t\t", HTML.INPUT(HTML.Attrs({
    type: "checkbox",
    id: "notification"
  }, function() {
    return Spacebars.attrMustache(view.lookup("settingNotChecked"));
  })), "\n\n\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t", HTML.Raw("<span>\n\t\t\t\t\t\t\t\t<span>Off</span>\n\t\t\t\t\t\t\t\t<span>On</span>\n\t\t\t\t\t\t\t\t<a></a>\n\t\t\t\t\t\t\t\t</span>"), "\n\t\t\t\t\t\t\t"), "\n\n                        "), "\n\t                    ", HTML.Raw('<!--\n\t                      <div class="form-group links">\n\t                      \t<a href="login.html">Logout <img src="images/right_icon_chevron.png" alt="right_icon_chevron.png"></a>\n\t                      </div>\n\t                      -->'), "\n\t                  "), "\n\t                "), "\n\t              "), "\n\t            "), "\n\t          "), "\n\t          ", HTML.Raw("<!-- ====== /CONTENT EOC ====== -->"), " \n\t          ", HTML.Raw("<!-- ====== /FOOTER BOC ====== -->"), "\n\t          ", HTML.Raw("<!-- ====== /FOOTER EOC ====== -->"), "\n\t        "), "\n\t      "), "\n\t    "), "\n\t  "), "\n\t");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/settings/script.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.settings.onCreated(function () {});
Template.settings.onRendered(function () {
  setTimeout(function () {
    //$('.switch').bootstrapSwitch();
    $('.switch')['bootstrapSwitch']();
  }, 500);
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.settings.helpers({
  settingNotChecked: function () {
    if (typeof Meteor.user() !== "undefined") {
      if (typeof Meteor.user().profile !== "undefined") {
        if (typeof Meteor.user().profile.settingNotifications !== "undefined") {
          if (Meteor.user().profile.settingNotifications == true) {
            return "checked";
          } else {
            return "";
          }
        }
      }
    }
  }
});
Template.settings.events({
  'change #notification': function (e) {
    e.preventDefault();

    if ($("#notification").is(":checked")) {
      var a = Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.settingNotifications': true
        }
      });
    } else {
      var a = Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.settingNotifications': false
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"signup":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/signup/template.template.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("signup");
Template["signup"] = new Template("Template.signup", (function() {
  var view = this;
  return HTML.Raw('<h2>Sign Up</h2>\n\t<a id="login_button">Sign In</a>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/signup/script.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.register.onCreated(function () {});
Template.register.onRendered(function () {
  this.$('.datepicker').datepicker();
});
Template.register.helpers({});
Template.register.events({
  'click #createAccount': function (e) {
    e.preventDefault();
    var me = $(e.target);
    me.html('<i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i> Please Wait...');
    me.attr("disabled", true);
    var requiredErrors = isRequired($("#signupForm"), true);

    if (requiredErrors > 0) {
      me.html('Create Account');
      me.attr("disabled", false);
      return;
    } else {
      var emailError = validateEmail($("#signupForm"), true);

      if (emailError > 0) {
        me.html('Create Account');
        me.attr("disabled", false);
        return;
      } else {
        var zipError = validateZip($("#signupForm"), true);

        if (zipError > 0) {
          me.html('Create Account');
          me.attr("disabled", false);
          return;
        } else {
          var confirmPasswordError = $("#userPasswordRegister").val() == $("#userConfirmPasswordRegister").val();

          if (!confirmPasswordError) {
            me.html('Create Account');
            me.attr("disabled", false);
            $("#userConfirmPasswordRegister").next(".errorSpan").html("Confirm Password does not match with Password.");
            return;
          } else {
            var formData = $("form#registerForm");
            var registerData = {
              profile: {
                firstName: formData[0].firstName.value,
                lastName: formData[0].lastName.value,
                country: formData[0].userCountry.value,
                birthday: formData[0].userdob.value,
                street: formData[0].userStreet.value,
                city: formData[0].userCity.value,
                state: formData[0].userState.value,
                zip: formData[0].userZip.value,
                isActive: true,
                isNew: true,
                phoneNumber: formData[0].phoneNumber.value
              },
              username: formData[0].userEmailRegister.value,
              password: formData[0].userPasswordRegister.value,
              email: formData[0].userEmailRegister.value
            };

            if ($("#termsOfService").is(":checked")) {
              if (getAge(new Date(formData[0].userdob.value)) >= 21) {
                Accounts.createUser(registerData, function (error) {
                  if (error) {
                    if (error.reason == "Username already exists.") {
                      me.html('Create Account');
                      me.attr("disabled", false);
                      $("#userEmailRegister").next(".errorSpan").html("User already exists.");
                      $("#userEmailRegister").val("");
                      $("#userEmailRegister").focus();
                      return;
                    } else {
                      me.html('Create Account');
                      me.attr("disabled", false);
                      sAlert.error("<b>" + error.reason + "</b>", {});
                    }
                  } else {
                    me.html('Create Account');
                    me.attr("disabled", false);
                    var file = $('#userimage')[0].files[0];
                    Cloudinary.upload(file, {}, function (err, res) {
                      if (err) {
                        alert(err);
                        console.log(err);
                        return;
                      } else {
                        Meteor.call('updateProfileImage', res.url, Meteor.userId());
                        var subject = "Welcome to Shop Skip";
                        var emailBody = "<p>Hi " + Meteor.user().profile.firstName + ",<br /><br />Welcome to Shop Skip.<br /><br />You have successfully registered on Shop Skip.<br /><br />Regards,<br />Shop Skip Team.</p>";
                        Meteor.call('sendEmail', Meteor.user().username, "appbuilding24@gmail.com", subject, emailBody);
                        Meteor.call('sendVerificationEmailToUser', Meteor.userId());
                        Meteor.logout();
                        Router.go("/login");
                        setTimeout(function () {
                          sAlert.success('<b>Registration was successful. Please verify your email to signin into your account.</b>', {});
                        }, 500);
                      }
                    });
                  }
                });
              } else {
                alert("Your age must be 21+ years !!");
                me.html('Create Account');
                me.attr("disabled", false);
                return;
              }
            } else {
              alert("Please Accept Terms Of Service !!");
              me.html('Create Account');
              me.attr("disabled", false);
              return;
            }
          }
        }
      }
    }
  } // 'click #termsOfService': function(e)
  // {
  // 	e.preventDefault();
  // 	if($("#termsOfService").is(":checked"))
  // 	{
  // 	}
  // }

});

function getAge(d1, d2) {
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"storeSuccessPage":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/storeSuccessPage/template.template.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("storeSuccessPage");
Template["storeSuccessPage"] = new Template("Template.storeSuccessPage", (function() {
  var view = this;
  return HTML.DIV({
    class: "success-screens"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.Raw('<div class="st-content">\n          <!-- this is the wrapper for the content -->\n          <div class="st-content-inner cartlisting">\n            <!-- extra div for emulating position:fixed of the menu --> \n            <!-- Top Navigation -->\n            <div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-2 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-8 npm">\n                      <div class="header_title">\n                        <h2>Success</h2>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- ====== /HEADER EOC ====== --> \n            <!-- ====== /CONTENT BOC ====== -->\n            <div class="content common-form">\n              <div class="text-center success-page">\n                <div class="success-checked"><img src="/images/success-checked.png" alt="success-checked"></div>\n                <h2>Thank You <br> For Your Purchase </h2>\n                <h5 class="order-pickup">Please see a cashier to  <br> finalize the order </h5>\n                <div class="form-group bitnmgt">\n                  <div class="pos-relative">\n                    <button class="btn btn-block text-uppercase" id="keepShopping">\n                      keep shopping\n                      <div class="ripple-container"></div>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>'), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/storeSuccessPage/script.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.storeSuccessPage.onCreated(function () {});
Template.storeSuccessPage.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.storeSuccessPage.helpers({});
Template.storeSuccessPage.events({
  'click #keepShopping': function (e) {
    e.preventDefault();
    Router.go("/products");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"storemap":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/storemap/template.template.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("storesmap");
Template["storesmap"] = new Template("Template.storesmap", (function() {
  var view = this;
  return HTML.DIV({
    class: "store_list map"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n         ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Stores Map</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right">\n                      <a href="/storePage" style="color: #fff;"> \n                      \t<i class="fa fa-chevron-left" aria-hidden="true" style="color: #fff;font-size: 16px;"></i> Back</a> \n                      <!--\n                        <a href="#">\n                        <div class="header_title">Save</div>\n                        </a> \n                        -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form storelisingmap"
  }, "\n              ", HTML.DIV({
    class: "container npbm"
  }, "\n                ", HTML.DIV({
    class: "row mgtlr"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12 npbm"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("storesmap"),
      options: Spacebars.call(view.lookup("storesMapOptions"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("googleMap"));
  }), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/storemap/script.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var markers = [];
Template.storesmap.onCreated(function () {
  Meteor.subscribe('stores');
});
Template.storesmap.onRendered(function () {
  var a = $(".main-header").outerHeight();
  var b = $(window).height();
  $(".storelisingmap").css("height", b - a);
  $(".map-canvas").css("height", b - a);
  var a = setInterval(function () {
    var loc = Geolocation.currentLocation();

    if (loc != null) {
      clearInterval(a);
      var latlng = new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude);
      GoogleMaps.maps.storesmap.instance.setCenter(latlng);
    }
  }, 100);
  var storeList = stores.find({}).fetch();

  for (var i = 0; i < storeList.length; i++) {
    var store = storeList[i];
    var url = store.storeImage;
    url = url.split("upload");
    url = url[0] + "upload/c_scale,e_auto_color,h_40,r_100,w_40/" + url[1];
    url = url.substr(0, url.lastIndexOf("."));
    url = url + ".png";
    var icon = {
      url: url
    };
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(store.storeLat, store.storeLng),
      map: GoogleMaps.maps.storesmap.instance,
      animation: google.maps.Animation.Drop,
      icon: icon
    });

    (function (temp) {
      marker.addListener('click', function (e) {
        if (Meteor.isCordova) {
          if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
            var href = buildiOSMapLinkNew(temp.storeLat, temp.storeLng);
          } else {
            var href = buildWebMapLinkNew(temp.storeLat, temp.storeLng);
          }
        } else {
          var href = buildWebMapLinkNew(temp.storeLat, temp.storeLng);
        }

        var contentString = '<div id="contentMap">' + '<h3 class="infoheading">' + temp.storeName + '</h3>' + '<div id="bodyContent">' + '<p>' + temp.storeLocation + '</p>' + '<p>For directions click <br /><a href="' + href + '" target="_blank">Here</a>' + '</div>' + '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        GoogleMaps.maps.storesmap.instance.setCenter(this.position);
        infowindow.open(GoogleMaps.maps.storesmap.instance, this);
      });
    })(store);

    markers.push(marker);
  }
});
Template.storesmap.events({});
Template.storesmap.helpers({
  storesMapOptions: function () {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 17
      };
    }
  }
});

function buildiOSMapLinkNew(lat, lng) {
  var locationString = _.compact([lat, lng]).join(',');

  if (locationString) {
    var queryString = encodeURIComponent(locationString);
    return "http://maps.apple.com/?daddr=" + queryString + "&dirflg=d&t=h";
  }
}

function buildWebMapLinkNew(lat, lng) {
  var queryString;

  var locationString = _.compact([lat, lng]).join(',');

  if (locationString) {
    queryString = encodeURIComponent(locationString);
    return "https://www.google.com/maps?saddr=My+Location&daddr=" + queryString;
  }
}

function buildAndroidLinkNew(lat, lng) {
  var queryString;

  var locationString = _.compact([lat, lng]).join(' ');

  if (locationString) {
    queryString = encodeURIComponent(locationString);
    return "http://www.google.com/maps/place/" + queryString;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"stores":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/stores/template.template.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("storePage");
Template["storePage"] = new Template("Template.storePage", (function() {
  var view = this;
  return HTML.DIV({
    class: "store_list"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n         ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-4 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm">\n                      <div class="header_title">\n                        <h2>Store List</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-4 npm text-right icon-right">\n                      <a href="/storePage/map"><img src="/images/map-location-icon.png" alt="location-icon"> </a> \n                      <!--\n                        <a href="#">\n                        <div class="header_title">Save</div>\n                        </a> \n                        -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form storelising"
  }, "\n              ", HTML.DIV({
    class: "container npbm"
  }, "\n                ", HTML.DIV({
    class: "row mgtlr"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-12 col-md-12 col-sm-12 col-xs-12 npbm"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getStores"));
  }, function() {
    return [ "\n                        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getStores"));
    }, function() {
      return [ "\n                          ", HTML.DIV({
        class: "form-group storelist"
      }, "\n                            ", HTML.DIV({
        class: "radio-list radio-primary"
      }, "\n                              ", HTML.INPUT({
        type: "radio",
        name: "radio1",
        id: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        },
        value: "option1",
        checked: function() {
          return Spacebars.mustache(view.lookup("setChecked"), Spacebars.dot(view.lookup("."), "_id"));
        }
      }), "\n                              ", HTML.LABEL({
        for: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        }
      }), "\n                            "), "\n                            ", HTML.IMG({
        class: "storeproduct",
        src: function() {
          return Spacebars.mustache(view.lookup("storeImage"), Spacebars.dot(view.lookup("."), "_id"));
        },
        alt: "location-icon"
      }), "\n                            ", HTML.DIV({
        class: "titles"
      }, "\n                              ", HTML.A({
        href: "#"
      }, Blaze.View("lookup:..storeName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "storeName"));
      })), "\n                              ", HTML.DIV({
        class: "map-loactin"
      }, " \n                                ", HTML.IMG({
        alt: "location-icon",
        src: "/images/location-icon.png"
      }), " \n                                ", HTML.A({
        href: function() {
          return Spacebars.mustache(view.lookup("getHref"), view.lookup("."));
        },
        target: "_blank"
      }, Blaze.View("lookup:..address", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "address"));
      })), "\n                              "), "\n                            "), "\n                            ", HTML.DIV({
        class: "stotelistarrow"
      }, HTML.A({
        href: "#"
      }, HTML.IMG({
        alt: "store_list_back",
        src: "/images/store_list_back.png",
        id: "storeArrow",
        "data-id": function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        }
      }))), "\n                          "), "\n                        " ];
    }), "\n                      " ];
  }), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"scripts.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/stores/scripts.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.storePage.onCreated(function () {
  Meteor.subscribe('stores');
});
Template.storePage.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
  $('.switch').bootstrapSwitch();
});
Template.storePage.helpers({
  getStores: function () {
    return stores.find().fetch();
  },
  storeImage: function (storeId) {
    var store = stores.findOne({
      _id: storeId
    });
    var image = store.storeImage;
    var imageUrl = image.split("upload");
    imageUrl = imageUrl[0] + "upload/c_scale,w_228,h_208" + imageUrl[1];
    return imageUrl;
  },
  StoreTime: function (storetime) {
    return moment(storetime).format("hh:mm a");
  },
  setChecked: function (storeId) {
    if (storeId == Session.get("storeId")) {
      return "checked";
    }
  },
  getHref: function (n) {
    var temp = n;

    if (Meteor.isCordova) {
      if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        var href = buildiOSMapLinkNew(temp.storeLat, temp.storeLng);
      } else {
        var href = buildWebMapLinkNew(temp.storeLat, temp.storeLng);
      }
    } else {
      var href = buildWebMapLinkNew(temp.storeLat, temp.storeLng);
    }

    return href;
  }
});
Template.storePage.events({
  'click #storeArrow': function (e) {
    e.preventDefault();
    var storeId = $(e.target).data("id");

    if (Session.get("storeId") == storeId) {
      Session.set("storeId", undefined);
    }

    Session.set("storeId", storeId);
    Router.go('/dashboard');
  },
  'click .shopLocationSpan': function (e) {
    e.preventDefault();
    var temp = {
      storeLat: $(e.target).data("lat"),
      storeLng: $(e.target).data("lng")
    };

    if (Meteor.isCordova) {
      if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        var href = buildiOSMapLinkNew(temp.storeLat, temp.storeLng);
      } else {
        var href = buildWebMapLinkNew(temp.storeLat, temp.storeLng);
      }
    } else {
      var href = buildWebMapLinkNew(temp.storeLat, temp.storeLng);
    }
  }
});

function buildiOSMapLinkNew(lat, lng) {
  var locationString = _.compact([lat, lng]).join(',');

  if (locationString) {
    var queryString = encodeURIComponent(locationString);
    return "http://maps.apple.com/?daddr=" + queryString + "&dirflg=d&t=h";
  }
}

function buildWebMapLinkNew(lat, lng) {
  var queryString;

  var locationString = _.compact([lat, lng]).join(',');

  if (locationString) {
    queryString = encodeURIComponent(locationString);
    return "https://www.google.com/maps?saddr=My+Location&daddr=" + queryString;
  }
}

function buildAndroidLinkNew(lat, lng) {
  var queryString;

  var locationString = _.compact([lat, lng]).join(' ');

  if (locationString) {
    queryString = encodeURIComponent(locationString);
    return "http://www.google.com/maps/place/" + queryString;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"successPage":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/successPage/template.template.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("successPage");
Template["successPage"] = new Template("Template.successPage", (function() {
  var view = this;
  return HTML.DIV({
    class: "success-screens"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.Raw('<div class="st-content">\n          <!-- this is the wrapper for the content -->\n          <div class="st-content-inner cartlisting">\n            <!-- extra div for emulating position:fixed of the menu --> \n            <!-- Top Navigation -->\n            <div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-2 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-8 npm">\n                      <div class="header_title">\n                        <h2>Success</h2>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="content common-form">\n              <div class="text-center success-page">\n                <div class="barcodes">Barcode For Your Orders</div>\n                <div class="barcodeimage">\n                  <!-- <img src="/images/payment-summary-code.png" alt="Order Barcode"/> -->\n                  <p>Barcode!</p>\n                  <img id="barcode">\n                </div>\n                <h2>Thank You <br> For Your Purchase </h2>\n                <h5 class="order-pickup">We Will Notify You When <br> Your Goods Are Ready For Pickup.</h5>\n                <div class="form-group bitnmgt">\n                  <div class="pos-relative">\n                    <button class="btn btn-block text-uppercase" id="keepShopping">\n                      keep shopping\n                      <div class="ripple-container"></div>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div> \n          </div>\n        </div>'), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/successPage/script.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.successPage.onCreated(function () {
  Meteor.subscribe("getOrders");
});
Template.successPage.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
  setTimeout(function () {
    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    } // JsBarcode("#barcode", "Hi!");


    var barcodeValue = orders.findOne({
      _id: Router.current().params._id
    }).barcodeOrderValue;
    var barcodeValue = pad(barcodeValue, 8);
    JsBarcode("#barcode", barcodeValue);
  }, 2000);
});
Template.successPage.helpers({});
Template.successPage.events({
  'click #keepShopping': function (e) {
    e.preventDefault();
    Router.go("/products");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"termsofservice":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/termsofservice/template.template.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("termsofservice");
Template["termsofservice"] = new Template("Template.termsofservice", (function() {
  var view = this;
  return HTML.DIV({
    class: "terms-of-services-legal"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n       ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.Raw("<!-- this is the wrapper for the content -->"), "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw("<!-- extra div for emulating position:fixed of the menu -->"), " \n            ", HTML.Raw("<!-- Top Navigation -->"), "\n            ", HTML.DIV({
    class: "main-header"
  }, "\n              ", HTML.DIV({
    class: "header"
  }, "\n                ", HTML.DIV({
    class: "container"
  }, "\n                  ", HTML.DIV({
    class: "row npm"
  }, "\n                    ", HTML.Raw('<div class="col-xs-2 col-xs-2 col-xs-2 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>'), "\n                    ", HTML.DIV({
    class: "col-xs-8 npm"
  }, "\n                      ", HTML.DIV({
    class: "header_title"
  }, "\n                        ", HTML.H2(Blaze.View("lookup:getContents.pageTitle", function() {
    return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("getContents"), "pageTitle")));
  })), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n            ", HTML.Raw("<!-- ====== /HEADER EOC ====== -->"), " \n            ", HTML.Raw("<!-- ====== /CONTENT BOC ====== -->"), "\n            ", HTML.DIV({
    class: "content common-form favorites-list"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", HTML.DIV({
    class: "terms-of-services-legal-page text-center"
  }, "\n                        ", Blaze.View("lookup:getContents.pageContent", function() {
    return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("getContents"), "pageContent")));
  }), "\n                        ", HTML.Raw('<div class="form-group label-floating is-empty">\n                          <div class="checkboxmark">\n                            <label>\n                              <input type="checkbox" id="termsConditions" value="">\n                              <span class="checkeds"><i class="fa fa-check checkeds-icon"></i></span>\n                              <h3>I Understand And Accept These Terms &amp; Conditions</h3>\n                            </label>\n                          </div>\n                          <span class="material-input"></span> \n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group">\n                          <div class="pos-relative">\n                            <button class="btn btn-block text-uppercase" id="AcceptTerms">\n                              Accept\n                              <div class="ripple-container"></div>\n                            </button>\n                          </div>\n                        </div>'), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), " \n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/termsofservice/script.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.termsofservice.onCreated(function () {
  Meteor.subscribe('getContents');
});
Template.termsofservice.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.termsofservice.helpers({
  getContents: function () {
    console.log(cms.findOne({
      pageCode: 'termsofservice'
    }));
    return cms.findOne({
      pageCode: 'termsofservice'
    });
  }
});
Template.termsofservice.events({
  'click #AcceptTerms': function (e) {
    if ($("#termsConditions").is(":checked")) {
      Router.go("/signup");
    } else {
      alert("Please accept terms of service !!");
      return;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"thanksforshopping":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/thanksforshopping/template.template.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("thanksforshopping");
Template["thanksforshopping"] = new Template("Template.thanksforshopping", (function() {
  var view = this;
  return HTML.DIV({
    class: "thanks-for-shopping"
  }, HTML.Raw("\n    <!-- ====== /WRAPPER BOC ====== -->\n    "), HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.Raw("<!-- ====== HEADER BOC ====== -->"), "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.Raw('<div class="st-content">\n          <!-- this is the wrapper for the content -->\n          <div class="st-content-inner cartlisting">\n            <!-- extra div for emulating position:fixed of the menu --> \n            <!-- Top Navigation -->\n            <div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-2 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-8 npm">\n                      <div class="header_title">\n                        <h2>Thanks For Shopping</h2>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- ====== /HEADER EOC ====== --> \n            <!-- ====== /CONTENT BOC ====== -->\n            <div class="content common-form">\n              <div class="thanksyouforshopping text-center">\n                <h2>Thank You</h2>\n                <h3>Your order is ready <br>\n                  for pickup.\n                </h3>\n                <div class="form-group bitnmgt">\n                  <div class="pos-relative">\n                    <button class="btn btn-block text-uppercase" id="keepShooping">\n                      Keep Shopping\n                      <div class="ripple-container"></div>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- ====== /CONTENT EOC ====== --> \n            <!-- ====== /FOOTER BOC ====== --> \n            <!-- ====== /FOOTER EOC ====== --> \n          </div>\n        </div>'), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/thanksforshopping/script.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.thanksforshopping.onCreated(function () {});
Template.thanksforshopping.onRendered(function () {});
Template.thanksforshopping.helpers({});
Template.thanksforshopping.events({
  'click #keepShooping': function (e) {
    e.preventDefault();
    Router.go("/products");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"topPickProducts":{"template.template.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/topPickProducts/template.template.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("topPickProducts");
Template["topPickProducts"] = new Template("Template.topPickProducts", (function() {
  var view = this;
  return HTML.DIV({
    class: "product-list gray-color-bg"
  }, "\n    ", HTML.DIV({
    id: "st-container",
    class: "st-container page-wrapper"
  }, "\n      ", HTML.DIV({
    class: "st-pusher"
  }, "\n        ", Spacebars.include(view.lookupTemplate("menu")), "\n        ", HTML.DIV({
    class: "st-content"
  }, "\n          ", HTML.DIV({
    class: "st-content-inner"
  }, "\n            ", HTML.Raw('<div class="main-header">\n              <div class="header">\n                <div class="container">\n                  <div class="row npm">\n                    <div class="col-xs-3 npm icon-left">\n                      <div id="st-trigger-effects" class="column">\n                        <button data-effect="st-effect-8" class="menu-open">\n                        <a href="#" id="nav-icon3"><img src="/images/menu-icon.png" alt="menu-icon"> </a>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="col-xs-6 npm">\n                      <div class="header_title">\n                        <h2>Top Pick product List</h2>\n                      </div>\n                    </div>\n                    <div class="col-xs-3 npm text-right icon-right">\n                      <a href="/cart"><img src="/images/cart-icons.png" alt="cart-icons"> </a> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "content common-form favorites-list"
  }, "\n              ", HTML.DIV({
    class: "container"
  }, "\n                ", HTML.DIV({
    class: "row"
  }, "\n                  ", HTML.DIV({
    class: "col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12"
  }, "\n                    ", HTML.DIV({
    class: "form"
  }, "\n                      ", HTML.DIV({
    class: "row"
  }, "\n                        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getTopProducts"));
  }, function() {
    return [ "\n                          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("getTopProducts"));
    }, function() {
      return [ "\n                          ", HTML.DIV({
        class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
      }, "\n                            ", HTML.DIV({
        class: "favorites-products"
      }, "\n                              ", HTML.DIV({
        class: "favorites-proimg"
      }, "\n                                ", HTML.A({
        href: function() {
          return [ "/productDetails/", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
        }
      }, HTML.IMG({
        class: "img-responsive center-block",
        src: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productImage"));
        },
        alt: "Favorites Product"
      })), "\n                                ", HTML.DIV({
        class: "favorites-heart favheart"
      }, "\n                                  ", HTML.A({
        href: "#"
      }, "\n                                    ", Blaze.If(function() {
        return Spacebars.call(view.lookup("getStatus"));
      }, function() {
        return [ "\n                                      ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorite-fill.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                    " ];
      }, function() {
        return [ "\n                                      ", HTML.IMG({
          class: "img-responsive",
          src: "/images/favorites-heart.png",
          id: "favProduct",
          "data-id": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          },
          "data-status": function() {
            return Spacebars.mustache(view.lookup("getStatusString"));
          },
          alt: "favorites-heart"
        }), "\n                                    " ];
      }), "\n                                  "), " \n                                "), "\n                              "), "\n                              ", HTML.INPUT({
        type: "hidden",
        name: "productId",
        value: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
        }
      }), "\n                              ", HTML.DIV({
        class: "pricetables"
      }, "\n                                ", HTML.A({
        href: "#"
      }, " ", Blaze.View("lookup:..productName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "productName"));
      }), " "), "\n                                ", HTML.DIV({
        class: "pricefvrt"
      }, " $ ", Blaze.View("lookup:..price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "price"));
      }), " ", HTML.SPAN(" ", Blaze.View("lookup:..quantity", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "quantity"));
      }), " "), " "), HTML.BR(), "\n                                ", HTML.Comment(" <div><b>Store:</b> {{storename this.storeName}}</div> "), "\n                              "), "\n\n                              ", HTML.DIV({
        class: "fvrt-btnaddtocart"
      }, "\n                                ", HTML.A({
        href: function() {
          return [ "/ratings/", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
        }
      }, "\n                                  ", HTML.BUTTON({
        class: "btn btn-block"
      }, "\n                                    Add Review\n                                    ", HTML.DIV({
        class: "ripple-container"
      }), "\n                                  "), "\n                                "), "\n                                ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("outOfStock"), view.lookup("."));
      }, function() {
        return [ "\n                                  ", HTML.BUTTON({
          class: "btn btn-block",
          id: "addCart",
          "data-attr": function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
          }
        }, "\n                                    Add To Cart ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/cart-icons.png"
        }), "\n                                    ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                  "), "\n                                " ];
      }, function() {
        return [ "\n                                  ", HTML.BUTTON({
          class: "btn btn-block outOfStock"
        }, "\n                                    Out Of Stock ", HTML.IMG({
          alt: "carts-icon",
          src: "/images/outofstock.png",
          class: "outOfStockIcon"
        }), "\n                                    ", HTML.DIV({
          class: "ripple-container"
        }), "\n                                  "), "\n                                " ];
      }), "\n                              "), "\n                            "), "\n                          "), "\n                          " ];
    }), "\n                        " ];
  }, function() {
    return [ "\n                          ", HTML.DIV({
      class: "form-group col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, "\n                            ", HTML.DIV({
      class: "favorites-products"
    }, "\n                              No Products Available..!\n                            "), "\n                          "), "\n                        " ];
  }), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "           \n          "), "\n        "), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"script.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/topPickProducts/script.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.topPickProducts.onCreated(function () {
  Meteor.subscribe('products');
  Meteor.subscribe('orders');
});
Template.topPickProducts.onRendered(function () {
  var a = $(window).height();
  var b = $('.main-header').outerHeight();
  var c = a - b;
  $('.common-form').css('height', c);
});
Template.topPickProducts.helpers({
  getTopProducts: function () {
    var orderList = orders.find({
      status: "Success"
    }).fetch();
    var productsQueue = [];
    var productsQuantityQueue = [];

    for (var i = 0; i < orderList.length; i++) {
      var singleOrder = orderList[i];
      var orderProducts = singleOrder.productIds;

      for (var j = 0; j < orderProducts.length; j++) {
        var singleProduct = orderProducts[j];

        if (productsQueue.indexOf(singleProduct.id) == -1) {
          productsQueue.push(singleProduct.id);
          productsQuantityQueue.push(singleProduct.quantity);
        } else {
          var currentIndex = productsQueue.indexOf(singleProduct.id);
          var currentQuantity = productsQuantityQueue[currentIndex];
          currentQuantity = parseInt(currentQuantity) + parseInt(singleProduct.quantity);
          productsQuantityQueue[currentIndex] = currentQuantity;
        }

        if (productsQueue.length >= 10) {
          break;
        }
      }
    }

    console.log(productsQueue);
    console.log(productsQuantityQueue);
    var productListing = [];
    $.each(productsQueue, function (index, value) {
      productListing.push(products.findOne({
        _id: value
      }));
      console.log(productListing);
    });
    return productListing;
  },
  getStatusString: function () {
    var a = favProducts.find({
      userId: Meteor.userId(),
      productId: this._id
    });

    if (a.count() > 0) {
      a = a.fetch()[0];

      if (typeof a.status !== "undefined") {
        return a.status;
      } else {
        return "false";
      }
    } else {
      return "false";
    }
  },
  getStatus: function () {
    console.log(this._id);
    var a = favProducts.find({
      userId: Meteor.userId(),
      productId: this._id
    });
    console.log(a);

    if (a.count() > 0) {
      a = a.fetch()[0];

      if (typeof a.status !== "undefined") {
        console.log(a);

        if (a.status == true) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  outOfStock: function (product) {
    var productId = product._id;
    var productAvailable = validateProductAvailable(productId);

    if (productAvailable) {
      return true;
    }
  }
});
Template.topPickProducts.events({
  'click #favProduct': function (e) {
    e.preventDefault();
    var productId = $(e.target).data("id");

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: productId
      }).storeName;
      Session.set("storeId", storeId);
    } else {
      var storeId = Session.get("storeId");
    }

    var event = $(e.target).data("status");
    var userId = Meteor.userId();
    var presentRecord = favProducts.findOne({
      productId: productId
    });
    var presentfalse = favProducts.findOne({
      status: false
    });

    if (event) {
      var action = false;
    } else {
      var action = true;
    }

    Meteor.call("updateFavProduct", storeId, Meteor.userId(), action, productId, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        if (res) {
          if (action) {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorite-fill.png');
          } else {
            $('[data-id="' + productId + '"]').attr('src', '/images/favorites-heart.png');
          }
        }
      }
    });
  },
  'click #addCart': function (e) {
    e.preventDefault();

    if (Session.get("storeId") == undefined) {
      var storeId = products.findOne({
        _id: $(e.target).data("attr")
      }).storeName;
      Session.set("storeId", storeId);
    } else {
      var storeId = Session.get("storeId");
    }

    var productId = $(e.target).data("attr");
    var userId = Meteor.userId();
    var presentProduct = carts.findOne({
      productId: productId,
      userId: userId
    });

    if (presentProduct) {
      Meteor.call("updateCart", presentProduct, productId, userId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          alert("Product Updated Sucessfully!");
        }
      });
    } else {
      Meteor.call("createCart", productId, userId, storeId, function (err, res) {
        if (err) {
          alert(err.reason);
        } else {
          if (res == "false") {
            alert("You cannot select product from another store..!");
          } else {
            alert("Product Added to Cart Sucessfully!");
          }
        }
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.html                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.main.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.body.addContent((function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("sAlert"));
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("menu");
Template["menu"] = new Template("Template.menu", (function() {
  var view = this;
  return HTML.NAV({
    class: "st-menu st-effect-8",
    id: "menu-8"
  }, HTML.Raw('\n    <div class="back_icon">\n      <ul>\n        <li><a href="#" class="menu-close"><img src="/images/menu_back_icon.png" alt="menu_back_icon"></a></li>\n      </ul>\n    </div>\n    '), HTML.DIV({
    class: "profile"
  }, "\n      ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("userImage"));
    },
    alt: "profile-pic",
    id: "profileImageMenu"
  }), "\n      ", HTML.H2({
    class: "menu-close"
  }, " ", Blaze.View("lookup:current_user_name", function() {
    return Spacebars.mustache(view.lookup("current_user_name"));
  })), "\n    "), HTML.Raw('\n    <ul>\n      <li><a href="/dashboard"><img src="/images/account_settings_icon.png" alt="account settings"><span>Home</span></a></li>\n      <li><a href="/accountdetails"><img src="/images/account_settings_icon.png" alt="account settings"><span>Account Settings</span></a></li>\n      <li><a href="/profiles"><img src="/images/account_settings_icon.png" alt="profile"><span>User Profile</span></a></li>\n      <li><a href="#" id="change_password"><img src="/images/account_settings_icon.png" alt="change password"><span>Change Password</span></a></li>\n      <li><a href="/products"><img src="/images/products_icon.png" alt="products_icon"><span>products</span></a></li>\n      <li><a href="/storePage"><img src="/images/stores_icon.png" alt="stores_icon">Stores</a></li>\n      <li><a href="/favorites"><img src="/images/favorite_products_icon.png" alt="favorite_products_icon">favorite products</a></li>\n      <li><a href="/orderHistory"><img src="/images/order_history_icon.png" alt="order_history_icon">order history</a></li>\n      <li><a href="/coupons"><img src="/images/coupons_icon.png" alt="coupons_icon">coupons</a></li>\n      <li><a href="/howappworks"><img src="/images/how_app_works_icon.png" alt="how_app_works_icon">how app works</a></li>\n      <li><a href="/settings"><img src="/images/settings_icon.png" alt="settings_icon">settings</a></li>\n       <li><a href="/faq"><img src="/images/question.png" alt="settings_icon">faq</a></li>\n      <li><a href="/notification"><img src="/images/settings_icon.png" alt="settings_icon">Notification</a></li>\n    </ul>\n    <div class="sign_out">\n      <ul>\n        <li><a href="#" id="user_sign_out"><img src="/images/sign_out_icon.png" alt="sign_out_icon"><span>Sign out</span></a></li>\n      </ul>\n    </div>\n  '));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"js":{"material-kit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/js/material-kit.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var transparent = true;
var transparentDemo = true;
var fixedTop = false;
var navbar_initialized = false;
$(document).ready(function () {
  // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
  $.material.init(); //  Activate the Tooltips

  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(); // Activate Datepicker

  if ($('.datepicker').length != 0) {
    $('.datepicker').datepicker({
      weekStart: 1
    });
  } // Activate Popovers


  $('[data-toggle="popover"]').popover(); // Active Carousel

  $('.carousel').carousel({
    interval: 400000
  });
});
materialKit = {
  misc: {
    navbar_menu_visible: 0
  },
  checkScrollForTransparentNavbar: debounce(function () {
    if ($(document).scrollTop() > 260) {
      if (transparent) {
        transparent = false;
        $('.navbar-color-on-scroll').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar-color-on-scroll').addClass('navbar-transparent');
      }
    }
  }, 17),
  initSliders: function () {
    // Sliders for demo purpose
    $('#sliderRegular').noUiSlider({
      start: 40,
      connect: "lower",
      range: {
        min: 0,
        max: 100
      }
    });
    $('#sliderDouble').noUiSlider({
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
};
var big_image;
materialKitDemo = {
  checkScrollForParallax: debounce(function () {
    var current_scroll = $(this).scrollTop();
    oVal = $(window).scrollTop() / 3;
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });
  }, 6) // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.

};

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"material.min.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/js/material.min.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
!function(t){function o(t){return"undefined"==typeof t.which?!0:"number"==typeof t.which&&t.which>0?!t.ctrlKey&&!t.metaKey&&!t.altKey&&8!=t.which&&9!=t.which&&13!=t.which&&16!=t.which&&17!=t.which&&20!=t.which&&27!=t.which:!1}function i(o){var i=t(o);i.prop("disabled")||i.closest(".form-group").addClass("is-focused")}function n(o){o.closest("label").hover(function(){var o=t(this).find("input");o.prop("disabled")||i(o)},function(){e(t(this).find("input"))})}function e(o){t(o).closest(".form-group").removeClass("is-focused")}t.expr[":"].notmdproc=function(o){return t(o).data("mdproc")?!1:!0},t.material={options:{validate:!0,input:!0,ripples:!0,checkbox:!0,togglebutton:!0,radio:!0,arrive:!0,autofill:!1,withRipples:[".btn:not(.btn-link)",".card-image",".navbar a:not(.withoutripple)",".footer a:not(.withoutripple)",".dropdown-menu a",".nav-tabs a:not(.withoutripple)",".withripple",".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","),inputElements:"input.form-control, textarea.form-control, select.form-control",checkboxElements:".checkbox > label > input[type=checkbox]",togglebuttonElements:".togglebutton > label > input[type=checkbox]",radioElements:".radio > label > input[type=radio]"},checkbox:function(o){var i=t(o?o:this.options.checkboxElements).filter(":notmdproc").data("mdproc",!0).after("<span class='checkbox-material'><span class='check'></span></span>");n(i)},togglebutton:function(o){var i=t(o?o:this.options.togglebuttonElements).filter(":notmdproc").data("mdproc",!0).after("<span class='toggle'></span>");n(i)},radio:function(o){var i=t(o?o:this.options.radioElements).filter(":notmdproc").data("mdproc",!0).after("<span class='circle'></span><span class='check'></span>");n(i)},input:function(o){t(o?o:this.options.inputElements).filter(":notmdproc").data("mdproc",!0).each(function(){var o=t(this),i=o.closest(".form-group");0===i.length&&(o.wrap("<div class='form-group'></div>"),i=o.closest(".form-group")),o.attr("data-hint")&&(o.after("<p class='help-block'>"+o.attr("data-hint")+"</p>"),o.removeAttr("data-hint"));var n={"input-lg":"form-group-lg","input-sm":"form-group-sm"};if(t.each(n,function(t,n){o.hasClass(t)&&(o.removeClass(t),i.addClass(n))}),o.hasClass("floating-label")){var e=o.attr("placeholder");o.attr("placeholder",null).removeClass("floating-label");var a=o.attr("id"),r="";a&&(r="for='"+a+"'"),i.addClass("label-floating"),o.after("<label "+r+"class='control-label'>"+e+"</label>")}(null===o.val()||"undefined"==o.val()||""===o.val())&&i.addClass("is-empty"),i.append("<span class='material-input'></span>"),i.find("input[type=file]").length>0&&i.addClass("is-fileinput")})},attachInputEventHandlers:function(){var n=this.options.validate;t(document).on("change",".checkbox input[type=checkbox]",function(){t(this).blur()}).on("keydown paste",".form-control",function(i){o(i)&&t(this).closest(".form-group").removeClass("is-empty")}).on("keyup change",".form-control",function(){var o=t(this),i=o.closest(".form-group"),e="undefined"==typeof o[0].checkValidity||o[0].checkValidity();""===o.val()?i.addClass("is-empty"):i.removeClass("is-empty"),n&&(e?i.removeClass("has-error"):i.addClass("has-error"))}).on("focus",".form-control, .form-group.is-fileinput",function(){i(this)}).on("blur",".form-control, .form-group.is-fileinput",function(){e(this)}).on("change",".form-group input",function(){var o=t(this);if("file"!=o.attr("type")){var i=o.closest(".form-group"),n=o.val();n?i.removeClass("is-empty"):i.addClass("is-empty")}}).on("change",".form-group.is-fileinput input[type='file']",function(){var o=t(this),i=o.closest(".form-group"),n="";t.each(this.files,function(t,o){n+=o.name+", "}),n=n.substring(0,n.length-2),n?i.removeClass("is-empty"):i.addClass("is-empty"),i.find("input.form-control[readonly]").val(n)})},ripples:function(o){t(o?o:this.options.withRipples).ripples()},autofill:function(){var o=setInterval(function(){t("input[type!=checkbox]").each(function(){var o=t(this);o.val()&&o.val()!==o.attr("value")&&o.trigger("change")})},100);setTimeout(function(){clearInterval(o)},1e4)},attachAutofillEventHandlers:function(){var o;t(document).on("focus","input",function(){var i=t(this).parents("form").find("input").not("[type=file]");o=setInterval(function(){i.each(function(){var o=t(this);o.val()!==o.attr("value")&&o.trigger("change")})},100)}).on("blur",".form-group input",function(){clearInterval(o)})},init:function(o){this.options=t.extend({},this.options,o);var i=t(document);t.fn.ripples&&this.options.ripples&&this.ripples(),this.options.input&&(this.input(),this.attachInputEventHandlers()),this.options.checkbox&&this.checkbox(),this.options.togglebutton&&this.togglebutton(),this.options.radio&&this.radio(),this.options.autofill&&(this.autofill(),this.attachAutofillEventHandlers()),document.arrive&&this.options.arrive&&(t.fn.ripples&&this.options.ripples&&i.arrive(this.options.withRipples,function(){t.material.ripples(t(this))}),this.options.input&&i.arrive(this.options.inputElements,function(){t.material.input(t(this))}),this.options.checkbox&&i.arrive(this.options.checkboxElements,function(){t.material.checkbox(t(this))}),this.options.radio&&i.arrive(this.options.radioElements,function(){t.material.radio(t(this))}),this.options.togglebutton&&i.arrive(this.options.togglebuttonElements,function(){t.material.togglebutton(t(this))}))}}}(jQuery),function(t,o,i,n){"use strict";function e(o,i){r=this,this.element=t(o),this.options=t.extend({},s,i),this._defaults=s,this._name=a,this.init()}var a="ripples",r=null,s={};e.prototype.init=function(){var i=this.element;i.on("mousedown touchstart",function(n){if(!r.isTouch()||"mousedown"!==n.type){i.find(".ripple-container").length||i.append('<div class="ripple-container"></div>');var e=i.children(".ripple-container"),a=r.getRelY(e,n),s=r.getRelX(e,n);if(a||s){var l=r.getRipplesColor(i),p=t("<div></div>");p.addClass("ripple").css({left:s,top:a,"background-color":l}),e.append(p),function(){return o.getComputedStyle(p[0]).opacity}(),r.rippleOn(i,p),setTimeout(function(){r.rippleEnd(p)},500),i.on("mouseup mouseleave touchend",function(){p.data("mousedown","off"),"off"===p.data("animating")&&r.rippleOut(p)})}}})},e.prototype.getNewSize=function(t,o){return Math.max(t.outerWidth(),t.outerHeight())/o.outerWidth()*2.5},e.prototype.getRelX=function(t,o){var i=t.offset();return r.isTouch()?(o=o.originalEvent,1===o.touches.length?o.touches[0].pageX-i.left:!1):o.pageX-i.left},e.prototype.getRelY=function(t,o){var i=t.offset();return r.isTouch()?(o=o.originalEvent,1===o.touches.length?o.touches[0].pageY-i.top:!1):o.pageY-i.top},e.prototype.getRipplesColor=function(t){var i=t.data("ripple-color")?t.data("ripple-color"):o.getComputedStyle(t[0]).color;return i},e.prototype.hasTransitionSupport=function(){var t=i.body||i.documentElement,o=t.style,e=o.transition!==n||o.WebkitTransition!==n||o.MozTransition!==n||o.MsTransition!==n||o.OTransition!==n;return e},e.prototype.isTouch=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e.prototype.rippleEnd=function(t){t.data("animating","off"),"off"===t.data("mousedown")&&r.rippleOut(t)},e.prototype.rippleOut=function(t){t.off(),r.hasTransitionSupport()?t.addClass("ripple-out"):t.animate({opacity:0},100,function(){t.trigger("transitionend")}),t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){t.remove()})},e.prototype.rippleOn=function(t,o){var i=r.getNewSize(t,o);r.hasTransitionSupport()?o.css({"-ms-transform":"scale("+i+")","-moz-transform":"scale("+i+")","-webkit-transform":"scale("+i+")",transform:"scale("+i+")"}).addClass("ripple-on").data("animating","on").data("mousedown","on"):o.animate({width:2*Math.max(t.outerWidth(),t.outerHeight()),height:2*Math.max(t.outerWidth(),t.outerHeight()),"margin-left":-1*Math.max(t.outerWidth(),t.outerHeight()),"margin-top":-1*Math.max(t.outerWidth(),t.outerHeight()),opacity:.2},500,function(){o.trigger("transitionend")})},t.fn.ripples=function(o){return this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new e(this,o))})}}(jQuery,window,document);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
module.watch(require("./main.html"));
Meteor.startup(function () {
  GoogleMaps.load({
    v: '3',
    key: 'AIzaSyCLiYUg8zAs2vE0oULXoBUbf0WiF0KZ2B4',
    libraries: 'geometry,places'
  });
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
    offset: 0,
    // in px - will be added to first alert (bottom or top - depends of the position in config)
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
});
Template.menu.onRendered(function () {
  setTimeout(function () {
    /**
     * sidebarEffects.js v1.0.0
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     * 
     * Copyright 2013, Codrops
     * http://www.codrops.com
     */
    var SidebarMenuEffects = function () {
      function hasParentClass(e, classname) {
        if (e === document) return false;

        if (classie.has(e, classname)) {
          return true;
        }

        return e.parentNode && hasParentClass(e.parentNode, classname);
      } // http://coveroverflow.com/a/11381730/989439


      function mobilecheck() {
        var check = false;

        (function (a) {
          if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);

        return check;
      }

      function init() {
        var container = document.getElementById('st-container'),
            buttons = Array.prototype.slice.call(document.querySelectorAll('#st-trigger-effects > .menu-open')),
            // event type (if mobile use touch events)
        eventtype = mobilecheck() ? 'touchstart' : 'click',
            resetMenu = function () {
          classie.remove(container, 'st-menu-open');
        },
            bodyClickFn = function (evt) {
          if (!hasParentClass(evt.target, 'st-menu')) {
            resetMenu();
            document.removeEventListener(eventtype, bodyClickFn);
          }
        };

        buttons.forEach(function (el, i) {
          var effect = el.getAttribute('data-effect');
          el.addEventListener(eventtype, function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            container.className = 'st-container'; // clear

            classie.add(container, effect);
            setTimeout(function () {
              classie.add(container, 'st-menu-open');
            }, 25);
            document.addEventListener(eventtype, bodyClickFn);
          });
        });
      }

      init();
    }();
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


    (function (window) {
      'use strict'; // class helper functions from bonzo https://github.com/ded/bonzo

      function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
      } // classList support for class management
      // altho to be fair, the api sucks because it won't accept multiple classes at once


      var hasClass, addClass, removeClass;

      if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
          return elem.classList.contains(c);
        };

        addClass = function (elem, c) {
          elem.classList.add(c);
        };

        removeClass = function (elem, c) {
          elem.classList.remove(c);
        };
      } else {
        hasClass = function (elem, c) {
          return classReg(c).test(elem.className);
        };

        addClass = function (elem, c) {
          if (!hasClass(elem, c)) {
            elem.className = elem.className + ' ' + c;
          }
        };

        removeClass = function (elem, c) {
          elem.className = elem.className.replace(classReg(c), ' ');
        };
      }

      function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
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
      }; // transport

      if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
      } else {
        // browser global
        window.classie = classie;
      }
    })(window);

    $(document).ready(function () {
      $(".menu-close").click(function () {
        $("#st-container").removeClass("st-menu-open");
      });
    }); //paymnet tab

    $(document).ready(function () {
      $('#mypayment').carousel({
        interval: false
      });
      var clickEvent = true;
      $('#mypayment').on('click', '.nav a', function () {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
      }).on('slid.bs.carousel', function (e) {
        if (!clickEvent) {
          var count = $('.nav').children().length - 1;
          var current = $('.nav li.active');
          current.removeClass('active').next().addClass('active');
          var id = parseInt(current.data('slide-to'));

          if (count == id) {
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
  'click #user_sign_out': function (e) {
    e.preventDefault();
    new Confirmation({
      message: "Are you sure you want to logout?",
      title: "Confirmation",
      cancelText: "Cancel",
      okText: "Ok",
      success: true,
      // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"

    }, function (ok) {
      if (ok) {
        Meteor.logout(function (err, res) {
          if (err) {
            sAlert.error(err.reason);
          } else {
            Router.go("/login");
            sAlert.success("You have been successfully logged out!!!!");
          }
        });
      } else {
        if ($(".pc-dimmer.pc-leave").length > 0) $(".pc-dimmer.pc-leave").remove();
        if ($(".pc-container.pc-enter").length > 0) $(".pc-container.pc-enter").remove();
      }
    });
  },
  'click #change_password': function (e) {
    e.preventDefault();
    Router.go("/changepassword");
  }
});
Template.menu.helpers({
  current_user_name: function () {
    return Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;
  },
  userImage: function () {
    if (typeof Meteor.user() !== "undefined") {
      if (typeof Meteor.user().profile !== "undefined") {
        if (typeof Meteor.user().profile.profileImage !== "undefined") {
          if (Meteor.user().profile.profileImage == "") {
            return "/images/user-thumbnail.jpg";
          } else {
            return Meteor.user().profile.profileImage;
          }
        } else {
          return "/images/user-thumbnail.jpg";
        }
      } else {
        return "/images/user-thumbnail.jpg";
      }
    } else {
      return "/images/user-thumbnail.jpg";
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"banner.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/banner.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
banner = new Mongo.Collection('banner');
var Schemas = {};
Schemas.bannerSchema = new SimpleSchema({
  bannerImage: {
    type: String,
    optional: false,
    label: "Banner Image"
  },
  textOne: {
    type: String,
    optional: true,
    label: "Text 1"
  },
  textTwo: {
    type: String,
    optional: true,
    label: "Text 2"
  },
  textThree: {
    type: String,
    optional: true,
    label: "Text 3"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
banner.attachSchema(Schemas.bannerSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bottleTypes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/bottleTypes.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
bottleTypes = new Mongo.Collection('bottleTypes');
var Schemas = {};
Schemas.bottleTypesSchema = new SimpleSchema({
  BottletypeName: {
    type: String,
    optional: false,
    label: "Bottle Type Name"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
bottleTypes.attachSchema(Schemas.bottleTypesSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"brandName.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/brandName.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
brands = new Mongo.Collection('brands');
var Schemas = {};
Schemas.brandsSchema = new SimpleSchema({
  brandName: {
    type: String,
    optional: false,
    label: "Brand Name"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
brands.attachSchema(Schemas.brandsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/cart.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
carts = new Mongo.Collection('carts');
var Schemas = {};
Schemas.cartsSchema = new SimpleSchema({
  productId: {
    type: String,
    optional: false,
    label: "Product Id"
  },
  productQuantity: {
    type: String,
    optional: true,
    label: "Product Quantity"
  },
  totalPrice: {
    type: Number,
    optional: true,
    label: "Total Price"
  },
  userId: {
    type: String,
    optional: false,
    label: "User Id"
  },
  storeId: {
    type: String,
    optional: false,
    label: "Store Id"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
carts.attachSchema(Schemas.cartsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"category.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/category.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
categories = new Mongo.Collection('categories');
var Schemas = {};
Schemas.categoriesSchema = new SimpleSchema({
  categoryType: {
    type: String,
    optional: false,
    label: "Category Type"
  },
  isActive: {
    type: Boolean,
    label: "Is Active",
    optional: false
  },
  categoryImage: {
    type: String,
    optional: false,
    label: "Category Image",
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
categories.attachSchema(Schemas.categoriesSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"checkoutPagefirst.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/checkoutPagefirst.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
checkoutPagefirst = new Mongo.Collection('checkoutPagefirst');
var Schemas = {};
Schemas.checkoutPagefirstSchema = new SimpleSchema({
  firstName: {
    type: String,
    optional: false,
    label: "First Name"
  },
  lastName: {
    type: String,
    optional: false,
    label: "Last Name"
  },
  emailAddress: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: false,
    label: "Email Address"
  },
  phoneNumber: {
    type: String,
    optional: false,
    label: "Phone Number"
  },
  userId: {
    type: String,
    optional: false,
    label: "User Id"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
checkoutPagefirst.attachSchema(Schemas.checkoutPagefirstSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cms.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/cms.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
cms = new Mongo.Collection('cms');
var Schemas = {};
Schemas.cmsSchema = new SimpleSchema({
  pageCode: {
    type: String,
    optional: false,
    label: "Page Code"
  },
  pageTitle: {
    type: String,
    label: "Page Title",
    optional: false
  },
  pageContent: {
    type: String,
    label: "Page Content",
    optional: false,
    autoform: {
      afFieldInput: {
        type: 'summernote'
      }
    }
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
cms.attachSchema(Schemas.cmsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"country.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/country.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
countries = new Mongo.Collection('countries');
var Schemas = {};
Schemas.countriesSchema = new SimpleSchema({
  countryName: {
    type: String,
    optional: false,
    label: "Country Name"
  },
  countryCode: {
    type: String,
    optional: false,
    label: "Country Code"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
countries.attachSchema(Schemas.countriesSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"coupons.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/coupons.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
coupons = new Mongo.Collection('coupons');
var Schemas = {};
Schemas.couponsSchema = new SimpleSchema({
  couponName: {
    type: String,
    optional: false,
    label: "Coupon Name"
  },
  description: {
    type: String,
    optional: false,
    label: "Description"
  },
  couponType: {
    type: String,
    optional: true,
    autoform: {
      type: 'select-radio-inline',
      options: function () {
        return [{
          label: "Percent",
          value: "percent"
        }, {
          label: "Amount",
          value: "amount"
        }];
      }
    }
  },
  validTo: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  },
  validFrom: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  },
  promocode: {
    type: String,
    optional: false,
    label: "PromoCode"
  },
  discount: {
    type: Number,
    optional: false,
    label: "Discount"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
coupons.attachSchema(Schemas.couponsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"faqs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/faqs.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
faqs = new Mongo.Collection('faqs');
var Schemas = {};
Schemas.faqsSchema = new SimpleSchema({
  question: {
    type: String,
    optional: false,
    label: "Question"
  },
  answer: {
    type: String,
    optional: false,
    label: "Answer"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
faqs.attachSchema(Schemas.faqsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"favoriteProduct.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/favoriteProduct.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
favProducts = new Mongo.Collection('favProducts');
var Schemas = {};
Schemas.favProductsSchema = new SimpleSchema({
  productId: {
    type: String,
    optional: false,
    label: "Product Id"
  },
  userId: {
    type: String,
    optional: false,
    label: "User Id"
  },
  status: {
    type: Boolean,
    optional: false,
    label: "Fav Status"
  },
  storeId: {
    type: String,
    optional: false,
    label: "Store Id"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
favProducts.attachSchema(Schemas.favProductsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"howappworks.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/howappworks.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
howappworks = new Mongo.Collection('howappworks');
var Schemas = {};
Schemas.howappworksSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false,
    label: "Title"
  },
  content: {
    type: String,
    label: "Content",
    optional: false,
    autoform: {
      type: 'textarea'
    }
  },
  appImage: {
    type: String,
    optional: false,
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
howappworks.attachSchema(Schemas.howappworksSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"order.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/order.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
contactDetailsSchema = new SimpleSchema({
  firstName: {
    type: String,
    optional: true,
    label: "First Name"
  },
  lastName: {
    type: String,
    optional: true,
    label: "Last Name"
  }
});
orders = new Mongo.Collection('orders');
var Schemas = {};
Schemas.ordersSchema = new SimpleSchema({
  orderNumber: {
    type: Number,
    optional: true,
    label: "Order Number",
    defaultValue: 1
  },
  userId: {
    type: String,
    optional: true,
    label: "User Id"
  },
  userName: {
    type: String,
    optional: true,
    label: "User Id"
  },
  emailAddress: {
    type: String,
    label: "Email Address",
    regEx: SimpleSchema.RegEx.Email,
    optional: true,
    autoform: {
      type: 'email'
    }
  },
  phoneNumber: {
    type: Number,
    label: "Phone Number",
    optional: true
  },
  productIds: {
    type: Array,
    label: "Products",
    optional: true
  },
  'productIds.$': {
    type: Object,
    label: "Product",
    optional: true
  },
  'productIds.$.id': {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      type: 'select',
      options: function () {
        Meteor.subscribe('getProducts');
        return products.find({
          storeName: Session.get("StoreId")
        }).map(function (c) {
          return {
            label: c.productName,
            value: c._id
          };
        });
      }
    }
  },
  'productIds.$.quantity': {
    type: String,
    label: "Quantity",
    optional: true
  },
  total: {
    type: Number,
    label: "Total",
    optional: true
  },
  discount: {
    type: Number,
    label: "Discount",
    optional: true
  },
  tax: {
    type: Number,
    label: "Tax",
    optional: true
  },
  grossTotal: {
    type: Number,
    label: "Gross Total",
    optional: true
  },
  status: {
    type: String,
    label: "Status",
    optional: true
  },
  paymentStatus: {
    type: String,
    label: "Status",
    optional: true
  },
  barcode: {
    type: String,
    label: "Barcode",
    optional: true
  },
  receiveTextMessages: {
    type: Boolean,
    label: "Receive Text Messages",
    defaultValue: false,
    optional: true
  },
  contactDetails: {
    type: contactDetailsSchema,
    optional: true
  },
  barcodeOrderValue: {
    type: String,
    label: "Barcode Order Value",
    optional: true,
    defaultValue: "1"
  },
  storeId: {
    type: String,
    optional: false,
    label: "Store Id"
  },
  OrderType: {
    type: String,
    optional: true,
    label: "Order Type"
  },
  couponCode: {
    type: String,
    optional: true,
    label: "Coupon Code"
  },
  createdAt: {
    type: Date,
    optional: true,
    defaultValue: new Date()
  }
});
orders.attachSchema(Schemas.ordersSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"paymentDetails.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/paymentDetails.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
paymentDetails = new Mongo.Collection('paymentDetails');
var Schemas = {};
Schemas.paymentDetailsSchema = new SimpleSchema({
  CardNumber: {
    type: String,
    optional: false,
    label: "Card Number"
  },
  NameOnCard: {
    type: String,
    optional: false,
    label: "Name on Card"
  },
  expirationMonth: {
    type: Number,
    optional: false,
    label: "Expiration Month"
  },
  expirationYear: {
    type: Number,
    optional: false,
    label: "Expiration Year"
  },
  saveCardDetail: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    label: "Save My Card Details"
  },
  paymentType: {
    type: String,
    optional: false,
    label: "Payment Type"
  },
  cardType: {
    type: String,
    optional: false,
    label: "Card Type"
  },
  orderId: {
    type: String
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
paymentDetails.attachSchema(Schemas.paymentDetailsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"payments.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/payments.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
payments = new Mongo.Collection('payments');
var Schemas = {};
Schemas.paymentsSchema = new SimpleSchema({
  paymentId: {
    type: String,
    optional: false
  },
  requestId: {
    type: String,
    optional: false
  },
  amount: {
    type: String,
    optional: false
  },
  fullResponse: {
    type: String,
    optional: false
  },
  status: {
    type: String,
    optional: false
  },
  isRefunded: {
    type: Boolean,
    optional: true
  },
  refundResponse: {
    type: String,
    optional: true
  },
  paymentMethod: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
payments.attachSchema(Schemas.paymentsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"poster.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/poster.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
posters = new Mongo.Collection('posters');
var Schemas = {};
Schemas.postersSchema = new SimpleSchema({
  posterImage: {
    type: String,
    optional: false,
    label: "Poster Image",
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
posters.attachSchema(Schemas.postersSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"product.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/product.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
products = new Mongo.Collection('products');
var Schemas = {};
Schemas.productsSchema = new SimpleSchema({
  productId: {
    type: Number,
    optional: false,
    label: "Product Id"
  },
  productName: {
    type: String,
    optional: false,
    label: "Product Name"
  },
  price: {
    type: String,
    label: "Price",
    optional: false,
    autoform: {
      type: 'number'
    }
  },
  sku: {
    type: String,
    label: "SKU",
    optional: false
  },
  quantity: {
    type: String,
    label: "Quantity",
    optional: false,
    autoform: {
      type: 'number'
    }
  },
  categoryType: {
    type: String,
    label: "Category Type",
    optional: false,
    autoform: {
      type: 'select',
      options: function () {
        Meteor.subscribe('getCategoryTypes');
        return categories.find({}).map(function (c) {
          return {
            label: c.categoryType,
            value: c._id
          };
        });
      }
    }
  },
  brandName: {
    type: String,
    label: "Brand Name",
    optional: false,
    autoform: {
      type: 'select',
      options: function () {
        Meteor.subscribe('getBrandNames');
        return brands.find({}).map(function (c) {
          return {
            label: c.brandName,
            value: c._id
          };
        });
      }
    }
  },
  productType: {
    type: String,
    label: "Product Type",
    optional: false,
    autoform: {
      type: 'select',
      options: function () {
        Meteor.subscribe('getProductTypes');
        return productTypes.find({}).map(function (c) {
          return {
            label: c.typeName,
            value: c._id
          };
        });
      }
    }
  },
  storeName: {
    type: String,
    label: "Store Name",
    optional: false,
    autoform: {
      type: 'select',
      options: function () {
        Meteor.subscribe('getStoreNames');
        return stores.find({}).map(function (c) {
          return {
            label: c.storeName,
            value: c._id
          };
        });
      }
    }
  },
  bottleTypes: {
    type: String,
    label: "Bottle Types",
    optional: false,
    autoform: {
      type: 'select',
      options: function () {
        Meteor.subscribe('getBottleTypes');
        return bottleTypes.find({}).map(function (c) {
          return {
            label: c.BottletypeName,
            value: c._id
          };
        });
      }
    }
  },
  details: {
    type: String,
    label: "Details",
    optional: false,
    autoform: {
      type: 'textarea'
    }
  },
  productId: {
    type: String,
    max: 20,
    autoform: {
      type: 'hidden'
    }
  },
  productImage: {
    type: String,
    optional: false,
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  },
  adBanner: {
    type: Boolean,
    optional: true,
    defaultValue: true
  },
  productsAvailable: {
    type: Number,
    optional: true,
    defaultValue: 0,
    label: "Products Available",
    autoform: {
      type: 'number'
    }
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
products.attachSchema(Schemas.productsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"productTypes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/productTypes.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
productTypes = new Mongo.Collection('productTypes');
var Schemas = {};
Schemas.productTypesSchema = new SimpleSchema({
  typeName: {
    type: String,
    optional: false,
    label: "Type Name"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
productTypes.attachSchema(Schemas.productTypesSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reviews.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/reviews.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
reviews = new Mongo.Collection('reviews');
var Schemas = {};
Schemas.reviewsSchema = new SimpleSchema({
  reviewerName: {
    type: String,
    optional: false,
    label: "User Name"
  },
  summary: {
    type: String,
    optional: false,
    label: "Summary"
  },
  WriteReview: {
    type: String,
    optional: false,
    label: "Write Your Review",
    autoform: {
      type: 'textarea'
    }
  },
  productId: {
    type: String,
    optional: false,
    label: "Product Id"
  },
  reviewRating: {
    type: String,
    optional: false,
    label: "Rating"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
reviews.attachSchema(Schemas.reviewsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/settings.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
settings = new Mongo.Collection('settings');
var Schemas = {};
Schemas.settingsSchema = new SimpleSchema({
  settingName: {
    type: String,
    optional: false,
    label: "Setting Name"
  },
  settingValue: {
    type: String,
    optional: false,
    label: "Setting Value"
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
settings.attachSchema(Schemas.settingsSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"store.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/store.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
stores = new Mongo.Collection('stores');
var Schemas = {};
Schemas.storesSchema = new SimpleSchema({
  storeName: {
    type: String,
    optional: false,
    label: "Store Name"
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
    type: Number,
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
  storeOpeningTime: {
    label: "Store Opening Time",
    type: String,
    optional: false
  },
  storeClosingTime: {
    label: "Store Closing time",
    type: String,
    optional: false
  },
  address: {
    optional: false,
    label: "Address",
    type: String,
    autoform: {
      type: 'textarea'
    }
  },
  createdAt: {
    type: Date,
    optional: false,
    defaultValue: new Date()
  }
});
stores.attachSchema(Schemas.storesSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/user.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("simpl-schema"), {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 0);
SimpleSchema.extendOptions(['autoform']);
ProfileSchema = new SimpleSchema({
  firstName: {
    type: String,
    optional: false
  },
  lastName: {
    type: String,
    optional: true
  },
  country: {
    type: String,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  street: {
    type: String,
    optional: true
  },
  city: {
    type: String,
    optional: true
  },
  state: {
    type: String,
    optional: true
  },
  zip: {
    type: String,
    optional: true
  },
  isActive: {
    type: Boolean,
    optional: true
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
  phoneNumber: {
    type: Number,
    optional: true,
    label: "Phone Number"
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
    type: ProfileSchema
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
Meteor.users.after.update(function (userId, doc) {
  if (doc.emails[0].verified == true && doc.profile.isActive == false) {
    Meteor.users.update({
      "_id": doc._id
    }, {
      $set: {
        "profile.isActive": true
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// routes.js                                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Router.route('/', function () {
  if (Meteor.isCordova) {
    var isFirst = localStorage.getItem("newlyInstalled");
    Meteor.subscribe('getAppContents');

    if (isFirst == null) {
      var renderTemplate = "howappworks";
    } else if (isFirst == "No") {
      var renderTemplate = "login";
    } else if (isFirst == "Yes") {
      var renderTemplate = "howappworks";
    }
  } else {
    var renderTemplate = "login";
  }

  this.render(renderTemplate, {
    data: function () {}
  });
});
Router.route('/login', {
  name: 'login'
});
Router.route('/signup', {
  name: 'register'
});
Router.route('/forgotpassword', {
  name: 'forgot'
});
Router.route('/settings', {
  name: 'settings'
});
Router.route('/dashboard', {
  name: 'dashboard'
});
Router.route('/changepassword', {
  name: 'changepassword'
});
Router.route('/cart/:_id?', {
  name: 'cart',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/howAreWeDoing', {
  name: 'howAreWeDoing'
});
Router.route('/topPickProducts', {
  name: 'topPickProducts'
});
Router.route('/notification', {
  name: 'notification'
});
Router.route('/favorites', {
  name: 'favorites'
});
Router.route('/howappworks', {
  name: 'howappworks'
});
Router.route('/orderHistory', {
  name: 'orderHistory'
});
Router.route('/coupons', {
  name: 'coupons'
});
Router.route('/thanksforshopping', {
  name: 'thanksforshopping'
});
Router.route('/pickingup', {
  name: 'pickingup'
});
Router.route('/ratings/:_id?', {
  name: 'ratings',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/termsofservice', {
  name: 'termsofservice'
});
Router.route('/profiles', {
  name: 'profiles'
});
Router.route('/accountdetails', {
  name: 'accountdetails'
});
Router.route('/products', {
  name: 'products'
});
Router.route('/storePage', {
  name: 'storePage'
});
Router.route('/storePage/map', {
  name: "storesmap"
});
Router.route('/checkoutPagefirst/:_id?', {
  name: 'checkoutPagefirst',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/checkoutPageSecond/:_id?', {
  name: 'checkoutPageSecond',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/checkoutPagethird/:_id?', {
  name: 'checkoutPagethird',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/checkoutPageforth/:_id?', {
  name: 'checkoutPageforth',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/checkoutPagefifth/:_id?', {
  name: 'checkoutPagefifth',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/productDetails/:_id?', {
  name: 'productDetails',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/receiptPage/:_id?', {
  name: 'receiptPage',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/successPage/:_id?', {
  name: 'successPage',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/storeSuccessPage/:_id?', {
  name: 'storeSuccessPage',
  data: function () {
    if (this.params._id) return {
      id: this.params._id
    };
  }
});
Router.route('/faq', {
  name: 'faq'
});
Router.onBeforeAction(function () {
  var routeName = Router.current().route.path();

  if (_.include(['/login', '/signup', '/forgotpassword', '/', '/howappworks', '/termsofservice'], routeName)) {
    if (Meteor.userId() != null) {
      if (typeof Meteor.user() !== "undefined") if (Meteor.user().profile.isActive) {
        if (routeName == "/howappworks" || routeName == "/termsofservice") {
          this.next();
        } else {
          Router.go('/dashboard');
          this.next();
        }
      } else {
        this.next();
      }
    } else {
      this.next();
    }
  } else {
    if (Meteor.userId() == null) {
      Router.go('/login');
      this.next();
    } else {
      this.next();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("/client/FAQs/template.template.js");
require("/client/accountdetails/template.template.js");
require("/client/cart/template.template.js");
require("/client/changepassword/template.template.js");
require("/client/checkoutPage1/template.template.js");
require("/client/checkoutPage2/template.template.js");
require("/client/checkoutPage3/template.template.js");
require("/client/checkoutPage4/template.template.js");
require("/client/checkoutPage5/template.template.js");
require("/client/coupons/template.template.js");
require("/client/dashboard/template.template.js");
require("/client/favorites/template.template.js");
require("/client/forgot/template.template.js");
require("/client/howAreWeDoing/template.template.js");
require("/client/howappworks/template.template.js");
require("/client/login/template.template.js");
require("/client/notifications/template.template.js");
require("/client/orderHistory/template.template.js");
require("/client/pickingup/template.template.js");
require("/client/productDetails/template.template.js");
require("/client/products/template.template.js");
require("/client/profiles/template.template.js");
require("/client/ratings/template.template.js");
require("/client/receipt/template.template.js");
require("/client/register/template.template.js");
require("/client/searchProducts/template.template.js");
require("/client/settings/template.template.js");
require("/client/signup/template.template.js");
require("/client/storeSuccessPage/template.template.js");
require("/client/storemap/template.template.js");
require("/client/stores/template.template.js");
require("/client/successPage/template.template.js");
require("/client/termsofservice/template.template.js");
require("/client/thanksforshopping/template.template.js");
require("/client/topPickProducts/template.template.js");
require("/client/template.main.js");
require("/client/lib/js/material-kit.js");
require("/client/lib/js/material.min.js");
require("/client/FAQs/script.js");
require("/client/accountdetails/script.js");
require("/client/cart/script.js");
require("/client/changepassword/script.js");
require("/client/checkoutPage1/script.js");
require("/client/checkoutPage2/script.js");
require("/client/checkoutPage3/script.js");
require("/client/checkoutPage4/script.js");
require("/client/checkoutPage5/script.js");
require("/client/coupons/script.js");
require("/client/dashboard/script.js");
require("/client/favorites/script.js");
require("/client/forgot/script.js");
require("/client/howAreWeDoing/script.js");
require("/client/howappworks/script.js");
require("/client/login/script.js");
require("/client/notifications/script.js");
require("/client/orderHistory/script.js");
require("/client/pickingup/script.js");
require("/client/productDetails/script.js");
require("/client/products/script.js");
require("/client/profiles/script.js");
require("/client/ratings/script.js");
require("/client/receipt/script.js");
require("/client/register/script.js");
require("/client/searchProducts/script.js");
require("/client/settings/script.js");
require("/client/signup/script.js");
require("/client/storeSuccessPage/script.js");
require("/client/storemap/script.js");
require("/client/stores/scripts.js");
require("/client/successPage/script.js");
require("/client/termsofservice/script.js");
require("/client/thanksforshopping/script.js");
require("/client/topPickProducts/script.js");
require("/collections/banner.js");
require("/collections/bottleTypes.js");
require("/collections/brandName.js");
require("/collections/cart.js");
require("/collections/category.js");
require("/collections/checkoutPagefirst.js");
require("/collections/cms.js");
require("/collections/country.js");
require("/collections/coupons.js");
require("/collections/faqs.js");
require("/collections/favoriteProduct.js");
require("/collections/howappworks.js");
require("/collections/order.js");
require("/collections/paymentDetails.js");
require("/collections/payments.js");
require("/collections/poster.js");
require("/collections/product.js");
require("/collections/productTypes.js");
require("/collections/reviews.js");
require("/collections/settings.js");
require("/collections/store.js");
require("/collections/user.js");
require("/routes.js");
require("/client/main.js");