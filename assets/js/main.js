$(document).ready(function(){
    var score = document.getElementById("scoreCounter");
    score.innerHTML = "0";
    var scoreValue = 0;
    checkScore();

    function upVote() {
      scoreValue++;
      score.innerHTML = scoreValue;
      checkScore();
    }


    function checkScore() {
      if (scoreValue > 0) {
        score.style.color = "#ff6600";
      } else {
        score.style.color = "#666666";
      }
    }
});
