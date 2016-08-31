'use strict';

angular
  .module('home')
  .controller('HomeController', ['$rootScope', '$scope', 'LanguagesSrv',
    function($rootScope, $scope, LanguagesSrv) {
      var vm = this;
      $rootScope.bodyClass = 'home';
      vm.lang = LanguagesSrv.get();
      $rootScope.$emit('App:Tracking');
    }
  ]);
