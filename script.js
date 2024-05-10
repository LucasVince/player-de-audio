let tocando = false;
let pausado = true;

//variaveis botao de pause

const playPause = document.getElementById("play-pause-button");

// variaveis tornado of souls
const Tos = document.getElementById("Tos");
const TosBt = document.getElementById("TosBt");

// variaveis holy wars
const Hw = document.getElementById("Hw");
const HwBt = document.getElementById("HwBt");

// variaveis hangar 18
const H18 = document.getElementById("H18");
const H18Bt = document.getElementById("H18Bt");

// ---------------------------------------------------

function pausarMusicas() { //pausa todas as musicas
    if (tocando = true || pausado == false) {
        playPause.setAttribute("name", "play-circle");
        playPause.style.color = '#111111';
    }

    Tos.pause();
    TosBt.setAttribute("name", "play-circle");

    Hw.pause();
    HwBt.setAttribute("name", "play-circle");

    H18.pause();
    H18Bt.setAttribute("name", "play-circle");

    tocando = false;
    pausado = true
}

// ---------------------------------------------------

function playToS() { //tocar tornado of souls
    if (pausado == true) {
        pausarMusicas();
        Tos.currentTime = 0;
        Tos.play();
        TosBt.setAttribute("name", "pause-circle");
        tocando = true;
    } else { //pause
        Tos.pause();
        TosBt.setAttribute("name", "play-circle");
    }
    pausado = true;
    if (tocando == true || pausado == false) {
        playPause.setAttribute("name", "pause-circle");
        playPause.style.color = '#23b423';
    }
}

// ---------------------------------------------------

function playHw() { //tocar holy wars
    if (pausado == true) {
        pausarMusicas();
        Hw.currentTime = 0;
        Hw.play();
        HwBt.setAttribute("name", "pause-circle");
        tocando = true;
    } else { //pause
        Hw.pause();
        HwBt.setAttribute("name", "play-circle");
    }
    pausado = true;
    if (tocando == true || pausado == false) {
        playPause.setAttribute("name", "pause-circle");
        playPause.style.color = '#23b423';
    }
}

// ---------------------------------------------------

function playH18() { //tocar holy wars
    if (pausado == true) {
        pausarMusicas();
        H18.currentTime = 0;
        H18.play();
        H18Bt.setAttribute("name", "pause-circle");
        tocando = true;
    } else { //pause
        H18.pause();
        H18Bt.setAttribute("name", "play-circle");
    }
    pausado = true;
    if (tocando == true || pausado == false) {
        playPause.setAttribute("name", "pause-circle");
        playPause.style.color = '#23b423';
    }
}

// ---------------------------------------------------