'use strict';

angular
  .module('core')
  .service('ModalSrv', ['$uibModal', '$timeout', 'StorageSrv',
    function ($uibModal, $timeout, StorageSrv) {
      return {
        open: function (params) {
          var $modal = $uibModal.open({
            animation: true,
            size: params.size || 'sm',
            templateUrl: params.url,
            controllerAs: 'vm',
            controller: ['$uibModalInstance', 'Params',
              function ($uibModalInstance, Params) {
                var userData = StorageSrv.get('ch-user-data');
                var vm = this;
                vm.viewSubmit = 'Enviar';
                vm.params = angular.extend({}, Params, (angular.isDefined(userData) ? userData : {}));
                vm.ok = function () {
                  if (vm.params.email && vm.params.phone && vm.params.name) {
                    vm.viewSubmit = 'Enviando...';
                    vm.btnColor = '#69bfac';
                    $timeout(function () {
                      vm.viewSubmit = 'REVISA TU CASILLA DE MAIL.';
                      $timeout(function () {
                        $uibModalInstance.close(vm.params);
                        vm.cancel();
                      }, 2000);
                    }, 1000);
                  }
                };
                vm.cancel = function (e) {
                  if (e) {
                    e.stopPropagation();
                  }
                  $uibModalInstance.dismiss('cancel');
                };
              }
            ],
            resolve: {
              Params: function () {
                return params.params;
              }
            }
          });

          $modal.result.then(function (args) {
            if (params.confirm) {
              params.confirm(args);
            }
          }, function () {
            if (params.cancel) {
              params.cancel();
            }
          });
        },
        openProgram: function (params) {
          params = params || {};
          params.url = params.url || 'modules/core/client/views/form-program.modal.html';
          this.open(params);
        },
        openWorkshop: function (params) {
          params = params || {};
          params.url = params.url || 'modules/core/client/views/form-workshop.modal.html';
          this.open(params);
        },
        openPostulation: function (params) {
          params = params || {};
          params.url = params.url || 'modules/core/client/views/form-postulation.modal.html';
          this.open(params);
        },
        openStripe: function (date) {
          $uibModal.open({
            animation: true,
            size: 'sm',
            templateUrl: 'modules/core/client/views/form-payment-stripe.modal.html',
            controller: ['$scope', 'dateCouse', 'PATHS',
              function ($scope, dateCouse, PATHS) {
                // $scope is fine for
                $scope.price = dateCouse.price;
                $scope.labelBtn = 'Pagar';
                $scope.endpoint = PATHS.STRIPE;
              }
            ],
            resolve: {
              dateCouse: date
            }
          });
        }
      };
    }
  ]);
