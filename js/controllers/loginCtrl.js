/**
 * Created by yuanyiyang on 4/27/14.
 */


starter.controller('LoginCtrl', function($scope, LoginService){

  $scope.signIn = function(user){
    LoginService.save(user);
  }

})