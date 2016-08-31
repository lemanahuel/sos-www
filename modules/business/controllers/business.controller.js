'use strict';

angular
  .module('business')
  .controller('BusinessController', ['Business', 'SuscriptionSrv', '$rootScope', '$window', '$document', 'StorageSrv',
    function(Business, SuscriptionSrv, $rootScope, $window, $document, StorageSrv) {
      var vm = this;
      var userData = StorageSrv.get('ch-user-data');
      vm.business = Business;
      $rootScope.bodyClass = 'empresas';
      $window.scroll(0, 0);
      vm.form = userData || {};
      vm.form.btnValue = 'Enviar';

      vm.onSubmitForm = function() {
        if (!vm.form.block && vm.form.name && vm.form.email && vm.form.phone) {
          vm.form.btnValue = 'Enviando...';
          SuscriptionSrv.setBusiness({
            name: vm.form.name,
            name_business: vm.form.name_business,
            email: vm.form.email,
            phone: vm.form.phone
          }).then(function() {
            vm.form.btnValue = 'REVISA TU CASILLA DE MAIL.';
            vm.form.btnColor = '#69bfac';
            vm.form.block = true;
          }, function() {
            vm.form.btnValue = 'Hubo un problemilla, vuelve a intentar mas tarde';
          });
        }
      };

      $rootScope.$emit('App:Tracking');
    }
  ]);
