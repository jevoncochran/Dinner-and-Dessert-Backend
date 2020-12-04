const express = require('express');
const cors = require('cors');

const menuRouter = require('../menu/menu-router');

const server = express();

server.use(cors());

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

server.use('/api/menu', menuRouter);

module.exports = server;