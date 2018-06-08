var fs = require('fs');
var myR = fs.createReadStream(__dirname +'/article.txt', 'utf8');
var myW = fs.createWriteStream(__dirname + '/news.txt');
// myR.on('data', function(chunk) {
// 	console.log("New data received:\n\n\n\n\n\n\n\n\n\n" + chunk);
// });
// myR.on('data', function(chunk) {
// 	console.log("chunk on flow");
// 	myW.write(chunk);
// });
myR.pipe(myW);
