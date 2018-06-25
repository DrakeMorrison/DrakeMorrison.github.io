'use strict';
const {retrieveAPIKey,} = require('./apiKeys.js');
const {navEvents,} = require('./events.js');

(function startApp () {
  retrieveAPIKey();
  navEvents();

  $(document).ready(function () {
    $('.sidenav').sidenav();
  });

  // $(document).ready(function () {
  //   $('.parallax').parallax();
  // });

})();
