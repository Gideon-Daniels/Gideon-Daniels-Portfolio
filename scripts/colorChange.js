function themeChange(theme) {
  let property = document.documentElement.style;

  let color = "";
  if (theme == "first-theme") {
    backgroundGradient =
      "linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%)";
    containerBackground = "rgba(255, 255, 255, 0.2)";
    primaryFontColor = "#323232";
    secondaryFontColor = "#50a3a2";
    highlightedFontColor = "#78cc6d";
    borderMainContentSidebar = "1px solid rgba(255, 255, 255, 0.18)";
  } else if (theme == "second-theme") {
    backgroundGradient =
      "linear-gradient(to bottom right, #50a3a2 0%, #323232 100%)";
    containerBackground = "rgba(55, 155, 155, 0.2)";
    primaryFontColor = "#323232";
    secondaryFontColor = "#50a3a2";
    highlightedFontColor = "#7dcc6d";
    borderMainContentSidebar = "1px solid rgba(255, 255, 255, 0.18)";
  } else if (theme == "third-theme") {
    backgroundGradient =
       "rgba(45, 45, 45, 0.2)";
    containerBackground = "rgba(255, 255, 255, 0.3)";
    primaryFontColor = "black";
    secondaryFontColor = "white";
    highlightedFontColor = "black";
    borderMainContentSidebar = "1px solid rgba(255, 255, 255, 0.18)";
  }
  property.setProperty("--background-gradient", backgroundGradient);
  property.setProperty("--container-background", containerBackground);
  property.setProperty("--primary-font-color", primaryFontColor);
  property.setProperty("--secondary-font-color", secondaryFontColor);
  property.setProperty(" --highlighted-font-color", highlightedFontColor);
  property.setProperty(
    "--border-main-content-sidebar",
    borderMainContentSidebar
  );
}
