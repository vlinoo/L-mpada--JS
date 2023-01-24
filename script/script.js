const turnOn = document.querySelector('#turnOn');
const trunOff = document.querySelector('#trunOff');
const lampada = document.querySelector('#lamp');

function lampOn () {
    lamp.src = './img/ligada.jpg';
}

function lampOff () {
    lamp.src = './img/desligada.jpg';
}

function lampbroken () {
    lamp.src = './img/quebrada.jpg';
}

trunOff.addEventListener ('click', lampOff);
turnOn.addEventListener ('click', lampOn);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampbroken);


