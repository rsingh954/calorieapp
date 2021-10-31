var express = require('express');
var router = express.Router();
const UserModel = require('../models/User');
const Journal = require('../models/Journal');
let async = require("async");


/*REGISTRATION PAGE */

router.get('/registration', (req, res, next) => res.render('registration', {success: req.query.success, title: "Sign Up"}))

router.post('/registration', async (req, res, next) => {
  try{
    const user = new UserModel({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    const savedUser = await user.save();
    if(savedUser) return res.redirect('/')
    return next(new Error('Failed to save user'))
  }catch(err){
    return next(err)
  }
});



// router.get('account', (req, res) => res.render('users/account', {user: req.user}))

module.exports = router