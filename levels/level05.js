//Start Level 05 (final) (boss)

var leraren;
var rect;
var timeLeft;
function initFinal(){
	timeLeft = 60;
	
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

var circle1;
var circle2;
var circle3;
var circle4;
var circle5;

var hudElement;
var background;
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
	 background = new Kinetic.Image(
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
	hudElement = new Kinetic.Image(
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
				
				circle1 = new Kinetic.Circle({
          x: stage.getWidth() / 2,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
		
		circle2 = new Kinetic.Circle({
          x: stage.getWidth() / 2 + 15,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
		
		circle3 = new Kinetic.Circle({
          x: stage.getWidth() / 2 + 30,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
		circle4 = new Kinetic.Circle({
          x: stage.getWidth() / 2 + 45,
          y: 5,
          radius: 5,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2
        });
		circle5 = new Kinetic.Circle({
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

	var teacher;
	function teacher1()
		{
			var teacherImg = new Image();
			teacherImg.src = "assets/leraren/math_k.png";
	
			teacherImg.onload = function()
			 {		
				teacher = new Kinetic.Image(
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
						teacher.transitionTo(
					{
           			 x:700,
					 y:65,
					 scale: {
   						 x: 0.5,
						 y: 0.5
            				},
					 
           			duration: 1,
					});
					},10000);
					setTimeout(function(){
						setFinalQText(1)
						},13000);
						
					setTimeout(function(){
						setFinalAText(1);
						setTimer(1);
						drawFinalTime(timeLeft);
						},13300);
				 
			}
		}








function teacher2()
		{
			var teacherImg = new Image();
			teacherImg.src = "assets/leraren/willem_k.png";
	
			teacherImg.onload = function()
			 {		
				teacher = new Kinetic.Image(
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
						drawFinalText(1, "Waarom geef je het nu niet al op, dat is makkelijker.");
					},2000);
					
					setTimeout(function(){
						teacher.transitionTo(
					{
           			 x:700,
					 y:65,
					 scale: {
   						 x: 0.5,
						 y: 0.5
            				},
					 
           			duration: 1,
					});
					},10000);
					setTimeout(function(){
						setFinalQText(2)
						},13000);
						
					setTimeout(function(){
						setFinalAText(2);
						setTimer(2);
						},13300);
				 
			}
		}
		
		
		
		
		
		
		
		function teacher3()
		{
			var teacherImg = new Image();
			teacherImg.src = "assets/leraren/robin_k.png";
	
			teacherImg.onload = function()
			 {		
				teacher = new Kinetic.Image(
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
						drawFinalText(1, "ik denk wel dat je het kan.. succes");
					},2000);
					
					setTimeout(function(){
						teacher.transitionTo(
					{
           			 x:700,
					 y:65,
					 scale: {
   						 x: 0.5,
						 y: 0.5
            				},
					 
           			duration: 1,
					});
					},10000);
					setTimeout(function(){
						setFinalQText(3)
						},13000);
						
					setTimeout(function(){
						setFinalAText(3);
						setTimer(3);
						},13300);
				 
			}
		}

function teacher4()
		{
			var teacherImg = new Image();
			teacherImg.src = "assets/leraren/luc_k.png";
	
			teacherImg.onload = function()
			 {		
				teacher = new Kinetic.Image(
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
						drawFinalText(1, "Unity is geweldig, het zou zonde zijn als je dat zou missen");
					},2000);
					
					setTimeout(function(){
						teacher.transitionTo(
					{
           			 x:700,
					 y:65,
					 scale: {
   						 x: 0.5,
						 y: 0.5
            				},
					 
           			duration: 1,
					});
					},10000);
					setTimeout(function(){
						setFinalQText(4)
						},13000);
						
					setTimeout(function(){
						setFinalAText(4);
						setTimer(4);
						},13300);
				 
			}
		}


function teacher5()
		{
			var teacherImg = new Image();
			teacherImg.src = "assets/leraren/rene_k.png";
	
			teacherImg.onload = function()
			 {		
				teacher = new Kinetic.Image(
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
						drawFinalText(1, "We vinden de 3 p's heel belangrijk mensen, dat moet terug komen in ons werk, dus nu ook");
					},2000);
					
					setTimeout(function(){
						teacher.transitionTo(
					{
           			 x:700,
					 y:65,
					 scale: {
   						 x: 0.5,
						 y: 0.5
            				},
					 
           			duration: 1,
					});
					},10000);
					setTimeout(function(){
						setFinalQText(5)
						},13000);
						
					setTimeout(function(){
						setFinalAText(5);
						setTimer(5);
						},13300);
				 
			}
		}







		var timerLevel = new Array();

	function setTimer(tid)
		{
			timerLevel[tid] = setInterval(function()
				{
					timeLeft--;
					tText.setText(timeLeft + " seconden");
					textLayer.draw();
					log("Timer Elapsed : timeLeft: " + timeLeft);
	
					if(timeLeft <= 20)
						{
							tText.setTextFill('red');	
						}
					if(timeLeft <= 0)
						{
							clearInterval(timerLevel[tid]);
							textLayer.draw();
							lost(tid);
							
							
							
						}
				},1000);	
			}


	function lost(tid)
	
		{
			transOff();
							
			setTimeout(function()
				{
					textLayer.removeChildren();
					textLayer.draw();
					
					teacher.transitionTo(
						{
           					 x:650,
							 y:50,
							 scale:
							 {
   								 x: 1,
						 		 y: 1
            				 },
					 		duration: 1,
						});	
				},2000);
				
				setTimeout(function()
				{
					if(tid == 1)
					{
						log("Draw Final Text 1,1");
					drawFinalText(1, "Je bent blijkbaar nog niet goed genoeg, kom terug als je het wel aan kan"); 
					}
					if(tid == 2)
					{
					drawFinalText(1, "Zakken, had je beter de moeite niet kunnen nemen, probeer opnieuw als je denkt dat je dit keer gaat halen."); 
					}
					if(tid == 3)
					{
					drawFinalText(1, " text 3"); 
					}
					if(tid == 4)
					{
					drawFinalText(1, " text 4"); 
					}
					if(tid == 5)
					{
					drawFinalText(1, " text 5"); 
					}
					},2300);
					
					setTimeout(function()
				{
										
					secondTextLayer.removeChildren();
					secondTextLayer.draw();
					teacher.transitionTo(
					{
						opacity: 0,
						duration: 1,
					});
					background.transitionTo(
					{
            			x:-951,
						duration: 1,
					});
					hudElement.transitionTo(
					{
            			x:951,
						duration: 1,
					});
					backgroundLayer.add(rect);
					background.moveToTop();
					backgroundLayer.draw();
					
					final.pause();
					final.currentTime = 0;
					},11000);
					setTimeout(function()
				{
					stage.reset();
					initRoam(20);
					},13000);
		}
		
	function checkFinalAnswer(qid,chosen)
	{
		clearInterval(timerLevel[qid]);
		
		switch(qid)
		{
		case 1:
		if(finalAnswer[15] == chosen)
		{
			finalAnswerGood(1);
		}
		else{
		lost(1);	
		}
		
		
		
		break;
			
			case 2:
			if(finalAnswer[25] == chosen)
		{
			finalAnswerGood(2);
		}
		else{
		lost(2);	
		}
		break;
		
		
		
		
		case 3:
		if(finalAnswer[35] == chosen)
		{
			finalAnswerGood(3);
		}
		else{
		lost(3);	
		}
		break;
		
		
		
		
		case 4:
		if(finalAnswer[45] == chosen)
		{
			finalAnswerGood(4);
		}
		else{
		lost(4);	
		}
		
		
		
		break;
		case 5:
		if(finalAnswer[55] == chosen)
		{
			finalAnswerGood(5);
		}
		else{
		lost(5);	
		}
		break;
		}
			
	}
	
	
	
	function finalAnswerGood(id){
		log("final AnswerGood Started");
		
		switch(id)
		{
			case 1:
		log("finalAnswerGood Case 1 started");
	transOff();	
		
	teacher.transitionTo(
				{
           			 x:650,
					 y:50,
					 scale: {
   						 x: 1,
						 y: 1
            				},
           			duration: 1,
				});
				
	drawFinalText(1,"De vraag is goed beantwoord, Maar geen vragen over kabouter meer voor jou.");
		setTimeout(function()
				{
					teacher.transitionTo(
				{
					x:951,
					duration: 1,
				});
					},11000);
					
					setTimeout(function()
				{
					circle1.setFill('grey');
					secondTextLayer.draw();
					teacher2();
					},13000);
					
					break;
					
					
					
					
					case 2:
		log("final AnswerGood Case 2 started");
	transOff();	
		
	teacher.transitionTo(
				{
           			 x:650,
					 y:50,
					 scale: {
   						 x: 1,
						 y: 1
            				},
           			duration: 1,
				});
				
drawFinalText(1,"Je bewijst mijn tegendeel, vooruit dan maar");
		setTimeout(function()
				{
					teacher.transitionTo(
				{
					x:951,
					duration: 1,
				});
					},11000);
					
					setTimeout(function()
				{
					circle2.setFill('grey');
					secondTextLayer.draw();
					teacher3();
					},13000);
					
					break;
					case 3:
		log("final AnswerGood Case 3 started");
	transOff();	
		
	teacher.transitionTo(
				{
           			 x:650,
					 y:50,
					 scale: {
   						 x: 1,
						 y: 1
            				},
           			duration: 1,
				});
				
drawFinalText(1,"Als je er voor inzet, kan je veel bereiken");
		setTimeout(function()
				{
					teacher.transitionTo(
				{
					x:951,
					duration: 1,
				});
					},11000);
					
					setTimeout(function()
				{
					circle3.setFill('grey');
					secondTextLayer.draw();
					teacher4();
					},13000);
					
					break;
					
					case 4:
		log("final AnswerGood Case 4 started");
	transOff();	
		
	teacher.transitionTo(
				{
           			 x:650,
					 y:50,
					 scale: {
   						 x: 1,
						 y: 1
            				},
           			duration: 1,
				});
				
drawFinalText(1,"Goed gedaan, Javascript is zoals je ziet helemaal niet moeilijk");
		setTimeout(function()
				{
					teacher.transitionTo(
				{
					x:951,
					duration: 1,
				});
					},11000);
					
					setTimeout(function()
				{
					circle4.setFill('grey');
					secondTextLayer.draw();
					teacher5();
					},13000);
					
					break;
					
					
					case 5:
					circle5.setFill('grey');
					secondTextLayer.draw();
					
		log("final AnswerGood Case 5 started");
	transOff();	
		
	teacher.transitionTo(
				{
           			 x:650,
					 y:50,
					 scale: {
   						 x: 1,
						 y: 1
            				},
           			duration: 1,
				});
				
drawFinalText(1,"De vraag is goed beantwoord, blijkbaar heb je de 3 P's goed onder de knie");
		setTimeout(function()
				{
					teacher.transitionTo(
				{
					x:350,
					scale: {
   						 x: 2,
						 y: 2
            				},
					
					duration: 1,
				});
				log("<AUDIO> final.pause");
				final.pause();
				log("<AUDIO> final.currenttime = 0");
				final.currentTime = 0;
				
					},11000);
					
					setTimeout(function()
				{
					log("drawFinalText");
					drawFinalText(1,"Goed Gedaan, je hebt alle vragen juist beantwoord");
					},13000);
					
					setTimeout(function()
				{
					teacher.transitionTo(
				{
					x:-400,
					scale: {
   						 x: 1,
						 y: 1
            				},
					
					duration: 1,
				});
					hudElement.transitionTo(
				{
					scale: {
   						 x: 4,
						 y: 4
            				},
					opacity: 0,					
					duration: 1,
				});

					},18000);
					
					setTimeout(function()
				{	
					hudLayer.removeChildren();
					textLayer.removeChildren();
					secondTextLayer.removeChildren();
					textLayer.draw();
					secondTextLayer.draw();
					
					drawAllTeachers();
					},22000);
					
					setTimeout(function()
				{	
					setSText(600, 300, 15, "Willem1");
					setSText(450, 300, 15, "Willem2");
					setSText(300, 300, 15, "Willem3");
					setSText(150, 300, 15, "Willem4");
					setSText(800, 300, 15, "Willem5");
				},32000);
				
				setTimeout(function()
				{	
				log("Set Score and timeleft text");
					score[0] = score[1] + score[2] + score[3] + score[4];
					setSText(475,400,15,"Totale Score: " + score[0]);
					setSText(475,430,15,"Tijd over   : " + timeLeft + "Seconden");
				},36000);
				
				setTimeout(function()
				{
					stage.reset();
					initState05();
					},42000);
					break;
		}
	}
	
	
	
	
	function drawAllTeachers()
	{
		setTimeout(function()
				{
	var teacherImg1 = new Image();
			teacherImg1.src = "assets/leraren/willem_k.png";
	
			teacherImg1.onload = function()
			 {		
			var	teacher1 = new Kinetic.Image(
					{
						x: -300,
						y: 50,
					image: teacherImg1,
				draggable: false,
					});
					
					characterLayer.add(teacher1);
					characterLayer.draw();
					characterLayer.moveToTop();
					hudLayer.moveToTop();
					secondTextLayer.moveToTop();	
					teacher1.transitionTo(
				{
           			 x:650,
           			duration: 1,
				});
				
			 }
					},2000);
					
					
					
					
					
					setTimeout(function()
				{
	var teacher2Img = new Image();
			teacher2Img.src = "assets/leraren/luc_k.png";
	
			teacher2Img.onload = function()
			 {		
			var	teacher2 = new Kinetic.Image(
					{
						x: -300,
						y: 50,
					image: teacher2Img,
				draggable: false,
					});
					
					characterLayer.add(teacher2);
					characterLayer.draw();
					characterLayer.moveToTop();
					hudLayer.moveToTop();
					secondTextLayer.moveToTop();	
					teacher2.transitionTo(
				{
           			 x:550,
           			duration: 1,
				});
				
			 }
					},4000);
					
					
					setTimeout(function()
				{
	var teacher3Img = new Image();
			teacher3Img.src = "assets/leraren/math_k.png";
	
			teacher3Img.onload = function()
			 {		
			var	teacher3 = new Kinetic.Image(
					{
						x: -300,
						y: 20,
					image: teacher3Img,
				draggable: false,
					});
					
					characterLayer.add(teacher3);
					characterLayer.draw();
					characterLayer.moveToTop();
					hudLayer.moveToTop();
					secondTextLayer.moveToTop();	
					teacher3.transitionTo(
				{
           			 x:450,
           			duration: 1,
				});
				
			 }
					},6000);
					
					setTimeout(function()
				{
	var teacher4Img = new Image();
			teacher4Img.src = "assets/leraren/robin_k.png";
	
			teacher4Img.onload = function()
			 {		
			var	teacher4 = new Kinetic.Image(
					{
						x: -300,
						y: 50,
					image: teacher4Img,
				draggable: false,
					});
					
					characterLayer.add(teacher4);
					characterLayer.draw();
					characterLayer.moveToTop();
					hudLayer.moveToTop();
					secondTextLayer.moveToTop();	
					teacher4.transitionTo(
				{
           			 x:350,
           			duration: 1,
				});
				
			 }
					},8000);
					
					setTimeout(function()
				{
	var teacher5Img = new Image();
			teacher5Img.src = "assets/leraren/rene_k.png";
	
			teacher5Img.onload = function()
			 {		
			var	teacher5 = new Kinetic.Image(
					{
						x: -300,
						y: 50,
					image: teacher5Img,
				draggable: false,
					});
					
					characterLayer.add(teacher5);
					characterLayer.draw();
					characterLayer.moveToTop();
					hudLayer.moveToTop();
					secondTextLayer.moveToTop();	
					teacher5.transitionTo(
				{
           			 x:250,
           			duration: 1,
				});
				
			 }
					},10000);
		
	}
	
	
	
	
	

	function transOff()
		{
			m_FText.transitionTo({
				x:400,
           		scale: {
   			x: 0.1,
			y: 0.1
            			},
				opacity: 0,
				duration: 1,
		});	
		
		
		
			a_MainText.transitionTo({
				x:400,
           		scale: {
   			 x: 0.1,
			 y: 0.1
           				},
				opacity: 0,
				duration: 1,
		});
			
		b_MainText.transitionTo({
				x:400,
        	   scale: {
  			 x: 0.1,
			 y: 0.1
            			},
				opacity: 0,
				duration: 1,
		});	
		
		c_MainText.transitionTo({
				x:400,
           		scale: {
   		 x: 0.1,
		 y: 0.1
           				},
				opacity: 0,
				duration: 1,
		});
		
		d_MainText.transitionTo({
				x:400,
         		scale: {
   					 x: 0.1,
					 y: 0.1
           				},
				opacity: 0,
				duration: 1,
		});
}




var m_FText;
function setFinalQText(qid)
	{
		
		log("setFinalQText == qid: " + qid)
	
	 m_FText = new Kinetic.Text({
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
		  opacity: 0.5,
        });
		textLayer.add(m_FText);
		textLayer.draw();
		m_FText.transitionTo({
            x: 300,
			duration: 1,
		});
		textLayer.moveToTop();
}


var a_MainText;
var b_MainText;
var c_MainText;
var d_MainText;
function setFinalAText(qid)
	{
		
		log("setFinalAText --- qid: " + qid)
		switch(qid)
		{
			case 1:
			aText = finalAnswer[11];
			bText = finalAnswer[12];
			cText = finalAnswer[13];
			dText = finalAnswer[14];
			break;
			case 2:
			aText = finalAnswer[21];
			bText = finalAnswer[22];
			cText = finalAnswer[23];
			dText = finalAnswer[24];
			
			break;
			case 3:
			aText = finalAnswer[31];
			bText = finalAnswer[32];
			cText = finalAnswer[33];
			dText = finalAnswer[34];
			break;
			
			case 4:
			aText = finalAnswer[41];
			bText = finalAnswer[42];
			cText = finalAnswer[43];
			dText = finalAnswer[44];
			break;
			default:
			log("Set Final Answer switch outside range");
			
		}
		
				
		a_MainText = new Kinetic.Text({
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
          text: "A. " + aText,
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
		
		a_MainText.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("Clicked A, Go to checkFinalAnswer(A)");	
			}
			a_MainText.off('mouseup');
			b_MainText.off('mouseup');
			c_MainText.off('mouseup');
			d_MainText.off('mouseup');
			
			checkFinalAnswer(qid,1)
		});
		
		a_MainText.on('mouseover',function(){
		
		a_MainText.setFill({
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, 'white', 1, 'black']
          });
		  textLayer.draw();
		
		});
		
		a_MainText.on('mouseout',function(){
			a_MainText.setFill({
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          });
		  textLayer.draw();
		});
		
		
		textLayer.add(a_MainText);
		textLayer.draw();
		a_MainText.transitionTo({
            x: 50,
			duration: 1,
		});
		
	 b_MainText = new Kinetic.Text({
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
          text: "B. " + bText,
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
		
		b_MainText.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("Clicked B, Go to checkFinalAnswer(B)");	
			}
			
			a_MainText.off('mouseup');
			b_MainText.off('mouseup');
			c_MainText.off('mouseup');
			d_MainText.off('mouseup');
			
			checkFinalAnswer(qid,2)
		});
		
		b_MainText.on('mouseover',function(){
		
		b_MainText.setFill({
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, 'white', 1, 'black']
          });
		  textLayer.draw();
		
		});
		
		b_MainText.on('mouseout',function(){
			b_MainText.setFill({
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          });
		  textLayer.draw();
		});		
		
		textLayer.add(b_MainText);
		textLayer.draw();
		b_MainText.transitionTo({
            x: 50,
			duration: 1,
		});
				
		
		
		 c_MainText = new Kinetic.Text({
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
          text: "C." + cText,
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
		
		c_MainText.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("Clicked C, Go to checkFinalAnswer(C)");	
			}
			a_MainText.off('mouseup');
			b_MainText.off('mouseup');
			c_MainText.off('mouseup');
			d_MainText.off('mouseup');
			
			checkFinalAnswer(qid,3)
		});
		
		
		c_MainText.on('mouseover',function(){
		
		c_MainText.setFill({
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, 'white', 1, 'black']
          });
		  textLayer.draw();
		
		});
		
		c_MainText.on('mouseout',function(){
			c_MainText.setFill({
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          });
		  textLayer.draw();
		});
		
		
		
		textLayer.add(c_MainText);
		textLayer.draw();
		c_MainText.transitionTo({
            x: 50,
			duration: 1,
		});
		
	 d_MainText = new Kinetic.Text({
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
          text: "D. " + dText,
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
		
		d_MainText.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("Clicked D, Go to checkFinalAnswer(D)");	
			}
			
			a_MainText.off('mouseup');
			b_MainText.off('mouseup');
			c_MainText.off('mouseup');
			d_MainText.off('mouseup');
			
			checkFinalAnswer(qid,4)
		});
		
		d_MainText.on('mouseover',function(){
		
		d_MainText.setFill({
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, 'white', 1, 'black']
          });
		  textLayer.draw();
		
		});
		
		d_MainText.on('mouseout',function(){
			d_MainText.setFill({
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          });
		  textLayer.draw();
		});
		
		textLayer.add(d_MainText);
		textLayer.draw();
		d_MainText.transitionTo({
            x: 50,
			duration: 1,
		});
		textLayer.moveToTop();
}






var tText;
function drawFinalTime(timeLeft)
{
	
tText = new Kinetic.Text({
          x: 1000,
          y: 400,
          text: timeLeft + " Seconden",
          fontSize: 20,
          fontFamily: 'Calibri',
          textFill: 'white',
          align: 'center',
		  opacity: 0.0,
        });
		textLayer.add(tText);
		textLayer.draw();
		tText.transitionTo({
            opacity: 1,
			x:725,
            duration: 1,
		});
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