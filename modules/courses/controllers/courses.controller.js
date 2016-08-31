'use strict';

angular
  .module('courses')
  .controller('CoursesController', ['Careers', 'Currencies', 'IsLanding', '$rootScope', 'LanguagesSrv', '$state',
    function(Careers, Currencies, IsLanding, $rootScope, LanguagesSrv, $state) {
      $rootScope.bodyClass = ['seccion-courses', $state.params.courseUrl].join(' ');
      var vm = this;
      $rootScope.bodyClass = 'seccion-careers';
      vm.lang = LanguagesSrv.get();
      vm.careers = Careers && Careers.data;
      console.log(vm.careers);

      $rootScope.$emit('App:Tracking');
    }
  ]);
