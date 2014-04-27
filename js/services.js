angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

    .factory('LoginService', function(){
      return {
        save : function(userInfo){
          console.log("In the loginService, the userInfo is " + angular.toJson(userInfo));
        }
      }
    })




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


;
