angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('MyTrips', function(){
      var hardCodeMyTrips = [
        { id : 0, name : 'myTrip1'},
        { id : 1, name : 'myTrip2'},
        { id : 2, name : 'myTrip3'},
        { id : 3, name : 'myTrip4'}
      ];

      return {
        all : function(){
          return hardCodeMyTrips;
        },

        get : function(tripId){
          return hardCodeMyTrips[tripId];
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
