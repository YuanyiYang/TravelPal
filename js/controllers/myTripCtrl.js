/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('MyTripCtrl', function ($scope, $ionicPopup, $state, $log, $cookieStore, $timeout, myTrips, TripDetailService) {

  //$log.log("In myTripCtrl, the whole data returned by server is " + angular.toJson(myTrips));

  $scope.trips = myTrips['data'];

  $scope.myId = $cookieStore.get('userId');


  var showConfirm = function () {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Delete Successful'
    });
    confirmPopup.then(function (res) {
      if (res) {
        $log.log("Delete Successful to reload");
        $state.forceReload();
      } else {
        $log.log('Delete Successful to reload not reload');
      }
    });
  };

  var showAlert = function () {
    var alertPopup = $ionicPopup.alert({
      title: "Delete Error!"
    });
    alertPopup.then(function (res) {
      $log.log('Delete error alert Again');
      $state.forceReload();
    });
  };

  $scope.removeTrip = function (trip) {
    // $scope.trips.splice($scope.trips.indexOf(trip),1);
    var tId = trip['id'];
    TripDetailService.deleteTrip(tId).$promise.then(function (data) {
      showConfirm();
    }, function () {
      showAlert();
    });
  };

  $scope.edit = function (trip) {
    $state.go('tab.editTrip', {tripId: trip['id']});
  };

  $scope.addMyTrip = function () {
    $state.go('tab.new');
  };

  $scope.doRefresh = function () {
    $timeout(function () {
      $scope.$broadcast('scroll.refreshComplete');
      $state.forceReload();
    }, 1000)
  }


});

//$scope.itemButtons = [
//  {
//    text : 'Delete',
//    type : 'button-assertive',
//
//    onTap : function(trip){
//      $scope.removeTrip(trip);
//    }
//  },
//  {
//    text : 'Edit',
//    type : 'button-calm',
//    onTap : function(trip){
//      $scope.editTrip(trip);
//    }
//  }
//];