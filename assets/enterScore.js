var submit = document.querySelector("#submit");
var input = document.querySelector("#initials");
var finalScore = document.querySelector("#finalscore");
var scores = [];
//eventlistener for window starts here to be able to load the scores on the page
window.addEventListener("load", function() {
    finalScore.innerHTML = localStorage.getItem("score");
})
// usinging JSON parse and JSON stringify to store data
submit.addEventListener("click", function() {
    scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({"initials": input.value, "score": finalScore.innerHTML});
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "highscores.html";
})