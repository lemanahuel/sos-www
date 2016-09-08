'use strict';

angular
  .module('home')
  .directive('chWidgetWorkshops', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/sos-widget-workshops/views/sos-widget-workshops.view.html',
      controller: 'chWidgetWorkshopsController',
      controllerAs: 'vm',
      scope: {}
    };
  }]);