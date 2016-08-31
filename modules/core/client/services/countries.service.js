'use strict';

angular
  .module('core')
  .service('CountriesSrv', ['$http', 'PATHS',
    function($http, PATHS) {
      return {
        get: function() {
          return $http.get(PATHS.COUNTRY_GEO);
        }
      };
    }
  ]);
