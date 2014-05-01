
starter.controller('GetPasswordCtrl', function($scope){

  $scope.findMyPass = function(user, getMyPassForm){
    if(getMyPassForm.$valid){
      console.log('do sth with the user ' + angular.toJson(user));
    }

  }

});
