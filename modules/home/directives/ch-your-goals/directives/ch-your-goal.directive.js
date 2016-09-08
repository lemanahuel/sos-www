'use strict';

angular
  .module('home')
  .directive('chYourGoals', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/sos-your-goals/views/sos-your-goal.view.html',
      scope: {}
    };
  }]);
