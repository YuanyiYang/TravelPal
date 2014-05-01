/**
 * Created by yuanyiyang on 4/27/14.
 */


starter.controller('LoginCtrl', function($scope, $state, $log, LoginService){

  $scope.signIn = function(user, loginForm){
//    console.log(loginForm); //show the detail of the form; dirty stands for substitution
    if(loginForm.$valid){

      console.log(LoginService.login(user));
      LoginService.login(user)
          .$promise.then(
          function(data){
            console.log(data);
          },
          function(response){
            $log.error(response);
          }

      )
      ;



//      window.alert(user.userEmail);
//      throw {message : 'error message'};  //throw an exception. and will be caught in our custom exception handler in the services
    };

  };

  $scope.register = function(){
    $state.go('register');
  };


});