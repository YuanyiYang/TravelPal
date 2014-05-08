/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('MyTripsService', function($resource,$cookieStore){

  var url = 'http://127.0.0.1:3000/api/users/:userId/trips';

  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/users/:userId/trips';
  var resource = $resource(remoteUrl,{});


  return {
    all : function(){
      return resource.get({
        userId : $cookieStore.get('userId'),
        token : $cookieStore.get('accessToken')}
      );
    }
  }
});