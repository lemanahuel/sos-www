'use strict';

angular
  .module('courses')
  .directive('chCoursesDate', [function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/courses/directives/ch-courses-date/views/ch-courses-date.view.html',
      controller: 'chCoursesDateController',
      controllerAs: 'vm',
      scope: {
        course: '=',
        currencies: '='
      }
    };
  }]);
