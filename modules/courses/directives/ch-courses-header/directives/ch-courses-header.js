'use strict';

angular
  .module('courses')
  .directive('chCoursesHeader', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/courses/directives/ch-courses-header/views/ch-courses-header.view.html',
      controller: 'chCoursesHeaderController',
      controllerAs: 'vm',
      scope: {
        course: '='
      }
    };
  }]);