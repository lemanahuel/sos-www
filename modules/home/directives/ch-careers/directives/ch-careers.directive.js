'use strict';

angular
  .module('home')
  .directive('chCareers', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/sos-careers/views/sos-careers.view.html',
      controller: 'chCareersController',
      controllerAs: 'vm',
      scope: {
        careers: '=',
        hideTitle: '@'
      }
    };
  }]);
