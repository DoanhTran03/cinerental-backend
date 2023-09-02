const express = require('express');
const router = express.Router();
const {User, validateUser} = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');

router.get('/',auth, async (req, res) => {
    const result = await User.find({}).sort({name: 1}).lean();
    res.send(result);
})

router.post ('/', async (req,res) => {
    const error = validateUser(req.body);
    if (error) return res.status(404).send(error.details[0].message);
    
    const checkUser = await User.findOne({email: req.body.email}).lean();
    console.log(checkUser);
    if (checkUser) return res.status(401).send('Email has been registered!');

    const salt = await bcrypt.genSalt(10);

    const user = new User(
        {
            name: req.body.name,
            password: await bcrypt.hash(req.body.password, salt),
            email: req.body.email,
            age: req.body.age
        }
        )
    const result = await user.save();

    res.header('x-auth-token', result.generateToken()).send(result);
})

router.put('/:id',auth, async (req,res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User with specified ID is not found!');

    const error = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const salt = await bcrypt.genSalt(10);

    user.name = req.body.name,
    user.password = await bcrypt.hash(req.body.password, salt);
    user.email = req.body.email,
    user.age = req.body.age

    const result = await user.save();
    res.send(result);
})

router.delete('/:id', auth, async (req,res) => {
    const result = await User.findByIdAndRemove(req.params.id);
    res.send(result);  
})

router.get('/:id', async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).send('User with specified ID is not found');
})

module.exports = router;