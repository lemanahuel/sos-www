'use strict';

angular
  .module('core')
  .service('CareersSrv', ['$http', 'PATHS', 'LanguagesSrv',
    function($http, PATHS, LanguagesSrv) {
      return {
        get: function(params) {
          params = params || {};
          if (params.id) {
            return this.getById(params);
          }
          if (params.slug) {
            return this.getBySlug(params);
          }
          return this.getAll(params);
        },
        getAll: function(params) {
          return $http.get(PATHS.CAREERS, {
            params: {
              country: LanguagesSrv.get(),
              startDate: new Date().getTime(),
              fields: params.fields
            }
          });
        },
        getById: function(params) {
          return $http.get(PATHS.CAREERS + '/' + params.id, {
            params: {
              country: LanguagesSrv.get(),
              startDate: new Date().getTime()
            }
          });
        },
        getBySlug: function(params) {
          return $http.get(PATHS.CAREERS + '/slug/' + params.slug, {
            params: {
              country: LanguagesSrv.get(),
              startDate: new Date().getTime(),
              fields: '-testimonials,-teacher,-internal_subtitle'
            }
          });
        }
      };
    }
  ]);
