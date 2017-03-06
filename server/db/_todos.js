'use strict';

var db = require('./__mongo-wrapper');
var Observable = require('rxjs').Observable;


class Todos{
  constructor() {

  }

  delete(todo){
    
    return db.delete(todo, "todos")
  }

  add(todo){
    return db.insert(todo, "todos");
  }

  push(todo, updateObj){
    var query = {$push:updateObj};
    return db.update(todo, query, 'todos');
  }

  addToSet(todo, updateObj ){
    var query = {$addToSet:updateObj};
    return db.update(todo, query, 'todos');
  }

  pull(todo, updateObj){
    var query = {$pull:updateObj};
    return db.update(todo, query, 'todos');
  }

  upsert(todo, updateObj){
    var query = {$set:updateObj};
    return db.uppsert(todo, query, 'todos');
  }

  find(todo){
    return db.find(todo, "todos");
  }

  dump(){
    return db.find({},"todos");
  }


}

module.exports = new Todos();
