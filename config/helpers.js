'use strict';

const env = process.env.NODE_ENV || 'development',
  _ = require('lodash');

module.exports.forceHttps = (req, res, next) => {
  // let url = req.url ? req.url : '';
  // var host = req.hostname;
  //
  // if (!req.secure) {
  //   if (env === 'development') {
  //     host = 'localhost:3040';
  //   } else if (host === 'sos-www.herokuapp.com' || host === 'voluntariosos.com') {
  //     host = 'www.voluntariosos.com';
  //   }
  //
  //   res.redirect(301, 'https://' + host + url);
  // } else if (host === 'sos-www.herokuapp.com' || host === 'voluntariosos.com') {
  //   res.redirect(301, 'https://www.voluntariosos.com' + url);
  // } else {
  //   next();
  // }
  next();
};

module.exports.redirectUpperCase = (req, res, next) => {
  let lowerPath = req.path.toLowerCase();

  if (lowerPath !== req.path && req.path !== '/m3TAK8ueVrNB4xPscqvVRSMu0Aw.html') {
    res.redirect(301, req.url.replace(req.path, lowerPath));
  } else {
    next();
  }
};
