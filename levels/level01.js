//Start Level 01
function initLevel01(){
	
	
	inLevel = 5;
	
			stage.add(backgroundLayer);
			stage.add(hudLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
	
log("Start Level01");
	
	var he1 = new Image();
	he1.src = "assets/he1^.png";
	
	var he2 = new Image();
	he2.src = "assets/he2.png";
	
	var mbg = new Image();
	mbg.src = "assets/level01_01.png";
	
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
		
		he2.onload = function() {
		var hudElement2 = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: he2,
		});
	
	//	hudLayer.add(hudElement2);
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
		
		
		log("Done Loading - Level01 /n Idle");
		
		log("Set Hud Stats");

		log("set Text levelHUD - R145 engine.js");
		log("set Text questionHUD - R146 engine.js");
		
		log("Set Score Text:: R69 - level01.js");
		setScoreText(125,437,40,String(score));
		setHText(200,450,20," Score");
		
		log("Done Setting Hud Stats");
		
		
		log("Set Quests");	
		setQuest(1, 1);
		
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