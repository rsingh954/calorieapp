var express = require('express');
var router = express.Router();
const journalController = require('../controllers/journalController')


router.get('/', journalController.check_user_is_loggedin)
router.get('/:id/add', journalController.add_food_to_journal)

module.exports = router
