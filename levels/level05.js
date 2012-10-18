//Start Level 05 (final) (boss)

var leraren;
var rect;
function initFinal(){
	
			stage.add(backgroundLayer);
			stage.add(hudLayer);
			stage.add(characterLayer);
			stage.add(textLayer);
			stage.add(secondTextLayer);
	
log("Start (Final)");

	rect = new Kinetic.Rect({
          x: 0,
          y: 0,
          width: 950,
          height: 500,
          fill: '#323231',
        });
		backgroundLayer.add(rect);
		backgroundLayer.draw();
		
		var ler = new Image();
		ler.src = "assets/leraren/ler_k.png";
		ler.onload = function() {		
		leraren = new Kinetic.Image(
		{
			x: 5,
			y: 475,
			image: ler,
			draggable: false,
		});
		characterLayer.add(leraren);
		characterLayer.draw();
		leraren.transitionTo(
					{
						y: 200,
						duration: 1,
						
					});
		}
		
		setTimeout(function(){
			drawFinalText(1, "Versla alle leraren");
		},2050);
		
		setTimeout(function(){
			leraren.transitionTo(
					{
						y: 600,
						duration: 1,						
					});
		},12000);
		setTimeout(function(){
			initBattle();
		},14100);
		
		
		
		
}

function initBattle(){
	
	final.play();
	
	characterLayer.remove(leraren);
	backgroundLayer.remove(rect);
	
	hudLayer.moveToTop();
		
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
				hudLayer.moveToTop();				
				background.transitionTo(
					{
            			scale:
					  		{
   				 			x: 1,
				 			y: 1
            				},
           				duration: 1,
					});
	
			hudLayer.moveToTop();	
		
		
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
			hudLayer.moveToTop();	
	
			hudElement.transitionTo(
				{
					scale:  {
           			 x: 1,
					 y: 1
            				},
            		opacity: 1,
           			duration: 1,
				});
				secondTextLayer.moveToTop();
			
				}
				
				var circle1 = new Kinetic.Circle({
          x: stage.getWidth() / 2,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
		
		var circle2 = new Kinetic.Circle({
          x: stage.getWidth() / 2 + 15,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
		
		var circle3 = new Kinetic.Circle({
          x: stage.getWidth() / 2 + 30,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
		var circle4 = new Kinetic.Circle({
          x: stage.getWidth() / 2 + 45,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
		var circle5 = new Kinetic.Circle({
          x: stage.getWidth() / 2 + 60,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
			secondTextLayer.add(circle1);
			secondTextLayer.add(circle2);
			secondTextLayer.add(circle3);
			secondTextLayer.add(circle4);
			secondTextLayer.add(circle5);
			secondTextLayer.moveToTop();
			secondTextLayer.draw();
			
			teacher1();
			
			
	};

		
}


	function teacher1()
		{
			var teacherImg = new Image();
			teacherImg.src = "assets/leraren/math_k.png";
	
			teacherImg.onload = function()
			 {		
				var teacher = new Kinetic.Image(
					{
						x: 1000,
						y: 50,
					image: teacherImg,
				draggable: false,
					});
					
					characterLayer.add(teacher);
					characterLayer.draw();
					characterLayer.moveToTop();
					hudLayer.moveToTop();
					secondTextLayer.moveToTop();	
					teacher.transitionTo(
				{
           			 x:650,
           			duration: 1,
				});
					setTimeout(function(){
						drawFinalText(1, "Jij denkt het wel te gaan maken, laten we maar eens zien. Hier komt een reken vraag.");
					},2000);
					setTimeout(function(){
						setFinalQText(1)
						},13000);
						
					setTimeout(function(){
						setFinalAText(1);
						},1500);
				 
			}
		}








function setFinalQText(qid)
	{
		
		log("setFinalQText == qid: " + qid)
	
		var m_MainText = new Kinetic.Text({
          x: -150,
          y: 100,
          stroke:'#ecede9',
          strokeWidth: 5,
          fill: {
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          },
          text: finalQuestion[qid],
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 600,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          cornerRadius: 20,
        });
		textLayer.add(m_MainText);
		textLayer.draw();
		m_MainText.transitionTo({
            x: 300,
			duration: 1,
		});
		textLayer.moveToTop();
}



function setFinalAText(qid)
	{
		
		log("setFinalAText --- qid: " + qid)
		switch(qid)
		{
			case 1:
			aText = finalAnswer[11] = "";
			bText = finalAnswer[12] = "";
			cText = finalAnswer[13] = "";
			dText = finalAnswer[14] = "";
			break;
			case 2:
			aText = finalAnswer[21] = "";
			bText = finalAnswer[22] = "";
			cText = finalAnswer[23] = "";
			dText = finalAnswer[24] = "";
			
			break;
			case 3:
			aText = finalAnswer[31] = "";
			bText = finalAnswer[32] = "";
			cText = finalAnswer[33] = "";
			dText = finalAnswer[34] = "";
			break;
			
			case 4:
			aText = finalAnswer[41] = "";
			bText = finalAnswer[42] = "";
			cText = finalAnswer[43] = "";
			dText = finalAnswer[44] = "";
			break;
			default:
			log("Set Final Answer switch outside range");
			
		}
		
				
		var a_MainText = new Kinetic.Text({
          x: 1000,
          y: 250,
          stroke:'#ecede9',
          strokeWidth: 5,
          fill: {
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          },
          text: aText,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 600,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          cornerRadius: 20,
        });
		textLayer.add(a_MainText);
		textLayer.draw();
		a_MainText.transitionTo({
            x: 50,
			duration: 1,
		});
		
		var b_MainText = new Kinetic.Text({
          x: 1000,
          y: 300,
          stroke:'#ecede9',
          strokeWidth: 5,
          fill: {
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          },
          text: bText,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 600,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          cornerRadius: 20,
        });
		textLayer.add(b_MainText);
		textLayer.draw();
		b_MainText.transitionTo({
            x: 50,
			duration: 1,
		});
				
		
		
		var c_MainText = new Kinetic.Text({
          x: 1000,
          y: 350,
          stroke:'#ecede9',
          strokeWidth: 5,
          fill: {
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          },
          text: cText,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 600,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          cornerRadius: 20,
        });
		textLayer.add(c_MainText);
		textLayer.draw();
		c_MainText.transitionTo({
            x: 50,
			duration: 1,
		});
		
		var d_MainText = new Kinetic.Text({
          x: 1000,
          y: 400,
          stroke:'#ecede9',
          strokeWidth: 5,
          fill: {
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          },
          text: dText,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 600,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          cornerRadius: 20,
        });
		textLayer.add(d_MainText);
		textLayer.draw();
		d_MainText.transitionTo({
            x: 50,
			duration: 1,
		});
		textLayer.moveToTop();
}







var fText1;
var fText2;
function drawFinalText(id, text)
{
	
	
	switch(id)
	{
		case 1:
fText1 = new Kinetic.Text({
          x: 250,
          y: 110,
          stroke:'#ecede9',
          strokeWidth: 5,
          fill: {
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 200,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          },
          text: text,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 380,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          cornerRadius: 20,
		  opacity: 0.0,
        });
		textLayer.add(fText1);
		textLayer.draw();
		fText1.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
		setTimeout(function(){
			fText1.transitionTo({
            opacity: 0,
            duration: 2,
		});
		},70000);
		
		setTimeout(function(){
		textLayer.remove(fText1);
		textLayer.draw();
		},10000);
		break;
		case 2:
		fText2 = new Kinetic.Text({
          x: posX,
          y: posY,
          stroke:'#ecede9',
          strokeWidth: 5,
          fill: {
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 200,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          },
          text: text,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 380,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          cornerRadius: 20,
		  opacity: 0.0,
        });
		textLayer.add(fText2);
		textLayer.draw();
		fText2.transitionTo({
            opacity: 1,
            duration: 2,
		});
		
				setTimeout(function(){
			fText2.transitionTo({
            opacity: 0,
            duration: 2,
		});
		},7000);
		
		setTimeout(function(){
		textLayer.remove(fText2);
		textLayer.draw();
		},10000);
		break;
		default:
		log("Error Function drawFinal Text id outside switch range");	
	}
}