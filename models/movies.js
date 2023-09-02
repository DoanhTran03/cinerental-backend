const mongoose = require('mongoose');
const {genre} = require('./genre');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

mongoose
.connect('mongodb+srv://admin:fXcbBocvP82Cqxrv@cluster0.39mk6ig.mongodb.net/vividly')
.then(() => console.log('Connected to databse'))
.catch(err => console.log(err)); 

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true
    },
    genreId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genre",
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

const movie = new Movie({
    name: "Starwar",
    genre: "64f34f566f34e03afcdf7044",
    releaseDate: new Date("0000-03-25"),
    length: 120
})

const validateMovie = (movie) => {
    const schema = {
        name: Joi.string().min(3).max(30).required(),   
        genreId: Joi.objectId().required(),
        releaseDate: Joi.date().required(),
        length: Joi.number().min(10).max(200).required(),
    }
    const {error} = Joi.validate(movie,schema);
    return error
}
