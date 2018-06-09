'use strict';
const {retrieveAPIKey,} = require('./apiKeys.js');
const {retreiveBlogs,} = require('./firebaseApi.js');
const {createBlogPosts,} = require('./dom.js');

(function startApp () {
  retrieveAPIKey();
  retreiveBlogs()
    .then(function (results) {
      createBlogPosts(results);
    })
    .catch(console.error.bind(console));
})();
