var express = require('express');
var router = express.Router();
const UserModel = require('../models/User');
const Journal = require('../models/Journal');
let async = require("async");
let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];
const Mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;;
const { ObjectID } = require('bson');

router.get('/', function(req, res, next) {
  req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
  if(res.locals.user){
  Journal.find({userId: res.locals.user._id})
  .exec(function(err,result){
    if(err){ return next(err)};
    console.log(result)
    res.render('index',{ title: "My Diary", date: d, items: result.sort((a,b) => a > b ? -1:1), user: res.locals.user});
  })
}else{
  res.render('home')
}
});

router.post('/', async function(req, res, next){
  console.log(req.body)
  console.log(JSON.stringify(res.locals.user._id))
  let myId = ObjectId(req.body.itemid);
  console.log(myId)
//  Journal.find({"userId": res.locals.user._id, "foods._id": myId}, function(err, result){
//    if(err){
//      console.log(err)
//    }else{
//     console.log(result)
//    }
//    res.redirect('/')
//  })
  Journal.findOneAndUpdate({
    "userId": res.locals.user._id,
    "date":req.body.date
  },
  {
    "$pull":{
      "foods":{
        "_id": myId
      }
    }
  },function(err, result){
        if(err){
          console.log(err)
        }else{
         console.log(result)
        }
      })
  res.redirect('/')
 })



module.exports = router;