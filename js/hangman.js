var programming_languages = [
  "python",
  "javascript",
  "csharp",
  "java",
  "sql",
  "ruby",
  "c",
  "golang",
];

let answer = "";
let maxWrong = 6;
let misstakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];
}
function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) => `
      <div id="keyboard" class="keyboard-container">
      <button
        class="btn btn-sm btn-primary m-2 custom-button-hangman"
        id="${letter}"
        onClick="handleGuess('${letter}')"
      >
        ${letter}
      </button>
      </div>
    `
    )
    .join("");
  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    misstakes++;
    updateMisstakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById("hangmanPic").src =
    "/Images/hangman/" + misstakes + ".jpg";
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You Won!!!";
  }
}

function checkIfGameLost() {
  if (misstakes === maxWrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "The answer was: " + answer;
    document.getElementById("keyboard").innerHTML = "You Lost!!!";
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function updateMisstakes() {
  document.getElementById("misstakes").innerHTML = misstakes;
}

function reset() {
  misstakes = 0;
  document.getElementById("misstakes").innerHTML = 0;
  guessed = [];

  document.getElementById("hangmanPic").src = "/Images/hangman/0.jpg";

  randomWord();
  guessedWord();
  updateMisstakes();
  generateButtons();
}

document.getElementById("maxWrong").innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
