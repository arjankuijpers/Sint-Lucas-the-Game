//Start State03 (Menu)

function initState03(){
	if(debug == 1)
console.log("initializing State 03(Menu)");

stage.add(backgroundLayer);
stage.add(textLayer);

	var mbg = new Image();
	mbg.src = "assets/bg.png";
	
	mbg.onload = function() {
	background = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: mbg,
			draggable: false,
			opacity: 0,
		});
		
		backgroundLayer.add(background);
		stage.add(backgroundLayer);
		textLayer.moveToTop();
		
		background.transitionTo({
            opacity: 1,
            duration: 1,
		});
		
		
		
		var slImage = new Image();
	slImage.src = "assets/sintlucas.png";
	var sintlucas = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: slImage,
			draggable: false,
			opacity: 0,
		});
		
		backgroundLayer.add(sintlucas);
		backgroundLayer.draw();
		sintlucas.transitionTo({
			x: 50,
			y:10,
            opacity: 1,
            duration: 3,
		});
		setMenuText();
	};
	
}

function setMenuText(){
		
	
	var m_MainText = new Kinetic.Text({
          x: 850,
          y: 50,
          text: 'HoofdMenu',
          fontSize: 30,
          fontFamily: 'Segoe Script',
          textFill: 'Orange',
		  opacity: 0,
        });
		textLayer.add(m_MainText);
		m_MainText.transitionTo({
			x: 650,
            opacity: 1,
            duration: 2,
		});
		
		var m_PlayText = new Kinetic.Text({
          x: 850,
          y: 120,
          text: 'Play!',
          fontSize: 25,
          fontFamily: 'Segoe Script',
          textFill: 'red',
		  opacity: 0,
        });
		
		m_PlayText.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("Clicked Play, Go to Level 01");	
			}
			stage.reset();
			initState06();
		});
		
		m_PlayText.on('mouseover',function(){
			if(debug == 1)
			{
			console.log("MouseOver Play, cursor pointer");	
			}
			document.body.style.cursor = 'pointer';
		});
		
		m_PlayText.on('mouseout',function(){
			if(debug == 1)
			{
			console.log("MouseOut Play, cursor default");	
			}
			document.body.style.cursor = 'default';
		});
		
		textLayer.add(m_PlayText);
		m_PlayText.transitionTo({
			x: 735,
            opacity: 1,
            duration: 2,
		});
		
		
		var m_CreditsText = new Kinetic.Text({
          x: 850,
          y: 170,
          text: 'Credits',
          fontSize: 25,
          fontFamily: 'Segoe Script',
          textFill: 'white',
		  opacity: 0,
        });
		
		m_CreditsText.on('mouseup tap',function(){
			if(debug == 1)
			{
			console.log("Clicked Play, Go to Credits(State05)");	
			}
			stage.reset();
			initState05();
		});
		
		m_CreditsText.on('mouseover',function(){
			if(debug == 1)
			{
			console.log("MouseOver Credits, cursor pointer");	
			}
			document.body.style.cursor = 'pointer';
		});
		
		m_CreditsText.on('mouseout',function(){
			if(debug == 1)
			{
			console.log("MouseOut Credits, cursor default");	
			}
			document.body.style.cursor = 'default';
		});
		
		textLayer.add(m_CreditsText);
		m_CreditsText.transitionTo({
			x: 735,
            opacity: 1,
            duration: 2,
		});
		
		var m_ExitText = new Kinetic.Text({
          x: 850,
          y: 220,
          text: 'Exit',
          fontSize: 25,
          fontFamily: 'Segoe Script',
          textFill: 'white',
		  opacity: 0,
        });
		
		m_ExitText.on('mouseup tap',function(){
			if(debug == 1)
			{
			console.log("Clicked Exit, Go to Credits(State05)");	
			}
			stage.reset();
			initState01();
		});
		
		m_ExitText.on('mouseover',function(){
			if(debug == 1)
			{
			console.log("MouseOver Exit, cursor pointer");	
			}
			document.body.style.cursor = 'pointer';
		});
		
		m_ExitText.on('mouseout',function(){
			if(debug == 1)
			{
			console.log("MouseOut Exit, cursor default");	
			}
			document.body.style.cursor = 'default';
		});
		
		textLayer.add(m_ExitText);
		stage.add(textLayer);
		m_ExitText.transitionTo({
			x: 735,
            opacity: 1,
            duration: 2,
		});
		
console.log("Done Loading, State03");

	}


