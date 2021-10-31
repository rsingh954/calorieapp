const mongoose = require('mongoose');
const emailValidator = require('email-validator');
let Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;

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
        },
        currentWeight: {
            type: Number, 
        },
        goalWeight: {
            type: Number,
        }
    },
    {
        timestamps:true,
    }
);

UserSchema.pre('save', async function preSave(next){
    const user = this;
    if(!user.isModified('password'))return next();
    try{
        const hash = await bcrypt.hash(user.password,  SALT_ROUNDS);
        user.password = hash;
        return next()
    }catch(err){
        return next(err)
    }
});

UserSchema.methods.comparePassword = async function comparePassword(candidate){
    return bcrypt.compare(candidate, this.password);
}
UserSchema.virtual('uuId').get(function(){
    return this.userId;
});


module.exports =mongoose.model('User', UserSchema);