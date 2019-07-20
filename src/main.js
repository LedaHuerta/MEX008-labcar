// Crear variables globales//
const menuNav = document.getElementById('menu-nav');
let menuClose = true;

// Crear variables para botones del navegador//

const buttonBurguer = document.getElementById('burguer-box');




//Crear funcion que muestre y oculte el menu en mobile//
const showNav = () => {
    if (menuClose == true) {
        menuNav.style.width = '100vw';
        menuClose = false;
    } else if (menuClose == false) {
        menuNav.style.width = '0';
        menuClose = true;
    }
};

buttonBurguer.addEventListener('click', showNav);