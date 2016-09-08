'use strict';

angular
  .module('core')
  .service('SuscriptionSrv', ['$http', 'PATHS', 'LanguagesSrv', 'StorageSrv',
    function($http, PATHS, LanguagesSrv, StorageSrv) {
      function storageBasicData(params) {
        StorageSrv.set('sos-user-data', params);
      }

      return {
        setBusiness: function(params) {
          storageBasicData(params);
          return $http.post(PATHS.SUSCRIPTION_BUSINESS, {
            name: params.name,
            email: params.email,
            phone: params.phone,
            country: LanguagesSrv.get(),
            type: 'empresa'
          });
        },
        setNewsletter: function(params) {
          storageBasicData(params);
          return $http.post(PATHS.SUSCRIPTION_NEWSLETTER, {
            email: params.email,
            country: LanguagesSrv.get(),
            type: 'newsletter'
          });
        },
        setJobNewsletter: function(params) {
          storageBasicData(params);
          return $http.post(PATHS.SUSCRIPTION_NEWSLETTER, {
            email: params.email,
            country: LanguagesSrv.get(),
            type: 'job-newsletter'
          });
        },
        setCourse: function(params) {
          storageBasicData(params);
          return $http.post(PATHS.SUSCRIPTION_COURSE, {
            name: params.name,
            email: params.email,
            phone: params.phone,
            course: params.course,
            details: params.details,
            classCareer: params.classCareer,
            country: LanguagesSrv.get(),
            type: 'programa'
          });
        },
        setWorkshop: function(params) {
          storageBasicData(params);
          return $http.post(PATHS.SUSCRIPTION_WORKSHOP, {
            name: params.name,
            email: params.email,
            phone: params.phone,
            workshop: params.workshop,
            country: LanguagesSrv.get(),
            type: 'workshop'
          });
        },
        setFreeClass: function(params) {
          storageBasicData(params);
          return $http.post(PATHS.SUSCRIPTION_COURSE, {
            name: params.name,
            email: params.email,
            phone: params.phone,
            course: params.course,
            country: LanguagesSrv.get(),
            type: 'free-class'
          });
        },
        setLandingCourse: function(params) {
          storageBasicData(params);
          return $http.post(PATHS.SUSCRIPTION_COURSE, {
            name: params.name,
            email: params.email,
            phone: params.phone,
            course: params.course,
            utm_campaign: params.utm_campaign,
            utm_content: params.utm_content,
            utm_medium: params.utm_medium,
            utm_source: params.utm_source,
            utm_term: params.utm_term,
            country: LanguagesSrv.get(),
            type: 'landing-course'
          });
        },
        setLandingWorkshop: function(params) {
          storageBasicData(params);
          return $http.post(PATHS.SUSCRIPTION_WORKSHOP, {
            name: params.name,
            email: params.email,
            phone: params.phone,
            utm_campaign: params.utm_campaign,
            utm_content: params.utm_content,
            utm_medium: params.utm_medium,
            utm_source: params.utm_source,
            utm_term: params.utm_term,
            country: LanguagesSrv.get(),
            type: 'landing-workshop'
          });
        }
      };
    }
  ]);
