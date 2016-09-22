/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'ember-auth-torii-firebase',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: "AIzaSyCttCtCcT6k-twyMNSWXYv7eQiRIcsZ0PE",
      authDomain: "ember-auth-torii-firebase.firebaseapp.com",
      databaseURL: "https://ember-auth-torii-firebase.firebaseio.com",
      storageBucket: "ember-auth-torii-firebase.appspot.com",
      messagingSenderId: "536851694350"
    },

    torii: {
      // a 'session' property will be injected on routes and controllers
      sessionServiceName: 'session',

      providers: {
        'facebook-oauth2': {
          apiKey: '1781020008840025',
          redirectUri: '/protected' // default is the current URL
        },
        'twitter-oauth2': {
          apiKey: 'bEi4HU1WdVTmKJhMXeu2KPK3F',
          redirectUri: '/protected' // default is the current URL
        }
      }
    } /* jshint node: true */



  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
