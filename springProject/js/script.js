"use strict"
const sun = document.getElementById("sun");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");

sun.addEventListener("click", function(){toggleDisplay(sun)});
mercury.addEventListener("click", function(){toggleDisplay(mercury)});
venus.addEventListener("click", function(){toggleDisplay(venus)});
earth.addEventListener("click", function(){toggleDisplay(earth)});
mars.addEventListener("click", function(){toggleDisplay(mars)});
jupiter.addEventListener("click", function(){toggleDisplay(jupiter)});
saturn.addEventListener("click", function(){toggleDisplay(saturn)});
uranus.addEventListener("click", function(){toggleDisplay(uranus)});
neptune.addEventListener("click", function(){toggleDisplay(neptune)});

sun.addEventListener("hover", function(){toggleHover(sun)});
mercury.addEventListener("hover", function(){toggleHover(mercury)});
venus.addEventListener("hover", function(){toggleHover(venus)});
earth.addEventListener("hover", function(){toggleHover(earth)});
mars.addEventListener("hover", function(){toggleHover(mars)});
jupiter.addEventListener("hover", function(){toggleHover(jupiter)});
saturn.addEventListener("hover", function(){toggleHover(saturn)});
uranus.addEventListener("hover", function(){toggleHover(uranus)});
neptune.addEventListener("hover", function(){toggleHover(neptune)});

let toggleDisplay = (id) => {
    let i = 0;
    let elementId = id;

    //TURN ALL PLANETS INVISIBLE WHEN ONE IS CLICKED
    //THEN MAKE THE CLICKED PLANET VISIBLE AGAIN
    while(i < document.getElementsByClassName("planets").length) {
        document.getElementsByClassName("planets")[i].classList.toggle("noDisplay");
        i++;
    }
    elementId.classList.toggle("pDisplay");
    elementId.classList.toggle("clicked");
    elementId.classList.remove("noDisplay");
    
    
};
let mouseHover = () => {
    let i = 0;

    while(i < document.getElementsByClassName("planets").length) {
        document.getElementsByClassName("planets")[i].childNodes[1].style.cursor = "pointer";        
        i++;
    }
    
}
let toggleHover = (id) => {
    
}



mouseHover();


