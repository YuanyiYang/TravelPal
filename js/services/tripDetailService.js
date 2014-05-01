/**
 * Created by yuanyiyang on 4/27/14.
 */

starter.factory('TripDetailService', function(){


  var hardCodeReturnDetailList = [{
    'message' : '200',
    'owner' : {
      'email' : '1111@111',
      'name' : '1111'
    },
    'tripInfo': {
      'tripId' : '1111',
      'destination' : 'NY',
      'time' : '2014-04-14 : 2014-5-14',
      'fee' : '$1000',
      'companion' : {
        'sex' : 'female',
        'major' : 'CS',
        'age' : '24',
        'college' : 'NYU'
      },
      'timeFlexible' : 'true',
      'message' : 'TBA'
    }
  },
    {
      'message' : '200',
      'owner' : {
        'email' : '2222@222',
        'name' : '2222'
      },
      'tripInfo': {
        'tripId' : '2222',
        'destination' : 'NY',
        'time' : '2014-04-14 : 2014-5-14',
        'fee' : '$1000',
        'companion' : {
          'sex' : 'female',
          'major' : 'CS',
          'age' : '24',
          'college' : 'NYU'
        },
        'timeFlexible' : 'true',
        'message' : 'TBA'
      }
    }
  ];



  return {

    getTripDetail : function(tripId){
      return hardCodeReturnDetailList['0'];
    }


//    getOwner : function(){
//      return hardCodeOwner;
//    },
//
//    getTripDetail : function(){
//      return hardCodeDetailTrip;
//    }
  }

})