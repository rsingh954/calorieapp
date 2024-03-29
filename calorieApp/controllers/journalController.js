var express = require('express');
var router = express.Router();
const Journal = require('../models/Journal')
const cache = require('./foodController')

let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];

const check_user_is_loggedin = async (req, res, err)=>{
    //CHECK IF USER IS LOGGED IN
    if(!res.locals.user){
        res.render('error', {error: err})
    }
    res.redirect('/')
}
const add_food_to_journal = async (req, res, next)=>{
    console.log(cache[0])
    const foodName = cache.cache[0].description
    const foodNutrients = cache.cache[0].foodNutrients
    let protein;
    let carbs;
    let cals;
    foodNutrients.filter((a)=>{
        if(a.nutrient.id == 1003){
            protein = a.amount
        }
        if(a.nutrient.id == 1008){
            cals = a.amount
        }
        if(a.nutrient.id == 1005){
            carbs = a.amount
        }            
    })
    //CHECK IF USER HAS A JOURNAL
    function user(){    
        let flag;  
     Journal.find({userId: res.locals.user._id, date: d}, (err, result) =>{
         console.log(result.length)
        if(err){
            console.log(err)
            next(err)
        }else{
            if(result.length === 0){
                const journal = new Journal();
                const jorunalEntry = {name:foodName, calories: cals,protein:protein, carbohydrates: carbs}
        
                journal.userId = res.locals.user._id
                journal.date =  d;
                journal.foods.push(jorunalEntry)
                journal.save(function (err){
                    if(err){return next(err); }
                })
            }else{
                const jorunalEntry = {name:foodName, calories: cals,protein:protein, carbohydrates: carbs};
                Journal.updateOne(
                 {userId: res.locals.user._id,
                 date: d},
                 {
                   $push: {
                     foods: jorunalEntry
                   }
                 },function(error, success){
                   if (error) {
                     console.log(error);
                 } else {
                     console.log(success);
                 }
                }
               )             
            }
        }
        })
        return res.locals.user._id
    }
    console.log('user is ' + user())
    res.redirect('/')
}
module.exports ={check_user_is_loggedin, add_food_to_journal}