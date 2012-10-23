//Start Level 04
function initLevel04(){
	
	
	inLevel = 5;
	
			stage.add(backgroundLayer);
			stage.add(hudLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
	
log("Start Level04");
	
	var he1 = new Image();
	he1.src = "assets/he1.png";
	
	
	var mbg = new Image();
	mbg.src = "assets/l04/01.png";
	
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
		
		
		log("Done Loading - Level04 /n Idle");
		
		log("Set Hud Stats");

		log("set Text levelHUD - R145 engine.js");
		log("set Text questionHUD - R146 engine.js");		
		
		log("Set Quests");	
		log("levelSave:" + levelSave);
		log("difficultySave: " + difficultySave)
		setQuest(4,diff(lastPlayed));
		lastPlayed = 4;
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