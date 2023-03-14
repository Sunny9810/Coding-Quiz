var startQuiz = document.querySelector("#start-quiz");
var timer = document.querySelector(".time") 
var secondsLeft = 30;
// Window.location.href created to be bale to go next page
startQuiz.addEventListener("click", function() {
    window.location.href="questions.html";
});