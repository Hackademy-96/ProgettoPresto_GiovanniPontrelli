let navbar = document.querySelector("#navbar")
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("navbar-custom")
    }else {
        navbar.classList.remove("navbar-custom")
    }
})

let articlesNumber = document.querySelector("#articlesNumber");
let usersNumber = document.querySelector("#usersNumber");
let productsNumber = document.querySelector("#productsNumber");
let fedelitynunmbers = document.querySelector("#fedelitynunmbers");

function createInterval(finalN, elemento, frequenza){
    let counter = 0;
    let interval = setInterval( ()=>{
    if(counter < finalN){
        counter++
        elemento.innerHTML = counter;
    } else {
        clearInterval(interval)
    }
    }, frequenza)
}

let isEntered = false;
let observer = new IntersectionObserver( (entries)=>{
    entries.forEach( (entry)=>{
        if(entry.isIntersecting && isEntered == false){
            createInterval(1000, articlesNumber, 5)
            createInterval(500, usersNumber, 10)
            createInterval(120, productsNumber, 20)
            createInterval(35, fedelitynunmbers, 1 )
            isEntered = true;
        }
    })
},  { threshold: 1 })
observer.observe(articlesNumber);




AOS.init();