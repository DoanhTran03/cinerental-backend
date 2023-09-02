const express = require('express');
const router = express.Router();
const {User, validateUser} = require('../models/user');

router.get('/', async (req, res) => {
    const result = await User.find({}).sort({name: 1}).lean();
    res.send(result);
})

router.post ('/', async (req,res) => {
    const error = validateUser(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    )
    const result = await user.save();
    res.send(result);
})

router.put('/:id', async (req,res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User with specified ID is not found!');

    const error = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    user.name = req.body.name,
    user.email = req.body.email,
    user.age = req.body.age

    const result = await user.save();
    res.send(result);
})

router.delete('/:id', async (req,res) => {
    const result = await User.findByIdAndRemove(req.params.id);
    res.send(result);  
})

router.get('/:id', async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).send('User with specified ID is not found');
})

module.exports = router;