const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const lms = sequelize.define(
  "lms",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    video: {
      type: DataTypes.STRING,
    },
    audience: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "lms",
    timestamps: false,
  },
);

module.exports = lms;
