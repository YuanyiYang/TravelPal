angular.module('starter.services', [])

.factory('LogoutService', function($resource, $cookieStore){

      var url = 'http://localhost:3000/api/signout/';
      var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/signout/';

      var resource = $resource(remoteUrl, {});

      return {
        logout : function(){
          var dataToServer = {
            token : $cookieStore.get('accessToken')
          };
          return resource.delete(dataToServer);
        }
      }

    })
;
