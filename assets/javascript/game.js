var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"];
var wins = 0;
var guessesSoFar = 0;
var guessesLeft = 9;
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
	var computerGuess = options[Math.floor(Math.random() * options.length)];

	console.log(computerGuess);

			//Capture the choices
			//Compare the choices: if userGuess equals computerGuess
			if (userGuess=='a' || userGuess=='b' || userGuess=='c' || userGuess=='d' || userGuess=='e' || 
				userGuess=='f' || userGuess=='g' || userGuess=='h' || userGuess=='i' || userGuess=='j' || 
				userGuess=='k' || userGuess=='l' || userGuess=='m' || userGuess=='n' || userGuess=='o' || 
				userGuess=='p' || userGuess=='q' || userGuess=='r' || userGuess=='s' || userGuess=='t' || 
				userGuess=='u' || userGuess=='v' || userGuess=='w' || userGuess=='x' || userGuess=='y' || 
				userGuess=='z') {

				if ((userGuess==computerGuess)) {
				wins++; 
				document.getElementById("displayWins").innerHTML = "Wins: " + wins;				
				}
				//If userGuess does not equal computerGuess
				//PLACE APPEND FROM LOOP HERE
				else {
				document.getElementById("displayGuessesSoFar").innerHTML = ("Guesses So Far: " + userGuess)
				}

				/*if ((userGuess!=computerGuess)) {
				guessesLeft++;
				document.getElementById("displayGuessesLeft)").innerHTML = ("Numbers of Guesses Left: " + guessesLeft)
				}*/

				// else {
				// document.getElementById("diplayGuessesLeft").innerHTML = "Number of guesses remaining: " + guessesLeft;
				// }
				
				
				
						
			}

	}

	// var html = "<p>Wins: " + wins + "</p>" +"<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessesLeft +"</p" + "<p>Guesses So Far: " + guessesSoFar + "</p>";

// else {
// 				alert("Please choose a letter.");