'use strict';

angular
  .module('home')
  .controller('chHomeFrontController', ['LanguagesSrv',
    function(LanguagesSrv) {
      var vm = this;
      var videos = [{
        source: 'modules/core/client/videos/coderhouse-background_izkqcr.mp4',
        type: 'video/mp4'
      }, {
        source: 'modules/core/client/videos/coderhouse-background_izkqcr.ogv',
        type: 'video/ogg'
      }, {
        source: 'modules/core/client/videos/coderhouse-background_izkqcr.webm',
        type: 'video/webm'
      }];

      vm.lang = LanguagesSrv.get();
      vm.videos = document.getElementsByClassName('desktop').length ? videos : false;

      vm.onClickSeeCourses = function(e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $('#carreras').offset().top + 50
        }, 700);
      };
    }
  ]);
