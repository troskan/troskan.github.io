var questions = [
  "What are the colors of the Greek flag?",
  "Does beavers exist in Sweden?",
  "In Sweden, what is the punishment for going to church with a hat on?",
];
var answers = [];

answers[0] = ["White and blue.", "Green, red and blue.", "Red and green."];

answers[1] = [
  "Yes they exist in Sweden.",
  "No.",
  "Yes they exist, but only when they swim from Canada.",
];
answers[2] = [
  "100$ Citation.",
  "Jailtime, 1 week to 9 weeks.",
  "There is no punishment.",
];

let maxQuestions = 3;
let currentQuestionCount = 0;
let inputAnswer = "";
let currentQuestion = "";
let currentQuestionID;

//Buttons
var inputButtons = [];

var answerArr = [];

function displayQuestion() {
  let randomID = Math.floor(Math.random() * questions.length);
  currentQuestionID = document.getElementById("question").innerHTML =
    questions[randomID];
  //questions.splice(randomID, 1);
  return currentQuestion;
}
function displayAnswer() {
  currentQuestionCount++;
  document.getElementById("current-question-count").innerHTML =
    currentQuestionCount;

  let randomID = Math.floor(Math.random() * answers.length);
  currentQuestionID = randomID;

  document.getElementById("question").innerHTML = questions[randomID];

  document.getElementById("answer-0").innerHTML = answers[randomID][0];
  document.getElementById("answer-0").value = answers[randomID][0];

  document.getElementById("answer-1").innerHTML = answers[randomID][1];
  document.getElementById("answer-1").value = answers[randomID][1];

  document.getElementById("answer-2").innerHTML = answers[randomID][2];
  document.getElementById("answer-2").value = answers[randomID][2];
  //answers.splice(randomID, 1);
}
function whenAnswerClick(button) {
  input = button.value;
  if (input === answers[0][0]) {
    displayQuestion();
    displayAnswer();
  } else if (input === answers[1][0]) {
    displayQuestion();
    displayAnswer();
  } else if (input === answers[2][2]) {
    displayAnswer();
    displayQuestion();
  } else {
    console.log(input);
    console.log("else reached! WARNING");
  }
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

displayAnswer();
