var closeLector = document.querySelector(".close")

if(closeLector){
    closeLector.addEventListener("click", function(){
        window.history.back()
    })
}







//SLIDER S ŠIPKAMI


var slider = document.querySelector(".slider")

var Larrow1 = document.getElementById("lArrow1")
var Larrow2 = document.getElementById("lArrow2")
var Rarrow1 = document.getElementById("rArrow1")
var Rarrow2 = document.getElementById("rArrow2")


Larrow1.addEventListener("click", function(){
    slider.scrollLeft = maxScrollLeft
})

Larrow2.addEventListener("click", function(){
    slider.scrollLeft = maxScrollLeft
})

Rarrow1.addEventListener("click", function(){
    slider.scrollLeft += window.innerWidth
})

Rarrow2.addEventListener("click", function(){
    slider.scrollLeft += window.innerWidth
})




//sirka posledního ramecku

let jobOffer = document.querySelector(".job-offer")
let obrH = document.querySelector(".obr").height
let obrW = document.querySelector(".obr").width
jobOffer.style.width = obrW + "px"
jobOffer.style.height = obrH + "px"

window.addEventListener("load", jobOffRes)

window.onresize = jobOffRes

function jobOffRes(){
    let obrH = document.querySelector(".obr").height
    let obrW = document.querySelector(".obr").width

jobOffer.style.width = obrW + "px"
jobOffer.style.height = obrH + "px"
}



//FUNKCE SIPEK(POSOUVANI PRES HRANU)

let maxScrollLeft = slider.scrollWidth - slider.clientWidth

slider.addEventListener("scroll", function(){

    let maxScrollLeft = slider.scrollWidth - slider.clientWidth


    if(slider.scrollLeft == 32){
        Larrow1.addEventListener("click", function(){
            slider.scrollLeft = maxScrollLeft
        })
        
        Larrow2.addEventListener("click", function(){
            slider.scrollLeft = maxScrollLeft
        })
    }
    else{
        Larrow1.addEventListener("click", function(){
            slider.scrollLeft += -window.innerWidth
        })
        
        Larrow2.addEventListener("click", function(){
            slider.scrollLeft += -window.innerWidth
        })
    }

    if(slider.scrollLeft == maxScrollLeft){
        Rarrow1.addEventListener("click", function(){
            slider.scrollLeft = 32
        })
        
        Rarrow2.addEventListener("click", function(){
            slider.scrollLeft = 32
        })
    }
    else{
        Rarrow1.addEventListener("click", function(){
            slider.scrollLeft += window.innerWidth
        })
        
        Rarrow2.addEventListener("click", function(){
            slider.scrollLeft += window.innerWidth
        })
    }
})

