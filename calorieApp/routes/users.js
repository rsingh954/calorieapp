var express = require('express');
var router = express.Router();
const findFood = require('../api')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/food', function(req, res, next) {
  console.log(findFood('cheese'))
});


module.exports = router;
