const mongoose = require('mongoose');  
const winston = require('winston');
 
module.exports = function () {
  mongoose
    .connect(
      "mongodb+srv://admin:fXcbBocvP82Cqxrv@cluster0.39mk6ig.mongodb.net/vividly"
    )
    .then(() => winston.info("Connected to databse"));
};
