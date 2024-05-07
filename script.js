let icon = document.querySelector(".icon");
let sidebar = document.querySelector(".sidebar");

icon.addEventListener("click", () => {
  if (sidebar.classList.contains("sidebar")) {
    sidebar.classList.replace("sidebar", "sidebarR");
  } else {
    sidebar.classList.replace("sidebarR", "sidebar");
  }
});
