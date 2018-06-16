var today = new Date();
var now = today.getHours();
var greeting;
if(now>18) { greeting='good evening'; 
} else if(now>12) { greeting='good after noon'; 
} else if(now>7) { greeting='good morning'; 
} else { greeting='good night'; }
document.write("<h3 id='logo'> hello " + greeting + " </h3>");

var fractal = function(x) {
	return (x!=1) ? x * fractal(x-1) : 1;
}
console.log(fractal(5));

/* Nick Morgan */
var catModsi = function(count) {
	for(var i=1; i<=count; i++) {
		(i!=count) ? document.write(i + ' =^.^=, ') : document.write(i + ' =^.^=');
	}
};
catModsi(10);

var arrLetter = 'ad';
var lengthWord = 2;
var lib=[], err=[];
for(var i=0; i<12; i++) {
	var word='';
	for(var z=0; z<lengthWord; z++) {
		word += arrLetter.charAt(Math.round(Math.random()*arrLetter.length));
	}
	(word.length == lengthWord) ? lib[i] = word : err.push = word;
}
console.log(lib);
for(var x=0; x<lib.length; x++) {
	if(lib[x]=='empty') { lib[x]='e'; }
	for(var y=x+1; y<lib.length-x; y++) {
		if(lib[x]==lib[y]) { lib[x]=''; }
	}
}
var temp = lib.sort();
for(var i=0; i<lib.length; i++) {
	if(i==10) { document.write('<br>'); }
	document.write(temp[i]+', ');
}
// why there is word from two letter?

var str = 'I duck, but I will be good programer';
var strUp = '';
for(var i=0; i<str.length; i++) {
	if(str[i]=='i') { strUp += 1; }
	else if(str[i]=='a') { strUp += 4; }
	else if(str[i]=='e') { strUp += 3; }
	else if(str[i]=='o') { strUp += 0; }
	else { strUp += str[i]; }
}
console.log(str + ' - ' + strUp);
	
var ran = function(st,en) {
	var res=st-1;
	while(res<st) { res = Math.floor(Math.random()*en+1); }
	return res;
}
for(var i=0; i<100; i++) { if(i%100==0) document.write('<br>'); document.write(ran(2,5)); }








