/* eslint angular/window-service: 0 */
/* eslint angular/document-service: 0 */
/* eslint indent: 0 */

'use strict';

angular
  .module('core')
  .config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
    }
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.rule(function($injector, $location) {
        var re = /(.+)(\/+)(\?.*)?$/;
        var path = $location.url();

        if (re.test(path)) {
          return path.replace(re, '$1$3');
        }
        return false;
      });
      $urlRouterProvider.otherwise('/');
    }
  ])
  .config(['$sceProvider',
    function($sceProvider) {
      $sceProvider.enabled(false);
    }
  ])
  .config(['cfpLoadingBarProvider',
    function(cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = false;
    }
  ])
  .config(['$logProvider',
    function($logProvider) {
      $logProvider.debugEnabled(location.href.indexOf('localhost') !== -1);
    }
  ])
  .config(['$compileProvider',
    function($compileProvider) {
      $compileProvider.debugInfoEnabled(location.href.indexOf('localhost') !== -1);
    }
  ])
  .config(['$httpProvider',
    function($httpProvider) {
      var locale = window.sessionStorage.getItem('CH-locale') || window.navigator.language || 'es';

      switch (locale || window.navigator.language) {
        case 'en':
          locale = 'en_US';
          break;
        case 'es':
          locale = 'es_AR';
          break;
        default:
          locale = locale + '_' + locale.toUpperCase();
          break;
      }

      $httpProvider.defaults.headers.common['Accept-Language'] = locale;
      $httpProvider.defaults.cache = location.href.indexOf('localhost') !== -1;
      $httpProvider.useApplyAsync(true);
    }
  ])
  .config([function() {
    var isProd = location.host;
    var pk = (isProd.indexOf('coderhouse') !== -1 || isProd === 'sos-www.herokuapp.com') ? 'pk_live_161K5nmBoF8y0OyOD2XQxSRF' : 'pk_test_yphpqZgdhQrti1FH6mZLWLhp';
    var count = 10;

    function setStripe() {
      count--;
      if (window.Stripe) {
        window.Stripe.setPublishableKey(pk);
      } else if (count) {
        window.setTimeout(setStripe, 100);
      }
    }
    setStripe();
  }]);
