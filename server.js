const express = require('express');
const path = require('path');
const app = express()

const bodyParser = require('body-parser');
const morgan = require('morgan');

// Midleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public/dist')));

app.listen(3000, () => {
    console.log('Server run on port :3000');
});