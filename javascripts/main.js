'use strict';
const {retrieveAPIKey,} = require('./apiKeys.js');
const {retreiveBlogs,} = require('./firebaseApi.js');
const {} = require('./events.js');

(function startApp () {
  retrieveAPIKey();
  retreiveBlogs();
})();
