'use strict';
const {retrieveData,} = require('./firebaseApi.js');
const {createProjectCards,} = require('./dom.js');

// function navEvents () {
//   $(document).on('click', function (e) {
//     switch (e.target.id) {
//       case 'blogs-btn':
//         $('#blogs-div').removeClass('hidden');
//         $('#projects-div').addClass('hidden');

//         retrieveData('blogs').then(function (results) {
//           createBlogPosts(results);
//         }).catch(console.error.bind(console));
//         break;
//     }
//   });
// }

function addProjects () {
  retrieveData('projects').then(function (results) {
    createProjectCards(results);
  }).catch(console.error.bind(console));
}

module.exports = {
  addProjects,
};
