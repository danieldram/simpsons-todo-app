'use strict';

var db = require('./__mongo-wrapper');
var Observable = require('rxjs').Observable;


class User{
  constructor() {

  }

  add(user){
    return db.insert(user, "users");
  }

  push(user, updateObj){
    var query = {$push:updateObj};
    return db.update(user, query, 'users');
  }

  addToSet(user, updateObj ){
    var query = {$addToSet:updateObj};
    return db.update(user, query, 'users');
  }

  pull(user, updateObj){
    var query = {$pull:updateObj};
    return db.update(user, query, 'users');
  }

  upsert(user, updateObj){
    var query = {$set:updateObj};
    return db.uppsert(user, query, 'users');
  }

  find(user){
    return db.find(user, "users");
  }

  dump(){
    return db.find({},"users");
  }


}

module.exports = new User();
