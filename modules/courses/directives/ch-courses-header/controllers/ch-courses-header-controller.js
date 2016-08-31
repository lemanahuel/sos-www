'use strict';

angular
  .module('courses')
  .controller('chCoursesHeaderController', ['$scope',
    function($scope) {
      var vm = this;
      vm.course = $scope.course;

      vm.viewProgram = function() {
        $scope.$parent.vm.viewProgram();
      };
    }
  ]);
