// var losses = 0;

		
		

		//User chooses
		var userGuesses = [];
		var userKeyPress;

		for (i=0; i < 10; i++) {
			
		document.onkeyup = function() { 

		userKeyPress = String.fromCharCode(event.keyCode).toLowerCase();

		console.log(userKeyPress);
		}
	}

		// //Computer chooses a-z (at random)
		// var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
		// "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"];
		
		// var computerGuess = options[Math.floor(Math.random() * options.length)];
		// console.log(computerGuess);
		// }
		
	// }
		
		//Compare choices
		// var wins = 0
		// // //If user guess equals computer guess
		// if ((userGuesses==computerGuess)) {
		// wins++; 
		// document.getElementById("displayWins").innerHTML = "Wins: " + wins;				
		// }
				
		// var guessesSoFar = 0;
		// var guessesLeft = 9;
		// 	//If user guess does not equal computer guess
		// 	if ((userGuesses!=computerGuesses)) {
		// 		guessesLeft++;
		// 		document.getElementById("displayGuessesLeft").innerHTML = ("Numbers of Guesses Left: " + guessesLeft)
		// 	}
				// //If userGuess does not equal computerGuess
				// else {
				// document.getElementById("displayGuessesSoFar").innerHTML = ("Guesses So Far: " + userGuess)
				// }
									
			

	



	//Computer chooses a-z (at random)
	// 
	// console.log(computerGuess);

			//Capture the choices
			//Compare the choices: if userGuess equals computerGuess
			// if (userGuess=='a' || userGuess=='b' || userGuess=='c' || userGuess=='d' || userGuess=='e' || 
			// 	userGuess=='f' || userGuess=='g' || userGuess=='h' || userGuess=='i' || userGuess=='j' || 
			// 	userGuess=='k' || userGuess=='l' || userGuess=='m' || userGuess=='n' || userGuess=='o' || 
			// 	userGuess=='p' || userGuess=='q' || userGuess=='r' || userGuess=='s' || userGuess=='t' || 
			// 	userGuess=='u' || userGuess=='v' || userGuess=='w' || userGuess=='x' || userGuess=='y' || 
			// 	userGuess=='z') {

			// 	if ((userGuess==computerGuess)) {
			// 	wins++; 
			// 	document.getElementById("displayWins").innerHTML = "Wins: " + wins;				
			// 	}
				
			// 	if ((userGuess!=computerGuess)) {
			// 	guessesLeft++;
			// 	document.getElementById("displayGuessesLeft)").innerHTML = ("Numbers of Guesses Left: " + guessesLeft)

				//If userGuess does not equal computerGuess
				// else {
				// document.getElementById("displayGuessesSoFar").innerHTML = ("Guesses So Far: " + userGuess)
				// }
									
			// }

				// else {
				// document.getElementById("diplayGuessesLeft").innerHTML = "Number of guesses remaining: " + guessesLeft;
				// }
				
				
				
						
			

	

	// var html = "<p>Wins: " + wins + "</p>" +"<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessesLeft +"</p" + "<p>Guesses So Far: " + guessesSoFar + "</p>";

// else {
// 				alert("Please choose a letter.");