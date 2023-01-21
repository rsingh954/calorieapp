const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const userModel = require('../models/User');


passport.use(new LocalStrategy({usernameField: 'email'}, async (username, password, done )=>{
    try{
        const user = await userModel.findOne({email : username}).exec()
        if(!user){
            return done(null, false, {message: 'Invalid User'})
        }
        const passwordOk = await user.comparePassword(password);
        if(!passwordOk){
            return done(null, false, {message: "Invalid password"})
        }
        return done(null, user)
    }catch(err){
        return done(err)
    }
}))

passport.serializeUser((user, done)=>{
 done(null, user._id)
})

passport.deserializeUser(async (id, done)=>{
    try{
        //LOAD USER FROM DB
        const user = await userModel.findById(id).exec();
        if(!user) return done(null, false);
        return done(null, user);
    }catch(err){
        return done(err)
    }
})
module.exports = {
    initialize: passport.initialize(),
    session: passport.session(),
    setUser: (req, res, next)=>{
        res.locals.user = req.user;
        return next();
    },
    
};