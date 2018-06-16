$('body').append('<canvas id="canvas" width="400" height="400"></canvas>');
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var w=canvas.width, h=canvas.height, sn=0, bs=10;
var wb = w/bs, hb = h/bs; // width and height in blocks
var directions = { 37: 'left', 38: 'up', 39: 'right', 40: 'down' };
var Block = function(col,row) {
	this.col = col;
	this.row = row;
};
var Snake = function() {
	this.segments = [new Block(7,5), new Block(6,5), new Block(5,5)];
	this.direction='right'; this.nextDirection='down';
};
var Apple = function() {
	this.position = new Block(10,10);
};
Apple.prototype.draw = function() {
	this.position.drawCircle('limeGreen');
};
Apple.prototype.move = function() {
	var randomCol = Math.floor(Math.random()*(wb-2)+1);
	var randomRow = Math.floor(Math.random()*(hb-2)+1);
	this.position = new Block(randomCol, randomRow);
};
Snake.prototype.draw = function() { // methods for Snake
	for(var i=0; i<this.segments.length; i++) {
		this.segments[i].drawSquare('blue');
	}
};
Snake.prototype.move = function() {
	var head = this.segments[0];
	var newHead;
	// this.direction = this.nextDirection;
	switch(this.direction) {
		case 'right': newHead = new Block(head.col+1, head.row); break;
		case 'left': newHead = new Block(head.col-1, head.row); break;
		case 'up': newHead = new Block(head.col, head.row-1); break;
		case 'down': newHead = new Block(head.col, head.row+1); break;
	}
	if(this.collision(newHead)) { go(); return; }
	this.segments.unshift(newHead);
	if(newHead.equal(apple.position)) { sn++; apple.move(); } else { this.segments.pop(); }
};
Snake.prototype.collision = function(head) {
	var leftCollision = (head.col === 0);
	var rightCollision = (head.col === wb-1);
	var topCollision = (head.row === 0);
	var bottomCollision = (head.row === hb-1);
	var wallCollision = leftCollision || rightCollision || topCollision || bottomCollision;
	var selfCollision = false;
	for(var i=0; i<this.segments.length; i++) {
		if(head.equal(this.segments[i])) { selfCollision = true; }
	}
	return selfCollision || wallCollision;
};
Snake.prototype.setDirection = function (newDirection) {
	console.log(newDirection);
	if(this.direction === 'up' && newDirection === 'down') {return;}
	else if(this.direction == 'down' && newDirection == 'up') {return;}
	else if(this.direction == 'left' && newDirection == 'right') {return;}
	else if(this.direction == 'right' && newDirection == 'left') {return;}
	this.direction = newDirection;
};
Block.prototype.drawSquare = function(color) { // methods for Block
	var x = this.col * bs, y = this.row * bs;
	ctx.fillStyle = color;
	ctx.fillRect(x,y,bs,bs);
};
Block.prototype.drawCircle = function(color) {
	var cx = this.col*bs+bs/2, cy = this.row*bs+bs/2;
	ctx.fillStyle = color;
	circle(cx,cy,bs/2,true);
};
Block.prototype.equal = function(otherBlock) {
	return this.col === otherBlock.col && this.row === otherBlock.row;
};

$('body').keydown(function(event) {
	var newDirection = directions[event.keyCode];
	// console.log(newDirection);
	if(newDirection !== undefined) { snake.setDirection(newDirection); }
});
var circle = function(cx,cy,rad,fill) {
	ctx.fillStyle = this.color;
	ctx.arc(cx,cy,rad,0,Math.PI*2,true);
	fill ? ctx.fill() : ctx.stroke();
};
var drawBorder = function() { // simple function for border, score and game over
	ctx.fillStyle = 'gray';
	ctx.fillRect(0,0,w,bs);
	ctx.fillRect(0,0,bs,h);
	ctx.fillRect(0,h-bs,w,bs);
	ctx.fillRect(w-bs,0,bs,h);
};
var score = function() {
	ctx.font = '24px Courier';
	ctx.fillStyle = 'black';
	ctx.fillText('Score: '+ sn, bs, bs*3);
};
var go = function() {
	clearInterval(intervalId);
	ctx.fillText('Game over!', bs, hb*bs/2); // game over vertical-align
	ctx.font = '34px Courier';
	ctx.fillStyle = 'black';
};

var snake = new Snake();
var apple = new Apple();
var intervalId = setInterval(function() {
	ctx.clearRect(0,0,w,h);
	score();
	snake.move();
	snake.draw();
	apple.draw();
	drawBorder();
}, 100);
