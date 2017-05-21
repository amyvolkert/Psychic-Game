

var guessesSoFar = 0;
var losses = 0;
	
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
			if (computerGuess!=keyPress) {
			document.getElementById("displayGuessesSoFar").innerHTML = "Guesses So Far: " + userGuess;
			var guessesLeft = guessesToStart - userGuess.length;
			document.getElementById("displayGuessesLeft").innerHTML = "Numbers of Guesses Remaining: " + guessesLeft;
			}

			else {
				document.getElementById("displayWins").innerHTML = "Wins " + (wins + 1);
			}
	}

	

	//User wins
	
	

	
	//-----------

	
		
		
		// else {
		// console.log(userGuess)	
		// } 	

	// 	for (var i = 0; userGuess[i] < 10; i++) {// if (computerGuess!=userGuess)
	// }	
	// 



	// }

	
		
		

		// 

		

			

		// 	else {
		// 		console.log(userGuess);
		// 	}
		// }
		
		//Compare the choices: if userGuess does not equal computerGuess 	
			
			

		// }		

		// else {
		
				
		// 	}
	
