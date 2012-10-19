//Start State03 (Menu)

function initState03(){
	if(debug == 1)
console.log("initializing State 03(Menu)");

	var mbg = new Image();
	mbg.src = "assets/mbg.png";
	
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
            duration: 2,
		});
	};
	
	var m_MainText = new Kinetic.Text({
          x: 650,
          y: 50,
          text: 'Hoofd Menu',
          fontSize: 30,
          fontFamily: 'Calibri',
          textFill: 'Orange',
		  opacity: 0,
        });
		textLayer.add(m_MainText);
		m_MainText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		var m_PlayText = new Kinetic.Text({
          x: 735,
          y: 100,
          text: 'Play!',
          fontSize: 25,
          fontFamily: 'Calibri',
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
            opacity: 1,
            duration: 2,
		});
		
		var m_ScoreText = new Kinetic.Text({
          x: 735,
          y: 150,
          text: 'Top Scores',
          fontSize: 25,
          fontFamily: 'Calibri',
          textFill: 'lightred',
		  opacity: 0,
        });
		
		m_ScoreText.on('mouseup tap',function(){
			if(debug == 1)
			{
			console.log("Clicked Top Score, Go to topscores");	
			}
			setAchievement(1);
			
		});
		
		m_ScoreText.on('mouseover',function(){
			if(debug == 1)
			{
			console.log("MouseOver Top Scores, cursor pointer");	
			}
			document.body.style.cursor = 'pointer';
		});
		
		m_ScoreText.on('mouseout',function(){
			if(debug == 1)
			{
			console.log("MouseOut Top Scores, cursor default");	
			}
			document.body.style.cursor = 'default';
		});
		
		textLayer.add(m_ScoreText);
		m_ScoreText.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		var m_CreditsText = new Kinetic.Text({
          x: 735,
          y: 200,
          text: 'Credits',
          fontSize: 25,
          fontFamily: 'Calibri',
          textFill: 'black',
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
            opacity: 1,
            duration: 2,
		});
		
		var m_ExitText = new Kinetic.Text({
          x: 735,
          y: 250,
          text: 'Exit',
          fontSize: 25,
          fontFamily: 'Calibri',
          textFill: 'black',
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
            opacity: 1,
            duration: 2,
		});
		
console.log("Done Loading, State03");

	}


