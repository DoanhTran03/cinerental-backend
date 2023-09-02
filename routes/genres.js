const express = require('express');
const { route } = require('./users');
const router = express.Router();
const {Genre, validateGenre} = require('../models/genre');

router.get('/', async (req,res) => {
    const result = await Genre.find({}).sort({name:1}).lean();
    res.send(result);  
})

router.post('/', async (req,res) => {
    const error = validateGenre(req.body);
    if(error) return res.status(401).send(error.details[0].message);   

    const genre = new Genre ({
        name: req.body.name
    })

    const result = await genre.save();
    return res.send(result);
})

router.put('/:id', async (req,res) => {
    const genre = await Genre.findById(req.params.id);
    if(!genre) res.status

    const error = validateGenre(req.body);
    if(error) return res.status(401).send(error.details[0].message);

    genre.name = req.body.name;

    const result = await genre.save();
    return res.send(result);
})

router.delete('/:id', async (req,res) => {
    const result = await Genre.findByIdAndRemove(req.params.id);
    return res.send(result);
})

module.exports = router;