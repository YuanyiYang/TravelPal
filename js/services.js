angular.module('starter.services', [])

.factory('TopTrips', function(){

      var hardCodeTrips = [
        { id : 0, name : 'trip1'},
        { id : 1, name : 'trip2'},
        { id : 2, name : 'trip3'},
        { id : 3, name : 'trip4'}
      ];

      return {
        all : function(){
          return hardCodeTrips;
        },

        get: function(tripId){
          return hardCodeTrips[tripId];
        }
      }
    })

.factory('LogoutService', function($resource, $cookieStore){

      var url = 'http://localhost:3000/api/signout/';

      var resource = $resource(url, {});

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
