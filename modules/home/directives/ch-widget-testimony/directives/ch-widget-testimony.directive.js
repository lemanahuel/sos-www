'use strict';

angular
  .module('home')
  .directive('chWidgetTestimony', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/ch-widget-testimony/views/ch-widget-testimony.view.html',
      scope: {}
    };
  });