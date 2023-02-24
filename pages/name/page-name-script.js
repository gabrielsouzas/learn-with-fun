/* Seleção aleatória da cor */

const txtNome = document.querySelector('#nome');
const arrayLetrasStatic = [ "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" ,
                            "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ];

const arrayBtnCor = document.querySelectorAll(".btn-cor");

var arrayCoresRestantes = JSON.parse(JSON.stringify(arrayLetrasStatic));

// Cria um elemento html
const createElement = (tag, innerText = '', innerHTML = '', className = '') => {
    const element = document.createElement(tag);
    if (innerText) { element.innerText = innerText; }
    if (innerHTML) {  element.innerHTML = innerHTML; }
    if (className) { element.classList.add(className) }
    return element;
}

function clique({target}) {
    if (txtNome.innerHTML == '?') {
        txtNome.innerHTML = ''
    }
    txtNome.innerHTML += target.innerHTML;
    ler(txtNome.innerHTML)
}

function removerLetra() {
    if (!(txtNome.innerHTML == '?')) {
        txtNome.innerHTML = txtNome.innerHTML.substring(0, txtNome.innerHTML.length - 1);
        
        if (txtNome.innerHTML.length < 1) {
            txtNome.innerHTML = '?'
        } else {
            ler(txtNome.innerHTML)
        }
    }
}

txtNome.addEventListener('click', removerLetra)

function carregarLetras(){
    const divLetras = document.querySelector('.letras');
    arrayLetrasStatic.forEach(element => {
        let div = createElement('div', '', `<span onclick="clique(event)">${element}</span>`, 'letra');
        divLetras.appendChild(div)
    });
}

carregarLetras();



/* Ler a letra e o nome*/

function ler(texto) {
    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();
    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1; //velocidade
    utter.pitch = 1; //tom da voz
    utter.text = texto[0].toUpperCase() + texto.substring(1).toLowerCase(); //texto (Primeira letra em maiuscula e o restante minuscula)
    utter.lang = "pt-BR";
    utter.voice = available_voices[0]; // qual sera a voz mudar de [0] até [20] para testar
    window.speechSynthesis.speak(utter);
}

/* Animação clique no dinossauro */
function dinoAnimationColors(){
    const imgDino = document.querySelector('#dino');
    const audio = new Audio('../../sounds/roar.mp3');
    
    // Toca o som do dinossauro
    audio.play();
    
    //imgDino.src = "/images/dino_logo_init_medium.png";
    imgDino.classList.add('move');

    

    setTimeout(() => {
        imgDino.classList.remove('move')
    }, 5500);
}
