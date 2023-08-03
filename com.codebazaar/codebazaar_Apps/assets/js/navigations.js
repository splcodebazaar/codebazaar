/* =======header Js======= */

// creating menu environment controllers
let navigation = document.getElementById('menu');
let menuOn = document.getElementById("show-menu");
let menuOff = document.getElementById("hide-menu");
let themes = document.getElementById('modes');
let darkMode = document.getElementById('dark');
let lightMode = document.getElementById('light');

// initializing processings to relevant events
menuOn.addEventListener('click', menuShow);
menuOff.addEventListener('click', menuHide);
themes.addEventListener('click', themeMode);

// function for activate menu
function menuShow() {
    menuOn.style.display = 'none';
    menuOff.style.display = 'initial';
    navigation.style.display = 'flex';
}

// function to deactive menubar
function menuHide() {
    menuOn.style.display = 'initial';
    menuOff.style.display = 'none';
    navigation.style.display = 'none';
}

// function for activate theme-modes
function themeMode() {
    
    if(lightMode.style.display != 'none') {
        darkMode.style.display = 'initial';
        lightMode.style.display = 'none';
    }

    else {
        darkMode.style.display = 'none';
        lightMode.style.display = 'initial';
    }
}