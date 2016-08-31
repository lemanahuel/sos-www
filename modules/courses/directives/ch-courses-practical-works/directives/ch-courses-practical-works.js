'use strict';

angular
  .module('courses')
  .directive('chCoursesPracticalWorks', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/courses/directives/ch-courses-practical-works/views/ch-courses-practical-works.view.html',
      controller: 'chCoursesPracticalWorksController',
      controllerAs: 'vm',
      scope: {
        course: '='
      }
    };
  }]);