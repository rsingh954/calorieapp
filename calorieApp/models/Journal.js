const mongoose = require('mongoose');
const User = require('../models/User')
let Schema = mongoose.Schema;


let JournalSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId, ref: 'Users'
    },
    date:{
        type: String
    },
    foods:[{
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
        }
    }],
    total: {
        type: Number
    }
})

module.exports =mongoose.model('Journal', JournalSchema);