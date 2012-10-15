//Start State05 (Credits)

function initState05(){
	
	log("<AUDIO> reset Credits time and volume");
	credits.currentTime = 0;
	credits.volume = 1;
	log("<AUDIO> play credits");
	credits.play();
	
	
	stage.add(textLayer);
	stage.add(characterLayer);
	stage.add(secondTextLayer);
	
	if(debug == 1)
console.log("initializing State 05(Credits)");

	var splash = new Image();
	splash.src = "assets/mbg.png";
	
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
		characterLayer.moveToTop();
		textLayer.moveToTop();
		secondTextLayer.moveToTop();
		
		background.transitionTo({
            opacity: 1,
            duration: 2,
		});
	};
	
	aText = new Kinetic.Text({
          x: 600,
          y: 15,
          text: 'Credits',
          fontSize: 50,
          fontFamily: 'Calibri',
          textFill: '#FF7600',
          align: 'center',
          fontStyle: 'italic',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [7.5, 7.5],
            opacity: 0
          },
          opacity: 0.0,
        });
		secondTextLayer.add(aText);
		secondTextLayer.draw();
		aText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		secondTextLayer.moveToTop();
	
	
		
		setTimeout(function(){
				characterLayer.removeChildren();
				splash.src = "assets/rens_verspagen.png";
			setCText(600,200,30, "Project Lead");
			setCText(600,250,20, "Rens Verspagen");
			characterLayer.moveToTop();
			secondTextLayer.moveToTop();
		},5000);
		
		setTimeout(function(){
			textLayer.removeChildren();
			setCText(600,200,30, "Lead Programming");
			setCText(600,250,20, "Arjan Kuijpers");
		},10000);
		
				setTimeout(function(){
			textLayer.removeChildren();
			characterLayer.moveToTop();
			setCText(600,200,30, "2D Art");
			setCText(600,250,20, "Rens Verspagen");
		},15000);
		
				setTimeout(function(){
			textLayer.removeChildren();
			//splash.src = "assets/max_linssen.png";
			setCText(600,200,30, "3D Art");
			setCText(600,250,20, "Max Linssen");
			characterLayer.moveToTop();
					secondTextLayer.moveToTop();
		},20000);
		
		setTimeout(function()
			{
				textLayer.removeChildren();
				setCText(600,200,30, "Character Design");
				setCText(600,250,20, "Rens Verspagen");
			},25000);
		
		setTimeout(function()
			{
				textLayer.removeChildren();
				splash.src = "assets/arjan_kuijpers.png";
				setCText(550,200,30, "AI / Gameplay &\n  Core system design");
				setCText(600,300,20, "Arjan Kuijpers");
				secondTextLayer.moveToTop();
			},30000);
		
		setTimeout(function()
			{
				textLayer.removeChildren();
				setCText(550,200,30, "Thank you for playing");
				setCText(600,250,25, "Createc");
			},35000);
		
		setTimeout(function(){
			credits.volume-=0.1
		},39000);		
		setTimeout(function(){
			credits.volume-=0.1
		},40000);
		
		setTimeout(function(){
			credits.volume-=0.1
		},41000);
		setTimeout(function(){
			credits.volume-=0.1
		},42000);
		setTimeout(function(){
			credits.volume-=0.2
		},43000);
		setTimeout(function(){
			credits.volume-=0.2
		},44000);
		setTimeout(function(){
			credits.volume-=0.1
		},45000);
		
		
		setTimeout(function()
			{
				log("<AUDIO> pause credits");
				credits.pause();
					
				log("Reset Stage");
				stage.reset();
			
				log("Init State01");
				initState01();
			},45000);
		
		
		
		
console.log("Done Loading, State05(Credits)");

	}


