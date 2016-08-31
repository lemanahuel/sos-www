'use strict';

angular
  .module('home')
  .controller('chCareersController', ['$scope', 'LanguagesSrv', 'CareersSrv',
    function ($scope, LanguagesSrv, CareersSrv) {
      var vm = this;
      vm.hideTitle = !!$scope.hideTitle;
      vm.classCareer = {
        1: 'frontend',
        2: 'fullstack',
        3: 'movil',
        6: 'wordpress',
        4: 'diseno',
        5: 'marketing'
      };

      // TOOD: volarlo cuando esten normalizados los cursos de nivel 1 y 2
      function setCareers(items) {
        var item = null,
          level = null,
          i = 0,
          l = items.length,
          x = 0,
          le = 0,
          baseLevelOne = null,
          baseLevelTwo = null,
          totalWeeks = 0;

        for (i; i < l; i++) {
          item = items[i];
          if (item.courses) {
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

              totalWeeks += parseInt(level.detail.weeks, 10);

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
            item.detail = item.detail || {};
            item.detail.weeks = totalWeeks;
            totalWeeks = 0;
          }
        }

        vm.careers = items;
      }

      if ($scope.careers) {
        setCareers($scope.careers);
      } else {
        CareersSrv.get().then(function (res) {
          setCareers(res && res.data);
          console.log(vm.careers);
        });
      }
    }
  ]);
