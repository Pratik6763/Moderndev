const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Settings = sequelize.define(
  "Settings",
  {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    audience: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    audienceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "audience",
        key: "id",
      },
    },
  },
  {
    tableName: "settings",
    timestamps: false,
  }
);

module.exports = Settings;
