/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('newTripCtrl', function($scope, AddNewTripService){

  $scope.trip;

    $scope.submitTrip = function(trip){
     // console.log("In newTripCtrl, trip is " + angular.toJson(trip))
      AddNewTripService.save(trip)

    }
});