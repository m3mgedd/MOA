var body = document.querySelector("body");
var bars = document.querySelector(".bars");
var list = document.querySelector(".list");

bars.addEventListener('click', () => {
    bars.classList.toggle('clicked');
    list.classList.toggle('slip');
});

// header slider
var prevbtn, nextbtn, slider, slide, dots, counter;

nextbtn = document.querySelector(".nextbtn");
prevbtn = document.querySelector(".prevbtn");
slider = document.querySelector(".slider");
slides = document.querySelectorAll(".slider img");
dots = document.querySelectorAll(".dots .dot");
counter = 0;

slides[0].classList.add("show");
dots[0].classList.add("active");

var inv = setInterval(nextSlide,3000);

function nextSlide() {
    counter++;
    if (counter >= slides.length) {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("show");
            dots[i].classList.remove("active");
        }
        slides[0].classList.add("show");
        dots[0].classList.add("active");
        counter = 0;
    } else if (counter < slides.length) {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("show");
            dots[i].classList.remove("active");
        }
        slides[counter].classList.add("show");
        dots[counter].classList.add("active");
    }
}
nextbtn.addEventListener('click', () => {
    counter++;
    if (counter >= slides.length) {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("show");
            dots[i].classList.remove("active");
        }
        slides[0].classList.add("show");
        dots[0].classList.add("active");
        counter = 0;
    } else if (counter < slides.length) {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("show");
            dots[i].classList.remove("active");
        }
        slides[counter].classList.add("show");
        dots[counter].classList.add("active");
    }
});
prevbtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("show");
            dots[i].classList.remove("active");
        }
        slides[slides.length - 1].classList.add("show");
        dots[slides.length - 1].classList.add("active");
        counter = slides.length - 1;
    } else if (counter < slides.length) {
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("show");
            dots[i].classList.remove("active");
        }
        slides[counter].classList.add("show");
        dots[counter].classList.add("active");
    }
});

// styling some elemnts

var postSquirImg = document.querySelectorAll(".squrImg");
var postSquirOverlay = document.querySelectorAll(".posts .post .opacity");
for(i = 0; i < postSquirImg.length; i++) {
    postSquirImg[i].style.height = postSquirImg[i].clientWidth + "px";
    postSquirOverlay[i].style.height = postSquirImg[i].clientWidth + "px";
}
window.addEventListener('resize', ()=>{
    for(i = 0; i < postSquirImg.length; i++) {
        postSquirImg[i].style.height = postSquirImg[i].clientWidth + "px";
        postSquirOverlay[i].style.height = postSquirImg[i].clientWidth + "px";
    }
});