'use strict';

angular
  .module('home')
  .directive('chCareers', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/ch-careers/views/ch-careers.view.html',
      controller: 'chCareersController',
      controllerAs: 'vm',
      scope: {
        careers: '=',
        hideTitle: '@'
      }
    };
  }]);
