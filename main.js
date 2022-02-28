function toggleMenu() {
  const body = document.querySelector("body");
  const menuToggle = document.querySelector(".nav-toggle");
  const navItems = document.querySelector(".header__middle");
  navItems.classList.toggle("active");
  menuToggle.classList.toggle("active");
}

const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
});


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.querySelector(".header__middle");
  const menuToggle = document.querySelector(".nav-toggle");

  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("active");
  menuToggle.classList.remove("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
