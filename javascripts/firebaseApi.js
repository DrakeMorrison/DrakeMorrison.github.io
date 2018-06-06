'use strict';

let firebaseConfig = {};

function setConfig (input) {
  firebaseConfig = input;
}

function retreiveBlogs () {
  const blogs = [];
  return new Promise(function (resolve, reject) {
    $.ajax(`${firebaseConfig.databaseURL}/blogs.json`)
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
  retreiveBlogs,
  setConfig,
};
