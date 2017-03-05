var express = require('express')
var router = express.Router()
var path = require('path');

const mock = [
  {todo:'stuff', id:1}
]

router.post('/create', (req, res)=>{

})

router.get('/get/:username', (req, res)=>{
  res.json({success:true, data:mock})
})

router.post('/update', (req, res)=>{

})

router.post('/delete', (req, res)=>{

})
module.exports = router;
