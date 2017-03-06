'use strict';
var connect = require('./__connection');
var assert = require('assert');
var Observable = require('rxjs').Observable;

class MongoWrapper{

  constructor(){
    this.db = null;
    connect.subscribe((db)=>{
      this.db = db;
    })
  }

  insert(doc, collection){
    var source = Observable.create((observer)=>{
      var inserts = [];
      inserts.push(doc);
      var db = this.db.collection(collection);

      db.insertMany(inserts, (err, result)=>{
        if(!err){
          observer.next(result);
          observer.complete();
        }else{
          console.log(err)
          observer.error(err);
        }
      });
    });
    return source;
  }


  delete(doc, collection){
    var source = Observable.create((observer)=>{
      var db = this.db.collection(collection)

       db.deleteOne(doc, (err, resp)=>{
         if(!err && !!resp.result.ok) {
           observer.next(resp)
           observer.complete()
         }else{
           console.log(err)
           observer.error(err)
         }
       })
    });
    return source;
  }

  find(doc, collection){
    var source = Observable.create((observer)=>{
      var db = this.db.collection(collection);
      console.log(doc);
      db.find(doc).toArray((err, docs)=>{
        if(!err && docs.length > 0){
          observer.next(docs);
          observer.complete();
        }else{
          console.log('mongo find error: ', err)
          observer.error(err);
        }
      });
    });
    return source;
  }

  update(search, updateObj, collection){
    var source = Observable.create((observer)=>{
      var db = this.db.collection(collection);
      db.update(search, updateObj, (err, result)=>{
        if(!err){
          observer.next(result);
          observer.complete();
        }else{
          console.log(err)
          observer.error(err);
        }
      });

    });
    return source;
  }

  upsert(appArray){
    var apps = Observable.of(appArray).flatMap(data=>data);
    var stream = apps.switchMap(db.update);
    return stream;
  }

  uppsert(search, updateObj, collection){
    var source = Observable.create((observer)=>{
      var db = this.db.collection(collection);
      db.update(search, updateObj, {upsert:true},(err, result)=>{
        if(!err){
          observer.next(result);
          observer.complete();
        }else{
          observer.error(err)
        }
      });
    });
    return source;
  }



}

module.exports = new MongoWrapper();
