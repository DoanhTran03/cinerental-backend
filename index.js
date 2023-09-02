const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');
const winston = require('winston');
Joi.objectId = require('joi-objectid')(Joi);
require('express-async-errors');

mongoose
.connect('mongodb+srv://admin:fXcbBocvP82Cqxrv@cluster0.39mk6ig.mongodb.net/vividly')
.then(() => console.log('Connected to databse'))
.catch(err => console.log(err)); 

const users = require('./routes/users');
const genres = require('./routes/genres');
const movies = require('./routes/movies');
const auth = require('./routes/auth');
const error = require('./middlewares/error');

app.use(express.json());
app.use('/api/users', users);
app.use('/api/genres',genres);
app.use('/api/movies',movies);
app.use('/api/auth', auth);
app.use(error);

winston.add(new winston.transports.File({filename: "unhandledError.txt"}));

process.on('uncaughtException', (err) => {
    winston.error(err.message,err);
})

process.on('unhandledRejection', (err) => {
    throw err;
})

app.listen(3000, () => console.log(`Backend is listening at http://localhost/3000`))