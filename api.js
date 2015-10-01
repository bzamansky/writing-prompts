var request = require('request');
var exports = module.exports = {};

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/playlists';

function populate(db, callback){
	for (var i = 0; i < 30; i++) {
		insertPrompt(db, callback);
	};
}

function insertPrompt(db, callback){
	var prompt = getPrompt();
	db.collection('promptsv1').insertOne({
		"prompt" : prompt
	}, function(err,result){
		assert.equal(err,null);
		console.log("Inserted a prompt");
		callback(result);
	})
}


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  populate(db, function(){
  	db.close();
  });
});

function getPrompt(){
	var url = "http://ineedaprompt.com?api";
	request.get(url, function(err, request,body){
		return body;
	});
}

