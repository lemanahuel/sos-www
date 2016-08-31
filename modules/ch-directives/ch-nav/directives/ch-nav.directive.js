'use strict';

angular
  .module('ch-nav')
  .directive('chNav', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/ch-directives/ch-nav/views/ch-nav.view.html',
      controller: 'chNavController',
      controllerAs: 'vm',
      scope: {}
    };
  }]);
