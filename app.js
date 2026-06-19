let ul_container = document.querySelector(".ul_container")
let toggel_menu = document.querySelector(".toggel_menu")

toggel_menu.addEventListener("click", function(){
    ul_container.classList.toggle("active")
    toggel_menu.classList.toggle("active")
})

let navigatsya = document.querySelector(".navigatsya")
let bady = document.querySelector(".bady")
let toggol = document.querySelector(".toggol")
let main_4_div = document.querySelector(".main_4_div")
let main_5_div = document.querySelector(".main_5_div")
let main_6_div = document.querySelector(".main_6_div")
let main_7_div = document.querySelector(".main_7_div")
let main_8_div = document.querySelector(".main_8_div")

toggol.addEventListener("click", function(){
    bady.classList.toggle("active")
    navigatsya.classList.toggle("active")
    toggol.classList.toggle("active")
    main_4_div.classList.toggle("active")
    main_5_div.classList.toggle("active")
    main_6_div.classList.toggle("active")
    main_7_div.classList.toggle("active")
    main_8_div.classList.toggle("active")
    
})

let like = document.querySelector(".like")

like.addEventListener("click",function(){
    like.classList.toggle("active")
})
