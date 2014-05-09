/**
 * Created by yuanyiyang on 4/29/14.
 */

starter.factory('LoginService', function ($resource, $log) {


  var url = 'http://127.0.0.1:3000/api/signin';

  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/signin';

  var resource = $resource(remoteUrl, {});

  return {

    login: function (user) {
      var toServerData = {session: { email: user['userEmail'], password: user['password']}};
      $log.log("In loginService, send to server " + angular.toJson(toServerData));
      return resource.save(angular.toJson(toServerData));
    }

  }
});


