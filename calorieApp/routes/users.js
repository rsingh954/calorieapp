var express = require('express');
var router = express.Router();
const UserModel = require('../models/User');
const Journal = require('../models/Journal');
let async = require("async");
const passport = require('passport')
//CHECK IF USER IS LOGGED IN
function redirectIfLoggedIn(req, res, next){
  if(req.user) return res.redirect('/users/account');
  return next();
}

/*REGISTRATION PAGE */
router.get('/registration',redirectIfLoggedIn, (req, res, next) => res.render('registration', {success: req.query.success, title: "Sign Up"}))

router.post('/registration', async (req, res, next) => {
  try{
    const user = new UserModel({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    const savedUser = await user.save();
    if(savedUser){ 
      return res.redirect('/login')
    }
    return next(new Error('Failed to save user'))
  }catch(err){
    return next(err)
  }
});
//LOGIN 
router.get('/login',redirectIfLoggedIn, (req, res)=>{
  res.render('login', {title: 'Log In', errors: req.query.error})
})
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login?error=true',
}))

//LOGAHT
router.get('/logout', (req,res)=>{
  req.logOut();

  return res.redirect('/');
})

//ACOUNT OVERVIEW
router.get('/account',(req, res, next) =>{
  if(req.user) return next();
  return res.status(401).end();
},(req, res) => res.render('account', {user: req.user}))

module.exports = router