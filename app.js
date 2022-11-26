const menuIcon = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector(".drop-menu-container");

menuIcon.addEventListener("click", displayItems);
menuClose.addEventListener("click", hideItems);

function displayItems() {
    menuIcon.style.display = "none";
    menu.style.display = "block";
}

function hideItems() {
    menu.style.display = "none";
    menuIcon.style.display = "block";
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      menu.style.display = "none";
      menuClose.style.display = "none";
      menuIcon.style.display = "none"
    } else {
        menu.style.display = "none";
        menuClose.style.display = "block";
        menuIcon.style.display = "block";
    }
  }
  
  var x = window.matchMedia("(min-width: 800px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes