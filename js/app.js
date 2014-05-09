
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
              myTrips : function(MyTripsService){
                return MyTripsService.all().$promise.then(function(data){
                  //console.log('In app.js of resolve property of myTrips');
                  //console.log(angular.toJson(data));
                  if(data['meta']['status'] == '200' && data['meta']['msg']=='OK'){
                    return data;
                  }else{
                    console.log('In appJS resolve for myTrips, undefined error!');
                  }
                }, function(response){
                  console.log('ERROR');
                })
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
            },
            resolve : {
              myTripDetail : function(TripDetailService, $stateParams, $log){
                return TripDetailService.getTripDetail($stateParams['tripId']).$promise.then(function(data){
                  if(data['meta']['status'] == '200' && data['meta']['msg']=='OK'){
                    //console.log(data);
                    return data;
                  }
                }, function(){
                  $log.error('In app JS, cannot route to my trip detail');
                });
              }
            }
          })

          .state('tab.editTrip', {
            url : '/myTrips/:tripId/edit',
            views : {
              'tab-myTrips' : {
                templateUrl: 'templates/editTrip.html',
                controller: 'EditTripCtrl'
              }
            },
            resolve : {
              myTripDetail : function(TripDetailService, $stateParams, $log){
                return TripDetailService.getTripDetail($stateParams['tripId']).$promise.then(function(data){
                  if(data['meta']['status'] == '200' && data['meta']['msg']=='OK'){
                    return data;
                  }
                }, function(){
                  $log.error('In app JS, cannot route to edit trip detail');
                });
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
            },
            resolve : {
              topTrip : function(TripDetailService, $log){
                return TripDetailService.getHot().$promise.then(function(data){
                  if(data['meta']['status'] == '200' && data['meta']['msg']=='OK'){
                    return data;
                  }
                }, function(){
                  $log.error('In app JS, cannot route to hot trip');
                });
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

          .state('tab.result', {
            url : '/top/result',
            views : {
              'tab-top' : {
                templateUrl : 'templates/searchResult.html',
                controller:'SearchResultCtrl'
              }
            }
          })

          .state('tab.trip-detail', {
            url: '/top/result/:tripId',
            views: {
              'tab-top': {
                templateUrl: 'templates/trip-detail.html',
                controller: 'TripDetailCtrl'
              }
            },
            resolve : {
              myTripDetail : function(TripDetailService, $stateParams, $log){
                return TripDetailService.getTripDetail($stateParams['tripId']).$promise.then(function(data){
                  if(data['meta']['status'] == '200' && data['meta']['msg']=='OK'){
                    return data;
                  }
                }, function(){
                  $log.error('In app JS, cannot route to my trip detail');
                });
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

starter.config(function($provide) {
  $provide.decorator('$state', function($delegate, $stateParams) {
    $delegate.forceReload = function() {
      return $delegate.go($delegate.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });
    };
    return $delegate;
  });
});
