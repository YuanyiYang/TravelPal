/**
 * Created by yuanyiyang on 5/7/14.
 */

starter.controller('SearchCtrl', function($scope,$ionicPopup,$log, SearchTripService){



  var showAlert = function(){
    var alertPopup = $ionicPopup.alert({
      title: "Search Error!"
    });
    alertPopup.then(function(res){
      $log.log('Search Error');
    });
  };

  var isUndefinedOrNullOrEmpty = function(obj){
    return angular.isUndefined(obj) || obj==null || obj==''
  };

  $scope.search = function(trip){
    if(!isUndefinedOrNullOrEmpty(trip['destination'])){
      var keywordObj = {
        destination : trip['destination']
      };
      SearchTripService.searchWithKeyWord(keywordObj).$promise.then(function(data){
        $log.log('Search OK');
        $log.log(data);
      }, function(){
        $log.error('Reject by Server');
      });
    } else if(!isUndefinedOrNullOrEmpty(trip['fee'])){
      var keywordObj = {
        fee : trip['fee']
      };
      SearchTripService.searchWithKeyWord(keywordObj).$promise.then(function(data){
        $log.log('Search OK');
        $log.log(data);
      }, function(){
        $log.error('Reject by Server');
      });
    }
  }
});