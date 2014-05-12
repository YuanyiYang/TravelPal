/**
 * Created by yuanyiyang on 5/9/14.
 */

starter.controller('ChatCtrl', function ($scope, $state, $timeout, $cookieStore, $ionicPopup, $log, tripChats, PostChatService, $stateParams ) {  //ChatService
  //$scope.chats = ChatService.chatDetail;
  //console.log($scope.chats);
  //$scope.tripId = ChatService.tripId;

  $scope.chats= tripChats['data'] ;
  console.log($scope.chats);
  $scope.tripId = $stateParams['tripId'];

  var showAlert = function () {
    var alertPopup = $ionicPopup.alert({
      title: "Post Message Error!"
    });
    alertPopup.then(function (res) {
      $log.log('Post Message alert Again');
    });
  };

  $scope.submit = function (newChat, tripId) {
    console.log($scope.tripId);
    PostChatService.addChat(newChat['detail'], tripId).$promise.then(function (data) {
      if (data['meta']['status'] == '200' && data['meta']['msg'] == 'OK') {
        $state.forceReload();
//        $scope.chats = data['chats'];
//
//        newChat['detail'] = ' ';
      } else {
        showAlert();
        console.log('Server return data, but not add success')
      }
    }, function () {
      showAlert();
      console.log('reject by server')
    });
  };

  $scope.doRefresh = function () {
    $timeout(function () {
      $scope.$broadcast('scroll.refreshComplete');
      $state.forceReload();
    }, 1000)
  }

});