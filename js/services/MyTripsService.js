/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('MyTripsService', function ($resource, $cookieStore) {

  var url = 'http://127.0.0.1:3000/api/users/:userId/trips';

  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/users/:userId/trips/:tripId';
  var resource = $resource(remoteUrl, {});


  return {
    all: function () {
      return resource.get({
            userId: $cookieStore.get('userId'),
            token: $cookieStore.get('accessToken')}
      );
    },

    apply: function (trip) {
      var toServerData = {
        token: $cookieStore.get('accessToken')
      };
      console.log('In MyTripsService, send to the apply join trip ' + angular.toJson(toServerData));
      var applyResource = $resource(remoteUrl, {userId: $cookieStore.get('userId'), tripId: trip['id']},
          { join: {method: 'PUT'}
          });
      return applyResource.join(angular.toJson(toServerData));
    },

    retract: function (trip) {
      var toServerData = {
        token: $cookieStore.get('accessToken')
      };
      var retractResource = $resource(remoteUrl, {userId: $cookieStore.get('userId'), tripId: trip['id']});
      return retractResource.delete(toServerData);
    }
  }
});