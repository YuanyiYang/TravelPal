/**
 * Created by yuanyiyang on 4/27/14.
 */

starter
    .controller('TripDetailCtrl', function($scope, $stateParams, TripDetailService) {

      var hardCodeMyEmail = '1111@111';

      $scope.detailTrip = TripDetailService.getTripDetail($stateParams.parameters);

      $scope.chat = function(){

      }

    });
