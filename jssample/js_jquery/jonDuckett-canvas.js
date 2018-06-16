$('body').append('<canvas id="canvas" width="400" height="400"></canvas>');
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
$('body').append('<canvas id="canvas-s" width="400" height="400"></canvas>');
var canvasS = document.getElementById("canvas-s");
var ctxs = canvasS.getContext("2d");
$('body').append('<canvas id="canvas-t" width="400" height="400"></canvas>');
var canvasT = document.getElementById("canvas-t");
var ctxt = canvasT.getContext("2d");

var painBorder = function(count) {
	ctx.fillStyle = "red";
	ctx.fillRect(0,0,10,count);
	ctx.fillRect(count,0,10,count);
	ctx.fillRect(0,0,count,10);
	ctx.fillRect(0,count,count,10);
	ctx.fillRect(count,count,10,10);
};
// painBorder(200);
var painHuman = function() {
	ctx.lineWidth = 4;
	ctx.strokeRect(20,20,20,20);
	ctx.beginPath();
	ctx.moveTo(30,40);
	ctx.lineTo(30,70);
	ctx.lineTo(20,100);
	ctx.moveTo(30,70);
	ctx.lineTo(40,100);
	ctx.moveTo(30,50);
	ctx.lineTo(10,40);
	ctx.moveTo(30,50);
	ctx.lineTo(50,40);
	ctx.stroke();
};
// painHuman();

var paindot = function(arr) {
	ctx.lineWidth = 2;
	ctx.beginPath();
	for(var i=0; i<arr.length; i++) {
		ctx.lineTo(arr[i][0], arr[i][1]);
	}
	ctx.stroke();
};
var arr = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];
// paindot(arr);

var clearAndResize = () => {
	var position = 0, size = 0;
	setInterval(() => {
		ctx.clearRect(0,0,1000,1000);
		ctx.fillRect(position,0,size,size);
		position++; size++;
		if(position>200) { position = 0; size = 0; }
	}, 30);
};

/* bee */
var circle = (el,x,y,rad,fill,color,lw) => {
	el.beginPath();
	el.lineWidth = lw;
	el.fillStyle = color; el.strokeStyle = color;
	el.arc(x, y, rad, 0, Math.PI*2, true);
	fill ? el.fill() : el.stroke();
};
var x=37,y=37;
var a=37,b=37;
var c=37,d=37;
var bee = (el,x,y) => {
	circle(el,x,y,20,1,'yellow',1); // body
	circle(el,x,y,20,0,'black',2);
	circle(el,x-5,y-5,3,0,'black',4); // eye
	circle(el,x+5,y-5,3,0,'black',4);
	circle(el,x+15,y-25,10,0,'black',4); // ear
	circle(el,x-15,y-25,10,0,'black',4);
};
var update = cor => {
	var ran = Math.round(Math.random()*2);
	ran === 1 ? cor += 1 : cor -=1;
	if(cor>363) cor = 363;
	if(cor<37) cor = 37;
	return cor;
};
var ch = (el,x,y) => {
	setInterval(() => { 
		// el.clearRect(0,0,400,400);
		bee(el,x,y);
		x = update(x);
		y = update(y);
	}, 10);
};
ch(ctx,x,y);
ch(ctxs,a,b);
ch(ctxt,c,d);




