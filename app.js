// create promt for user name
function namePromt() {
    var personName = prompt("Please enter your name", " Enter Name");
    let welcome = document.querySelector("#nameButton").innerHTML =
    "Hello " + personName + "! Welcome To HangmanSei";
        if (personName != null) {
        alert(welcome);
    }
    
  }

// create array of words for sports
const sportsWords = ['Football','Futbol','penalty','foul','goal','touchdown','helmet','jersey','kit','cleats','giants','knicks','liverpool'];

// create array of words for SEI
const seiWords = ['function','array','for loop','while loop','variables','methods','html','javascript','css','objects','events','if','else'];

// create array of words for palindrome
const palindromeWords = ['level','Hannah','civic','kayak','madam','racecar','stats','mom','Noon','peep','sooloos','deedeed','kakkak','racecar'];

// choose random words 
// create underscore based on length of words
// get users submission 
// check if user is correct 
// if user is correct, push to correct section 
// if user is wrong, push to incorrect secrion 
