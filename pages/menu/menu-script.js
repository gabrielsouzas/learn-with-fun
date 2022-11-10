/* Evento clique nos botões do menu */

function escolha(event) {
    if (event.target.id == "btn-menu-cores") {
        window.location.href = "../../pages/colors/page-colors.html";
    } else if (event.target.id == "btn-menu-formas"){
        alert("Em desenvolvimento.")
    } else if (event.target.id == "btn-menu-alfabeto"){
        alert("Em desenvolvimento.")
    } else if (event.target.id == "btn-menu-dinossauros"){
        alert("Em desenvolvimento.")
    }
}


function ler(texto) {
    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();
    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1; //velocidade
    utter.pitch = 1; //tom da voz
    utter.text = texto; //texto escrito
    utter.lang = "pt-BR";
    utter.voice = available_voices[0]; // vozes de [0] até [20]
    window.speechSynthesis.speak(utter);
}

/* Animação clique no dinossauro */
function dinoAnimationColors(){
    const imgDino = document.querySelector('#dino');
    const audio = new Audio('../../sounds/roar.mp3');
    
    // Toca o som do dinossauro
    audio.play();
    
    imgDino.classList.add('move');

    setTimeout(() => {
        imgDino.classList.remove('move')
    }, 2000);
}
