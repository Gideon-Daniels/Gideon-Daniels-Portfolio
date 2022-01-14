// navigation between each section
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
let MainNav = document.querySelectorAll(".navbar-link .navbar-button");

MainNav.forEach((element) => {
  element.addEventListener("click", function () {
    MainNav.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");

  });
});
// all other navs
let navbar = document.querySelectorAll("ul li");
navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
   
  });
});
