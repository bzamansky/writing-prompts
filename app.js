var express = require('express');
var path = require('path');
var api = require('./api.js');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req,res){
	//res.send(api.getPrompts());
	res.render('index',{title:'Hello Stuff'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
