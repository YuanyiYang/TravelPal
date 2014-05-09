/**
 * Created by yuanyiyang on 4/29/14.
 */

starter.controller('RegisterCtrl', function ($scope, $log, $state, $ionicPopup, $cookieStore, RegisterService) {

  $scope.user = {
    gender: 'Male'
  };


  var showConfirm = function () {
    var confirmPopup = $ionicPopup.confirm({
      title: 'You have register successfully'
    });
    confirmPopup.then(function (res) {
      if (res) {
        $state.go('tab.myTrips');
      } else {
        $state.go('tab.myTrips');
      }
    });
  };

  var showAlert = function () {
    var alertPopup = $ionicPopup.alert({
      title: "Register Error!"
    });
    alertPopup.then(function (res) {
      $log.log('Register Again');
      $state.forceReload();
    });
  };

  $scope.register = function (user, registerForm) {
    if (registerForm.$valid) {
      if (user.gender == 'Male') {
        user.gender = false;
      } else {
        user.gender = true;
      }
      $log.log(angular.toJson(user));
      RegisterService.register(user).$promise.then(function (data) {
        //$log.log("successful register");
        var meta = data['meta'];
        if (meta['status'] == '200' && meta['msg'] == 'OK') {
          $cookieStore.put('accessToken', data['data']['token']);
          $cookieStore.put('userId', data['data']['id']);
          showConfirm();
        }
      }, function () {
        $log.error("Register request fails");
        showAlert();
      });
    }
  };


});