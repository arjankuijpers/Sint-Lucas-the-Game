//Start Level 02
function initLevel02(){
	
	
	inLevel = 5;
	
			stage.add(backgroundLayer);
			stage.add(hudLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
	
log("Start Level02");
	
	var he1 = new Image();
	he1.src = "assets/he1.png";
	
	var mbg = new Image();
	mbg.src = "assets/l02/01.png";
	
	
	
	he1.onload = function() {
		var hudElement1 = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: he1,
		});
	
		hudLayer.add(hudElement1);
		hudLayer.draw();
	}

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
		
		
		log("Done Loading - Level02 /n Idle");
		
		log("Set Hud Stats");

		log("set Text levelHUD - R145 engine.js");
		log("set Text questionHUD - R146 engine.js");
		
		
		log("Set Quests");	
		log("levelSave:" + levelSave);
		log("difficultySave: " + difficultySave)
		setQuest(2, diff(lastPlayed));
		lastPlayed = 2;
		log(levelSave);
		log(difficultySave)
		
		try{
		
		characterLayer.moveToTop();
		textLayer.moveToTop();
		}
		catch(err)
		{
			error_Alert(5);
		}
			
	};

		
}