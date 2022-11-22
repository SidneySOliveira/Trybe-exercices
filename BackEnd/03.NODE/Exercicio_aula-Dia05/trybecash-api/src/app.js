const express = require('express');
const path = require('path');
const peopleRoutes = require(path.resolve(__dirname, './routes/peopleRoutes'));

const app = express();

app.use(express.json());
app.use('/people', peopleRoutes);

module.exports = app;