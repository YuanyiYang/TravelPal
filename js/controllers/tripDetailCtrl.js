/**
 * Created by yuanyiyang on 4/27/14.
 */

starter
    .controller('TripDetailCtrl', function ($scope,$log,$state,$ionicPopup, $cookieStore, myTripDetail, MyTripsService) {

      $scope.myId = $cookieStore.get('userId');

      $scope.detailTrip = myTripDetail['data'];


      $scope.owner = $scope.detailTrip['owner'];
      $scope.participants = $scope.detailTrip['participants'];
      var localOwner = [];
      var include = function(arr,obj) {
        return (arr.indexOf(obj) != -1);
      };

      var approval = function(){
        for(var index in $scope.participants){
          if($scope.participants[index]['user_id']==$scope.myId){
            if(!$scope.participants[index]['status']){
              return true;
            }
          }
        }
        return false;
      };

      for(var part in $scope.participants){
          localOwner.push($scope.participants[part]['user_id']);
      };


      var showConfirm = function(data){
        var confirmPopup = $ionicPopup.confirm({
          title: 'You have' + data + 'successfully'
        });
        confirmPopup.then(function(res){
          if(res){
            $state.go('tab.myTrips');
          }else{
            $state.forceReload();
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

      $scope.joinBoolean = include(localOwner,parseInt($cookieStore.get('userId')));
      $scope.withdrawBoolean = include(localOwner,parseInt($cookieStore.get('userId'))) && approval() && $cookieStore.get('userId')!=$scope.owner['id'];
      $scope.quitBoolean = (!$scope.withdrawBoolean )&& $cookieStore.get('userId')!=$scope.owner['id'] && include(localOwner, parseInt($cookieStore.get('userId')));
      console.log(approval());
      $log.info($scope.owner['id']);
      console.log('withdraw' + $scope.withdrawBoolean);
      $scope.chat = function () {

      };
      $scope.join = function(trip){
        MyTripsService.apply(trip).$promise.then(function(){
           showConfirm(' applied ');

        }, function(){
            showAlert();
        });
      };

      $scope.withdraw = function(trip){
        MyTripsService.retract(trip).$promise.then(function(){
            showConfirm(' retracted ');

        }, function(){
          showAlert();
        });
      }
    });
