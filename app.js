// create promt for user name
function namePromt() {
  var personName = prompt("Please enter your name", " Enter Name");
  let welcome = (document.querySelector("#nameButton").innerHTML =
    "Hello " + personName + "! Welcome To HangmanSei");
  if (personName != null) {
    alert(welcome);
  }
}
// hide start button
document.querySelector("#button").addEventListener(
  "click",
  function() {
    document.querySelector(".revealMe").hidden = false;
    document.querySelector(".hideMe").hidden = false;
    document.querySelector("#button").hidden = true;
  },
  true
);

// create array of words for sports
const sportsWords = [
  "nfl",
  "futbol",
  "penalty",
  "foul",
  "goal",
  "score",
  "kit",
  "cleats",
  "giants",
  "team",
  "flag",
];

// choose random words
function randomIzer() {
  let random = Math.floor(Math.random() * sportsWords.length);
  sportsWords[random];
  return sportsWords[random];
}

// create function to reolad game
let chosenSports = randomIzer();

// if user is correct, push to correct section
let correctLetters = [];

// if user is wrong, push to incorrect secrion
let wrongLetters = [];

let remainingGuesses = 6;
let guessedLetter = [];

function resetGame() {
  chosenSports = randomIzer();
  remainingGuesses = 6;
  remainingGuessDisplay.innerHTML = "guesses left:  ";
  wrongLetters = [];
  guessedLetter = [];
  wrongLettersDisplay.innerHTML = "";
  correctLettersDisplay.innerHTML = "";
  answerSlotsDisplay.innerHTML = blankLetter().join(" ");
}

// replace underscore with letters
let answerSlotsDisplay = document.querySelector(".answerSlots");
let wrongLettersDisplay = document.querySelector(".wrongLetters");
let correctLettersDisplay = document.querySelector(".correctLetters");
let remainingGuessDisplay = document.querySelector(".remaining");
let applaud = document.querySelector("#applaudSound");

// create underscore based on length of words
function blankLetter() {
  for (let i = 0; i < chosenSports.length; i++) {
    guessedLetter.push("_");
  }
  return guessedLetter;
}

// create HINT function
let hint = function() {
  if (chosenSports == "nfl") {
    alert("HINT: played on two days of the week");
  } else if (chosenSports == "futbol") {
    alert("HINT: every where else but America calls it this");
  } else if (chosenSports == "penalty") {
    alert("HINT: when a player gets fouled in the box");
  } else if (chosenSports == "foul") {
    alert("HINT: AND 1!");
  } else if (chosenSports == "goal") {
    alert("HINT: anouncer says this for LOOOOOOOONG time");
  } else if (chosenSports == "score") {
    alert("HINT: the box ______");
  } else if (chosenSports == "kit") {
    alert("HINT: also known as a jersey");
  } else if (chosenSports == "cleats") {
    alert("HINT: gear used in multiple sports");
  } else if (chosenSports == "giants") {
    alert("HINT: my favorite team");
  } else if (chosenSports == "team") {
    alert("HINT: this doesnt have an I in it");
  } else if (chosenSports == "flag") {
      alert("HINT: It can be red or yellow")
  }
};

//create function so letters cant be repeated
function duplicate(keyWord) {
  if (wrongLetters.includes(keyWord)) {
    return true;
  } else {
    return false;
  }
}

// get users submission
document.addEventListener("keypress", event => {
  // convert key numbers into a srting.
  let keyWord = String.fromCharCode(event.keyCode).toLocaleLowerCase();

  const isDuplicate = duplicate(keyWord);
  if (isDuplicate) {
    alert(`Youve already tried:  ${keyWord}`);
  } else {
    if (chosenSports.indexOf(keyWord) > -1) {
      correctLetters.push(keyWord);
      guessedLetter[chosenSports.indexOf(keyWord)] = keyWord;

      answerSlotsDisplay.innerHTML = guessedLetter.join(" ");
      correctLettersDisplay.innerHTML = correctLetters;
      if (guessedLetter.join("") == chosenSports) {
        alert(`Congrats, you won! word is ${chosenSports}`);
        resetGame();
      }
    } else {
      remainingGuesses--;

      hint();
      if (remainingGuesses === 0) {
        alert(`Game over, word was ${chosenSports}`);
        resetGame();
      } else {
        wrongLetters.push(keyWord);
        // be able to count guess left
        remainingGuessDisplay.innerHTML =
          "guesses left:  " + " " + remainingGuesses;
        wrongLettersDisplay.innerHTML = wrongLetters;
      }
    }
  }
});
answerSlotsDisplay.innerHTML = blankLetter().join(" ");
