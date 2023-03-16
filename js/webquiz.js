// var questions = [
//   "What are the colors of the Greek flag?",
//   "Does beavers exist in Sweden?",
//   "In Sweden, what is the punishment for going to church with a hat on?",
// ];
// var answers = [];

// answers[0] = ["White and blue.", "Green, red and blue.", "Red and green."];

// answers[1] = [
//   "Yes they exist in Sweden.",
//   "No.",
//   "Yes they exist, but only when they swim from Canada.",
// ];
// answers[2] = [
//   "100$ Citation.",
//   "Jailtime, 1 week to 9 weeks.",
//   "There is no punishment.",
// ];
var questions = [
  {
    question: "What is the capital city of Australia?",
    answers: ["Sydney", "Canberra", "Melbourne"],
    correctAnswer: 1,
  },
  {
    question: "What is the largest country in South America by land area?",
    answers: ["Argentina", "Brazil", "Colombia"],
    correctAnswer: 1,
  },
  {
    question: "What is the main ingredient in hummus?",
    answers: ["Chickpeas", "Lentils", "Black beans"],
    correctAnswer: 0,
  },
  {
    question: "What is the world's largest ocean?",
    answers: ["Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 2,
  },
  {
    question:
      "What is the name of the famous detective created by Sir Arthur Conan Doyle?",
    answers: ["Sherlock Holmes", "Hercule Poirot", "Nancy Drew"],
    correctAnswer: 0,
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: ["Venus", "Mercury", "Mars"],
    correctAnswer: 1,
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Go", "Gr", "Au"],
    correctAnswer: 2,
  },
  {
    question: "What is the highest mountain in Africa?",
    answers: ["Mount Kilimanjaro", "Mount Kenya", "Mount Elgon"],
    correctAnswer: 0,
  },
  {
    question: "What is the largest organ in the human body?",
    answers: ["Liver", "Skin", "Heart"],
    correctAnswer: 1,
  },
  {
    question: "What is the most widely spoken language in the world?",
    answers: ["Mandarin Chinese", "Spanish", "English"],
    correctAnswer: 0,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Saturn", "Uranus"],
    correctAnswer: 0,
  },
  {
    question: "What is the name of the first man to walk on the moon?",
    answers: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    correctAnswer: 0,
  },
  {
    question: "What is the only continent that is also a country?",
    answers: ["Australia", "South America", "Europe"],
    correctAnswer: 0,
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Yuan", "Euro", "Yen"],
    correctAnswer: 2,
  },
  {
    question: "What is the tallest mammal in the world?",
    answers: ["Giraffe", "Elephant", "Hippopotamus"],
    correctAnswer: 0,
  },
  {
    question: "What is the process by which plants make their own food called?",
    answers: ["Respiration", "Photosynthesis", "Digestion"],
    correctAnswer: 1,
  },
  {
    question: "What is the name of the world's largest desert?",
    answers: ["Sahara", "Gobi", "Arabian"],
    correctAnswer: 0,
  },
  {
    question: "What is the chemical symbol for oxygen?",
    answers: ["O", "C", "H"],
    correctAnswer: 0,
  },
  {
    question:
      "What is the name of the famous ship that sank on its maiden voyage in 1912?",
    answers: ["Titanic", "Lusitania", "Andrea Doria"],
    correctAnswer: 0,
  },
  {
    question: "What is the name of the world's largest coral reef system?",
    answers: ["Great Barrier Reef", "Coral Triangle", "Belize Barrier Reef"],
    correctAnswer: 0,
  },
];

let maxQuestions = 20;
let currentQuestionCount = 0;
let inputAnswer = "";
let currentQuestion = "";
let currentQuestionID;
let questionCounter = 1;

let score = 0;

if (!localStorage.getItem("highscore")) {
  localStorage.setItem("highscore", 0);
}

let highscore = localStorage.getItem("highscore");
//Buttons
var inputButtons = [];

var answerArr = [];

if (score < 0) {
  location.reload();
}

function displayQuestion() {
  questionCounter++;
  document.getElementById("current-question-count").innerHTML = questionCounter;

  if (questionCounter > maxQuestions) {
    location.reload();
    console.log("You have reached max questions!");
  }

  let randomID = Math.floor(Math.random() * questions.length);
  currentQuestionID = document.getElementById("question").innerHTML =
    questions[randomID];
}
function displayAnswer() {
  let randomID = Math.floor(Math.random() * questions.length);
  currentQuestionID = randomID;

  document.getElementById("question").innerHTML =
    questions[currentQuestionID].question;

  document.getElementById("answer-0").innerHTML =
    questions[currentQuestionID].answers[0];
  document.getElementById("answer-0").value =
    questions[currentQuestionID].correctAnswer === 0 ? "correct" : "incorrect";

  document.getElementById("answer-1").innerHTML =
    questions[currentQuestionID].answers[1];
  document.getElementById("answer-1").value =
    questions[currentQuestionID].correctAnswer === 1 ? "correct" : "incorrect";

  document.getElementById("answer-2").innerHTML =
    questions[currentQuestionID].answers[2];
  document.getElementById("answer-2").value =
    questions[currentQuestionID].correctAnswer === 2 ? "correct" : "incorrect";
  questions.splice(randomID, 1);
}
function whenAnswerClick(button) {
  input = button.value;

  if (input === "correct") {
    addScore();
    setHighscore();
    var audio = new Audio("/Sounds/correct.mp3");
    audio.volume = 0.2;
    audio.play();
    displayQuestion();
    displayAnswer();
  } else {
    var audio = new Audio("/Sounds/incorrect.mp3");
    audio.play();
    removeScore();
    setHighscore();

    if (score < 0) {
      location.reload();
    }
    console.log("else reached! WARNING");
  }
}
function setHighscore() {
  highscore = localStorage.getItem("highscore");
  console.log(highscore);

  if (score > highscore) {
    highscore = score;
    console.log(`New highscore! ${highscore}`);

    document.getElementById("highscore").innerHTML = highscore;
    localStorage.setItem("highscore", highscore);

    let hsElement = document.getElementById("highscore");
    hsElement.classList.remove("highscore");
    hsElement.classList.add("highscore-increase");
    setTimeout(function () {
      hsElement.classList.remove("highscore-increase"); // remove the score-increase class after 0.5 seconds
    }, 500);
  }
}
function resetHighscore() {
  localStorage.setItem("highscore", 0);
  location.reload();
}
function removeScore() {
  let scoreElement = document.getElementById("score");
  scoreElement.classList.remove("score");
  scoreElement.classList.add("score-red");

  setTimeout(function () {
    scoreElement.classList.remove("score-red"); // remove the score-increase class after 0.5
    scoreElement.classList.add("score");
    seconds;
  }, 500);
  score--;
  document.getElementById("score").innerHTML = score;
}
function addScore() {
  let scoreElement = document.getElementById("score");
  scoreElement.classList.remove("score-red");
  scoreElement.classList.add("score");

  score++;
  document.getElementById("score").innerHTML = score;
}

document.getElementById("answer-0").addEventListener("click", function () {
  whenAnswerClick(this);
});
document.getElementById("answer-1").addEventListener("click", function () {
  whenAnswerClick(this);
});
document.getElementById("answer-2").addEventListener("click", function () {
  whenAnswerClick(this);
});
document.getElementById("score").innerHTML = score;
document.getElementById("max-question").innerHTML = maxQuestions;
document.getElementById("highscore").innerHTML = highscore;

displayAnswer();
