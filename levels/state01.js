//Start State01 (anyState)

function initState01(){
			stage.add(backgroundLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
	
	
	if(debug == 1)
console.log("initializing State 01(AnyState)");

	if(debug == 1)
console.log("Set collision field");
a_X1 = 610;
a_Y1 = -23;

a_X2 = 860;
a_Y2 = 112;


backgroundImg = new Image();
	backgroundImg.src = "assets/bg.png";

var slImage = new Image();
	slImage.src = "assets/sintlucas.png";

dragHereImg = new Image();
dragHereImg.src = "assets/drag_here.png";

dragAbleImg = new Image();
dragAbleImg.src = "assets/button.png";

backgroundImg.onload = function() {
background = new Kinetic.Image(
	{
			x: 0,
			y: 0,
			image: backgroundImg,
			draggable: false,
			opacity: 0,
	});
	backgroundLayer.add(background);
		
		background.transitionTo({
            opacity: 1,
            duration: 2,
		});
}
	
	
	slImage.onload = function() {
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
		
	}







dragHereImg.onload = function() {
dragHere = new Kinetic.Image(
	{
			x: 675,
			y: 100,
			image: dragHereImg,
			draggable: false,
			opacity: 0,
	});
	characterLayer.add(dragHere);
		
		dragHere.transitionTo({
            opacity: 0.8,
            duration: 3,
		});
}

dragAbleImg.onload = function() {
dragAble = new Kinetic.Image(
	{
			x: 75,
			y: 280,
			image: dragAbleImg,
			draggable: true,
			opacity: 0,
	});
	characterLayer.add(dragAble);
	
	dragAble.on('dragstart', function() {
				rectStart.moveToTop();
              dragAble.moveToTop();
              characterLayer.draw();
			  rectStart.setOpacity(0.5);
			  if(debug ==1)
			  {
			  console.log("Drag Start 'dragAble image'");
			  }
			  
			  
			  
			});
			
			dragAble.on('dragmove', function() {
              document.body.style.cursor = 'pointer';
			  if(debug ==1)
			  {
			  console.log("'dragAble' position x:" + dragAble.getX() + "Y: " + dragAble.getY());
			  }
			});
			dragAble.on('dragend', function(){
				 if(debug == 1)
				console.log("Drag Ended 'dragAble'")
				document.body.style.cursor = 'default';
				
				rectStart.setOpacity(0);
				characterLayer.draw();
				
				if(dragAble.getX() >= a_X1 && dragAble.getX() <= a_X2 && dragAble.getY()>=a_Y1 && dragAble.getY() <= a_Y2)
				{
				stage.reset();
				initState02();	
				}
				else if(dragAble.getX() > 815)
				{
					dragAble.setX(800);
					characterLayer.draw();
				}
				else if(dragAble.getX() < 0)
				{
					dragAble.setX(10);
					characterLayer.draw();
				}
				else if(dragAble.getY() > 290)
				{
					dragAble.setY(280);
					characterLayer.draw();
				}
				else if(dragAble.getY() < 0)
				{
					dragAble.setY(10);
					characterLayer.draw();
				}
			});
		
		dragAble.transitionTo({
            opacity: 1,
			x: 125,
            duration: 1,
		});
}

var rectStart = new Kinetic.Rect({
          x: 675,
		  y: 100,
          width: 200,
          height: 50,
          fill: 'orange',
		  opacity: 0
        });
		characterLayer.add(rectStart);





if(debug == 1)
{
console.log("Done Loading State 01(Any State)");	
}
	}