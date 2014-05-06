/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('MyTripCtrl', function ($scope, $state, myTripsPromise ) {  //myTripsPromise MyTripsService
  $scope.trips = myTripsPromise.all();

  myTripsPromise.then(
    function(){
      console.log('success');
    }, function(){
      console.log('error');
    }
  );

  $scope.addMyTrip = function () {
    $state.go('tab.new');
  };


});