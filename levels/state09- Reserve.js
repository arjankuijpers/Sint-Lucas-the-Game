//Start State06 (Tutorial)

function initState06(){
	if(debug == 1)
console.log("initializing State 06 (Tutorial)");

	var splash = new Image();
	splash.src = "assets/createc.png";
	
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
          x: 350,
          y: 60,
          stroke: '#555',
          strokeWidth: 5,
          fill: '#ddd',
          text: 'Welkom, Nu Volgt eerst een Tutorial\n\nAll the world\'s a stage, and all the men and women merely players. They have their exits and their entrances.',
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: '#555',
          width: 380,
          padding: 20,
          align: 'center',
          fontStyle: 'italic',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [10, 10],
            opacity: 0.2
          },
          cornerRadius: 10
        });
		textLayer.add(m_MainText);
		stage.add(textLayer);
		m_MainText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		
console.log("Done Loading, State06(Tutorial)");

	}


