var speak = function() {
	console.log(this.sound);
};
var cat = {
	sound: 'Mau',
	name: 'Kity',
	speak: speak
};
cat.speak();

var Car = function(x, y, src) {
	this.x = x;
	this.y = y;
	this.src = src;
};
Car.prototype.draw = function(car) {
	var carImg = '<img src="'+this.src+'.jpg" class="' + this.src + '">';
	this.carEl = $(carImg);
	this.carEl.css({
		position: 'absolute',
		left: this.x,
		top: this.y
	});
	$('body').append(this.carEl);
};
Car.prototype.mv = function(car) {
	this.x += car;
	this.carEl.css({
		left: this.x,
		top: this.y
	});
};
var tesla = new Car(20, 20, 'tesla', 1);
var nissan = new Car(20, 150, 'nissan', 2);
tesla.draw();
nissan.draw();
var rally = setInterval(function() {
	tesla.mv(Math.random()*4);
	nissan.mv(Math.random()*4);
	var eplt = $('.tesla').position().left;
	var epln = $('.nissan').position().left;
	var ww = $(window).width()-120;
	if(eplt>=ww || epln>=ww) clearInterval(rally);

}, 10);











var spow = function() {
	console.log(this.speed);
};
var Model = function(wheel, speed) {
	this.wheel = wheel;
	this.speed = speed;
};
var audi = new Model(4, 298);
var bmw = new Model(4, 345);
var volvo = new Model(4, 241);
