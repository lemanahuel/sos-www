'use strict';

angular
  .module('courses')
  .controller('CourseController', ['Course', 'Currencies', 'IsLanding', '$stateParams', '$rootScope', 'LanguagesSrv', '$state', 'SuscriptionSrv', '$location', 'ModalSrv', 'PurchaseSrv',
    function (Course, Currencies, IsLanding, $stateParams, $rootScope, LanguagesSrv, $state, SuscriptionSrv, $location, ModalSrv, PurchaseSrv) {
      $rootScope.bodyClass = ['seccion-' + $state.current.name, $state.params.careerUrl || $state.params.courseUrl].join(' ');
      var vm = this;
      vm.currencies = {};
      vm.currentCountry = LanguagesSrv.get();
      vm.isLanding = IsLanding;

      angular.forEach(Currencies && Currencies.data, function (value) {
        vm.currencies[value._id] = value;
      });

      function setCurrent(current) {
        if (!(current && current.data && current.data._id)) {
          $state.go('home');
          return;
        }
        var stateName = $state.current.name;
        current = current && current.data ? current.data : {};
        current.title = stateName === 'careers' || stateName === 'career' || stateName === 'career-single' ? current.title : current.subtitle;
        current.remote = stateName === 'remote';

        var courseMode = 'presencial';
        if (current.remote) {
          courseMode = 'a distancia';
        }

        current.courses = current.courses && current.courses.filter(function (el) {
          return el.mode === courseMode;
        });

        vm.course = current;
      }

      setCurrent(Course);

      function isLandingPage() {
        if (!IsLanding) {
          return;
        }
        $rootScope.HIDE_NAVBAR = IsLanding;
        $rootScope.HIDE_FOOTER = IsLanding;
        $rootScope.HIDE_FREE_CLASS = IsLanding;
        $rootScope.bodyClass += ' section-landing';

        function getCurrentCareer() {
          var careers = [{
              slug: 'diseno',
              title: 'Aprendé Diseño UX',
              subtitle: 'Conviértete en un experto en experiencia de usuario usando las herramientas necesarias para construir aplicaciones digitales.'
            }, {
              slug: 'desarrollo-full-stack',
              title: 'Aprendé Desarrollo Web',
              subtitle: 'Crea páginas y aplicaciones web con HTML5, CSS3, JavaScript, Node.js y MongoDB.'
            }, {
              slug: 'desarrollo-frontend',
              title: 'Aprendé Diseño Web',
              subtitle: 'Crea páginas y aplicaciones web con HTML5, CSS3, JavaScript, AngularJS, Firebase y más.'
            }, {
              slug: 'desarrollo-movil',
              title: 'Aprendé Desarrollo Mobile',
              subtitle: 'Crea páginas y aplicaciones mobile con HTML5, CSS3, JavaScript, AngularJS, Ionic y más.'
            }, {
              slug: 'marketing-digital',
              title: 'Aprendé Marketing Digital',
              subtitle: 'Aprende a usar las herramientas de Marketing Digital, aplica las mejores estrategias y mide los resultados.'
            }, {
              slug: 'wordpress',
              title: 'Aprendé Wordpress',
              subtitle: 'Aprende a crear páginas web, tu blog personal y un sitio de e-commerce.'
            }],
            landing = null;

          if (vm.course && !vm.course.landing) {
            angular.forEach(careers, function (item) {
              if (item.slug === $stateParams.careerUrl) {
                landing = item;
              }
            });
          } else if (vm.course && vm.course.landing) {
            landing = vm.course.landing;
          }

          return landing;
        }

        vm.landing = getCurrentCareer();
      }

      isLandingPage();

      vm.onSubmitLandingForm = function () {
        var searchParams = {};

        if ($location && $location.$$search) {
          searchParams = $location.$$search;
        }

        if (!vm.landingForm.btnSubmit && vm.landingForm.name && vm.landingForm.email && vm.landingForm.phone) {
          SuscriptionSrv.setLandingCourse(angular.extend({
            name: vm.landingForm.name,
            email: vm.landingForm.email,
            phone: vm.landingForm.phone,
            course: vm.course
          }, searchParams)).then(function () {
            vm.landingForm.btnSubmit = 'Gracias!';

            if (IsLanding) {
              $state.go('langinds-gracias');
            }
          });
        }
      };

      vm.viewProgram = function () {
        ModalSrv.openProgram({
          confirm: function (params) {
            SuscriptionSrv.setCourse({
              name: params.name,
              email: params.email,
              phone: params.phone,
              course: vm.course
            });
          }
        });
      };

      vm.inscribirme = function (date) {
        if (vm.course.remote) {
          //REMOTO
          ModalSrv.openStripe(date);
        } else {
          //PRE-INSCRIPCION
          date.title = vm.course.title;
          ModalSrv.openProgram({
            confirm: function (params) {
              PurchaseSrv.setEffective({
                name: params.name,
                email: params.email,
                phone: params.phone,
                //course: vm.course,
                title: date.title,
                course: date._id
              });
            }
          });
        }
      };

      $rootScope.$emit('App:Tracking', {
        title: vm.course && vm.course.seo && vm.course.seo.title ? vm.course.seo.title : vm.course.title,
        description: vm.course && vm.course.seo && vm.course.seo.description ? vm.course.seo.description : (vm.course.short_description || vm.course.description),
        image: vm.course ? vm.course.flyer : ''
      });
    }
  ]);
