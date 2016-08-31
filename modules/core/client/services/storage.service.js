'use strict';

angular
  .module('core')
  .service('StorageSrv', [function () {
    return {
      set: function (key, value) {
        if (value) {
          localStorage.setItem(key, angular.toJson(value));
        }
        return this.get(key);
      },
      get: function (key) {
        var res = localStorage.getItem(key);
        return angular.isDefined(res) ? angular.fromJson(res) : false;
      }
    };
  }]);
