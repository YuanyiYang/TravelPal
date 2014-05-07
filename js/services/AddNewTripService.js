/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('AddNewTripService', function($resource, $cookieStore){

  var url = 'http://localhost:3000/api/trips/';

  var remoteUrl = 'http://websys1.stern.nyu.edu:7001/api/trips/';

  var resource = $resource(url, {});

  return {
    save : function(tripDetail){
      var toServerData = {
        trip : {
          destination : tripDetail['destination'],
          start_date : tripDetail['startDate'],
          end_date: tripDetail['endDate'],
          fee: tripDetail['fee']
        },
        token : $cookieStore.get('accessToken')
      };
      console.log("In addNewTripService, trip detail is " + angular.toJson(tripDetail));
      return resource.save(angular.toJson(toServerData));
    }
  }
});