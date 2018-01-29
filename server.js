const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1')

const app = express()

// MongoDB 
mongoose.connect('mongodb://localhost/meandb');

// API Routes
app.use('/', apiRouter)

// Midleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public/dist')));

app.listen(3000, () => {
    console.log('Server run on port :3000');
});