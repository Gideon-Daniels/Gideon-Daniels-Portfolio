// Project cards

// 1. CREATES AN ARRAY OF OBJECTS

let projects = [
  {
    imgURL: "/images/contat form pic.PNG",
    imgAlt: "Contact Form",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description:
      "A basic contact form that allows the user to contact me for any querries .",
    githubURL: "https://github.com/Gideon-Daniels/Contact_Form.git",
    liveProjectURL: "https://hopeful-yalow-dab42a.netlify.app/",
  },
  {
    imgURL: "/images/Screenshot from 2021-05-04 11-59-14.png",
    imgAlt: "Timeline",
    title: "Timeline",
    techStack: "HTML/CSS",
    description:
      "This timeline describes my most memorable times .It is one of many projects I have had fun with and still improving on.",
    liveProjectURL: "https://vibrant-spence-b6ee75.netlify.app/",
    githubURL: "https://github.com/Gideon-Daniels/Timeline.git",
  },
  {
    imgURL: "/images/Project Cards.PNG",
    imgAlt: "Project Cards",
    title: "Project Cards",
    techStack: "HTML/CSS",
    description:
      "A basic project cards project with that entails my early projects that I started doing on my journey to become a website developer .",
    githubURL: "https://github.com/Gideon-Daniels/Project-Cards.git",
    liveProjectURL: "https://optimistic-kare-819acc.netlify.app/",
  },
  {
    imgURL: "/images/testimonial.PNG",
    imgAlt: "Testimonials",
    title: "Testimonials",
    techStack: "HTML/CSS",
    description:
      "My first testimonial slider with introduction of owl carousel. My peers and lecturers describes what kind of person I am and what it is like to work with me. ",
    githubURL: "https://github.com/Gideon-Daniels/Testimonial-Slide.git",
    liveProjectURL: "https://dreamy-kirch-045081.netlify.app/",
  },
  // {
  //   imgURL: "/images/lottery-app-image-one-min.png",
  //   imgAlt: "Lotter App",
  //   title:  "Lotter App",
  //   techStack: "Python",
  //   description: "A lotter app that allows you to register and participate in lotter draws .When you become successful in your attempt to guess the winning numbers , you are prompt to give your banking details and convert your earnings.",
  //   githubURL: "https://github.com/Gideon-Daniels/Lottery-Challenge-EOMP.git",
  //   liveProjectURL: "https://replit.com/@GideonDaniels/Lottery-Challenge-EOMP-2#login.py"
  // },
  {
    imgURL: "/images/weather-app.png",
    imgAlt: "Weather App",
    title: "Weather App",
    techStack: "Python",
    description:
      "A basic weather app. It fetches data from a weather-app-api and based on the city input it then returns the cities weather conditions.",
    githubURL: "https://github.com/Gideon-Daniels/Weather-App.git",
    liveProjectURL: "https://replit.com/@GideonDaniels/Weather-App#main.py",
  },

  {
    imgURL: "/images/calculator.png",
    imgAlt: "Calculator",
    title: "Basic Calculator",
    techStack: "Javascript",
    description:
      "A basic calculator for doing basic operations like adding, subtracting, dividing and multiplying. ",
    githubURL:
      "https://github.com/Gideon-Daniels/javascript-simple_calculator.git",
    liveProjectURL: "https://amazing-nightingale-479fec.netlify.app/",
  },
  {
    imgURL: "/images/pokemon-api.png",
    imgAlt: "Pokemon-api",
    title: "Pokemon API",
    techStack: "Javascript",
    description:
      "Data is being fetched from the pokemon API. It is then being used to create this awesome pokemon api project. ",
    githubURL: "https://github.com/Gideon-Daniels/JS-Pokedex.git",
    liveProjectURL: "https://practical-hopper-9e04d2.netlify.app/",
  },
  {
    imgURL: "/images/social-media-platform.PNG",
    imgAlt: "Social-Media-Platform",
    title: "Social Media Platform",
    techStack: "Fullstack",
    description:
      "This is my final capstone project . This is a social media platform , the user can create an account and add a post.This web app was build with python, flask, sqlite, javascript,css and html. ",
    githubURL:
      "https://github.com/Gideon-Daniels/Social-Media-Platform-Frontend",
    liveProjectURL: "https://social-media-platform.netlify.app/",
  },
];

// 2. Creates the card based on the properties set from (1) (factory function)
function createdCard(card) {
  let createdCard = `
  <div class="project-card" techStack=${card.techStack}>
    <div class="card-image">
      <img src="${card.imgURL}" alt="${card.imgAlt}"/>
    </div>
    
    <div class="card-details">
      <h2 class="heading"> ${card.title}</h2>
    
      <p class="card-description">${card.description}</p>
    </div>

    <div class="buttons">
      <button class="button live">
        <a href="${card.liveProjectURL}" target="_blank">Live</a>
      </button>
      <button class="button github">
        <a href="${card.githubURL}" target="_blank">Github</a>
      </button>
    </div>                       
  </div>
  `;
  return createdCard;
}

// 3. Loops through all cards and displays it on screen
function renderCards() {
  let projectContainer = document.querySelector(".project-cards-container");

  for (project of projects.reverse()) {
    let card = createdCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

// 4.Display cards when they are selected and hides the rest
function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");

  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  // hide card
  for (card of cards) {
    card.style.display = "none";
  }
  // display selected cards
  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "flex";
  }
}
