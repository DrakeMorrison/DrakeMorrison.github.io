'use strict';

let firebaseConfig = {};

function setConfig (input) {
  firebaseConfig = input;
}

function retrieveData (collection) {
  const blogs = [];
  return new Promise(function (resolve, reject) {
    $.ajax(`${firebaseConfig.databaseURL}/${collection}.json`)
      .done(function (allBlogs) {
        if (allBlogs !== null) {
          Object.keys(allBlogs).forEach(function (key) {
            allBlogs[key].id = key;
            blogs.push(allBlogs[key]);
          });
        }
        resolve(blogs);
      })
      .fail(function (error) {
        reject(error);
      });
  });
}

function retrieveProjects () {
  const blogs = [];
  return new Promise(function (resolve, reject) {
    $.ajax(`${firebaseConfig.databaseURL}/projects.json`)
      .done(function (allBlogs) {
        if (allBlogs !== null) {
          Object.keys(allBlogs).forEach(function (key) {
            allBlogs[key].id = key;
            blogs.push(allBlogs[key]);
          });
        }
        resolve(blogs);
      })
      .fail(function (error) {
        reject(error);
      });
  });
}

module.exports = {
  retrieveData,
  retrieveProjects,
  setConfig,
};
