const express = require('express');
const users = require("../routes/users");
const genres = require("../routes/genres");
const movies = require("../routes/movies");
const auth = require("../routes/auth");
const error = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/genres", genres);
  app.use("/api/movies", movies);
  app.use("/api/auth", auth);
  app.use(error);
};
