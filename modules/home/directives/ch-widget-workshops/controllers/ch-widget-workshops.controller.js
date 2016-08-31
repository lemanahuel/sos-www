'use strict';

angular
  .module('home')
  .controller('chWidgetWorkshopsController', ['LanguagesSrv', 'WorkshopsSrv',
    function(LanguagesSrv, WorkshopsSrv) {
      var vm = this;

      WorkshopsSrv.get().then(function(res) {
        var items = res && res.data;
        items = items && items.slice(0, 6);
        items.sort(function(a, b) {
          var keyA = new Date(a.date),
            keyB = new Date(b.date);
          // Compare the 2 dates
          if (keyA > keyB) {
            return -1;
          }
          if (keyA < keyB) {
            return 1;
          }
          return 0;
        });
        vm.workshops = items;
      });

    }
  ]);
