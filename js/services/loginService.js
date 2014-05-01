/**
 * Created by yuanyiyang on 4/29/14.
 */

starter.factory('LoginService', function($resource , $log){

  var hardCodeUser = {
    email : '111@111',
    name : 'yyy'
  };


  return {

//    login : function(user){
//      var deferred = $q.defer();
//      deferred.resolve(hardCodeUser);
//      return deferred.promise;
//
//    },

    login : function(user){
      $log.log(user);
      return $resource('/user/', {}).get({email : user['usermail'], password:user['password']});
    },



    save : function(userInfo){
      console.log("In the loginService, the userInfo is " + angular.toJson(userInfo));
    }
  }
});


