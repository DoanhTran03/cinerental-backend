const winston = require('winston');
const config = require('config');

module.exports = function () {
    winston.add(new winston.transports.File({filename: "unhandledError.txt"}));
    winston.add(new winston.transports.Console);
    
    process.on('uncaughtException', (err) => {
        winston.error(err.message,err);
        process.exit(1);
    })
    
    process.on('unhandledRejection', (err) => {
        throw err;
    })

    if(!config.get('jwtPrivateKey')) {
        throw new Error ("Private Key is missing");
    }

    if(!config.get('mongoUrl')) {
        throw new Error ("Mongo URL is missing");
    }
}