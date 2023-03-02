/* Seleção aleatória do número */
/*
const txtNumero = document.querySelector('#numero');
const arrayNumerosStatic = [ "0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",
                            "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                            /*"20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
                            "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
                            "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
                            "50", "51", "52", "53", "54", "55", "56", "57", "58", "59",
                            "60", "61", "62", "63", "64", "65", "66", "67", "68", "69",
                            "70", "71", "72", "73", "74", "75", "76", "77", "78", "79",
                            "80", "81", "82", "83", "84", "85", "86", "87", "88", "89",
                            "90", "91", "92", "93", "94", "95", "96", "97", "98", "99",
                            "100",*//*
                           ];

const arrayBtnNumero = document.querySelectorAll(".btn-numero");
var btnNumeroCorreto = "";
var arrayNumerosRestantes = JSON.parse(JSON.stringify(arrayNumerosStatic));
var numero = "Erro";

function carregarNumeros(){

    if (arrayNumerosRestantes.length > 0) {
        // Copiar valores do array de numeros para um array auxiliar
        var arrayNumeros = JSON.parse(JSON.stringify(arrayNumerosStatic));

        /* Math.random(): Número aleatório entre (0-1)
        Math.random() * arr.length: Números entre (0-arrayLength)
        Math.floor(): Arredondar o resultado do número aleatorio *//*
        var indice = Math.floor(Math.random() * arrayNumerosRestantes.length);
        numero = arrayNumerosRestantes[indice];
        //txtNumero.innerHTML = "?";

        /* Carregar numeros nos botões *//*

        // Indice aleatorio para o botão com o número correto
        var indiceBtn = Math.floor(Math.random() * arrayBtnNumero.length);

        // Colore o botão com o número correto
        arrayBtnNumero[indiceBtn].innerHTML = arrayNumerosRestantes[indice];
        btnNumeroCorreto = arrayBtnNumero[indiceBtn];

        // Remove o número do array dos números
        arrayNumeros.splice(indiceNumeroArray(numero, arrayNumeros), 1);

        // Pinta os outros botões
        for (let i = 0; i < arrayBtnNumero.length; i++) {
            if (i != indiceBtn) {
                indice = Math.floor(Math.random() * arrayNumeros.length);
                arrayBtnNumero[i].innerHTML = arrayNumeros[indice];  

                // Remove o número já usada do array dos números
                arrayNumeros.splice(indice, 1);
            } 
        }

        ler(numero);

        arrayNumerosRestantes.splice(indiceNumeroArray(numero, arrayNumerosRestantes), 1);

        //console.log("arrayNumerosRestantes: " , arrayNumerosRestantes)
    } else {
        arrayNumerosRestantes = JSON.parse(JSON.stringify(arrayNumerosStatic));

        modalText.innerHTML = "Parabéns, você acertou todos os números!";
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';
    }
}

carregarNumeros();

// Evento clique para repetir o número

txtNumero.addEventListener('click', () => {
    ler(numero);
});

/* Retornar indice de umo número de um array *//*

function indiceNumeroArray(color, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == color) {
            return i;
        }
    }
    return "";
}

/* Evento clique nos botões dos números *//*

const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal h2');
const modalButton = document.querySelector('.modal button');
var acertou = false;

function clique(event) {
    if (event.target.id == btnNumeroCorreto.id) {
        acertou = true;
        modalText.innerHTML = "Parabéns, você acertou!";
        ler("Você acertou!");
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';
    } else {
        acertou = false;
        modalText.innerHTML = "Ah, esse não é o número correto!";
        ler("Tente novamente!");
        modalButton.innerHTML = "Tentar novamente";
        modal.style.display = 'block';
    }
}

// Clique no modal
function clicouOk() {
    modal.style.display = 'none';
    if (acertou) {
        carregarNumeros();
    }
}*/

/* SEGUNDA VERSÃO */

const number = document.querySelector('.number');

ler(number.innerHTML);

// Evento clique no número
number.addEventListener('click', ({target}) => {
    target.innerHTML = Number(target.innerHTML) + 1;
    ler(target.innerHTML);
});

/* Ler o número */
function ler(texto) {
    var available_voices = window.speechSynthesis.getVoices();
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
