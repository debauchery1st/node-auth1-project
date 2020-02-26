const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const knex = require("../database/dbConfig");
const KnexStore = require("connect-session-knex")(session); // use knex to store user sessions

const sessionConfig = {
  name: "monkey",
  secret: "typewriters",
  cookie: {
    maxAge: 1000 * 30,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexStore({
    knex,
    tablename: "sessions",
    createtable: true,
    sidfieldname: "sid",
    clearInterval: 1000 * 60 * 15
  })
};

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};
