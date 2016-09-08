/* eslint angular/window-service: 0 */
/* eslint angular/document-service: 0 */
/* eslint dot-notation: 0 */
/* eslint indent: 0 */

'use strict';

$.fn.scrollTo = function (target, options, callback) {
  if (angular.isFunction(options) && arguments.length === 2) {
    callback = options;
    options = target;
  }

  var settings = $.extend({
    scrollTarget: target,
    offsetTop: 50,
    duration: 500,
    easing: 'swing'
  }, options);

  return this.each(function () {
    var scrollPane = $(this);
    var scrollTarget = angular.isNumber(settings.scrollTarget) ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = angular.isNumber(scrollTarget) ? scrollTarget : (scrollTarget.offset().top + scrollPane.scrollTop()) - parseInt(settings.offsetTop, 10);
    scrollPane.animate({
      scrollTop: scrollY
    }, parseInt(settings.duration, 10), settings.easing, function () {
      if (angular.isFunction(callback)) {
        callback.call(this);
      }
    });
  });
};

//Start by defining the main module and adding the module dependencies
angular.module(window.APP.NAME, window.APP.DEPENDENCIES);

angular.element(document).ready(function () {
  if (window.location.hash === '#_=_') {
    window.location.hash = '#!';
  }

  angular.bootstrap(document, [window.APP.NAME], {
    strictDi: true
  });
});
