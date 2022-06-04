let content = document.querySelector(".content");
function displayIntro() {
  content.innerHTML = "";
  content.innerHTML = `
  <section class= "intro">
    <h2 class="title">About Me</h2>
    <h2 class="subtitle">Hello I am Gideon</h2>
    <p>
      I am a <span class="highlight">quiet</span>,
      <span class="highlight">honest</span> and
      <span class="highlight">kind</span> individual. I
      <span class="highlight">adapt</span> easily to situations and
      environments that I am not used to. I am an
      <span class="highlight">out-of-the-box thinker</span> and like
      <span class="highlight">solving problems</span> in my head.
    </p>
  </section>
    `;
}
displayIntro();

//

let details = [
  { title: "Full Name", description: "Gideon Ashwin Daniels" },
  { title: "Date Of Birth", description: "07-09-1996" },
  { title: "Languages", description: "Afrikaans-English" },
  { title: "Criminal Record", description: "No" },
  { title: "Drivers Licence", description: "Yes" },
  { title: "City", description: "Cape Town" },
  {
    title: "Country & Province",
    description: "Western Province, South Africa",
  },
];

let passions = [];
// creates Details flip Card
function createdDetailsCard(card) {
  let createdCard = `
  <div class="card-container">
    <div class="card">
      <div class="front">
        <h2>${card.title}</h2>
      </div>
      <div class="back">
        <h2 class="description">${card.description}</h2>
      </div>
    </div>
  </div>
  `;
  return createdCard;
}
// Displays Personal Details
function displayPersonalDetails() {
  content.innerHTML = "";
  content.innerHTML += `
  <h2 class="title">Personal Details</h2>
  <div class="container"></div>`;
  let container = document.querySelector(".container");
  for (detail of details) {
    let card = createdDetailsCard(detail);
    container.innerHTML += card;
  }
}

function displayPassion() {
  content.innerHTML = "";
  content.innerHTML += `  
  <div class="passion-container">
  <h2 class="heading">Passion</h2>
  <p>
    My
    <span class="highlight">passion for the tech industry</span>
    came from the moment I laid eyes on video games and when my
    parents asked no one else but me to fix the TV stations. I
    loved <span class="highlight">solving problems</span> that
    require you to go deep into the settings of the software. It's
    a good feeling
    <span class="highlight">discovering</span> something that no
    one else has thought about yet and that's why I feel so
    passionate about the tech industry. It's a platform where you
    can
    <span class="highlight"
      >create whatever your mind desires within the limits of your
      imagination</span
    >.
  </p>
</div>`;
}
function passionBoard() {
  content.innerHTML = "";
  content.innerHTML += `
    <h2 class="heading">Passion Board</h2>
            <p class="passion-details">
              Reading fiction books,
              <span class="highlight"><i class="fas fa-dragon"></i> myths and lore</span> are my favourites.<br>
              Watching <span class="highlight"><i class="fas fa-file-video"></i> documentaries</span> about
              certain changes within the world.<br>Playing
              <span class="highlight"><i class="fas fa-gamepad icon"></i
              > games</span> and
              <span class="highlight"><i class="fas fa-film"></i> watching anime</span>.<br>I like
              <span class="highlight"><i class="far fa-eye"></i> observing</span> and
              <span class="highlight"><i class="fas fa-volume-up"></i> talking</span> to different types of
              people: I love the <span class="highlight"><i class="fas fa-brain icon"></i
              > psychology</span> about
              how people behave and interact with each other.<br>I like playing
              <span class="highlight"><i class="fas fa-futbol icon"></i
              > soccer</span>,
              <span class="highlight"><i class="fas fa-chess-king"></i> chess</span>,
              <span class="highlight"><i class="fas fa-table-tennis"></i> table tennis</span> &
              <span class="highlight"><i class="fas fa-basketball-ball"></i> basket ball</span>
            </p>
    `;
}
