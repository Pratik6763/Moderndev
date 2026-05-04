const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Survey = sequelize.define(
  "survey",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    audience: {
      type: DataTypes.STRING,
      field: "audienece",
    },   
  },
  {
    tableName: "survey",
    timestamps: false,
  }
);

module.exports = Survey;
