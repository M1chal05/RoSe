//CONTACT POPUP

var popupBtn = document.getElementById("popupBtn")
var popup = document.querySelector(".popup")
var popupCloseBtn = document.querySelector(".close-popup-btn")
var header = document.querySelector("header")
var main = document.querySelector("main")

popupBtn.addEventListener("click", function(){
    popup.style.display = "flex"
    header.style.display = "none"
    main.style.display = "none"
})

popupCloseBtn.addEventListener("click", function(){
    popup.style.display = "none"
    header.style.display = "flex"
    main.style.display = "initial"
})

