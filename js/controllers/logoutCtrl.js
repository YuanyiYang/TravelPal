/**
 * Created by yuanyiyang on 5/1/14.
 */

starter.controller('LogoutCtrl', function ($scope, $timeout, $state, $cookieStore, $log, LogoutService) {

  LogoutService.logout().$promise.then(function(data){
    if(data['meta']['status'] == '200' && data['meta']['msg']=='OK'){
      $log.log('Logout Successfully');
      $timeout(function () {
        $cookieStore.remove('accessToken');
        $state.go('login');
      }, 2000)
    }
  }, function(response){
    $log.info(response);
    $log.error('Logout Error')
  });

});