var express = require('express');
var router = express.Router();
const UserModel = require('../models/User');
const Journal = require('../models/Journal');
let async = require("async");
let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];
const Mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;;
const { ObjectID } = require('bson');


/*

  TODO
  - redirect to a landing page
  
*/
//we redirect to a home page

const display_index_data = function(req, res, next) {
    req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
    if(res.locals.user){
    Journal.find({userId: res.locals.user._id})
    .exec(function(err,result){
      if(err){ return next(err)};
      let resArray = Array.from(result);
      let sum = 0;
      let foodies = resArray.forEach((food) => {
        let foods = food.foods
        sum += Number(!foods[0]) ? 0 : Number(foods[0].calories)
      })
    res.render('index',{ title: "My Diary", date: d, items: result.sort((a,b) => a > b ? -1:1), user: res.locals.user});
    })
  }else if(res.locals[0] === undefined){
    res.redirect('/users/registration')
  }
}

const handle_deletion = async function(req, res, next){
    let myId = ObjectId(req.body.itemid);
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
   }

module.exports ={display_index_data, handle_deletion}
