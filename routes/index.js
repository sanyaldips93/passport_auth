const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../config/auth');

// Welcome
router.get('/', (req, res) => {
    res.render('welcome');
})

// Dashboad
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {
        name: req.user.name
    });
})

module.exports = router;
