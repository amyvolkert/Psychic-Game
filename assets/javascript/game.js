var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;

	//User chooses a-z 
	document.onkeyup = function() { 

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		console.log(userGuess);

		//Computer chooses a-z (at random)
		var computerGuess = options[Math.floor(Math.random() * options.length)];

		console.log(computerGuess);

			//Capture the choices
			//If userGuess equals computerGuess
			if (userGuess=='a' || userGuess=='b' || userGuess=='c' || userGuess=='d' || userGuess=='e' || 
				userGuess=='f' || userGuess=='g' || userGuess=='h' || userGuess=='i' || userGuess=='j' || 
				userGuess=='k' || userGuess=='l' || userGuess=='m' || userGuess=='n' || userGuess=='o' || 
				userGuess=='p' || userGuess=='q' || userGuess=='r' || userGuess=='s' || userGuess=='t' || 
				userGuess=='u' || userGuess=='v' || userGuess=='w' || userGuess=='x' || userGuess=='y' || 
				userGuess=='z') {
				
				if ((userGuess==computerGuess)) {
				wins++; 
				document.getElementById("demo").innerHTML = ("Wins: " + wins)
				}
				//DOCUMENT WRITE??
				//If userGuess does not equal computerGuess
				if ((userGuess!=computerGuess)) {
				guessesLeft--;
				alert("Number of guesses left: " + guessesLeft);
				}
						
				else {
				alert("Please choose a letter.");
				}
			}

	}
document.getElementById("demo").innerHTML = "Wins: " + wins;
	// var html = "<p>Wins: " + wins + "</p>" +"<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessesLeft +"</p" + "<p>Guesses So Far: " + guessesSoFar + "</p>";

