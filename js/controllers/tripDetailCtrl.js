/**
 * Created by yuanyiyang on 4/27/14.
 */

starter
    .controller('TripDetailCtrl', function($scope, $stateParams, TripDetail) {

      var hardCodeMyEmail = '1111@111';

      $scope.detailTrip = TripDetail.getTripDetail($stateParams.parameters);

      $scope.sameUser = hardCodeMyEmail==$scope.detailTrip['owner']['email'];

      $scope.chat = function(){

      }

    });
