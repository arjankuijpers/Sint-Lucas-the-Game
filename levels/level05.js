//Start Level 05 (final) (boss)
function initFinal(){
	
	
	inLevel = 5;
	
			stage.add(backgroundLayer);
			stage.add(hudLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
	
log("Start (Final)");
	
	var mbg = new Image();
	mbg.src = "assets/final/bg.png";
	var he = new Image();
	he.src = "assets/he1.png";
	
	mbg.onload = function() {		
		var background = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: mbg,
			draggable: false,
			scale:  {
   			 x: 1,
			 y: 3
            		},
		});
		
				backgroundLayer.add(background);
				backgroundLayer.draw();
				
				background.transitionTo(
					{
            			scale:
					  		{
   				 			x: 1,
				 			y: 1
            				},
           				duration: 1,
					});
	
			
		
		
		he.onload = function() {
		var hudElement = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: he,
			opacity: 0,
			scale:  {
   			 x: 1,
			 y: 3
            		},
		});
		
			hudLayer.add(hudElement);
			hudLayer.draw();
	
			hudElement.transitionTo(
				{
					scale:  {
           			 x: 1,
					 y: 1
            				},
            		opacity: 1,
           			duration: 1,
				});
				
			
		}
		
		log("Done Loading - Final /n Idle");
		
		log("Set Hud Stats");

		log("set Text levelHUD - R145 engine.js");
		log("set Text questionHUD - R146 engine.js");
		
		log("Set Score Text:: R69 - level05.js");
		//setScoreText(125,465,30,String(score));
		//setHText(200,470,20," Score");
		
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