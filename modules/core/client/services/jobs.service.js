'use strict';

angular
  .module('core')
  .service('JobsSrv', ['$http', 'PATHS', 'LanguagesSrv',
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
          return $http.get(PATHS.JOBS, {
            params: {
              country: LanguagesSrv.get(),
              startDate: new Date().getTime(),
              fields: params.fields,
              limit: params.limit
            }
          });
        },
        getById: function(params) {
          return $http.get(PATHS.JOBS + '/' + params._id, {
            params: {
              country: LanguagesSrv.get()
            }
          });
        },
        getBySlug: function(params) {
          return $http.get(PATHS.JOBS + '/slug/' + params.slug, {
            params: {
              country: LanguagesSrv.get()
            }
          });
        },
        set: function(params) {
          return $http.post(PATHS.JOBS, angular.extend(params.job, {
            origin_country: LanguagesSrv.get()
          }));
        },
        setPostulate: function(params) {
          params = params || {};
          params.country = LanguagesSrv.get();
          return $http.post(PATHS.JOBS + '/' + params._id + '/postulate', params);
        }
      };
    }
  ]);
