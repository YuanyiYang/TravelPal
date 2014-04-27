/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('MyTripsService', function(){

  var hardCodeMyTrips = [
    { id : 1111, name : 'myTrip1'},
    { id : 2222, name : 'myTrip2'},
    { id : 3333, name : 'myTrip3'},
    { id : 4444, name : 'myTrip4'}
  ];

  return {
    all : function(){
      return hardCodeMyTrips;
    },

    get : function(tripId){
      return hardCodeMyTrips[tripId];
    }
  }
});