// Global variables



// --------------------------------------------------
// arrays and variable in lower case
var nameOptions = [ "michael", "jp", "sheila", "mark", "nikole" ];
var selectedName = "";
var charactersInName = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

// counters
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;


// console.log(blanksAndSuccesses);
console.log(blanksAndSuccesses);

// Functions (reuseable blocks of code)
function startGame () {
  // guessesLeft=9
  selectedName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
  charactersInName = selectedName.split("");
  numBlanks = charactersInName.length;

  // reset
  guessesLeft = 9;
  wrongGuesses = [];
  blanksAndSuccesses = [];

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
     for (var i=0;i < numBlanks; i++) {
       blanksAndSuccesses.push("_");
     }
  
  // Print the initial blanks in console.
    console.log(blanksAndSuccesses);

  // Reprints the guessesLeft to 9
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  
 // Prints the blanks at the beginning of each round in the HTML
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("win-counter").innerHTML = winCounter;
    document.getElementById("loss-counter").innerHTML = lossCounter;
  
}

function checkLetters(letter) {

  var isLetterInWord = false;
  for ( var i=0; i<numBlanks; i++) {
    if (selectedName[i] === letter) {
      isLetterInWord = true;
      guessesLeft--;
    }
  } 
  
    if (isLetterInWord) {
      for (var j = 0; j<numBlanks; j++) {
         if (selectedName[j] === letter) {
         blanksAndSuccesses[j] = letter;
      }
    }
} else {
    wrongGuesses.push(letter);
    guessesLeft--;
  }
  console.log(blanksAndSuccesses);
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made

function roundComplete() {
    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
       console.log("Wins: " + winCounter + " | Losses: " + lossCounter + " | guessesleft: " + guessesLeft);
    
       // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("  ");
  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  // This will print the array of guesses and blanks onto the page.
  document.getElementById("guesses-left").innerHTML = guessesLeft;
   
   // This will print the array of guesses and blanks onto the page.
   if(charactersInName.toLocaleString() === blanksAndSuccesses.toLocaleString()) {
     // If we have gotten all the letters to match the solution...
     // ..add to the win counter & give the user an alert.
     winCounter+
     alert("you win");
     // Update the win counter in the HTML & restart the game.
     document.getElementById("win-counter").innerHTML = winCounter;

     startGame();


     // If we've run out of guesses..
   } else if (guessesLeft === 0) {
     // Add to the loss counter.
     lossCounter++;
     alert("you lost");
     // Update the loss counter in the HTML.
     document.getElementById("loss-counter").innerHTML = lossCounter;
    //  update guesses left
    document.getElementById("guesses-left").innerHTML = guessesLeft;

     // Restart the game.
     startGame();
   } 
  }

// Main
// -------------------------------------------------
// starts code
startGame();

// register key pushes
document.onkeyup = function (event) {
  // Check if the key pressed is a letter.
  if (event.keyCode >= 65 && event.keyCode <= 90) {

    // Converts all key clicks to lowercase letters.
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    // Runs the code to check for correctness.
    checkLetters(letterGuessed);
    console.log(letterGuessed);
    
  }
  // Runs the code after each round is done.
  roundComplete();
};
 
  
  
 

