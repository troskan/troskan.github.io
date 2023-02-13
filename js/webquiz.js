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
    question: "What are the colors of the Greek flag?",
    answers: ["White and blue", "Green, red and blue", "Red and green"],
    correctAnswer: 0, // index of the correct answer
  },
  {
    question: "Does beavers exist in Sweden?",
    answers: [
      "Yes they exist in Sweden",
      "No",
      "Yes they exist, but only when they swim from Canada",
    ],
    correctAnswer: 0, // index of the correct answer
  },
  {
    question:
      "In Sweden, what is the punishment for going to church with a hat on?",
    answers: [
      "$100 citation",
      "Jail time, 1 week to 9 weeks",
      "There is no punishment",
    ],
    correctAnswer: 2, // index of the correct answer
  },
];

let maxQuestions = 3;
let currentQuestionCount = 0;
let inputAnswer = "";
let currentQuestion = "";
let currentQuestionID;
let questionCounter = 0;

let score = 0;

//Buttons
var inputButtons = [];

var answerArr = [];

if (score < 0) {
  location.reload();
}

function displayQuestion() {
  questionCounter++;
  if (questionCounter > questions.length - 1) {
    location.reload();
  }

  let randomID = Math.floor(Math.random() * questions.length);
  currentQuestionID = document.getElementById("question").innerHTML =
    questions[randomID];
  //'questions.splice(randomID, 1);
  return currentQuestion;
}
function displayAnswer() {
  currentQuestionCount++;
  document.getElementById("current-question-count").innerHTML =
    currentQuestionCount;

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
}
function whenAnswerClick(button) {
  input = button.value;

  if (input === "correct") {
    addScore();

    displayQuestion();
    displayAnswer();
  } else {
    removeScore();
    if (score < 0) {
      location.reload();
    }
    console.log("else reached! WARNING");
  }
}
function removeScore() {
  let scoreElement = document.getElementById("score");
  scoreElement.classList.remove("score");

  scoreElement.classList.add("score-red");
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

displayAnswer();
