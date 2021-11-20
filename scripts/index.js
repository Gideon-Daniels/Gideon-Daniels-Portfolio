
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








