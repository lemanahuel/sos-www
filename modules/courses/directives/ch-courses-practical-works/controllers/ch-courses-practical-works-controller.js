'use strict';

angular
  .module('courses')
  .controller('chCoursesPracticalWorksController', ['$scope',
    function($scope) {
      var vm = this;
      vm.course = $scope.course;
    }
  ]);
