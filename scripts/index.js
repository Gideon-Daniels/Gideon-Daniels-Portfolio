function showTab(tabName) {
  // Remove active from all classes
  let tabs = document.getElementsByClassName("main-content-sidebar");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  // Add active to specified Element
  let selectedTab = document.getElementById(tabName);
  selectedTab.classList.add("active");
}


// Project cards

// 1. CREATES AN ARRAY OF OBJECTS

let projects = [
  {
    imgURL: "/images/Screenshot from 2021-05-04 12-00-59.png",
    imgAlt: "Contact Form",
    title:  "Contact Form",
    techStack: "HTML/CSS",
    description: "A basic contact form that allows the user to contact me for any querries .",
    githubURL: "https://hopeful-yalow-dab42a.netlify.app/",
    liveProjectURL: "https://github.com/Gideon-Daniels/Contact_Form.git"
  },
  {
    imgURL: "/images/Screenshot from 2021-05-04 11-59-14.png",
    imgAlt: "Timeline",
    title:  "Timeline",
    techStack: "HTML/CSS",
    description: "A basic contact form that allows the user to contact me for any querries .",
    githubURL: "https://vibrant-spence-b6ee75.netlify.app/",
    liveProjectURL: "https://github.com/Gideon-Daniels/Timeline.git"
  },
  {
    imgURL: "/images/Screenshot from 2021-05-14 10-57-09.png",
    imgAlt: "Project Cards",
    title:  "Project Cards",
    techStack: "HTML/CSS",
    description: "A basic contact form that allows the user to contact me for any querries .",
    githubURL: "https://github.com/Gideon-Daniels/Project-Cards.git",
    liveProjectURL: "https://optimistic-kare-819acc.netlify.app/"
  },
  {
    imgURL: "/images/Screenshot from 2021-05-04 11-55-48.png",
    imgAlt: "Testimonials",
    title:  "Testimonials",
    techStack: "HTML/CSS",
    description: "A basic contact form that allows the user to contact me for any querries .",
    githubURL: "https://github.com/Gideon-Daniels/Testimonial-Slide.git",
    liveProjectURL: "https://dreamy-kirch-045081.netlify.app/"
  },
  {
    imgURL: "../images/Screenshot from 2021-05-04 12-00-59.png",
    imgAlt: "Contact Form",
    title:  "Contact Form",
    techStack: "Python",
    description: "A basic contact form that allows the user to contact me for any querries .",
    githubURL: "https://hopeful-yalow-dab42a.netlify.app/",
    liveProjectURL: "https://github.com/Gideon-Daniels/Contact_Form.git"
  },
]

// 2. Creates the card based on the properties set from (1) (factory function)
function createdCard(card){
  let createdCard = `
  <div class="project-card" techStack=${card.techStack}>
                <div class="card-image">
                  <img src="${card.imgURL}" alt="${card.imgAlt}"/>
                </div>
                <div class="card-container">
                  <h2 class="heading"> ${card.title}</h2>
                  <div class="card-details">
                    <p class="card-description">${card.description}</p>
                  </div>
                  <div class="buttons">
                    <button class="button live">
                      <a href="${card.liveProjectURL}">Live</a>
                    </button>
                    <button class="button github">
                      <a href="${card.githubURL}">Github</a>
                    </button>
                  </div>
                </div>           
  </div>
  `;
  return createdCard;
}

// 3. Loops through all cards and displays it on screen
function renderCards(){
  let projectContainer = document.querySelector(".project-cards-container");
  
  for(project of projects){
    let card = createdCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

// 4.Display cards when they are selected and hides the rest
function filterCards(category){
  let cards = document.getElementsByClassName("project-card");
  
  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }

  for(card of cards){
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);
  console.log(selectedCards)
  for (card of selectedCards){
    card.style.display = "block" ;
  }
}





