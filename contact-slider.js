
var Larrow = document.querySelector(".left-arrow")
var Rarrow = document.querySelector(".right-arrow")
var slider = document.querySelector(".slider")
var slide = document.querySelector(".slide")
let maxScrollLeft = (slider.scrollWidth - slider.clientWidth) -40


window.addEventListener("resize", function(){
    maxScrollLeft  = (slider.scrollWidth - slider.clientWidth) -40
})

Larrow.addEventListener("click", function(){
    slider.scrollLeft = maxScrollLeft
})
Rarrow.addEventListener("click", function(){
    slider.scrollLeft += slide.clientWidth
})


slider.addEventListener("scroll", function(){
    maxScrollLeft  = (slider.scrollWidth - slider.clientWidth) -40

    if(slider.scrollLeft == maxScrollLeft){
        Rarrow.addEventListener("click", function(){
            slider.scrollLeft = 152
        })
    }
    else{
        Rarrow.addEventListener("click", function(){
            slider.scrollLeft += slide.clientWidth
        })
    }
    if(slider.scrollLeft == 40){
        Larrow.addEventListener("click", function(){
            slider.scrollLeft = maxScrollLeft
        })
    }
    else{
        Larrow.addEventListener("click", function(){
            slider.scrollLeft += -slide.clientWidth
        })
    }


})
