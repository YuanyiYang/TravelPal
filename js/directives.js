/**
 * Created by yuanyiyang on 5/7/14.
 */

starter.directive('integer', function () {
  var INTEGER_REGEXP = /^\-?\d+$/;
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, controller) {
      controller.$parsers.unshift(function (viewValue) {
        if (INTEGER_REGEXP.test(viewValue)) {
          controller.$setValidity('integer', true);
          return viewValue;
        } else {
          controller.$setValidity('integer', false);
          return undefined;
        }
      });
    }
  };
});