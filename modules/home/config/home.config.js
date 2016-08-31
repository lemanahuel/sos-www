'use strict';

angular
  .module('home')
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'modules/home/views/home.view.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        });
    }
  ]);
