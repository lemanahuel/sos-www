'use strict';

angular
  .module('core')
  .directive('chMetaContent', [function() {
    return {
      link: function($scope, $el, $attrs) {
        $scope.$watch($attrs.chMetaContent, function(value) {
          if (value) {
            $el[0].setAttribute('content', value);
          }
        });
      }
    };
  }]);
