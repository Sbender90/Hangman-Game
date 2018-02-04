var wordList = ["weezer", "nirvina", "social distortion", "cake",
    "gold finger", "rage against the machine",
    "red hot chili peppers", "blink 182",
    "soundgarden", "soul asylum"
];

var wins = [];
var lives = 9;

var usedLetters = [];
var randomWordIndex = Math.floor(Math.random() * wordList.length);
var liveWord = wordList[randomWordIndex];
var currentWord = '';
for(var i = 0; i < liveWord.length; i++) {
    currentWord = currentWord + "_ ";

}
document.getElementById('currentWord').innerText = currentWord;
document.getElementById('lives').innerText = lives;

// document.getElementById('currentWord').innerText = wordList[randomWordIndex];
console.log(wordList[randomWordIndex]);



document.onkeyup = function (event) {
    currentWord = "";
    var key = (event.key.toLowerCase());

    //   wrongGuess.textContent = event.key;
      var x = event.key;
        
        usedLetters.push(x);
        var wrongGuessesString = "";
        for(var i = 0; i < usedLetters.length; i++) {
            wrongGuessesString = wrongGuessesString + usedLetters[i] + " "; 
        };
        for(var i = 0; i < liveWord.length; i++) {
            if (liveWord.indexOf(x) !== -1) {
                currentWord = currentWord + liveWord[i] + " ";
            }
            // if(liveWord.indexOf(x) !== -1) {
            //     //if(liveWord[i] === (usedLetters.indexOf(key) !== -1)) {
            //         currentWord = currentWord + liveWord[i] + " ";
            //     //}
               

            // } 
            else{
                currentWord = currentWord + "_ ";
            }
            
            
        
        }
        document.getElementById('currentWord').innerText = currentWord;
        wrongGuess.textContent = wrongGuessesString;
        console.log(event);
        console.log(x);
    }

    
  
wordList.indexOf(wordList);

// function updateCurrentWord (currentWord, currentWord) {
//     if (wordList.indexOf(wordList) === -1) {

//     }
// }
