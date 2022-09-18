var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


router.get('/',indexController.display_index_data );

//FIX DELETION WHEN USER HAS ONE FOOD ITEM
//IF USER HAS ONE FOOD ITEM DELETE THE WHOLE JOURNAL
//ACCOMPLISHED WITH JOURNAL.LENGTH???
router.post('/', indexController.handle_deletion)



module.exports = router;