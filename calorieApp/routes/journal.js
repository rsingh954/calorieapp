var express = require('express');
var router = express.Router();
const Journal = require('../models/Journal')
const cache = require('./foods')

let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];

// function getFoodDetails(id){

// }
router.get('/', async (req, res, err)=>{
    //CHECK IF USER IS LOGGED IN
    if(!res.locals.user){
        res.render('error', {error: err})
    }
    console.log(req.body)
    res.redirect('/')
})

router.get('/:id/journal', async (req, res, next)=>{
    const foodName = cache.cache[0].description
    const foodNutrients = cache.cache[0].foodNutrients
    //CHECK IF USER HAS A JOURNAL
    const user = await Journal.find({userId: res.locals.user._id})
    const date = await Journal.find({date: d})
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
    if(user.length <= 0 || date.length <= 0 ){
        const journal = new Journal();

        const jorunalEntry = {name:foodName, calories: cals,protein:protein, carbohydrates: carbs}

        journal.userId = res.locals.user._id
        journal.date =  d;
        journal.foods.push(jorunalEntry)

        journal.save(function (err){
            if(err){return next(err); }
        })
    }else if(user.length > 0 ){
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
    res.redirect('/')
})

module.exports = router
