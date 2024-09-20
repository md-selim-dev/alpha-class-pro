


// hide screen
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show the screen
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// add key background color
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// random alphabet generate 
function getARandomAlphabet(){
    const alphabetSrting = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetSrting.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}



// function getARandomAlphabet(){
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets)

//     // get a random index between 0-25
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);

//     const alphabet = alphabets[index];
//     console.log(alphabet, index)
//     return alphabet;
// }