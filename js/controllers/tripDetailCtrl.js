/**
 * Created by yuanyiyang on 4/27/14.
 */

starter
    .controller('TripDetailCtrl', function ($scope,$log,$state, $cookieStore, myTripDetail) {

      var localOwner = [];
      var include = function(arr,obj) {
        return (arr.indexOf(obj) != -1);
      };

      $scope.detailTrip = myTripDetail['data'];
      $scope.owner = $scope.detailTrip['owner'];
      $scope.myId = $cookieStore.get('userId');
      $scope.participants = $scope.detailTrip['participants'];

      localOwner.push($scope.owner['id']);
      for(var part in $scope.participants){
        if(part['status']){
          localOwner.push(part['user_id']);
        }
      };
      $scope.showBoolean = include(localOwner,parseInt($cookieStore.get('userId')));
      $scope.chat = function () {

      };
      $scope.join = function(trip){

      }

    });
