var body = document.querySelector("body");
var bars = document.querySelector(".bars");
var list = document.querySelector(".list ul");

bars.addEventListener('click', () => {
    bars.classList.toggle('clicked');
    list.classList.toggle('slide');
});

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