'use strict';
const {retrieveData,} = require('./firebaseApi.js');
const {createProjectCards, createBlogPosts,} = require('./dom.js');

function addProjects () {
  retrieveData('projects').then(function (results) {
    createProjectCards(results);
  }).catch(console.error.bind(console));
}

function addBlogs () {
  retrieveData('blogs').then(function (results) {
    createBlogPosts(results);
  }).catch(console.error.bind(console));
}

module.exports = {
  addProjects,
  addBlogs,
};
