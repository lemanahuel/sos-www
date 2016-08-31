'use strict';

angular
  .module('courses')
  .directive('chCoursesTeacher', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/courses/directives/ch-courses-teacher/views/ch-courses-teacher.view.html',
      controller: 'chCoursesTeacherController',
      controllerAs: 'vm',
      scope: {
        course: '='
      }
    };
  }]);
