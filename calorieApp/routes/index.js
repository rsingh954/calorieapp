var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];

  res.render('index', { title: 'Caddie', date: d});
});



module.exports = router;
