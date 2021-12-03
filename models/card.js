'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Card.belongsTo( models.Suit, { foreignKey: 'suitId' } );
    }
  };
  card.init({
    number: DataTypes.STRING,
    suit: DataTypes.STRING,
    color: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'card',
  });
  return card;
};