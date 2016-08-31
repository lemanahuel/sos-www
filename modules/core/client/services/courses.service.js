'use strict';

angular
  .module('core')
  .service('CoursesSrv', ['$http', 'PATHS', 'LanguagesSrv',
    function($http, PATHS, LanguagesSrv) {
      return {
        get: function(params) {
          if (params && params.id) {
            return this.getById(params);
          }
          return this.getAll();
        },
        getAll: function() {
          return $http.get(PATHS.COURSES, {
            params: {
              country: LanguagesSrv.get(),
              startDate: new Date().getTime()
            }
          });
        },
        getById: function(params) {
          return $http.get(PATHS.COURSES + '/' + params.id, {
            params: {
              country: LanguagesSrv.get()
            }
          });
        },
        getTestimonils: function() {
          return [{
            _id: 1,
            country: 'cl',
            image: 'modules/core/client/img/francisca.png',
            text: '“Sin dudas Coderhouse me abrió un mundo de posibilidades, creo que de no haber hecho el curso aún estaría en mi antiguo trabajo ¡Estoy super contenta por cómo se dió todo!”',
            before: 'Freelancer',
            after: 'Diseñadora Digital en Wunderman',
            company: {
              logo: 'modules/core/client/img/wunderman-logo.jpg',
              title: 'Wunderman'
            }
          }, {
            _id: 2,
            country: 'cl',
            image: 'modules/core/client/img/ivan.png',
            text: '“Desde el inicio del curso el equipo de Coderhouse me ayudó en mi búsqueda laboral. Me junté en varias ocasiones recibiendo asesoría laboral y consiguiendo entrevistas laborales que resultaron en mi contratación.”',
            before: 'Desempleado',
            after: 'Desarrollador de Software de LESS Industries',
            company: {
              logo: 'modules/core/client/img/less-logo.jpg',
              title: 'LESS Industries'
            }
          }, {
            _id: 3,
            country: 'ar',
            image: 'modules/core/client/img/jime.png',
            text: '“Gracias a Coderhouse aprendí las habilidades técnicas más novedosas para seguir creciendo como profesional.”',
            before: 'Analista de Marketing en Spicy',
            after: 'Email Marketing Analyst en almundo.com',
            company: {
              logo: 'modules/core/client/img/almundo-logo.jpg',
              title: 'Almundo'
            }
          }, {
            _id: 4,
            country: 'ar',
            image: 'modules/core/client/img/nahuee.png',
            text: '“Coderhouse me dió las herramientas necesarias para poder ingresar a una de las mejores empresas tecnológicas de LatinoAmérica. Pude llevar mis habilidades como programador al próximo nivel.”',
            before: 'Estudiante de Sistemas en la UTN',
            after: 'Web UI Developer en Globant',
            company: {
              logo: 'modules/core/client/img/globant-logo.jpg',
              title: 'Globant'
            }
          }];
        }
      };
    }
  ]);
