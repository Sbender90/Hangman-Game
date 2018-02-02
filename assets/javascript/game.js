var wordList = ["weezer", "nirvina", "social distortion", "cake",
    "gold finger", "rage against the machine",
    "red hot chili peppers", "blink 182",
    "soundgarden", "soul asylum"
];

var usedLetters = [];
var randomWordIndex = Math.floor(Math.random() * wordList.length);
document.getElementById('currentWord').innerText = wordList[randomWordIndex];

console.log(wordList[randomWordIndex]);

// var currentWordListItems = "_";
// for (var i = 0; i < randomWord.length; i++) {
//     console.log(randomWord.charAt(i));
//     currentWordListItems = currentWordListItems + "<li id=\"current-word-" + i  + "\" class=\"hidden\">" + randomWord.charAt(i) + "</li>";
// }
// console.log("currentWordListItems", currentWordListItems);

// var currentWord = document.getElementById('randomWord');
// currentWord.innerHTML(randomWord);

// var usedLetters = {
//     length: 0,

//     addElem: function addElem(words) {

//     }
// };

document.onkeyup = function (event) {
   var key = (event.key.toLowerCase);
        
        
        usedLetters.push(key);
        console.log(usedLetters);
    }




document.getElementById('usedLetters').innerText = wordList[randomWordIndex];
