var express = require('express');
var router = express.Router();
const findFood= require('../api')
// const fetch = require('node-fetch')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/food', function(req,res, next){
  console.log(findFood())
  next()
})

module.exports = router