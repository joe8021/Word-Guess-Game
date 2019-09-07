

var wordChoices = ["packers",
    "basketball", "favre", "football", "rodgers",
    "cheese", "driver", "lambeau", "brats", "winning"]

//console.log(word);
var directions = document.getElementById("directionsT");
var wordChosen = document.getElementById("current-word");
var guesses = document.getElementById("guessesLeft");
var usedGuesses = document.getElementById("guessesSoFar");
var wins = document.getElementById("wins");
//console.log(wordChosen);

var word = wordChoices[Math.floor(Math.random() * wordChoices.length)];

//function to replace charachters with _ (cant figure out the spaces)
function hideWord(wording) {
    var i = wording.length;
    wording = "_ ".repeat(i);
    return wording;
}
//console.log(progressWord[0]==word[0]);

var guessesLeft = 9;
var win = 0;

console.log(word);

//console.log(wordChosen);
var progressWord = [];

wordChosen.textContent = "The word is: " + hideWord(word);

for (i = 0; i < word.length; i++) {
    progressWord.push('-');
}


document.onkeypress = function (keyPressed) {
    directions.textContent = "";
    var keyPressed = keyPressed || window.event,
        charCode = keyPressed.keyCode || keyPressed.which,
        lettersGuessed = String.fromCharCode(charCode);
    document.getElementById("guessesSoFar").innerHTML += lettersGuessed;
    guesses.textContent = "Guesses Remaining: " + guessesLeft;

    guessesLeft--;

    console.log(keyPressed.key);

    if (guessesLeft === -1) {
        alert("You Lose! The word was: " + word);
        location.reload();
    }

    console.log(progressWord);
    for (i = 0; i < word.length; i++) {
        if (word[i] == keyPressed.key) {
            progressWord[i] = word[i];
            //word[i] = keyPressed.key;
            //console.log(progressWord);
        }
        if(!(progressWord.includes("-"))){
            alert("Good Job! You Win!");
            location.reload();
            
        }
    }

    wordChosen.textContent = "The word is: " + progressWord.join(' ');
}







