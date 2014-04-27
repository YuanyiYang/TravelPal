/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('myTripCtrl', function($scope, $state, MyTripsService) {
      $scope.trips = MyTripsService.all();

      $scope.addMyTrip = function(){
        $state.go('tab.new');
      };


    });