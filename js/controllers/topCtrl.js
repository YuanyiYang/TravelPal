/**
 * Created by yuanyiyang on 5/7/14.
 */

starter
    .controller('TopCtrl', function ($scope, $state, topTrip) {
      $scope.trips = topTrip['data'];
      //console.log( $scope.trips);
      $scope.search = function () {
        $state.go('tab.search');
      }
    });