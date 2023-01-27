const express = require('express');
const router = express.Router();
const Rate = require('../models').Rate;
const { Op } = require("sequelize");
const { check, validationResult } = require("express-validator");
// GET /rate?amount&term
router.get('/rate', [
  check("amount").isInt({ min: 100, max: 15000 }),
  check("term").isInt({ min: 12, max: 48 })
], async function(req, res, next) {

    // Validate presence of query string params
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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

router.post("/application", (req, res, next) => {
  console.debug(req.body);
  res.send("Ok!");
});

module.exports = router;