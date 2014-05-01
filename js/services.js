angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */


/**
 * Here we simply overwrite the built in service provided by Angular with the $ sign in the beginning.
 * We write our own exceptionHandler just log out the exception message
 */
//.factory('$exceptionHandler', function(){
//      return function(exception){
//          console.log("exception handled: " + exception.message);
//      };
//    })

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
