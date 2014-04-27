/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate){
  $scope.startApp = function(){
    $state.go('tab.myTrips');
  };

  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})