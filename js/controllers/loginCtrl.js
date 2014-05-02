/**
 * Created by yuanyiyang on 4/27/14.
 */


starter.controller('LoginCtrl', function ($scope, $state, $log, $cookieStore, LoginService) {

  $scope.signIn = function (user, loginForm) {
//    console.log(loginForm); //show the detail of the form; dirty stands for substitution
    if (loginForm.$valid) {

      LoginService.login(user)
          .$promise.then(
          function (data) {
            console.log('In loginCtrl');
            console.log(data);
            $state.go('tab.myTrips');
          },
          function (response) {
//            $cookieStore.put('email', '222@222');
//            $cookieStore.put('password','222');
            $log.log($cookieStore.get('email'));
 //           $state.go('tab.myTrips');
//            $log.error(response);
          }
      )
      ;


//      window.alert(user.userEmail);
//      throw {message : 'error message'};  //throw an exception. and will be caught in our custom exception handler in the services
    }

  };

  $scope.register = function () {
    $state.go('register');
  };


});