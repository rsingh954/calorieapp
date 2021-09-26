const API_KEY = 'UGmZY9ss0Ig2sM0eoBhEIhzJ7ihYmxtfI9lH8eyJ'
let data;
import fetch from 'node-fetch'
 async function findFood(){
     let q = 'cheese'
     const response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key='+`${API_KEY}`+'&query='+`${q}`, {mode: 'cors'});
     const data = await response.json();
     return data
 }

module.exports = findFood
