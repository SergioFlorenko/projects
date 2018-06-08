var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {
	console.log("URL page: " + req.url + " and dirname: " + __dirname);
	if (req.url === '/index.html' || req.url === '/ind.html' || req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		// var myReadInd = fs.createReadStream(__dirname + '/ind.html', 'utf8');
		fs.createReadStream(__dirname + '/article.txt').pipe(res);
		// myReadInd.pipe(res);
	} else if (req.url === '/about') {
		res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
		fs.createReadStream(__dirname + '/txt').pipe(res);
	} else if (req.url === '/simple') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/simple.html').pipe(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
		res.end('404');
	}


	// res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	// var obj = {
	// 	model: 'audi',
	// 	wheels: '4',
	// 	speed: '321'
	// }
	// res.end(JSON.stringify(obj));
	// res.end('Hello World');
});
server.listen(3001, '127.0.0.1');
console.log("read port 3000");
