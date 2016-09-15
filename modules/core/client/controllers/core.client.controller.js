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
  .run(['$rootScope', '$cookies', '$state', '$window',
    function ($rootScope, $cookies, $state, $window) {
      $rootScope.$on('$routeChangeStart', function () {
        $(document).trigger('changeUrl');
      });

      $rootScope.$on('$stateChangeSuccess', function () {
        $window.scrollTo(0, 0);
      });
    }
  ]);
