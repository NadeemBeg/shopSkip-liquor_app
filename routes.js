Router.route('/', function() {
  if(Meteor.isCordova)
  {
    var isFirst = localStorage.getItem("newlyInstalled");
    Meteor.subscribe('getAppContents');
    if(isFirst == null)
    {
      console.log("1");
      var renderTemplate = "howappworks";
      Session.set("currentPageTitle","How App Works");
    }
    else if(isFirst == "No")
    {
      console.log("2");
      var renderTemplate = "login";
    }
    else if(isFirst == "Yes")
    {
      console.log("3");
      var renderTemplate = "howappworks";
      Session.set("currentPageTitle","How App Works");
    }
  }
  else
  {
    // var renderTemplate = "login";
    var isFirst = localStorage.getItem("newlyInstalled");
    Meteor.subscribe('getAppContents');
    if(isFirst == null)
    {
      console.log("4");
      var renderTemplate = "howappworks";
      Session.set("currentPageTitle","How App Works");
    }
    else if(isFirst == "No")
    {
      console.log("5");
      var renderTemplate = "login";
    }
    else if(isFirst == "Yes")
    {
      console.log("6");
      var renderTemplate = "howappworks";
      Session.set("currentPageTitle","How App Works");
    }
  }
  this.render(renderTemplate, {
      data: function() {}
  });
  console.log(renderTemplate);
});
Router.route('/login', {
  name: 'login'
});
Router.route('/full-menu', {
  name: 'fullMenu'
});
Router.route('/search-category', {
  name: 'searchCategory'
});
Router.route('/search-subcategory/:_id', {
  name: 'searchSubCategory',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/search-subcategoryproducts/:_id/:_id1', {
  name: 'searchSubCategoryProducts',
  data: function () {
    if(this.params._id && this.params._id1)
      return {id:this.params._id, id1:this.params._id1};
  }
});
Router.route('/signup', {
  name: 'signup'
});
Router.route('/signup-step2', {
  name: 'signupstep2'
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
Router.route('/recipesList', {
  name: 'recipesList'
});
Router.route('/cart/:_id?',{
  name:'cart',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/bannerproducts/:_id',{
  name:'bannerProducts',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/howAreWeDoing', {
  name: 'howAreWeDoing'
});
Router.route('/topPickProducts', {
  name: 'topPickProducts'
});
Router.route('/notification/:_id?', {
  name: 'notification',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/favorites', {
  name: 'favorites'
});

Router.route('/termsandcondition/:_id?', {
  name: 'termscondition',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
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
Router.route('/ratings/:_id?',{
  name:'ratings',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});

Router.route('/ratingsReceipes/:_id?',{
  name:'ratingsReceipes',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/receiptPage/:_id?',{
  name:'receiptPage',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/trackOrder/:_id?',{
  name:'trackOrder',
  data: function () {
    if(this.params._id){
      return {
        id: this.params._id
      };
    }
  }
});
Router.route('/termsofservice', {
  name: 'termsofservice'
});
Router.route('/privacypolicy', {
  name: 'privacyPolicySection'
});
Router.route('/interestbasedads', {
  name: 'interestBaseAds'
});
Router.route('/returnpolicy', {
  name: 'returnpolicy'
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
Router.route('/checkoutPagefirst/:_id?',{
  name:'checkoutPagefirst',
  data: function () {
    if(this.params._id){
      // Session.set()
      return {id:this.params._id};
    }
  }
});

Router.route('/delivery-checkout-step1/:_id?',{
  name:'deliveryStep1',
  data: function () {
    if(this.params._id){
      // Session.set()
      return {id:this.params._id};
    }
  }
});

Router.route('/checkoutPageSecond/:_id?',{
  name:'checkoutPageSecond',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});

Router.route('/checkoutPagethird/:_id?',{
  name:'checkoutPagethird',
  data: function () {
    if(this.params._id)
    {
      Session.set("ORDERID", this.params._id);
      return {id:this.params._id};
    }
  }
});

Router.route('/checkoutPageforth/:_id?',{
  name:'checkoutPageforth',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});

Router.route('/checkoutPagefifth/:_id?',{
  name:'checkoutPagefifth',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});

Router.route('/productDetails/:_id?',{
  name:'productDetails',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});


Router.route('/receipePage/:_id?',{
  name:'receipePage',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});


Router.route('/successPage/:_id?',{
  name:'successPage',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});

Router.route('/storeSuccessPage/:_id?',{
  name:'storeSuccessPage',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});

Router.route('/favoriteReceipes', {
  name: 'favoriteReceipes'
});

Router.route('/faq', {
  name: 'faq'
});

//my Choice Product 
Router.route('/myChoiceProduct/:_id?/ProductsId/:_id2?', {
  name: 'myChoiceProduct',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/chooseProductDetails/:_id?',{
  name:'chooseProductDetails',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/posterproducts/:_id?',{
  name:'posterProducts',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/searchResult/:_id',{
  name:'searchResult',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/advSliderProducts/:_id',{
  name:'advSliderProducts',
  data: function () {
    if(this.params._id)
      return {id:this.params._id};
  }
});
Router.route('/liquorProduct', {
  name: 'spirituousProduct'
});

/*Router.onBeforeAction(function() {
    var routeName = Router.current().route.path();
    //console.log(routeName);
    if (_.include(['/login', '/signup', '/signup-step2', '/forgotpassword', '/', '/howappworks' ,'/termsofservice','/termsandcondition',  ], routeName)) {
     if (Meteor.userId() != null)
      {
          if (Meteor.user().profile.isActive)
          {
            
            if(!Meteor.user().profile.termsofservice){

                          
                Router.go('/termsandcondition/' + Meteor.userId());
                this.next();

            }


            else if(routeName == "/howappworks" || routeName == "/termsofservice")
            {
              //console.log("6");
              this.next();
            }
            else
            {
              
              if(Session.get("orderHistoryURL") != null)
              {
                Router.go(Session.get("orderHistoryURL"));
                this.next();
              }
              else
              {
                    Router.go('/dashboard');
                    this.next();
                 // }
              }
            }
          } 
          else 
          {
            
            this.next();
          }

      } 
      else
      {
        
        this.next();
      }
    }
    else 
    {
      if (Meteor.userId() == null)
      {
        Session.set("orderHistoryURL", window.location.href);
        Router.go('/login');
        this.next();
      } else {
        if(!Meteor.user().profile.termsofservice){

              
                Router.go('/termsandcondition/' + Meteor.userId());
                this.next();

            }
            else
            {
              this.next();
            }
        
      }
    }
});*/





//old code


Router.onBeforeAction(function() {
    var routeName = Router.current().route.path();
    if (_.include(['/login', '/signup', '/signup-step2', '/forgotpassword', '/', '/howappworks' ,'/termsofservice','/termsandcondition'], routeName)) {
      if (Meteor.userId() != null)
      {
        if (typeof Meteor.user() !== "undefined")
          if (Meteor.user().profile.isActive)
          {
            if(routeName == "/howappworks" || routeName == "/termsofservice")
            {
              this.next();
            }
            else
            {
              if(Session.get("orderHistoryURL") != null)
              {
                Router.go(Session.get("orderHistoryURL"));
                this.next();
              }
              else
              {
                console.log("testtesttstetedsfdsfdsreew");
                Router.go('/dashboard');
                this.next();
              }
            }
          } 
          else 
          {
            this.next();
          }

      } 
      else
      {
        this.next();
      }
    }
    else 
    {
      if (Meteor.userId() == null)
      {
        Session.set("orderHistoryURL", window.location.href);
        Router.go('/login');
        this.next();
      } else {
        this.next();
      }
    }
});
