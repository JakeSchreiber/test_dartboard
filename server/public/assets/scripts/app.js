var score = 501;
var roundScore = 0;
var dartsRemaining = 3;

$(document).ready(function(){
    roundOfDarts();



});


function roundOfDarts(){
    for(var i = 0; i < dartsRemaining; i++){

    }
    throwDart();

}

function throwDart() {
    var el = 0;
    $("#boardContainer").on('click', "#btn", function () {
        var value = $(this).data('value');

            roundScore += value;
            score -= value;
            dartsRemaining--;

        updateScoreboard(score, dartsRemaining);
        el++;
        $("#dart" + el).append(value);

        if(el == 3){
            updateRoundScore(roundScore);
            el = 0;
            roundScore = 0;
            dartsRemaining = 3;
            alert("Remove Darts");
            $("#dart1").text("Dart 1: ");
            $("#dart2").text("Dart 2: ");
            $("#dart3").text("Dart 3: ");

        }



    });
}

function updateScoreboard(score, dartsRemaining){
    $("#score1").text(score); //Append DOM call function
    $("#dartsRemaining").text("Darts Remaining: " + dartsRemaining);
}

function updateRoundScore(roundScore){
    $("#roundScore").append("</br>" + roundScore);
    $("#dartsRemaining").text("Darts Remaining: 3");

}
//for(var i = 0; i <= dartsRemaining; i++){
//       $("#dart" + [i + 1]).text(roundScore);
//}
