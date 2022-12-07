/* Seleção aleatória da forma */

const txtForma = document.querySelector('#forma');
const arrayFormasStatic = [["CIRCULO", "circulo"], 
                          ["QUADRADO", "quadrado"], 
                          ["RETÂNGULO", "retangulo"], 
                          ["TRIÂNGULO", "triangulo"], 
                          ["CORAÇÃO", "coracao"],
                          ["CRUZ", "cruz"],
                          ["CUBO", "cubo"],
                          ["ESTRELA", "estrela"],
                          ["SETA", "seta"],
                          ["LOSANGO", "losango"],
                          ["PENTÁGONO", "pentagono"],
                          ["PIRÂMIDE", "piramide"],
                          ["RAIO", "raio"],
                         ];

const arrayBtnForma = document.querySelectorAll(".img-form");
var btnFormaCorreta = "";
var arrayFormasRestantes = JSON.parse(JSON.stringify(arrayFormasStatic));

function carregarFormas(){

    if (arrayFormasRestantes.length > 0) {
        // Copiar valores do array de formas para um array auxiliar
        var arrayFormas = JSON.parse(JSON.stringify(arrayFormasStatic));

        /* Math.random(): Número aleatório entre (0-1)
        Math.random() * arr.length: Números entre (0-arrayLength)
        Math.floor(): Arredondar o resultado do número aleatorio */
        var indice = Math.floor(Math.random() * arrayFormasRestantes.length);
        var forma = arrayFormasRestantes[indice][0];
        txtForma.innerHTML = forma;

        /* Carregar formas nos botões */

        // Indice aleatorio para o botão com a forma correta
        var indiceBtn = Math.floor(Math.random() * arrayBtnForma.length);

        // Colore o botão com a forma correta
        arrayBtnForma[indiceBtn].src = `../../images/forms/${arrayFormasRestantes[indice][1]}.png`;
        btnFormaCorreta = arrayBtnForma[indiceBtn];

        // Remove a forma do array das formas
        arrayFormas.splice(indiceFormaArray(forma, arrayFormas), 1);
        //console.log("arrayFormas.indexOf(forma) " , indiceFormaArray(forma, arrayFormas));

        // Pinta os outros botões
        for (let i = 0; i < arrayBtnForma.length; i++) {
            if (i != indiceBtn) {
                
                //console.log("arrayFormas: " , arrayFormas)
                indice = Math.floor(Math.random() * arrayFormas.length);
                
                arrayBtnForma[i].src = `../../images/forms/${arrayFormas[indice][1]}.png`; 

                // Remove a forma já usada do array das formas
                arrayFormas.splice(indice, 1);
            } 
        }

        ler(forma);

        arrayFormasRestantes.splice(indiceFormaArray(forma, arrayFormasRestantes), 1);

        //console.log("arrayFormasRestantes: " , arrayFormasRestantes)
    } else {
        arrayFormasRestantes = JSON.parse(JSON.stringify(arrayFormasStatic));

        modalText.innerHTML = "Parabéns, você acertou todas as formas!";
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';
    }
}

carregarFormas();

/* Retornar indice de uma forma de um array */

function indiceFormaArray(color, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == color) {
            return i;
        }
    }
    return "";
}

/* Evento clique nos botões das formas */

const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal h2');
const modalButton = document.querySelector('.modal button');
var acertou = false;

function clique(event) {
    if (event.target.id == btnFormaCorreta.id) {
        acertou = true;
        modalText.innerHTML = "Parabéns, você acertou!";
        ler("Você acertou!");
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';
    } else {
        acertou = false;
        modalText.innerHTML = "Ah, essa não é a forma correta!";
        ler("Tente novamente!");
        modalButton.innerHTML = "Tentar novamente";
        modal.style.display = 'block';
    }
}

// Clique no modal
function clicouOk() {
    modal.style.display = 'none';
    if (acertou) {
        carregarFormas();
    }
}

/* Ler a forma */



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
    }, 5500);
}
