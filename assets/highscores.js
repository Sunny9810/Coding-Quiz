var initialScore = document.querySelector("#initialScore");
var clearButton = document.querySelector("#clearButton");
var goBack = document.querySelector("#goBack");
//Storing score data starts here
window.addEventListener("load", function() {
    var highScores = JSON.parse(localStorage.scores);
    for (let i = 0; i < highScores.length; i++) {
        var scoreData = document.createElement("h3");
        scoreData.innerHTML = i+1 + ". " + highScores[i].initials + ": " + highScores[i].score;
        initialScore.appendChild(scoreData);
    }
})
//Adding eventlistener to clearButton
clearButton.addEventListener("click", function() {
    localStorage.clear();
    initialScore.innerHTML = "";
})
//Adding eventlistener to goback
goBack.addEventListener("click", function() {
    window.location.href = "index.html";
})
