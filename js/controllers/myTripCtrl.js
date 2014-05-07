/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('MyTripCtrl', function ($scope, $state ,myTrips) {
  $scope.trips = myTrips;

  console.log(angular.toJson($scope.trips));

  $scope.addMyTrip = function () {
    $state.go('tab.new');
  };


});