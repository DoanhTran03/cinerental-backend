const mongoose = require('mongoose');

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
    }
})
const User = mongoose.model('user', userSchema);

const user = new User ({
    name: 'Ro',
    email: 'robert@email.com',
    age: 30
})
