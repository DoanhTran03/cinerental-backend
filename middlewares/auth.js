const jwt = require('jsonwebtoken');
const {User} = require('../models/user');
const config = require('config');

module.exports = async function(req,res,next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(404).send('Access denied');

    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));   
    
    const user = await User.findById(decoded._id);
    req.user = user;
    next();
}