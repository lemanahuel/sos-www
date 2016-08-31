'use strict';

angular
  .module('core')
  .service('BusinessSrv', [
    function() {
      return {
        get: function() {
          return this.getAll();
        },
        getAll: function() {
          return [{
            id: 1,
            image: 'modules/core/client/img/accenture.jpg',
            title: 'Accenture',
            description: 'Capacitación en tecnologías web Full Stack.'
          }, {
            id: 2,
            image: 'modules/core/client/img/samsung.jpg',
            title: 'Samsung',
            description: 'Capacitación en HTML5.'
          }, {
            id: 3,
            image: 'modules/core/client/img/aysa.jpg',
            title: 'AySA',
            description: 'Capacitación in-company en tecnologías móvil.'
          }, {
            id: 4,
            image: 'modules/core/client/img/BA.jpg',
            title: 'BA',
            description: 'Capacitación en tecnologías móvil para el desarrollo de su app.'
          }, {
            id: 5,
            image: 'modules/core/client/img/Banco-chile.jpg',
            title: 'Banco Chile',
            description: 'Capacitación en tecnologías móvil.'
          }];
        }
      };
    }
  ]);
