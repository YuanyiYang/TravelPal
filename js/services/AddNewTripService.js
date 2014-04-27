/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('AddNewTripService', function(){

  return {
    save : function(tripDetail){
      console.log("In addNewTripService, trip detail is " + angular.toJson(tripDetail));
    }
  }
});