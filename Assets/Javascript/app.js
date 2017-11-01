$('#start').on('click', function() {
    $('#start').remove();
    game.loadQuestion();
})

$(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
})

$(document).on('click','#reset',function(){
  game.reset();
})

var questions = [{
    question: "What is known as the Buckeye state?",
    answers: ["Illinois", "Kentucky", "Ohio", "Pennsylvania"],
    correctAnswer: "Ohio",
}, {
    question: "What is the capital of California?",
    answers: ["San Diego", "San Francisco", "Los Angeles", "Sacramento"],
    correctAnswer: "Sacramento",
}, {
    question: "What is 9 * 11?",
    answers: ["121", "88", "99", "911"],
    correctAnswer: "99",
}, {
    question: "What is 15 * 35?",
    answers: ["725", "355", "1352", "535"],
    correctAnswer: "535",
}, {
    question: "What is the largest species of terrestrial crab in the world?",
    answers: ["King Crab", "Snow Crab", "Coconut Crab", "Gorilla Crab"],
    correctAnswer: "Coconut Crab",
}, {
    question: "What is the plural of mouse?",
    answers: ["Moose", "Mouses", "Mice", "Miso"],
    correctAnswer: "Mice",
}, {
    question: "How many lbs is 200 kilograms?",
    answers: ["220", "315", "275", "255"],
    correctAnswer: "220",

}];

var timer = {
  time:30,
  run: function(){
    counter = setInterval(timer.decrement, 1000);
  },
  stop: function(){
    clearInterval(counter);
  },
  decrement: function(){
    timer.time--;
    $('#countdown').html(timer.time);
    if (timer.time === 0){
      timer.stop();
      $('#content').html($timeIsUp);
    }
  }
}

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered:0,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("TIME'S UP!");
            game.timeUp();
        }
    },
    loadQuestion: function() {
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').html("<h2>Time Remaining <span id='counter'>30</span> Seconds</h2>");
        $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function() {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function() {
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2>OUT OF TIME!</h2>');
        $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    results: function() {
        clearInterval(timer);
        $('#subwrapper').html("<h2>ALL DONE!</h2>");
        $('#subwrapper').append("<h3>Correct: " + game.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect: " + game.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + game.unanswered + "</h3>");
        $('#subwrapper').append("<button id='reset'>RESET</button>");
    },
    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function() {
        console.log("YOU GOT IT!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2>YOU GOT IT RIGHT!</h2>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredIncorrectly: function() {
        console.log("WRONG!");
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2>YOU GOT IT WRONG!</h2>');
        $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function() {
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

    }
}