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

  var url = 'http://127.0.0.1:3000/api/users/:userId/trips';

  var resource = $resource('/trips/:email',{});


  return {
    all : function(){
      return resource.get({token : $cookieStore.get('token')});
    },

    get : function(tripId){
      return hardCodeMyTrips[tripId];
    }
  }
});