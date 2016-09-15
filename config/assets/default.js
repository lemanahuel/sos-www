'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/animate.css/animate.min.css',
        'public/lib/magnific-popup/dist/magnific-popup.css',
        'public/lib/OwlCarousel/owl-carousel/owl.carousel.min.css',
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/angular-bootstrap/ui-bootstrap-csp.css'
      ],
      js: [
        'public/lib/devicejs/lib/device.min.js',
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/jquery.easing/js/jquery.easing.min.js',
        'public/lib/bootstrap/dist/js/bootstrap.min.js',
        'public/lib/waypoints/lib/jquery.waypoints.min.js',
        'public/lib/magnific-popup/dist/jquery.magnific-popup.min.js',
        'public/lib/OwlCarousel/owl-carousel/owl.carousel.min.js',
        'public/lib/jquery-countTo/jquery.countTo.js',
        'public/lib/angular/angular.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-cookies/angular-cookies.min.js',
        'public/lib/angular-loading-bar/build/loading-bar.min.js'
      ]
    },
    css: [
      'modules/core/client/css/icomoon.css',
      'modules/core/client/css/simple-line-icons.css',
      'modules/core/client/css/owl.theme.default.min.css',
      'modules/core/client/css/salvattore.css',
      'modules/core/client/css/style.css'
    ],
    less: [],
    sass: [
      'modules/core/client/sass/*.scss',
      'modules/**/sass/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/core/client/*.js',
      'modules/core/client/config/*.js',
      'modules/core/client/services/*.js',
      'modules/core/client/controllers/*.js',
      'modules/core/client/directives/*.js',
      'modules/core/client/filters/*.js',
      'modules/**/*.service.js',
      'modules/home/*.module.js',
      'modules/!(core)/**/*.js'
    ],
    views: [
      'modules/**/!(server)/views/*.html'
    ]
  },
  server: {
    allJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'modules/core/server/**/*.js'],
    models: 'modules/core/server/models/**/*.js',
    routes: ['modules/core/server/routes/**/*.js'],
    sockets: [],
    config: ['modules/core/server/config/*.js'],
    policies: [],
    views: 'modules/core/server/views/*.html'
  }
};
