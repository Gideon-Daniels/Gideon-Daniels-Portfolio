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
    imgURL: "",
    imgAlt: "",
    title:  "",
    techStack: "",
    description: "",
    githubURL: "#",
    liveProjectURL: "#"
  }
]

// 2. Creates the card based on the properties set from (1) (factory function)
function createdCard(card){
  let createdCard = `
  <div class="project-card techStack=${card.techStack}">
                <div class="card-image">
                  <img src=${card.imgURL}alt=${card.imgAlt}/>
                </div>
                <div class="card-container">
                  <h2 class="heading">${card.title}</h2>
                  <div class="card-details">
                    <p class="card-description">${card.description}</p>
                  </div>
                  <div class="buttons">
                    <button class="button live">
                      <a href=${card.liveProjectURL}>Live</a>
                    </button>
                    <button class="button github">
                      <a href=${card.githubURL}>Github</a>
                    </button>
                  </div>
                </div>           
  </div>
  `;
  return createdCard
}

// 3. Loops through all cards and displays it on screen
function renderCards(){
  let projectContainer = document.querySelector(".project-container");
  for(project of projects){
    let card = createdCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

// 4.Display cards when they are selected and hides the rest
function filterCards(category){
  let cards = document.getElementsByClassName("project-card");

  for(card in cards){
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards){
    card.style.display = "block"
  }
}





