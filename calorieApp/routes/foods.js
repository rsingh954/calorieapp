var express = require('express');
var router = express.Router();
const foodController = require('../controllers/foodController')

router.get('/search',foodController.handle_search)
router.post('/search', foodController.food_search)
router.get('/food/:id', foodController.get_food_detail)



module.exports = router
