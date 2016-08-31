/* eslint angular/window-service: 0 */
/* eslint indent: 0 */
'use strict';

angular
  .module('core')
  .run(['$rootScope', '$state',
    function ($rootScope, $state) {
      $rootScope.REDIRECT = function (show, state) {
        if ($state.params.programSlug) {
          $state.go(state || 'home', {
            programSlug: $state.params.programSlug
          });
        } else {
          $state.go('404');
        }
      };
    }
  ])
  .run(['$rootScope', '$window',
    function ($rootScope, $window) {
      var currentLocaleId = null,
        storage = $window.sessionStorage.getItem('CH-locale');

      switch (storage || $window.navigator.language) {
      case 'en':
        currentLocaleId = 'en_US';
        break;
      default:
        currentLocaleId = 'es_AR';
        break;
      }

      $rootScope.LOCALE = currentLocaleId;
      $window.sessionStorage.setItem('CH-locale', currentLocaleId.split('_')[0]);
    }
  ])
  .run(['$rootScope', '$cookies', '$state', '$window', 'CurrencySrv', 'CountriesSrv', 'LanguagesSrv',
    function ($rootScope, $cookies, $state, $window, CurrencySrv, CountriesSrv, LanguagesSrv) {
      if (angular.isDefined(window.Mercadopago)) {
        window.Mercadopago.setPublishableKey('TEST-543d42a8-f8e8-4b66-80fb-da7cc30061a8');
      }

      CountriesSrv.get().then(function (data) {
        var currentIso = data && data.data && data.data.iso;

        if (currentIso !== LanguagesSrv.get()) {
          LanguagesSrv.set(currentIso);
        }

        CurrencySrv.get().then(function (data) {
          $rootScope.currencies = {};

          angular.forEach(data.data, function (value) {
            switch (value.iso_code) {
            case 'ARS':
              $rootScope.currencies.ar = value;
              break;
            case 'CLP':
              $rootScope.currencies.cl = value;
              break;
            case 'UYU':
              $rootScope.currencies.uy = value;
              break;
            default:
              $rootScope.currencies.ar = value;
              break;
            }
          });
          $rootScope.currentCurrency = $rootScope.currencies[LanguagesSrv.get()];
        });
      });

      $rootScope.$on('$routeChangeStart', function () {
        $(document).trigger('changeUrl');
      });

      $rootScope.$on('$stateChangeSuccess', function () {
        $window.scrollTo(0, 0);
      });
    }
  ]);
