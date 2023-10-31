'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const pdm_limit = sequelize.define(
    "pdm_limit",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      satis_limit: {
        type: DataTypes.INTEGER,
      },
      unsatis_limit: {
        type: DataTypes.INTEGER,
      },
      unaccept_limit: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "mst_set_limit",
    }
  );
  return pdm_limit;
};