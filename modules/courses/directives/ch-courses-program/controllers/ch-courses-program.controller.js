'use strict';

angular
  .module('courses')
  .controller('chCoursesProgramController', ['$scope',
    function($scope) {
      var vm = this;
      var course = $scope.course;

      vm.course = $scope.course;
      vm.isLanding = $scope.isLanding;

      if (course && course.calendar) {
        angular.forEach(course.calendar, function(calendar, key) {
          if (course.calendar && course.calendar[key]) {
            course.calendar[key].content = calendar.content.split('•	');
          }
        });
      }

      vm.course = course;

      vm.viewProgram = function() {
        $scope.$parent.vm.viewProgram();
      };
    }
  ]);
