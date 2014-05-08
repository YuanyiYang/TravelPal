/**
 * Created by yuanyiyang on 5/7/14.
 */

starter.controller('EditTripCtrl', function($scope, $ionicPopup, $state, $log, myTripDetail, TripDetailService){

  var changeFlag = false;

  var originalObject = myTripDetail;

  var showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Update Successful!'
    });
    confirmPopup.then(function(res){
      if(res){
        $log.log("GoTo: MyTrips after update");
        $state.go('tab.myTrips');
      }else{
        $log.log('Stay at update');
      }
    });
  };

  var showNotChangeAlert = function(){
    var alertPopup = $ionicPopup.alert({
      title : 'You haven\'t change a field'
    });
    alertPopup.then(function(){

    });
  }

  var showAlert = function(){
    var alertPopup = $ionicPopup.alert({
      title: "Update Error!"
    });
    alertPopup.then(function(res){
      $log.log('Update Error');
    });
  };

  $scope.trip = myTripDetail;
  $scope.tripDetail = myTripDetail['data'];


  $scope.update = function(trip, updateForm){
    if(updateForm.$valid){
      for(var key in originalObject){
        if(originalObject['key']!=trip['key']){
          changeFlag = true;
        }
      }
      if(changeFlag){
        changeFlag = false;
        TripDetailService.updateTrip(trip).$promise.then(function(data){


        }, function(){

        })
      }else{

      }

    }
  }
});

