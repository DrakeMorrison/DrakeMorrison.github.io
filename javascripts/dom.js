'use strict';

function createProjectCards (inputArray) {
  let domString = '';
  inputArray.forEach((e) => {
    domString += `<div class="col s12 m6 l4">`;
    domString +=  `<div class='card'>`;
    domString +=    `<div class="card-image">`;
    domString +=      `<img src="${e.thumbnail}">`;
    domString +=      `<a href="${e.url}" target="_blank" class="btn-floating pulse halfway-fab waves-effect waves-light red"><i class="material-icons">call_made</i></a>`;
    domString +=    `</div>`;
    domString +=    `<div class="card-content">`;
    domString +=      `<span class="card-title flow-text">${e.title}</span>`;
    domString +=      `<p class='flow-text'>${e.description}</p>`;
    domString +=    `</div>`;
    domString +=    `<div class="card-action">`;
    domString +=      `<a href="${e.github}">See it in GitHub</a>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString += `</div>`;
  });
  writeToDom(domString, '#projects-div');
}

function createBlogPosts (data) {
  const blogArray = data.reverse();
  let domString = '';
  // let counter = 1;
  blogArray.forEach((e, i) => {
    // if (counter === 1) {
    //   domString += `<ul class='collapsible popout'>`;
    // }
    domString +=   `<li>`;
    domString +=    `<div class="collapsible-header flow-text">${e.date}: ${e.title}</div>`;
    domString +=    `<div class="collapsible-body"><span class='flow-text'>${e.post}</span></div>`;
    domString +=   `</li>`;
    // if (counter === 5 || i === blogArray.length) {
    //   domString += `</ul>`;
    //   counter = 0;
    // }
    // counter++;
  });
  writeToDom(domString, '#blogs-div');
}

const writeToDom = (str, id) => $(id).html(str);

module.exports = {
  createProjectCards,
  createBlogPosts,
};
