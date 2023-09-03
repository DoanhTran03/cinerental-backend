const logger = require('../logger/logger')
module.exports = function() {
    process.on('uncaughtException', (err) => {
        logger.error(err);
        process.exit(1);
      })
      
      process.on('unhandledRejection', (err) => {
        throw err
      })
}