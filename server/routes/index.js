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
  res.render('index', { title: 'Express' })
});

router.post('/upload/song', (req, res)=>{
  var data = req.body
  var result_data = null;
  console.log('the data:', data)
  var stream = SongMetaDataDB.upsert({song_id:req.body.song_id}, req.body)
  stream.subscribe((result)=>{
    result_data = result;
    res.json({data:result_data});
  })

})

module.exports = router;
