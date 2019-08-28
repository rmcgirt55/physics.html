var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f", 
				"g", 
				"h", 
				"i", 
				"j", 
				"k", 
				"l", 
				"m", 
				"n", 
				"o", 
				"p", 
				"q", 
				"r", 
				"s", 
				"t", 
				"u", 
				"v", 
				"x", 
				"y", 
				"z"];
var wins = 0;
var losses = 0;
var remaining = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicLetter;


var newLetter = function() {
    psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesremaining = function() {
    document.getElementById("remaining").innerHTML = "Guesses remaining: " + remaining;
};

var newGame = function() {
	guessedLetters = [];
    remaining = 9;
    newLetter();
    guessesremaining();
    soFar();
}

document.onkeyup = function(event) {
	var userGuess = event.key;
    remaining--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesremaining();
    if (remaining > 0) {
        if (userGuess == psychicLetter) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
			newGame();
			guessesLeft = 9; 
        	guessesSoFar.length = 0;
			
        }
    } else if (remaining == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
		newGame();
		guessesLeft = 9;
        guessesSoFar.length = 0;
    }
};