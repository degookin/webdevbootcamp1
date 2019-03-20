//create secret number
var secretNumber = 7;

//ask for guess
var guess = prompt("Guess a number between 1 and 10.");
//could put Number(prompt) which would allow us not to have
//to put Number(guess) below twice, just saving code

//check if number is right
//Number makes sure "guess" is a number and not a string
if(Number(guess) === secretNumber) {
    alert("You got it!")
}
//check if too high
else if(Number(guess) > secretNumber) {
    alert("Too high, guess again!");
}
//check if too low
else {
    alert("Too low, guess again!");
}
