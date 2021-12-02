
$(document).ready(function() {
	function generateColor() {
		console.log("Generating...");
		var randomColor = "#";
		var hexArr = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		for (i=0;i<3;i++) {
			var index = Math.floor(Math.random()*16);
			randomColor+= hexArr[index];
		}
		return randomColor;
	}
		
	function randomBrickColor() {
		$('.letter_block').each(function(i,obj){
			setTimeout(function(){
				var color = generateColor();
				$(obj).css('background-color',generateColor());
				console.log('Color: '+color);
			},randomTimer());			
		});
	}
	
	function randomTimer() {
		return Math.floor(Math.random()*5000) + 500;
	}
	
	function timeController() {
		var millis = randomTimer();
		randomBrickColor();
		setTimeout(function() {
			timeController();
		}, millis);
	}
	timeController();
});