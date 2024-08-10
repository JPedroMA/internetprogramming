// script.js

const audio = document.getElementById('audio');
const bonecosContainer = document.getElementById('bonecos-container');
const resetButton = document.getElementById('reset-button');

let bonecos = [];

// Função para criar um novo boneco
function createBoneco() {
    const boneco = document.createElement('div');
    boneco.className = 'boneco';
    boneco.style.left = Math.random() * 100 + '%';
    boneco.style.top = Math.random() * 100 + '%';
    boneco.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Cor aleatória

    boneco.addEventListener('click', () => {
        boneco.classList.add('estourado');
        setTimeout(() => {
            bonecosContainer.removeChild(boneco);
            bonecos = bonecos.filter(b => b !== boneco);
            audio.volume = Math.max(audio.volume - 0.1, 0); // Reduz o volume
        }, 300); // Tempo para o efeito de estourar
    });

    bonecosContainer.appendChild(boneco);
    bonecos.push(boneco);

    let posX = parseFloat(boneco.style.left);
    let posY = parseFloat(boneco.style.top);

    function moveBoneco() {
        posX += 0.5; // Movimento mais devagar
        posY += 0.25; // Movimento mais devagar
        if (posX > 100) posX = -5; // Recomeçar do lado esquerdo
        if (posY > 100) posY = -5; // Recomeçar do topo

        boneco.style.left = posX + '%';
        boneco.style.top = posY + '%';

        requestAnimationFrame(moveBoneco);
    }

    moveBoneco();
}

// Função para reiniciar o estado
function reset() {
    // Remover todos os bonecos existentes
    bonecos.forEach(boneco => bonecosContainer.removeChild(boneco));
    bonecos = [];

    // Resetar o volume do áudio
    audio.volume = 1; // Volume máximo

    // Recriar os bonecos
    for (let i = 0; i < 10; i++) {
        createBoneco();
    }
}

// Adicionar eventos
resetButton.addEventListener('click', reset);

// Inicializar bonecos
reset();
