let ham = document.querySelector("#ham_menu");
let spanovi = document.querySelectorAll(".hamburger");
let menu = document.querySelector("nav ul");
let listLinks = document.querySelectorAll("nav ul li");

ham.onclick =  function () {
   spanovi[0].classList.toggle("rotate");
   spanovi[1].classList.toggle("disapear");
   spanovi[2].classList.toggle("derotate");
   menu.classList.toggle("visibleMenu");
     };

menu.onclick =  function () {
  spanovi[0].classList.toggle("rotate");
  spanovi[1].classList.toggle("disapear");
  spanovi[2].classList.toggle("derotate");
  menu.classList.toggle("visibleMenu");
};



listLinks.forEach(function (item) {
  item.addEventListener("click", hideMenu);
});

function hideMenu () {
  menu.classList.toggle("visibleMenu");
  spanovi[0].classList.toggle("rotate");
  spanovi[1].classList.toggle("disapear");
  spanovi[2].classList.toggle("derotate");
  }
