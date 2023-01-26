let undergroundFlexEl = document.querySelector(".underground-flex");
let undergroundNamesEl = document.querySelector(".underground-names");
let svgDropEl = document.getElementById("svgdropdown");
let catDropEl = document.getElementById("drop2");
let left1El = document.querySelector(".left1");
let categoryWiseName = document.querySelector(".categorywise-name")
let drop3 = document.getElementById("drop3")
console.log(catDropEl.innerHTML)

document.body.scrollTop = document.body.scrollHeight;


undergroundFlexEl.addEventListener("click",()=>{
    undergroundNamesEl.classList.toggle("bmw");
    catDropEl.classList.toggle("rotate")
})

left1El.addEventListener("click",()=>{
    categoryWiseName.classList.toggle("bmw")
    drop3.classList.toggle("rotate")
})