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

let maxQuestions = 2;
let currentQuestionCount = 1;
let inputAnswer = "";
let currentQuestion = "";
let currentQuestionID;
let randomID = Math.floor(Math.random() * questions.length);

function displayQuestion() {
  currentQuestion = document.getElementById("question").innerHTML =
    questions[randomID];
  currentQuestionID = randomID;

  return currentQuestion;
}
function clickAnswer() {
  var answerArr = [];
  answerArr[0] = document.getElementById("answer-0").innerHTML =
    answers[randomID][0];
  answerArr[1] = document.getElementById("answer-1").innerHTML =
    answers[randomID][1];
  answerArr[2] = document.getElementById("answer-2").innerHTML =
    answers[randomID][2];
  return answerArr;
}

displayQuestion();
clickAnswer();
