var projects = [
    {
        id: "project1", 
        title: "Duckling Project", 
        imageUrl: "https://static.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg", 
        description: "project on ducks",
        githubUrl: "https://github.com/DrakeMorrison/DrakeMorrison.github.io"
    },
    {
        id: "project2", 
        title: "Puppy Project", 
        imageUrl: "https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg", 
        description: "project on puppies",
        githubUrl: "https://github.com/DrakeMorrison/DrakeMorrison.github.io"
    },
    {
        id: "project3", 
        title: "Hedgehog Project", 
        imageUrl: "https://static.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg", 
        description: "project on hedgehogs",
        githubUrl: "https://github.com/DrakeMorrison/DrakeMorrison.github.io"
    },
    {
        id: "project4", 
        title: "Bunny Project", 
        imageUrl: "https://static.pexels.com/photos/372166/pexels-photo-372166.jpeg", 
        description: "project on bunnies",
        githubUrl: "https://github.com/DrakeMorrison/DrakeMorrison.github.io"
    },
    {
        id: "project5", 
        title: "Panda Project", 
        imageUrl: "https://static.pexels.com/photos/148182/pexels-photo-148182.jpeg", 
        description: "project on pandas",
        githubUrl: "https://github.com/DrakeMorrison/DrakeMorrison.github.io"
    },
    {
        id: "project6", 
        title: "Kitten Project", 
        imageUrl: "https://static.pexels.com/photos/271955/pexels-photo-271955.jpeg", 
        description: "project on kittens",
        githubUrl: "https://github.com/DrakeMorrison/DrakeMorrison.github.io"
    }
  ];

  function writeToDom(domString, domId) {
    document.getElementById(domId).innerHTML += domString;
  }

//   <article>
//             <img src='https://static.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg' alt='duckling'>
//             <h2>duckling project</h2>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ullam dolor nisi veritatis, cupiditate iure omnis accusantium eveniet neque fuga. Quasi optio neque corporis cum deserunt consequatur beatae excepturi rerum?</p>
//             <a href='https://github.com/DrakeMorrison/DrakeMorrison.github.io'>See it in GitHub</a>
//         </article>
function createProjectCards(array) {
    var domString = '';
    array.forEach(function(e) {
        domString += '<article><img src="' + e.imageUrl + '"><h2>' + e.title + '</h2><p>' + e.description + '</p><a href="' + e.githubUrl + '">See it in Github</a></article>';
    });
    writeToDom(domString, 'projects');
}

  createProjectCards(projects);
