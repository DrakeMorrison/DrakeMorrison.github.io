'use strict';

function createProjectCards (inputArray) {
  let domString = '';
  inputArray.forEach((e) => {
    domString += `<div class="col s12 l4">`;
    domString += `<div class='card'>`;
    domString += `<div class="card-image">`;
    domString += `<img src="${e.thumbnail}">`;
    domString += `<a href="${e.url}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">redo</i></a>`;
    domString += `</div>`;
    domString += `<div class="card-content">`;
    domString += `<span class="card-title">${e.title}</span>`;
    domString += `<p>${e.description}</p>`;
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
