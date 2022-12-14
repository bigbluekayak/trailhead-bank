const express = require('express');
const router = express.Router();
const path = require('path');
const Rate = require('../models/rate');

// GET /rates
router.get('/rates', async function(req, res, next) {
    res.json({status:"Ok"});
});

// GET /rate
router.get('/rate', function(req, res, next) {
    res.json({status: "ok"});
  });

module.exports = router;