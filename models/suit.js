'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Suit.hasMany(models.Card, { foreignKey: 'suitId' });
    }
  };
  suit.init({
    suit: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'suit',
  });
  return suit;
};