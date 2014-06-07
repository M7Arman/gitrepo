var colorArray = [ "red", "blue", "orange", "green" ];
var speed = {
	"patron" : {"x" : 0, "y" : -3},
	"captive" : {"x" : 2, "y" : 0},
}
//TODO: change it to JSON
var level1 = 10; 


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.canvas.width = 800/*window.innerWidth / 2*/;
context.canvas.height = 600/*window.innerHeight / 2*/; 


var arrayCaptive = [];
var arrayCaptiveCounter = 0;

var arrayPatron = [];
var arrayPatronCounter = 0;

var initialXOfPatron = 0;
var initialYOfPatron = 0;
var initialXOfCaptive = 0;
var initialYOfCaptive = 0;
var ballRadius = 15;

//////////////////////////*TIMES*//////////////////////////////////////////////////
var refreshSetInterval = 1000;
var fireSetInterval = 50;
var runCaptiveSetInterval = 200;
//IF: ete sharjum@ miayn uxix chlini, x-i poxaren petq e vectorov anenq!
var addCaptiveSetInterval = (2*ballRadius / speed.captive.x) * runCaptiveSetInterval;
///////////////////////////////////////////////////////////////////////////////////
var bool = true;


function play() {
	init();
	// stop
	// exit
}
	
function init () {
	if (bool) {
	console.log("1. initialation");
	bool = false;
	this.factory = new Factory(30,30); 
	this.frog = new Frog(300,300);
	this.home = new Home(640,10);
	factory.addCaptive();
	//refresh();
	} else {
	//WHY: don't work with "this"
	frog.addPatron();
	}
}

canvas.onclick = this.init;


////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// or terms ()
function refresh () {
	console.log("refresh!");
	
	if(false) {
		clearInterval(this.ID);
	}
	this.ID = setInterval(refresh, refreshSetInterval);
}
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
function Ball (initialX, initialY) {

	this.x = initialX;
	this.y = initialY;
	this.radius = ballRadius;
	this.drawBall();
}
Ball.prototype.drawBall = function () {
	//context.fillRect( 0, 0, 799, 799 );
	context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    //context.closePath();
    context.fillStyle = colorArray[arrayPatronCounter];
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

Ball.prototype.clearBall = function () {
	//TODO: clear Patrons!
}

// runPatron() or fire()
Ball.prototype.fire = function () {
	console.log("fire!");
	var t = this;
	t.x = t.x + speed.patron.x; 
	t.y = t.y + speed.patron.y;
	
	//console.log("this.x : ",t.x);
	//console.log("this.y : ",t.y);
	this.drawBall();
	setTimeout(function(){t.fire();}, fireSetInterval);
}


Ball.prototype.runCaptive = function () {
	console.log("run Captive, run!");
	var aBall = this;
	aBall.x = aBall.x + speed.captive.x;
	aBall.y = aBall.y + speed.captive.y;
	aBall.drawBall();
	setTimeout(function(){aBall.runCaptive();}, fireSetInterval);
}
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
function Frog (x,y) {
	this.x = x;
	this.y = y;
	var frogImage = new Image();
	frogImage.src = 'images/frog.png';
	frogImage.onload = function () {
		context.drawImage(frogImage, x, y,200,200);
	}
}

Frog.prototype.addPatron = function () {
	var patronXCoord = this.x + 100;
	var patronYCoord = this.y + 100;
	arrayPatron[arrayPatronCounter] = new Ball(patronXCoord,patronYCoord);
	arrayPatron[arrayPatronCounter].fire();
	arrayPatronCounter++;
}
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
function Factory (factoryXCoord, factoryYCoord) {

	this.xCoord = factoryXCoord;
	this.yCoord = factoryYCoord;
		var factoryImage = new Image();
		factoryImage.src = 'images/factory.png';
		factoryImage.onload = function () {
			context.drawImage(factoryImage, factoryXCoord, factoryYCoord, 80, 80);
		}
}

Factory.prototype.addCaptive = function () {
	var it = this
	console.log("hey");
	it.i = 0; 
	var captiveXCoord = it.xCoord + 50;
	var captiveYCoord = it.yCoord + 50;

	if(it.i >= level1) {
		clearInterval(it.ID);
	}


	arrayCaptive[arrayCaptiveCounter] = new Ball(captiveXCoord, captiveYCoord);
	arrayCaptive[arrayCaptiveCounter].runCaptive();
	arrayCaptiveCounter++;
	it.i++;
	//TODO: avelacnel x hat
	it.ID = setTimeout(function(){it.addCaptive();}, addCaptiveSetInterval);
}
//////////////////////////////////////////////////////////////////////////////////////////////


function Home (homeXCoord,homeYCoord) {
	this.x = homeXCoord;
	this.y = homeYCoord;
	var homeImage = new Image(); 
	homeImage.src = 'images/home.png';
	homeImage.onload = function () {
		context.drawImage(homeImage,homeXCoord,homeYCoord);
	}
	
}