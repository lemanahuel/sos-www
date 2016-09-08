'use strict';

angular
  .module('core')
  .service('LanguagesSrv', ['$cookies', '$rootScope',
    function($cookies, $rootScope) {
      var defaultLang = 'ar';

      return {
        get: function() {
          $rootScope.LANG = $cookies.get('sos-lang') || defaultLang;
          return $rootScope.LANG;
        },
        set: function(lang) {
          lang = ['ar', 'uy', 'cl'].indexOf(lang) !== -1 ? lang : defaultLang;
          $cookies.put('sos-lang', lang);
          return this.get();
        },
        refresh: function() {
          return;
        }
      };
    }
  ]);
