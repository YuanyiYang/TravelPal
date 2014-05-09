/**
 * Created by yuanyiyang on 4/27/14.
 */

starter
    .controller('TripDetailCtrl', function ($scope,$log,$state,$ionicPopup, $cookieStore, myTripDetail, MyTripsService) {

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


      var showConfirm = function(){
        var confirmPopup = $ionicPopup.confirm({
          title: 'You have applied successfully'
        });
        confirmPopup.then(function(res){
          if(res){

          }else{

          }
        });
      };

      var showAlert = function(){
        var alertPopup = $ionicPopup.alert({
          title: "Rejected By Server!"
        });
        alertPopup.then(function(res){

        });
      };

      $scope.showBoolean = include(localOwner,parseInt($cookieStore.get('userId')));

      $scope.chat = function () {

      };
      $scope.join = function(trip){
        MyTripsService.apply(trip).$promise.then(function(){
           showConfirm();
        }, function(){
            showAlert();
        });
      }
    });
