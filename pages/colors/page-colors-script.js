/* Seleção aleatória da cor */

const txtCor = document.querySelector('#cor');
const arrayCoresStatic = [["AMARELO", "yellow"], 
                          ["VERMELHO", "red"], 
                          ["AZUL", "blue"], 
                          ["VERDE", "green"], 
                          ["ROSA", "pink"], 
                          ["ROXO", "purple"], 
                          ["LARANJA", "orange"],
                          ["MARROM", "#964b00"],
                          ["CINZA", "gray"],
                          ["VIOLETA", "violet"]
                         ];

const arrayBtnCor = document.querySelectorAll(".btn-cor");
var btnCorCorreta = "";
var arrayCoresRestantes = JSON.parse(JSON.stringify(arrayCoresStatic));

function carregarCores(){

    if (arrayCoresRestantes.length > 0) {
        // Copiar valores do array de cores para um array auxiliar
        var arrayCores = JSON.parse(JSON.stringify(arrayCoresStatic));

        /* Math.random(): Número aleatório entre (0-1)
        Math.random() * arr.length: Números entre (0-arrayLength)
        Math.floor(): Arredondar o resultado do número aleatorio */
        var indice = Math.floor(Math.random() * arrayCoresRestantes.length);
        var cor = arrayCoresRestantes[indice][0];
        txtCor.innerHTML = cor;

        /* Carregar cores nos botões */

        // Indice aleatorio para o botão com a cor correta
        var indiceBtn = Math.floor(Math.random() * arrayBtnCor.length);

        // Colore o botão com a cor correta
        arrayBtnCor[indiceBtn].style.backgroundColor = arrayCoresRestantes[indice][1];
        btnCorCorreta = arrayBtnCor[indiceBtn];

        // Remove a cor do array das cores
        arrayCores.splice(indiceCorArray(cor, arrayCores), 1);
        //console.log("arrayCores.indexOf(cor) " , indiceCorArray(cor, arrayCores));

        // Pinta os outros botões
        for (let i = 0; i < arrayBtnCor.length; i++) {
            if (i != indiceBtn) {
                
                //console.log("arrayCores: " , arrayCores)
                indice = Math.floor(Math.random() * arrayCores.length);
                
                arrayBtnCor[i].style.backgroundColor = arrayCores[indice][1];  

                // Remove a cor já usada do array das cores
                arrayCores.splice(indice, 1);
            } 
        }

        arrayCoresRestantes.splice(indiceCorArray(cor, arrayCoresRestantes), 1);

        //console.log("arrayCoresRestantes: " , arrayCoresRestantes)
    } else {
        arrayCoresRestantes = JSON.parse(JSON.stringify(arrayCoresStatic));

        modalText.innerHTML = "Parabéns, você acertou todas as cores!";
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';
    }
}

carregarCores();

/* Retornar indice de uma cor de um array */

function indiceCorArray(color, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == color) {
            return i;
        }
    }
    return "";
}

/* Evento clique nos botões das cores */

const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal h2');
const modalButton = document.querySelector('.modal button');
var acertou = false;

function clique(event) {
    if (event.target.id == btnCorCorreta.id) {
        acertou = true;
        modalText.innerHTML = "Parabéns, você acertou!";
        modalButton.innerHTML = "Continuar";
        modal.style.display = 'block';
    } else {
        acertou = false;
        modalText.innerHTML = "Ah, essa não é a cor correta!";
        modalButton.innerHTML = "Tentar novamente";
        modal.style.display = 'block';
    }
}

// Clique no modal
function clicouOk() {
    modal.style.display = 'none';
    if (acertou) {
        carregarCores();
    }
}
