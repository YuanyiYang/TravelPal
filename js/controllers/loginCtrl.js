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

      LoginService.login(user)
          .$promise.then(
          function (data) {
            $log.log("Login Data from Server " + angular.toJson(data));
           // $cookieStore.put('userEmail', '11');
            $state.go('tab.myTrips');
          },
          function (response) {
//            $cookieStore.put('email', '222@222');
//            $cookieStore.put('password','222');
            $log.error('LoginRequest rejected by Server');
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