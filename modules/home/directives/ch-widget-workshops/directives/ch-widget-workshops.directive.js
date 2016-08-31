'use strict';

angular
  .module('home')
  .directive('chWidgetWorkshops', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/ch-widget-workshops/views/ch-widget-workshops.view.html',
      controller: 'chWidgetWorkshopsController',
      controllerAs: 'vm',
      scope: {}
    };
  }]);