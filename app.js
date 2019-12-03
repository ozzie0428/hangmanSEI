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

// choose random words 
// create underscore based on length of words
// get users submission 
// check if user is correct 
// if user is correct, push to correct section 
// if user is wrong, push to incorrect secrion 
