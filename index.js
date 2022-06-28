

const observer = new IntersectionObserver(items=>{
    items.forEach(item=>{
        if(item.isIntersecting){
            document.querySelector(".card1").classList.add("fadeinleft")
            document.querySelector(".card2").classList.add("fadeinright")
            document.querySelector(".card3").classList.add("fadeintop")
        }
    })
})
observer.observe(document.querySelector(".home-cards"))