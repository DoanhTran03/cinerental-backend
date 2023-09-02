const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

mongoose
.connect('mongodb+srv://admin:fXcbBocvP82Cqxrv@cluster0.39mk6ig.mongodb.net/vividly')
.then(() => console.log('Connected to databse'))
.catch(err => console.log(err)); 

const users = require('./routes/users');
const genres = require('./routes/genres');
const movies = require('./routes/movies');
const auth = require('./routes/auth');

app.use(express.json());
app.use('/api/users', users);
app.use('/api/genres',genres);
app.use('/api/movies',movies);
app.use('/api/auth', auth);

app.listen(3000, () => console.log(`Backend is listening at http://localhost/3000`))