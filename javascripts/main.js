'use strict';
const {retrieveAPIKey,} = require('./apiKeys.js');
const {navEvents,} = require('./events.js');

(function startApp () {
  retrieveAPIKey();
  navEvents();
})();
