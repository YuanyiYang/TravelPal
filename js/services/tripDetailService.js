/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('TripDetailService', function($resource, $cookieStore){

  var url = 'http://localhost:3000/api/trips/:tripId';

  var resource = $resource(url, {});

  return {

    getTripDetail : function(tripId){

      var toServerData = {
        tripId : tripId,
        token : $cookieStore.get('accessToken')
      };
      console.log("In tripDetail Service, send to server " + angular.toJson(toServerData));
      return resource.get(toServerData);
    }
  }

});