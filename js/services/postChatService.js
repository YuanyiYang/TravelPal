/**
 * Created by yuanyiyang on 5/9/14.
 */

starter.factory('PostChatService', function($resource, $cookieStore){

  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/trips/:tripId/chat';

  return {
    addChat : function(chat, tripId){
      var toServerData = {
        chats : {
          content : chat
        },
        token : $cookieStore.get('accessToken')
      };

      console.log(chat);
      var resource = $resource(remoteUrl, {tripId : tripId});

      return resource.save(toServerData);
    }
  }

});
