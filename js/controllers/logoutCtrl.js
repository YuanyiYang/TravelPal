/**
 * Created by yuanyiyang on 5/1/14.
 */

starter.controller('LogoutCtrl', function($scope, $timeout, $state){

  var promise = $timeout(function(){
    //manipulate the cookies here
    $state.go('login');
  }, 2000);

//  $scope.cancel = function(){
//    $timeout.cancel(promise);
//  };

});