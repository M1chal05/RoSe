
var slider = document.querySelector(".slider")
var slide = document.querySelector(".slide")
const slideTime = 2000

let maxScrollLeft = slider.scrollWidth - slider.clientWidth

//test zacatek

let WindWidth = window.innerWidth

if(WindWidth <= 1000){
    console.log("ahoj")
}

else{
    window.onresize = ScrlChange

function ScrlChange(){
    maxScrollLeft = slider.scrollWidth - slider.clientWidth
}

function swipe(){
    slider.scrollLeft += slide.clientWidth
    
    setTimeout(swipe, slideTime)

    if(slider.scrollLeft == maxScrollLeft){
        slider.scrollLeft = 0
    }
}



setTimeout(swipe, slideTime)
}


//test konec

// window.onresize = ScrlChange

// function ScrlChange(){
//     maxScrollLeft = slider.scrollWidth - slider.clientWidth
// }

// function swipe(){
//     slider.scrollLeft += slide.clientWidth
    
//     setTimeout(swipe, slideTime)

//     if(slider.scrollLeft == maxScrollLeft){
//         slider.scrollLeft = 0
//     }
// }



// setTimeout(swipe, slideTime)



