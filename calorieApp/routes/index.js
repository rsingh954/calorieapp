var express = require('express');
var router = express.Router();
const UserModel = require('../models/User');
const Journal = require('../models/Journal');
let async = require("async");
// const userId = '616226213993749ca7500aac'


/* GET home page. */
// router.get('/', function(req, res, next) {
//   let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];
//   Journal.find()
//   .populate('foods')
//   .exec(function(err,result){
//     if(err){ return next(err)};
//     res.render('index',{ title: "My Diary", date: d, items: result.sort((a,b) => a > b ? -1:1)});
//   })
// });

router.get('/', function(req, res, next) {
  req.session.visits = req.session.visits ? req.session.visits + 1 : 1;

  let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];
  Journal.find({userId: '616226213993749ca7500aac'})
  .exec(function(err,result){
    if(err){ return next(err)};
    res.render('index',{ title: "My Diary", date: d, items: result.sort((a,b) => a > b ? -1:1)});
  })
});




module.exports = router;
    