/**
 * Created by yuanyiyang on 4/29/14.
 */

starter.factory('LoginService', function($resource , $log){


  var url='http://127.0.0.1:3000/api/signin';

  var resource = $resource(url, {},{headers: { 'Content-Type': 'application/json' }});

  return {

//    login : function(user){
//      var deferred = $q.defer();
//      deferred.resolve(hardCodeUser);
//      return deferred.promise;
//
//    },

    login : function(user){
      $log.log(user);
      var toServerData = {sessions : { email : user['userEmail'], password:user['password']}};
      $log.log("In loginService, send to server " + angular.toJson(toServerData));
      return resource.save(angular.toJson(toServerData));
    },


    getAllUser : function(){
      return resource.query()
    },

    save : function(user){
      return resource.save(user);
    }
  }
});


