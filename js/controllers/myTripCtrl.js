/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('MyTripCtrl', function ($scope, $state, myTripsPromise) {
//  $scope.trips = myTripsPromise;

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