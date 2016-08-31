'use strict';

angular
  .module('home')
  .directive('chHomeFront', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/ch-home-front/views/ch-home-front.view.html',
      controller: 'chHomeFrontController',
      controllerAs: 'vm',
      scope: {}
    };
  }]);
