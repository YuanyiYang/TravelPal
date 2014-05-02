/**
 * Created by yuanyiyang on 5/1/14.
 */

starter.controller('LogoutCtrl', function ($scope, $timeout, $state, $cookieStore) {

  var promise = $timeout(function () {
    //manipulate the cookies here
    $cookieStore.remove('email');
    $cookieStore.remove('password');
    $state.go('login');
  }, 2000);

//  $scope.cancel = function(){
//    $timeout.cancel(promise);
//  };

});