'use strict';

angular
  .module('business')
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider
        .state('business', {
          url: '/empresas',
          templateUrl: 'modules/business/views/business.view.html',
          controller: 'BusinessController',
          controllerAs: 'vm',
          resolve: {
            Business: ['BusinessSrv', function(BusinessSrv) {
              return BusinessSrv.get();
            }]
          }
        });
    }
  ]);
