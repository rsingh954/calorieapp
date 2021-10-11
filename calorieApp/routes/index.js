var express = require('express');
var router = express.Router();
const Journal = require('../models/Journal');
let async = require("async");
const userId = '616227cb9f4d1a993cd0e14c'
/* GET home page. */
router.get('/', function(req, res, next) {
  let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];
  Journal.find()
  .populate('foods')
  .exec(function(err,result){
    if(err){ return next(err)};
    res.render('index',{ title: "My Diary", date: d, items: result});
  })
});




module.exports = router;
