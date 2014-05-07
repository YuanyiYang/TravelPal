/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('MyTripCtrl', function ($scope, $state ,myTrips) {
  $scope.trips = myTrips['data'];

  var removeTrip = function(trip){
    console.log($scope.trips.indexOf(trip));
    $scope.trips.splice($scope.trips.indexOf(trip),1);
 //   console.log(trip);
    console.log($scope.trips);
  };


  //console.log(angular.toJson($scope.trips));

  $scope.itemButtons = [
    {
      text : 'Delete',
      type : 'button-assertive',
      onTap : function(trip){
        removeTrip(trip);
      }
    }
  ];

  $scope.addMyTrip = function () {
    $state.go('tab.new');
  };


});