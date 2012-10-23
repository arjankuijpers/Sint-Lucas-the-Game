//Start Level 01
function initLevel01(){
	
	
	inLevel = 5;
	
			stage.add(backgroundLayer);
			stage.add(hudLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
	
log("Start Level01");
	
	var he1 = new Image();
	he1.src = "assets/he1.png";
	
	var bg = new Image();
	bg.src = "assets/l01/01.png";
	
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
		
		
		
	
	
	bg.onload = function() {		
		var background = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: bg,
			draggable: false
		});
		
		backgroundLayer.add(background);
		backgroundLayer.draw();
		
		
		log("Done Loading - Level01 /n Idle");
		
		log("Set Hud Stats");

		log("set Text levelHUD - R145 engine.js");
		log("set Text questionHUD - R146 engine.js");
		
		
		
		log("Set Quests");	
		setQuest(1,diff(lastPlayed));
		lastPlayed = 1;
		log("Done Setting Hud Stats");
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