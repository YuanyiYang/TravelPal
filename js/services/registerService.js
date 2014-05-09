/**
 * Created by yuanyiyang on 5/7/14.
 */

starter.factory('RegisterService', function ($resource, $log) {

  var url = 'http://localhost:3000/api/signup/';

  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/signup/';

  var resource = $resource(remoteUrl, {});

  return {
    register: function (user) {
      var toServerDate = {
        user: {
          email: user['userEmail'],
          password: user['password'],
          password_confirmation: user['confirmPassword'],
          college: user['college'],
          age: user['age'],
          gender: user['gender'],
          major: user['major'],
          name: user['name']
        }
      };
      $log.log("In RegisterService, the data send to server is " + angular.toJson(toServerDate));

      return resource.save(angular.toJson(toServerDate));
    }
  }
});