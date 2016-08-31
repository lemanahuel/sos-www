'use strict';

angular
  .module('ch-footer')
  .directive('chFooter', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/ch-directives/ch-footer/views/ch-footer.view.html',
      controller: 'chFooterController',
      controllerAs: 'vm'
    };
  }]);
