'use strict';
const {retrieveAPIKey,} = require('./apiKeys.js');
const {addProjects,} = require('./events.js');

(function startApp () {
  retrieveAPIKey().then(function () {
    addProjects();
  }).catch(console.error.bind(console));

  $(document).ready(function () {
    $('.sidenav').sidenav();
  });

  // $(document).ready(function () {
  //   $('.parallax').parallax();
  // });

})();
