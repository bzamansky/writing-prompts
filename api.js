var request = require('request');
var exports = module.exports = {};

exports.getPrompts = function(req,res,next){
	var url = "http://ineedaprompt.com?api&prompt=15";
	request.get(url, function(err, request,body){
		console.log(body);
	});
}

