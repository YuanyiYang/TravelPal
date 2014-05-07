/**
 * Created by yuanyiyang on 4/27/14.
 */

starter
    .controller('TripDetailCtrl', function ($scope, myTripDetail, $log ) {


      $scope.detailTrip = myTripDetail;
      $scope.owner = $scope.detailTrip['owner'];
      $scope.participants = $scope.detailTrip['participants'];
      $scope.chat = function () {

      };

    });
