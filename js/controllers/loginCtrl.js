/**
 * Created by yuanyiyang on 4/27/14.
 */


starter.controller('LoginCtrl', function ($scope, $state, $log, $cookieStore, $ionicPopup,  LoginService) {

  var showAlert = function(){
    var alertPopup = $ionicPopup.alert({
      title: "Email or Password Error!"
    });
    alertPopup.then(function(res){
      $log.log('Login Again');
    });
  };

  $scope.signIn = function (user, loginForm) {
//    console.log(loginForm); //show the detail of the form; dirty stands for substitution
    if (loginForm.$valid) {
      LoginService.login(user).$promise.then(
          function (data) {
            var metaInfo = data['meta'];
            console.log("Login data from server "  +  angular.toJson(data));
            console.log(metaInfo);
            if(metaInfo['status'] == '200' || metaInfo['msg'] == 'OK'){
              var token = data['data']['token'];
              var id = data['data']['id'];
              $cookieStore.put('accessToken', token);
              $cookieStore.put('userId', id);
              $state.go('tab.myTrips');
            }else{
              showAlert();
            }
          },
          function (response) {
            $log.error('LoginRequest rejected by Server');
            showAlert();
          }
      );
//      window.alert(user.userEmail);
//      throw {message : 'error message'};  //throw an exception. and will be caught in our custom exception handler in the services
    }

  };

  $scope.register = function () {
    $state.go('register');
  };


});