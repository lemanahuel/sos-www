'use strict';

angular
  .module('home')
  .directive('chTeachers', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/ch-teachers/views/ch-teachers.view.html',
      scope: {}
    };
  }]);