const mongoose = require('mongoose');  
const winston = require('winston');
const config = require('config'); 

module.exports = function () {
  console.log(`${config.get('mongoUrl')}`);
  mongoose
    .connect(
      `${config.get('mongoUrl')}`
    )
    .then(() => winston.info("Connected to databse"));
};
