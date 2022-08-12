//code for hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-links");

// adding event listeners
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click" , closeMenu));

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// close nav when clicking on a nav item
document.addEventListener("click", function(e){
 if(e.target.closest(".nav-item")){
   mobileMenu();
 }
   });



