var request = require('request');
var exports = module.exports = {};

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/playlists';

function populate(db, callback){
	for (var i = 0; i < 10; i++) {
		insertPrompt(db, callback);
	};
}

function insertPrompt(db, callback){
	getPromptAPI(function(prompt){
		db.collection('promptsv1').insertOne({
			"prompt" : prompt
		}, function(err,result){
			assert.equal(err,null);
			console.log("Inserted a prompt");
			callback(result);
		})
	});
	
}

function getPromptAPI(callback){
	var url = "http://ineedaprompt.com?api";
	request.get(url, function(err, request,body){
		//console.log(body);
		callback(body);
	});
}

function getPromptDB(db,callback){
	var prompts = db.collection("promptsv1").find();
	prompts.each(function(err,p){
		assert.equal(err,null);
		if (p != null){
			console.dir(p.prompt);
		}
		else{
			callback;
		}
	});
}

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	//populate(db, function(){});
	getPromptDB(db, function(){});
});



