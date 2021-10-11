const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let FoodSchema = new Schema({
    foodId:{
        type: mongoose.Types.ObjectId
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    calories:{
        type: Number,
        required: true,
        trim: true,
    },
    protein:{
        type: Number,
        trim: true,
    },
    carbohydrates:{
        type: Number,
        trim: true,
    },
});


module.exports =mongoose.model('Foods', FoodSchema);

