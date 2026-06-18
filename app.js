let ul_container = document.querySelector(".ul_container")
let toggel_menu = document.querySelector(".toggel_menu")

toggel_menu.addEventListener("click", function(){
    ul_container.classList.toggle("active")
    toggel_menu.classList.toggle("active")
})

let bady = document.querySelector(".bady")
let toggol = document.querySelector(".toggol")

toggol.addEventListener("click", function(){
    bady.classList.toggle("active")
    toggol.classList.toggle("active")
    
})

let like = document.querySelector(".like")

like.addEventListener("click",function(){
    like.classList.toggle("active")
})
