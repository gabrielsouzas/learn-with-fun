/* Seleção aleatória da cor */

const txtCor = document.querySelector('#cor');
const arrayCores = ["AMARELO", "VERMELHO", "AZUL", "VERDE", "ROSA", "ROXO", "LARANJA"];

/* Math.random(): Número aleatório entre (0-1)
Math.random() * arr.length: Números entre (0-arrayLength)
Math.floor(): Arredondar o resultado do número aleatorio */
const indice = Math.floor(Math.random() * arrayCores.length);
txtCor.innerHTML = arrayCores[indice];

/* Evento clique nos botões das cores */



