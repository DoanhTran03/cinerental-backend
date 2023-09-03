const config = require('config');
module.exports = function () {
    if(!config.get('jwtPrivateKey')) {
        throw new Error ("Private Key is missing");
    }

    if(!config.get('mongoUrl')) {
        throw new Error ("Mongo URL is missing");
    }
}