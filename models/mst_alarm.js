'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mst_alarm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mst_alarm.init({
    device: DataTypes.STRING,
    node: DataTypes.STRING,
    description: DataTypes.STRING,
    tableId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mst_alarm',
  });
  return mst_alarm;
};