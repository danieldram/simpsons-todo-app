// Connection URL
require('dotenv').load()
var url = process.env.mongodb


//Connect to MongoDB
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var db_ref = null;
var Observable = require('rxjs').Observable;

//Use connect method to connect to the Server



var source = Observable.create((observer)=>{
  MongoClient.connect(url, function(err, db) {
    if(!err){
      console.log("Connected correctly to server");
      observer.next(db);
      observer.complete();
    }else{
      assert.equal(null, err);
      observer.error(err);
    }
  });
});


module.exports = source;
