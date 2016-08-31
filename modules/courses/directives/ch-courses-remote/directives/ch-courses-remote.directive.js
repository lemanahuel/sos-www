'use strict';

angular
  .module('courses')
  .directive('chCoursesRemote', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/courses/directives/ch-courses-remote/views/ch-courses-remote.view.html'
    };
  }]);