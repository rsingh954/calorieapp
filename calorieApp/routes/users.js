var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Journal = require('../models/Journal');
let async = require("async");
const passport = require('passport')

function redirectIfLoggedIn(req, res, next) {
  if (req.session.user) {
    return res.redirect('/home');
  }
  next();
}

/*REGISTRATION PAGE */
router.get('/registration', redirectIfLoggedIn, (req, res, next) => res.render('registration', {success: req.query.success, title: "Sign Up"}))


router.post('/registration', async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await user.save();
    if (savedUser._id) {
      console.log("success");
      // Log the user in
      req.login(savedUser, (err) => {
        if (err) return next(err);
        return res.redirect('/home');
      });
    } else {
      return next(new Error('Failed to save user'));
    }
  } catch (err) {
    return next(err);
  }
});


//LOGIN 
router.get('/login',redirectIfLoggedIn, (req, res)=>{
  if (req.user) {
    res.redirect('/');
  } else {
    res.render('login', { title: 'Log In', errors: req.query.error });
  }  
})
// router.post('/login',  passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/users/login?error=true',
// }))
router.post('/login', (req, res, next) => {
  console.log('Received request:', req.body);
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    console.log(info)
    if (!user) { return res.redirect('/users/login?error=true'); }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      console.log('Redirecting...')
      return res.redirect('/');
    });
  })(req, res, next);
});

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