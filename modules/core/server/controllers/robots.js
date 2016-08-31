'use strict';

module.exports = {
  getFile: (req, res) => {
    let text = 'User-agent: *\nDisallow: /';

    if (req.hostname === 'www.coderhouse.com') {
      text = 'Sitemap: https://www.coderhouse.com/sitemap.xml';
    }

    res.send(text);
  },

  alexaVerification: (req, res) => {
    res.send('<html><head><meta name="alexaVerifyID" content=""/></head><body></body></html>');
  //res.send('<html><head><meta name="alexaVerifyID" content="m3TAK8ueVrNB4xPscqvVRSMu0Aw" /></head><body></body></html>');
  }
};
