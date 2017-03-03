'use strict';

var db = require('./__mongo-wrapper');
var Observable = require('rxjs').Observable;

class ClickID {
  constructor() {

  }

  find(click_id){
    return db.find(click_id, "click_ids");
  }
  add(click_idObj){
    return db.insert(click_idObj, "click_ids");

  }

  addPostbackTime(click_id){
    var postback = {postback_time:Date.now()};
    var query  = {$set:postback};
    return db.update(click_id, query, 'click_ids');
  }

  dump(){
    return db.find({}, "click_ids");
  }
}

module.exports =  new ClickID();
