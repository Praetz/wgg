// Global variables



// --------------------------------------------------
// arrays and variable in lower case
var nameOptions = ["Michael", "JP", "Sheila", "Mark", "Nikole"];
var selectedName = "";
var charactersInName = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// counters
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;


// console.log(blanksAndSuccesses);

console.log(nameOptions);
// Functions (reuseable blocks of code)
function startGame () {
  // guessesLeft=9
  selectedName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
  charactersInName = selectedName.split("");
  numBlanks = charactersInName.length;

  console.log(selectedName);
  console.log(charactersInName);
  console.log(numBlanks);

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.

  blanksAndSuccesses = [];
  wrongLetters = [];

  // This is based on number of letters in solution.
     for (var i=0;i < numBlanks; i++) {
       blanksAndSuccesses.push("_");
     }
    

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);

  // Reprints the guessesLeft to 9
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  
  console.log(guessesLeft)
  
  // Prints the blanks at the beginning of each round in the HTML
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
  // Clears the wrong guesses from the previous round
  document.getElementById("wrong-guesses").innerHTML = wrongLetters.join(" ");
}


function checkLetters(letter) {
  var letterInWord = false;
  for ( var i=0; i<numBlanks; i++) {
    if (selectedName[i] === letter) {
      letterInWord = true
      guessesLeft--
    }
  }

  if (letterInWord) {
    for (var j = 0; j<numBlanks; j++) {
      if (selectedName[j] === letter) {
        blanksAndSuccesses[j] = letter
      }
    }

    console.log(blanksAndSuccesses);
  } else {
    wrongLetters.push(letter)
    guessesLeft--
  }
  console.log(guessesLeft)
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made

function roundComplete(guessesLeft) {
    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
       console.log(guessesLeft)
      if (wrongLetters <= 9) {
          document.write("Go again")
      }
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
    // This will print the array of guesses and blanks onto the page.
    // This will print the wrong guesses onto the page.

    // If we have gotten all the letters to match the solution...

      // ..add to the win counter & give the user an alert.


      // Update the win counter in the HTML & restart the game.

    // If we've run out of guesses..
      // Add to the loss counter.
      // Update the loss counter in the HTML.
      // Restart the game.

}
// reset
guessesLeft = 9;
wrongLetters = [];
blanksAndSuccesses = [];

// populate blanks and successes
for (var i=0; i<numBlanks; i++) {
  blanksAndSuccesses.push("  ");
}



// change html to reflect round conditions

document.getElementById("guesses-left").innerHTML = guessesLeft;
document.getElementById("win-counter").innerHTML = winCounter;
document.getElementById("loss-counter").innerHTML = lossCounter;


// Main
// -------------------------------------------------
// starts code
startGame();

// register key pushes
document.onkeyup = function (event) {
  console.log(event)
  // Check if the key pressed is a letter.
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    // Converts all key clicks to lowercase letters.
    var letterGuessed = event.key.toLowerCase();
    // Runs the code to check for correctness.
    checkLetters(letterGuessed);
    console.log(letterGuessed);
    // Runs the code after each round is done.
    // roundComplete();
  }
};
  // chECK IF KEY PRESS IS A LETTER
 
  
 

