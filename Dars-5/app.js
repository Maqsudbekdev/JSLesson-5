let collectionGr = document.querySelector(".collection")
let btn = document.querySelector(".pen_btn")
let times = document.querySelector("#xmark") 
let pen = document.querySelector("#pen")
let expand = document.querySelector(".expand")
let first = document.querySelector(".first")

btn.addEventListener('click', ()=>{
    collectionGr.classList.toggle("collectanimation")
    if(collectionGr.classList.contains("collectanimation")){
        pen.style.display = "none"
        times.style.display = "block"
    }
    else{
        pen.style.display = "block"
        times.style.display = "none"
    }
})
first.addEventListener('click', ()=>{
    expand.style.display = "block"
})
