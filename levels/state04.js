//Start State04 (Top Scores)

function initState04(){
	if(debug == 1)
console.log("initializing State 04 (Top Scores)");

	var splash = new Image();
	splash.src = "assets/bg.png";
	
	splash.onload = function() {
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
	
	var m_MainText = new Kinetic.Text({
          x: 425,
          y: 450,
          text: 'Top Scores',
          fontSize: 15,
          fontFamily: 'Lucida Console',
          textFill: 'White',
		  opacity: 0,
        });
		textLayer.add(m_MainText);
		stage.add(textLayer);
		m_MainText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		
console.log("Done Loading, State04");

	}


