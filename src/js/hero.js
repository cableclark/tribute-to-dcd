let subMobile= document.querySelector(".sub-mobile");
let heroImage= document.querySelector("#hero img");
let heroTitle= document.querySelector(".hero");


function animateItems () {

  listLinks.forEach(function (item) {

    item.classList.add("load");

  });

  heroImage.classList.add("display");
  heroTitle.classList.add("display-h1");

};


window.onload = subMobile.classList.add("sub-mobile-open");

window.onload = animateItems();
