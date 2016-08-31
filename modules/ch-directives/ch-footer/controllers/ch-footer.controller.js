'use strict';

angular
  .module('ch-footer')
  .controller('chFooterController', ['$rootScope', '$scope', '$window', '$state', '$uibModal',
    function($rootScope, $scope, $window, $state, $uibModal) {
      var vm = this;

      function viewParts() {
        var pathname = location.pathname.split('/')[1];

        if (['empresas', 'workshop', 'inscripcion-remoto'].indexOf(pathname) !== -1) {
          vm.footerTop = false;
          vm.footerMiddle = false;
        } else {
          vm.footerTop = true;
          vm.footerMiddle = true;
        }
      }

      viewParts();

      vm.linkSocial = function(link) {
        $window.open(link);
      };

      vm.onClickSnapchat = function(e) {
        e.preventDefault();
        $uibModal.open({
          animation: true,
          size: 'lg',
          templateUrl: 'snapchat.modal.html',
          controller: ['$scope', '$uibModalInstance',
            function($scope, $uibModalInstance) {
              $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
              };
            }
          ]
        });
      };

      $(document).on('changeUrl', function() {
        viewParts();
      });
    }
  ]);
