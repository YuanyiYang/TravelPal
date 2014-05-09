/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('NewTripCtrl', function ($scope, $log, $state, $ionicPopup, TripDetailService) {


  var showConfirm = function () {
    var confirmPopup = $ionicPopup.confirm({
      title: "Trip add successfully",
      template: "Go back"
    });
    confirmPopup.then(function (res) {
      if (res) {
        $state.go('tab.myTrips');
      } else {
        $log.log("Stay in the newTrip page");
      }
    })
  };

  var showAlert = function () {
    var alertPopup = $ionicPopup.alert({
      title: "Add Trip Denied!"
    });
    alertPopup.then(function (res) {
      $log.warn("Stay in the add trip page");
    });
  };

  $scope.submitTrip = function (trip, newTripForm) {
    if (newTripForm.$valid) {
      TripDetailService.save(trip).$promise.then(function (data) {
        if (data['meta']['status'] == '200' && data['meta']['msg'] == 'OK') {
          showConfirm();
        }
      }, function () {
        showAlert();
      });
    }
  }
});