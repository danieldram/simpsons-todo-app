'use strict';

var db = require('./__mongo-wrapper');
var Observable = require('rxjs').Observable;

class Conversions {
  constructor() {

  }

  find(click_id){
    return db.find(click_id, "conversions");
  }
  add(conversionObj){
    return db.insert(conversionObj, "conversions");
  }

  dump(){
    return db.find({}, "conversions");
  }

  approve(affiliate_click_id){
    var query = {$set:{status:'approved'}};
    return db.update(affiliate_click_id, query, 'conversions');
  }

  reject(affiliate_click_id){
    var query = {$set:{status:'reject'}}
    return db.update(affiliate_click_id, query, 'conversions');
  }

  pullPending(){
    return db.find({status:-1},'conversions');
  }

}

module.exports =  new Conversions();
