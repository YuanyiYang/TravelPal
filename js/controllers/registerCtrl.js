/**
 * Created by yuanyiyang on 4/29/14.
 */

starter.controller('RegisterCtrl', function($scope){

  $scope.register = function(user, registerForm){
    if(registerForm.$valid){
      console.log(angular.toJson(user));
    }
  }
});