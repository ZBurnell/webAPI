document.getElementById("start-quiz").addEventListener("click", startQuiz);

function quiz(event){
    event.preventdeault;
    questionbank = []


    var Q1 = {question : "what does :WQ do to the VIM?",
    choices: ["1: write and quit", "2: won't quit", "3: wrap and quit", "4: weird and quiet"],
    answer: "option 1"}; 
    questionbank.push(Q1)

    var Q2 = {question: "Arrays in JavaScript can be used to store what?",
    choices: ["1: numbers and strings", "2: other arrays", "3: booleans", "4: all of the above"],
    answer: "option 4"};
    questionbank.push(Q2)

    var Q3 = {question: "Commonly used data types DO NOT include",
    choices: ["1: strings", "2: alerts", "3: booleans", "4: numbers"],
    answer: "option 3"};
    questionbank.push(Q3)

    var Q4 = {question: "How to write an IF statement in Javascript?",
    choices: ["1: if i = 5 then", "2: if i = 5", "3: if i == 5 then", "4: if (i==5)"],
    answer: "option 3"};
    questionbank.push(Q4)
}

var lastQuestion = questionbank.length - 1;
var score = 0;
countDown = 75;


for (var i=o; i < question.length; i++){
    var response = window.();
    if(response==[i].answer){
        score++;
        alert("congrats you got it right");    
    } else {
        alert("sorry that's incorrect!")
    }
}

function setTime() {
    var timerInterval = setInterval(function () {
        countDown--;
        countDownSpan.textContent = countDown;
        if (countDown === 0) {
            clearInterval(timerInterval);
            gameOver();
        } else if (countDown < 0) {
            clearInterval(timerInterval);
            gameOver();
            countDown = 0
        }
        else if (currentQuestionIndex === lastQuestionIndex) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

setTime()
