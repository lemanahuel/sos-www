'use strict';

const config = require('./config/config'),
  express = require('./config/lib/express');

express.init();

console.log('CH-WWW application started on port ' + config.port + ' or secure ' + config.securePort);
