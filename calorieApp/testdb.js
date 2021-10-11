#! /usr/bin/env node

console.log('testing db insertions');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var User = require('./models/User')
var Journal = require('./models/Journal')
var Foods = require('./models/Foods')
var users = [];
var foods = [];
var journals = [];
let d = Date().toString().split(" ")[0] + " " + Date().toString().split(" ")[1] + " " +Date().toString().split(" ")[2];
var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const userId = '616226213993749ca7500aac'
const foodId = '6161fec27f3d4cc05ae6c3a4'

function userCreate(name, username, email, password, calorieGoal, currentWeight, goalWeight, cb) {
  userdetail = {name:name , username: username,email:email, password: password, caloricGoal: calorieGoal, currentWeight: currentWeight, goalWeight: goalWeight}
  User.init();
         
    var user = new User(userdetail)
    user.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New User: ' + user);
      users.push(user)
      cb(null, user)
    }  );
  }
  
  function callback(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+results);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
}



// userCreate("bing","bingbong",'singhrajaca@gmail.com','password123', 1600,190, 173, callback);

function addFood(name, calories, protein, carbohydrates, cb) {
  foodDetail = {name:name , calories: calories,protein:protein, carbohydrates: carbohydrates}

    var food = new Foods(foodDetail)
    food.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New Food: ' + food);
      foods.push(food)
      cb(null, food)
    }  );
  }
  
  function callback(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+results);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
}

// addFood("Hot Cheetos", 560, 2,56, callback)
function addJournal(name, date, calories, protein, carbohydrates, cb) {
  jorunalEntry = {name:name, calories: calories,protein:protein, carbohydrates: carbohydrates}

    var journal = new Journal()
    journal.userId = userId;
    journal.date = date;
    journal.foods.push(jorunalEntry)
    journal.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New Entrty: ' + journal);
      journals.push(journal)
      cb(null, journal)
    }  );
  }
  
  function callback(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+results);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
}

//addJournal("Hot Cheetos",d, 560, 2, 56,callback);

function updateFood(name, calories, protein, carbohydrates, cb){
  jorunalEntry = {name:name, calories: calories,protein:protein, carbohydrates: carbohydrates}
  Journal.updateOne(
    {_id: "61639ae752c4abd0db119e0d"},
    {
      $push: {
        foods: jorunalEntry
      }
    },function(error, success){
      if (error) {
        console.log(error);
    } else {
        console.log(success);
    }
    mongoose.connection.close();

    }
  )

}

updateFood("Bacon", 640, 2, 56,callback);