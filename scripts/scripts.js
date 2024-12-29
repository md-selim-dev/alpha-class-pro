
let isPlayBtnClick = false;

let dynamicBg = document.getElementById('artboard-bg');

const openModal = document.getElementById('open-modal');

let audio = new Audio()

function handleKeyboardKeyUpEvent(e) {
    const playerPressed = e.key;
    if (isPlayBtnClick === false) return;
    // game over for pressed Esc button
    if (playerPressed === 'Escape') {
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    //check alphabet matched or not
    if (playerPressed === expectedAlphabet) {
        audio.src = "../audio/key-press.mp3"
        audio.play()
        removeBackgroundColorById(expectedAlphabet);
        const currentScore = getTextElementValueById('current-score')
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore)
        continueGame()
    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        audio.src = "../audio/error-sound.wav"
        audio.play();
        setTextElementValueById('current-life', newLife)
        const newLifePercentage = (100 / 5) * newLife;
        dynamicBg.style.background = `linear-gradient(#FFFFFFB3 ${newLifePercentage}%, red)`;
        if (newLife === 0) {
            gameOver();
        }
    }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    // step -1 : generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}


function play() {
    hideElementById('home-screen');
    hideElementById('final-score-section');
    showElementById('playground');
    //reset value
    setTextElementValueById('current-score', 0);
    setTextElementValueById('current-life', 5);
    continueGame();
    isPlayBtnClick = true;
}

function gameOver() {
    hideElementById('playground');
    showElementById('final-score-section');
    const finalScore = getTextElementValueById('current-score');
    setTextElementValueById('final-score', finalScore)

    // clear last selected key background color
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    isPlayBtnClick = false;
    dynamicBg.style.background = "linear-gradient(#FFFFFFB3 100%, red)";
}

function openModalFunc(event){
    if(event.clientY < 10){
        openModal.showModal();
    }
}

document.body.addEventListener('mousemove', openModalFunc)