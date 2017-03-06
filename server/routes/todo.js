var express = require('express')
var router = express.Router()
var path = require('path');

const todos_db = require('../db/_todos')


router.post('/add/:username', (req, res)=>{
  const username = req.params.username
  let result = null
  let todo = Object.assign({},req.body)

  todo.username = username
  const stream = todos_db.upsert({username:username, id:todo.id}, todo)

  const next = (resp) => result=resp
  const err = (err) => res.json(err)
  const complete = () => res.json({success:true, data:[]})
  stream.subscribe(next, err, complete)

})

router.get('/get/:username', (req, res)=>{
  let result = null
  const username = req.params.username
  const stream = todos_db.find({username:username})

  const next = (resp) => result=resp
                          .map(o=>{delete o._id; return o})
                          .map(o=> {delete o.username; return o})
                          
  const err = (err) => res.json(err)
  const complete = () => {
    console.log(result)
    res.json({success:true, data:result})
  }

  stream.subscribe(next, err, complete)

})

router.post('/update/:username/:id', (req, res)=>{
  let result = null
  const username = req.params.username
  const todo_id = req.params.id
  const todo = Object.assign({},req.body)

  const stream = todos_db.upsert({username:username, id:todo.id}, todo)

  const next = (resp) => result=resp
  const err = (err) => res.json(err)
  const complete = () => res.json({success:true, data:[]})
  stream.subscribe(next, err, complete)
})

router.delete('/delete/:username/:id', (req, res)=>{
  let result = null
  const username = req.params.username
  const todo_id = req.params.id

  const stream = todos_db.delete({username:username, id:todo_id})

  const next = (resp) => result=resp
  const err = (err) => res.json(err)
  const complete = () => res.json({success:true, data:[]})

  stream.subscribe(next, err, complete)



})
module.exports = router;
