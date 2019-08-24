let ham = document.querySelector("#ham_menu");
let menu = document.querySelector("nav ul");
let listLinks = document.querySelectorAll("nav ul li");
let subMobile= document.querySelector(".sub-mobile");
let heroImage= document.querySelector("#hero img");

function toggleMenu() {

  menu.classList.toggle("visibleMenu");

  toggleItems();
};

function hideMenu () {

  menu.classList.toggle("visibleMenu");

  toggleItems();

  }

function toggleItems () {

  listLinks.forEach(function (item) {

    item.classList.toggle("animated-li");

  });

};

function animateItems () {

  listLinks.forEach(function (item) {

    item.classList.add("load");

  });

  heroImage.classList.add("display");

};

ham.onclick =  toggleMenu;

menu.onclick = toggleMenu;

window.onload = subMobile.classList.add("sub-mobile-open");

window.onload = animateItems();
