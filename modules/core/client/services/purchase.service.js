'use strict';

angular
  .module('core')
  .service('PurchaseSrv', ['$http', 'PATHS', 'LanguagesSrv', '$cookies',
    function($http, PATHS, LanguagesSrv, $cookies) {
      function getLang() {
        return $cookies.get('sos-lang') || LanguagesSrv.get();
      }

      return {
        setEffective: function(params) {
          return $http.post(PATHS.PURCHASE + '/' + getLang() + '/effective', {
            course: params.course,
            title: params.title,
            name: params.name,
            email: params.email,
            phone: params.phone,
            know: params.know,
            country: getLang()
          });
        },
        setCreate: function(params) {
          return $http.post(PATHS.PURCHASE + '/' + getLang() + '/create', {
            title: params.title,
            level: params.level,
            unit_price: params.unit_price,
            id_course: params.id_course,
            name: params.name,
            last_name: params.last_name,
            email: params.email,
            phone: params.phone,
            know: params.know,
            currency_id: params.iso_code,
            country: getLang()
          });
        },
        setOk: function(params) {
          return $http.post(PATHS.PURCHASE + '/' + getLang() + '/ok', {
            title: params.title,
            level: params.level,
            currency_id: params.iso_code,
            unit_price: params.unit_price,
            name: params.name,
            last_name: params.last_name,
            email: params.email,
            phone: params.phone,
            idPurchase: params.idPurchase,
            country: getLang()
          });
        },
        setFail: function(params) {
          return $http.post(PATHS.PURCHASE + '/' + getLang() + '/fail', {
            title: params.title,
            level: params.level,
            currency_id: params.iso_code,
            unit_price: params.unit_price,
            name: params.name,
            last_name: params.last_name,
            email: params.email,
            phone: params.phone,
            idPurchase: params.idPurchase,
            country: getLang()
          });
        }
      };
    }
  ]);
