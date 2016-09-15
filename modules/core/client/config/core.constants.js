/* eslint angular/window-service: 0 */
/* eslint angular/document-service: 0 */

'use strict';

window.CH_API = (function() {
  var host = location.host,
    base = 'localhost:3002';

  if (host.indexOf('herokuapp') !== -1) {
    base = (host.indexOf('-qa') !== -1 ? 'sos-api-qa' : 'sos-api') + '.herokuapp.com';
  } else if (host.indexOf('coderhouse') !== -1) {
    base = 'api.coderhouse.' + (host.indexOf('.io') !== -1 ? 'io' : 'com');
  } else if (host.indexOf('localhost') === -1) {
    base = host.split(':')[0] + ':3002';
  }

  return 'https://' + base;
}());

angular
  .module('core');
