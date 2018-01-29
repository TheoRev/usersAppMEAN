const express = require('express');
const router = express.Router();

const user = require('../models/user');

router.get('/users', (req, res) => {
    user.find({}, (eerr, users) => {
        res.json(users);
    });
});

router.post('/users', (req, res) => {
    console.log('Consumiendo el api rest POST');
    console.log(req.body);
    // res.send(req.body);
});

module.exports = router;