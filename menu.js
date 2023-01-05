//MENU
var openMenuBtn = document.querySelector(".open-menu-btn")
var closeMenuBtn = document.querySelector(".close-menu-btn")
var menu = document.querySelector(".menu")

openMenuBtn.addEventListener("click", function(){
    // menu.classList.add("open")
    menu.style.animation = "openMenu 1s forwards"
})

closeMenuBtn.addEventListener("click", function(){
    // menu.classList.remove("open")
    menu.style.animation = "closeMenu 1s forwards"
})