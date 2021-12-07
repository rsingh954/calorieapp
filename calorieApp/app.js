var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config({path: 'calorieApp/.env'})
var auth = require('./helper/auth');
var indexRouter = require('./routes/index');
var foodsRouter = require('./routes/foods');
var journalRouter = require('./routes/journal')
var usersRouter = require('./routes/users')
var homeRouter = require('./routes/home')
var app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = process.env.DB_URL;
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//SESSION
app.use(session({
  secret: 'very secret',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
}))
//AUTH MIDDLEWARE 
app.use(auth.initialize);
app.use(auth.session);
app.use(auth.setUser);
//ROUTES
app.use('/', indexRouter);
app.use('/foods', foodsRouter);
app.use('/users', usersRouter)
app.use('/journal', journalRouter)
app.use('/home', homeRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) =>{
  try{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  return next()
  }catch(err){  // render the error page
    res.status(err.status || 500);
    res.render('error');
  }
});


module.exports = app;
