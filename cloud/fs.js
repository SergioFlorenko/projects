var fs = require('fs');
/* var file_read = fs.readFile('txt', 'utf8', function(err, date) {
console.log(date);
});
var message = "Hi from variable rewrite";
fs.writeFile('some.txt', message, function(err,date) {
	console.log(message);
});

console.log('test');
var file_write = fs.writeFileSync('textFile', message);
console.log(file_read);	
var file_del = fs.unlink('some.txt', (err) => {
	if (err) throw err;
	console.log('successfully deleted File');
});
*/
var message = "Hi from variable rewrite, Ghh... ";
// fs.mkdir('newFolder', function(){
// 	fs.writeFile('./newFolder/some', message, (err) => {
// 		if (err) throw err;
// 		console.log('successfully create Directory and File');
// 	});
// });
// fs.rmdirSync('newFolder');
fs.unlink('./newFolder/some', function() {
	fs.rmdir('newFolder', function(err){
		if(err) throw err;
	});
});
