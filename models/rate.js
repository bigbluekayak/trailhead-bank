'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rate.init({
    min: DataTypes.DECIMAL,
    max: DataTypes.DECIMAL,
    term: DataTypes.INTEGER,
    rate: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};