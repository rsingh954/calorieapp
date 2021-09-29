var express = require('express');
var router = express.Router();
//USE NODE-FETCH@2.6.1
const fetch = require('node-fetch');
const { route } = require('.');
const findFood = require('../api')

const API_KEY = 'UGmZY9ss0Ig2sM0eoBhEIhzJ7ihYmxtfI9lH8eyJ'

const items = {
  name: "test"
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/food', async function(req,res, next){
  res.send("test")

})


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
module.exports = router