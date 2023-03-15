'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan_Application__c extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Loan_Application__c.init({
    first_name__c: DataTypes.STRING,
    last_name__c: DataTypes.STRING,
    email__c: DataTypes.STRING,
    address_line_1__c: DataTypes.STRING,
    address_line_2__c: DataTypes.STRING,
    city__c: DataTypes.STRING,
    postcode__c: DataTypes.STRING,
    employment_status__c: DataTypes.STRING,
    annual_income__c: DataTypes.DECIMAL,
    residential_status__c: DataTypes.STRING,
    monthly_mortgage_rent__c: DataTypes.DECIMAL,
    other_outgoings__c: DataTypes.DECIMAL,
    
  }, {
    sequelize,
    modelName: 'loan_application__c', //Case sensitive
    freezeTableName: true, // Important when using Heroku Connect as table will be created for us
    schema: "salesforce", // Important, Heroku Connect will automatically create this schema for us
    id: false,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });

  Loan_Application__c.removeAttribute('id'); // We don't need to generate a id, SF does that for us

  return Loan_Application__c;
};