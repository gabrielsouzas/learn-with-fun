/* Menu */
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Evento clique no menu
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Evento rolagem da tela que esconde o menu
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Botão começar */
const btnComecar = document.querySelector('#btn-comecar');

