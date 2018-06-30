'use strict';
const {retrieveAPIKey,} = require('./apiKeys.js');
const {addProjects, addBlogs,} = require('./events.js');

(function startApp () {
  retrieveAPIKey().then(function () {
    addProjects();
    addBlogs();
  }).catch(console.error.bind(console));

  // Materialize Initiation
  $(function () {
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
  });

})();
