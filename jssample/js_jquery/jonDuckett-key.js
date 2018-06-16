$('body').append('<canvas id="canvas" width="100" height="100"></canvas>');
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var colors = ['orange', 'yellow', 'red', 'purple', 'blue', 'gree'];
var circle = function(x , y, radius, fill, color) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2, false);
	ctx.fillStyle = colors[color]; ctx.strokeStyle = colors[color];
	if(fill) {ctx.fill();} else { ctx.stroke();}
};
var x=20, y=20, rad=10, c=0, w=canvas.width, h=canvas.height, sp=5;
ctx.strokeRect(0,0,w,h);
circle(x,y,10,1,c);
var keyName = { 32: 'space', 13: 'enter', 37: 'left', 38: 'top', 39: 'right', 40: 'bottom' };
$('body').keydown(function(event) { 
	ctx.clearRect(0,0,w,h);
	ctx.strokeStyle = 'black'; ctx.strokeRect(0,0,w,h); ctx.strokeStyle = c;
	switch(event.keyCode) { 
		case 37: x-=sp; break; 
		case 38: y-=sp; break;
		case 39: x+=sp; break; 
		case 40: y+=sp; break;
		case 65: sp+=1; console.log(sp); break; // a
		case 83: sp>0 ? sp-=1 : sp=0; console.log(sp); break; // s
		case 81: rad+=1; console.log(rad); break; // q
		case 87: rad>1 ? rad-=1 : rad=1; console.log(rad); break; // w
	}
	if(x>w-rad) x-=10; if(x<rad) x+=10; if(y>h) y=0; if(y<0) y=h;
	circle(x,y,rad,1,0);
	// console.log(keyName[event.keyCode]);
	// console.log(event.keyCode);
});
