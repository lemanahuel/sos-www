/* eslint angular/window-service: 0 */
'use strict';

window.APP = (function() {
  var NAME = 'SOS-WWW';

  return {
    NAME: NAME,
    DEPENDENCIES: [
      'ngAnimate',
      'ngCookies',
      'ui.router',
      'angular-loading-bar'
    ],
    ADD_MODULE: function(moduleName, dependencies) {
      angular.module(moduleName, dependencies || []);
      angular.module(NAME).requires.push(moduleName);
    }
  };
}());
