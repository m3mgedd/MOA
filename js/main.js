var line = document.querySelector('.current-section');
var body = document.querySelector('body');

$(window).scroll (function() {
    if(window.pageYOffset >= document.querySelector('header').clientHeight - 65) {
        document.querySelector(".sticky-nav").classList.add("white");
    } else if (window.pageYOffset < document.querySelector('header').clientHeight - 65) {
        document.querySelector(".sticky-nav").classList.remove("white");
    }
    if(($('#home').offset().top - 65) <= window.pageYOffset && window.pageYOffset < ($('#about').offset().top - 65)) {
        line.style.right = 0 * 150 + 'px';
    } else if (($('#about').offset().top - 65) <= window.pageYOffset && window.pageYOffset < ($('#projects').offset().top - 65)) {
        line.style.right = 1 * 150 + 'px';
    } else if (($('#projects').offset().top - 65)  <= window.pageYOffset && window.pageYOffset < ($('#contact').offset().top - 65)) {
        line.style.right = 2 * 150 + 'px';
    } else if (($('#contact').offset().top - 65)  <= window.pageYOffset && window.pageYOffset < body.clientHeight) {
        line.style.right = 3 * 150 + 'px';
    }
});

// smooth scroll

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){
                window.location.hash = hash;
            });
        }
    });
});

// dark mode
var body = document.querySelector("body");
var darkThemeSettings = document.querySelector('footer .settings .colors > .dark-circel');
var lightThemeSettings = document.querySelector('footer .settings .colors > .light-circel');
var lightCheck = document.querySelector('footer .settings .colors > .dark-circel i');
var darkcheck = document.querySelector('footer .settings .colors > .light-circel i');

let darkMode = localStorage.getItem('darkMode');
const enableDarkMode = () => {
    // 1. add dark class to the body
    body.classList.add('dark');
    lightCheck.classList.remove('none');
    darkcheck.classList.add('none');
    darkThemeSettings.classList.add('checked');
    // 2. update the localstorage
    localStorage.setItem('darkMode','enabled');
}
const disableDarkMode = () => {
    // 1. add dark class to the body
    body.classList.remove('dark');
    darkcheck.classList.remove('none');
    lightCheck.classList.add('none');
    lightThemeSettings.classList.add('checked');
    // 2. update the localstorage
    localStorage.setItem('darkMode','disabled');
}
if(darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}
darkThemeSettings.addEventListener('click', () => {
    enableDarkMode();
});
lightThemeSettings.addEventListener('click', () => {
    disableDarkMode();
});





const ctx = document.getElementById("canvas").getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let req, npalline, range;
let palline = [];
let linee = [];
const n = 1.5;      // number of ball every 100 px^2
const r = 10; // range of edges, n% of canvas diagonal 

//La funzione init inizializza il canvas
function init() {
  npalline = (Math.floor(canvas.width*canvas.height/10000))*n;
  if(npalline>80)
    npalline=80;
  range = Math.sqrt(Math.pow(canvas.width,2)+Math.pow(canvas.height,2))/100*r;
  if(range<200)
    range = 200;
  console.log(npalline);
  for(let i=0;i<npalline;i++)
    palline.push(new Ball(
      getRandomInt(10, canvas.width-10),
      getRandomInt(10, canvas.height-10), 
      or(Math.floor(Math.random()*100)/100), 
      or(Math.floor(Math.random()*100)/100), 
      0, 
      "#eeeeee"
    ));
  for(let i=0;i<palline.length;i++)
    for(let j=i+1;j<palline.length;j++)
      if(i!=j) 
        linee.push(new Line(palline[i],palline[j]));
  animate();
}

// Utilities function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function reset(){
  window.cancelAnimationFrame(req);
  palline = [];
  linee = [];
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  init();
}
function or(a){
  if(Math.random()>0.5)
    return a;
  return -a;
}
window.onresize = reset;

//Dichiaro la classe per costruire le palline e i legami
let Ball = class {
  constructor(x, y, vx, vy, size, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.size = size;
  }
  update(){
    if(this.x + this.size + this.vx >= canvas.width || this.x <= this.size){
      this.vx = -(this.vx);
    }
    if(this.y + this.size >= canvas.height || this.y <= this.size){
      this.vy = -(this.vy);
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, this.size, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    this.update();
  }
}
let Line = class {
  constructor(a, b){
    this.a = a;
    this.b = b;
    this.len = Math.sqrt(Math.pow(this.b.x-this.a.x, 2)+Math.pow(this.b.y-this.a.y,2));
  }
  draw(){
    this.len = Math.abs(this.b.x-this.a.x)+Math.abs(this.b.y-this.a.y);
    if(this.len < range){
      ctx.beginPath();
      ctx.strokeStyle = "rgba(70,63,63,"+(1.0-this.len/range)+")";
      ctx.moveTo(this.a.x, this.a.y);
      ctx.lineTo(this.b.x, this.b.y);
      ctx.stroke();
    }
  }
}

//La funzione animate aggiorna il canvas continuamente
function animate() {  
  //Clear the canvas
  ctx.beginPath();
  ctx.fillStyle = "#171b1d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //Disegno l'array di palline
  linee.forEach(function(linea){
    linea.draw();
  })
  palline.forEach(function(palla){
    palla.draw();
  })
  
  req = requestAnimationFrame(animate);
}

init();
