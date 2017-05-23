
$(document).ready(function() {  

	//Computer chooses a-z (at random)
	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"];
	var computerGuess = options[Math.floor(Math.random() * options.length)];
		
		console.log(computerGuess);
	
	//User chooses a-z	
	//Compare choices
	var userGuess = [];
	var keyPress;
	var guessesToStart = 9;
	var guessesSoFar = 0;
	var wins = 0;
	var losses = 0;

		document.onkeyup = function() { 
			keyPress = String.fromCharCode(event.keyCode).toLowerCase();
			userGuess.push(keyPress);
			console.log(userGuess);

				//User guess does not equal computer guess
				if (computerGuess!=keyPress) {
					var x = document.getElementById("displayGuessesSoFar");
					x.innerHTML = "Guesses So Far: " + userGuess.join(' ');
					var guessesLeft = guessesToStart - userGuess.length;
					document.getElementById("displayGuessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
				}				
			
				//User wins
				else {
					userGuess = [];
					wins++;
					guessesLeft = 9;
					document.getElementById("displayWins").innerHTML = "Wins: " + wins;
					computerGuess = options[Math.floor(Math.random() * options.length)];
					userGuess = [];
					guessesToStart = 9;
					console.log(computerGuess);
				}

				//User looses
				if (guessesLeft <= 0) {
					losses++;
					guessesLeft = 9;
					document.getElementById("displayLosses").innerHTML = "Losses: " + losses;
					computerGuess = options[Math.floor(Math.random() * options.length)];
					userGuess = [];
					guessesToStart = 9;
					console.log(computerGuess);				
				}
		}
	});