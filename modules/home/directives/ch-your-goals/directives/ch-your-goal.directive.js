'use strict';

angular
  .module('home')
  .directive('chYourGoals', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/ch-your-goals/views/ch-your-goal.view.html',
      scope: {}
    };
  }]);
