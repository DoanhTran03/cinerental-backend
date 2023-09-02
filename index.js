const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://admin:fXcbBocvP82Cqxrv@cluster0.39mk6ig.mongodb.net/vividly')
.then(() => console.log('Connected to databse'))
.catch(err => console.log(err)); 

const users = require('./routes/users');
const genres = require('./routes/genres');

app.use(express.json());
app.use('/api/users', users);
app.use('/api/genres',genres);

app.listen(3000, () => console.log(`Backend is listening at http://localhost/3000`))