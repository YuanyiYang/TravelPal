/**
 * Created by yuanyiyang on 4/29/14.
 */

starter.controller('RegisterCtrl', function ($scope, $log, $state, $ionicPopup, RegisterService) {

  $scope.user = {
    gender : 'Male'
  };


  var showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'You have register successfully'
    });
    confirmPopup.then(function(res){
      if(res){
        $log.log("GoTo: Login");
        $state.go('login');
      }else{
        $log.log('Stay at register');
      }
    });
  };

  var showAlert = function(){
    var alertPopup = $ionicPopup.alert({
      title: "Register Error!"
    });
    alertPopup.then(function(res){
      $log.log('Register Again');
    });
  };

  $scope.register = function (user, registerForm) {
    if (registerForm.$valid) {
      if(user.gender == 'Male'){
        user.gender = false;
      }else{
        user.gender = true;
      }
      $log.log(angular.toJson(user));
      RegisterService.register(user).$promise.then(function(data){
        //$log.log("successful register");
        var meta = data['meta'];
        if(meta['status']== '200' && meta['msg']=='OK'){
          showConfirm();
        }
      },function(){
        $log.error("Register request fails");
        showAlert();
      });
    }
  };


});