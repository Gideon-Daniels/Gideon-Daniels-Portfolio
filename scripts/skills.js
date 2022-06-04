let skillsContent = document.querySelector(".skills-content");
console.log(content);
let softSkills = [
    {
        title: "Problem Solver",
        image: "../images/clipart2585365.png",
        imageAlt: "Problem Solver",
    },
    {
        title: "Attention To Detail",
        image: "../images/PinClipart.com_toiletries-clipart_5512623.png",
        imageAlt: "Attention To Detail",
    },  {
        title: "otb-thinker",
        image: "../images/PinClipart.com_spirit-clipart_756702.png",
        imageAlt: "otb-thinker",
    },  {
        title: "Teamwork",
        image: "../images/pngaaa.com-2489844.png",
        imageAlt: "Teamwork",
    }
]

let technicalSkills = [
    {
        title: "Figma",
        icon: "fab fa-figma",
    },
    {
        title: "Node.js",
        icon: "fab fa-node-js",
    },
    {
        title: "Firebase",
        icon: "fas fa-fire", 
    },
    {
        title: "Vue.js",
        icon : "fab fa-vuejs",
    },
    {
        title: "MySQL",
        icon: "fas fa-database",     
    },
    {
        title: "Flask",
        icon : "fas fa-flask",
    },
    {
        title: "Python",
        icon: "fab fa-python",     
    },
    {
        title: "JavaScript",
        icon : "fab fa-js-square"
    },
    {
        title: "CSS3",
        icon: "fab fa-css3-alt",     
    },
    {
        title: "HTML5",
        icon : "fab fa-html5"
    },
    {
        title: "Java",
        icon: "fab fa-java",     
    },
    {
        title: "Microsoft Word",
        icon : "fas fa-file-word",
    },
    {
        title: "Microsoft Excel",
        icon : "fas fa-file-excel",
    }
]

function createSoftSkillsCard(card) {
    let createdCard = `
    <div class="soft-skill">
        <h3 class="skill-heading">${card.title}</h3>
        <img src=${card.image} alt=${card.imageAlt} />
    </div>
    `;
    return createdCard;
}

function createTechnicalSkillsCard(card) {
    let createdCard = `
    <div class="technical-skill">
        <h3 class="skill-heading">${card.title}</h3>
        <i class=' ${card.icon}'></i>
    </div>
    `;
    return createdCard;
}

function renderSoftSkillsCards() {
   skillsContent.innerHTML = "";
   skillsContent.innerHTML += `
    <h2 class="heading">Soft Skills</h2>
  <div class="soft-skills-container"></div>`;
  
    let container = document.querySelector(".soft-skills-container");
    for (skill of softSkills) {
        let card = createSoftSkillsCard(skill);
    
        
    container.innerHTML += card;
  }
}

renderSoftSkillsCards();

function renderTechnicalSkillsCards() {
    skillsContent.innerHTML = "";
    skillsContent.innerHTML += `
   <h2 class="heading">Technical SKills</h2>
   <div class="technical-skill-container"></div>`;
     
   let container = document.querySelector(".technical-skill-container");
     for (skill of technicalSkills) {
     let card = createTechnicalSkillsCard(skill);
     container.innerHTML += card;
   }
}
 


