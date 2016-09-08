'use strict';

angular
  .module('home')
  .directive('chHomeFront', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/sos-home-front/views/sos-home-front.view.html',
      controller: 'chHomeFrontController',
      controllerAs: 'vm',
      scope: {}
    };
  }]);
