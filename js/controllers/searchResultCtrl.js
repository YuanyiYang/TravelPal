/**
 * Created by yuanyiyang on 5/8/14.
 */

starter.controller('SearchResultCtrl', function ($scope, SearchResultService) {
      $scope.resultTrips = SearchResultService.searchResult;
    }
);