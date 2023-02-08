//CONTACT POPUP

var popupBtn = document.getElementById("popupBtn")
var popup = document.querySelector(".popup")
var popupCloseBtn = document.querySelector(".close-popup-btn")

popupBtn.addEventListener("click", function(){
    popup.style.display = "flex"
})

popupCloseBtn.addEventListener("click", function(){
    popup.style.display = "none"
})