//Start State06 (Tutorial)
var welkomImg;
var skip = 0;
function initState06(){
			stage.add(backgroundLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
			
	if(debug == 1)
	{
console.log("initializing State 06 (Tutorial)");
	}
	
	var splash = new Image();
	splash.src = "assets/createc.png";
	var conImg = new Image();
	conImg.src = "assets/sc_con.png";
	
	splash.onload = function() {
		
	background = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: splash,
			draggable: false,
			opacity: 0,
		});
		
		backgroundLayer.add(background);
		backgroundLayer.draw();
		textLayer.moveToTop();
		
		background.transitionTo({
            opacity: 1,
            duration: 2,
		});
	};
	
	conImg.onload = function() {
		
	con = new Kinetic.Image(
		{
			x: 0,
			y: 0,
			image: conImg,
			draggable: false,
			opacity: 0,
		});
		con.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("Clicked continue, skip = 1");	
			}
			skip = 1;
			textLayer.remove(con);
			setSText(10, 20, 15, "Tutorial skipped");
		});
		
		textLayer.add(con);
		textLayer.draw();
		textLayer.moveToTop();
		
		con.transitionTo({
            opacity: 1,
            duration: 2,
		});
	};
	
	if(debug ==1)
	{		
console.log("Done Loading, State06(Tutorial)");
	}
if(debug ==1)
{		
console.log("Start Text Messages");
}
	
		//function declared in Engine under Chapter 'Text'	
		setText(150,350,'Welkom, Nu Volgt eerst een Tutorial \n\n Klik op Continue om overteslaan.\n Veel Plezier Namens Createc.');
		if(debug ==1)
		console.log("Text 'one' has been drawn");
		
		
		setTimeout(function(){
			log("Skip timer expired");
			if(skip == 0)
			{
		
		
		setTimeout(function(){
		
		textLayer.removeChildren();
		textLayer.draw();
		
		splash.src = "assets/mbg.png";
		if(debug == 1)
		{
		console.log("Welkom01 bg geladen (vervangen voor Createc)");
		}
		
		setText(200,300,'beantwoord de vragen Juist');
		textLayer.draw();
		
		if(debug ==1)
		{
		console.log("Text 'three' has been drawn");
		}
		
		},10000);
		
		
		
				setTimeout(function(){
			textLayer.removeChildren();
			textLayer.draw();
			
			setText(400,400,'Score zo hoog mogenlijk, de Tijd is een Bonus');
		textLayer.draw();
		if(debug ==1)
		{
		console.log("Text '4' has been drawn");
		}
			
		},15000);
		
		
		setTimeout(function(){
			textLayer.removeChildren();
			textLayer.draw();
			
			setText(400,250,'Haal aan het einde de Top Score');
		textLayer.draw();
		//log
		log("Text 'Five' has been drawn");
			
		},20000);
		
		setTimeout(function(){
		stage.reset();
		initState07();
		},25000);
			}
			else{
				stage.reset();
				initState07();
			}
		},10000);
	
	}
	
	

	
	