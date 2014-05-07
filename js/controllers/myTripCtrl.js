/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('MyTripCtrl', function ($scope, $state ,$log ,myTrips) {

  $log.log("In myTripCtrl, the whole data returned by server is " + angular.toJson(myTrips));

  $scope.trips = myTrips['data'];

  var removeTrip = function(trip){
    console.log($scope.trips.indexOf(trip));
    $scope.trips.splice($scope.trips.indexOf(trip),1);
    console.log($scope.trips);
  };

  var editTrip = function(trip){
    console.log('In edit trip service')
  };

  $scope.itemButtons = [
    {
      text : 'Delete',
      type : 'button-assertive',

      onTap : function(trip){
        removeTrip(trip);
      }
    },
    {
      text : 'Edit',
      type : 'bar-calm',
      onTap : function(trip){
        editTrip(trip);
      }
    }
  ];

  $scope.addMyTrip = function () {
    $state.go('tab.new');
  };


});