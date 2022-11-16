/* Seleção aleatória da letra */

const txtLetra = document.querySelector('#letra');
const arrayLetrasStatic = ["A", 
                           "B", 
                           "C", 
                           "D", 
                           "E", 
                           "F", 
                           "G",
                           "H",
                           "I",
                           "J"];

const arrayBtnLetra = document.querySelectorAll(".btn-letra");
var btnLetraCorreta = "";
var arrayLetrasRestantes = JSON.parse(JSON.stringify(arrayLetrasStatic));
var letra = "Erro";

function carregarLetras(){

    if (arrayLetrasRestantes.length > 0) {
        // Copiar valores do array de letras para um array auxiliar
        var arrayLetras = JSON.parse(JSON.stringify(arrayLetrasStatic));

        /* Math.random(): Número aleatório entre (0-1)
        Math.random() * arr.length: Números entre (0-arrayLength)
        Math.floor(): Arredondar o resultado do número aleatorio */
        var indice = Math.floor(Math.random() * arrayLetrasRestantes.length);
        letra = arrayLetrasRestantes[indice];
        //txtLetra.innerHTML = "?";

        /* Carregar letras nos botões */

        // Indice aleatorio para o botão com a letra correta
        var indiceBtn = Math.floor(Math.random() * arrayBtnLetra.length);

        // Colore o botão com a letra correta
        arrayBtnLetra[indiceBtn].innerHTML = arrayLetrasRestantes[indice];
        btnLetraCorreta = arrayBtnLetra[indiceBtn];

        // Remove a letra do array das letras
        arrayLetras.splice(indiceLetraArray(letra, arrayLetras), 1);

        // Pinta os outros botões
        for (let i = 0; i < arrayBtnLetra.length; i++) {
            if (i != indiceBtn) {
                indice = Math.floor(Math.random() * arrayLetras.length);
                arrayBtnLetra[i].innerHTML = arrayLetras[indice];  

                // Remove a letra já usada do array das letras
                arrayLetras.splice(indice, 1);
            } 
        }

        ler(letra);

        arrayLetrasRestantes.splice(indiceLetraArray(letra, arrayLetrasRestantes), 1);

        //console.log("arrayLetrasRestantes: " , arrayLetrasRestantes)
    } else {
        arrayLetrasRestantes = JSON.parse(JSON.stringify(arrayLetrasStatic));

        modalText.innerHTML = "Parabéns, você acertou todas as letras!";
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';
    }
}

carregarLetras();

// Evento clique para repetir a letra

txtLetra.addEventListener('click', () => {
    ler(letra);
});

/* Retornar indice de uma letra de um array */

function indiceLetraArray(color, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == color) {
            return i;
        }
    }
    return "";
}

/* Evento clique nos botões das letras */

const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal h2');
const modalButton = document.querySelector('.modal button');
var acertou = false;

function clique(event) {
    if (event.target.id == btnLetraCorreta.id) {
        acertou = true;
        modalText.innerHTML = "Parabéns, você acertou!";
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';
    } else {
        acertou = false;
        modalText.innerHTML = "Ah, essa não é a letra correta!";
        modalButton.innerHTML = "Tentar novamente";
        modal.style.display = 'block';
    }
}

// Clique no modal
function clicouOk() {
    modal.style.display = 'none';
    if (acertou) {
        carregarLetras();
    }
}

/* Ler a letra */



function ler(texto) {
    
    /*const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.lang = "pt-BR";

    window.speechSynthesis.speak(speech);*/

    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();
    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1; //velocidade
    utter.pitch = 1; //tom da voz
    utter.text = texto; //texto escrito
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
    }, 2000);
}
