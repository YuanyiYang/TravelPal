angular.module('starter.controllers', [])


.controller('AccountCtrl', function($scope) {
})

.controller('GetPasswordCtrl', function($scope){

    })

.controller('RegisterCtrl', function($scope){

    })

.controller('TopCtrl', function($scope, $state, TopTrips){
      $scope.trips = TopTrips.all();

      $scope.search = function(){
        $state.go('tab.search');
      }
    })

.controller('searchCtrl', function($scope){
    $scope.ffff = {};
    })

.controller('UpdateCtrl', function($scope){

    })

.controller('homeCtrl', function($scope){

    });
