var score = 501;
var roundScore = 0;
var dartsRemaining = 3;

$(document).ready(function(){


	// $(".triple12").on('click', function(){
	// 	score += 36;
	// 	$("#score").text(score);
	// });

	// $(".triple5").on('click', function(){
	// 	score += 15;
	// 	$("#score").text(score);
	// });

 $("#boardContainer").on('click', "#btn", function(){
        var value = $(this).data('value');
        roundScore += value;
        console.log(roundScore);
        score -= value;
        $("#score").text(score);
        dartsRemaining--;
        $("#dartsRemaining").text("Darts Remaining: " + dartsRemaining);
        for(var i = 0; i <= dartsRemaining; i++){
        	$("#dart" + [i + 1]).text(roundScore);
        }
    });



	// $("#boardContainer").load('Dartboard_without_White_Segments.svg', function(response){
	// 	console.log("Working");
	// 	$(this).addClass("svgLoaded");
		
	// 	if(!response){
	// 		// Error loading SVG!
	// 		// Make absolutely sure you are running this on a web server or localhost!
	// 	}

	// });
});