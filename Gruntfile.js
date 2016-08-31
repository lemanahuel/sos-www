'use strict';

const _ = require('lodash'),
  defaultAssets = require('./config/assets/default'),
  fs = require('fs'),
  cloudfrontFwtvWww = '//d9vrie70au994.cloudfront.net',
  cloudfrontFwtvTv = '//d33utfl382x3hu.cloudfront.net';

module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
      test: {
        NODE_ENV: 'test'
      },
      dev: {
        NODE_ENV: 'development'
      },
      prod: {
        NODE_ENV: 'production'
      }
    },

    watch: {
      options: {
        spawn: false
      },
      clientViews: {
        files: defaultAssets.client.views
      },
      clientJS: {
        files: defaultAssets.client.js
      },
      clientCSS: {
        files: defaultAssets.client.css
      },
      clientSASS: {
        files: defaultAssets.client.sass,
        tasks: ['sass:dev']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ext: 'js,html',
          watch: _.union(defaultAssets.server.views, defaultAssets.server.allJS, defaultAssets.server.config),
          ignore: ['node_modules/*', 'scripts/*', 'public/*', '.idea/*', '.bower-tmp/*', '.bower-registry/*', '.bower-cache/*'],
          delay: 1000
        }
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true,
        limit: 2
      },
      default: ['nodemon:dev', 'watch'],
      prod: ['env:prod'],
      prod1: [],
      prod2: ['cssmin:prod', 'htmlmin:prod'],
      prod3: ['autoprefixer:prod', 'ngtemplates:prod'],
      prod4: ['ngAnnotate:prod_app', 'ngAnnotate:prod_libs'],
      prod5: ['uglify:prod_app', 'uglify:prod_libs'],
      prod6: ['concat:prod']
    },

    esformatter: {
      all: _.union(defaultAssets.server.allJS, defaultAssets.client.js)
    },

    prettify: {
      options: {
        config: '.prettifyrc'
      },
      all: {
        expand: true,
        cwd: '',
        src: _.union(defaultAssets.server.views, defaultAssets.client.views),
        dest: ''
      }
    },

    jshint: {
      all: {
        options: {
          force: false,
          jshintrc: true,
          reporter: require('jshint-stylish')
        },
        src: _.union(defaultAssets.client.js)
      }
    },

    eslint: {
      options: {
        configFile: '.eslintrc_angular',
        force: false,
        quiet: true,
        plugins: ['angular'],
        globals: [
          'sessionStorage',
          'localStorage',
          '$',
          'angular',
          'window',
          'document',
          'location',
          'console',
          'APP',
          'device',
          '$MPC',
          'Mercadopago',
          'require',
          'module',
          'exports',
          'process',
          'Stripe'
        ]
      },
      src: _.union(defaultAssets.client.js)

    },

    htmllint: {
      options: {
        htmllintrc: '.htmllintrc'
      },
      all: {
        src: _.union(defaultAssets.client.views, defaultAssets.server.views)
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      all: {
        src: defaultAssets.client.css
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app_di: {
        files: [{
          expand: true,
          src: [defaultAssets.client.js],
          ext: '.js',
          extDot: 'last'
        }]
      },
      prod_app: {
        files: {
          'public/.tmp/app.js': [defaultAssets.client.js, 'public/.tmp/views.js']
        }
      },
      prod_libs: {
        files: {
          'public/.tmp/libs.js': [defaultAssets.client.lib.js]
        }
      }
    },

    uglify: {
      prod_app: {
        options: {
          mangle: true,
          beautify: false,
          preserveComments: false,
          quoteStyle: 1,
          compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
          },
          banner: '\n/* <%= pkg.name %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'public/.tmp/app.submin.js': ['public/.tmp/app.js']
        }
      },
      prod_libs: {
        options: {
          mangle: false,
          beautify: false,
          preserveComments: false,
          quoteStyle: 1,
          compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
          }
        },
        files: {
          'public/.tmp/libs.submin.js': 'public/.tmp/libs.js'
        }
      }
    },

    concat: {
      options: {
        stripBanners: true,
        separator: ';'
      },
      prod: {
        src: ['public/.tmp/libs.submin.js', 'public/.tmp/app.submin.js'],
        dest: 'public/dist/ch.' + Date.now() + '.js'
      }
    },

    clean: {
      prod: ['modules/core/client/css/*.*', 'public/dist/*.*']
    },

    sass: {
      options: {
        sourceMap: false
      },
      dev: {
        files: {
          'modules/core/client/css/styles.css': 'modules/core/client/sass/styles.scss'
        }
      },
      prod: {
        files: {
          'modules/core/client/css/styles.css': 'modules/core/client/sass/styles.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      prod_sass: {
        src: 'modules/core/client/css/styles.css',
        dest: 'public/.tmp/application.css'
      },
      prod: {
        src: 'public/.tmp/application.css',
        dest: 'public/.tmp/application.css'
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        keepSpecialComments: 0,
        roundingPrecision: -1
      },
      prod: {
        src: _.union(defaultAssets.client.lib.css, ['public/.tmp/application.css']),
        dest: 'public/dist/ch.' + Date.now() + '.css'
      }
    },

    htmlmin: {
      options: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeAttributeQuotes: false,
        removeComments: true, // Only if you don't use comment directives!
        removeEmptyAttributes: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
      },
      prod: {
        files: [{
          expand: true,
          cwd: '',
          src: ['modules/core/server/views/*.html'],
          dest: ''
        }]
      }
    },

    ngtemplates: {
      prod: {
        src: ['modules/**/*.html', '!modules/core/server/**/*.html'],
        dest: 'public/.tmp/views.js',
        options: {
          module: 'core',
          htmlmin: '<%= htmlmin.options %>',
          url: (url) => {
            return url.replace('public/.tmp/views/', '');
          }
        }
      }
    },

    imagemin: {
      prod: {
        files: [{
          expand: true,
          cwd: '',
          src: ['modules/**/*.{png,jpg,gif,svg}'],
          dest: ''
        }]
      }
    },

    sloc: {
      all: {
        files: {
          'config': [
            '**/*.js'
          ],
          'modules': [
            '**/*.html',
            '**/*.css',
            '**/*.scss',
            '**/*.js'
          ]
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.option('force', true);

  grunt.registerTask('lint', [
    'ngAnnotate:app_di',
    //'esformatter',
    //'prettify',
    'jshint',
    'eslint'
    //'htmllint'
    //'csslint'
  ]);

  grunt.registerTask('build-qa', [
    'lint',
    'env:prod',
    'clean:prod',
    'imagemin:prod',
    'sass:prod',
    'autoprefixer:prod_sass',
    'cssmin:prod',
    'htmlmin:prod',
    'ngtemplates:prod',
    'ngAnnotate:prod_app',
    'ngAnnotate:prod_libs',
    'uglify:prod_app',
    'uglify:prod_libs',
    'concat:prod'
  ]);

  grunt.registerTask('build-prod', [
    'lint',
    'env:prod',
    'clean:prod',
    'imagemin:prod',
    'sass:prod',
    'autoprefixer:prod_sass',
    'cssmin:prod',
    'htmlmin:prod',
    'ngtemplates:prod',
    'ngAnnotate:prod_app',
    'ngAnnotate:prod_libs',
    'uglify:prod_app',
    'uglify:prod_libs',
    'concat:prod'
  ]);

  grunt.registerTask('build-prod-conc', [
    'concurrent:prod',
    'concurrent:prod1',
    'concurrent:prod2',
    'concurrent:prod3',
    'concurrent:prod4',
    'concurrent:prod5',
    'concurrent:prod6',
    'concurrent:prod7',
    'concurrent:prod8'
  ]);

  grunt.registerTask('styles', ['clean:prod', 'sass:prod', 'autoprefixer:prod_sass', 'cssmin:prod']);
  grunt.registerTask('default', ['env:dev', 'sass:dev', 'concurrent:default']);
  grunt.registerTask('local-prod', ['build-prod', 'concurrent:default']);
  grunt.registerTask('heroku:development', 'build-qa');
  grunt.registerTask('heroku:qa', 'build-qa');
  grunt.registerTask('heroku:production', process.env.ENV_QA ? 'build-qa' : 'build-prod');
};
