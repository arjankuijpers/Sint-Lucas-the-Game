//Start roaming




	var roamImg;
	var north;
	var south;
	var west;
	var east;
	
	function initRoam(loc)
		{
	
			if(debug == 1)
				console.log("initializing Roam 01 (entrance)");


			stage.add(backgroundLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
	
				roamImg = new Image();
				roamImg.src = "assets/createc.png";
				
			 northImg = new Image();
				northImg.src = "assets/roaming/1.png";
	
			 southImg = new Image();
				southImg.src = "assets/roaming/2.png";
	
			 westImg = new Image();
				westImg.src = "assets/roaming/3.png";
	
			 eastImg = new Image();
				eastImg.src = "assets/roaming/4.png";
	
	
	roamImg.onload = function() {
	background = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: roamImg,
			draggable: false,
			opacity: 0,
		});
		
		backgroundLayer.add(background);
		characterLayer.moveToTop();
		textLayer.moveToTop();
		
		background.transitionTo({
            opacity: 1,
            duration: 2,
		});
	};
	
	eastImg.onload = function() {
		
		north = new Kinetic.Image(
		{
			x: stage.getWidth() /2 -25,
			y: stage.getHeight() /4 -25,
			image: northImg,
			draggable: false,
			opacity: 1,
		});
		
		south = new Kinetic.Image(
		{
			x: stage.getWidth() /2 -25,
			y: stage.getHeight() /4 * 3 -25,
			image: southImg,
			draggable: false,
			opacity: 1,
		});
		
		west = new Kinetic.Image(
		{
			x: stage.getWidth() /4 -25,
			y: stage.getHeight() /2 -25,
			image: westImg,
			draggable: false,
			opacity: 1,
		});
		
		east = new Kinetic.Image(
		{
			x: stage.getWidth() /4 * 3 -25,
			y: stage.getHeight() /2 -25,
			image: eastImg,
			draggable: false,
			opacity: 1,
		});
		
		var aGroup = new Kinetic.Group();
		aGroup.add(north);
		aGroup.add(south);
		aGroup.add(west);
		aGroup.add(east);
		
		characterLayer.add(aGroup);
		log("loc: " + loc);
		setRoamLocation(loc);
		
	}
		
		
	
console.log("Done Loading, Roam");

	}

function setRoamLocation(loc){
	textLayer.removeChildren();
	log("roam.js - textLayer Remove Children.");
	
	addArrowEvents();	
	
		switch(loc)
		{
			case 10:
		log("Roam.js - loc: " + loc + " - show and hide arrows, draw text & background");
		roamImg.src = "assets/roaming/r01/01.png";
		
		north.show();
		
		south.hide();
		east.hide();
		west.hide();
		
		drawRoamText(1, "Ga naar binnen.");
		
						
			north.on('mouseup',function(){
			if(debug == 1)
				{
					console.log("MouseUp north, go to r02");	
				}
				
				setTimeout(function()
				{
					roamImg.src = "assets/roaming/r01/02.png";
		 		},1000);
				setTimeout(function()
				{
					roamImg.src = "assets/roaming/r01/03.png";
		 		},2500);
				setTimeout(function(
				){
					roamImg.src = "assets/roaming/r01/04.png";
		 		},4000);
				setTimeout(function()
				{
				setRoamLocation(20);
		 		},5000);
			
			
		});
		
		break;
		
		case 15:
		
		break;
		
		case 20:
		log("Roam.js - loc: " + loc + " - show and hide arrows, draw text & background");
		roamImg.src = "assets/roaming/r02/01.png";
		north.hide();
		south.show();
		west.show();
		east.show();
		
		
		drawRoamText(2, "Terug naar Buiten.");
		drawRoamText(3,"Ga naar de Aula");
		drawRoamText(4, "Naar de G vleugel + GymZaal");
		
		//north.off('mouseup');
		
		
		
		
		south.on('mouseup',function(){
			if(debug == 1)
				{
					console.log("MouseUp south, go to r01");	
				}
				setRoamLocation(10);
				/* 
				
				setTimeout(function()
				{
					roamImg.src = "assets/roaming/r02/02.png";
		 		},1000);
				setTimeout(function()
				{
					roamImg.src = "assets/roaming/r02/03.png";
		 		},2000);
				setTimeout(function(
				){
					roamImg.src = "assets/roaming/r02/04.png";
		 		},3000);
				setTimeout(function()
				{
				setRoamLocation(10);
		 		},4000);
				
				*/
		});
		
		
		
		break;
		case 4:
		log("Roam.js - loc: " + loc + " - show and hide arrows, draw text & background");
		break;
		case 5:
		log("Roam.js - loc: " + loc + " - show and hide arrows, draw text & background");
		break;
		default:
		log("ERROR: Switch loc got loc int outside Range ERROR ::roam.js:: R148");
		}
	
}
var northText;
var southText;
var westText;
var eastText;
function drawRoamText(dir, text)
	{
		log("roam.js - Draw Roam Text:: dir: " + dir);
		
	switch(dir)
		{
			case 1:
			log("Roam.js -draw North Text: ");
		northText = new Kinetic.Text({
          x: stage.getWidth() /2 -15,
		  y: stage.getHeight() /4 +15,
          text: text,
          fontSize:  12,
          fontFamily: 'Calibri',
          textFill: 'White',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          opacity: 0.0,
        });
		textLayer.add(northText);
		textLayer.draw();
		northText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		break;
		
		case 2:
		log("Roam.js -draw south Text: ");
		southText = new Kinetic.Text({
          x: stage.getWidth() /2 -50,
          y:  stage.getHeight() /4 * 3 -50,
          text: text,
          fontSize:  12,
          fontFamily: 'Calibri',
          textFill: 'White',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          opacity: 0.0,
        });
		textLayer.add(southText);
		textLayer.draw();
		southText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		break;
		
		case 3:
		log("Roam.js -draw west Text: ");
		westText = new Kinetic.Text({
          x: stage.getWidth() /4 ,
          y:  stage.getHeight() /2 +25,
          text: text,
          fontSize:  12,
          fontFamily: 'Calibri',
          textFill: 'White',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          opacity: 0.0,
        });
		textLayer.add(westText);
		textLayer.draw();
		westText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		break;
		
		case 4:
		log("Roam.js -draw east Text: ");
		eastText = new Kinetic.Text({
          x: stage.getWidth() /4 * 3 -100,
          y:  stage.getHeight() /2 + 25,
          text: text,
          fontSize:  12,
          fontFamily: 'Calibri',
          textFill: 'White',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          opacity: 0.0,
        });
		textLayer.add(eastText);
		textLayer.draw();
		eastText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		break;
		
		default:
		log("ERROR: Switch dir got VAR 'dir' int outside Range ERROR ::roam.js:: R171");
		}
			
		
		
		
		
		
	}

function addArrowEvents(){
	north.on('mouseover',function(){
			if(debug == 1)
			{
			console.log("MouseUp North, cursor pointer");	
			}
			document.body.style.cursor = 'pointer';
		});
		north.on('mouseout',function(){
			if(debug == 1)
			{
			console.log("MouseOut North, cursor default");	
			}
			document.body.style.cursor = 'default';
		});
		
		south.on('mouseover',function(){
			if(debug == 1)
			{
			console.log("MouseUp South, cursor pointer");	
			}
			document.body.style.cursor = 'pointer';
		});
		south.on('mouseout',function(){
			if(debug == 1)
			{
			console.log("MouseOut South, cursor default");	
			}
			document.body.style.cursor = 'default';
		});
		
		west.on('mouseover',function(){
			if(debug == 1)
			{
			console.log("MouseUp West, cursor pointer");	
			}
			document.body.style.cursor = 'pointer';
		});
		west.on('mouseout',function(){
			if(debug == 1)
			{
			console.log("MouseOut West, cursor default");	
			}
			document.body.style.cursor = 'default';
		});
		
		east.on('mouseover',function(){
			if(debug == 1)
			{
			console.log("MouseUp East, cursor pointer");	
			}
			document.body.style.cursor = 'pointer';
		});
		east.on('mouseout',function(){
			if(debug == 1)
			{
			console.log("MouseOut East, cursor default");	
			}
			document.body.style.cursor = 'default';
		});
	
}