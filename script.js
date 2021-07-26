// Initialize global variables needed by the program.
let magicNumber = -1;
let remainingGuesses = -1;
let guessBtn = document.getElementById("guess-btn");

// Returns a random integer in the range 'min' through 'max' inclusive. 
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// This function sets up a new game when called. 
function setupNewGame() {
	magicNumber = getRandomIntInclusive(1, 100);
	remainingGuesses = 5;
	showRemainingGuesses(remainingGuesses);
	hideAllMessages();
	guessBtn.disabled = false;
}

// Handles when the user makes a new guess.
function handleGuess() {
  // Check if remaining guesses is -1 and setup a new game if so.
	if (remainingGuesses == -1) {
		setupNewGame();
	}

	if (remainingGuesses == 1) {
		guessBtn.disabled = true;
	}

  // Retreive the user's newest guess.
	let newestGuess = getGuessInput();

  // Check if the user has won. We should show a message, set remaining guesses to 0, and return from this function.
 	// Check if the guess is higher or lower and show appropriate message.
	// The user has used a guess, decrement remainin guesses and show the new value.

	if (newestGuess == magicNumber) {
		showMessage("win-message");
		remainingGuesses = 0;
		showRemainingGuesses(remainingGuesses);
	} else if (newestGuess < magicNumber) {
		showMessage("higher-message");
		remainingGuesses--;
		showRemainingGuesses(remainingGuesses);
	} else if (newestGuess > magicNumber) {
		showMessage("lower-message");
		remainingGuesses--;
		showRemainingGuesses(remainingGuesses);
	}

  // If the remaining guesses is 0, then the user has lost and that message should be shown.
	if ((remainingGuesses === 0) && (newestGuess != magicNumber)) {
		showMessage("lose-message");
	}
}


// Function to be called when the user wants to play again.
function handlePlayAgain() {
	setupNewGame();
	setGuessInput("");
}
