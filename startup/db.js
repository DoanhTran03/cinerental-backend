const mongoose = require('mongoose');  
const config = require('config'); 
const logger = require('../logger/logger');

module.exports = function () {
  mongoose
    .connect(
      `${config.get('mongoUrl')}`
    )
    .then(() => logger.info("Connected to databse"));
};
