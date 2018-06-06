'use strict';

function createProjectCards (inputArray) {
  let domString = '';
  inputArray.forEach((e) => {
    domString += '<article>';
    domString +=    `<img src="${e.imageUrl}">`;
    domString +=    `<h2>${e.title}</h2>`;
    domString +=    `<p>${e.description}</p>`;
    domString +=    `<a href="${e.githubUrl}">See it in Github</a>`;
    domString += `</article>`;
  });
  writeToDom(domString, '#my-projects');
}

function createBlogPosts () {
  const data = JSON.parse(this.responseText).blogs;
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
