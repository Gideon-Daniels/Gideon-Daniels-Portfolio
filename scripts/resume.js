const resume = [
  {
    type: "education",
    name: "Northlink College",
    title: "Electrical Engineering N5",
    started: "2016",
    ended: "2020",
    description:
      " 2015 - 2018 The subjects I studied in Electrical Engineering is Mathematics(N6), Industrial Electronics, Trade Theory and Logics.",
  },
  {
    type: "education",
    name: "Ravensmead Senior Secondary School",
    title: "Matric Certificate",
    started: "2010",
    ended: "2014",
    description:
      " 2010-2014 My subjects I chose in matric was Afrikaans, English, Mathematics, Physics,IT, Biology, Accounting and Life Orientation",
  },
  {
    type: "work",
    name: "Tenacious digital ",
    title: "Web Applications Developer Intern",
    started: "2022",
    ended: "currently",
    description:
      "Tenacious digital is where I am ascending to become a better developer and it is where I am improving my understanding as a full stack developer . I am learning Node.js , Test Driven Development, methodologies and more.",
  },
  {
    type: "work",
    name: "LC Studio",
    title: "Full Stack Developer Intern",
    started: "September 2021",
    ended: "15 January 2022",
    description:
      "September 2021 - Currently I am learning to work with more technologies like Vue.js, Vuex ,Firebase, Node.js , Express.js, Knext.js and more.",
  },
  {
    type: "work",
    name: "Life Choices Academy ",
    title: "Full Stack Developer Intern",
    started: "March 2021",
    ended: "September 2021",
    description:
      "Learning to become a full stack developer . Learning HTML, CSS3, JavaScript , Python , Life skills and more.",
  },
  {
    type: "work",
    name: "YMCA Ravensmead",
    title: "Volunteer",
    started: "2015",
    ended: "2021",
    description:
      "Volunteering in youth programs. I help by mentoring children, organising events and doing medial task",
  },
  {
    type: "work",
    name: "Ster-Kinekor",
    title: "Assistant Cashier",
    started: "February 2016 ",
    ended: "August 2016",
    description:
      "I was working as a assistant Cashier.I worked in the ticket sales department, food and beverages and catering department.",
  },
  {
    type: "work",
    name: "Pest Control",
    title: "Assistant",
    started: "December 2015",
    ended: "January 2016",
    description:
      "I was working as a assistant Cashier.I worked in the ticket sales department, food and beverages and catering department.",
  },
  {
    type: "work",
    name: "Pest Control",
    title: "Assistant",
    started: "December 2015",
    ended: "January 2016",
    description:
      "I was working as an assistant . I helped cleaned building and fumigate buildings and machinery.",
  },
  {
    type: "work",
    name: " Jured Installations",
    title: "Assistant",
    started: "December 2014",
    ended: "January 2015",
    description:
      "I was working as an assistant . I fetched equipment, cut metals, cleaned stations and helped with heavy lifting.",
  },
];

let work = [];
let education = [];
const wrapper = document.querySelector(".resume-wrapper");

resume.map((history) => {
  if (history.type == "work") {
    work.push(history);
  } else {
    education.push(history);
  }
});

function resumeCard(card) {
  console.log("hello");
  let createdCard = `
  <div class="resume-card-container">
  <div class="resume-card">
  <figure class="front">
    <h1>${card.title}</h1>
    <h2>${card.name}</h2>
    <h3>${card.started} - ${card.ended}</h3>
  </figure>
  <figure class="back">
    <p>
      ${card.description}
    </p>
  </figure>
</div> 
</div>`;
  return createdCard;
}

function displayResume(type) {
  wrapper.innerHTML = "";
  if (type == "Work") {
    wrapper.innerHTML += `
    <h1 class="heading">${type}</h2>
    <div class="resume-card-container"></div>
    `;
    work.forEach((item) => {
      let card = resumeCard(item);
      wrapper.innerHTML += card;
    });
  } else {
    wrapper.innerHTML += `
        <h1 class="heading">${type}</h2>
        <div class="resume-card-container"></div>
        `;
    education.forEach((item) => {
      let card = resumeCard(item);
      wrapper.innerHTML += card;
    });
  }
}

displayResume('Work');
