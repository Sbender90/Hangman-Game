var wordList = ["weezer", "nirvina", "social distortion", "cake",
    "goldfinger", "rage against the machine",
    "red hot chili peppers", "blink 182",
    "soundgarden", "soul asylum"
];

var winsArray = [];
var lives = 9;
var usedLetters = [];
var randomWordIndex = Math.floor(Math.random() * wordList.length);
var liveWord = wordList[randomWordIndex];

var currentWord = '';
for(var i = 0; i < liveWord.length; i++) {
    currentWord = currentWord + "_ ";
}

document.getElementById('currentWord').innerText = currentWord;
document.getElementById('livesRemaining').innerText = lives;

console.log("current word is ", liveWord);

document.onkeyup = function (event) {
    var key = event.key.toLowerCase();

    if (usedLetters.indexOf(key) !== -1) {
        return;
    }

    usedLetters.push(key);

    var wrongGuessesString = "";
    for(var i = 0; i < usedLetters.length; i++) {
        wrongGuessesString = wrongGuessesString + usedLetters[i] + " "; 
        lives -=1;
    }
    document.getElementById('wrongGuess').innerText = wrongGuessesString;

    currentWord = "";
    for(var i = 0; i < liveWord.length; i++) {

        if ( usedLetters.indexOf(liveWord[i].toLowerCase()) !== -1)  {
            currentWord = currentWord + liveWord[i] + " ";
        } else {
            currentWord = currentWord + "_ ";
        }
    
    }
    document.getElementById('currentWord').innerText = currentWord;
    
    
  var winner = "winsArray";

  for (var winsArray = 0; winsArray > liveWord.length; winsArray++) {
      winner = "wins: " + winsArray;
      winner.push(winsArray);
      console.log(winner);
  }
  document.getElementById('h3').innerHTML = winsArray;
    // if currentWord with all white space removed === liveWord with all white space removed and they have chances left they win
    // if currentWord with all white space removed !== liveWord with all white space removed and they are out of chances they lose
    // update wins and losses accordingly

}