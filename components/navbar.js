const navBarBurgerEl = document.querySelector(".nav-burger-menu");

function navBarBurger() {
  var windowWidth = window.innerWidth;
  const navBarLinksEl = document.querySelector(".nav-bar-links");

  if (windowWidth < 991) {
    navBarLinksEl.classList.add("no-show");
    navBarBurgerEl.classList.remove("no-show");
  } else {
    navBarLinksEl.classList.remove("no-show");
    navBarBurgerEl.classList.add("no-show");
  }
}

let shownBurgerMenu = false;
function showBurgerMenu() {
  const navBurgerContainerEl = document.querySelector(".burger-menu-container");
  if (shownBurgerMenu === false) {
    shownBurgerMenu = true;
    navBurgerContainerEl.classList.remove("no-show");
  } else if (shownBurgerMenu === true) {
    shownBurgerMenu = false;
    navBurgerContainerEl.classList.add("no-show");
  }
}

navBarBurger();

window.addEventListener("resize", () => {
  navBarBurger();
});

navBarBurgerEl.addEventListener("click", () => {
    showBurgerMenu();
  });
