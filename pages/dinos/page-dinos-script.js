/* Seleção aleatória da dino */

const txtDino = document.querySelector('#nome-dino');
const imgDinossaur = document.querySelector('#img-dino')
const arrayDinosStatic = [ /*["BRAQUIOSSAURO", "braquiossauro"],
                          ["BRAQUIOSSAURO BEBÊ", "braquiossauro-bebe"],
                          ["PARASSAUROLOFO", "parassaurolofo"], 
                          ["PTEROSSAURO", "pterossauro"],*/
                          ["ANQUILOSSAURO", "anquilossauro"],
                          ["APATOSSAURO", "apatossauro"],
                          ["ESPINOSSAURO", "espinossauro"], 
                          ["ESTEGOSSAURO", "estegossauro"],
                          ["MAMUTE", "mamute"],
                          ["PLESIOSAURIA", "plesiosauria"],
                          ["PTERODÁCTILO", "pterodactilo"],
                          ["TIRANOSSAURO", "tiranossauro-rex"],
                          ["TRICERÁTOPS", "triceratops"],
                          ["TROODONTE", "troodonte"],
                          ["VELOCIRAPTOR", "velociraptor"]
                         ];

var arrayDinosRestantes = JSON.parse(JSON.stringify(arrayDinosStatic));

function carregarDino(){

    if (arrayDinosRestantes.length > 0) {
        // Copiar valores do array de dinos para um array auxiliar
        var arrayDinos = JSON.parse(JSON.stringify(arrayDinosStatic));

        /* Math.random(): Número aleatório entre (0-1)
        Math.random() * arr.length: Números entre (0-arrayLength)
        Math.floor(): Arredondar o resultado do número aleatorio */
        var indice = Math.floor(Math.random() * arrayDinosRestantes.length);
        var dino = arrayDinosRestantes[indice][0];
        txtDino.innerHTML = dino;

        /* Carregar dino na img */
        imgDinossaur.src = `../../images/dinos/${arrayDinosRestantes[indice][1]}.png`;

        ler(dino);

        arrayDinosRestantes.splice(indiceDinoArray(dino, arrayDinosRestantes), 1);

    } else {
        arrayDinosRestantes = JSON.parse(JSON.stringify(arrayDinosStatic));

        /*
        modalText.innerHTML = "Parabéns, você viu todos os dinos!";
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';*/
    }
}

carregarDino();

imgDinossaur.addEventListener('click', () => {
    carregarDino();
})

/* Retornar indice de uma dino de um array */

function indiceDinoArray(dinossaur, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == dinossaur) {
            return i;
        }
    }
    return "";
}

/* Ler o dino */
function ler(texto) {
    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();
    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1; //velocidade
    utter.pitch = 1; //tom da voz
    utter.text = texto; //texto escrito
    utter.lang = "pt-BR";
    utter.voice = available_voices[1]; // qual sera a voz mudar de [0] até [20] para testar
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
