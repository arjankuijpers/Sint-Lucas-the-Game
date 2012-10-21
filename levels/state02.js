//Start State02(Splash)

function initState02(){
	if(debug == 1)
console.log("initializing State 02(Splash)");

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
	
	
	if(debug == 1)
	{
	var simpleText = new Kinetic.Text({
          x: 10,
          y: 475,
          text: 'Alpha - ' + version,
          fontSize: 10,
          fontFamily: 'Lucida Console',
          textFill: 'White',
		  opacity: 0,
        });
		textLayer.add(simpleText);
		stage.add(textLayer);
		simpleText.transitionTo({
            opacity: 1,
            duration: 2,
		});
	}
	else{
		var simpleText = new Kinetic.Text({
          x: 10,
          y: 475,
          text: 'Debugging off',
          fontSize: 10,
          fontFamily: 'Lucida Console',
          textFill: 'White',
		  opacity: 0,
        });
		textLayer.add(simpleText);
		stage.add(textLayer);
		simpleText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		
		
	}
		//wait for 5 seconds, after that translate off, delete children and go to level01
		setTimeout(function(){background.transitionTo({
            opacity: 1,
            duration: 1,
		});
		document.body.style.cursor = 'default';
		backgroundLayer.removeChildren();stage.reset();
		 initState03();},5000);
		if(debug == 1)
		
console.log("Done Loading State02, and Call Function 'initState03' after 5 seconds");

	}


