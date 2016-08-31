'use strict';

const config = require('../../../../config/config'),
  robots = require('../controllers/robots');

module.exports = (app) => {
  let core = require('../controllers/core.server.controller');

  app.route('/robots.txt').get(robots.getFile);
  app.route('/sitemap.xml').get(robots.getFile);
  app.route('/500').get(core.renderServerError);
  app.route('/404').get(core.renderNotFound);
  app.route('/*').get(core.renderIndex);
};
