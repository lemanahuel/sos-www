'use strict';

angular
  .module('home')
  .directive('chVideoMaster', ['$http', '$templateCache',
    function($http, $templateCache) {

      var modal = (function() {
        var $body = $('body'),
          view = 'modules/home/directives/sos-video-master/views/sos-video-master.view.html';

        $http.get(view).then(function(data) {
          $templateCache.put(view, data.data);
          view = $templateCache.get(view);
        });

        return {
          open: function() {
            $body.append(view);
            $body.find('.modal.video').css('top', $(window).scrollTop()).show();
            $body.find('.modal.video .close-button').off('click').click(modal.close);
            $body.css('overflow-y', 'hidden');
          },
          close: function() {
            $body.css('overflow-y', 'visible').find('.modal.video').remove();
          }
        };
      })();

      function link(scope, ele) {
        angular.element(ele).unbind('click').bind('click', function() {
          modal.open();
        });
      }

      return {
        restrict: 'A',
        link: link,
        scope: {}
      };
    }
  ]);
