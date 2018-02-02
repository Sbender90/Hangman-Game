var wordList = ["weezer", "nirvina", "social distortion", "cake",
    "gold finger", "rage against the machine",
    "red hot chili peppers", "blink 182",
    "soundgarden", "soul asylum"
];

var lives = 6;

var usedLetters = [];

 function (start) {
    this.correct = false;
    this.currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    this.yes = document.getElementById('right');
    this.no = document.getElementById('wrong');
    this.lives = document.getElementById('lives');
};

document.getElementById('currentWord').innerText = wordList[randomWordIndex];

console.log(wordList[randomWordIndex]);



document.onkeyup = function (event) {
   var key = (event.key.toLowerCase);
        
        
        usedLetters.push(key);
        console.log(usedLetters);
    }

wordList.indexOf(wordList);

function updateCurrentWord (currentWord, currentWord) {
    if (wordList.indexOf(wordList) === -1) {

    }
}
