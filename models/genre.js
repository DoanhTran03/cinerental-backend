const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    }
})

const Genre = mongoose.model('genre', genreSchema);

const validateGenre = (genre) => {
    const schema = {
        name: Joi.string().min(3).max(20).required(),
    }
    const {error} = Joi.validate(genre,schema);
    return error;
}

module.exports.validateGenre = validateGenre;
module.exports.Genre = Genre;
module.exports.genreSchema = genreSchema;
