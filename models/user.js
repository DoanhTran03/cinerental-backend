const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        minlength: 3,
        maxlength: 15,
        require: true
    },
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
        }
    },
    age: {
        type: Number,
        min: 10,
        max: 100,
        required: true,
    }
})
const User = mongoose.model('user', userSchema);

const validateUser = (user) => {
    const schema = {
        name: Joi.string().min(3).max(15).required(),
        email: Joi.string().email().min(6).max(100).required(),
        age: Joi.number().min(10).max(100).required()
    }
    const {error} = Joi.validate(user, schema);
    return error;
}

console.log(validateUser({name: "Robert", email: "robert@gmail.com", age: 10}));