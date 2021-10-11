const mongoose = require('mongoose');
const emailValidator = require('email-validator');
let Schema = mongoose.Schema;


let UserSchema = new Schema(
    {
        userId:{type: mongoose.Types.ObjectId},
        name:{
            type: String,
            required: true,
            trim: true,
        },
        username:{
            type: String,
            required: true,
            trim: true,
            index:{ unique: true},
            minlength: 3
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            index:{ unique: true},
            validate:{
                validator: emailValidator.validate,
                message: props => `${props.value} is not a valid email`
            }
        },
        password: {
            type: String,
            required: true,
            trim: true,
            index:{ unique: true},
            minlength: 8
        }, 
        caloricGoal: {
            type: Number, 
            required: true
        },
        currentWeight: {
            type: Number, 
            required: true
        },
        goalWeight: {
            type: Number,
            required: true
        }
    },
    {
        timestamps:true,
    }
);
UserSchema.virtual('uuId').get(function(){
    return this.userId;
});


module.exports =mongoose.model('User', UserSchema);