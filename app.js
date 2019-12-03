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
const sportsWords = ['football','futbol','penalty','foul','goal','touchdown','helmet','banana','kit','cleats','giants','knicks','liverpool'];

// create array of words for SEI
const seiWords = ['function','array','for loop','while loop','variables','methods','html','javascript','css','objects','events','if','else'];

// create array of words for palindrome
const palindromeWords = ['level','Hannah','civic','kayak','madam','racecar','stats','mom','Noon','peep','sooloos','deedeed','kakkak'];

// choose random words 
let random = Math.floor(Math.random() * sportsWords.length); 

let chosenSports =  sportsWords[random];
console.log(chosenSports);

let chosenSei = seiWords[random];
// console.log(chosenSei);

let chosenPalindrome = palindromeWords[random];
// console.log(chosenPalindrome);
// if user is correct, push to correct section 
let correctLetters = [];

// if user is wrong, push to incorrect secrion 
let wrongLetters = [];

 // create underscore based on length of words
 let guessedLetter = []
 function blankLetter() {
    for (let i = 0; i <  chosenSports.length; i++) {
        guessedLetter.push('_');
    }
    return guessedLetter;
 }
//  console.log(blankLetter());
// get users submission 
 document.addEventListener('keypress',(event)=> {
    //  console.log(event)  
    let keys = event.keyCode || event.which;
    // convert key numbers into a srting.
    let keyWord = String.fromCharCode(keys); 
    // console.log(keyWord); 
    if(chosenSports.indexOf(keyWord) > -1) {
        console.log(true)
        correctLetters.push(keyWord); 
        console.log(correctLetters);
        guessedLetter[chosenSports.indexOf(keyWord)] = keyWord;
    if (guessedLetter == chosenSports) {
        alert('Congrats, you won!');
    }
    } 
    
    else {
        wrongLetters.push(keyWord);
        console.log(wrongLetters);  
    }

 })



// replace underscore with letters


// be able to count guess left
// get submit button reshuffle the words
