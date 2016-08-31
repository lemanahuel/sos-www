'use strict';

angular
  .module('courses')
  .controller('chCoursesLevelsController', ['$scope',
    function($scope) {
      var vm = this;

      // TOOD: volarlo cuando esten normalizados los cursos de nivel 1 y 2
      function setCareers(item) {
        var level = null,
          x = 0,
          le = 0,
          baseLevelOne = {},
          baseLevelTwo = {};

        x = 0;
        le = item.levels.length;
        for (x; x < le; x++) {
          level = item.levels[x];
          level.id_career = parseInt(level.id_career, 10);
          level.id_level = parseInt(level.id_level, 10);

          if (level.id_career === 1) {
            if (level.id_level === 1) {
              baseLevelOne = level;
            } else if (level.id_level === 2) {
              baseLevelTwo = level;
            }
          }

          if (level.url) {
            if (level.url.indexOf('disenador-') !== -1) {
              level.url = 'disenador-web';
              level.tecnologies = level.tecnologies || baseLevelOne.tecnologies;
            } else if (level.url.indexOf('programador-') !== -1) {
              level.url = 'programador-web';
              level.tecnologies = level.tecnologies || baseLevelTwo.tecnologies;
            }
          }
        }

        vm.course = item;
      }
      setCareers($scope.course);
    }
  ]);
