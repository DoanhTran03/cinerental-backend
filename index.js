const express = require("express");
require("express-async-errors");
const app = express();
const logger = require('./logger/logger');

const PORT = process.env.PORT || 3000;

require('./startup/error')();
require("./startup/config")();
require("./startup/routes")(app);
require("./startup/validate")();
require("./startup/db")();

app.listen(PORT, () =>
  logger.info(`Backend is listening at http://localhost:${PORT}`)
);