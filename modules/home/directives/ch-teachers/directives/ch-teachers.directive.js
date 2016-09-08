'use strict';

angular
  .module('home')
  .directive('chTeachers', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/sos-teachers/views/sos-teachers.view.html',
      scope: {}
    };
  }]);