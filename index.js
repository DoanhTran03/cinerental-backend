const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');
const winston = require('winston');
Joi.objectId = require('joi-objectid')(Joi);
require('express-async-errors');


require('./startup/db')(); 
require('./startup/routes')(app);

winston.add(new winston.transports.File({filename: "unhandledError.txt"}));

process.on('uncaughtException', (err) => {
    winston.error(err.message,err);
})

process.on('unhandledRejection', (err) => {
    throw err;
})

app.listen(3000, () => console.log(`Backend is listening at http://localhost/3000`))