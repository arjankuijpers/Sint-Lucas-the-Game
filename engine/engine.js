// JavaScript Document

//Engine QuestionJS & Game Developed By Createc
var version = "Game v05077 ,QJS integrated"

var debug = 1;

var question_OS;

var levelSave;
var difficultySave;

var roaming = 0;

var timeCount = 0;
var score = new Array();
score[1] = 0;
score[2] = 0;
score[3] = 0;
score[4] = 0;

var allProgress = 0;
var progress = new Array();

progress[1] = 0;
progress[2] = 0;
progress[3] = 0;
progress[4] = 0;

var goodInLevel = new Array();
	goodInLevel[1] = 0;
	goodInLevel[2] = 0;
	goodInLevel[3] = 0;
	goodInLevel[4] = 0;
var allGood = 0;

var inLevel = 0;
var questNumber = 0;

var levelFinal = 1; //suposed to be 0 //////////////////////////////////////////////!!!!!!!!!!!!!!!////////!!!!!!

var statusLevel = new Array();
statusLevel[1] = 1;
statusLevel[2] = 1;
statusLevel[3] = 2;
statusLevel[4] = 2;


var goodQuestsL1 = new Array();
var goodQuestsL2 = new Array();
var goodQuestsL3 = new Array();
var goodQuestsL4 = new Array();
var goodQuestsL5 = new Array();


function setQuest(level, difficulty){
	
	levelSave = level;
	difficultySave = difficulty;
	
	allProgress = (progress[1] + progress[2] + progress[3] + progress[4]) /4;
	progress[levelSave] = goodInLevel[levelSave] / 5 * 100;
	log("progress " + progress + "%");
	
	if(inLevel == questNumber && questNumber != 0)
	{
		log("inLevel == questNumber" + inLevel + "--" + questNumber);
		log("Level 1 Finished");
		log("setQuest Stage Reset and Int next Level");
		stage.reset();
		clear_Memory();
		
		switch(level)
{
case 1:
  initLevel01_Fin();
  break;
case 2:
  initLevel02_Fin();
  break;
  case 3:
  initLevel03_Fin();
  break;
  case 4:
  initLevel04_Fin();
  break;
default:
	error_Alert(6); 
}
	}
	
	else{
	
	
switch(difficulty)
{
case 1:
  getRandom(1,5);
  break;
case 2:
  getRandom(6,10);
  break;
  case 3:
  getRandom(11,15);
  break;
  case 4:
  getRandom(16, 20);
  break;
default:
	error_Alert(2);
}




	switch(level)
{
case 1:
  question_OS = myQuestion1[randomOut];
  break;
case 2:
  question_OS = myQuestion2[randomOut];
  break;
  case 3:
  question_OS = myQuestion3[randomOut];
  break;
  case 4:
  question_OS = myQuestion4[randomOut];
  break;
default:
	error_Alert(1); 
}

availableQuests();
	}
	
}

function availableQuests(){
	
	switch(levelSave)
	{
	case 1:
if(goodQuestsL1[randomOut] == 1)
	{
	setQuest(levelSave,difficultySave);
	if(debug ==1)
	{
	console.log("goodquests returned an 1 on array: " + randomOut);	
	}
	}
else
	{
		setAnswer(randomOut);
			if(debug ==1)
	{
	console.log("Resume process --> questionID:" + randomOut + "\n Player never had this Question Good");	
	}
	}
	break;
	
		case 2:
if(goodQuestsL2[randomOut] == 1)
	{
	setQuest(levelSave,difficultySave);
	if(debug ==1)
	{
	console.log("goodquests returned an 1 on array: " + randomOut);	
	}
	}
else
	{
		setAnswer(randomOut);
			if(debug ==1)
	{
	console.log("Resume process --> questionID:" + randomOut + "\n Player never had this Question Good");	
	}
	}
	break;
	
	case 3:
if(goodQuestsL3[randomOut] == 1)
	{
	setQuest(levelSave,difficultySave);
	if(debug ==1)
	{
	console.log("goodquests returned an 1 on array: " + randomOut);	
	}
	}
else
	{
		setAnswer(randomOut);
			if(debug ==1)
	{
	console.log("Resume process --> questionID:" + randomOut + "\n Player never had this Question Good");	
	}
	}
	break;
	case 4:
if(goodQuestsL4[randomOut] == 1)
	{
	setQuest(levelSave,difficultySave);
	if(debug ==1)
	{
	console.log("goodquests returned an 1 on array: " + randomOut);	
	}
	}
else
	{
		setAnswer(randomOut);
			if(debug ==1)
	{
	console.log("Resume process --> questionID:" + randomOut + "\n Player never had this Question Good");	
	}
	}
	break;
	case 5:
if(goodQuestsL5[randomOut] == 1)
	{
	setQuest(levelSave,difficultySave);
	if(debug ==1)
	{
	console.log("goodquests returned an 1 on array: " + randomOut);	
	}
	}
else
	{
		setAnswer(randomOut);
			if(debug ==1)
	{
	console.log("Resume process --> questionID:" + randomOut + "\n Player never had this Question Good");	
	}
	}
	break;
	default:
	error_Alert(7);
	}
}

var answer1;
var answer2;
var answer3;
var answer4;
var answerGood;
var answerArray = new Array();

//Get Answer by the Question
function setAnswer(questID){
	log("START set Answer, qid: " + questID);

switch(levelSave)
{
	case 1:
answerArray = myAnswer1[questID].split("^");
break;
	case 2:
answerArray = myAnswer2[questID].split("^");
break;
	case 3:
answerArray = myAnswer2[questID].split("^");
break;
	case 4:
answerArray = myAnswer2[questID].split("^");
break;
	case 5:
answerArray = myAnswer2[questID].split("^");
break;
default:
error_Alert(8);
}

if(answerArray[4] == "undifined" || answerArray[4] == null)
{
error_Alert(3);	
}

answer1 = answerArray[0];
answer2 = answerArray[1];
answer3 = answerArray[2];
answer4 = answerArray[3];
answerGood = answerArray[4];

		questNumber++;
		setHText(100,0,15, 'Level: ' + levelSave);
		setHText(225,0,15,"Vraag: " + questNumber + "/" + inLevel);
		setScoreText(125,465,30,String(score[levelSave]));
		setHText(200,470,20," Score");
		setHText(450,470,20, progress[levelSave] + "%");

		setQText(200,50, question_OS);
		setAText(300, 150);
		
		log("END set Answer, qid: " + questID);
}


function checkAnswer(chosen){
	var good = answerGood;
	var qid = randomOut;
	if(debug == 1)
	{
	console.log("randomOut" + randomOut);
		console.log("answerGood" + answerGood);
			console.log("Chosen" + chosen);
				console.log("good" + good);
					console.log("qid" + qid);
	}
					
	if(chosen == good)
	{
		if(debug == 1)
		{
		console.log("Answer is correct: " + chosen + ":-:" + answerGood);
		}
		
		goodInLevel[levelSave]++;
		allGood++;
		
		switch(levelSave)
		{
			case 1:
		goodQuestsL1[qid] = 1;
			break;
			case 2:
		goodQuestsL2[qid] = 1;
			break;
			case 3:
		goodQuestsL3[qid] = 1;
			break;
			case 4:
		goodQuestsL4[qid] = 1;
			break;
			case 5:
		goodQuestsL5[qid] = 1;
			break;
			default:
		log("ERROR: Switch GoodQuest got LevelSave int outside Range ERROR - R260");
		}
		score[levelSave] += 10;
		
		showAnswer(1,qid);
		
		setTimeout(function(){
			nextQuest();
		setQuest(levelSave, difficultySave);
		},5000);
		
		
		
		if(debug ==1)
		{
			switch(levelSave)
		{
			case 1:
		console.log("goodQuests: " + goodQuestsL1[qid]);
		break;
		case 2:
		console.log("goodQuests: " + goodQuestsL2[qid]);
		break;
		case 3:
		console.log("goodQuests: " + goodQuestsL3[qid]);
		break;
		case 4:
		console.log("goodQuests: " + goodQuestsL4[qid]);
		break;
		case 5:
		console.log("goodQuests: " + goodQuestsL5[qid]);
		break;
		default:
		log("ERROR: Switch GoodQuest got LevelSave int outside Range ERROR R293");
		}
		console.log("inLevel" + inLevel);	
		console.log("Score:" + score[levelSave]);
		}
		
		
	}
	else {
		if(debug == 1)
		{
		console.log("Answer is False: " + chosen + ":-:" + answerGood);
		}
			score[levelSave] -= 5;
			
			showAnswer(0,qid);
	}
	
	
	
}


//Next Question
function nextQuest(){
	log("nextQuest Start");
characterLayer.removeChildren();
textLayer.removeChildren();

characterLayer.draw();
textLayer.draw();
log("nextQuest Done - r192 engine.js");

}



function showAnswer(good, qID){
	var posX = 0;
	var posY = 150;
	
	var text;
	var color;
	if(good == 1)
	{
		color = '#8EEB00';
		text = "Correct antwoord";
		setGText(posX, posY, text, color)
	}
	

	if(good == 0)
		{
		color = '#FF2C00';
		text = "Fout antwoord";
		setGText(posX, posY, text, color)
		
		
		if(debug ==1)
				{
					console.log("Set Gtext: " + text + "Color: " + color)
				}
			
			setTimeout(function(){
			setScoreText(125,437,40,String(score[levelSave]));
			setHText(200,450,20," Score");
			
			textLayer.removeChildren();
			characterLayer.removeChildren();
				
			setText(300,125,"Je hebt de vraag fout beantwoord. \n"
			 + question_OS + "\n\n het juiste antwoord is: \n" + answerArray[answerGood -1]);
			 
			 var leraarImg = new Image();
			 switch(levelSave)
			 {
				 case 1:
					leraarImg.src = "assets/leraren/willem_k.png";
				break;
				
				case 2:
					leraarImg.src = "assets/leraren/luc_k.png";
				break;
					
				case 3:
					leraarImg.src = "assets/leraren/rene_k.png";
				break;
				
				case 4:
					leraarImg.src = "assets/leraren/robin_k.png";
				break;
				
				default:
					error_Alert(10);
			 }
	
	var continueImg = new Image();
	continueImg.src = "assets/sc_con_k.png";
			 
			 leraarImg.onload = function() {
		var leraar = new Kinetic.Image(
		{
			x: 700,
			y: 75,
			image: leraarImg,
		});
		characterLayer.add(leraar);
		}
		
		 
		
		continueImg.onload = function() {
		var con = new Kinetic.Image(
		{
			x: 420,
			y: 300,
			image: continueImg,
		});
		
		con.on('mouseup',function(){
						nextQuest();			
						setQuest(levelSave, difficultySave);
		});
		
		con.on('mouseover',function(){
		log("Mouse Over Continue");
				});
	
		
		textLayer.add(con);
		characterLayer.draw();
		textLayer.draw();
		hudLayer.moveToTop();
		textLayer.moveToTop();
		
		}
	},5000);
						

			
		}
		
	
	
}


//Help Functions
var randomOut;
function getRandom(low, high)
{
randomOut = Math.floor((high-(low-1))*Math.random()) + low;

}



function setStatusLevel(){
log("check and set status Levels - R499 - engine.JS");


if(progress[1] >= 75)
	{
		statusLevel[1] = 3;
	}
if(progress[1] < 75 && progress[1] != 0)
	{
		statusLevel[1] = 4;
	}



	if(progress[2] >= 75)
		{
			statusLevel[2] = 3;
		}
	if(progress[2] < 75 && progress[2] != 0)
		{
			statusLevel[2] = 4;
		}
		
		
		
		if(progress[1] >= 75 && progress[2] >= 75)
		{
			statusLevel[3] = 1
		}


		if(progress[3] >= 75)
		{
			statusLevel[4] = 1
		}
		if(progress[4] >= 75)
		{
			levelFinal = 1;	
		}



	if(progress[3] >= 75)
		{
			statusLevel[3] = 3;
		}
	if(progress[3] < 75 && progress[3] != 0)
		{
			statusLevel[3] = 4;
		}
		
		
		
	if(progress[4] >= 75)
		{
			statusLevel[4] = 3;
		}
	if(progress[4] < 75 && progress[4] != 0)
		{
			statusLevel[4] = 4;
		}

		}

function clear_Level(level){
	progress[level] = 0;
	goodInLevel[level] = 0;
	
	switch(level)
	{
		case 1:
		log("goodQuestL1 is set to 0");
			goodQuestsL1 = 0;
			score[1] = 0;
		log("Score: " + score[1]); 	
		break;
		case 2:
		log("goodQuestL2 is set to 0"); 
			goodQuestsL2 = 0;
			score[2] = 0;
		log("Score: " + score[2]); 	
		break;
		case 3:
		log("goodQuestL3 is set to 0"); 
			goodQuestsL3 = 0;
			score[3] = 0;
		log("Score: " + score[3]); 	
		break;
		case 4:
		log("goodQuestL4 is set to 0"); 
			goodQuestsL4 = 0;
			score[4] = 0;
		log("Score: " + score[4]); 	
		break;
		default:
		error_Alert(8);
	}
}


function wipe_Memory()
{
	
	
question_OS = 0;

levelSave = 0;
difficultySave = 0;

roaming = 0;

timeCount = 0;
score[0] = 0;
score[1] = 0;
score[2] = 0;
score[3] = 0;
score[4] = 0;

allProgress = 0;

progress[1] = 0;
progress[2] = 0;
progress[3] = 0;
progress[4] = 0;

	goodInLevel[1] = 0;
	goodInLevel[2] = 0;
	goodInLevel[3] = 0;
	goodInLevel[4] = 0;
allGood = 0;

inLevel = 0;
questNumber = 0;

levelFinal = 0;

statusLevel[1] = 1;
statusLevel[2] = 1;
statusLevel[3] = 2;
statusLevel[4] = 2;

timeLeft = null;
	
}


function clear_Memory(){
	log("clear_Memory start: r207 - engine.js");
	log("question_OS : " + question_OS + "randomOut: " + randomOut + "\n inLevel: " + inLevel + "questNumber: " + questNumber);
question_OS = null;
randomOut 	= null;

inLevel 	= 0;
questNumber = 0;

	log(" Variables CLEARED --> \n question_OS : " + question_OS + "randomOut: " + randomOut + "\n inLevel: " + inLevel + "questNumber: " + questNumber);
	log("clear_Memory Done: r216 - engine.js");
}


function log(text)
{
if (debug == 1)
{
	console.log(text);
}
}

function error_Alert(id){

if(debug == 1)
{
switch(id)
{
	
case 1:
		console.log("An error has occurred: with id:" + id + "setQuest(SwitchLevel) Returned an error: Level Int outside Range, under 1 or higher than 4");
  	alert("An error has occurred: with id:" + id + "setQuest(SwitchLevel) Returned an error: Level Int outside Range, under 1 or higher than 4");
  break;
  
case 2:
		console.log("An error has occurred: with id:" + id + "setQuest (DifficultySwitch) Returned an error: Difficulty Int outside Range, under 1 or higher than 4");
 	 alert("An error has occurred: with id:" + id + "setQuest (DifficultySwitch) Returned an error: Difficulty Int outside Range, under 1 or higher than 4");
  break;
  
  case 3:
  		console.log("An error has occurred: with id:" + id + "setAnswer read an array that was to small (answerArray[4] == undifined or NULL");
 	 alert("An error has occurred: with id:" + id + "setAnswer read an array that was to small (answerArray[4] == undifined or NULL");
  break;
  
  case 4:
  log("An error has occurred: with id:" + id + "checkAnswer returned VAR 'CHOSEN' ISNT in  Range or not and integer");
 	 alert("An error has occurred: with id:" + id + "checkAnswer returned VAR 'CHOSEN' ISNT in  Range or not and integer");
  break;
    case 5:
	log("An error has occurred: with id:" + id + "Kinetic returned an error Layer.moveToTop cannot move layer after setQuest function in an Level");
 	 alert("An error has occurred: with id:" + id + "Kinetic returned an error Layer.moveToTop");
  break;
  case 6:
 	 alert("An error has occurred: with id:" + id + "LevelFinish Switch returned invalid Var to low or to High");
	 log("An error has occurred: with id:" + id + "LevelFinish Switch returned invalid Var to low or to High");
  break;
  
  case 7:
 	 alert("An error has occurred: with id:" + id + "quest checker R105: engine.js :: invalid switch integer and went to default-> \n ERROR LevelSave return outside range");
  break;
  
  case 8:
 	 alert("An error has occurred: with id:" + id + "Function Clear Level - returned an ERROR: switch level is out of range of switch >>!!!!! CANT CLEAR LEVEL !!!!!");
  break;
 
  case 9:
 	 alert("An error has occurred: with id:" + id + "switch level answerArray: R217 engine.js");
  break;
  case 10:
 	 alert("An error has occurred: with id:" + id + " Switch leraar - returned an int outside range - R444 engine.js");
  break;
  case 11:
 	 alert("An error has occurred: with id:" + id + "");
  break;
default:
	Console.log("An error has occurred: with id:" + id + "Unknown Error, error Alert Got Triggert with unkown id Int");
	alert("An error has occurred: with id:" + id + "Unknown Error, error Alert Got Triggert with unkown id Int");
}
}
}

	function setAchievement(aid)
	{
		showPopUp(achievementText[aid]);
	}
	
	var popupActive = 0;
	function showPopUp(text)
	{
		if(popupActive == 0)
		{
		popupActive = 1;
		achievement.currentTime = 0;
		achievement.play();
		
		log("R: 593 engine.js: show PopUp function start");
		stage.add(popUpLayer);

		var hText = "ACHIEVEMENT UNLOCKED";
		var tHSize = 15;
		var tSize = 12;
		
		var rectX = 300;
		var rectY = 300;
		
		var rectWidth = 375;
		var rectHeight = 50;
		
		var hTextX = 375;
		var hTextY = 310;
		
		var textX = 375;
		var textY = 330;
		
		var popIconX = 305;
		var popIconY = 302;

		var rect = new Kinetic.Rect
		({
			x: rectX,
			y: rectY,
			
			width: rectWidth,
			height: rectHeight,
			opacity: 0,
			
			fill: '#575151',
			cornerRadius: 25,
		});
		
		var hText = new Kinetic.Text({
			x: hTextX,
			y: hTextY,
			opacity: 0,
			
			text: hText,
			fontSize: tHSize,
			fontFamily: 'Calibri',
			textStrokeWidth: -5,
			textStroke: 'white',
			listening: 'false',
		});
			
			
			var text = new Kinetic.Text({
			x: textX,
			y: textY,
			opacity: 0,
			
			text: text,
			fontSize: tSize,
			fontFamily: 'Calibri',
			textStrokeWidth: -5,
			textStroke: 'white',
			listening: 'false'		
		});
			
			
			var aGroup = new Kinetic.Group();
			aGroup.add(rect);
			aGroup.add(hText);
			aGroup.add(text);
			
					
			
			popUpLayer.add(aGroup);
			
			
			
			var iconImg = new Image();
			iconImg.src = "assets/pop_icon.png";
		
		var icon;
			iconImg.onload = function() {
			icon = new Kinetic.Image(
		{
			x: popIconX,
			y: popIconY,
			opacity: 0,
			image: iconImg,
		});
			popUpLayer.add(icon);
			popUpLayer.draw();
			
			log("Pop Up transition fade-in start");
			rect.transitionTo(
				{
     		      opacity: 1,
          		  duration: 1,
				});
							
			hText.transitionTo(
				{
					opacity: 1,
					duration: 1,
				});
			text.transitionTo(
				{
					opacity: 1,
					duration: 1,
				});
			icon.transitionTo(
				{
					opacity: 1,
					duration: 1,
				});
			log("Pop Up transition fade-in stop");
			}
			
		log("R:657 engine.JS: Done drawing pop up");
		
		setTimeout(function(){
			log("Pop Up transition fade-out start");
			rect.transitionTo(
				{
     		      opacity: 0,
          		  duration: 1,
				});
							
			hText.transitionTo(
				{
					opacity: 0,
					duration: 1,
				});
			text.transitionTo(
				{
					opacity: 0,
					duration: 1,
				});
				icon.transitionTo(
				{
					opacity: 0,
					duration: 1,
				});
			log(" Pop Up transition fade-out stop");
			},5000);
			
			setTimeout(function(){
				log("Remove popUpLayer");
					stage.remove(popUpLayer);
					log("Remove popUpLayer: DONE");
					popupActive = 0;},8000);
					
		}
		else
		{
		log("popup is already on screen :: " + popupActive);
		}
					
	}


//collision variables
//object1
var a_X1;
var a_Y1;

var a_X2;
var a_Y2;

function reset_CollisionField()
{
a_X1 = "";
a_Y1 = "";

a_X2 = "";
a_Y2 = "";
if(debug == 1)
{
console.log("Collison Field Reset: " + a_X1 + a_Y1 + a_X2 + a_Y2 + "(if empty its OK, means it got Cleared)")	
}
}

//Set text, this will draw text to the text layer with transition


var credits_MainText;
function setCText(posX, posY, size, text){
	if(debug ==1)
	{
	console.log("Set Stext: " + text)
	}
	credits_MainText = new Kinetic.Text({
          x: posX,
          y: posY,
          text: text,
          fontSize: size,
          fontFamily: 'Calibri',
          textFill: 'white',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [2, 2],
            opacity: 0
          },
          opacity: 0.0,
        });
		textLayer.add(credits_MainText);
		textLayer.draw();
		credits_MainText.transitionTo({
            opacity: 1.0,
            duration: 2,
		});
				textLayer.draw();
}


var s_SelectText;
function setSelectText(text){
	if(debug ==1)
	{
	console.log("Set Stext: " + text)
	}
	s_SelectText = new Kinetic.Text({
          x: 55,
          y: 375,
          text: text,
          fontSize: 40,
          fontFamily: 'Calibri',
          textFill: 'white',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          opacity: 0.0,
        });
		secondTextLayer.add(s_SelectText);
		secondTextLayer.draw();
		s_SelectText.transitionTo({
            opacity: 1,
            duration: 1,
		});
				secondTextLayer.draw();
				secondTextLayer.moveToTop();
}

var s_GoodText;
function setGText(posX, posY, text, color){
	s_GoodText = new Kinetic.Text({
        	  x: posX,
       	 	  y: posY,
        	  stroke:'white',
          	strokeWidth: 5,
          	fill: color,
          	text: text,
          	fontSize: 14,
          	fontFamily: 'Calibri',
          	textFill: 'white',
          	width: 950,
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
		textLayer.add(s_GoodText);
		textLayer.draw();
		s_GoodText.transitionTo({
            opacity: 0.7,
            duration: 2,
		});
	}



function setQText(posX, posY, text){
		
	log("Set Qtext: " + text)
	
var m_MainText = new Kinetic.Text({
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
              x: 380,
              y: 200
            },
            colorStops: [0, '#4F2009', 1, 'black']
          },
          text: text,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 600,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [10, 10],
            opacity: 0
          },
          cornerRadius: 20,
		  opacity: 0.0,
        });
		textLayer.add(m_MainText);
		textLayer.draw();
		m_MainText.transitionTo({
            opacity: 0.7,
            duration: 2,
		});
}


function setAText(posX, posY){
	log("Set Atext: " + answer1 + " - " + answer2 + " - " + answer3 + " - " + answer4)
	
var a_MainText = new Kinetic.Text({
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
          text: "A. " + answer1,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 380,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [10, 10],
            opacity: 0
          },
          cornerRadius: 20,
		  opacity: 0.0,
        });
		
		
		a_MainText.on('mouseup',function(){
			log("mouseuped A, Go to checkAnswer with 1 (A)");	
			checkAnswer(1);
			a_MainText.off('mouseup');
			b_MainText.off('mouseup');
			c_MainText.off('mouseup');
			d_MainText.off('mouseup');
		});
		
		
		
		textLayer.add(a_MainText);
		textLayer.draw();
		a_MainText.transitionTo({
            opacity: 0.7,
            duration: 2,
		});
		var b_MainText = new Kinetic.Text({
          x: posX,
          y: posY + 50,
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
          text: "B. " + answer2,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 380,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [10, 10],
            opacity: 0
          },
          cornerRadius: 20,
		  opacity: 0.0,
        });
		
		b_MainText.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("mouseuped B, Go to checkAnswer with 2 (B)");	
			}
			checkAnswer(2);
			a_MainText.off('mouseup');
			b_MainText.off('mouseup');
			c_MainText.off('mouseup');
			d_MainText.off('mouseup');
		});
		
		
		textLayer.add(b_MainText);
		textLayer.draw();
		b_MainText.transitionTo({
            opacity: 0.7,
            duration: 2,
		});
		var c_MainText = new Kinetic.Text({
          x: posX,
          y: posY + 100,
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
          text: "C. "+ answer3,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 380,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [10, 10],
            opacity: 0
          },
          cornerRadius: 20,
		  opacity: 0.0,
        });
		
		c_MainText.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("mouseuped C, Go to checkAnswer with 3 (C)");	
			}
			checkAnswer(3);
			a_MainText.off('mouseup');
			b_MainText.off('mouseup');
			c_MainText.off('mouseup');
			d_MainText.off('mouseup');
		});
		
		textLayer.add(c_MainText);
		textLayer.draw();
		c_MainText.transitionTo({
            opacity: 0.7,
            duration: 2,
		});
		var d_MainText = new Kinetic.Text({
          x: posX,
          y: posY + 150,
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
          text: "D. " + answer4,
          fontSize: 14,
          fontFamily: 'Calibri',
          textFill: 'white',
          width: 380,
          padding: 20,
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [10, 10],
            opacity: 0
          },
          cornerRadius: 20,
		  opacity: 0.0,
        });
		
		d_MainText.on('mouseup',function(){
			if(debug == 1)
			{
			console.log("mouseuped D, Go to checkAnswer with 4 (D)");	
			}
			checkAnswer(4);
			a_MainText.off('mouseup');
			b_MainText.off('mouseup');
			c_MainText.off('mouseup');
			d_MainText.off('mouseup');
		});
		
		textLayer.add(d_MainText);
		textLayer.draw();
		d_MainText.transitionTo({
            opacity: 0.7,
            duration: 2,
		});
}



var s_ScoreText;
function setScoreText(posX, posY, size, text){
	if(debug ==1)
	{
	console.log("Set Scoretext: " + text)
	}
	s_ScoreText = new Kinetic.Text({
          x: posX,
          y: posY,
          text: text,
          fontSize: size,
          fontFamily: 'Calibri',
          textFill: 'orange',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          opacity: 1.0,
        });
		textLayer.add(s_ScoreText);
		textLayer.draw();
}


var s_HText;
function setHText(posX, posY, size, text){
	if(debug ==1)
	{
	console.log("Set Htext: " + text)
	}
	s_HText = new Kinetic.Text({
          x: posX,
          y: posY,
          text: text,
          fontSize: size,
          fontFamily: 'Calibri',
          textFill: 'White',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          opacity: 1.0,
        });
		textLayer.add(s_HText);
		textLayer.draw();
}



var s_MainText;
function setSText(posX, posY, size, text){
	if(debug ==1)
	{
	console.log("Set Stext: " + text)
	}
	s_MainText = new Kinetic.Text({
          x: posX,
          y: posY,
          text: text,
          fontSize: size,
          fontFamily: 'Calibri',
          textFill: 'White',
          align: 'center',
          shadow: {
            color: 'black',
            blur: 1,
            offset: [5, 5],
            opacity: 0
          },
          opacity: 0.0,
        });
		textLayer.add(s_MainText);
		textLayer.draw();
		s_MainText.transitionTo({
            opacity: 0.7,
            duration: 2,
		});
				textLayer.draw();
}




var m_MainText;
function setText(posX, posY, text){
	if(debug ==1)
	{
	console.log("Set text: " + text)
	}
m_MainText = new Kinetic.Text({
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
		textLayer.add(m_MainText);
		textLayer.draw();
		m_MainText.transitionTo({
            opacity: 0.7,
            duration: 2,
		});
}

