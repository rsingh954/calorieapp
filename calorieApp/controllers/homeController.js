var express = require('express');
var router = express.Router();
const UserModel = require('../models/User');
const Journal = require('../models/Journal');
let async = require("async");
let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];
const Mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;;

//this page just allows us to select a journal entry from a drop down menu
const get_home = function(req, res, next) {
    req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
    if(res.locals.user){
    Journal.find({userId: res.locals.user._id})
    .exec(function(err,result){
      if(err){ return next(err)};
    res.render('home',{  items: result.sort((a,b) => a > b ? -1:1), });
    })
  }else{
    res.render('home')
  }
  
}
const display_home_data = function(req, res, next){
    req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
    if(res.locals.user){
    Journal.find({userId: res.locals.user._id, date: req.body.date})
    .exec(function(err,result){
      if(err){ return next(err)};
      let resArray = Array.from(result);
      let sum = 0;
      let foodies = resArray.forEach((food) => {
        let foods = food.foods
        sum += Number(!foods[0]) ? 0 : Number(foods[0].calories)
      })
    res.render('index',{ title: "My Diary", date: req.body.date, items: result.sort((a,b) => a > b ? -1:1), user: res.locals.user});
    })
  }else{
    res.render('home')
  }
}

module.exports ={get_home, display_home_data }