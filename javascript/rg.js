// HAMBURGER
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// STICKY NAV BAR
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".menu1").addClass("sticky");
        }
        else{
            $(".menu1").removeClass("sticky"); 
        }
    })
});


// GALLERY
(function(){

    const buttons = document.querySelectorAll(".btn")
    const storeImages = document.querySelectorAll(".store-item")

    buttons.forEach((button) => {
        button.addEventListener("click" ,(e) =>{
            e.preventDefault()
            const filter =e.target.dataset.filter

            storeImages.forEach((item) =>{
                if(filter === "all"){
                    item.style.display = "block"
                }
                else if(item.classList.contains(filter)){
                    item.style.display ="block"
                }
                else{
                    item.style.display = "none"
                }
            })
        })
    })
})();



// SILDER
let flag = 0;

slideshow(flag);

function controller(x){
    flag = flag + x
    slideshow(flag)
}

function slideshow(num){
    let slides = document.getElementsByClassName("slide");

    if(num == slides.length){
        flag = 0
        num = 0
    }

    if(num < 0){
        flag = slides.length-1
        num = slides.length-1
    }

    for(y of slides){
        y.style.display="none"
    }
    slides[num].style.display="block"
}


function toggle(){
    var blur =document.getElementById("blur");
    blur.classList.toggle("active")
}

// POPUP

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none"
});

window.addEventListener("load",function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block"
        },
        500
    )
});

