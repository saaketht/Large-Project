const express = require('express');
const client = require('../config/db.js');

const app = express.Router();

// create pin
app.post('/pins/Create', async (req, res, next) => {

    await client.connect();

    res.status(200).json("in");
});

module.exports = app;