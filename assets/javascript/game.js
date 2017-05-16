var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"
];
		var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var guessesSoFar = 0;

		document.onkeyup = function() { var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			console.log(userGuess);

			var computerGuess = options[Math.floor(Math.random()*options.length)];

			console.log(computerGuess);

			if (userGuess=='a' || userGuess=='b' || userGuess=='c' || userGuess=='d' || userGuess=='e') {
				
				if ((userGuess==computerGuess)) {
				wins++;
				alert("Wins: " + wins);
				}
			
				if ((userGuess!=computerGuess)) {
				guessesLeft--;
				alert("Number of guesses left: " + guessesLeft);
				}
			}
			
			else {
				alert("Please choose a letter.");
			}
	}

	var html = "<p>Wins: " + wins + "</p>" +"<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessesLeft +"</p" + "<p>Guesses So Far: " + guessesSoFar + "</p>"

