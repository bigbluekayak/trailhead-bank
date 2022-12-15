const express = require('express');
const router = express.Router();
const Rate = require('../models').Rate;
const { Op } = require("sequelize");

// GET /rate?amount&term
router.get('/rate', async function(req, res, next) {
    const amount = req.query.amount;
    const term = req.query.term;
    const rate = await Rate.findOne({
      attributes: ["rate"],
      where: {
        [Op.and]: {
          min: {
            [Op.lte]: amount
          },
          max: {
            [Op.gte]: amount
          },
          term: term
        }
      }
    });
    res.json(rate);
  });

module.exports = router;