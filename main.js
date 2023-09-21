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

let annunci = [
    {nome: "playstation5", categoria: "console", prezzo: 500, url: "https://picsum.photos/200"},
    {nome: "gta VI", categoria: "giochi", prezzo: 120, url: "https://picsum.photos/201"},
    {nome: "maglietta god of war", categoria: "vestiario", prezzo: 50, url: "https://picsum.photos/202"},
    {nome: "amiibo charizard", categoria: "Oggettistica", prezzo: 40, url: "https://picsum.photos/203"},
    {nome: "nintendo 3 ds xl", categoria: "usato vario", prezzo: 120, url: "https://picsum.photos/204"},
]

let annunciWrapper = document.querySelector("#annunciWrapper")

annunci.forEach((annuncio, i)=>{
    if(i >= annunci.length - 3){

        let div = document.createElement("div")
        div.classList.add("col-12", "col-md-4", "col-lg-3", "my-5" )
        div.innerHTML = `
            <div class="card">
                <div class="overflow-hidden">
                    <img src="${annuncio.url}" class="card-img-top transition" alt="...">
                </div>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">NEW</span>
                <div class="card-body">
                <h5 class="card-title">${annuncio.nome}</h5>
                <p class="card-text">${annuncio.categoria}</p>
                <p class="card-text fw-bold">Prezzo: ${annuncio.prezzo}$</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class=" btn btn-custom btn-esplora btn-outline color-p">Aggiungi al carrello</a>
                    <i class="bi bi-heart fs-4"></i>
                </div>
                </div>
            </div>
        `
        annunciWrapper.appendChild(div)

    }

})



AOS.init();

