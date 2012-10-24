//Start State07 (Level Selection)

function initState07(){
	
			stage.add(textLayer);
			stage.add(secondTextLayer);
			stage.add(characterLayer);
			stage.add(hudLayer);
	
		if(debug == 1)
			console.log("initializing State 07(Level Select)");
	
				log("Set wallpaper");
				var splash = new Image();
				splash.src = "assets/wall.png";
	
				log("Set schoolimg");
				var schoolImg = new Image();
				schoolImg.src = "assets/school.png";
	
				splash.onload = function()
					 {
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
								hudLayer.moveToTop();
		
								background.transitionTo(
									{
            							opacity: 1,
           								duration: 2,
									});
			}
		
		schoolImg.onload = function() {
	school = new Kinetic.Image(
		{
			x: 0,
			y: 20,
			image: schoolImg,
			draggable: false,
			opacity: 0,
		});

		
		characterLayer.add(school);
		characterLayer.draw();
		characterLayer.moveToTop();
		textLayer.moveToTop();
		hudLayer.moveToTop();
		
		school.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		setSText(350,10,35, "Select a Level");
		
	};
	
	var polyLevel1 = new Kinetic.Polygon({
          points: [103, 308, 84, 220, 114,181, 316, 202, 293, 273, 299, 319],
          fill: "#00D2FF",
          stroke: "blue",
          strokeWidth: 1,
		  opacity: 0.3
        });
		
		if (progress[1] >= 75)
		{
		polyLevel1.setFill("#FF8E00");
		}
		
		polyLevel1.on('mouseover', function() {
		polyLevel1.transitionTo({
            opacity: 0.6,
            duration: 1,
		});
		
				if (progress[1] >= 75)
		{
		setSelectText("Level 1 (Voltooid: "+ progress[1] + "%)");
		}
		else{
			setSelectText("Level 1 (" + progress[1] + "%)");
		}
		});
		
		polyLevel1.on('mouseout', function() {
		polyLevel1.transitionTo({
            opacity: 0.3,
            duration: 1,
		});
		secondTextLayer.removeChildren();
		});
		
		polyLevel1.on('mouseup', function() {
			stage.reset();
			initLevel01();
		});
		
		var polyLevel2 = new Kinetic.Polygon({
          points: [299, 324, 294, 274, 315,208, 324, 207, 326, 216, 346, 219,355,210,376,211,376,221,662,241,663,287,660,305,591,301,592,287,550,284,551,297,492,295,491,302,488,303,482,335,363,327,355,344,340,350,325,350,316,341,313,325],
          fill: "#FF2300",
          stroke: "red",
          strokeWidth: 1,
		  opacity: 0.3
        });
		
		polyLevel2.on('mouseover', function() {
		polyLevel2.transitionTo({
            opacity: 0.6,
            duration: 1,
		});
		
		if (progress[2] >= 75)
		{
		polyLevel2.setFill("#FF8E00");
		setSelectText("Level 2 (Voltooid: "+ progress[2] + "%)");
		}
		else{
		setSelectText("Level 2 (" + progress[2] + "%)");	
		}
		});
		
		polyLevel2.on('mouseout', function() {
		polyLevel2.transitionTo({
            opacity: 0.3,
            duration: 1,
		});
		secondTextLayer.removeChildren();
		});
		
		polyLevel2.on('mouseup', function() {
			stage.reset();
			initLevel02();
		});
		
		
		var polyLevel3 = new Kinetic.Polygon({
          points: [470, 427, 471, 388, 479,336, 492, 297, 551, 298,551,286, 589,288,589,302,797,318,808,360,789,443,715,441,714,454,686,451,684,435,589,428,586,429,580,437,470,429],
          fill: "#FFD100",
          stroke: "yellow",
          strokeWidth: 1,
		  opacity: 0.3
        });
		
		polyLevel3.on('mouseover', function() {
		polyLevel3.transitionTo({
            opacity: 0.6,
            duration: 1,
		});
		if(levelStatus[3] == 2)
		setSelectText("Level 3 (Op slot)")
				else if (levelStatus[3] == 4)
		{
		polyLevel3.setFill("#FF8E00");
		setSelectText("Level 3 (Voltooid: "+ progress[3] + "%)");
		}
		else
		{
			setSelectText("Level 3 (" + progress[3] + "%)");
		}
		});
		
		polyLevel3.on('mouseout', function() {
		polyLevel3.transitionTo({
            opacity: 0.3,
            duration: 1,
		});
		secondTextLayer.removeChildren();
		});
		
		polyLevel3.on('mouseup', function() {
			stage.reset();
			initLevel03();
		});
		
		
		
		var polyLevel4 = new Kinetic.Polygon({
          points: [315,142,368,52,439,55,441,135,406,210,325,204],
          fill: "#92EC00",
          stroke: "green",
          strokeWidth: 1,
		  opacity: 0.3
        });
		
		polyLevel4.on('mouseover', function() {
		polyLevel4.transitionTo({
            opacity: 0.6,
            duration: 1,
		});
		if(levelStatus[4] == 2)
		setSelectText("Level 4 (Op slot)")
		
		else if (progress[4] >= 75)
		{
		polyLevel4.setFill("#FF8E00");
		setSelectText("Level 4 (Voltooid: "+ progress[4] + "%)");
		}
		else
		{
			setSelectText("Level 4 (" + progress[4] + "%)");
		}
		});
		
		polyLevel4.on('mouseout', function() {
		polyLevel4.transitionTo({
            opacity: 0.3,
            duration: 1,
		});
		secondTextLayer.removeChildren();
		});
		
		polyLevel4.on('mouseup', function() {
			stage.reset();
			initLevel04();
		});
		
		if(statusLevel[3] == 2)
		{
		polyLevel3.setFill("#585858");
		polyLevel3.setStroke("grey");
		polyLevel3.off('mouseup');
		}
		
		if(statusLevel[4] == 2)
		{
		polyLevel4.setFill("#585858");
		polyLevel4.setStroke("grey");
		polyLevel4.off('mouseup');
		}
		
		var polyGroup = new Kinetic.Group();
		
		polyGroup.add(polyLevel1);
		polyGroup.add(polyLevel2);
		polyGroup.add(polyLevel3);
		polyGroup.add(polyLevel4);
		
		polyGroup.setY(polyGroup.getY() + 20);
		hudLayer.add(polyGroup);
		hudLayer.draw();
		hudLayer.moveToTop();
		
		
console.log("Done Loading, State07(Level Select)");

	
	
}


