
var starter = angular.module('starter', ['ionic', 'ngResource', 'ngCookies', 'starter.controllers', 'starter.services']);


starter.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider

        // setup an abstract state for the tabs directive

          .state('intro', {
            url: '/',
            templateUrl: 'intro.html',
            controller: 'IntroCtrl'
          })

          .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
          })

              .state('forgotpassword', {
            url: '/forget',
            templateUrl: 'templates/forgot-password.html',
            controller: 'GetPasswordCtrl'
          })

          .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl'
          })


          .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
          })

        // Each tab has its own nav history stack:

          .state('tab.myTrips', {
            url: '/myTrips',
            views: {
              'tab-myTrips': {
                templateUrl: 'templates/tab-myTrips.html',
                controller: 'MyTripCtrl'
              }
            },
            resolve : {


              MyTripsService : 'MyTripsService',

              myTripsPromise : function(MyTripsService, $q){

                var deferred = $q.defer();
                MyTripsService.all().$promise.then(
                    function(data){
                      deferred.resolve(data);
                    },
                    function(){
                      console.log('MyTripsService rejected');
                    }
                );
                return deferred.promise;

              }
            }
          })

          .state('tab.myTripDetail', {
            url: '/myTrips/:tripId',
            views: {
              'tab-myTrips': {
                templateUrl: 'templates/trip-detail.html',
                controller: 'TripDetailCtrl'
              }
            }
          })

          .state('tab.new', {
            url: '/new',
            views: {
              'tab-myTrips': {
                templateUrl: 'templates/newTrip.html',
                controller: 'NewTripCtrl'
              }
            }
          })

          .state('tab.top', {
            url: '/top',
            views: {
              'tab-top': {
                templateUrl: 'templates/tab-top.html',
                controller: 'TopCtrl'
              }
            }
          })

          .state('tab.search', {
            url: '/top/search',
            views: {
              'tab-top': {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
              }
            }
          })

          .state('tab.trip-detail', {
            url: '/top/:tripId',
            views: {
              'tab-top': {
                templateUrl: 'templates/trip-detail.html',
                controller: 'TripDetailCtrl'
              }
            }
          })

          .state('tab.account', {
            url: '/account',
            views: {
              'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
              }
            }
          })

//          .state('tab.login', {
//            url: '/account/login',
//            views: {
//              'tab-account': {
//                templateUrl: 'templates/login.html',
//                controller: 'LoginCtrl'
//              }
//            }
//          })

//          .state('tab.forgotpassword', {
//            url: '/account/forgot-password',
//            views: {
//              'tab-account': {
//                templateUrl: 'templates/forgot-password.html',
//                controller: 'GetPasswordCtrl'
//              }
//            }
//          })

//          .state('tab.register', {
//            url: '/account/register',
//            views: {
//              'tab-account': {
//                templateUrl: 'templates/register.html',
//                controller: 'RegisterCtrl'
//              }
//            }
//          })

          .state('tab.logout', {
            url: '/account/logout',
            views: {
              'tab-account': {
                templateUrl: 'templates/logout.html',
                controller: 'LogoutCtrl'
              }
            }

          })


          .state('tab.update', {
            url: '/account/update',
            views: {
              'tab-account': {
                templateUrl: 'templates/update.html',
                controller: 'UpdateCtrl'
              }
            }
          })


      ;


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');

    });


starter.config(function($httpProvider) {

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
//  $httpProvider.defaults.headers.put['Content-Type'] =
//      'application/x-www-form-urlencoded';
//  $httpProvider.defaults.headers.post['Content-Type'] =
//      'application/x-www-form-urlencoded';

  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
});
