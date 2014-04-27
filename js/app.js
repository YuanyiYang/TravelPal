// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);



    starter.run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

        // setup an abstract state for the tabs directive

          .state('intro', {
            url: '/',
            templateUrl: 'intro.html',
            controller: 'IntroCtrl'
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
                controller: 'myTripCtrl'
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
            url : '/new',
            views : {
              'tab-myTrips' : {
                templateUrl: 'templates/newTrip.html',
                controller : 'newTripCtrl'
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

          .state('tab.search',{
            url : '/top/search',
            views : {
              'tab-top' : {
                templateUrl: 'templates/search.html',
                controller: 'searchCtrl'
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

          .state('tab.login', {
            url: '/account/login',
            views: {
              'tab-account': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
              }
            }
          })

          .state('tab.forgotpassword', {
            url: '/account/forgot-password',
            views: {
              'tab-account': {
                templateUrl: 'templates/forgot-password.html',
                controller: 'GetPasswordCtrl'
              }
            }
          })

          .state('tab.register', {
            url: '/account/register',
            views: {
              'tab-account': {
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
              }
            }
          })

          .state('tab.update', {
            url : '/account/update',
            views: {
              'tab-account' : {
                templateUrl: 'templates/update.html',
                controller :'UpdateCtrl'
              }
            }
          })


      ;


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');

    });

