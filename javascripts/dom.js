'use strict';

function createProjectCards (inputArray) {
  let domString = '';
  inputArray.forEach((e) => {
    domString += `<div class="col s12 m6 l4">`;
    domString += `<div class='card'>`;
    domString += `<div class="card-image">`;
    domString += `<img src="${e.thumbnail}">`;
    domString += `<a href="${e.url}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">call_made</i></a>`;
    domString += `</div>`;
    domString += `<div class="card-content">`;
    domString += `<span class="card-title flow-text">${e.title}</span>`;
    domString += `<p class='flow-text'>${e.description}</p>`;
    domString += `</div>`;
    domString += `<div class="card-action">`;
    domString += `<a href="${e.github}">See it in GitHub</a>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  writeToDom(domString, '#projects-div');
}

function createBlogPosts (data) {
  let domString = '';
  data.forEach((e) => {
    domString += '<article>';
    domString +=      `<h2>${e.title}</h2>`;
    domString +=      `<em>${e.date}</em>`;
    domString +=      `<p>${e.post}</p>`;
    domString += `</article>`;
  });
  writeToDom(domString, '#my-blogs');
}

const writeToDom = (str, id) => $(id).html(str);

module.exports = {
  createProjectCards,
  createBlogPosts,
};
