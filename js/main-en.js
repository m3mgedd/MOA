$(window).scroll (function() {
    if(window.pageYOffset >= document.querySelector('header').clientHeight - 65) {
        document.querySelector(".sticky-nav").classList.add("white");
    } else if (window.pageYOffset < document.querySelector('header').clientHeight - 65) {
        document.querySelector(".sticky-nav").classList.remove("white");
    }
    if(($('#home').offset().top - 65) <= window.pageYOffset && window.pageYOffset < ($('#about').offset().top - 65)) {
        line.style.left = 0 * 150 + 'px';
    } else if (($('#about').offset().top - 65) <= window.pageYOffset && window.pageYOffset < ($('#projects').offset().top - 65)) {
        line.style.left = 1 * 150 + 'px';
    } else if (($('#projects').offset().top - 65)  <= window.pageYOffset && window.pageYOffset < ($('#contact').offset().top - 65)) {
        line.style.left = 2 * 150 + 'px';
    } else if (($('#contact').offset().top - 65)  <= window.pageYOffset && window.pageYOffset < body.clientHeight) {
        line.style.left = 3 * 150 + 'px';
    }
});