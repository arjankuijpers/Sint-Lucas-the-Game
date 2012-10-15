//Start roam

function initRoam(location){
	if(debug == 1)
console.log("initializing Roam 01 (entrance)");

	var roamImg = new Image();
	roamImg.src = "assets/createc.png";
	
	roamImg.onload = function() {
	background = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: splash,
			draggable: false,
			opacity: 0,
		});
		
		backgroundLayer.add(background);
		stage.add(backgroundLayer);
		textLayer.moveToTop();
		
		background.transitionTo({
            opacity: 1,
            duration: 2,
		});
	};
		
		
console.log("Done Loading, Roam");

	}


