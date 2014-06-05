var colorArray = [ "red", "blue", "orange", "green" ];

	var canvas;
	var context;

	var arrayCaptive = {};
	var arrayCaptiveCounter = 0;

	var arrayPatron = {};
	var arrayPatronCounter = 0;

function play() {
	console.log("Yeh!");
	init();
	// stop
	// exit
}

////////////////////////////////////////////////////////////
function refresh () {
	
	console.log("I");
	refresh.foo();
console.log("I");

}

refresh.foo = function () {
	console.log("mutu!");
		if(false) {
		clearInterval(id);
	}

	var id = setInterval(foo, 1000)
}
////////////////////////////////////////////////////////////

function init () {
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	context.canvas.width  = 800/*window.innerWidth / 2*/;
	context.canvas.height = 600/*window.innerHeight / 2*/; 

	this.factory = new Factory(5,30,30);  // Factory tipi object sarqel
	this.frog = new Frog(300,300);
	this.home = new Home(640,10);
	canvas.addEventListener("click", frog.addPatron, false);
	refresh();
}


function Frog (x,y) {
	this.x = x;
	this.y = y;
	//this.patron = new Ball(this.x,this.y);
	
	var frogImage = new Image();
	frogImage.src = 'images/frog.png';
		console.log(frogImage.src);
	frogImage.onload = function () {
			console.log(x);
			console.log(y);
		context.drawImage(frogImage, x, y,200,200);
	}
}

Frog.prototype.addPatron = function () {
	var patronXCoord = this.x + 10;
	var patronYCoord = this.y + 10;
	console.log("height");
	arrayPatron[arrayPatronCounter] = new Ball(patronXCoord,patronYCoord);

}


function Ball (beginCenterX, beginCenterY) {

	var centerX = beginCenterX; 
	var centerY = beginCenterY;
	this.radius = 15; // sharavix
	  context.beginPath();
      context.arc(centerX, centerY, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
}


function Factory (amtBall, factoryXCoord, factoryYCoord) {
	this.amtBall = amtBall;
	this.xCoord = factoryXCoord;
	this.yCoord = factoryYCoord;
	console.log(factoryXCoord);
	console.log(factoryYCoord);
	//this.captive = new Ball(this.x,this.y);
		var factoryImage = new Image();
		factoryImage.src = 'images/factory.png';
		console.log(factoryImage.src);
		factoryImage.onload = function () {
			console.log(factoryXCoord);
			console.log(factoryYCoord);
			context.drawImage(factoryImage, factoryXCoord, factoryYCoord, 80, 80);
		}
}


//QUESTION: vortexic kanchem addCaptive metod@
Factory.prototype.addCaptive = function () {
	var captiveXCoord = this.xCoord + 10;
	var captiveYCoord = this.yCoord + 10;
	console.log("width");
	arrayCaptive[arrayCaptiveCounter] = new Ball(captiveXCoord, captiveYCoord);
}


function Home (homeXCoord,homeYCoord) {
	this.xCoord = homeXCoord;
	this.yCoord = homeYCoord;
	console.log(this.xCoord,this.yCoord);

	var homeImage=document.createElement('img');


	//var homeImage = new Image(); 
	homeImage.src = 'images/home.png';
	console.log(homeImage.src);
	//http://jsfiddle.net/shpaker/uwCFS/
	//context.fillRect(100,100,500,500);
		homeImage.onload = function () {
		context.drawImage(homeImage,homeXCoord,homeYCoord);
		// homeImage.src='images/home.png';
	}
	
}