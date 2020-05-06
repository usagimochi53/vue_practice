const hostname = '0.0.0.0';
const port = 3000;

var express = require('express');
var app = express();
var ejs = require('ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static/src'));
app.set('view engine', 'ejs');

var listener = app.listen(port,function(){
	console.log(`Server running at http://${hostname}:${port}`);
});

app.get('/', function (req, res){
	res.sendFile(__dirname + '/public/index.html');
});

//app.get('/:tenantId', function (req, res){
				//  res.sendFile(__dirname + '/public/new.html');
				//  res.render(__dirname + '/public/new.', {data: req.params.tenantId});
				//})

app.get('/users', function (req, res){
	res.render(__dirname + '/public/registed_users.ejs');
});

app.get('/new/:tenantId', function (req, res){
	res.render(__dirname + '/public/new.ejs', {tenantId: req.params.tenantId});
});
