
var colorArray = [ "red", "blue", "orange", "green" ];

function play() {
	// pley (ashxatacni Init-@)
	// stop
	// exit
}

function init () {
	this.factory = new Factory(5,15,15);  // Factory tipi object sarqel
	this.frog = new Frog(50,50);
	this.home = new Home(50,150);

	console.log(frog.fire());

}


function Frog (x,y) {
	this.x = x;
	this.y = y;
}

Frog.prototype.fire = function () {
	return this.x;
}

function Ball () {
	this.r = 10 // sharavix
	this.v = 20 // aragutyun
	// var colorBall
}

var patron = new Ball();
var spanvox = new Ball();

patron.boom = function () {
	// traqel
}

function Factory (amtBall, xCoord, yCoord) {
	this.amtBall = amtBall;
	this.xCoord = xCoord;
	this.yCoord = yCoord;
}

function Home (xCoord,yCoord) {
	this.xCoord = xCoord;
	this.yCoord = yCoord;
}


