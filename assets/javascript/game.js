var wordList = ["weezer", "nirvina", "social distortion", "cake",
    "gold finger", "rage against the machine",
    "red hot chili peppers", "blink 182",
    "soundgarden", "soul asylum"
];

var usedLetters = [];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(randomWord);

var currentWordListItems = "";
for (var i = 0; i < randomWord.length; i++) {
    console.log(randomWord.charAt(i));
    currentWordListItems = currentWordListItems + "<li id=\"current-word-" + i  + "\" class=\"hidden\">" + randomWord.charAt(i) + "</li>";
}
console.log("currentWordListItems", currentWordListItems);

var currentWord = document.getElementById('current-word');
currentWord.innerHTML(currentWordListItems);

// document.getElementById("randomWord").textContent = randomWord;

// var start = alert('Press a letter to start!');

// if(start == randomWord) {

// }

/* <input type="text" onkeyup="guessedLetter()"> */

// document.addEventListener("keyup",(event) => {
//     const keyname = event.key;
//     document.write("" + "key: " + keyName);
// });

// function userGuess() {
//     var x = document.getElementById("guessedLetter");
//     x.value = x.value.tolowerCase();
// }