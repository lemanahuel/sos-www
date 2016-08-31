'use strict';

angular
  .module('courses')
  .controller('chCoursesTeacherController', ['$scope', 'LanguagesSrv', 'TeachersSrv',
    function($scope, LanguagesSrv, TeachersSrv) {
      var vm = this;
      var teachers = TeachersSrv.get({
        slug: $scope.course.url,
        limit: 3
      });
      vm.teachers = teachers;
      console.log(vm.teachers);
    }
  ]);
