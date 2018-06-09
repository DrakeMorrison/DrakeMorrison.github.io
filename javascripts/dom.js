'use strict';

function createProjectCards (inputArray) {
  let domString = '';
  inputArray.forEach((e) => {
    domString += '<article>';
    domString +=    `<img src="${e.thumbnail}" class='img-thumbnail img-responsive'>`;
    domString +=    `<h2>${e.title}</h2>`;
    domString +=    `<p>${e.description}</p>`;
    domString +=    `<p>Technologies Used: ${e.technologiesUsed}</p>`;
    domString +=    `<a href="${e.github}" target='_blank'>See it in Github</a>`;
    domString +=    `<a href='${e.url}' target="_blank">Go to Project Page</a>`;
    domString += `</article>`;
  });
  writeToDom(domString, '#my-projects');
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
