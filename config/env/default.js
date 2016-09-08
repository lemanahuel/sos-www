'use strict';

module.exports = {
  app: {
    site: 'https://www.voluntariosos.com',
    canonical: 'https://www.voluntariosos.com',
    title: 'VoluntarioSOS',
    description: '',
    keywords: '',
    image: '',
    image_secure: '',
    image_width: 861,
    image_height: 399,
    copyright: 'VoluntarioSOS',
    twitter: '@voluntariosos',
    twitter_id: '',
    fb_app_id: '',
    addressbarColor: '#69C0AC',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  securePort: process.env.PORT || 3040,
  templateEngine: 'swig',
  sessionSecret: '43oi3dfs445o3_i5h4i-5h3$oi4f%324f343%',
  sessionCollection: 'sessions',
  cdnPrefix: process.env.CDN_PREFIX || false,
  facebook: {
    clientID: process.env.FACEBOOK_APP_ID || 'ERROR_APP_ID',
    clientSecret: process.env.FACEBOOK_APP_SECRET || 'ERROR_APP_SECRET',
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'ERROR_CALLBACK_URL'
  },
  twitter: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY || 'RROR_CONSUMER_KEY',
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET || 'ERROR_CONSUMER_SECRET',
    callbackURL: process.env.TWITTER_CALLBACK_URL || 'ERROR_CALLBACK_URL'
  },
  google: {
    clientID: process.env.GOOGLE_ID || 'APP_ID',
    clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/google/callback'
  },
  mailer: {
    from: process.env.MAILER_FROM || 'MAILER_FROM',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
        pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
      }
    }
  }
};
