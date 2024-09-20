


// function play(){
//     // Step-1: Hide the home screen. To hide home screen add the hidden class on the home screen.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    // step -1 : generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}

