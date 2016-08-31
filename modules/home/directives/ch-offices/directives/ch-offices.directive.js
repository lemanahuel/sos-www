'use strict';

angular
  .module('home')
  .directive('chOffices', [function() {
    // function link(scope, element, attrs) {
    //   //id - Fill-270 (Santiago)
    //   //id - Fill-354 (Bueno Aires)
    //   //id - Fill-408 (Montevideo)
    //   /*var santiago = element[0].contentDocument.getElementById('Fill-270');
    //   var buenosaires = element[0].contentDocument.getElementById('Fill-354');
    //   var montevideo = element[0].contentDocument.getElementById('Fill-408');
    //   santiago.style.fill = "#65c4ae";
    //   buenosaires.style.fill = "#65c4ae";
    //   montevideo.style.fill = "#65c4ae";*/
    // }

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/home/directives/ch-offices/views/ch-offices.view.html',
      scope: {}
    };
  }]);