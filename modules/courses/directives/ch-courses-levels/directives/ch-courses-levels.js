'use strict';

angular
  .module('courses')
  .directive('chCoursesLevels', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/courses/directives/ch-courses-levels/views/ch-courses-levels.view.html',
      controller: 'chCoursesLevelsController',
      controllerAs: 'vm',
      scope: {
        course: '='
      }
    };
  }]);