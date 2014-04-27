angular.module('starter.controllers', [])

.controller('myTripCtrl', function($scope, MyTrips) {
    $scope.trips = MyTrips.all();
})

.controller('AccountCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope){


    })

.controller('GetPasswordCtrl', function($scope){

    })

.controller('RegisterCtrl', function($scope){

    })

.controller('TopCtrl', function($scope, TopTrips){
      $scope.trips = TopTrips.all();
    })

.controller('TripDetailCtrl', function($scope, $stateParams, TopTrips) {
      $scope.trip = TopTrips.get($stateParams.tripId);
    })

.controller('searchCtrl', function($scope){
    $scope.ffff = {};
    })

.controller('updateCtrl', function($scope){

    })

.controller('homeCtrl', function($scope){
      $scope.search = function(){
        console.log(11111);
      }
    });
