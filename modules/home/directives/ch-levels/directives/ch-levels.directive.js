'use strict';

angular
  .module('home')
  .directive('chLevels', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/sos-levels/views/sos-levels.view.html',
      controller: 'chLevelsController',
      controllerAs: 'vm',
      scope: {
        levels: '='
      }
    };
  }]);
