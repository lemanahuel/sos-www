'use strict';

angular
  .module('home')
  .directive('chWidgetTestimony', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/sos-widget-testimony/views/sos-widget-testimony.view.html',
      scope: {}
    };
  });