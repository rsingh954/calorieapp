const API_KEY = 'UGmZY9ss0Ig2sM0eoBhEIhzJ7ihYmxtfI9lH8eyJ'
let data = [];

async function findFood(){
    try{
     let q = 'cheese'
     const response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key='+`${API_KEY}`+'&query='+`${q}`, {mode: 'cors'});
     const res = await response.json();
    return res
    }catch(error){
        console.log(error)
    }
 }

