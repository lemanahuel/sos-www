'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/font-awesome/css/font-awesome.min.css',
        'public/lib/angular-loading-bar/build/loading-bar.min.css',
        'public/lib/animate.css/animate.min.css',
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/angular-bootstrap/ui-bootstrap-csp.css',
        'public/lib/Ionicons/css/ionicons.min.css',
        'public/lib/angular-google-places-autocomplete/dist/autocomplete.min.css',
        'public/lib/trix/dist/trix.css'
      ],
      js: [
        'public/lib/devicejs/lib/device.min.js',
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/angular/angular.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-cookies/angular-cookies.min.js',
        'public/lib/angular-loading-bar/build/loading-bar.min.js',
        'public/lib/angular-google-places-autocomplete/dist/autocomplete.min.js',
        'public/lib/stripe-angular/stripe-angular.js',
        'public/lib/angular-bootstrap/ui-bootstrap.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/trix/dist/trix.js',
        'public/lib/angular-trix/dist/angular-trix.min.js'
      ]
    },
    css: [
      'modules/core/client/css/styles.css',
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
