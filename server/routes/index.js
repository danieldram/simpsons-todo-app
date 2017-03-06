var express = require('express')
var router = express.Router()
var path = require('path');

/* GET home page. */

router.get('/static/:dir/:filename', (req, res)=>{

  var dir = req.params.dir
  var filename = req.params.filename
  console.log(path.join(__dirname, `../public/${dir}/${filename}`))
  res.sendFile(path.join(__dirname, `../public/${dir}/${filename}`))

})

router.get('/', function(req, res, next) {
  res.render('index')
});



module.exports = router;
