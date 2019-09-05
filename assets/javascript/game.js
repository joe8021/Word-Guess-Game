
var wordChoices = ["packers",
    "basketball", "Favre", "football", "rodgers",
    "cheese", "driver", "Lambeau", "brats", "winning"]

//console.log(word);

var wordChosen = document.getElementById("current-word");
var directionsText = document.getElementById("directions");
var guesses = document.getElementById("guessesLeft");
var usedGuesses = document.getElementById("guessesSoFar");
//console.log(wordChosen);

var word = wordChoices[Math.floor(Math.random() * wordChoices.length)];

//function to replace charachters with _ (cant figure out the spaces)
function hideWord(wording){
    var i = wording.length;
    wording = "_ ".repeat(i);
    return wording;
}

directionsText.textContent = "";

var guesses_r = 9;
guesses.textContent = "Guesses Remaining: " + guesses_r;

wordChosen.textContent = "The word is: " + hideWord(word);
console.log(word);

//console.log(wordChosen);

document.onkeyup = function(event){
    var userGuesses = event.key;

    usedGuesses.textContent = "Guesses so far: " + userGuesses;
    console.log(guessed);
    
}




