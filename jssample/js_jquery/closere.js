var counter = function() {
	var count=0;
	return function(num){
		count = num!==undefined ? num : count;
		return count++;
	}
}();
