var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question = document.querySelector("#question");
var correctAnswer = document.querySelector("#demo");
var timer = document.querySelector(".time")
var secondsLeft = 30;
let iterator = 0;
let score = 0;
//JSON Object starts here
var questionsAnswers = [
    {
        "question": "Arrays in javascript can be used to store ______.",
        "answers": [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
        ],
        "answer": "4. all of the above"
    },
    {
        "question": "Commonly used data types do not include:",
        "answers": [
        "1. Strings",
        "2. Booleans",
        "3. Alerts",
        "4. Numbers"
        ],
        "answer": "3. Alerts"
    },
    {
        "question": "The condition in an if/else statment is enclosed within _______.",
        "answers": [
        "1. quotes",
        "2. curly braces",
        "3. parantheses",
        "4. square brackets"
        ],
        "answer": "3. parantheses"
    },
];
// Eventlistener for question 1 starts here
question1.addEventListener("click", function() {
    if(question1.innerHTML === questionsAnswers[iterator]["answer"]) {
        localStorage.setItem("score", score+=5);
        correctAnswer.innerHTML = "Correct";
        if(iterator < 2) {
            iterator++;
        } else window.location.href = "enterScore.html";
        question.innerHTML = questionsAnswers[iterator]["question"];
        question1.innerHTML = questionsAnswers[iterator]["answers"][0];
        question2.innerHTML = questionsAnswers[iterator]["answers"][1];
        question3.innerHTML = questionsAnswers[iterator]["answers"][2];
        question4.innerHTML = questionsAnswers[iterator]["answers"][3];
    }
    else {
        correctAnswer.innerHTML = "Incorrect";
        localStorage.setItem("score", score-=2);
        if(secondsLeft >= 5){
            secondsLeft -=5;
        } else window.location.href = "enterScore.html"; 
    }
})
// Eventlistener for question 2 start here
question2.addEventListener("click", function() {
    if(question2.innerHTML === questionsAnswers[iterator]["answer"]) {
        localStorage.setItem("score", score+=5);
        correctAnswer.innerHTML = "Correct";
        if(iterator < 2) {
            iterator++;
        } else window.location.href = "enterScore.html";
        question.innerHTML = questionsAnswers[iterator]["question"];
        question1.innerHTML = questionsAnswers[iterator]["answers"][0];
        question2.innerHTML = questionsAnswers[iterator]["answers"][1];
        question3.innerHTML = questionsAnswers[iterator]["answers"][2];
        question4.innerHTML = questionsAnswers[iterator]["answers"][3];
    }
    else {
        correctAnswer.innerHTML = "Incorrect";
        localStorage.setItem("score", score-=2);
        if(secondsLeft >= 5){
            secondsLeft -=5;
        } else window.location.href = "enterScore.html";
    }
})
// Eventlistener for question 3 starts here
question3.addEventListener("click", function() {
    if(question3.innerHTML === questionsAnswers[iterator]["answer"]) {
        localStorage.setItem("score", score+=5);
        correctAnswer.innerHTML = "Correct";
        if(iterator < 2) {
            iterator++;
        } else window.location.href = "enterScore.html";
        question.innerHTML = questionsAnswers[iterator]["question"];
        question1.innerHTML = questionsAnswers[iterator]["answers"][0];
        question2.innerHTML = questionsAnswers[iterator]["answers"][1];
        question3.innerHTML = questionsAnswers[iterator]["answers"][2];
        question4.innerHTML = questionsAnswers[iterator]["answers"][3];
    }
    else {
        correctAnswer.innerHTML = "Incorrect";
        localStorage.setItem("score", score-=2);
        if(secondsLeft >= 5){
            secondsLeft -=5;
        } else window.location.href = "enterScore.html";
    }
})
//Eventlistener for question 4 starts here
question4.addEventListener("click", function() {
    if(question4.innerHTML === questionsAnswers[iterator]["answer"]) {
        localStorage.setItem("score", score+=5);
        correctAnswer.innerHTML = "Correct";
        if(iterator < 2) {
            iterator++;
        } else window.location.href = "enterScore.html";
        question.innerHTML = questionsAnswers[iterator]["question"];
        question1.innerHTML = questionsAnswers[iterator]["answers"][0];
        question2.innerHTML = questionsAnswers[iterator]["answers"][1];
        question3.innerHTML = questionsAnswers[iterator]["answers"][2];
        question4.innerHTML = questionsAnswers[iterator]["answers"][3];
    }
    else {
        correctAnswer.innerHTML = "Incorrect";
        localStorage.setItem("score", score-=2);
        if(secondsLeft >= 5){
            secondsLeft -=5;
        } else window.location.href = "enterScore.html";
    }
})
//eventlistener for window starts here
window.addEventListener("load", (event) => {
    setTime();
    question.innerHTML = questionsAnswers[iterator]["question"];
    question1.innerHTML = questionsAnswers[iterator]["answers"][0];
    question2.innerHTML = questionsAnswers[iterator]["answers"][1];
    question3.innerHTML = questionsAnswers[iterator]["answers"][2];
    question4.innerHTML = questionsAnswers[iterator]["answers"][3];
});
// Function for timer starts here
function setTime() {
    var timerInterval = setInterval(function() {
    if(secondsLeft > 0) {
        secondsLeft--;
    }
    timer.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        window.location.href = "enterScore.html";
    }
    }, 1000);
}