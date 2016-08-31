'use strict';

angular
  .module('ch-nav')
  .controller('chNavController', ['LanguagesSrv', '$window', '$scope', '$rootScope',
    function (LanguagesSrv, $window, $scope, $rootScope) {
      var vm = this;
      vm.lang = LanguagesSrv.get();
      vm.isCollapsedPres = false;
      vm.isCollapsedRemoto = false;
      vm.mobileNavBarCollapse = true;

      vm.onClickCollapseNavBar = function () {
        vm.mobileNavBarCollapse = vm.mobileNavBarCollapse ? false : true;
      };

      angular.element($window.document).click(function (e) {
        if ((vm.isCollapsedPres || vm.isCollapsedRemoto) && !/dropdown/.test(e.target.parentElement.className)) {
          vm.isCollapsedPres = false;
          vm.isCollapsedRemoto = false;
          $scope.$digest();
        }
      });

      $rootScope.$on('$stateChangeSuccess', function () {
        console.log('stateChangeSuccess');
        vm.lang = LanguagesSrv.get();
        vm.mobileNavBarCollapse = true;
      });

      vm.onClickPrintCert = function (e) {
        e.preventDefault();
        $rootScope.$emit('Certification:Print');
      };

      vm.onClickDownloadCert = function (e) {
        e.preventDefault();
        $rootScope.$emit('Certification:Download');
      };
    }
  ]);
