console.log("Hello World!");
console.log(__dirname);
console.log(__filename);
var x = 0; 
if (x==0) console.log("work");
for(var i=1;i<3;i++)
	console.log(i);

setTimeout(function () {
	console.log("hi");
}, 2000);

function test() {
	console.log("It is function!");
}
var funcInVar = function() {
	test();
	console.log("It is function from variable");
};
//
function returnable(func) {
	func();
}

returnable(funcInVar);

var things = require('./arr');
console.log(things.val);
console.log(things.arr_count([3,2]));
