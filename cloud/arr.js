var arr_count = function(arr) {
	return "In array keep " + arr.length + " elements";
};
var arr_multi = function(arr) {
	var temp = 1;
	for(var i=0; i<=arr.length; i++) {
		temp = 2 + arr[i];
	}
	return "Number multi all array is " + temp;
}

module.exports.multiply = function(x, y) {
	return x*y;
}

module.exports.val = 234;

module.exports.arr_count = arr_count;
