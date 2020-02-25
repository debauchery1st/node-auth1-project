const express = require("express");
const configureMiddleware = require("./configMiddleware");
const apiRouter = require("./api-router");
const server = express();
configureMiddleware(server);

server.use("/api", apiRouter);

module.exports = server;
