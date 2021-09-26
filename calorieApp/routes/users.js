var express = require('express');
var router = express.Router();
const findFood= require('../api')
// const fetch = require('node-fetch')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/food', async function(req,res, next){
  let d = await findFood
  let a = new Promise(d)
  console.log(a.then((b) => {return b.foods}))
})

module.exports = router