$('body').append('<canvas id="canvas" width="400" height="400"></canvas>');
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Ball = function() {
	this.x = 100;
	this.y = 100;
	this.xSpeed = Math.random()*2-1;
	this.ySpeed = Math.random()*2-1;
	this.color = Math.round(Math.random()*5);
};
var colors = ['orange', 'yellow', 'red', 'purple', 'blue', 'gree'];
var circle = function(x , y, radius, fill, color) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2, false);
	ctx.fillStyle = colors[color]; ctx.strokeStyle = colors[color];
	if(fill) {ctx.fill();} else { ctx.stroke();}
};
Ball.prototype.draw = function() { circle(this.x,this.y,10,true, this.color); };
Ball.prototype.move = function() { this.x += this.xSpeed; this.y += this.ySpeed; };
Ball.prototype.collision = function() { 
	if(this.x<0 || this.x>400) this.xSpeed = -this.xSpeed;
	if(this.y<0 || this.y>400) this.ySpeed = -this.ySpeed;
};
var ball = [];
for(var i=0; i<100; i++) {
	ball[i] = new Ball();
}
setInterval(() => {
	ctx.clearRect(0,0,400,400);
	ctx.strokeRect(0,0,400,400);
	for(var j=0; j<ball.length; j++) {
		ball[j].draw();
		ball[j].move();
		ball[j].collision();
	}
}, 10);
