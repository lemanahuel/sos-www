/* eslint angular/window-service: 0 */
/* eslint angular/document-service: 0 */

'use strict';

window.CH_API = (function () {
  var host = location.host,
    base = 'localhost:3002';

  if (host.indexOf('herokuapp') !== -1) {
    base = (host.indexOf('-qa') !== -1 ? 'ch-api-qa' : 'ch-api') + '.herokuapp.com';
  } else if (host.indexOf('coderhouse') !== -1) {
    base = 'api.coderhouse.' + (host.indexOf('.io') !== -1 ? 'io' : 'com');
  } else if (host.indexOf('localhost') === -1) {
    base = host.split(':')[0] + ':3002';
  }

  return 'https://' + base;
}());

angular
  .module('core')
  .constant('PATHS', {
    API: window.CH_API,
    SUSCRIPTION_BUSINESS: window.CH_API + '/subscriptions/business',
    SUSCRIPTION_NEWSLETTER: window.CH_API + '/subscriptions/newsletter',
    SUSCRIPTION_COURSE: window.CH_API + '/subscriptions/course',
    SUSCRIPTION_WORKSHOP: window.CH_API + '/subscriptions/workshop',
    PURCHASE: window.CH_API + '/purchase',
    CURRENCY: window.CH_API + '/currency',
    WORKSHOPS: window.CH_API + '/workshops',
    LEVELS: window.CH_API + '/levels',
    CAREERS: window.CH_API + '/careers',
    COURSES: window.CH_API + '/courses',
    JOBS: window.CH_API + '/jobs',
    CERTIFICATIONS: window.CH_API + '/certifications',
    COUNTRY_GEO: window.CH_API + '/country/geo',
    STRIPE: window.CH_API + '/save-customer-stripe'
  })
  .constant('FLYERS', {
    DEFAULT: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1469131287/new-ch-flyer_pjcnxq.jpg',
    FRONTEND: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1469131287/new-ch-front-end-flyer_g4coqz.jpg',
    UX: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1469220935/new-ch-ux-flyer_wxr1k7.jpg',
    MKT: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1469220935/new-ch-mkt-flyer_ppqb1k.jpg',
    BACKEND: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1469220935/new-ch-back-end-flyer_lb0gnn.jpg'
  })
  .constant('COURSES_COLORS', {
    'disenador-web': '#40c4ff',
    'programador-web': '#03a9f4',
    frontend: '#536dfe',
    fullstack: '#FF5722',
    movil: '#9c27b0',
    marketing: '#8BC34A',
    marketing1: '#673AB7',
    marketing2: '#8BC34A',
    wordpress: '#303F9F',
    wordpress1: '#3F51B5',
    wordpress2: '#303F9F',
    'disenador-grafico': '#FF4081',
    'diseno-ux': '#F44336',
    diseno: '#D32F2F'
  })
  .constant('COURSES_LOGOS', {
    'disenador-web': 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182840/disenador-web_cgdjko.png',
    'programador-web': 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182837/programador-web_bj9xzn.png',
    frontend: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182835/experto-frontend_mssacz.png',
    fullstack: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182836/experto-full-stack_pldrr8.png',
    movil: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182836/experto-movil_a8kzhj.png',
    marketing1: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182837/marketing-digital-basico_zttnji.png',
    marketing2: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182837/marketing-digital-avanzado_deqez7.png',
    wordpress1: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182839/wordpress-basico_pml6oo.png',
    wordpress2: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182839/wordpress-avanzado_up7wyi.png',
    'disenador-grafico': 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470240226/diseno-grafico_otphco.png',
    'diseno-ux': 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470182835/diseno-ux_ddfwvs.png',
    angular: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470240266/angular_tcrxmh.png',
    htmlcss: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470240266/htmlcss_y5qoai.png',
    react: 'http://res.cloudinary.com/hdsqazxtw/image/upload/v1470240265/react_i8twyj.png'
  });
