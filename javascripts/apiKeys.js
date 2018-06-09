'use strict';
const {setConfig,} = require('./firebaseApi.js');

function getAPIKey () {
  return new Promise(function (resolve, reject) {
    $.get('/db/apiKeys.json')
      .done(function (data) {
        resolve(data);
      })
      .fail(function (err) {
        reject('error', err);
      });
  });
}

function retrieveAPIKey () {
  getAPIKey().then(function (results) {
    setConfig(results.firebase.apiKeys);
    firebase.initializeApp(results.firebase.apiKeys);
  }).catch(console.error.bind(console));
}

module.exports = {
  retrieveAPIKey,
};
