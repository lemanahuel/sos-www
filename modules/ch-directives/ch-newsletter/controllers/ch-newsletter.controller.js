'use strict';

angular
  .module('ch-newsletter')
  .controller('FormNewslleterController', ['$scope', 'SuscriptionSrv', 'StorageSrv',
    function($scope, SuscriptionSrv, StorageSrv) {
      var vm = this;
      var userData = StorageSrv.get('ch-user-data');
      vm.email = userData && userData.email ? userData.email : '';
      vm.forJobs = !!$scope.job;

      vm.sendSuscription = function() {
        vm.valueSubmit = 'Enviando...';
        if (vm.email) {
          if (vm.forJobs) {
            SuscriptionSrv.setJobNewsletter({
              email: vm.email
            }).then(function() {
              vm.valueSubmit = 'Gracias.';
            });
          } else {
            SuscriptionSrv.setNewsletter({
              email: vm.email
            }).then(function() {
              vm.valueSubmit = 'Gracias.';
            });
          }
        }
      };
    }
  ]);
