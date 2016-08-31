'use strict';

angular
  .module('core')
  .service('CertificationsSrv', ['$http', 'PATHS', '$document',
    function ($http, PATHS, $document) {
      function setLink(params, endpoint) {
        var $a = $document[0].createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', PATHS.CERTIFICATIONS + '/' + params.id + endpoint);
        $a.click();
      }

      return {
        get: function (params) {
          params = params || {};
          if (params.id) {
            return this.getById(params);
          }
          return false;
        },
        getById: function (params) {
          return $http.get(PATHS.CERTIFICATIONS + '/' + params.id);
        },
        print: function (params) {
          return setLink(params, '/print');
        },
        download: function (params) {
          return setLink(params, '/download');
        }
      };
    }
  ]);
