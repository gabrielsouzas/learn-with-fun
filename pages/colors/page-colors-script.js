/* Seleção aleatória da cor */

const txtCor = document.querySelector('#cor');
var arrayCores = [["AMARELO", "yellow"], 
                    ["VERMELHO", "red"], 
                    ["AZUL", "blue"], 
                    ["VERDE", "green"], 
                    ["ROSA", "pink"], 
                    ["ROXO", "purple"], 
                    ["LARANJA", "orange"]];

/* Math.random(): Número aleatório entre (0-1)
Math.random() * arr.length: Números entre (0-arrayLength)
Math.floor(): Arredondar o resultado do número aleatorio */
var indice = Math.floor(Math.random() * arrayCores.length);
txtCor.innerHTML = arrayCores[indice][0];

/* Carregar cores nos botões */

const arrayBtnCor = document.querySelectorAll(".btn-cor");

// Indice aleatorio para o botão com a cor correta
var indiceBtn = Math.floor(Math.random() * arrayBtnCor.length);

// Colore o botão com a cor correta
arrayBtnCor[indiceBtn].style.backgroundColor = arrayCores[indice][1];
var btnCorCorreta = arrayBtnCor[indiceBtn];

// Pinta os outros botões
for (let i = 0; i < arrayBtnCor.length; i++) {
    if (i != indiceBtn) {
        // Remove a cor já usada do array das cores
        arrayCores.splice(indice, 1);
        indice = Math.floor(Math.random() * arrayCores.length);
        
        arrayBtnCor[i].style.backgroundColor = arrayCores[indice][1];  
    }
    
}


/* Evento clique nos botões das cores */

function clique(event) {
    if (event.target.id == btnCorCorreta.id) {
        alert("Acertou");
    } else {
        alert("Errou");
    }
}

