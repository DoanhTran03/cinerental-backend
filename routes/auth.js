const express = require('express');
const {User} = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async (req,res) => {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(404).send('Email has not been registered');

    const isValid = await bcrypt.compare(req.body.password, user.password);
    
    if (!isValid) return res.status(401).send('Email or password is not invalid');

    return res.send(user.generateToken());
})

module.exports = router;