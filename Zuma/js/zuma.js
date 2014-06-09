var colorArray = [ "red", "blue", "orange", "green" ];
//var arrayBall = [ "images/red.png", "images/blue.png", "images/green.png", "images/orange.png" ];
var maxColorArray = colorArray.length -1;
var minColorArray = 0;
//var frogAll = ["images/frog.png"];

var speed = {
	"patron" : {"x" : 0, "y" : -1},
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

var speedUpCaptiveCount = 2 * ballRadius / speed.captive.x;

//////////////////////////*TIMES*//////////////////////////////////////////////////
var refreshSetInterval = 6;
var fireSetInterval = 3;
var runCaptiveSetInterval = 50;
var speedUpCaptiveSetInterval = runCaptiveSetInterval/10;
//IF: ete sharjum@ miayn uxix chlini, x-i poxaren petq e vectorov anenq!
var addCaptiveSetInterval = 2 * ballRadius / (speed.captive.x / runCaptiveSetInterval);
///////////////////////////////////////////////////////////////////////////////////
var bool = true;
var refreshStop = false;

function play() {
	init();
	// exit
}
function stop() {
	refreshStop = true;
	for (var k = 0; k < arrayCaptive.length; k++) {
		arrayCaptive[k].runCaptiveStop = true;
	}
	for (var k = 0; k < arrayPatron.length; k++) {
		arrayPatron[k].fireStop = true;
	}

}
	
function init () {
	if (bool) {
	console.log("1. initialation");
	bool = false;
	this.factory = new Factory(30,30); 
	this.frog = new Frog(300,300);
	this.home = new Home(640,10);
	factory.addCaptive();
	frog.addPatron();
	refresh();
	} else {
	//WHY: don't work with "this"
	arrayPatron[arrayPatronCounter - 1].fire();
	frog.addPatron();
	}
}

canvas.onclick = this.init;


////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// or terms ()
function refresh () {
	//console.log("refresh!");
	if(refreshStop) {
		return;
	}
	termsBall();
	setTimeout(refresh, refreshSetInterval);
}

function termsBall () {
	for (var i = 0; i < arrayCaptive.length; i++) {
		for (var j = 0; j < arrayPatron.length; j++) {
			var dx = (arrayPatron[j].x - arrayCaptive[i].x);
			var dy = (arrayPatron[j].y - arrayCaptive[i].y);
			if ( ((-3 <= dx) && (dx <= ballRadius+3)) && ((-3 <= dy) && (dy <= ballRadius+3)) ) {

				texBacel(i);
				addBacvacTexum(i,j);
				//TODO: BOOM or don't BOOM
			}
		}
	}
}
// Captive-neri mej tex bacel patroni hamar
function texBacel(i) {
	for (var k = 0; k < arrayCaptive.length; k++) {
		arrayCaptive[k].runCaptiveStop = true;
		if (k < i) {
			arrayCaptive[k].speedUpCaptive();
		}
	}
	for (var k = 0; k < arrayCaptive.length; k++) {
		arrayCaptive[k].runCaptiveStop = false;
	}
}
function addBacvacTexum(i,j) {
	arrayPatron[j].clearBall();
	arrayPatron[j].fireStop = true;
	delete arrayPatron[j].fire();
	arrayPatronCounter--;
				
	arrayCaptive.splice(i - 1, 0, arrayPatron[j]);
	removePatron = arrayPatron.splice(j,1);

	arrayCaptive[i - 1].x = arrayCaptive[i].x;
	arrayCaptive[i - 1].y = arrayCaptive[i].y;
	arrayCaptive[i - 1].runCaptive();
	arrayCaptiveCounter++;
}
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
function Ball (initialX, initialY) {
	var randomNumber = Math.floor(Math.random() * (maxColorArray - minColorArray + 1)) + minColorArray;
	this.colorBall = colorArray[randomNumber];
	this.x = initialX;
	this.y = initialY;
	this.runCaptiveStop = false;
	this.fireStop = false;
	this.veragrelTeChe = true;
	this.radius = ballRadius;
	this.drawBall();
}
Ball.prototype.drawBall = function () {
	context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.closePath();
    context.fillStyle = this.colorBall;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

Ball.prototype.clearBall = function () {
	context.beginPath();
    context.arc(this.x, this.y, this.radius+1, 0, 2 * Math.PI, false);
    context.closePath();
    context.fillStyle = '#fff';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#fff';
    context.stroke();
}

// runPatron() or fire()
Ball.prototype.fire = function () {
	var t = this;
	if(t.fireStop) {
		return;
	}
	t.clearBall();
	t.x = t.x + speed.patron.x; 
	t.y = t.y + speed.patron.y;
	t.drawBall();

	setTimeout(function(){t.fire();}, fireSetInterval);
}

Ball.prototype.speedUpCaptive = function () {
	var itIs = this;

	if (itIs.veragrelTeChe) {
		itIs.hashvich = speedUpCaptiveCount;
		itIs.veragrelTeChe = false;
	}
	itIs.hashvich--;
	itIs.clearBall();
	itIs.x = itIs.x + speed.captive.x;
	itIs.y = itIs.y + speed.captive.y;
	itIs.drawBall();
	if (itIs.hashvich == 0){
		itIs.veragrelTeChe = true;
		return;
	}
	setTimeout(function(){itIs.speedUpCaptive();}, speedUpCaptiveSetInterval);
}


Ball.prototype.runCaptive = function () {
	var aBall = this;
	while (aBall.runCaptiveStop) {
	}
	aBall.clearBall();
	aBall.x = aBall.x + speed.captive.x;
	aBall.y = aBall.y + speed.captive.y;
	aBall.drawBall();

	setTimeout(function(){aBall.runCaptive();}, runCaptiveSetInterval);
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
	var currentPatron = new Ball(patronXCoord,patronYCoord);
	currentPatron.drawBall();
	arrayPatron.push(currentPatron);
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
	var captiveXCoord = it.xCoord + 50;
	var captiveYCoord = it.yCoord + 50;
	level1--;
	if(level1 == 0) {
		return;
	}
	var currentCaptive = new Ball(captiveXCoord, captiveYCoord);
	arrayCaptive.push(currentCaptive);
	arrayCaptive[arrayCaptiveCounter].runCaptive();
	arrayCaptiveCounter++;
	setTimeout(function(){it.addCaptive();}, addCaptiveSetInterval);
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