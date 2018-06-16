describe("pow", function() {
	describe("auto complete variable", function(){
		function makeTest(x,n) {
			var expected = 1;
			for(var i=0; i<n; i++) {
				expected *= x;
			}
			it("in expected " + x + " on " + n + " level result: " + expected, function() {
				assert.equal(pow(x,n), expected);
			});}
		for(var i=2; i<6; i++) {
			for(var z=2; z<6; z++) {
				makeTest(i,z);
			}
	}});
	it("check x=0, n=1", function() {
		assert(pow(0,1), "what you think?" );
	});
	it("check for 0=NaN", function() {
		assert(isNaN(pow(2,-1)), "pow don't NaN");
	});
});
