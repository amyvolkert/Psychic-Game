
var wins = 0;
var guessesSoFar = 0;
var guessesToStart = 9;
var losses = 0;
	
	/*//Determine a win or loss
	Determine how may choices left
	Determine how many guesses so far (includes keys pressed)*/
	
	//User chooses a-z
	var userGuess = [];
	var keyPress;

	document.onkeyup = function() { 

	var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
	
	userGuess.push(keyPress);

	console.log(userGuess);

	//Computer chooses a-z (at random)
	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"];

	var computerGuess = options[Math.floor(Math.random() * options.length)];

	console.log(computerGuess);

		for (i = 0; i < 10; i++) {
			//Compare the choices: if userGuess does not equal computerGuess 
			if ((keyPress!=computerGuess)) {
				var guessesLeft = guessesToStart - userGuess.length;

				document.getElementById("displayGuessesLeft").innerHTML = "Numbers of Guesses Remaining: " + guessesLeft;
				document.getElementById("displayGuessesSoFar").innerHTML = "Guesses So Far: " + userGuess;

			
			}		

			//Compare the choices: if userGuess equals computerGuess
			if ((keyPress==computerGuess)) {
				wins++; 
				document.getElementById("displayWins").innerHTML = "Wins: " + wins;				
			}
		}
	}
