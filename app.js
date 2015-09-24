var express = require('express');
var api = require('./api.js');

var app = express();

app.get('/', function(req,res){
	res.send(api.getPrompts());
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
