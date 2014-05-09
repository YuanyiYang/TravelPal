/**
 * Created by yuanyiyang on 5/9/14.
 */

starter.factory('JoinGroupService', function($resource, $cookieStore){
  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/trips/:tripId/users/:userId';

  return {
    approve : function(trip, user){
      var toServerData = {
        token : $cookieStore.get('accessToken')
      };
      var approveResource = $resource(remoteUrl,{tripId:trip['id'], userId:user['user_id']},
          { approve : {method : 'PUT'}});
      return approveResource.approve(toServerData);

    },

    kick : function(trip, user){
      var toServerData = {
        token : $cookieStore.get('accessToken')
      };
      var kickResource = $resource(remoteUrl,{tripId:trip['id'], userId:user['user_id']});
      return kickResource.remove(toServerData);
    }
  }
});