angular.module('starter.controllers', [])

.controller('myTripCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope){


    })

.controller('GetPasswordCtrl', function($scope){

    })

.controller('RegisterCtrl', function($scope){

    });
