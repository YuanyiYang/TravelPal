/**
 * Created by yuanyiyang on 5/7/14.
 */

starter
    .controller('TopCtrl', function($scope, $state){

       $scope.search = function(){
         $state.go('tab.search');
       }
    });