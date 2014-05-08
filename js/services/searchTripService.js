/**
 * Created by yuanyiyang on 5/7/14.
 */

starter.factory('SearchTripService', function($resource, $cookieStore){

  var url = 'http://localhost:3000/api/trips/search/';
  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/trips/search';
  var resource = $resource(remoteUrl, {});

  return {
    searchWithKeyWord : function(keyWord){
      var toServerData = {
        keywords : keyWord,
        token : $cookieStore.get('accessToken')
      };
      console.log('In SearchTripService ' + angular.toJson(toServerData));
      return resource.save(angular.toJson(toServerData))
    }
  }
});