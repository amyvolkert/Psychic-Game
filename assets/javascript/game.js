
$(document).ready(function() {

	//Computer chooses a-z (at random)
	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"];
	//Math.floor rounds the number downward to the nearest integer, and returns the result
	//Math.random returns a random number from 0 up to but not including 1
	var computerGuess = options[Math.floor(Math.random() * options.length)];
	console.log(computerGuess);
	//User chooses a-z
	//Compare choices
	var userGuess = [];
	//Defined below
	var keyPress;
	var guessesToStart = 9;
	var guessesSoFar = 0;
	var guessesLeft;
	var wins = 0;
	var losses = 0;

	document.onkeyup = function() {
		//String.fromCharCode() method converts Unicode values into characters; 70 is f, 65 a
		//event.keyCode returns the Unicode character code key
		keyPress = String.fromCharCode(event.keyCode).toLowerCase();
		userGuess.push(keyPress);
		console.log(userGuess);
			//*User does not choose a letter*
			//User guess does not equal computer guess
			if (computerGuess!=keyPress) {
				var x = document.getElementById("displayGuessesSoFar");
				x.innerHTML = userGuess.join(' ');
				guessesLeft = guessesToStart - userGuess.length;
				document.getElementById("displayGuessesLeft").innerHTML = guessesLeft + " guesses left";
			}
			//User wins
			else {
				userGuess = [];
				wins++;
				document.getElementById("displayWins").innerHTML = "Wins: " + wins;
				reset();
			}
			//User looses
			if (guessesLeft <= 0) {
				losses++;
				document.getElementById("displayLosses").innerHTML = "Losses: " + losses;
				reset();
			}
	//document.onkey up function ends
	}

	//reset function
	var reset = function() {
	guessesLeft = 9;
	computerGuess = options[Math.floor(Math.random() * options.length)];
	userGuess = [];
	guessesToStart = 9;
	console.log(computerGuess);
	}
//document.ready function ends
});
