//========== Navbar ==========//
const navMenu = document.querySelector(".nav__list");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".nav__list .close");
const navLink = document.querySelectorAll(".nav__item");

//========== Show menu ==========//

hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
});

//========== Hidden menu ==========//

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

//========== Remove Menu On Click A ==========//
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
