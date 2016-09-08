'use strict';

angular
  .module('core')
  .service('TeachersSrv', ['LanguagesSrv',
    function (LanguagesSrv) {
      var teachers = [{
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/nahuel-lema.jpg',
        first_name: 'Nahuel',
        last_name: 'Lema',
        courses: ['experto-frontend', 'experto-full-stack', 'experto-movil', 'desarrollo-full-stack', 'desarrollo-frontend', 'desarrollo-movil', 'programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Full Stack',
          company: {
            name: 'Coderhouse',
            logo: '/modules/core/client/img/companies/coderhouse_logo.png'
          }
        },
        social: {
          linkedin: 'https://www.linkedin.com/in/nahuellema',
          twitter: 'https://twitter.com/lemanahuel',
          github: 'https://github.com/lemanahuel'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/lucas-gallucci.jpg',
        first_name: 'Lucas',
        last_name: 'Gallucci',
        courses: ['disenador-web'],
        job: {
          title: 'Desarrollador Frontend',
          company: {
            name: 'Coderhouse',
            logo: '/modules/core/client/img/companies/coderhouse_logo.png'
          }
        },
        social: {
          web: 'http://www.lucasgallucci.com',
          linkedin: 'https://www.linkedin.com/in/lucasgallucci',
          twitter: 'https://twitter.com/lucasgallucci',
          github: 'https://github.com/lucasgallucci'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/hernan-lucio.jpg',
        first_name: 'Hernán',
        last_name: 'Lucio',
        courses: ['diseno-grafico', 'diseno-ux', 'diseno', 'programador-web', 'disenador-web'],
        job: {
          title: 'Diseñador UI/UX',
          company: {
            name: 'Mercado Libre',
            logo: '/modules/core/client/img/companies/mercadolibre_logo.png'
          }
        },
        social: {
          web: 'https://www.behance.net/hernanlucio',
          linkedin: 'https://www.linkedin.com/in/hernanlucio',
          twitter: 'https://twitter.com/h_lucio',
          github: 'https://github.com/hlucio'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/ayelen-santamaria.jpg',
        first_name: 'Ayelén',
        last_name: 'Santamaría',
        courses: ['diseno-grafico', 'diseno-ux', 'diseno'],
        job: {
          title: 'Diseñador UX',
          company: {
            name: 'Garbarino',
            logo: '/modules/core/client/img/companies/garbarino_logo.jpg'
          }
        },
        social: {
          web: 'https://www.behance.net/ayelensantamaria',
          linkedin: 'https://www.linkedin.com/in/ayelensantamaria'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/diego-amenabar.jpg',
        first_name: 'Diego',
        last_name: 'Amenabar',
        courses: ['experto-full-stack', 'experto-movil', 'desarrollo-full-stack', 'desarrollo-frontend', 'experto-frontend', 'desarrollo-movil', 'programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Full Stack',
          company: {
            name: 'Udacity',
            logo: '/modules/core/client/img/companies/udacity_logo.png'
          }
        },
        social: {
          linkedin: 'https://www.linkedin.com/in/diegoamenabar/es',
          twitter: 'https://twitter.com/d_amenabar',
          github: 'https://github.com/gody'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/javier-herrera.jpg',
        first_name: 'Javier',
        last_name: 'Herrera',
        courses: ['programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Frontend'
        },
        social: {
          web: 'http://javier-herrera.com/',
          linkedin: 'https://ar.linkedin.com/in/japsolo',
          twitter: 'https://twitter.com/Jap_Solo'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/ximena-vinitzca.jpg',
        first_name: 'Ximena',
        last_name: 'Vinitzca',
        courses: ['wordpress', 'wordpress-basico', 'wordpress-avanzado'],
        job: {
          title: 'Desarrolladora Wordpress',
          company: {
            name: 'Folka Media',
            logo: '/modules/core/client/img/companies/folka-media_logo.png'
          }
        },
        social: {
          web: 'http://www.folkamedia.com/',
          linkedin: 'https://ar.linkedin.com/in/ximena-vinitzca-8b273945',
          twitter: 'https://twitter.com/Folka_Media'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/jose-montes.jpg',
        first_name: 'Jose',
        last_name: 'Montes',
        courses: ['programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Frontend',
          company: {
            name: 'Wunderman',
            logo: '/modules/core/client/img/companies/wunderman_logo.png'
          }
        },
        social: {
          linkedin: 'https://ar.linkedin.com/in/jose-montes-38592b5a'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/melisa-lucero.jpg',
        first_name: 'Melisa',
        last_name: 'Lucero',
        courses: ['marketing', 'marketing-digital', 'marketing-digital-basico', 'marketing-digital-avanzado'],
        job: {
          title: 'Analista de Marketing Digital',
          company: {
            name: 'BGH',
            logo: '/modules/core/client/img/companies/bgh_logo.png'
          }
        },
        social: {
          linkedin: 'https://ar.linkedin.com/in/melisalucero'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/gilmar-argote.jpg',
        first_name: 'Gilmar',
        last_name: 'Argote',
        courses: ['marketing', 'marketing-digital', 'marketing-digital-basico', 'marketing-digital-avanzado'],
        job: {
          title: 'Analista de Marketing Digital',
          company: {
            name: 'Globant',
            logo: '/modules/core/client/img/companies/globant_logo.svg'
          }
        },
        social: {
          linkedin: 'https://ar.linkedin.com/in/argotegilmar/es'
        }
      }, {
        country: 'ar',
        enable: false,
        avatar: '',
        first_name: 'Matias',
        last_name: 'Blayer',
        courses: ['desarrollo-frontend', 'experto-frontend', 'programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Frontend',
          company: {
            name: 'Coderhouse',
            logo: '/modules/core/client/img/companies/coderhouse_logo.png'
          }
        },
        social: {
          linkedin: 'https://ar.linkedin.com/in/matias-blayer-49973b110'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/federico-serbin.jpg',
        first_name: 'Federico',
        last_name: 'Serbin',
        courses: ['marketing', 'marketing-digital', 'marketing-digital-basico', 'marketing-digital-avanzado'],
        job: {
          title: 'Analista de Marketing Digital',
          company: {
            name: 'DEFE Studio',
            logo: '/modules/core/client/img/companies/defe-studio_logo.png'
          }
        },
        social: {
          linkedin: 'https://ar.linkedin.com/in/federico-serbin-5939355'
        }
      }, {
        country: 'ar',
        enable: true,
        avatar: '/modules/core/client/img/profesores/brenda-ficher.jpg',
        first_name: 'Brenda',
        last_name: 'Ficher',
        courses: ['marketing', 'marketing-digital', 'marketing-digital-basico', 'marketing-digital-avanzado'],
        job: {
          title: 'Analista de Marketing Digital',
          company: {
            name: 'MOT Content',
            logo: '/modules/core/client/img/companies/mot-content_logo.svg'
          }
        },
        social: {
          linkedin: 'https://ar.linkedin.com/in/brendaefe'
        }
      }, {
        country: 'uy',
        enable: true,
        avatar: '/modules/core/client/img/profesores/nicolas-suarez.jpg',
        first_name: 'Nicolas',
        last_name: 'Suarez',
        courses: ['experto-frontend', 'experto-full-stack', 'experto-movil', 'desarrollo-full-stack', 'desarrollo-frontend', 'desarrollo-movil', 'programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Full Stack',
          company: {
            name: 'Moove-it',
            logo: '/modules/core/client/img/companies/moove-it_logo.png'
          }
        },
        social: {
          linkedin: 'https://uy.linkedin.com/in/nisuarez'
        }
      }, {
        country: 'cl',
        enable: true,
        avatar: '/modules/core/client/img/profesores/alexander-espinoza.jpg',
        first_name: 'Alexander',
        last_name: 'Espinoza',
        courses: ['desarrollo-frontend', 'experto-frontend', 'programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Frontend',
          company: {
            name: 'Groupon',
            logo: '/modules/core/client/img/companies/groupon_logo.png'
          }
        },
        social: {
          linkedin: 'https://cl.linkedin.com/in/alexanderespinozadeveloper'
        }
      }, {
        country: 'uy',
        enable: true,
        avatar: '/modules/core/client/img/profesores/sebastian-martinez.jpg',
        first_name: 'Sebastián',
        last_name: 'Martínez',
        courses: ['diseno-grafico', 'diseno-ux', 'diseno', 'disenador-web'],
        job: {
          title: 'Diseñador UI/UX',
          company: {
            name: 'SMA Design',
            logo: '/modules/core/client/img/companies/sma-design_logo.jpg'
          }
        },
        social: {
          linkedin: 'https://uy.linkedin.com/in/sebastián-martínez-0a070016'
        }
      }, {
        country: 'cl',
        enable: true,
        avatar: '/modules/core/client/img/profesores/carlos-rojas.jpg',
        first_name: 'Carlos',
        last_name: 'Rojas',
        courses: ['desarrollo-movil', 'programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Frontend',
          company: {
            name: 'Coderhouse',
            logo: '/modules/core/client/img/companies/coderhouse_logo.png'
          }
        },
        social: {
          linkedin: 'https://co.linkedin.com/in/carlosrojaso'
        }
      }, {
        country: 'uy',
        enable: true,
        avatar: '/modules/core/client/img/profesores/nicolas-alliaume.jpg',
        first_name: 'Nicolás',
        last_name: 'Alliaume',
        courses: ['desarrollo-frontend', 'experto-frontend', 'programador-web', 'disenador-web'],
        job: {
          title: 'Desarrollador Frontend',
          company: {
            name: 'ON Lab',
            logo: '/modules/core/client/img/companies/on-lab_logo.png'
          }
        },
        social: {
          linkedin: 'https://uy.linkedin.com/in/nicolás-alliaume-reissos-b09aaa4b'
        }
      }];

      function shuffleTeachers(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

      function addTeachersByRandom(items, params) {
        var random = Math.round(Math.random() * 10) + 1;
        var teacher = teachers[random];
        if (!teacher.matched) {
          items.push(teacher);
        } else if (items.length < params.limit) {
          return addTeachersByRandom(items, params);
        }
        return items;
      }

      function addTeachersByCountry(items, params) {
        angular.forEach(shuffleTeachers(teachers), function (item) {
          if (item.enable && !item.matched && item.country === params.country && items.length < params.limit) {
            items.push(item);
          }
        });

        if (items.length < params.limit) {
          items = addTeachersByRandom(items, parseInt(items.length - params.limit, 10), params);
        }
        return items;
      }

      function addTeachersBySlug(items, params) {
        angular.forEach(shuffleTeachers(teachers), function (item) {
          if (item.enable && !item.matched && item.courses.indexOf(params.slug) !== -1 && items.length < params.limit) {
            items.push(item);
          }
        });

        if (items.length < params.limit) {
          items = addTeachersByCountry(items, params);
        }
        return items;
      }

      return {
        get: function (params) {
          if (params && params.slug) {
            return this.getBySlug(params);
          }
          return this.getAll();
        },
        getBySlug: function (params) {
          params = params || {};
          params.country = LanguagesSrv.get();
          var parsed = [];
          angular.forEach(shuffleTeachers(teachers), function (item) {
            item.matched = false;
            if (item.enable && item.country === params.country && item.courses.indexOf(params.slug) !== -1 && parsed.length < params.limit) {
              item.matched = true;
              parsed.push(item);
            }
          });

          if (parsed.length < params.limit) {
            addTeachersBySlug(parsed, params);
          }
          return parsed;
        },
        getAll: function () {
          return teachers;
        }
      };
    }
  ]);
