
var HTMLContent;
var distance;
var secs = secs;
var timer;

var startGame = function() {

  $("#start").click(countDown);
function countDown(mins, secs) {
  var presentTime = document.get(ElementById)("timer").innerHTML;
      var m = 3;
      var s = 00;
    

  var timeArray = presentTime.split(/[:]+/);

  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));

  if(s==59){m=m-1}
  if(m<0) {
    alert("Time's Up!")
    m = 3;
    s = 00;
    document.get(ElementById)("timer").innerHTML =
    m + ":" + s;
    return; 
  }

   setTimeout(countDown, 1000);
}

function populate() {
  if (quiz.isEnded()) {

  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
  }

}

var questions = [
    new question("What is known as the Buckeye state?", ["Illinois", "Kentucky", "Ohio", "Pennsylvania"], "Ohio"),
    new question("What is the capital of California?", ["San Diego", "San Francisco", "Los Angeles", "Sacramento"], "Sacramento"),
    new question("What is 9 * 11?", ["121", "88", "99", "911"], "99"),
    new question("How many lbs is 200 kilograms?", ["220", "315", "275", "255"], "220")

];

var quiz = new quiz(questions);

function question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

function quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

quiz.prototype.getQuestionIndex = function() {
  return this.questions[questionIndex];
}

quiz.prototype.isEnded = function() {
  return this.questions.length === this.QuestionIndex;
}

quiz.prototype.guess = function(answer) {
  this.questionIndex++;

 if (this.getQuestionIndex().correctAnswer(answer)) {
  this.score++;
  }




var startGame = function() {

  }

// var questionIndex = Math.round(Math.random(stateArray.length));

// var question = stateArray[i];
// var answer = capitalArray[i];



jQuery(function ($) {
    var threeMinutes = 60 * 3,
        display = $('#time');
    // startTimer(fiveMinutes, display);
});

function isChecked(){
 var a = document.getElementById().checked;
 var b= document.getElementById().checked;
 var c = document.getElementById().checked;
 var d = document.getElementById().checked;
 
 if(a==false && b == false && c==false && d==false){
 alert('Please select an answer!');
 return false;
 }
 else{
 return true;
 }
 }

$("#start").click(countDown);
function countDown(mins, secs) {
  var presentTime = document.get(ElementById)("#timer").innerHTML;
  var m = 3;
  var s = 00;
    

  var timeArray = presentTime.split(/[:]+/);

  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));

  if(s==59){m=m-1}
  if(m<0) {
    alert("Time's Up!")
    m = 3;
    s = 00;
    document.get(ElementById)("timer").innerHTML =
    m + ":" + s;
    return; 
  }

   setTimeout(countDown, 1000);
}


// function startTimer() {
//   document.getElementById("timer").innerHTML =
//     m + ":" + s;
//   setTimeout(startTimer, 5000);

// }

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "00" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
    }

// $("#qndastuff").click(questions);
// function displayQuestions() {
//     var questions = new Array 
   

}
}













