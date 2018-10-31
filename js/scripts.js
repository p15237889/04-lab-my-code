const menuToggle = document.getElementById("menu-toggle");
const menuNav  = document.getElementById("menu-nav");


menuToggle.addEventListener("click", () => {
    console.log("called toggleMenu");
    menuNav.classList.toggle("menu-toggle");
 });
