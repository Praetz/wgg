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
console.log(blanksAndSuccesses);

// Functions (reuseable blocks of code)
function startGame () {
  // guessesLeft=9
  selectedName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
  charactersInName = selectedName.split("");
  numBlanks = charactersInName.length;

  

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
     for (var i=0;i < numBlanks; i++) {
       blanksAndSuccesses.push("_");
     }
  
  // Print the initial blanks in console.
  

  // Reprints the guessesLeft to 9
  // document.getElementById("guesses-left").innerHTML = guessesLeft;
  
  // Prints the blanks at the beginning of each round in the HTML
  // document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
  // Clears the wrong guesses from the previous round
  // document.getElementById("wrong-guesses").innerHTML = wrongLetters.join(" ");

  console.log(nameOptions);
  console.log(selectedName);
  console.log(charactersInName);
  console.log(blanksAndSuccesses);
  console.log(numBlanks);
  
}


function checkLetters(letter) {
  var letterInWord = false;
  for ( var i=0; i<numBlanks; i++) {
    if (selectedName[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j<numBlanks; j++) {
      if (selectedName[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }

    console.log(blanksAndSuccesses);
  } else {
    wrongLetters.push(letter)
    guessesLeft--
  }
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made

function roundComplete() {
    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
       console.log("Wins: " + Wins + " | losses: " + losses + " | guessesleft: " + guessesLeft)
    
       // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongLetters;
  // This will print the array of guesses and blanks onto the page.
  document.getElementById("guesses-left").innerHTML = guessesLeft;

   // This will print the array of guesses and blanks onto the page.
   if(letterInWord.toString() == blanksAndSuccesses.toString()) {
     // If we have gotten all the letters to match the solution...
     // ..add to the win counter & give the user an alert.
     Wins++
     alert("you win");
     // Update the win counter in the HTML & restart the game.
     document.getElementById("win-counter").innerHTML = winCounter;

     startGame();


     // If we've run out of guesses..
   } else if (guessesLeft == 0) {
     // Add to the loss counter.
     Losses++
     alert("you lost");
     // Update the loss counter in the HTML.
     document.getElementById("loss-counter").innerHTML = lossCounter;

     // Restart the game.
     startGame();
   } 
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
    var letterGuessed = String.event.key.toLowerCase();
    // Runs the code to check for correctness.
    checkLetters(letterGuessed);
    console.log(letterGuessed);
    // Runs the code after each round is done.
    // roundComplete();
  }
};
  // chECK IF KEY PRESS IS A LETTER
 
  
 

