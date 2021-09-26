const API_KEY = 'UGmZY9ss0Ig2sM0eoBhEIhzJ7ihYmxtfI9lH8eyJ'
let data;
import fetch from "node-fetch";

//  module.exports.findFood = async function(q){
//      await findFood(q)
//  }

 async function findFood(q){
     // if(q == "" || q == null) return
     q = 'cheese'
     const response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key='+`${API_KEY}`+'&query='+`${q}`, {mode: 'cors'});
     const data = await response.json();
     return data
 }

// module.exports = {
//     findFood: async (q) =>{
//         q = 'cheese'
//         const response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key='+`${API_KEY}`+'&query='+`${q}`, {mode: 'cors'});
//         const data = await response.json();
//         return data
//     }
// }
module.exports = findFood()