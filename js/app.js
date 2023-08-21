let menuIcon = document.getElementById("menuIcon");
let headerMenu = document.getElementById("headerMenu");
menuIcon.addEventListener("click", (e) => {
  headerMenu.classList.add("mobile-menu");
});
let closeMenuIcon = document.getElementById("closeMenuIcon");
closeMenuIcon.addEventListener("click", (e) => {
  headerMenu.classList.remove("mobile-menu");
});
