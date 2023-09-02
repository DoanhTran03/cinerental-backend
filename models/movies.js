const mongoose = require('mongoose');
const {genre} = require('./genre');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true
    },
    //REFERENCE TO genre model
    genreId: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        default: new Date()
    },
    length: {
        type: Number,
        min: 10,
        max: 200,
        required: true,
    }
})

const Movie = mongoose.model('movie', movieSchema);

const validateMovie = (movie) => {
    const schema = {
        name: Joi.string().min(3).max(30).required(),   
        genreId: Joi.string().required(),
        releaseDate: Joi.date().required(),
        length: Joi.number().min(10).max(200).required(),
    }
    const {error} = Joi.validate(movie,schema);
    return error
}

module.exports.validateMovie = validateMovie;
module.exports.Movie = Movie;
module.exports.movieSchema = movieSchema;
