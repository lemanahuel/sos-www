'use strict';

angular
  .module('core')
  .service('SharesSrv', ['$rootScope', '$stateParams', '$window', '$document', '$location',
    function($rootScope, $stateParams, $window, $document, $location) {
      $rootScope.SITE = $rootScope.SITE || {};

      function openWindow(params) {
        $window.open(params.url, params.title || '', params.size || 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      }

      function getUrl(url) {
        url = url || $location.absUrl();
        var host = location.host;
        return encodeURIComponent(host.indexOf('herokuapp') !== -1 || host.indexOf('localhost') !== -1 ? 'https://www.coderhouse.com' + location.pathname : url);
      }

      return {
        withFacebook: function(url) {
          openWindow({
            url: 'https://www.facebook.com/sharer/sharer.php?u=' + getUrl(url),
            title: 'facebook-share-dialog',
            size: 'width=626,height=436'
          });
        },

        withTwitter: function(url) {
          var text = encodeURIComponent($rootScope.SITE.title.replace(/\|/g, ' ').replace('Coderhouse', ''));

          openWindow({
            url: 'https://twitter.com/intent/tweet?url=' + getUrl(url) + '&amp;hashtags=coderhouse,vamospormas&amp;via=Coderhouse&amp;text=' + text
          });
        },

        withGooglePlus: function(url) {
          openWindow({
            url: 'https://plus.google.com/share?url={' + getUrl(url) + '}'
          });
        },

        withLinkedin: function(url) {
          openWindow({
            url: 'https://www.linkedin.com/shareArticle?mini=true&url=' + getUrl(url) + '&title=' + $rootScope.SITE.title + '&summary=' + $rootScope.SITE.description + '&source=Coderhouse'
          });
        },

        //Nahuel:
        //Agregado al elemento que hace click y no detender el evento
        withWhatsApp: function(url) {
          return 'whatsapp://send?text=' + $rootScope.SITE.title + ' | ' + getUrl(url);
        }
      };
    }
  ]);
