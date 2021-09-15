
const slidertips = document.querySelector("#slidertips");
let sliderSec= document.querySelectorAll(".slider__sectiontips");
let sliderSeclast= sliderSec[sliderSec.length -1]

const btnLefttips = document.querySelector("#btn-lefttips");
const btnRighttips = document.querySelector("#btn-righttips");


slidertips.insertAdjacentElement("afterbegin", sliderSeclast);

function next() {
    let sliderSecfirst = document.querySelectorAll(".slider__sectiontips") [0];
    slidertips.style.marginleft = "-200%";
    slidertips.style.transition = "all 0.55s";
    setTimeout(function(){
        slidertips.style.transition = "none";
        slidertips.insertAdjacentElement ("beforeend", sliderSecfirst);
        slidertips.style.marginleft = "-100%";
    }, 500);

}

function previous (){
  
    let sliderSec = document.querySelectorAll(".slider__sectiontips");
    let sliderSeclast = sliderSec[sliderSec.length -1];
    slidertips.style.marginleft = "0";
    slidertips.style.transition = "all 0.55s";
    setTimeout(function(){
        slidertips.style.transition = "none";
        slidertips.insertAdjacentElement ("afterbegin", sliderSeclast);
        slidertips.style.marginleft = "-100%";
    }, 500);

}



btnRighttips.addEventListener("click", function(){
    next();
})

btnLefttips.addEventListener("click", function() {
    previous();
});

setInterval(function()  {
    next();
}, 5000);