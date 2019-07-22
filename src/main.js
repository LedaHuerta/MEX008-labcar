// Crear variables globales//
const menuNav = document.getElementById('menu-nav');
let menuClose = true;
let root = document.getElementById("map-desktop");
let mainRatesDesk = document.getElementById('m-rates-desk');
let mainRatesMob = document.getElementById('m-rates-mob');
let rootMobile = document.getElementById('map-mobile');
let marker = {};
// Crear variables para botones del navegador//

const buttonBurguer = document.getElementById('burguer-box');


// Crear variables para botones de las secciones//

const buttonRoute = document.getElementById('button-route');

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

//Crear funcion y promesa que obtenga la geolocalizacion del usuario por medio de Api Geolocation y la muestre en un mapa dinamico de Google Maps por medio de Api MapsJAvascript//

navigator.geolocation.getCurrentPosition(getMap, noGet);

function noGet() {
    alert('Porfavor habilita el permiso para compartir ubicación')
}

function getMap(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let latLng = new google.maps.LatLng(latitude, longitude);
    let objConfig = {
        zoom: 19,
        center: latLng
    }
    if (mainRatesDesk.classList.contains('desk', 'display:flex')) {
        let map = new google.maps.Map(root, objConfig);
        marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: 'Estás Aquí',
            icon: 'pin-user.png',
            animation: google.maps.Animation.BOUNCE
        });
    }
    if (mainRatesDesk.classList.contains('desk', 'display:block')) {
        mainRatesMob.classList.add('display:flex', 'flexdirection:column', 'align-items:flex-start', 'justify-content:flex-start', 'width:90vw', 'height:90vh');
        let map = new google.maps.Map(rootMobile, objConfig);
        marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: 'Estás Aquí',
            icon: 'pin-user.png',
            animation: google.maps.Animation.BOUNCE
        });

    }
};


// navigator.geolocation.getCurrentPosition(getMap, noGet);

// function noGet() {
//     alert('Porfavor habilita el permiso para compartir ubicación')
// }

// function getMap(position) {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let latLng = new google.maps.LatLng(latitude, longitude);
//     let objConfig = {
//         zoom: 19,
//         center: latLng
//     }
//     if (mainRatesDesk.classList.contains('desk', 'display:flex')) {
//         let map = new google.maps.Map(root, objConfig);
//         marker = new google.maps.Marker({
//             position: latLng,
//             map: map,
//             title: 'Estás Aquí',
//             icon: 'pin-user.png',
//             animation: google.maps.Animation.BOUNCE
//         });
//     }
//     if (mainRatesDesk.classList.contains('desk', 'display:block')) {
//         let map = new google.maps.Map(rootMobile, objConfig);
//         marker = new google.maps.Marker({
//             position: latLng,
//             map: map,
//             title: 'Estás Aquí',
//             icon: 'pin-user.png',
//             animation: google.maps.Animation.BOUNCE
//         });

//     }
// };