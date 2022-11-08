/* Seleção aleatória da cor */

const txtCor = document.querySelector('#cor');
const arrayCoresStatic = [["AMARELO", "yellow"], 
                    ["VERMELHO", "red"], 
                    ["AZUL", "blue"], 
                    ["VERDE", "green"], 
                    ["ROSA", "pink"], 
                    ["ROXO", "purple"], 
                    ["LARANJA", "orange"]];

const arrayBtnCor = document.querySelectorAll(".btn-cor");
var btnCorCorreta = "";

function carregarCores(){

    // Copiar valores do array de cores para um array auxiliar
    var arrayCores = JSON.parse(JSON.stringify(arrayCoresStatic));

    /* Math.random(): Número aleatório entre (0-1)
    Math.random() * arr.length: Números entre (0-arrayLength)
    Math.floor(): Arredondar o resultado do número aleatorio */
    var indice = Math.floor(Math.random() * arrayCores.length);
    txtCor.innerHTML = arrayCores[indice][0];

    /* Carregar cores nos botões */

    // Indice aleatorio para o botão com a cor correta
    var indiceBtn = Math.floor(Math.random() * arrayBtnCor.length);

    // Colore o botão com a cor correta
    arrayBtnCor[indiceBtn].style.backgroundColor = arrayCores[indice][1];
    btnCorCorreta = arrayBtnCor[indiceBtn];

    // Pinta os outros botões
    for (let i = 0; i < arrayBtnCor.length; i++) {
        if (i != indiceBtn) {
            // Remove a cor já usada do array das cores
            arrayCores.splice(indice, 1);
            indice = Math.floor(Math.random() * arrayCores.length);
            
            arrayBtnCor[i].style.backgroundColor = arrayCores[indice][1];  
        }
        
    }
}

carregarCores();

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
