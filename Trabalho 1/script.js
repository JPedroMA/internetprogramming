

const audio = document.getElementById('audio');
const bonecosContainer = document.getElementById('bonecos-container');
const resetButton = document.getElementById('reset-button');
const startButton = document.getElementById('start-button');
const volumeControl = document.getElementById('volume-control');
const startScreen = document.getElementById('start-screen');

let bonecos = [];

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
            audio.volume = Math.random();
        }, 300);
    });

    bonecosContainer.appendChild(boneco);
    bonecos.push(boneco);

    let posX = parseFloat(boneco.style.left);
    let posY = parseFloat(boneco.style.top);

    function moveBoneco() {
        posX += 0.5;
        posY += 0.25;
        if (posX > 100) posX = -5;
        if (posY > 100) posY = -5;

        boneco.style.left = posX + '%';
        boneco.style.top = posY + '%';

        requestAnimationFrame(moveBoneco);
    }

    moveBoneco();
}

function reset() {
    bonecos.forEach(boneco => bonecosContainer.removeChild(boneco));
    bonecos = [];

    audio.volume = 1;

    for (let i = 0; i < 10; i++) {
        createBoneco();
    }
}

function startGame() {
    startScreen.style.display = 'none'; 
    volumeControl.style.display = 'block'; 
    audio.play(); 
}

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', reset);

reset();
