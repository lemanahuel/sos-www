'use strict';

angular
  .module('home')
  .controller('chLevelsController', ['$scope', 'LanguagesSrv', 'LevelsSrv',
    function ($scope, LanguagesSrv, LevelsSrv) {
      var vm = this;

      function parse(levels) {
        var items = [];

        angular.forEach(levels, function (value) {
          if (value.calendar && value.calendar.length) {
            var cantLevels = items.length;
            var addLevel = true;

            //Fix levels repeat - nivel 1 / 2 in careers
            for (var i = 0; i < cantLevels; i++) {
              if (value.subtitle === items[i].subtitle) {
                addLevel = false;
                i = cantLevels;
              }
            }

            if (addLevel) {
              value.class = value.subtitle.split(' ').join('-').toLowerCase();
              value.tecnologiesToString = '';
              angular.forEach(value.tecnologies, function (tec, key) {
                var suffix = key === 0 ? '' : ' - ';
                value.tecnologiesToString += suffix + tec.title;
              });
              items.push(value);
            }
          }
        });

        vm.levels = items;
      }

      if ($scope.levels) {
        parse($scope.levels);
      } else {
        LevelsSrv.get().then(function (res) {
          parse(res && res.data);
        });
      }
    }
  ]);
