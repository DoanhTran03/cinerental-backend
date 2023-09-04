const express = require('express');
const router = express.Router();
const {Movie, validateMovie} = require('../models/movies');
const auth = require('../middlewares/auth');
const {Genre} = require('../models/genre');

router.get('/',auth, async (req,res) => {
    const result = await Movie.find({})
    .sort({name: 1})
    .populate('genreId',{_id: 1, name: 1})
    .lean();
    return res.send(result);
})

router.post('/',auth, async (req,res) => {
    const error = validateMovie(req.body);
    if (error) return res.status(401).send(error.details[0].message);

    const movie = new Movie({
        name: req.body.name,
        genreId: req.body.genreId,
        releaseDate: new Date(req.body.releaseDate),
        length: req.body.length,
    })

    const result = await movie.save();
    return res.send(result);    
})

router.put('/:id',auth, async (req,res) => {
    const movie = await Movie.findById(req.params.id);
    if(!movie) res.status(404).send('Movie with specified ID is not found');

    const error = validateMovie(req.body);
    if(error) return res.status(401).send(error.details[0].message);

    movie.name = req.body.name;
    movie.genreId = req.body.genreId,
    movie.releaseDate = new Date(req.body.releaseDate);
    movie.length = req.body.length

    const result = await movie.save();
    return res.send(result);
})

router.delete('/:id',auth, async (req,res) => {
    const result = await Movie.findByIdAndRemove(req.params.id);
    return res.send(result);
})

module.exports = router;