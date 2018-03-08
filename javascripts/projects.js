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

  function createProjectCards() {}