let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Create while loop that continues for as long as the user guesses are incorrect.
while (userGuess !== randomNumber) {
    // Loop should count the number of guesses.
    attempts += 1;

    // Prompt user for a number between 1 and 10, or type 999 to exit.
    userGuess = parseInt(prompt("Enter a number between 1 and 10, or 999 to exit:"));

    // Loop should exit if user enters 999 and not display "Too high!"
    if (userGuess == 999) {
        alert("Exit");
        break
    } else if (userGuess < randomNumber) { // If the guess is too low, the user should be promped "Too low!" and be able to guess again.
        alert("Too low! Guess again!");

    // If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
    } else if (userGuess > randomNumber) {
        alert("Too high! Guess again!");

    // If the guess is correct, the user should be alerted of their win and
    // be told the number of guesses they made.
    } else if (userGuess == randomNumber) {
        alert("Congratulations, you've guessed it in " + attempts + " tries!");
        break;

    // If anything else is entered, the user should be prompted that their input is invalid and
    } else {
        alert("Invalid input");
    }
}

