/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('MyTripsService', function($resource,$cookieStore){

  var hardCodeMyTrips = [
    { id : 1111, name : 'myTrip1'},
    { id : 2222, name : 'myTrip2'},
    { id : 3333, name : 'myTrip3'},
    { id : 4444, name : 'myTrip4'}
  ];

  var resource = $resource('/trips/:email',{});


  return {
    all : function(){

      return resource.get({email : $cookieStore.get('email')});
//     return hardCodeMyTrips;
    },

    get : function(tripId){
      return hardCodeMyTrips[tripId];
    }
  }
});