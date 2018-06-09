'use strict';
const {retrieveData, retrieveProjects,} = require('./firebaseApi.js');
const {createBlogPosts, createProjectCards,} = require('./dom.js');

function navEvents () {
  $(document).on('click', function (e) {
    switch (e.target.id) {
      case 'blogs-btn':
        $('#blogs-div').removeClass('hidden');
        $('#projects-div').addClass('hidden');

        retrieveData('blogs').then(function (results) {
          createBlogPosts(results);
        }).catch(console.error.bind(console));
        break;
      case 'projects-btn':
        $('#projects-div').removeClass('hidden');
        $('#blogs-div').addClass('hidden');

        retrieveProjects().then(function (results) {
          createProjectCards(results);
        }).catch(console.error.bind(console));
        break;
    }
  });
}

module.exports = {
  navEvents,
};
