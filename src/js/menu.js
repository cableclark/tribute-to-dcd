let ham = document.querySelector("#ham_menu");
let menu = document.querySelector("nav ul");
let listLinks = document.querySelectorAll("nav ul li");

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


ham.onclick =  toggleMenu;

menu.onclick = toggleMenu;
