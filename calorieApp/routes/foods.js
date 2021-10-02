var express = require('express');
var router = express.Router();
//USE NODE-FETCH@2.6.1
const fetch = require('node-fetch');
let journal = []

const API_KEY = 'UGmZY9ss0Ig2sM0eoBhEIhzJ7ihYmxtfI9lH8eyJ'



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
    console.log("response:" , foods)
    res.render('food_list',{items: result.foods})
})

//ITEM DETAIL PAGE
router.get('/food/:id' ,function(req,res,next){
  res.render('item-detail')
})

module.exports = router