var wordList = ["weezer", "nirvina", "social distortion", "cake",
    "gold finger", "rage against the machine",
    "red hot chili peppers", "blink 182",
    "soundgarden", "soul asylum"
];

var wins = [];
var lives = 9;

var usedLetters = [];
var randomWordIndex = Math.floor(Math.random() * wordList.length);


document.getElementById('lives').innerText = lives;

document.getElementById('currentWord').innerText = wordList[randomWordIndex];
console.log(wordList[randomWordIndex]);



document.onkeyup = function (event) {
    var key = (event.key.toLowerCase);
      wrongGuess.textContent = event.key;
      var x = event.keyCode;
        
        usedLetters.push(x);
        console.log(event);
        console.log(x);
    }

    
  
wordList.indexOf(wordList);

// function updateCurrentWord (currentWord, currentWord) {
//     if (wordList.indexOf(wordList) === -1) {

//     }
// }
