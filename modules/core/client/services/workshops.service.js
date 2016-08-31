'use strict';

angular
  .module('core')
  .service('WorkshopsSrv', ['$http', 'PATHS', 'LanguagesSrv',
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
          return $http.get(PATHS.WORKSHOPS, {
            params: {
              country: LanguagesSrv.get(),
              startDate: new Date().getTime(),
              fields: params.fields,
              limit: params.limit
            }
          });
        },
        getById: function(params) {
          return $http.get(PATHS.WORKSHOPS + '/' + params.id, {
            params: {
              country: LanguagesSrv.get()
            }
          });
        },
        getBySlug: function(params) {
          return $http.get(PATHS.WORKSHOPS + '/slug/' + params.slug, {
            params: {
              country: LanguagesSrv.get()
            }
          });
        }
      };
    }
  ]);
