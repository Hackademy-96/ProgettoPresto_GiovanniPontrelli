let navbar = document.querySelector("#navbar")
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("navbar-custom")
    }else {
        navbar.classList.remove("navbar-custom")
    }
})



AOS.init();