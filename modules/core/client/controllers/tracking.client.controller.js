/* eslint indent: 0 */
'use strict';

angular
  .module('core')
  .run(['$rootScope', '$state', '$timeout', 'FLYERS', '$location',
    function ($rootScope, $state, $timeout, FLYERS, $location) {

      function tracking(params, state) {
        params = params || {};
        var title = '',
          description = '',
          image = FLYERS.DEFAULT;
        state = state || $state.current.name;

        switch (state) {
        case 'business':
          title = 'Cursos para empresas | Formación y capacitación de empleados';
          description = 'Cursos de Programación, Marketing y Diseño para empresas. Capacita a tu equipo en  Front End, Full Stack y mucho más.';
          image = FLYERS.BUSINESS || FLYERS.DEFAULT;
          break;
        case 'certification':
          title = params.title ? 'Mi certificado de ' + params.title + ' | Coderhouse' : 'Certificado | @Coderhouse';
          description = params.description;
          image = params.image || FLYERS.CERTIFICATION || FLYERS.DEFAULT;
          break;
        case 'methodology':
          title = 'Metodología | Coderhouse';
          description = 'Aprendé haciendo';
          image = FLYERS.METHODOLOGY || FLYERS.DEFAULT;
          break;
        case 'testimonies':
          title = 'Testimonios y opiniones a propósito de Coderhouse';
          description = 'Conoce lo que dicen los alumnos que tomaron los cursos de CoderHouse, sus historias y los casos de éxito.';
          image = FLYERS.TESTIMONIES || FLYERS.DEFAULT;
          break;
        case 'space':
          title = 'Espacios | Coderhouse';
          description = 'Ten tu propia escuela presencial y gana dinero alquilando tu espacio en los horarios que más te convengan.';
          image = FLYERS.SPACES || FLYERS.DEFAULT;
          break;
        case 'workshops':
          title = 'Workshops y Eventos | Coderhouse';
          description = 'Conéctate con todos los workshops y eventos de tu cuidad.';
          image = FLYERS.WORKSHOPS || FLYERS.DEFAULT;
          break;
        case 'workshop':
          title = params.title + ' | ' + (params.type === 'workshop' ? 'Workshop' : 'Evento') + ' | Coderhouse';
          description = params.description;
          image = params.image || FLYERS.WORKSHOP || FLYERS.DEFAULT;
          break;
        case 'jobs':
        case 'job-new':
          title = 'Empleos | Coderhouse';
          description = 'Encuentra el trabajo de tus sueños';
          image = FLYERS.JOBS || FLYERS.DEFAULT;
          break;
        case 'teach-with-us':
          title = 'Conviértete en instructor | Coderhouse';
          description = 'Sumate al equipo de Coderhouse';
          image = FLYERS.TEACH_WITH_US || FLYERS.DEFAULT;
          break;
        case 'work-with-us':
          title = 'Trabaja con nosotros | Coderhouse';
          description = 'Sumate al equipo de Coderhouse';
          image = FLYERS.WORK_WITH_US || FLYERS.DEFAULT;
          break;
        case 'job':
          title = params.title + ' | Empleo | Coderhouse';
          description = params.description;
          image = FLYERS.JOB || FLYERS.DEFAULT;
          break;
        case 'courses':
          title = 'Cursos Presenciales | Conviértete en un profesional';
          description = 'Cursos para aprender diseño web, programación web, desarrollo Front End, Full Stack y Móvil.';
          image = params.image || FLYERS.COURSES || FLYERS.DEFAULT;
          break;
        case 'course':
          title = params.title;
          description = params.description;
          image = params.image || FLYERS.DEFAULT;
          break;
        case 'remote':
          title = params.title;
          description = params.description;
          image = params.image || FLYERS.REMOTE || FLYERS.DEFAULT;
          break;
        case 'career':
          title = params.title;
          description = params.description;
          image = params.image || FLYERS.DEFAULT;
          break;
        default:
          // Home
          title = 'Coderhouse | Cursos de Programación, Marketing y Diseño';
          description = 'Escuela de Programación Web y Mobile, Diseño UX y Marketing Online. Cursos presenciales y remotos.';
          break;
        }

        $rootScope.SITE = {
          title: title,
          description: description,
          image: image.replace('https', 'http'),
          image_secure: image,
          url: $location.$$absUrl
        };

        $timeout(function () {
          $rootScope.$apply();
        });
      }

      $rootScope.$on('App:Tracking', function (e, params, state) {
        tracking(params, state);
      });
    }
  ]);
