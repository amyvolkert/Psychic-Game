//Computer chooses a-z (at random)
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"];
var computerGuess = options[Math.floor(Math.random() * options.length)];
	
console.log(computerGuess);

//User chooses a-z
var userGuess = [];
var keyPress;
var wins = 0;
var guessesToStart = 9;
	
	document.onkeyup = function() { 
		keyPress = String.fromCharCode(event.keyCode).toLowerCase();
		userGuess.push(keyPress);
		console.log(userGuess)
	
	//User guess does not equal computer guess
	var guessesSoFar = 0;
	if (computerGuess!=keyPress) {
		document.getElementById("displayGuessesSoFar").innerHTML = "Guesses So Far: " + userGuess;
		var guessesLeft = guessesToStart - userGuess.length;
		document.getElementById("displayGuessesLeft").innerHTML = "Number of Guesses Remaining: " + guessesLeft;
	}
	
	//User wins
	else {
		document.getElementById("displayWins").innerHTML = "Wins " + (wins + 1);
		userGuess = [];
		guessesLeft = 9;
	}

	var losses = 0;
	if (guessesLeft = 0) {
		document.getElementById("displayLosses").innerHTML = "Losses: " + (losses + 1)
		userGuess = [];
		guessesLeft = 9;
	}

	else {
		;
	
	}
	}
	

	