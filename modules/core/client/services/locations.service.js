'use strict';

angular
  .module('core')
  .service('LocationsSrv', [
    function() {
      return {
        get: function() {
          return this.getAll();
        },
        getAll: function() {
          return [{
            code: 'ar',
            country: 'Argentina',
            address: 'Humboldt 2142, piso 3',
            location: 'Palermo, Buenos Aires, Argentina',
            email: 'hola@coderhouse.com',
            phone: '+54 11 5252 9557'
          }, {
            code: 'cl',
            country: 'Chile',
            address: 'Av. Providencia 229',
            location: 'Providencia, Santiago, Chile',
            email: 'chile@coderhouse.com',
            phone: '+56 22 8973401'
          }, {
            code: 'uy',
            country: 'Uruguay',
            address: 'Av. Gonzalo Ramírez 1676',
            location: 'CP: 11200 Montevideo, Uruguay',
            email: 'uruguay@coderhouse.com',
            phone: '+598 2 412 1877'
          }];
        }
      };
    }
  ]);