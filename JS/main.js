let menu = document.querySelector(".navbar_links");
let menuBtn = document.querySelector(".navbar_icons");

menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("navbar_open");
    menuBtn.classList.toggle("navbar_icons_close");
})