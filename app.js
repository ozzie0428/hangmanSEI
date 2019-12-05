// create promt for user name
function namePromt() {
    var personName = prompt("Please enter your name", " Enter Name");
    let welcome = document.querySelector("#nameButton").innerHTML =
    "Hello " + personName + "! Welcome To HangmanSei";
        if (personName != null) {
        alert(welcome);
    } 
   

  }
 

  document.querySelector(".button")
        .addEventListener("click", function() {
  document.querySelector(".revealMe").hidden = false;
  document.querySelector(".hideMe").hidden = false;
  document.querySelector(".button").hidden = true;
}, true);

// words = {
//     sports: ['Football','Futbol','penalty','foul','goal','touchdown','helmet','jersey','kit','cleats','giants','knicks','liverpool'],
//     sei: ['function','array','for loop','while loop','variables','methods','html','javascript','css','objects','events','if','else']
// }
// create array of words for sports
const sportsWords = ['nfl','futbol','penalty','foul','goal','score','kit','cleats','giants','team',];

// create array of words for SEI
// const seiWords = ['function','while','var','methods','html','objects','github','if','const'];

// create array of words for palindrome
// const palindromeWords = ['level','Hannah','civic','kayak','madam','racecar','stats','mom','Noon','peep','sooloos','deedeed','kakkak'];

// choose random words 
let random = Math.floor(Math.random() * sportsWords.length); 
// create function to reolad game 


let chosenSports =  sportsWords[random];
console.log(chosenSports);

// let chosenSei = seiWords[random];
// console.log(chosenSei);

// let chosenPalindrome = palindromeWords[random];
// console.log(chosenPalindrome);
// if user is correct, push to correct section 
let correctLetters = [];

// if user is wrong, push to incorrect secrion 
let wrongLetters = [];

let remainingGuesses = 5;

// replace underscore with letters
let AnswerSlotsDisplay = document.querySelector('.answerSlots');
let wrongLettersDisplay = document.querySelector('.wrongLetters')
let correctLettersDisplay = document.querySelector('.correctLetters');
let remainingGuessDisplay = document.querySelector('.remaining');

let guessedLetter = []

 // create underscore based on length of words
 function blankLetter() {
    for (let i = 0; i <  chosenSports.length; i++) {
        guessedLetter.push('_');
        
    }
    return guessedLetter;
 }
//  console.log(blankLetter);


// get users submission 
// convert key numbers into a srting.
 document.addEventListener('keypress',(event)=> { 
    
    if(remainingGuesses == 0){
        alert('Game over');
        document.location.reload();
         clearInterval(interval); 
    }
    
     
     let keyWord = String.fromCharCode(event.keyCode);
    //  console.log(event)  
   
    
  
    // console.log(keyWord); 
    if(chosenSports.indexOf(keyWord) > -1) {
        console.log(true)
        correctLetters.push(keyWord); 
        console.log(correctLetters);
        guessedLetter[chosenSports.indexOf(keyWord)] = keyWord;
       
        AnswerSlotsDisplay.innerHTML = guessedLetter.join(' ');
        correctLettersDisplay.innerHTML = 'BINGO! THIS LETTER IS THERE\N:' + correctLetters;
    if (guessedLetter.join('') == chosenSports) {
        alert('Congrats, you won!');
        
        
    }
    } 
    
    else {
        // remainingGuessDisplay.innerHTML = 'guesses left are ' + remainingGuesses;
        wrongLetters.push(keyWord);
        console.log(wrongLetters); 
        
        // be able to count guess left
        remainingGuessDisplay.innerHTML = 'guesses left  ' + remainingGuesses;
        console.log('guesses left are ' + remainingGuesses)
        remainingGuesses--;
        wrongLettersDisplay.innerHTML = 'SORRY, NOT THIS ONE\n:' + wrongLetters; 
       
       
       
       
    }
//    console.log(keys)
    
   

 });
//  if(remainingGuesses === 0){
//     alert('Game over');
//     document.location.reload();
//      clearInterval(interval); 
// }
 AnswerSlotsDisplay.innerHTML = blankLetter().join(' ');
// wrongLettersDisplay.innerHTML = blankLetter().join(' ');




// get submit button reshuffle the words
