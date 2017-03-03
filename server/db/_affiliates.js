'use strict';

var db = require('./__mongo-wrapper');
var Observable = require('rxjs').Observable;
var apps = require('./_apps');

class Affiliates {
  constructor() {

  }
  dump(){
    return db.find({}, "affiliates");
  }

  find(affiliate){
    return db.find(affiliate, "affiliates");
  }
  add(affiliate){
    return db.insert(affiliate, "affiliates");

  }
  addClick(affiliate, offer_id){
    var inc =`apps.${offer_id}.clicks`;
    var set_offer_id = `apps.${offer_id}.offer_id`;

    var query = {$inc:{[inc]:1}};
    var app_name = null;
    var findApp = apps.find({offer_id:offer_id}).flatMap((app)=>{
      console.log(app)
      app = app[0];
      var name = `apps.${offer_id}.name`
      var query = {$set:{[name]:app.name, [set_offer_id]:offer_id}};
      return db.update(affiliate, query, 'affiliates');
    });

    var updateDB = db.update(affiliate, query, 'affiliates');
    return Observable.concat(findApp, updateDB);
  }

  update(affiliate, updateObj){
    var query = {$set:updateObj};
    return db.update(affiliate, query, 'affiliates');
  }

  push(affiliate, updateObj){
    var query = {$push:updateObj};
    return db.update(affiliate, query, 'affiliates');
  }

  upsert(affiliate, updateObj){
    var query = {$push:updateObj};
    return db.uppsert(affiliate, query, 'affiliates')
  }

  addToSet(affiliate, updateObj){
    var query = {$addToSet:updateObj};
    return db.update(affiliate, query, 'affiliates');
  }

  pull(affiliate, updateObj){
    var query = {$pull:updateObj};
    return db.update(affiliate, query, 'affiliates');
  }

}

module.exports =  new Affiliates();
