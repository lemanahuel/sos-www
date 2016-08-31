'use strict';

angular
  .module('home')
  .directive('chLevels', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/ch-levels/views/ch-levels.view.html',
      controller: 'chLevelsController',
      controllerAs: 'vm',
      scope: {
        levels: '='
      }
    };
  }]);
