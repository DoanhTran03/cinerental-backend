const winston = require('winston');
module.exports = function () {
    winston.add(new winston.transports.File({filename: "unhandledError.txt"}));
    process.on('uncaughtException', (err) => {
        winston.error(err.message,err);
    })
    
    process.on('unhandledRejection', (err) => {
        throw err;
    })
}