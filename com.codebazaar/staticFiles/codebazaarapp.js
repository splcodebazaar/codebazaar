/* =======header Js======= */

let navigation = document.getElementById('menu');
let menuOn = document.getElementById("show-menu");
let menuOff = document.getElementById("hide-menu");

menuOn.addEventListener('click', menuShow);
menuOff.addEventListener('click', menuHide);

function menuShow() {
    menuOn.style.display = 'none';
    menuOff.style.display = 'initial';
    navigation.style.display = 'flex';
}

function menuHide() {
    menuOn.style.display = 'initial';
    menuOff.style.display = 'none';
    navigation.style.display = 'none';
}