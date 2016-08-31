'use strict';

angular
  .module('courses')
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider
        .state('courses', {
          url: '/cursos',
          templateUrl: 'modules/courses/views/courses.view.html',
          controller: 'CoursesController',
          controllerAs: 'vm',
          resolve: {
            Careers: ['CareersSrv',
              function(CareersSrv) {
                return CareersSrv.get();
              }
            ],
            Currencies: ['CurrencySrv',
              function(CurrencySrv) {
                return CurrencySrv.get();
              }
            ],
            IsLanding: [function() {
              return false;
            }]
          }
        })
        .state('careers', {
          url: '/carreras',
          onEnter: ['$state',
            function($state) {
              $state.go('courses');
            }
          ]
        })
        .state('career', {
          url: '/:careerUrl',
          templateUrl: 'modules/courses/views/course.view.html',
          controller: 'CourseController',
          controllerAs: 'vm',
          resolve: {
            Course: ['CareersSrv', '$stateParams',
              function(CareersSrv, $stateParams) {
                return CareersSrv.get({
                  slug: $stateParams.careerUrl
                });
              }
            ],
            Currencies: ['CurrencySrv', function(CurrencySrv) {
              return CurrencySrv.get();
            }],
            IsLanding: [function() {
              return false;
            }]
          },
          onEnter: ['$state', '$stateParams',
            function($state, $stateParams) {
              if (!$stateParams.careerUrl && !$state.is('workshops') && !$state.is('home')) {
                return $state.go('home');
              }
              return false;
            }
          ]
        })
        .state('career-landing', {
          url: '/:careerUrl/landing?utm_source&utm_medium&utm_term&utm_content&utm_campaign',
          templateUrl: 'modules/courses/views/landing.view.html',
          controller: 'CourseController',
          controllerAs: 'vm',
          resolve: {
            Course: ['CareersSrv', '$stateParams',
              function(CareersSrv, $stateParams) {
                return CareersSrv.get({
                  slug: $stateParams.careerUrl
                });
              }
            ],
            Currencies: ['CurrencySrv', function(CurrencySrv) {
              return CurrencySrv.get();
            }],
            IsLanding: [function() {
              return true;
            }]
          }
        })
        .state('career-single', {
          url: '/carrera/:careerUrl',
          onEnter: ['$state', '$stateParams',
            function($state, $stateParams) {
              $state.go('career', {
                careerUrl: $stateParams.careerUrl
              });
            }
          ]
        })
        .state('career-plural', {
          url: '/carreras/:careerUrl',
          onEnter: ['$state', '$stateParams',
            function($state, $stateParams) {
              $state.go('career', {
                careerUrl: $stateParams.careerUrl
              });
            }
          ]
        })
        .state('career-single-landing', {
          url: '/carrera/:careerUrl/landing?utm_source&utm_medium&utm_term&utm_content&utm_campaign',
          onEnter: ['$state', '$stateParams',
            function($state, $stateParams) {
              $state.go('career-landing', $stateParams);
            }
          ]
        })
        .state('careers-plural-landing', {
          url: '/carreras/:careerUrl/landing?utm_source&utm_medium&utm_term&utm_content&utm_campaign',
          onEnter: ['$state', '$stateParams',
            function($state, $stateParams) {
              $state.go('career-landing', $stateParams);
            }
          ]
        })
        .state('course', {
          url: '/cursos/:courseUrl',
          templateUrl: 'modules/courses/views/course.view.html',
          controller: 'CourseController',
          controllerAs: 'vm',
          resolve: {
            Course: ['LevelsSrv', '$stateParams',
              function(LevelsSrv, $stateParams) {
                return LevelsSrv.get({
                  slug: $stateParams.courseUrl
                });
              }
            ],
            Currencies: ['CurrencySrv', function(CurrencySrv) {
              return CurrencySrv.get();
            }],
            IsLanding: [function() {
              return false;
            }]
          }
        })
        .state('course-single', {
          url: '/curso/:courseUrl',
          onEnter: ['$state', '$stateParams',
            function($state, $stateParams) {
              $state.go('course', {
                courseUrl: $stateParams.courseUrl
              });
            }
          ]
        })
        .state('remote', {
          url: '/remotos/:courseUrl',
          templateUrl: 'modules/courses/views/course.view.html',
          controller: 'CourseController',
          controllerAs: 'vm',
          resolve: {
            Course: ['LevelsSrv', '$stateParams',
              function(LevelsSrv, $stateParams) {
                return LevelsSrv.get({
                  slug: $stateParams.courseUrl
                });
              }
            ],
            Currencies: ['CurrencySrv', function(CurrencySrv) {
              return CurrencySrv.get();
            }],
            IsLanding: [function() {
              return false;
            }]
          }
        });
    }
  ]);
