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

/* Animação clique no dinossauro */
function dinoAnimation(){
    const imgDino = document.querySelector('#dino');
    const audio = new Audio('sounds/roar.mp3');
    
    // Toca o som do dinossauro
    audio.play();
    
    //imgDino.src = "/images/dino_logo_init_medium.png";
    imgDino.classList.add('move');

    setTimeout(() => {
        imgDino.classList.remove('move')
    }, 5500);
}
