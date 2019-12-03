// create promt for user name
function namePromt() {
    var personName = prompt("Please enter your name", " Enter Name");
    let welcome = document.querySelector("#nameButton").innerHTML =
    "Hello " + personName + "! Welcome To HangmanSei";
        if (personName != null) {
        alert(welcome);
    }
    
  }

// words = {
//     sports: ['Football','Futbol','penalty','foul','goal','touchdown','helmet','jersey','kit','cleats','giants','knicks','liverpool'],
//     sei: ['function','array','for loop','while loop','variables','methods','html','javascript','css','objects','events','if','else']
// }
// create array of words for sports
const sportsWords = ['Football','Futbol','penalty','foul','goal','touchdown','helmet','jersey','kit','cleats','giants','knicks','liverpool'];

// create array of words for SEI
const seiWords = ['function','array','for loop','while loop','variables','methods','html','javascript','css','objects','events','if','else'];

// create array of words for palindrome
const palindromeWords = ['level','Hannah','civic','kayak','madam','racecar','stats','mom','Noon','peep','sooloos','deedeed','kakkak'];

// choose random words 
let random = Math.floor(Math.random() * seiWords.length); 

let chosenSports =  sportsWords[random];
// console.log(chosenSports);

let chosenSei = seiWords[random];
console.log(chosenSei);

let chosenPalindrome = palindromeWords[random];
// console.log(chosenPalindrome);

 // create underscore based on length of words
 let guessedLetter = []
 function blankLetter() {
    for (let i = 0; i <  chosenSei.length; i++) {
        guessedLetter.push('_');
    }
    return guessedLetter;
 }
 console.log(blankLetter());
// get users submission 
 document.addEventListener('keypress',(event)=> {
    //  console.log(event)  
    let keys = event.keyCode || event.which;
    // convert key numbers into a srting.
    let keyWord = String.fromCharCode(keys); 
    // console.log(keyWord); 
    if(chosenSei.indexOf(keyWord) > -1) {
        // console.log(true)
        correctLetters.push(keyWord); 
        console.log(correctLetters);
    } else {
        wrongLetters.push(keyWord);
        console.log(wrongLetters); 
    }
 })

// if user is correct, push to correct section 
let correctLetters = [];

// if user is wrong, push to incorrect secrion 
let wrongLetters = [];
// be able to count guess left
// get submit button reshuffle the words
