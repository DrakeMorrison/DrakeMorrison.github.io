'use strict';

const writeToDom = (domString, domId) => {
  $(`#${domId}`).html(domString);
    document.getElementById(domId).innerHTML = domString;
}

function createBlogPosts() {
    const data = JSON.parse(this.responseText).blogs;
    let domString = '';
    data.forEach((e) => {
        domString += '<article>';
        domString +=      `<h2>${e.title}</h2>`;
        domString +=      `<em>${e.date}</em>`;
        domString +=      `<p>${e.post}</p>`;
        domString += `</article>`;
    });
    writeToDom(domString, 'my-blogs');
}

function xhrFail() {
    console.log('Something went wrong');
}

const startApplication = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', createBlogPosts);
    myRequest.addEventListener('error', xhrFail);
    myRequest.open('GET', '/db/blogs.json');
    myRequest.send();
};

startApplication();