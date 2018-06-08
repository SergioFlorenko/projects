var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req,res) {
	res.sendFile(__dirname + "/ind.html");
});
app.get('/news', function(req,res) {
	res.send("Hello from news");
});
app.get('/news/:id', function(req,res) {
	res.render('news', {newsId: req.params.id});
	// res.send('ID this page: ' + req.params.id);
});

app.listen(3001);
