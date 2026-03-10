const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 1200}px)`;
}

setInterval(carrossel, 2500);



 
        window.addEventListener("scroll", function () {

            const nav = document.querySelector("nav");

            if (window.scrollY > 30) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }

        });
   