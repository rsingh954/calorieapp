var express = require('express');
var router = express.Router();
//USE NODE-FETCH@2.6.1
const fetch = require('node-fetch');
const { errorMonitor } = require('stream');
const journal = require('../helper/journal')
require('dotenv').config()
const cache = [];
const API_KEY = process.env.FOOD_API_KEY



const handle_search = function(req, res, next){
    res.render('input')
  } 

const food_search = async function(req, res, next){
    let error;
    const url ='https://api.nal.usda.gov/fdc/v1/foods/search?api_key='+`${API_KEY}`+'&query='+ `${req.body.name}`;
   const options = {
     'method': "GET"
   };
   const result = await fetch(url, options)
     .then((r) => r.json())
     .catch(e => {
        error = e;
       console.error({
       'message': "Oooops",
        error: e
       })
     })
      res.render('food_list',{items: result.foods, errors: error})
  }

const get_food_detail = async function(req,res,next){
    let error;
    const url ='https://api.nal.usda.gov/fdc/v1/food/'+req.params.id+'?api_key='+`${API_KEY}`;
    const options = {
      'method': "GET"
    };
    const result = await fetch(url, options)
    .then((r) => r.json())
    .catch(e => {
      error = e;
      console.error({
      'message': "item not found",
       error: e
      })
    })
    //ADDING MOST RECENT RESULT TO BEGGINING OF OBJECT
    cache.unshift(result)
  
    res.render('item-detail',{title: result.description, items: result.foodNutrients, id: result.fdcId, error: error})
  }
  module.exports= {handle_search,food_search, get_food_detail}
  module.exports.cache = cache