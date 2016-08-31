'use strict';

angular
  .module('core')
  .service('CurrencySrv', ['$http', 'PATHS', 'LanguagesSrv',
    function($http, PATHS, LanguagesSrv) {
      return {
        get: function(params) {
          if (params && params.id) {
            return this.getById(params);
          }
          return $http.get(PATHS.CURRENCY, {
            params: {
              country: LanguagesSrv.get()
            }
          });
        },
        getById: function(params) {
          return $http.get(PATHS.CURRENCY + '/' + params.id, {
            params: {
              country: LanguagesSrv.get()
            }
          });
        }
      };
    }
  ]);
