const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        minlength: 3,
        maxlength: 15,
        require: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 1200,
        required: true
    }
    ,
    email: {
        type: String,
        require: true,
        minlength: 6,
        maxLength: 100,
        validate : {
            validator: function(v) {
                const result = v.match(/@email.com/);
                if(!result) return false;
                else return true;
            },
            message: 'The email format is inappropriate'
        },
        unique: true,
    },
    age: {
        type: Number,
        min: 10,
        max: 100,
        required: true,
    }
})

userSchema.methods.generateToken = function () {
    const token = jwt.sign({_id: this._id}, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('user', userSchema);

const validateUser = (user) => {
    const schema = {
        name: Joi.string().min(3).max(15).required(),
        password: Joi.string().min(6).max(25).required(),
        email: Joi.string().email().min(6).max(100).required(),
        age: Joi.number().min(10).max(100).required()
    }
    const {error} = Joi.validate(user, schema);
    return error;
}

module.exports.validateUser = validateUser;
module.exports.userSchema = userSchema;
module.exports.User = User;