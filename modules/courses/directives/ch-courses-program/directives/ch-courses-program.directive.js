'use strict';

angular
  .module('courses')
  .directive('chCoursesProgram', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/courses/directives/ch-courses-program/views/ch-courses-program.view.html',
      controller: 'chCoursesProgramController',
      controllerAs: 'vm',
      scope: {
        course: '=',
        isLanding: '='
      }
    };
  }]);
