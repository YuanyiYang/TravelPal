/**
 * Created by yuanyiyang on 5/7/14.
 */

starter.controller('SearchCtrl', function($scope,$ionicPopup,$log,$state, SearchTripService){


  var showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'No Trips Found, Search Again!'
    });
    confirmPopup.then(function(res){
      if(res){
        $log.log("Stay in search to search again");
      }else{
        $log.log('Stay at register');
        $state.go('tab.top');
      }
    });
  };


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
      }
    } else if(!isUndefinedOrNullOrEmpty(trip['fee'])){
      var keywordObj = {
        fee : trip['fee']
      }
    }
    SearchTripService.searchWithKeyWord(keywordObj).$promise.then(function(data){
      if(data['meta']['status']=='200' && data['meta']['msg']=='OK'){
        $log.log('Search OK');
        var returnTrips = data['data'];
        if(returnTrips.length==0){
          showConfirm();
        }else{
          $log.log('We find the trip!');
        }
      }
    }, function(){
      $log.error('Reject by Server');
      showAlert();
    });
  }
});