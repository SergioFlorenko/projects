document.write('<br>');
var word = prompt('word');
var wordTemp = [];
for(var i=0; i<word.length; i++) {
	wordTemp[i] = '_';
}
console.log(wordTemp);
while(word!=wordTemp.join('').toString()) {
	console.log(wordTemp);
	var letter = prompt('letter');
	for(var j=0; j<word.length; j++) {
		if(word[j] == letter) { wordTemp[j] = letter; }
	}
}
document.write('<br>');
document.write('You win!');

