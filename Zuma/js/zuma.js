
var colorArray = [ "red", "blue", "orange", "green" ];

	var canvas;
	var context;

function play() {
	console.log("Yeh!");
	init();
	// stop
	// exit
}

function init () {
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	this.factory = new Factory(5,50,50);  // Factory tipi object sarqel
	this.frog = new Frog(200,200);
	this.home = new Home(100,100);


}


function Frog (x,y) {
	this.x = x;
	this.y = y;
	this.patron = new Ball(this.x,this.y);

/*	var myImg = new Image();
	myImg.src='images/gun.png';
	console.log(myImg.src);
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	console.log(c);
	console.log(ctx);
		myImg.onload = function () {
		ctx.drawImage(myImg,this.x,this.y,45,25);
	}*/
}

Frog.prototype.fire = function () {
	this.patron = new Ball(this.x,this.y);
}



function Ball (beginCenterX, beginCenterY) {

	var centerX; 
	var centerY; 
	this.radius = 15; // sharavix
	  /*context.beginPath();
      context.arc(centerX, centerY, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();*/
}


function Factory (amtBall, factoryXCoord, factoryYCoord) {
	this.amtBall = amtBall;
	this.xCoord = factoryXCoord;
	this.yCoord = factoryYCoord;
	this.spanvox = new Ball(this.x,this.y);

}

function Home (homeXCoord,homeYCoord) {
	this.xCoord = homeXCoord;
	this.yCoord = homeYCoord;
	console.log(this.xCoord,this.yCoord);
	var homeImage = new Image();
	homeImage.src='http://habrahabr.ru/i/nocopypast.png'; //http://jsfiddle.net/shpaker/uwCFS/
	context.clearRect(100,100,500,500);
	homeImage.onload = function () {
		context.drawImage(homeImage,0,0);
	}
}



