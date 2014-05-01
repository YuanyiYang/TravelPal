angular.module('starter.controllers', [])


.controller('AccountCtrl', function($scope) {
})




.controller('TopCtrl', function($scope, $state, TopTrips){
      $scope.trips = TopTrips.all();

      $scope.search = function(){
        $state.go('tab.search');
      }
    })

.controller('SearchCtrl', function($scope){
    $scope.ffff = {};
    })

.controller('UpdateCtrl', function($scope){

    })

.controller('LogoutCtrl', function($scope){

    });
