
var W = 350,
	H = 450;



var ball = {},
		gravity = 0.2,
		bounceFactor = 0.7;

ball = {
	x: W/2,
	y: 50,
	
	radius: 15,
	color: "red",
	
	// Velocity components
	vx: 0,
	vy: 1,
	
	draw: function() {

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
};

function clearCanvas() {
	ctx.clearRect(0, 0, W, H);
}

function update() {
	var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");
canvas.height = H; canvas.width = W;
	clearCanvas();
	ball.draw();
	
	ball.y += ball.vy;

	ball.vy += gravity;
	if(ball.y + ball.radius > H) {
		ball.y = H - ball.radius;
		ball.vy *= -bounceFactor;

	}
}

setInterval(update, 1000/60);
