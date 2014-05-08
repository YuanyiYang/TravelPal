/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('TripDetailService', function ($resource, $cookieStore) {

  var url = 'http://localhost:3000/api/trips/:tripId';

  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/trips/:tripId';

  var resource = $resource(remoteUrl, {});

  return {

    getTripDetail: function (tripId) {

      var toServerData = {
        tripId: tripId,
        token: $cookieStore.get('accessToken')
      };
      console.log("In tripDetail Service, get to server " + angular.toJson(toServerData));
      return resource.get(toServerData);
    },

    save: function (tripDetail) {
      var toServerData = {
        trip: {
          destination: tripDetail['destination'],
          start_date: tripDetail['startDate'],
          end_date: tripDetail['endDate'],
          fee: tripDetail['fee']
        },
        token: $cookieStore.get('accessToken')
      };
      console.log("In tripDetailService, trip detail is " + angular.toJson(tripDetail));
      return resource.save(angular.toJson(toServerData));
    },

    deleteTrip : function(tripId){
      var deleteResource = $resource(remoteUrl, {tripId : '@id'},
          {delete : { method : 'DELETE',  params : {token : $cookieStore.get('accessToken')}}});
      var toServerData = {
        tripId: tripId
      };
      console.log("In tripDetail Service, delete to server " + angular.toJson(toServerData));
      return deleteResource.delete(toServerData);
    },

    updateTrip : function(trip){
      var toServerData = {
        trip : trip,
        token : $cookieStore.get('accessToken')
      };
      var updateResource = $resource(remoteUrl, {tripId: '@id'},
          {update : {method : 'PUT', params:toServerData}});
      return updateResource.update({tripId : trip['id']});
    }
  }
});