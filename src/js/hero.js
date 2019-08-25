let subMobile= document.querySelector(".sub-mobile");
let heroImage= document.querySelector("#hero img");


function animateItems () {

  listLinks.forEach(function (item) {

    item.classList.add("load");

  });

  heroImage.classList.add("display");

};


window.onload = subMobile.classList.add("sub-mobile-open");

window.onload = animateItems();
