var events = require('events');
var util = require('util');
var myEm = new events.EventEmitter();

myEm.on('some_event', function(text) {
	console.log(text);
});
myEm.emit('some_event', 'Done');

var Cars = function(model) {
	this.model = model;
};
util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('AUDI');
var volvo = new Cars('Volvo');

var cars = [bmw, audi, volvo];
cars.forEach(function(car) {
	car.on('speed', function(text) {
		console.log(car.model + " speed is " + text);
	});
});

bmw.emit('speed', '231 km');
console.log(bmw.model, bmw.speed); // bmw.speed is not available
