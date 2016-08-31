'use strict';

angular
  .module('ch-newsletter')
  .directive('chNewsletter', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/ch-directives/ch-newsletter/views/ch-newsletter.view.html',
      controller: 'FormNewslleterController',
      controllerAs: 'vm',
      scope: {
        job: '@'
      }
    };
  }]);
