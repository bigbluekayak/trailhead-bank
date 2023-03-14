const express = require('express');
const router = express.Router();
const Rate = require('../models').Rate;
const Loan_Application__c = require('../models').Loan_Application__c;
const { Op } = require("sequelize");
const { check, validationResult, body } = require("express-validator");

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

// POST /application
router.post("/application", [
  body("first_name__c").exists(),
  body("last_name__c").exists(),
  body("email__c").exists().isEmail(),
  body("address_line_1__c").exists(),
  body("city__c").exists(),
  body("postcode__c").exists(),
  body("employment_status__c").exists(),
  body("annual_income__c").exists(),
  body("residential_status__c").exists(),
  body("monthly_mortgage_rent__c").exists(),
  body("other_outgoings__c").exists()
],(req, res, next) => {
  console.debug(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const loanApplication = Loan_Application__c.create(req.body)

  res.send(loanApplication);
});

module.exports = router;