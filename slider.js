
//SLIDER
var slides = document.querySelectorAll(".slide")
var slider = document.querySelector(".slider")


slider.addEventListener("scroll", function(){
    var scrollPos = slider.scrollLeft   //ZÍSKÁ POZICI HORIZONTÁLNÍHO SCROLLU
    // console.log(scrollPos)


    var screens = []
    var dots = document.querySelectorAll(".dot")

    for(var i = 0; i < slides.length; i++){
        screens.push(window.innerWidth * i)     //PŘIDÁ HODNOTY VELIKOSTI OBRAZOVKY
    }
        // console.log(screens)
    
    for(var i = 0; i < slides.length; i++){
        if(screens[i] == scrollPos){
            dots[i].classList.add("active-dot")
        }
        else{
            dots[i].classList.remove("active-dot")
        }
    }

    //KONTROLUJE KTERÝ SLIDE JE AKTIVNI A ROZSVÍTÍ TEČKU
})

