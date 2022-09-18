var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController')

//NEED TO FIX IF NO USER IS LOGGED IN WOW!!!
router.get('/', homeController.get_home)
router.post('/', homeController.display_home_data)
  

module.exports = router;