var express = require('express');
var router = express.Router();
//USE NODE-FETCH@2.6.1
const fetch = require('node-fetch');
const journal = require('../helper/journal')
require('dotenv').config()

const API_KEY = process.env.FOOD_API_KEY



//SEARCH FOR FOOD USING API
router.get('/search', function(req, res, next){
  res.render('input')
})

router.post('/search', async function(req, res, next){
  const url ='https://api.nal.usda.gov/fdc/v1/foods/search?api_key='+`${API_KEY}`+'&query='+ `${req.body.name}`;
 const options = {
   'method': "GET"
 };
 const result = await fetch(url, options)
   .then((r) => r.json())
   .catch(e => {
     console.error({
     'message': "Oooops",
      error: e
     })
   })
    const foods = result.foods;
    res.render('food_list',{items: result.foods})
})

//ITEM DETAIL PAGE
router.get('/food/:id' ,async function(req,res,next){
  console.log(req.body)
  const url ='https://api.nal.usda.gov/fdc/v1/food/'+req.params.id+'?api_key='+`${API_KEY}`;
  const options = {
    'method': "GET"
  };
  const result = await fetch(url, options)
  .then((r) => r.json())
  .catch(e => {
    console.error({
    'message': "item not found",
     error: e
    })
  })
  console.log(result.description)
  res.render('item-detail',{title: result.description, items: result.foodNutrients})
})

module.exports = router