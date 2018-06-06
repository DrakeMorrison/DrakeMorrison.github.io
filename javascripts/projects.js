'use strict';

const writeToDom = (domString, domId) => {
    document.getElementById(domId).innerHTML += domString;
  }

function createProjectCards() {
    const data = JSON.parse(this.responseText);
    let domString = '';
    data.projects.forEach((e) => {
        domString += '<article>';
        domString +=    `<img src="${e.imageUrl}">`;
        domString +=    `<h2>${e.title}</h2>`;
        domString +=    `<p>${e.description}</p>`;
        domString +=    `<a href="${e.githubUrl}">See it in Github</a>`;
        domString += `</article>`;
    });
    writeToDom(domString, 'my-projects');
}

function xhrFail() {
    console.log('Something went wrong');
};

const startApplication = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', createProjectCards);
    myRequest.addEventListener('error', xhrFail);
    myRequest.open('GET', '/db/projects.json');
    myRequest.send();
};

startApplication();