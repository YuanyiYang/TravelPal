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

    getHot: function () {
      var toServerData = {
        token: $cookieStore.get('accessToken')
      };
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

    deleteTrip: function (tripId) {
      var deleteResource = $resource(remoteUrl, {tripId: tripId},
          {delete: { method: 'DELETE'}});
      var toServerData = {
        token : $cookieStore.get('accessToken')
      };
      console.log("In tripDetail Service, delete to server " + angular.toJson(toServerData));
      return deleteResource.delete(toServerData);
    },

    updateTrip: function (trip) {
      var toServerData = {
        trip: {
          destination: trip['destination'],
          fee: trip['fee']
        },
        token: $cookieStore.get('accessToken')
      };
      var updateResource = $resource(remoteUrl, {tripId: trip['id']},
          {update: {method: 'PUT'}});
      console.log("To updateTrip, it send to server");
      return updateResource.update(toServerData);
    }
  }
});