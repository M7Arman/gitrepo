var colorArray = [ "red", "blue", "orange", "green" ];
var speed = {
	"patron" : {"x" : "0", "y" : "-3"},
	"Captive" : {"x" : "3", "y" : "0"},
}

	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	context.canvas.width  = 800/*window.innerWidth / 2*/;
	context.canvas.height = 600/*window.innerHeight / 2*/; 


	var arrayCaptive = {};
	var arrayCaptiveCounter = 0;

	var arrayPatron = {};
	var arrayPatronCounter = 0;

	var initialXOfPatron = 0;
	var initialYOfPatron = 0;
	var initialXOfCaptive = 0;
	var initialYOfCaptive = 0;

function play() {
	init();
	// stop
	// exit
}

function init () {

	this.factory = new Factory(30,30); 
	this.frog = new Frog(300,300);
	this.home = new Home(640,10);
	canvas.addEventListener("click", this.frog.addPatron, true);
	//refresh();
}

////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
function refresh () {
	
	console.log("I");
	if(false) {
		clearInterval(id);
	}
/*
	for (i = 0; i < arrayPatron.length; i++) {
		console.log(i);
		arrayPatron[i].fire();
	}*/

	var id = setInterval(refresh, 1000);
}
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
function Ball (initialX, initialY) {

	this.x = initialX; 
	this.y = initialY;
	this.radius = 15;
	context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

// runPatron() or fire()
Ball.prototype.fire = function () {
	this.x = this.x + speed.patron.x;
	this.y = this.y + speed.patron.y;
	drawBall();
}

Ball.prototype.runCaptive = function () {
	this.x = this.x + speed.captive.x;
	this.y = this.y + speed.captive.y;
	drawBall();
}
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
function Frog (x,y) {
	this.x = x;
	this.y = y;
		console.log("Frog", x, this.x, y, this.y);
	var frogImage = new Image();
	frogImage.src = 'images/frog.png';
		console.log(frogImage.src);
	frogImage.onload = function () {
		context.drawImage(frogImage, x, y,200,200);
	}
}

Frog.prototype.addPatron = function () {
	var patronXCoord = this.x + 10;
	var patronYCoord = this.y + 10;
	console.log(this.x);
	console.log(patronXCoord);

	var currentObject = new Ball(patronXCoord,patronYCoord);
	arrayPatron.push = currentObject;
	arrayPatronCounter++;
}
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
function Factory (factoryXCoord, factoryYCoord) {

	this.xCoord = factoryXCoord;
	this.yCoord = factoryYCoord;
	console.log("factory",this.xCoord, factoryXCoord);
		var factoryImage = new Image();
		factoryImage.src = 'images/factory.png';
		factoryImage.onload = function () {
			context.drawImage(factoryImage, factoryXCoord, factoryYCoord, 80, 80);
		}
}

Factory.prototype.addCaptive = function () {
	var captiveXCoord = this.xCoord + 10;
	var captiveYCoord = this.yCoord + 10;
	arrayCaptive[arrayCaptiveCounter] = new Ball(captiveXCoord, captiveYCoord);
	arrayCaptiveCounter++;
}
//////////////////////////////////////////////////////////////////////////////////////////////


function Home (homeXCoord,homeYCoord) {
	this.x = homeXCoord;
	this.y = homeYCoord;
	console.log("Home", this.x, this.y, homeXCoord,homeYCoord);
	var homeImage=document.createElement('img');
	//var homeImage = new Image(); 
	homeImage.src = 'images/home.png';

		homeImage.onload = function () {
		context.drawImage(homeImage,homeXCoord,homeYCoord);
		// homeImage.src='images/home.png';
	}
	
}