// JavaScript Document


var stage;
var backgroundLayer;
var characterLayer;
var textLayer;
var secondTextLayer;
var hudLayer;
var background;
var popUpLayer;



// Initialize the game
// Set the stage
function start(){
		stage			= new Kinetic.Stage({container: 'container',width: 950,height: 500});
		backgroundLayer	= new Kinetic.Layer();
		characterLayer	= new Kinetic.Layer();
		hudLayer	    = new Kinetic.Layer();
		textLayer		= new Kinetic.Layer();
		secondTextLayer = new Kinetic.Layer();
		popUpLayer		= new Kinetic.Layer();
log("Stage and Layers has been set");

stage.on('click',function (){
log("Mouse Position " + stage.getMousePosition().x + ","  +  stage.getMousePosition().y);
});


}

