const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      format.errors({ stack: false }),
      format.splat(),
      format.json(),
      format.simple(),
      format.prettyPrint(),
      format.colorize(),
    ),
    defaultMeta: { service: "your-service-name" },
    transports: [
      new transports.File({ filename: "exception.log"}),
      new transports.Console(),
    ],
  });

  module.exports = logger;
  