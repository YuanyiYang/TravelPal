/**
 * Created by yuanyiyang on 4/27/14.
 */

starter
    .controller('TripDetailCtrl', function ($scope,$log,$state, $cookieStore, myTripDetail) {

      $scope.detailTrip = myTripDetail['data'];
      $scope.owner = $scope.detailTrip['owner'];
      $scope.myId = $cookieStore.get('userId');
      $scope.participants = $scope.detailTrip['participants'];

      $scope.chat = function () {

      };
    });
