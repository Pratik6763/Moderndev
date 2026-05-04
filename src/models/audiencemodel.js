const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Audience = sequelize.define(
  "Audience",
  {
    audience: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ageRange: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "audience",
    timestamps: false,
  }
);

module.exports = Audience;
