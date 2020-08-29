var bars = document.querySelector(".bars");
var menu = document.querySelector(".list");
var body = document.querySelector("body");

if(bars !== null) {

    bars.addEventListener('click', () => {
        bars.classList.toggle('active-bars');
        menu.classList.toggle('slide');
        body.classList.toggle('overFlow');
    
        var links = document.querySelectorAll(".list li");
        let animTimer = setInterval(onTick, 100);
        var i = 0;
        
        function onTick() {
            links[i].classList.toggle('fade');
            i++;
            if (i === links.length) {
                complete();
                return;
            }
        }
        function complete() {
            clearInterval(animTimer);
            animTimer = null;
        }
    });

}
//styles


var places = document.querySelector(".places");
var place = document.querySelectorAll(".place");

if(places !== null) {
    places.style.width = (place.length * place[0].clientWidth) + (place.length * 30) + "px";
}


var after = document.querySelector(".right .after");
var rightImg = document.querySelector(".right img");

if(after !== null) {
    after.style.width = rightImg.clientHeight + "px";
    after.style.height = rightImg.clientHeight + "px";
}


$( window ).resize(function () {
    var after = document.querySelector(".right .after");
    var rightImg = document.querySelector(".right img");

    if (after !== null) {
        after.style.height = rightImg.clientHeight + "px";
        after.style.width = rightImg.clientHeight + "px";
    }
});

// niceScroll
$("body").niceScroll({
    cursorwidth:3,
    cursoropacitymin:0,
    cursorcolor:'#ec684f',
    cursorborder:'none',
    cursorborderradius:4,
    horizrailenabled:false
});

//slider

var sliderContainer = document.querySelector(".sliderContainer");
var slide = document.querySelector(".slide");
var slides = document.querySelectorAll(".slide");

let counter = 0;

if(slide !== null) {
    let slidesNum = Math.round((body.clientWidth) / (slide.clientWidth + 30));
    var cond = slides.length - slidesNum;
    
    var size = slide.clientWidth;
}



var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

if(next !== null) {
    next.addEventListener('click', () => {
        if(counter < cond) {
        
            counter++;
        
            sliderContainer.style.left = (-counter * size) + 'px';
        } else if(counter = cond) {
    
            sliderContainer.style.left = '-' + (sliderContainer.clientWidth - body.clientWidth) + 'px';
        }
    });
}

if(prev !== null) {
    prev.addEventListener('click', () => {

        if(counter <= 0) {
            sliderContainer.style.left = "0px";
        }else {
    
            counter--;
    
            sliderContainer.style.left = (-counter * size) + 'px';
        }
    });
}



// show more // witch is not important now :(
/*
var resultsAr = document.querySelectorAll(".result");
var showButn = document.querySelector(".where-section > button")

$( window ).resize(function () {
    if (body.clientWidth <= 768) {
        console.log("done");
        for (i = 2; i< resultsAr.length; i++) {
            resultsAr[i].style.display = "none";
        }
        function showMore() {
            for (i = 2; i< resultsAr.length; i++) {
                resultsAr[i].style.display = "block";
            }
            showButn.style.backgroundColor = "#c3c3c3";
            showButn.style.color = "#ffffff";
            showButn.style.cursor = "not-allowed";
        }
    }
    else {
        for (i = 0; i < resultsAr.length; i++) {
            resultsAr[i].style.display = "block";
        }
    }
});
if (body.clientWidth <= 768) {
    for (i = 2; i< resultsAr.length; i++) {
        resultsAr[i].style.display = "none";
    }
    function showMore() {
        for (i = 2; i< resultsAr.length; i++) {
            resultsAr[i].style.display = "block";
        }
        showButn.style.backgroundColor = "#c3c3c3";
        showButn.style.color = "#ffffff";
        showButn.style.cursor = "not-allowed";
    }
}
else {
    console.log("done");
    for (i = 0; i < resultsAr.length; i++) {
        resultsAr[i].style.display = "block";
    }
}

*/
// smooth scroll

$(document).ready(function(){
    // Add smooth scrolling to all links
        $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
            } // End if
        });
});


//the results kinds

var resultLink, result, journey, travelers, guid, journeyButn, travelersButn, guidButn;

resultLink = document.querySelector(".links .group li");
result = document.querySelectorAll(".result");
journey = document.querySelectorAll(".journey");
travelers = document.querySelectorAll(".travelers");
guid = document.querySelectorAll(".guid");

journeyButn = document.querySelector(".journeyButn");
travelersButn = document.querySelector(".travelersButn");
guidButn = document.querySelector(".guidButn");

if(resultLink !== null) {
    journeyButn.addEventListener("click", () => {
        console.log("done");
        for(i = 0; i < journey; i++) {
            console.log("done");
            journey[i].classList.add("block");
            journey[i].classList.remove("none");
        }
        for(i = 0; i < travelers; i++) {
            travelers[i].classList.add("none");
            travelers[i].classList.remove("block");
        }
        for(i = 0; i < guid; i++) {
            guid[i].classList.add("none");
            guid[i].classList.remove("block");
        }
    });
    travelersButn.addEventListener("click", () => {
        for(i = 0; i < journey; i++) {
            journey[i].classList.add("none");
        }
        for(i = 0; i < travelers; i++) {
            travelers[i].classList.add("block");
            travelers[i].classList.remove("none");
        }
        for(i = 0; i < guid; i++) {
            guid[i].classList.add("none");
            guid[i].classList.remove("block");
        }
    });
    guidButn.addEventListener("click", () => {
        for(i = 0; i < journey; i++) {
            journey[i].classList.add("none");
        }
        for(i = 0; i < travelers; i++) {
            travelers[i].classList.add("none");
            travelers[i].classList.remove("block");
        }
        for(i = 0; i < guid; i++) {
            guid[i].classList.add("block");
            guid[i].classList.remove("none");
        }
    });
}
