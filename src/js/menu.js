let ham = document.querySelector("#ham_menu");
let spanovi = document.querySelectorAll(".hamburger");
let menu = document.querySelector("nav ul");
let listLinks = document.querySelectorAll("nav ul li");

function toggleMenu() {

  spanovi[0].classList.toggle("rotate");
  spanovi[1].classList.toggle("disapear");
  spanovi[2].classList.toggle("derotate");

  menu.classList.toggle("visibleMenu");

  toggleItems();
};

function hideMenu () {
  menu.classList.toggle("visibleMenu");

  spanovi[0].classList.toggle("rotate");
  spanovi[1].classList.toggle("disapear");
  spanovi[2].classList.toggle("derotate");

  toggleItems();
  }

function toggleItems () {
  listLinks.forEach(function (item) {
    item.classList.toggle("animated-li");
  });
};

ham.onclick =  toggleMenu;

menu.onclick = toggleMenu;
