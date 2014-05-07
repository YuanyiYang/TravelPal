/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('MyTripsService', function($resource,$cookieStore){

  var url = 'http://127.0.0.1:3000/api/users/:userId/trips';

  var resource = $resource(url,{});


  return {
    all : function(){
      return resource.get({
        userId : $cookieStore.get('id'),
        token : $cookieStore.get('accessToken')}
      );
    },

    get : function(tripId){
      return hardCodeMyTrips[tripId];
    }
  }
});