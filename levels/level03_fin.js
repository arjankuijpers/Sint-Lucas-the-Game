//Start Level 03 - Finished

//////////////////////////////////////////////////////
//													//
//													//
//////////////////////////////////////////////////////
//													//
//													//
//////////////////////////////////////////////////////
// WARNING LEVEL 03 FINISHED

function initLevel03_Fin(){
	
			stage.add(backgroundLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
	
	if(debug == 1)
console.log("Start State Level03 FINISHED");
	var mbg = new Image();
	mbg.src = "assets/mbg.png";
	
	
	mbg.onload = function() {
	var background = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: mbg,
			draggable: false
		});
		
		backgroundLayer.add(background);
		backgroundLayer.draw();
		
		
		
		
		var rect = new Kinetic.Rect({
          x: 225,
          y: 10,
          width: 500,
          height: 300,
          fill: 'orange',
          stroke: 'black',
          strokeWidth: 2,
		  cornerRadius: 20,
		  opacity: 0.5
        });
		textLayer.add(rect);
		textLayer.draw(); 
		
		setSText(275,20,45, 'Level 3 Finished');
		setSText(275,120,20, '=================');
		setSText(275,170,20, 'Score: ' + score);
		setSText(275,220,20, 'Level Voortgang: ' + progress[levelSave] + "%");
		setSText(275,250,20, '=================');
		setSText(275,280,20, 'Algemene Voortgang: ' + allProgress + "%");
	
		
		
		try{
		characterLayer.moveToTop();
		textLayer.moveToTop();
		}
		catch(err)
		{
			error_Alert(5);
		}
			
	};

		log("Done Loading - Level03 Finished /n Idle");
		
		var conImg = new Image();
		conImg.src = "assets/sc_con.png";
		
		conImg.onload = function() {
		var con = new Kinetic.Image(
		{
			x: 350,
			y: 275,
			image: conImg,
			draggable: false
		});
		con.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("Continue to level select");	
			}
				stage.reset();
				initState07();
		});
		
		textLayer.add(con);
		textLayer.draw();
        };
}